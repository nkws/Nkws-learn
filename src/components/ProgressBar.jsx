import { STARS_PER_REWARD, LEVEL_NAMES } from "../utils/constants";

export default function ProgressBar({ stars, level }) {
  const starsToNext = STARS_PER_REWARD - (stars % STARS_PER_REWARD);
  const progressPct = ((stars % STARS_PER_REWARD) / STARS_PER_REWARD) * 100;
  const levelName = LEVEL_NAMES[level] || `Level ${level}`;

  return (
    <div className="progress-bar-container">
      <div className="progress-stats">
        <span className="stars-count">⭐ {stars}</span>
        <span className="level-badge">Lv{level}: {levelName}</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>
      <div className="progress-hint">
        {starsToNext} star{starsToNext !== 1 ? "s" : ""} to 🎬 reward!
      </div>
    </div>
  );
}
