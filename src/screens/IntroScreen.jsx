import { useState } from "react";
import Clock from "../components/Clock";
import { useTTS } from "../hooks/useSpeech";

export default function IntroScreen({ intro, lang = "en", onFinish }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [speechUnlocked, setSpeechUnlocked] = useState(false);
  const page = intro.pages[pageIndex];
  const isLast = pageIndex === intro.pages.length - 1;
  const { speak } = useTTS(lang);

  const goNext = () => {
    if (isLast) {
      onFinish();
    } else {
      const nextPage = intro.pages[pageIndex + 1];
      setPageIndex(pageIndex + 1);
      if (speechUnlocked) {
        speak(nextPage.text);
      }
    }
  };

  const handleFirstSpeak = () => {
    speak(page.text);
    setSpeechUnlocked(true);
  };

  return (
    <div className="screen intro-screen">
      <button className="intro-skip-top" onClick={onFinish}>
        Skip ➜
      </button>

      <div className="intro-header">
        <span className="intro-mascot">🦊</span>
        <h1 className="intro-title">{intro.title}</h1>
      </div>

      <div className="intro-content">
        {page.clock && (
          <div className="intro-clock">
            <Clock hours={page.clock.h} minutes={page.clock.m} size={160} />
          </div>
        )}

        {page.emoji && (
          <div className="intro-emoji">{page.emoji}</div>
        )}

        <p className="intro-text">
          {page.text}
          {!speechUnlocked && (
            <button
              className="speak-btn"
              onClick={handleFirstSpeak}
              aria-label="Read aloud"
            >
              🔊
            </button>
          )}
        </p>
      </div>

      <div className="intro-dots">
        {intro.pages.map((_, i) => (
          <span
            key={i}
            className={`intro-dot ${i === pageIndex ? "intro-dot-active" : ""}`}
          />
        ))}
      </div>

      <div className="intro-actions">
        {pageIndex > 0 && (
          <button
            className="intro-back-btn"
            onClick={() => {
              const prevPage = intro.pages[pageIndex - 1];
              setPageIndex(pageIndex - 1);
              if (speechUnlocked) speak(prevPage.text);
            }}
          >
            ← Back
          </button>
        )}
        <button
          className="btn-primary intro-next-btn"
          onClick={goNext}
        >
          {isLast ? "Start Quiz!" : "Next →"}
        </button>
      </div>
    </div>
  );
}
