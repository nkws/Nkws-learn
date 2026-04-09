import { useCallback, useRef, useEffect } from "react";
import { cleanForSpeech } from "../utils/parseClock";

// Preferred voices — female English voices ranked by quality on iOS/macOS
const PREFERRED_VOICES = [
  "samantha",
  "karen",
  "moira",
  "tessa",
  "martha",
  "fiona",
  "google uk english female",
  "google us english",
];

function pickBestVoice(voices) {
  for (const pref of PREFERRED_VOICES) {
    const match = voices.find(
      (v) => v.name.toLowerCase().includes(pref) && v.lang.startsWith("en")
    );
    if (match) return match;
  }
  // Fall back to any female-sounding English voice (heuristic: avoid "male"/"david"/"daniel"/"james")
  const maleNames = ["male", "david", "daniel", "james", "tom", "alex", "fred", "ralph"];
  const nonMale = voices.find(
    (v) =>
      v.lang.startsWith("en") &&
      !maleNames.some((m) => v.name.toLowerCase().includes(m))
  );
  if (nonMale) return nonMale;
  return voices.find((v) => v.lang.startsWith("en")) || null;
}

// Promise that resolves once voices are loaded
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
    // Timeout fallback — some browsers never fire voiceschanged
    setTimeout(() => resolve(synth.getVoices()), 1000);
  });
  return voicesReady;
}

export function useTTS() {
  const voiceRef = useRef(null);
  const readyRef = useRef(false);

  useEffect(() => {
    waitForVoices().then((voices) => {
      if (voices.length > 0) {
        voiceRef.current = pickBestVoice(voices);
      }
      readyRef.current = true;
    });
  }, []);

  const makeUtterance = useCallback((text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.3;
    if (voiceRef.current) {
      utterance.voice = voiceRef.current;
    } else {
      utterance.lang = "en-GB";
    }
    return utterance;
  }, []);

  // speak(text) or speak(text, choices) — choices are read after with pauses
  const speak = useCallback((text, choices) => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();

    const cleaned = cleanForSpeech(text);
    const sentences = cleaned
      .split(/(?<=[.!?])\s+/)
      .filter((s) => s.trim().length > 0);

    const doSpeak = () => {
      for (const sentence of sentences) {
        synth.speak(makeUtterance(sentence));
      }

      if (choices && choices.length > 0) {
        // Brief pause then read "Your options are:"
        synth.speak(makeUtterance("Your options are."));
        const labels = ["A", "B", "C", "D", "E"];
        choices.forEach((choice, i) => {
          synth.speak(makeUtterance(`${labels[i]}. ${choice}.`));
        });
      }
    };

    if (!readyRef.current) {
      waitForVoices().then((voices) => {
        if (!voiceRef.current && voices.length > 0) {
          voiceRef.current = pickBestVoice(voices);
        }
        readyRef.current = true;
        doSpeak();
      });
    } else {
      doSpeak();
    }
  }, [makeUtterance]);

  // Call this during a user gesture to unlock speech on iOS
  const unlock = useCallback(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const u = new SpeechSynthesisUtterance("");
    u.volume = 0;
    synth.speak(u);
  }, []);

  return { speak, unlock };
}
