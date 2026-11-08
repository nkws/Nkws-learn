import { useEffect, useLayoutEffect, useRef } from "react";
import HanziWriter from "hanzi-writer";
import { boxSizeFor } from "../utils/writingBox";

// Read-only "watch how it's written" line: each character auto-writes its
// strokes in order (a presentation, using the stroke data only to show — never
// to grade or compare the child's writing). Punctuation has no stroke data, so
// it's shown statically. Column-aligned with the freehand practice line below.
export default function StrokeDemoLine({ tokens, size, pinyinMap, onRows }) {
  const boxSize = size || boxSizeFor(tokens.length);
  const boxRefs = useRef([]);
  const writersRef = useRef([]);
  const lineRef = useRef(null);

  // Report how many rows the demonstration actually wraps to, so the writing
  // pad below can be made the same height.
  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!line || !onRows) return;
    const measure = () => {
      const tops = new Set([...line.children].map((c) => c.offsetTop));
      onRows(Math.max(1, tops.size));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(line);
    return () => ro.disconnect();
  }, [tokens, boxSize, onRows]);

  useEffect(() => {
    const boxes = boxRefs.current;
    let cancelled = false;
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
        showOutline: true,
        strokeColor: "#1A237E",
        strokeAnimationSpeed: 1.2,
        delayBetweenStrokes: 150,
        onLoadCharDataError() { /* skip chars without data */ },
      });
    });
    writersRef.current = writers;

    const order = tokens.map((t, i) => (t.t === "c" ? i : -1)).filter((i) => i >= 0);
    const playFrom = (k) => {
      if (cancelled || k >= order.length) return;
      const w = writers[order[k]];
      if (!w) { playFrom(k + 1); return; }
      w.animateCharacter({ onComplete: () => playFrom(k + 1) });
    };
    playFrom(0);

    return () => {
      cancelled = true;
      boxes.forEach((el) => { if (el) el.innerHTML = ""; });
      writersRef.current = [];
    };
  }, [tokens, boxSize]);

  const replay = () => {
    const writers = writersRef.current;
    const order = tokens.map((t, i) => (t.t === "c" ? i : -1)).filter((i) => i >= 0);
    const playFrom = (k) => {
      if (k >= order.length) return;
      const w = writers[order[k]];
      if (!w) { playFrom(k + 1); return; }
      w.animateCharacter({ onComplete: () => playFrom(k + 1) });
    };
    playFrom(0);
  };

  return (
    <div className="sw-demo">
      <div className="hw-line" ref={lineRef}>
        {tokens.map((tok, i) => (
          <div key={i} className="hw-cell" style={{ width: boxSize }}>
            <div className={`hw-box sw-demo-box${tok.t === "p" ? " hw-punct" : ""}`} style={{ width: boxSize, height: boxSize }}>
              {tok.t === "c" ? (
                <div className="sw-demo-holder" ref={(el) => { boxRefs.current[i] = el; }} />
              ) : (
                <span className="sw-static-hz" style={{ fontSize: Math.round(boxSize * 0.72) }}>{tok.ch}</span>
              )}
            </div>
            <div className="hw-cell-ref sw-ref-below">
              <span className="hw-cell-py">{tok.t === "c" ? (pinyinMap?.[tok.ch] || "") : ""}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-secondary stroke-anim-btn" onClick={replay}>▶ 看笔顺 Watch strokes</button>
    </div>
  );
}
