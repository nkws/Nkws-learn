import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { useTTS } from "../hooks/useSpeech";
import { recordSpellingAttempt } from "../utils/spellingStorage";

const PHASE = {
  WRITING: "writing",
  REVIEW: "review",
  DONE: "done",
};

export default function SpellingTestScreen({ listId, mode = "write", onBack }) {
  const { getList } = useSpellingLists();
  const list = getList(listId);
  const { speak } = useTTS(list?.lang === "zh" ? "zh" : "en");

  const words = useMemo(() => list?.words || [], [list]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState(PHASE.WRITING);
  const [snapshot, setSnapshot] = useState(null);
  const [results, setResults] = useState([]);
  const [pinyinMap, setPinyinMap] = useState({});
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const spokenForRef = useRef(-1);

  const isZh = list?.lang === "zh";
  const isPinyinMode = mode === "pinyin";
  const labels = isZh
    ? {
        prompt: "听一听，写下来。",
        hearAgain: "🔊 再听一次",
        clear: "擦掉",
        check: "检查",
        gotIt: "✅ 对了",
        missed: "❌ 错了",
        compareIntro: isPinyinMode
          ? "对一对你写的拼音，跟下面的一样吗？"
          : "对一对你写的字，跟下面的一样吗？",
        yourAnswer: "你写的",
        correctLabel: isPinyinMode ? "正确拼音" : "正确汉字",
        tryAgain: "再来一次",
        backToList: "回到词语表",
        wordsToRevisit: "要再练的词：",
        allDone: "都做完了！",
        perfect: "全对了！🌟",
        notPerfect: "做得很好！没做对的再练几遍吧。",
        progress: (i, n) => `第 ${i} 个 / 共 ${n} 个`,
      }
    : {
        prompt: "Listen and write the word.",
        hearAgain: "🔊 Hear again",
        clear: "Clear",
        check: "Check",
        gotIt: "✅ Got it",
        missed: "❌ Missed",
        compareIntro: "Compare your writing to the correct word. Did you spell it right?",
        yourAnswer: "Your answer",
        correctLabel: "Correct word",
        tryAgain: "Try again",
        backToList: "Back to list",
        wordsToRevisit: "Words to revisit:",
        allDone: "All done!",
        perfect: "Perfect score! 🌟",
        notPerfect: "Great effort! Practise the missed ones again.",
        progress: (i, n) => `Word ${i} of ${n}`,
      };

  // Lazy-derive pinyin only when we're in pinyin mode and only for words we
  // haven't seen yet. Cached in component state so we don't re-derive each
  // render.
  useEffect(() => {
    if (!isPinyinMode || words.length === 0) return;
    const missing = words.filter((w) => !(w in pinyinMap));
    if (missing.length === 0) return;
    let cancelled = false;
    (async () => {
      try {
        const { pinyin } = await import("pinyin-pro");
        if (cancelled) return;
        const next = { ...pinyinMap };
        for (const w of missing) {
          next[w] = pinyin(w, { toneType: "symbol", type: "string" });
        }
        setPinyinMap(next);
      } catch (err) {
        console.error("Failed to load pinyin-pro", err);
      }
    })();
    return () => { cancelled = true; };
  }, [isPinyinMode, words, pinyinMap]);

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
      // Persist a single attempt row to spelling-only score history. This is
      // independent of the main progress system on purpose — spelling stays
      // its own surface.
      const score = next.filter((r) => r.correct).length;
      const missed = next.filter((r) => !r.correct).map((r) => r.word);
      recordSpellingAttempt(listId, {
        score,
        total: words.length,
        mode,
        completedAt: Date.now(),
        missed,
      });
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
        <p className="spelling-empty">
          {isZh
            ? "先在词语表里加几个词再来听写。"
            : "Add some words to the list before starting a test."}
        </p>
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
          <p className="spelling-card-position">{labels.allDone}</p>
          <div className="spelling-card-word" style={{ color: isPerfect ? "var(--coral)" : "var(--teal)" }}>
            {correctCount} / {words.length}
          </div>
          <p className="reward-subtitle">
            {isPerfect ? labels.perfect : labels.notPerfect}
          </p>
          {missed.length > 0 && (
            <div className="spelling-missed-list">
              <p className="spelling-missed-title">{labels.wordsToRevisit}</p>
              <ul>
                {missed.map((m, i) => (
                  <li key={i}>
                    {isPinyinMode && pinyinMap[m.word]
                      ? `${m.word} → ${pinyinMap[m.word]}`
                      : m.word}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="spelling-card-nav">
            <button className="btn-primary" onClick={restart}>{labels.tryAgain}</button>
            <button className="btn-secondary" onClick={onBack}>{labels.backToList}</button>
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
          {labels.progress(index + 1, words.length)}
        </span>
        <span className="chat-reward-hint">
          ⭐ {results.filter((r) => r.correct).length}
        </span>
      </div>

      {phase === PHASE.WRITING && (
        <>
          <div className="spelling-test-prompt">
            <p className="reward-subtitle" style={{ margin: 0 }}>
              {labels.prompt}
            </p>
            <button
              className="btn-secondary spelling-test-hear"
              onClick={() => speak(currentWord)}
            >
              {labels.hearAgain}
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
            <button className="btn-secondary" onClick={clearCanvas}>{labels.clear}</button>
            <button className="btn-primary" onClick={handleCheck}>{labels.check}</button>
          </div>
        </>
      )}

      {phase === PHASE.REVIEW && (
        <>
          <p className="reward-subtitle spelling-review-intro">
            {labels.compareIntro}
          </p>
          <div className="spelling-review-grid">
            <div className="spelling-review-cell">
              <p className="spelling-review-label">{labels.yourAnswer}</p>
              <div className="spelling-review-pad">
                {snapshot && <img src={snapshot} alt={labels.yourAnswer} />}
              </div>
            </div>
            <div className="spelling-review-cell">
              <p className="spelling-review-label">{labels.correctLabel}</p>
              <div className={`spelling-review-pad spelling-review-correct${isPinyinMode ? " spelling-review-pinyin" : ""}`}>
                {isPinyinMode ? (
                  <>
                    <span className="spelling-review-character">{currentWord}</span>
                    <span className="spelling-review-pinyintext">
                      {pinyinMap[currentWord] || "…"}
                    </span>
                  </>
                ) : (
                  currentWord
                )}
              </div>
              <button
                className="spelling-word-speak spelling-review-speak"
                onClick={() => speak(currentWord)}
                aria-label={isZh ? "再听一次" : "Hear the word"}
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
              {labels.missed}
            </button>
            <button
              className="btn-primary spelling-mark-right"
              onClick={() => recordResult(true)}
            >
              {labels.gotIt}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
