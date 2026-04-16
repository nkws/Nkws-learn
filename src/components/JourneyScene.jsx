const WIDTH = 280;
const HEIGHT = 120;

const SCENES = {
  "journey-two-segments": () => (
    <>
      <div
        style={{
          position: "absolute", left: 0, top: 8, width: "100%",
          textAlign: "center", fontSize: 12, color: "#5D4037", fontWeight: 700,
        }}
      >
        Mary's journey
      </div>
      <div
        style={{
          position: "absolute", left: 30, top: 45, width: 150, height: 32,
          background: "#90CAF9", border: "2px solid #1976D2", borderRadius: 4,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700, color: "#0D47A1",
        }}
      >
        60 km/h × 3 h
      </div>
      <div
        style={{
          position: "absolute", left: 180, top: 45, width: 70, height: 32,
          background: "#FFCC80", border: "2px solid #F57C00", borderRadius: 4,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 700, color: "#E65100",
        }}
      >
        80 km/h × 2 h
      </div>
      <div
        style={{
          position: "absolute", left: 0, top: 88, width: "100%",
          textAlign: "center", fontSize: 11, color: "#666", fontStyle: "italic",
        }}
      >
        Total distance ÷ Total time
      </div>
    </>
  ),
  "cars-opposite-directions": () => (
    <>
      <div
        style={{
          position: "absolute", left: 130, top: 50, width: 20, height: 20,
          background: "#FFE082", borderRadius: "50%", border: "2px dashed #5D4037",
        }}
      />
      <div
        style={{
          position: "absolute", left: 110, top: 75, width: 60, textAlign: "center",
          fontSize: 10, color: "#5D4037", fontWeight: 700,
        }}
      >
        start
      </div>
      <div style={{ position: "absolute", left: 5, top: 38, fontSize: 22, color: "#1976D2", fontWeight: 700 }}>←</div>
      <div style={{ position: "absolute", left: 35, top: 30, fontSize: 30 }}>🚗</div>
      <div
        style={{
          position: "absolute", left: 0, top: 95, width: 105, textAlign: "center",
          fontSize: 11, color: "#1976D2", fontWeight: 700,
        }}
      >
        Car A 70 km/h
      </div>
      <div style={{ position: "absolute", left: 215, top: 30, fontSize: 30, transform: "scaleX(-1)" }}>🚗</div>
      <div style={{ position: "absolute", left: 252, top: 38, fontSize: 22, color: "#F57C00", fontWeight: 700 }}>→</div>
      <div
        style={{
          position: "absolute", left: 175, top: 95, width: 105, textAlign: "center",
          fontSize: 11, color: "#F57C00", fontWeight: 700,
        }}
      >
        Car B 50 km/h
      </div>
    </>
  ),
  "cyclists-same-direction": () => (
    <>
      <div style={{ position: "absolute", left: 40, top: 30, fontSize: 28, transform: "scaleX(-1)" }}>🚴</div>
      <div style={{ position: "absolute", left: 78, top: 38, fontSize: 18, color: "#F57C00", fontWeight: 700 }}>→</div>
      <div
        style={{
          position: "absolute", left: 25, top: 70, width: 90, textAlign: "center",
          fontSize: 11, color: "#F57C00", fontWeight: 700,
        }}
      >
        Ben 8 km/h
      </div>
      <div
        style={{
          position: "absolute", left: 25, top: 88, width: 90, textAlign: "center",
          fontSize: 10, color: "#999",
        }}
      >
        (slower, behind)
      </div>
      <div style={{ position: "absolute", left: 175, top: 30, fontSize: 28, transform: "scaleX(-1)" }}>🚴</div>
      <div style={{ position: "absolute", left: 215, top: 38, fontSize: 18, color: "#1976D2", fontWeight: 700 }}>→</div>
      <div
        style={{
          position: "absolute", left: 165, top: 70, width: 90, textAlign: "center",
          fontSize: 11, color: "#1976D2", fontWeight: 700,
        }}
      >
        Ali 12 km/h
      </div>
      <div
        style={{
          position: "absolute", left: 165, top: 88, width: 90, textAlign: "center",
          fontSize: 10, color: "#999",
        }}
      >
        (faster, ahead)
      </div>
    </>
  ),
};

export default function JourneyScene({ type }) {
  const render = SCENES[type];
  if (!render) return null;

  return (
    <div
      className="journey-scene"
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
      aria-label={`Journey diagram: ${type.replace(/-/g, " ")}`}
    >
      {render()}
    </div>
  );
}
