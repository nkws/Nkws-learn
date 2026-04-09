import { getTotalStars } from "../utils/constants";

const LEVELS = [
  { id: "p1", title: "Primary 1", subtitle: "Age 6-7", icon: "1" },
  { id: "p2", title: "Primary 2", subtitle: "Age 7-8", icon: "2" },
  { id: "p3", title: "Primary 3", subtitle: "Age 8-9", icon: "3" },
];

export default function HomeScreen({ progress, onSelectLevel, onAbout }) {
  const totalStars = getTotalStars(progress.moduleStars || {});

  return (
    <div className="screen home-screen">
      <div className="home-header">
        <span className="home-mascot">🦊</span>
        <div>
          <h1 className="home-heading">Koko's Classroom</h1>
          <p className="home-sub">Pick your level!</p>
        </div>
      </div>

      {totalStars > 0 && (
        <div className="welcome-progress">
          <span>⭐ {totalStars} total stars</span>
        </div>
      )}

      <div className="topic-list">
        {LEVELS.map((level) => (
          <button
            key={level.id}
            className="topic-card"
            onClick={() => onSelectLevel(level.id)}
          >
            <span className="level-icon">{level.icon}</span>
            <div className="topic-info">
              <h2 className="topic-title">{level.title}</h2>
              <p className="topic-desc">{level.subtitle}</p>
            </div>
            <span className="topic-arrow">›</span>
          </button>
        ))}
      </div>

      <button className="about-link" onClick={onAbout}>
        About Koko's Classroom
      </button>
    </div>
  );
}
