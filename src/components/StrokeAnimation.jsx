import { useEffect, useRef } from "react";
import HanziWriter from "hanzi-writer";

// Read-only stroke-order animation for the reveal/info panel: shows the full
// character(s) and plays the stroke order, with a Replay button. (The quiz
// component is the recall part; this is the "show me how" part after.)
export default function StrokeAnimation({ word, size = 150 }) {
  const rowRef = useRef(null);
  const writersRef = useRef([]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    row.innerHTML = "";
    const chars = [...String(word || "")];
    const writers = chars.map((ch) => {
      const holder = document.createElement("div");
      holder.className = "stroke-anim-char";
      row.appendChild(holder);
      return HanziWriter.create(holder, ch, {
        width: size,
        height: size,
        padding: 4,
        showCharacter: true,
        showOutline: true,
        strokeColor: "#1A237E",
        strokeAnimationSpeed: 1.2,
        delayBetweenStrokes: 160,
      });
    });
    writersRef.current = writers;

    let cancelled = false;
    const playFrom = (i) => {
      if (cancelled || i >= writers.length) return;
      writers[i].animateCharacter({ onComplete: () => playFrom(i + 1) });
    };
    playFrom(0);

    return () => { cancelled = true; row.innerHTML = ""; writersRef.current = []; };
  }, [word, size]);

  const replay = () => {
    const writers = writersRef.current;
    const playFrom = (i) => {
      if (i >= writers.length) return;
      writers[i].animateCharacter({ onComplete: () => playFrom(i + 1) });
    };
    playFrom(0);
  };

  return (
    <div className="stroke-anim">
      <div ref={rowRef} className="stroke-anim-row" />
      <button className="btn-secondary stroke-anim-btn" onClick={replay}>▶ 看笔顺 Replay strokes</button>
    </div>
  );
}
