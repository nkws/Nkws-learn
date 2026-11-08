import { useEffect, useMemo, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import { boxSizeFor } from "../utils/writingBox";

// Writes a whole line at once as a row of 田字格 cells, all on one page. A cell
// is one of two token kinds:
//   • character — stroke-written and graded by Hanzi Writer (recall / trace /
//     teach-first), mistakes summed across the line.
//   • punctuation — Hanzi Writer has no stroke data for 。，！？ etc., so these
//     are a lightweight "place the mark" cell: the mark shows faintly as a
//     trace target, the child traces it with a finger, then taps ✓ to self-check
//     and move on (ungraded).
// The child fills cells left to right (active cell highlighted). On finishing
// the last cell, onComplete({ totalMistakes, hintUsed }) fires.

// Free-hand tracing surface for a punctuation cell (no grading).
function TraceCanvas({ size, clearTick }) {
  const ref = useRef(null);
  const draw = useRef({ on: false, ctx: null });
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const dpr = window.devicePixelRatio || 1;
    c.width = size * dpr;
    c.height = size * dpr;
    const ctx = c.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#2563EB";
    draw.current.ctx = ctx; // re-running (new clearTick) resets the bitmap → clears
  }, [size, clearTick]);
  const at = (e) => {
    const r = ref.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const down = (e) => { e.preventDefault(); const p = at(e); draw.current.on = true; const ctx = draw.current.ctx; ctx.beginPath(); ctx.moveTo(p.x, p.y); };
  const move = (e) => { if (!draw.current.on) return; const p = at(e); const ctx = draw.current.ctx; ctx.lineTo(p.x, p.y); ctx.stroke(); };
  const up = () => { draw.current.on = false; };
  return (
    <canvas
      ref={ref}
      className="hw-trace-canvas"
      style={{ width: size, height: size }}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerLeave={up}
    />
  );
}

export default function HanziWriterLine({ word, tokens: tokensProp, teachFirst = false, trace = false, size, onComplete }) {
  const tokens = useMemo(
    () => tokensProp || [...String(word || "")].map((ch) => ({ t: "c", ch })),
    [tokensProp, word]
  );
  const boxRefs = useRef([]);
  const writersRef = useRef([]);
  const startRef = useRef(() => {});
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  const boxSize = size || boxSizeFor(tokens.length);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hinted, setHinted] = useState(false);
  const [teaching, setTeaching] = useState(teachFirst);
  const [loadError, setLoadError] = useState(false);
  const [clearTick, setClearTick] = useState(0);

  useEffect(() => {
    if (tokens.length === 0) return;
    const boxes = boxRefs.current;
    let cancelled = false;
    let total = 0;
    let hintUsed = false;
    doneRef.current = false;

    const writers = tokens.map((tok, i) => {
      if (tok.t !== "c") return null;
      const el = boxes[i];
      if (!el) return null;
      el.innerHTML = "";
      return HanziWriter.create(el, tok.ch, {
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

    const finish = () => {
      if (doneRef.current || cancelled) return;
      doneRef.current = true;
      onCompleteRef.current?.({ totalMistakes: total, hintUsed });
    };

    const startAt = (i) => {
      if (cancelled) return;
      if (i >= tokens.length) { finish(); return; }
      setActiveIndex(i);
      const tok = tokens[i];
      if (tok.t !== "c") { setTeaching(false); return; } // punctuation waits for ✓
      const w = writers[i];
      if (!w) { startAt(i + 1); return; }
      const begin = () => {
        if (cancelled) return;
        w.quiz({
          showHintAfterMisses: 3,
          onMistake(s) { if (s.mistakesOnStroke >= 3) { hintUsed = true; setHinted(true); } },
          onComplete(sum) {
            total += sum.totalMistakes;
            setHinted(false);
            if (teachFirst) setTeaching(true);
            startAt(i + 1);
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
    startRef.current = startAt;
    startAt(0);

    return () => {
      cancelled = true;
      writers.forEach((w) => { try { w?.cancelQuiz(); } catch { /* ignore */ } });
      writersRef.current = [];
      boxes.forEach((el) => { if (el) el.innerHTML = ""; });
    };
  }, [tokens, boxSize, teachFirst, trace]);

  const confirmPunct = () => { setClearTick((t) => t + 1); startRef.current(activeIndex + 1); };
  const showHint = () => { const w = writersRef.current[activeIndex]; if (!w) return; setHinted(true); try { w.showOutline(); } catch { /* ignore */ } };
  const skipBroken = () => { if (doneRef.current) return; doneRef.current = true; onCompleteRef.current?.({ totalMistakes: 99, hintUsed: true }); };

  const activeTok = tokens[activeIndex];
  const punctActive = activeTok && activeTok.t === "p";

  return (
    <div className="hw-line-wrap">
      <p className="hw-instruction">
        {punctActive
          ? "写标点 Write the mark, then tap ✓"
          : teaching
            ? "看一看笔顺 Watch the strokes"
            : trace
              ? "照着描红 Trace over the outline"
              : "自己写一写 Write from memory"}
      </p>
      <div className="hw-line">
        {tokens.map((tok, i) =>
          tok.t === "c" ? (
            <div
              key={i}
              ref={(el) => { boxRefs.current[i] = el; }}
              className={`hw-box${i === activeIndex ? " active" : ""}${i < activeIndex ? " done" : ""}`}
              style={{ width: boxSize, height: boxSize }}
            />
          ) : (
            <div
              key={i}
              className={`hw-box hw-punct${i === activeIndex ? " active" : ""}${i < activeIndex ? " done" : ""}`}
              style={{ width: boxSize, height: boxSize }}
            >
              {i < activeIndex ? (
                <span className="hw-punct-done" style={{ fontSize: Math.round(boxSize * 0.72) }}>{tok.ch}</span>
              ) : (
                <>
                  <span className="hw-punct-target" style={{ fontSize: Math.round(boxSize * 0.72) }}>{tok.ch}</span>
                  {i === activeIndex && <TraceCanvas size={boxSize} clearTick={clearTick} />}
                </>
              )}
            </div>
          )
        )}
      </div>
      {loadError ? (
        <div className="hw-error">
          <p>有个字暂时打不开。</p>
          <button className="btn-secondary" onClick={skipBroken}>跳过 Skip</button>
        </div>
      ) : punctActive ? (
        <div className="hw-punct-controls">
          <button className="btn-secondary" onClick={() => setClearTick((t) => t + 1)}>重写 Clear</button>
          <button className="btn-primary" onClick={confirmPunct}>下一个 ✓</button>
        </div>
      ) : trace ? null : (
        <button className="btn-secondary hw-hint-btn" onClick={showHint} disabled={hinted || teaching}>
          {hinted ? "提示已显示 ✓" : "看提示 Show hint"}
        </button>
      )}
    </div>
  );
}
