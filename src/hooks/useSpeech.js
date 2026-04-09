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

  const speak = useCallback((text) => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();

    const cleaned = cleanForSpeech(text);

    // Split on sentence boundaries so TTS respects pauses at full stops and commas
    const sentences = cleaned
      .split(/(?<=[.!?])\s+/)
      .filter((s) => s.trim().length > 0);

    const doSpeak = () => {
      for (const sentence of sentences) {
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.rate = 0.9;
        utterance.pitch = 1.05;
        if (voiceRef.current) {
          utterance.voice = voiceRef.current;
        } else {
          utterance.lang = "en-GB";
        }
        synth.speak(utterance);
      }
    };

    // If voices haven't loaded yet, wait then speak
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
  }, []);

  return { speak };
}
