import { useCallback, useRef, useEffect } from "react";
import { cleanForSpeech } from "../utils/parseClock";

// Preference order: modern enhanced/neural voices first (better quality on
// iOS 17+, Android Chrome, Edge), then the older Apple voices as fallback.
// pickVoice does a case-insensitive `includes` match on voice.name so
// variants like "Samantha (Enhanced)" and "Microsoft Aria Online (Natural) -
// English (United States)" all match.
const PREFERRED_EN = [
  "ava (premium)", "zoe (premium)", "nicky (premium)", "samantha (enhanced)",
  "google us english", "microsoft aria online", "microsoft jenny online",
  "samantha", "karen", "moira", "tessa", "martha", "fiona", "google uk english female",
];
const PREFERRED_ZH = [
  "tingting (enhanced)", "mei-jia (enhanced)", "meijia (enhanced)",
  "microsoft xiaoxiao online", "microsoft yunxi online",
  "google 中文（普通话",
  "tingting", "meijia", "sinji", "google 普通话", "google mandarin",
];

const MALE_NAMES = ["male", "david", "daniel", "james", "tom", "alex", "fred", "ralph"];

function pickVoice(voices, lang) {
  const isZh = lang === "zh";
  const langPrefix = isZh ? "zh" : "en";
  const preferred = isZh ? PREFERRED_ZH : PREFERRED_EN;

  // Try preferred voices first
  for (const pref of preferred) {
    const match = voices.find(
      (v) => v.name.toLowerCase().includes(pref) && v.lang.toLowerCase().startsWith(langPrefix)
    );
    if (match) return match;
  }

  // Fall back: any voice matching the language, avoiding male for English
  if (isZh) {
    return voices.find((v) => v.lang.toLowerCase().startsWith("zh")) || null;
  }

  const nonMale = voices.find(
    (v) =>
      v.lang.startsWith("en") &&
      !MALE_NAMES.some((m) => v.name.toLowerCase().includes(m))
  );
  return nonMale || voices.find((v) => v.lang.startsWith("en")) || null;
}

let voicesReady = null;
function waitForVoices() {
  if (voicesReady) return voicesReady;
  voicesReady = new Promise((resolve) => {
    const synth = window.speechSynthesis;
    if (!synth) { resolve([]); return; }
    const voices = synth.getVoices();
    if (voices.length > 0) { resolve(voices); return; }
    const onchange = () => {
      synth.removeEventListener("voiceschanged", onchange);
      resolve(synth.getVoices());
    };
    synth.addEventListener("voiceschanged", onchange);
    setTimeout(() => resolve(synth.getVoices()), 1000);
  });
  return voicesReady;
}

export function useTTS(lang = "en") {
  const voiceRef = useRef(null);
  const readyRef = useRef(false);
  const langRef = useRef(lang);

  useEffect(() => {
    langRef.current = lang;
  }, [lang]);

  useEffect(() => {
    waitForVoices().then((voices) => {
      if (voices.length > 0) {
        voiceRef.current = pickVoice(voices, langRef.current);
      }
      readyRef.current = true;
    });
  }, []);

  // Re-pick voice when language changes
  useEffect(() => {
    if (!readyRef.current) return;
    const voices = window.speechSynthesis?.getVoices() || [];
    if (voices.length > 0) {
      voiceRef.current = pickVoice(voices, lang);
    }
  }, [lang]);

  const makeUtterance = useCallback((text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const isZh = langRef.current === "zh";
    // Slightly snappier rates — premium/neural voices stay clear at natural
    // pace, and the old too-slow defaults made every readout feel sluggish.
    utterance.rate = isZh ? 0.95 : 1.0;
    utterance.pitch = isZh ? 1.0 : 1.3;
    if (voiceRef.current) {
      utterance.voice = voiceRef.current;
    } else {
      utterance.lang = isZh ? "zh-CN" : "en-GB";
    }
    return utterance;
  }, []);

  const speak = useCallback((text, choices, { cancel = true } = {}) => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (cancel) synth.cancel();

    // Add a pause before queued messages so they don't run together
    if (!cancel) {
      for (let p = 0; p < 3; p++) {
        const gap = new SpeechSynthesisUtterance(" ");
        gap.volume = 0;
        gap.rate = 0.1;
        synth.speak(gap);
      }
    }

    const isZh = langRef.current === "zh";
    const cleaned = cleanForSpeech(text);

    // For Chinese, split on Chinese punctuation too
    const splitRegex = isZh ? /(?<=[.!?。！？])\s*/ : /(?<=[.!?])\s+/;
    const sentences = cleaned.split(splitRegex).filter((s) => s.trim().length > 0);

    const doSpeak = () => {
      sentences.forEach((sentence, i) => {
        synth.speak(makeUtterance(sentence));
        // Add a pause between sentences (especially between reply and next question)
        if (i < sentences.length - 1) {
          const gap = new SpeechSynthesisUtterance(" ");
          gap.volume = 0;
          gap.rate = 0.1;
          synth.speak(gap);
        }
      });

      if (choices && choices.length > 0) {
        // Spoken labels — avoids TTS saying "Capital A"
        const labels = ["a.", "b.", "c.", "d.", "e."];
        // Longer pause before reading options
        for (let p = 0; p < 3; p++) {
          const pause = new SpeechSynthesisUtterance(" ");
          pause.volume = 0;
          pause.rate = 0.1;
          synth.speak(pause);
        }

        synth.speak(makeUtterance(isZh ? "选项是" : "Your options are"));
        choices.forEach((choice, i) => {
          const gap = new SpeechSynthesisUtterance(" ");
          gap.volume = 0;
          gap.rate = 0.1;
          synth.speak(gap);
          synth.speak(makeUtterance(labels[i]));
          synth.speak(makeUtterance(choice));
        });
      }
    };

    if (!readyRef.current) {
      waitForVoices().then((voices) => {
        if (!voiceRef.current && voices.length > 0) {
          voiceRef.current = pickVoice(voices, langRef.current);
        }
        readyRef.current = true;
        doSpeak();
      });
    } else {
      doSpeak();
    }
  }, [makeUtterance]);

  const unlock = useCallback(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const u = new SpeechSynthesisUtterance("");
    u.volume = 0;
    synth.speak(u);
  }, []);

  return { speak, unlock };
}
