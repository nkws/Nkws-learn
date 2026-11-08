import { useEffect, useMemo, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";

// Writes a whole line at once: one 田字格 box per character, all shown on the
// same page. The child fills them in order (the active box is highlighted);
// mistakes are summed across the line. Modes mirror HanziWriterQuiz:
//   trace      — grey outline shown to draw over
//   teachFirst — each character's strokes are animated before writing it
//   (default)  — write from memory, no outline
// On finishing the last box, onComplete({ totalMistakes, hintUsed }) fires.

function computeBoxSize(count) {
  if (typeof window === "undefined") return 96;
  const avail = Math.min(window.innerWidth, 460) - 36;
  const perRow = avail >= 380 ? 4 : 3;
  const gap = 8;
  const fit = Math.floor((avail - gap * (perRow - 1)) / perRow);
  return Math.max(74, Math.min(118, count < perRow ? Math.min(118, fit + 10) : fit));
}

export default function HanziWriterLine({ word, teachFirst = false, trace = false, onComplete }) {
  const characters = useMemo(() => [...String(word || "")], [word]);
  const boxRefs = useRef([]);
  const writersRef = useRef([]);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  const [boxSize] = useState(() => computeBoxSize(characters.length));
  const [activeIndex, setActiveIndex] = useState(0);
  const [hinted, setHinted] = useState(false);
  const [teaching, setTeaching] = useState(teachFirst);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (characters.length === 0) return;
    const boxes = boxRefs.current;
    let cancelled = false;
    let active = 0;
    let total = 0;
    let hintUsed = false;
    doneRef.current = false;

    const finish = () => {
      if (doneRef.current || cancelled) return;
      doneRef.current = true;
      onCompleteRef.current?.({ totalMistakes: total, hintUsed });
    };

    const writers = characters.map((ch, i) => {
      const el = boxes[i];
      if (!el) return null;
      el.innerHTML = "";
      return HanziWriter.create(el, ch, {
        width: boxSize,
        height: boxSize,
        padding: 5,
        showCharacter: false,
        showOutline: trace,
        strokeColor: "#1A237E",
        drawingColor: "#2563EB",
        drawingWidth: 20,
        highlightColor: "#FF8A3D",
        strokeAnimationSpeed: 1.3,
        delayBetweenStrokes: 150,
        onLoadCharDataError() { if (!cancelled) setLoadError(true); },
      });
    });
    writersRef.current = writers;

    const quizAt = (i) => {
      const w = writers[i];
      if (!w || cancelled) return;
      const begin = () => {
        if (cancelled) return;
        w.quiz({
          showHintAfterMisses: 3,
          onMistake(s) { if (s.mistakesOnStroke >= 3) { hintUsed = true; setHinted(true); } },
          onComplete(summary) {
            total += summary.totalMistakes;
            active = i + 1;
            if (active < characters.length) {
              setActiveIndex(active);
              setHinted(false);
              if (teachFirst) setTeaching(true);
              quizAt(active);
            } else {
              finish();
            }
          },
        });
      };
      if (teachFirst) {
        try { w.hideCharacter(); if (!trace) w.hideOutline(); } catch { /* ignore */ }
        w.animateCharacter({
          onComplete() {
            if (cancelled) return;
            try { w.hideCharacter(); if (trace) w.showOutline(); else w.hideOutline(); } catch { /* ignore */ }
            setTeaching(false);
            begin();
          },
        });
      } else {
        if (trace) { try { w.showOutline(); } catch { /* ignore */ } }
        begin();
      }
    };

    quizAt(0);

    return () => {
      cancelled = true;
      writers.forEach((w) => { try { w?.cancelQuiz(); } catch { /* ignore */ } });
      writersRef.current = [];
      boxes.forEach((el) => { if (el) el.innerHTML = ""; });
    };
  }, [characters, boxSize, teachFirst, trace]);

  const showHint = () => {
    const w = writersRef.current[activeIndex];
    if (!w) return;
    setHinted(true);
    try { w.showOutline(); } catch { /* ignore */ }
  };

  const skipBroken = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onCompleteRef.current?.({ totalMistakes: 99, hintUsed: true });
  };

  return (
    <div className="hw-line-wrap">
      <p className="hw-instruction">
        {teaching
          ? "看一看笔顺 Watch the strokes"
          : trace
            ? "照着描红 Trace over the outline"
            : "自己写一写 Write from memory"}
        {characters.length > 1 && !teaching && (
          <span className="hw-line-count"> · 第 {activeIndex + 1}/{characters.length} 个</span>
        )}
      </p>
      <div className="hw-line">
        {characters.map((c, i) => (
          <div
            key={i}
            ref={(el) => { boxRefs.current[i] = el; }}
            className={`hw-box${i === activeIndex ? " active" : ""}${i < activeIndex ? " done" : ""}`}
            style={{ width: boxSize, height: boxSize }}
          />
        ))}
      </div>
      {loadError ? (
        <div className="hw-error">
          <p>有个字暂时打不开。</p>
          <button className="btn-secondary" onClick={skipBroken}>跳过 Skip</button>
        </div>
      ) : trace ? null : (
        <button className="btn-secondary hw-hint-btn" onClick={showHint} disabled={hinted || teaching}>
          {hinted ? "提示已显示 ✓" : "看提示 Show hint"}
        </button>
      )}
    </div>
  );
}
