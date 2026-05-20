import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { useTTS } from "../hooks/useSpeech";

const PHASE = {
  WRITING: "writing",
  REVIEW: "review",
  DONE: "done",
};

export default function SpellingTestScreen({ listId, onBack }) {
  const { getList } = useSpellingLists();
  const list = getList(listId);
  const { speak } = useTTS(list?.lang === "zh" ? "zh" : "en");

  const words = useMemo(() => list?.words || [], [list]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState(PHASE.WRITING);
  const [snapshot, setSnapshot] = useState(null);
  const [results, setResults] = useState([]);
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const spokenForRef = useRef(-1);

  const currentWord = words[index] || "";

  // Resize the canvas to its CSS size on mount / orientation change.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#1A237E";
      ctx.lineWidth = 5;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
    };
  }, [index, phase]);

  // Speak the word once each time we land on it (in WRITING phase).
  useEffect(() => {
    if (phase !== PHASE.WRITING) return;
    if (!currentWord) return;
    if (spokenForRef.current === index) return;
    spokenForRef.current = index;
    const t = setTimeout(() => speak(currentWord), 250);
    return () => clearTimeout(t);
  }, [index, phase, currentWord, speak]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }, []);

  const getPoint = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches?.[0];
    const x = (touch ? touch.clientX : e.clientX) - rect.left;
    const y = (touch ? touch.clientY : e.clientY) - rect.top;
    return { x, y };
  };

  const startDraw = (e) => {
    e.preventDefault();
    drawingRef.current = true;
    lastPointRef.current = getPoint(e);
  };

  const moveDraw = (e) => {
    if (!drawingRef.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const p = getPoint(e);
    const last = lastPointRef.current;
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastPointRef.current = p;
  };

  const endDraw = (e) => {
    if (!drawingRef.current) return;
    e.preventDefault();
    drawingRef.current = false;
    lastPointRef.current = null;
  };

  const captureSnapshot = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.toDataURL("image/png");
  }, []);

  const handleCheck = () => {
    const data = captureSnapshot();
    setSnapshot(data);
    setPhase(PHASE.REVIEW);
  };

  const recordResult = (correct) => {
    const next = [...results, { word: currentWord, correct, image: snapshot }];
    setResults(next);
    if (index + 1 >= words.length) {
      setPhase(PHASE.DONE);
    } else {
      setIndex(index + 1);
      setSnapshot(null);
      setPhase(PHASE.WRITING);
      clearCanvas();
    }
  };

  const restart = () => {
    setIndex(0);
    setResults([]);
    setSnapshot(null);
    setPhase(PHASE.WRITING);
    spokenForRef.current = -1;
    clearCanvas();
  };

  if (!list) {
    return (
      <div className="screen spelling-screen">
        <div className="chat-topbar">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="topbar-topic">Spelling Test</span>
        </div>
        <p className="spelling-empty">List not found.</p>
      </div>
    );
  }

  if (words.length === 0) {
    return (
      <div className="screen spelling-screen">
        <div className="chat-topbar">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="topbar-topic">{list.title}</span>
        </div>
        <p className="spelling-empty">Add some words to the list before starting a test.</p>
      </div>
    );
  }

  if (phase === PHASE.DONE) {
    const correctCount = results.filter((r) => r.correct).length;
    const isPerfect = correctCount === words.length;
    const missed = results.filter((r) => !r.correct);
    return (
      <div className="screen spelling-screen">
        <div className="chat-topbar">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="topbar-topic">{list.title}</span>
        </div>
        <div className="spelling-card">
          <p className="spelling-card-position">All done!</p>
          <div className="spelling-card-word" style={{ color: isPerfect ? "var(--coral)" : "var(--teal)" }}>
            {correctCount} / {words.length}
          </div>
          <p className="reward-subtitle">
            {isPerfect ? "Perfect score! 🌟" : "Great effort! Practise the missed ones again."}
          </p>
          {missed.length > 0 && (
            <div className="spelling-missed-list">
              <p className="spelling-missed-title">Words to revisit:</p>
              <ul>
                {missed.map((m, i) => <li key={i}>{m.word}</li>)}
              </ul>
            </div>
          )}
          <div className="spelling-card-nav">
            <button className="btn-primary" onClick={restart}>Try again</button>
            <button className="btn-secondary" onClick={onBack}>Back to list</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen spelling-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-topic">{list.title}</span>
      </div>

      <div className="chat-progress-bar">
        <span className="chat-stars">
          Word {index + 1} of {words.length}
        </span>
        <span className="chat-reward-hint">
          ⭐ {results.filter((r) => r.correct).length}
        </span>
      </div>

      {phase === PHASE.WRITING && (
        <>
          <div className="spelling-test-prompt">
            <p className="reward-subtitle" style={{ margin: 0 }}>
              Listen and write the word.
            </p>
            <button
              className="btn-secondary spelling-test-hear"
              onClick={() => speak(currentWord)}
            >
              🔊 Hear again
            </button>
          </div>

          <div className="spelling-canvas-wrapper">
            <canvas
              ref={canvasRef}
              className="spelling-canvas"
              onMouseDown={startDraw}
              onMouseMove={moveDraw}
              onMouseUp={endDraw}
              onMouseLeave={endDraw}
              onTouchStart={startDraw}
              onTouchMove={moveDraw}
              onTouchEnd={endDraw}
            />
          </div>

          <div className="spelling-test-actions">
            <button className="btn-secondary" onClick={clearCanvas}>Clear</button>
            <button className="btn-primary" onClick={handleCheck}>Check</button>
          </div>
        </>
      )}

      {phase === PHASE.REVIEW && (
        <>
          <p className="reward-subtitle spelling-review-intro">
            Compare your writing to the correct word. Did you spell it right?
          </p>
          <div className="spelling-review-grid">
            <div className="spelling-review-cell">
              <p className="spelling-review-label">Your answer</p>
              <div className="spelling-review-pad">
                {snapshot && <img src={snapshot} alt="Your writing" />}
              </div>
            </div>
            <div className="spelling-review-cell">
              <p className="spelling-review-label">Correct word</p>
              <div className="spelling-review-pad spelling-review-correct">
                {currentWord}
              </div>
              <button
                className="spelling-word-speak spelling-review-speak"
                onClick={() => speak(currentWord)}
                aria-label="Hear the word"
              >
                🔊
              </button>
            </div>
          </div>

          <div className="spelling-test-actions">
            <button
              className="btn-secondary spelling-mark-wrong"
              onClick={() => recordResult(false)}
            >
              ❌ Missed
            </button>
            <button
              className="btn-primary spelling-mark-right"
              onClick={() => recordResult(true)}
            >
              ✅ Got it
            </button>
          </div>
        </>
      )}
    </div>
  );
}
