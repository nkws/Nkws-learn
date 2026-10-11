import { useEffect, useMemo, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";

// Recall-mode handwriting quiz for one word (one or more characters), powered by
// Hanzi Writer. The child writes each character stroke by stroke with NO outline
// or character shown; a hint outline appears after 3 misses on a stroke, or when
// they tap "Show hint". Mistakes are summed across characters.
//
// Skritter-style "learn first": when `teachFirst` is true (a brand-new card),
// each character's stroke order is animated once before the child writes it.
//
// Stroke data: Make Me a Hanzi (Arphic Public License), via Hanzi Writer's
// default CDN for now. TODO(later): self-host via `charDataLoader`.

function computeSize() {
  if (typeof window === "undefined") return 360;
  const base = Math.min(window.innerWidth, window.innerHeight) * 0.8;
  return Math.max(300, Math.min(420, Math.floor(base)));
}

export default function HanziWriterQuiz({ word, teachFirst = false, onComplete }) {
  const characters = useMemo(() => [...String(word || "")], [word]);
  const containerRef = useRef(null);
  const writerRef = useRef(null);
  const idxRef = useRef(0);
  const totalRef = useRef(0);
  const hintRef = useRef(false);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  const [charIndex, setCharIndex] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const [hinted, setHinted] = useState(false);
  const [teaching, setTeaching] = useState(teachFirst);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || characters.length === 0) return;

    idxRef.current = 0; totalRef.current = 0; hintRef.current = false; doneRef.current = false;
    el.innerHTML = "";
    let cancelled = false;

    const finish = () => {
      if (doneRef.current || cancelled) return;
      doneRef.current = true;
      onCompleteRef.current?.({ totalMistakes: totalRef.current, hintUsed: hintRef.current });
    };

    const quizCurrent = () => {
      const writer = writerRef.current;
      if (!writer || cancelled) return;
      writer.quiz({
        showHintAfterMisses: 3,
        onMistake(strokeData) {
          if (strokeData.mistakesOnStroke >= 3) { hintRef.current = true; setHinted(true); }
        },
        onComplete(summary) {
          totalRef.current += summary.totalMistakes;
          idxRef.current += 1;
          if (idxRef.current < characters.length) {
            setCharIndex(idxRef.current);
            setHinted(false);
            if (teachFirst) setTeaching(true);
            writer
              .setCharacter(characters[idxRef.current])
              .then(() => { if (!cancelled) presentCurrent(); })
              .catch(() => { if (!cancelled) setLoadError(true); });
          } else {
            finish();
          }
        },
      });
    };

    // Teach (animate the stroke order) before quizzing, for new cards.
    const presentCurrent = () => {
      const writer = writerRef.current;
      if (!writer || cancelled) return;
      if (teachFirst) {
        try { writer.hideCharacter(); writer.hideOutline(); } catch { /* ignore */ }
        writer.animateCharacter({
          onComplete() {
            if (cancelled) return;
            try { writer.hideCharacter(); writer.hideOutline(); } catch { /* ignore */ }
            setTeaching(false);
            quizCurrent();
          },
        });
      } else {
        quizCurrent();
      }
    };

    const size = computeSize();
    const writer = HanziWriter.create(el, characters[0], {
      width: size,
      height: size,
      padding: 6,
      showCharacter: false,
      showOutline: false,
      strokeColor: "#1A237E",
      drawingColor: "#2563EB",
      drawingWidth: 22,
      highlightColor: "#FF8A3D",
      strokeAnimationSpeed: 1.2,
      delayBetweenStrokes: 180,
      onLoadCharDataError() { if (!cancelled) setLoadError(true); },
    });
    writerRef.current = writer;
    presentCurrent();

    return () => {
      cancelled = true;
      try { writer.cancelQuiz(); } catch { /* ignore */ }
      writerRef.current = null;
      if (el) el.innerHTML = "";
    };
  }, [characters, teachFirst]);

  const showHint = () => {
    const writer = writerRef.current;
    if (!writer) return;
    hintRef.current = true;
    setHinted(true);
    try { writer.showOutline(); } catch { /* ignore */ }
  };

  const skipBroken = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onCompleteRef.current?.({ totalMistakes: 99, hintUsed: true });
  };

  return (
    <div className="hw-quiz">
      {characters.length > 1 && (
        <p className="hw-progress">第 {charIndex + 1} 个字 / 共 {characters.length} 个</p>
      )}
      <p className="hw-instruction">
        {teaching ? "看一看笔顺 Watch the strokes" : "自己写一写 Write it from memory"}
      </p>
      <div className="hw-square-wrap">
        <div ref={containerRef} className="hw-square" />
      </div>
      {loadError ? (
        <div className="hw-error">
          <p>这个字暂时打不开。</p>
          <button className="btn-secondary" onClick={skipBroken}>跳过 Skip</button>
        </div>
      ) : (
        <button className="btn-secondary hw-hint-btn" onClick={showHint} disabled={hinted || teaching}>
          {hinted ? "提示已显示 ✓" : "看提示 Show hint"}
        </button>
      )}
    </div>
  );
}
