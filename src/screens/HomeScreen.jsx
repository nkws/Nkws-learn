import { useState } from "react";
import { getTotalStars } from "../utils/constants";
import { loadStreak } from "../utils/progress";
import { createCheckoutSession } from "../utils/cloudSync";
import SupportLink from "../components/AdSlot";

const LEVELS = [
  { id: "p1", title: "Primary 1", subtitle: "Age 6-7", icon: "1" },
  { id: "p2", title: "Primary 2", subtitle: "Age 7-8", icon: "2" },
  { id: "p3", title: "Primary 3", subtitle: "Age 8-9", icon: "3" },
  { id: "p4", title: "Primary 4", subtitle: "Age 9-10", icon: "4" },
  { id: "p5", title: "Primary 5", subtitle: "Age 10-11", icon: "5" },
  { id: "p6", title: "Primary 6", subtitle: "Age 11-12", icon: "6" },
];

const SUBJECTS_PREVIEW = ["Math", "English", "Science", "Chinese"];

export default function HomeScreen({ progress, activeChild, user, isPlus, onSelectLevel, onDashboard, onSwitchChild, onManageSubscription, onSignOut, onAbout, onHowTo }) {
  const totalStars = getTotalStars(progress.moduleStars || {});
  const streak = loadStreak();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [upgradeLoading, setUpgradeLoading] = useState(false);

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
            Free interactive learning for Primary 1–6, aligned to the Singapore MOE syllabus.
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
        {user && isPlus && onManageSubscription && (
          <>
            <button className="about-link" onClick={onManageSubscription}>
              Manage Subscription
            </button>
            <span className="home-link-dot">·</span>
          </>
        )}
        {user && !isPlus && (
          <>
            <button className="about-link" onClick={() => setShowUpgrade(true)}>
              Upgrade to Koko Plus
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

      <SupportLink />

      {showUpgrade && (
        <div className="reward-overlay" onClick={() => setShowUpgrade(false)}>
          <div className="reward-modal upgrade-modal" onClick={(e) => e.stopPropagation()}>
            <div className="reward-emojis">⭐</div>
            <h2 className="reward-title">Koko Plus</h2>
            <p className="reward-subtitle">
              Upgrade to Koko Plus to unlock more features for your family.
            </p>
            <ul className="upgrade-features">
              <li>Unlimited child profiles</li>
              <li>Detailed progress reports</li>
              <li>Achievement badges</li>
              <li>Avatar & theme customisation</li>
            </ul>
            <button
              className="btn-primary reward-dismiss upgrade-btn"
              disabled={upgradeLoading}
              onClick={async () => {
                if (!user) return;
                setUpgradeLoading(true);
                const url = await createCheckoutSession(user.id, user.email);
                if (url) {
                  window.location.href = url;
                } else {
                  setUpgradeLoading(false);
                }
              }}
            >
              {upgradeLoading ? "Loading..." : "Upgrade — $4.99/month"}
            </button>
            <button className="confirm-cancel" onClick={() => setShowUpgrade(false)}>
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
