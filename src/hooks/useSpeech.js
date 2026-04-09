import { useCallback, useRef, useEffect } from "react";
import { cleanForSpeech } from "../utils/parseClock";

// Preferred voices ranked by quality (iOS/macOS have enhanced versions)
const PREFERRED_VOICES = [
  "samantha",  // iOS enhanced — natural female
  "karen",     // iOS Australian English — friendly
  "moira",     // iOS Irish English
  "tessa",     // iOS South African English
  "martha",    // iOS
  "fiona",     // iOS British
  "google uk english female",
  "google us english",
];

function pickBestVoice(voices) {
  // Try preferred voices first (case-insensitive partial match)
  for (const pref of PREFERRED_VOICES) {
    const match = voices.find(
      (v) => v.name.toLowerCase().includes(pref) && v.lang.startsWith("en")
    );
    if (match) return match;
  }
  // Fall back to any English voice
  return voices.find((v) => v.lang.startsWith("en")) || null;
}

export function useTTS() {
  const voiceRef = useRef(null);

  // Voices load asynchronously on some browsers
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis?.getVoices() || [];
      if (voices.length > 0) {
        voiceRef.current = pickBestVoice(voices);
      }
    };

    loadVoices();
    window.speechSynthesis?.addEventListener?.("voiceschanged", loadVoices);
    return () => {
      window.speechSynthesis?.removeEventListener?.("voiceschanged", loadVoices);
    };
  }, []);

  const speak = useCallback((text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const cleaned = cleanForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.rate = 0.9;
    utterance.pitch = 1.05;

    if (voiceRef.current) {
      utterance.voice = voiceRef.current;
    } else {
      utterance.lang = "en-GB";
    }

    window.speechSynthesis.speak(utterance);
  }, []);

  return { speak };
}
