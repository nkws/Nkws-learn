const WIDTH = 240;
const HEIGHT = 180;

function Box({ x, y, w, h, label, color = "#D2B48C", border = "#8B4513" }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: x, top: y, width: w, height: h,
          background: color, border: `2px solid ${border}`, borderRadius: 4,
        }}
      />
      {label && (
        <div
          style={{
            position: "absolute",
            left: x, top: y + h / 2 - 8, width: w,
            textAlign: "center", fontSize: 11, fontWeight: 700,
            color: "#5D4037", letterSpacing: 0.5, pointerEvents: "none",
          }}
        >
          {label}
        </div>
      )}
    </>
  );
}

function Emoji({ x, y, char, size = 48 }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x, top: y,
        fontSize: size, lineHeight: 1,
        userSelect: "none",
      }}
    >
      {char}
    </div>
  );
}

const SCENES = {
  "cat-on-box": () => (
    <>
      <Box x={70} y={95} w={100} h={60} label="BOX" />
      <Emoji x={95} y={48} char="🐱" />
    </>
  ),
  "cat-under-table": () => (
    <>
      {/* Table top */}
      <div style={{ position: "absolute", left: 45, top: 70, width: 150, height: 14, background: "#A0522D", borderRadius: 2 }} />
      {/* Table legs */}
      <div style={{ position: "absolute", left: 55, top: 84, width: 8, height: 60, background: "#A0522D" }} />
      <div style={{ position: "absolute", left: 177, top: 84, width: 8, height: 60, background: "#A0522D" }} />
      <Emoji x={95} y={95} char="🐱" />
      <div style={{ position: "absolute", left: 45, top: 148, width: 150, textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5D4037" }}>TABLE</div>
    </>
  ),
  "cat-in-box": () => (
    <>
      {/* Open box — box body */}
      <Box x={70} y={75} w={100} h={85} label="" color="#D2B48C" />
      {/* Cat head peeking out */}
      <Emoji x={95} y={50} char="🐱" />
      {/* Front flap to suggest "inside" */}
      <div style={{ position: "absolute", left: 70, top: 120, width: 100, height: 40, background: "#B8915A", border: "2px solid #8B4513", borderRadius: 2 }} />
      <div style={{ position: "absolute", left: 70, top: 135, width: 100, textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5D4037" }}>BOX</div>
    </>
  ),
  "cat-behind-tree": () => (
    <>
      {/* Tree trunk */}
      <div style={{ position: "absolute", left: 100, top: 60, width: 40, height: 100, background: "#6D4C41", borderRadius: 4 }} />
      {/* Tree leaves */}
      <div style={{ position: "absolute", left: 75, top: 25, width: 90, height: 60, background: "#4CAF50", borderRadius: "50%" }} />
      {/* Cat peeking out from the right side */}
      <Emoji x={140} y={90} char="🐱" />
      <div style={{ position: "absolute", left: 60, top: 160, width: 120, textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5D4037" }}>TREE</div>
    </>
  ),
  "cat-in-front-of-house": () => (
    <>
      {/* House body */}
      <div style={{ position: "absolute", left: 70, top: 55, width: 100, height: 75, background: "#FFE082", border: "2px solid #E6A23C" }} />
      {/* House roof */}
      <div style={{
        position: "absolute", left: 60, top: 25, width: 0, height: 0,
        borderLeft: "60px solid transparent",
        borderRight: "60px solid transparent",
        borderBottom: "32px solid #C62828",
      }} />
      {/* Door */}
      <div style={{ position: "absolute", left: 105, top: 85, width: 30, height: 45, background: "#6D4C41" }} />
      {/* Cat in front (lower foreground) */}
      <Emoji x={40} y={115} char="🐱" />
      <div style={{ position: "absolute", left: 70, top: 135, width: 100, textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5D4037" }}>HOUSE</div>
    </>
  ),
  "cat-next-to-dog": () => (
    <>
      {/* Ground line */}
      <div style={{ position: "absolute", left: 20, top: 140, width: 200, height: 3, background: "#8D6E63", borderRadius: 2 }} />
      <Emoji x={60} y={80} char="🐱" />
      <Emoji x={135} y={80} char="🐶" />
    </>
  ),
  "cat-between-boxes": () => (
    <>
      <Box x={20} y={85} w={60} h={70} label="BOX" />
      <Box x={160} y={85} w={60} h={70} label="BOX" />
      <Emoji x={100} y={90} char="🐱" />
    </>
  ),
  "bird-above-tree": () => (
    <>
      {/* Bird up high */}
      <Emoji x={100} y={15} char="🐦" size={44} />
      {/* Tree trunk */}
      <div style={{ position: "absolute", left: 105, top: 110, width: 30, height: 50, background: "#6D4C41", borderRadius: 4 }} />
      {/* Tree leaves */}
      <div style={{ position: "absolute", left: 80, top: 80, width: 80, height: 50, background: "#4CAF50", borderRadius: "50%" }} />
      <div style={{ position: "absolute", left: 60, top: 160, width: 120, textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5D4037" }}>TREE</div>
    </>
  ),
};

export default function PrepositionScene({ type }) {
  const render = SCENES[type];
  if (!render) return null;

  return (
    <div
      className="preposition-scene"
      style={{
        position: "relative",
        width: WIDTH,
        height: HEIGHT,
        background: "#FFFEF0",
        border: "2px solid #FFB347",
        borderRadius: 12,
        margin: "8px auto",
        overflow: "hidden",
      }}
      role="img"
      aria-label={`Scene: ${type.replace(/-/g, " ")}`}
    >
      {render()}
    </div>
  );
}
