import { useEffect, useLayoutEffect, useRef } from "react";
import HanziWriter from "hanzi-writer";
import { boxSizeFor } from "../utils/writingBox";

// Read-only "watch how it's written" line: each character auto-writes its
// strokes in order (a presentation, using the stroke data only to show — never
// to grade or compare the child's writing). Punctuation has no stroke data, so
// it's shown statically. Column-aligned with the freehand practice line below.
export default function StrokeDemoLine({ tokens, size, pinyinMap, onWidth }) {
  const boxSize = size || boxSizeFor(tokens.length);
  const boxRefs = useRef([]);
  const writersRef = useRef([]);
  const lineRef = useRef(null);
  const runRef = useRef(0); // only the latest animation run plays; a new press restarts it

  // Report the demonstration's actual rendered width so the writing pad below
  // can be made the same left-to-right length.
  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!line || !onWidth) return;
    const measure = () => onWidth(Math.round(line.getBoundingClientRect().width));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(line);
    return () => ro.disconnect();
  }, [tokens, boxSize, onWidth]);

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
    const myRun = ++runRef.current;
    const playFrom = (k) => {
      if (cancelled || myRun !== runRef.current || k >= order.length) return;
      const w = writers[order[k]];
      if (!w) { playFrom(k + 1); return; }
      w.animateCharacter({ onComplete: () => playFrom(k + 1) });
    };
    playFrom(0);

    return () => {
      cancelled = true;
      runRef.current++; // stop any in-flight run
      boxes.forEach((el) => { if (el) el.innerHTML = ""; });
      writersRef.current = [];
    };
  }, [tokens, boxSize]);

  // Replay the strokes. A new press starts a fresh run and the previous one
  // stops, so repeated taps never stack overlapping animations.
  const replay = () => {
    const writers = writersRef.current;
    const order = tokens.map((t, i) => (t.t === "c" ? i : -1)).filter((i) => i >= 0);
    const myRun = ++runRef.current;
    const playFrom = (k) => {
      if (myRun !== runRef.current || k >= order.length) return;
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
