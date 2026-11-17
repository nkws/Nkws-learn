import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

// A 田字格 worksheet for a whole sentence: one generous box per character,
// filling the available width and wrapping to as many rows as the sentence
// needs — sized for a child's hand, independent of the compact demonstration.
// Simple free writing (reliable touch + mouse drawing, no pointer-capture
// quirks), an eraser, and clear. No recognition: the child writes in his own
// hand and self-checks. The grid behind the one canvas marks each box.
export default function SentenceWritePad({ pinyin, onDone, charCount = 1, cell = 120, doneLabel = "下一句 ✓" }) {
  const outerRef = useRef(null);
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastRef = useRef(null);
  const eraseRef = useRef(false);
  const [avail, setAvail] = useState(0);
  const [erasing, setErasing] = useState(false);
  const toggleErase = () => { const n = !eraseRef.current; eraseRef.current = n; setErasing(n); };

  // Lay the characters out as a grid of `cell`-sized boxes across the width,
  // leaving a touch gutter on each side so the page can still be scrolled.
  const GUTTER = 28;
  const cols = Math.max(1, Math.floor((avail - GUTTER * 2) / cell) || 1);
  const rows = Math.min(12, Math.max(1, Math.ceil(charCount / cols)));
  const padW = (rows === 1 ? Math.min(cols, charCount) : cols) * cell;
  const padH = rows * cell;

  // Track the available width (full content width, not the demo's).
  useLayoutEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const measure = () => setAvail(outer.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    return () => ro.disconnect();
  }, []);

  // (Re)fit the canvas bitmap whenever its size changes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !padW || !padH) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#2563EB";
    ctx.lineWidth = 4;
    ctx.clearRect(0, 0, rect.width, rect.height);
  }, [padW, padH]);

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
  }, []);

  const point = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const t = e.touches?.[0];
    return { x: (t ? t.clientX : e.clientX) - rect.left, y: (t ? t.clientY : e.clientY) - rect.top };
  };
  const start = (e) => {
    e.preventDefault();
    drawingRef.current = true;
    lastRef.current = point(e);
    const ctx = canvasRef.current.getContext("2d");
    if (eraseRef.current) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = Math.max(18, Math.round(cell * 0.28));
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 4;
    }
  };
  const moveDraw = (e) => {
    if (!drawingRef.current) return;
    e.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    const p = point(e);
    const l = lastRef.current;
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastRef.current = p;
  };
  const end = (e) => { if (!drawingRef.current) return; e.preventDefault(); drawingRef.current = false; lastRef.current = null; };

  return (
    <div className="sw-pad" ref={outerRef}>
      {pinyin && <p className="sw-pad-pinyin">{pinyin}</p>}
      <div className="sw-pad-wrap sw-pad-grid" style={{ width: padW || "100%", height: padH, "--cell": `${cell}px` }}>
        <canvas
          ref={canvasRef}
          className="sw-pad-canvas"
          style={{ width: padW || "100%", height: padH }}
          onMouseDown={start}
          onMouseMove={moveDraw}
          onMouseUp={end}
          onMouseLeave={end}
          onTouchStart={start}
          onTouchMove={moveDraw}
          onTouchEnd={end}
        />
      </div>
      <div className="hw-line-controls">
        <button className={`btn-secondary sw-erase-btn${erasing ? " on" : ""}`} onClick={toggleErase} aria-pressed={erasing}>🧹 橡皮 Eraser</button>
        <button className="btn-secondary" onClick={clear}>重写 Clear</button>
        <button className="btn-primary" onClick={onDone}>{doneLabel}</button>
      </div>
    </div>
  );
}
