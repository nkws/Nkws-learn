import { useCallback, useEffect, useRef, useState } from "react";

// One wide handwriting box for a whole sentence — simple free writing, same
// touch + mouse drawing the spelling drill uses (reliable multi-stroke, no
// pointer-capture quirks). No recognition: the child writes in their own hand
// and self-checks. The box sizes itself for a child's hand: it measures its own
// width and gives as many child-height writing rows as the sentence needs,
// independent of the (compact) demonstration above. Remounting (new key) gives
// a fresh, empty box.
export default function SentenceWritePad({ pinyin, onDone, charCount = 1, charWidth = 90, rowHeight = 110 }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Rows needed to write `charCount` child-sized characters across the box.
  const perRow = Math.max(1, Math.floor(width / (charWidth + 8)) || 1);
  const rows = Math.min(8, Math.max(1, Math.ceil(charCount / perRow)));
  const height = rows * rowHeight;

  // Track the box's own width.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const measure = () => setWidth(wrap.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  // (Re)fit the canvas bitmap whenever its size changes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
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
  }, [width, height]);

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
  const start = (e) => { e.preventDefault(); drawingRef.current = true; lastRef.current = point(e); };
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
    <div className="sw-pad">
      {pinyin && <p className="sw-pad-pinyin">{pinyin}</p>}
      <div className="sw-pad-wrap" ref={wrapRef} style={{ "--rh": `${rowHeight}px` }}>
        <canvas
          ref={canvasRef}
          className="sw-pad-canvas"
          style={{ height }}
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
        <button className="btn-secondary" onClick={clear}>重写 Clear</button>
        <button className="btn-primary" onClick={onDone}>下一句 ✓</button>
      </div>
    </div>
  );
}
