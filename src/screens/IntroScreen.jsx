import { useState } from "react";
import Clock from "../components/Clock";

export default function IntroScreen({ intro, onFinish }) {
  const [pageIndex, setPageIndex] = useState(0);
  const page = intro.pages[pageIndex];
  const isLast = pageIndex === intro.pages.length - 1;

  return (
    <div className="screen intro-screen">
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

        <p className="intro-text">{page.text}</p>
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
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            ← Back
          </button>
        )}
        <button
          className="btn-primary intro-next-btn"
          onClick={() => {
            if (isLast) {
              onFinish();
            } else {
              setPageIndex(pageIndex + 1);
            }
          }}
        >
          {isLast ? "Start Quiz!" : "Next →"}
        </button>
      </div>
    </div>
  );
}
