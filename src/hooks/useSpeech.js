import { useState, useCallback, useRef } from "react";
import { cleanForSpeech } from "../utils/parseClock";

export function useTTS() {
  const speak = useCallback((text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const cleaned = cleanForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    utterance.lang = "en-SG";
    window.speechSynthesis.speak(utterance);
  }, []);

  return { speak };
}

export function useVoiceInput() {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = useCallback((onResult) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-SG";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  return { listening, startListening, stopListening };
}
