import { useCallback, useEffect, useRef } from "react";

// One wide handwriting box for a whole sentence — simple free writing, same
// touch + mouse drawing the spelling drill uses (reliable multi-stroke, no
// pointer-capture quirks). No recognition: the child writes in their own hand
// and self-checks. Remounting (new key) gives a fresh, empty box.
export default function SentenceWritePad({ pinyin, onDone, rows = 1, rowHeight = 150 }) {
  const height = Math.max(1, rows) * rowHeight;
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastRef = useRef(null);

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
      ctx.strokeStyle = "#2563EB";
      ctx.lineWidth = 4;
      ctx.clearRect(0, 0, rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
    };
  }, []);

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
      <div className="sw-pad-wrap" style={{ "--rh": `${rowHeight}px` }}>
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
