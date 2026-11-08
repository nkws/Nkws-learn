import { useEffect, useMemo, useRef, useState } from "react";
import { boxSizeFor } from "../utils/writingBox";

// One sentence as a row of 田字格 boxes the child writes in with a finger. There
// is no stroke recognition: each box is a plain dashed-grid square with a
// free-hand drawing surface. In copy mode the model character shows above each
// box as a reference; in memory mode it's hidden (pinyin cue kept). The child
// self-checks how neatly they wrote, then taps ✓ to move to the next sentence.

// Free-hand drawing surface for one box. Re-initialising (new clearTick) resets
// the bitmap, which clears it.
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
    draw.current.ctx = ctx;
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

export default function WritingLine({ tokens, size, showChar, pinyinMap, onDone }) {
  const cells = useMemo(() => tokens || [], [tokens]);
  const boxSize = size || boxSizeFor(cells.length);
  const [clearTick, setClearTick] = useState(0);
  return (
    <div className="hw-line-wrap">
      <p className="hw-instruction">{showChar ? "照着写一写 Copy it" : "自己写一写 Write from memory"}</p>
      <div className="hw-line">
        {cells.map((tok, i) => (
          <div key={i} className="hw-cell" style={{ width: boxSize }}>
            <div className="hw-cell-ref">
              <span className="hw-cell-py">{tok.t === "c" ? (pinyinMap?.[tok.ch] || "") : ""}</span>
              <span className="hw-cell-hz">{showChar ? tok.ch : ""}</span>
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
