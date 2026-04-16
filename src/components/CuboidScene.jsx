const WIDTH = 280;
const HEIGHT = 160;

function Cuboid({ x, y, w, h, depth, color = "#90CAF9", border = "#1976D2" }) {
  return (
    <svg
      width={w + depth + 4}
      height={h + depth + 4}
      style={{ position: "absolute", left: x, top: y, overflow: "visible" }}
    >
      {/* Back face (offset by depth) */}
      <rect x={depth} y={2} width={w} height={h} fill={color} stroke={border} strokeWidth={2} opacity={0.5} />
      {/* Top face (parallelogram) */}
      <polygon
        points={`2,${2 + depth} ${w + 2},${2 + depth} ${w + depth},2 ${depth},2`}
        fill={color}
        stroke={border}
        strokeWidth={2}
        opacity={0.7}
      />
      {/* Right face (parallelogram) */}
      <polygon
        points={`${w + 2},${2 + depth} ${w + 2},${h + 2 + depth} ${w + depth},${h + 2} ${w + depth},2`}
        fill={color}
        stroke={border}
        strokeWidth={2}
        opacity={0.6}
      />
      {/* Front face (main rectangle) */}
      <rect x={2} y={2 + depth} width={w} height={h} fill={color} stroke={border} strokeWidth={2} />
    </svg>
  );
}

const SCENES = {
  "cuboid-5-4-3": () => (
    <>
      <Cuboid x={70} y={30} w={120} h={70} depth={28} />
      <div style={{ position: "absolute", left: 70, top: 110, width: 120, textAlign: "center", fontSize: 12, fontWeight: 700, color: "#0D47A1" }}>
        5 cm
      </div>
      <div style={{ position: "absolute", left: 200, top: 65, fontSize: 12, fontWeight: 700, color: "#0D47A1" }}>
        4 cm
      </div>
      <div style={{ position: "absolute", left: 25, top: 50, fontSize: 12, fontWeight: 700, color: "#0D47A1" }}>
        3 cm
      </div>
      <div style={{ position: "absolute", left: 0, top: 135, width: "100%", textAlign: "center", fontSize: 11, color: "#666", fontStyle: "italic" }}>
        Cuboid: 5 × 4 × 3
      </div>
    </>
  ),
  "cube-side-6": () => (
    <>
      <Cuboid x={90} y={30} w={90} h={90} depth={26} color="#A5D6A7" border="#388E3C" />
      <div style={{ position: "absolute", left: 90, top: 130, width: 90, textAlign: "center", fontSize: 12, fontWeight: 700, color: "#1B5E20" }}>
        6 cm
      </div>
      <div style={{ position: "absolute", left: 185, top: 75, fontSize: 12, fontWeight: 700, color: "#1B5E20" }}>
        6 cm
      </div>
      <div style={{ position: "absolute", left: 50, top: 50, fontSize: 12, fontWeight: 700, color: "#1B5E20" }}>
        6 cm
      </div>
    </>
  ),
  "cuboid-find-height": () => (
    <>
      <Cuboid x={70} y={20} w={120} h={80} depth={28} color="#FFCC80" border="#E65100" />
      <div style={{ position: "absolute", left: 70, top: 110, width: 120, textAlign: "center", fontSize: 12, fontWeight: 700, color: "#E65100" }}>
        5 cm
      </div>
      <div style={{ position: "absolute", left: 200, top: 60, fontSize: 12, fontWeight: 700, color: "#E65100" }}>
        4 cm
      </div>
      <div style={{ position: "absolute", left: 25, top: 50, fontSize: 14, fontWeight: 700, color: "#E65100" }}>
        h = ?
      </div>
      <div style={{ position: "absolute", left: 0, top: 135, width: "100%", textAlign: "center", fontSize: 11, color: "#666", fontStyle: "italic" }}>
        Volume = 120 cm³
      </div>
    </>
  ),
  "cube-doubled": () => (
    <>
      <div style={{ position: "absolute", left: 0, top: 8, width: "100%", textAlign: "center", fontSize: 12, color: "#5D4037", fontWeight: 700 }}>
        Compare: 1 × 1 × 1 vs 2 × 2 × 2
      </div>
      {/* Small cube */}
      <Cuboid x={45} y={70} w={32} h={32} depth={14} color="#90CAF9" border="#1976D2" />
      <div style={{ position: "absolute", left: 35, top: 130, width: 70, textAlign: "center", fontSize: 11, fontWeight: 700, color: "#0D47A1" }}>
        1 unit cube
      </div>
      <div style={{ position: "absolute", left: 35, top: 145, width: 70, textAlign: "center", fontSize: 10, color: "#666" }}>
        Volume = 1
      </div>
      {/* Bigger cube (2x bigger sides — visually at 2x dimensions) */}
      <Cuboid x={155} y={45} w={64} h={64} depth={28} color="#FFCC80" border="#E65100" />
      <div style={{ position: "absolute", left: 145, top: 130, width: 90, textAlign: "center", fontSize: 11, fontWeight: 700, color: "#E65100" }}>
        Doubled cube
      </div>
      <div style={{ position: "absolute", left: 145, top: 145, width: 90, textAlign: "center", fontSize: 10, color: "#666" }}>
        Volume = 8
      </div>
    </>
  ),
};

export default function CuboidScene({ type }) {
  const render = SCENES[type];
  if (!render) return null;

  return (
    <div
      className="cuboid-scene"
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
      aria-label={`Cuboid diagram: ${type.replace(/-/g, " ")}`}
    >
      {render()}
    </div>
  );
}
