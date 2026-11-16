import { useEffect, useLayoutEffect, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import { boxSizeFor } from "../utils/writingBox";

// Read-only "watch how it's written" line: each character is shown as a faint
// outline the child can read; TAP a character and it writes its own strokes in
// order (stroke data used only to show — never to grade the child's writing).
// A button plays them all in sequence. Punctuation has no stroke data, so it's
// shown statically. Column-aligned with the freehand practice line below.
export default function StrokeDemoLine({ tokens, size, pinyinMap, onWidth }) {
  const boxSize = size || boxSizeFor(tokens.length);
  const boxRefs = useRef([]);
  const writersRef = useRef([]);
  const lineRef = useRef(null);
  const runRef = useRef(0); // only the latest "watch all" run plays
  const [noData, setNoData] = useState(() => new Set()); // char indices with no stroke data

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
        onLoadCharDataError() { setNoData((s) => (s.has(i) ? s : new Set(s).add(i))); },
      });
    });
    writersRef.current = writers;

    return () => {
      boxes.forEach((el) => { if (el) el.innerHTML = ""; });
      writersRef.current = []; // replaces the array, so any run below stops
    };
  }, [tokens, boxSize]);

  // Tap one character: it writes just its own strokes.
  const animateOne = (i) => {
    const w = writersRef.current[i];
    if (!w) return;
    try { w.animateCharacter(); } catch { /* ignore */ }
  };

  // Play them all in order. A new press starts a fresh run and the previous one
  // stops, so repeated taps never stack overlapping animations.
  const replay = () => {
    const writers = writersRef.current;
    const order = tokens.map((t, i) => (t.t === "c" ? i : -1)).filter((i) => i >= 0);
    const myRun = ++runRef.current;
    const playFrom = (k) => {
      if (myRun !== runRef.current || writers !== writersRef.current || k >= order.length) return;
      const w = writers[order[k]];
      if (!w) { playFrom(k + 1); return; }
      w.animateCharacter({ onComplete: () => playFrom(k + 1) });
    };
    playFrom(0);
  };

  return (
    <div className="sw-demo">
      <div className="sw-demo-top">
        <button className="btn-secondary stroke-anim-btn" onClick={replay}>▶ 全部演示 Watch all</button>
        <span className="sw-demo-hint">点字看笔顺 Tap a word</span>
      </div>
      <div className="hw-line" ref={lineRef}>
        {tokens.map((tok, i) => {
          const strokes = tok.t === "c" && !noData.has(i); // has stroke data to animate
          return (
          <div key={i} className="hw-cell" style={{ width: boxSize }}>
            <div
              className={`hw-box sw-demo-box${tok.t === "p" ? " hw-punct" : ""}${strokes ? " sw-demo-tap" : ""}`}
              style={{ width: boxSize, height: boxSize }}
              onClick={strokes ? () => animateOne(i) : undefined}
            >
              {/* Always mount a holder for characters so the writer can load;
                  overlay the glyph when there's no stroke data. */}
              {tok.t === "c" && <div className="sw-demo-holder" ref={(el) => { boxRefs.current[i] = el; }} />}
              {(tok.t !== "c" || noData.has(i)) && (
                <span className="sw-static-hz" style={{ fontSize: Math.round(boxSize * 0.72) }}>{tok.ch}</span>
              )}
            </div>
            <div className="hw-cell-ref sw-ref-below">
              <span className="hw-cell-py">{tok.t === "c" ? (pinyinMap?.[tok.ch] || "") : ""}</span>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
