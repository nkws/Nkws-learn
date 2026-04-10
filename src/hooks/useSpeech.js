import { useCallback, useRef, useEffect } from "react";
import { cleanForSpeech } from "../utils/parseClock";

const PREFERRED_EN = ["samantha", "karen", "moira", "tessa", "martha", "fiona", "google uk english female"];
const PREFERRED_ZH = ["tingting", "meijia", "sinji", "google 普通话", "google mandarin"];

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
  langRef.current = lang;

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
    utterance.rate = isZh ? 0.8 : 0.9;
    utterance.pitch = isZh ? 1.0 : 1.3;
    if (voiceRef.current) {
      utterance.voice = voiceRef.current;
    } else {
      utterance.lang = isZh ? "zh-CN" : "en-GB";
    }
    return utterance;
  }, []);

  const speak = useCallback((text, choices) => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();

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
        const labels = ["A.", "B.", "C.", "D.", "E."];
        const pause = new SpeechSynthesisUtterance(" ");
        pause.volume = 0;
        pause.rate = 0.1;
        synth.speak(pause);

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
