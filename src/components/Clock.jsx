export default function Clock({ hours, minutes, size = 160 }) {
  const h = hours % 12;
  const m = minutes;

  // Angle calculations
  const minuteAngle = m * 6; // 360/60 = 6 degrees per minute
  const hourAngle = h * 30 + m * 0.5; // 360/12 = 30 degrees per hour + minute offset

  const center = size / 2;
  const radius = size / 2 - 4;
  const numberRadius = radius * 0.78;
  const hourHandLen = radius * 0.5;
  const minuteHandLen = radius * 0.7;
  const tickOuterRadius = radius * 0.92;
  const tickInnerMajor = radius * 0.82;
  const tickInnerMinor = radius * 0.87;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="clock-svg"
      aria-label={`Clock showing ${hours}:${String(minutes).padStart(2, "0")}`}
    >
      {/* Face */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="#FFFDE7"
        stroke="#FFB347"
        strokeWidth={4}
      />

      {/* Tick marks */}
      {Array.from({ length: 60 }, (_, i) => {
        const angle = ((i * 6 - 90) * Math.PI) / 180;
        const isMajor = i % 5 === 0;
        const inner = isMajor ? tickInnerMajor : tickInnerMinor;
        return (
          <line
            key={i}
            x1={center + Math.cos(angle) * inner}
            y1={center + Math.sin(angle) * inner}
            x2={center + Math.cos(angle) * tickOuterRadius}
            y2={center + Math.sin(angle) * tickOuterRadius}
            stroke={isMajor ? "#333" : "#bbb"}
            strokeWidth={isMajor ? 2 : 1}
            strokeLinecap="round"
          />
        );
      })}

      {/* Numbers */}
      {Array.from({ length: 12 }, (_, i) => {
        const num = i + 1;
        const angle = ((num * 30 - 90) * Math.PI) / 180;
        return (
          <text
            key={num}
            x={center + Math.cos(angle) * numberRadius}
            y={center + Math.sin(angle) * numberRadius}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={size * 0.12}
            fontFamily="Nunito, sans-serif"
            fontWeight="700"
            fill="#333"
          >
            {num}
          </text>
        );
      })}

      {/* Hour hand */}
      <line
        x1={center}
        y1={center}
        x2={center + Math.sin((hourAngle * Math.PI) / 180) * hourHandLen}
        y2={center - Math.cos((hourAngle * Math.PI) / 180) * hourHandLen}
        stroke="#E53935"
        strokeWidth={size * 0.04}
        strokeLinecap="round"
      />

      {/* Minute hand */}
      <line
        x1={center}
        y1={center}
        x2={center + Math.sin((minuteAngle * Math.PI) / 180) * minuteHandLen}
        y2={center - Math.cos((minuteAngle * Math.PI) / 180) * minuteHandLen}
        stroke="#00897B"
        strokeWidth={size * 0.025}
        strokeLinecap="round"
      />

      {/* Center dot */}
      <circle cx={center} cy={center} r={size * 0.03} fill="#333" />
    </svg>
  );
}
