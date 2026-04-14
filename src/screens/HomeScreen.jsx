import { getTotalStars } from "../utils/constants";
import { loadStreak } from "../utils/progress";
import AdSlot from "../components/AdSlot";

const LEVELS = [
  { id: "p1", title: "Primary 1", subtitle: "Age 6-7", icon: "1" },
  { id: "p2", title: "Primary 2", subtitle: "Age 7-8", icon: "2" },
  { id: "p3", title: "Primary 3", subtitle: "Age 8-9", icon: "3" },
  { id: "p4", title: "Primary 4", subtitle: "Age 9-10", icon: "4" },
  { id: "p5", title: "Primary 5", subtitle: "Age 10-11", icon: "5" },
  { id: "p6", title: "Primary 6", subtitle: "Age 11-12", icon: "6" },
];

const SUBJECTS_PREVIEW = ["Math", "English", "Science", "Chinese"];

export default function HomeScreen({ progress, activeChild, user, onSelectLevel, onDashboard, onSwitchChild, onSignOut, onAbout, onHowTo }) {
  const totalStars = getTotalStars(progress.moduleStars || {});
  const streak = loadStreak();

  return (
    <div className="screen home-screen">
      <div className="hero-section">
        <span className="hero-mascot">🦊</span>
        <h1 className="hero-title">Koko's Classroom</h1>
        {activeChild ? (
          <p className="hero-tagline">
            Welcome back, <strong>{activeChild.name}</strong>! {activeChild.avatar}
          </p>
        ) : (
          <p className="hero-tagline">
            Free interactive learning for Primary 1–3, aligned to the Singapore MOE syllabus.
          </p>
        )}
        <div className="hero-subjects">
          {SUBJECTS_PREVIEW.map((s) => (
            <span key={s} className="hero-pill">{s}</span>
          ))}
        </div>
      </div>

      {(totalStars > 0 || streak.count > 0) && (
        <div className="welcome-progress">
          {totalStars > 0 && <span>⭐ {totalStars} total stars</span>}
          {streak.count > 0 && <span>🔥 {streak.count} day streak!</span>}
        </div>
      )}

      <p className="home-pick-label">Choose your level to start</p>

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

      <AdSlot />

      <div className="home-links">
        {activeChild && (
          <>
            <button className="about-link" onClick={onDashboard}>
              Progress
            </button>
            <span className="home-link-dot">·</span>
            <button className="about-link" onClick={onSwitchChild}>
              Switch Child
            </button>
            <span className="home-link-dot">·</span>
          </>
        )}
        <button className="about-link" onClick={onHowTo}>
          How to Use
        </button>
        <span className="home-link-dot">·</span>
        <button className="about-link" onClick={onAbout}>
          About
        </button>
        {user && (
          <>
            <span className="home-link-dot">·</span>
            <button className="about-link" onClick={onSignOut}>
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
