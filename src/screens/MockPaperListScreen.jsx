import { useState } from "react";
import { MOCK_PAPERS, isPaperLocked } from "../topics/mockpapers";
import { loadMockPaperHistory } from "../utils/progress";
import { createCheckoutSession } from "../utils/cloudSync";

const SUBJECT_LABELS = { math: "Mathematics", english: "English", science: "Science", chinese: "华文" };
const SUBJECT_ICONS = { math: "🔢", english: "📖", science: "🔬", chinese: "字" };

export default function MockPaperListScreen({ level, isPlus, user, onStartPaper, onBack }) {
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [upgradeLoading, setUpgradeLoading] = useState(false);

  const papers = MOCK_PAPERS.filter((p) => p.level === level);
  const history = loadMockPaperHistory();

  // Most recent attempt per paperId
  const recentByPaper = {};
  for (const h of history) {
    if (!recentByPaper[h.paperId]) recentByPaper[h.paperId] = h;
  }

  // Group by subject
  const bySubject = {};
  for (const p of papers) {
    if (!bySubject[p.subject]) bySubject[p.subject] = [];
    bySubject[p.subject].push(p);
  }

  const handlePaperClick = (paper) => {
    if (isPaperLocked(paper, isPlus)) {
      setShowUpgrade(true);
      return;
    }
    onStartPaper(paper.id);
  };

  return (
    <div className="screen home-screen">
      <div className="welcome-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <div>
          <h1 className="welcome-heading">PSLE Prep</h1>
          <p className="welcome-sub">{level.toUpperCase()} mock papers — timed, mixed-topic, exam-style.</p>
        </div>
      </div>

      {papers.length === 0 ? (
        <div className="hero-section">
          <span className="hero-mascot">📘</span>
          <p className="hero-tagline">No papers available for this level yet — coming soon.</p>
        </div>
      ) : (
        Object.entries(bySubject).map(([subject, subjectPapers]) => (
          <div key={subject}>
            <p className="home-pick-label">
              {SUBJECT_ICONS[subject]} {SUBJECT_LABELS[subject] || subject}
            </p>
            <div className="topic-list">
              {subjectPapers.map((paper) => {
                const locked = isPaperLocked(paper, isPlus);
                const last = recentByPaper[paper.id];
                return (
                  <button
                    key={paper.id}
                    className="topic-card"
                    onClick={() => handlePaperClick(paper)}
                  >
                    <span className="topic-icon">{locked ? "🔒" : "📝"}</span>
                    <div className="topic-info">
                      <h2 className="topic-title">
                        {paper.title}
                        {locked && <span style={{ marginLeft: "0.5rem", fontSize: "0.7em", color: "#999" }}>Plus</span>}
                      </h2>
                      <p className="topic-desc">{paper.description}</p>
                      {last && (
                        <span className="topic-stars">
                          Last attempt: {last.score} / {last.total} ({Math.round((last.score / last.total) * 100)}%)
                        </span>
                      )}
                    </div>
                    <span className="topic-arrow">›</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))
      )}

      {showUpgrade && (
        <div className="reward-overlay" onClick={() => setShowUpgrade(false)}>
          <div className="reward-modal upgrade-modal" onClick={(e) => e.stopPropagation()}>
            <div className="reward-emojis">📝</div>
            <h2 className="reward-title">Unlock more PSLE papers</h2>
            <p className="reward-subtitle">
              The first paper in each subject is free. Upgrade to Koko Plus to unlock all papers, including harder PSLE-depth practice sets.
            </p>
            <ul className="upgrade-features">
              <li>All PSLE mock papers, timed and exam-style</li>
              <li>Topic-by-topic scorecard with weak-topic drill-back</li>
              <li>Unlimited child profiles</li>
              <li>Detailed progress reports</li>
            </ul>
            <button
              className="btn-primary reward-dismiss upgrade-btn"
              disabled={upgradeLoading || !user}
              onClick={async () => {
                if (!user) { setShowUpgrade(false); return; }
                setUpgradeLoading(true);
                const url = await createCheckoutSession(user.id, user.email);
                if (url) {
                  window.location.href = url;
                } else {
                  setUpgradeLoading(false);
                }
              }}
            >
              {!user ? "Sign in to upgrade" : upgradeLoading ? "Loading..." : "Upgrade — $4.99/month"}
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
