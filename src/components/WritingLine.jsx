import { useEffect, useMemo, useRef, useState } from "react";
import { boxSizeFor } from "../utils/writingBox";

// One sentence as a row of plain 田字格 boxes the child writes in with a finger.
// No stroke recognition and no model character in the box — just a dashed-grid
// square with a free-hand drawing surface and the pinyin cue above. The
// reference (if any) is the separate demonstration line. The child self-checks
// how neatly they wrote, then taps ✓ to move to the next sentence.

// Free-hand drawing surface for one box. Re-initialising (new clearTick) resets
// the bitmap, which clears it. Each stroke attaches its own move/up listeners
// to the window so fast strokes — and lifts outside the box — always register
// (more reliable than pointer capture, which dropped alternate strokes).
function TraceCanvas({ size, clearTick }) {
  const ref = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const dpr = window.devicePixelRatio || 1;
    c.width = size * dpr;
    c.height = size * dpr;
    const ctx = c.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#2563EB";
    ctxRef.current = ctx;
  }, [size, clearTick]);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const at = (e) => { const r = c.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const move = (e) => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      e.preventDefault();
      const p = at(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
    const down = (e) => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      e.preventDefault();
      const p = at(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      window.addEventListener("pointermove", move, { passive: false });
      window.addEventListener("pointerup", up);
      window.addEventListener("pointercancel", up);
    };
    c.addEventListener("pointerdown", down, { passive: false });
    return () => { c.removeEventListener("pointerdown", down); up(); };
  }, []);

  return <canvas ref={ref} className="hw-trace-canvas" style={{ width: size, height: size }} />;
}

export default function WritingLine({ tokens, size, label, pinyinMap, onDone }) {
  const cells = useMemo(() => tokens || [], [tokens]);
  const boxSize = size || boxSizeFor(cells.length);
  const [clearTick, setClearTick] = useState(0);
  return (
    <div className="hw-line-wrap">
      <p className="hw-instruction">{label}</p>
      <div className="hw-line">
        {cells.map((tok, i) => (
          <div key={i} className="hw-cell" style={{ width: boxSize }}>
            <div className="hw-cell-ref">
              <span className="hw-cell-py">{tok.t === "c" ? (pinyinMap?.[tok.ch] || "") : ""}</span>
            </div>
            <div className={`hw-box${tok.t === "p" ? " hw-punct" : ""}`} style={{ width: boxSize, height: boxSize }}>
              <TraceCanvas size={boxSize} clearTick={clearTick} />
            </div>
          </div>
        ))}
      </div>
      <div className="hw-line-controls">
        <button className="btn-secondary" onClick={() => setClearTick((t) => t + 1)}>重写 Clear</button>
        <button className="btn-primary" onClick={onDone}>下一句 ✓</button>
      </div>
    </div>
  );
}
