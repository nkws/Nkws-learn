import { useState, useEffect } from "react";
import { getTotalStars, LEVELS } from "../utils/constants";
import { fetchRecentAttempts, fetchWeeklyStats } from "../utils/cloudSync";

function getModuleTitle(moduleId) {
  for (const level of Object.values(LEVELS)) {
    for (const subject of level) {
      for (const topic of subject.topics) {
        const mod = topic.modules.find((m) => m.id === moduleId);
        if (mod) return mod.title;
      }
    }
  }
  return moduleId;
}

function getTopicForModule(moduleId) {
  for (const level of Object.values(LEVELS)) {
    for (const subject of level) {
      for (const topic of subject.topics) {
        if (topic.modules.some((m) => m.id === moduleId)) {
          return topic.title;
        }
      }
    }
  }
  return "Unknown";
}

function getSubjectForModule(moduleId) {
  for (const level of Object.values(LEVELS)) {
    for (const subject of level) {
      for (const topic of subject.topics) {
        if (topic.modules.some((m) => m.id === moduleId)) {
          return subject.title;
        }
      }
    }
  }
  return "Unknown";
}

function groupByWeek(attempts) {
  const weeks = {};
  attempts.forEach((a) => {
    const date = new Date(a.completed_at);
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - date.getDay());
    const key = weekStart.toISOString().slice(0, 10);
    if (!weeks[key]) weeks[key] = { scores: [], total: 0, count: 0 };
    weeks[key].scores.push(a.score / a.total);
    weeks[key].total += a.score;
    weeks[key].count++;
  });
  return Object.entries(weeks)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([week, data]) => ({
      week,
      avg: Math.round((data.scores.reduce((s, v) => s + v, 0) / data.scores.length) * 100),
      count: data.count,
    }));
}

function findWeakAreas(attempts) {
  const byTopic = {};
  attempts.forEach((a) => {
    const topic = getTopicForModule(a.module_id);
    if (!byTopic[topic]) byTopic[topic] = { scores: [], total: 0 };
    byTopic[topic].scores.push(a.score / a.total);
  });
  return Object.entries(byTopic)
    .map(([topic, data]) => ({
      topic,
      avg: Math.round((data.scores.reduce((s, v) => s + v, 0) / data.scores.length) * 100),
      attempts: data.scores.length,
    }))
    .sort((a, b) => a.avg - b.avg)
    .slice(0, 3);
}

function getSubjectBreakdown(attempts) {
  const bySubject = {};
  attempts.forEach((a) => {
    const subject = getSubjectForModule(a.module_id);
    if (!bySubject[subject]) bySubject[subject] = { scores: [], count: 0 };
    bySubject[subject].scores.push(a.score / a.total);
    bySubject[subject].count++;
  });
  return Object.entries(bySubject)
    .map(([subject, data]) => ({
      subject,
      avg: Math.round((data.scores.reduce((s, v) => s + v, 0) / data.scores.length) * 100),
      quizzes: data.count,
    }))
    .sort((a, b) => b.avg - a.avg);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

const SUBJECT_ICONS = {
  Mathematics: "🔢",
  English: "📖",
  Science: "🔬",
  "华文": "字",
};

function PlusSection({ title, children }) {
  return (
    <div className="dash-section dash-plus-section">
      <div className="dash-plus-badge">Plus</div>
      <h2 className="dash-section-title">{title}</h2>
      <div className="dash-plus-content-wrap">
        <div className="dash-plus-blur">
          {children}
        </div>
        <div className="dash-plus-overlay">
          <p className="dash-plus-cta">Upgrade to Koko Plus to unlock detailed insights</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardScreen({ child, progress, onBack, isPlus }) {
  const [recentAttempts, setRecentAttempts] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedAttempt, setExpandedAttempt] = useState(null);

  useEffect(() => {
    if (!child) return;
    Promise.all([
      fetchRecentAttempts(child.id, isPlus ? 50 : 20),
      fetchWeeklyStats(child.id, isPlus ? 12 : 4),
    ]).then(([recent, weekly]) => {
      setRecentAttempts(recent);
      setWeeklyData(weekly);
      setLoading(false);
    });
  }, [child, isPlus]);

  const totalStars = getTotalStars(progress.moduleStars || {});
  const completedCount = (progress.completedModules || []).length;
  const weeklyGroups = groupByWeek(weeklyData);
  const weakAreas = findWeakAreas(recentAttempts);
  const maxAvg = Math.max(...weeklyGroups.map((w) => w.avg), 1);
  const subjectBreakdown = getSubjectBreakdown(recentAttempts);

  // Trend detection
  const trend = weeklyGroups.length >= 2
    ? weeklyGroups[weeklyGroups.length - 1].avg - weeklyGroups[weeklyGroups.length - 2].avg
    : 0;

  const recentLimit = isPlus ? 50 : 10;

  return (
    <div className="screen dashboard-screen">
      <div className="dash-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <div>
          <h1 className="dash-title">{child.avatar} {child.name}'s Progress</h1>
        </div>
      </div>

      {loading ? (
        <p className="dash-loading">Loading dashboard...</p>
      ) : (
        <>
          {/* Overview Cards */}
          <div className="dash-overview">
            <div className="dash-card" title="Stars earned from questions answered correctly on the first try">
              <span className="dash-card-value">⭐ {totalStars}</span>
              <span className="dash-card-label">Total Stars</span>
            </div>
            <div className="dash-card" title="Number of modules completed at least once">
              <span className="dash-card-value">{completedCount}</span>
              <span className="dash-card-label">Modules Done</span>
            </div>
            <div className="dash-card" title="Total number of quizzes taken, including retries">
              <span className="dash-card-value">{recentAttempts.length}</span>
              <span className="dash-card-label">Quiz Attempts</span>
            </div>
          </div>

          {/* Weekly Trend */}
          {weeklyGroups.length > 0 && (
            <div className="dash-section">
              <h2 className="dash-section-title">
                Weekly Accuracy
                {trend > 5 && <span className="dash-trend-up"> — Improving!</span>}
                {trend < -5 && <span className="dash-trend-down"> — Keep practising!</span>}
              </h2>
              <p className="dash-section-desc">Average percentage of questions answered correctly each week. Higher bars mean better accuracy.</p>
              <div className="dash-chart">
                {weeklyGroups.map((w) => (
                  <div key={w.week} className="dash-bar-col">
                    <span className="dash-bar-label">{w.avg}%</span>
                    <div className="dash-bar-track">
                      <div
                        className="dash-bar-fill"
                        style={{ height: `${(w.avg / maxAvg) * 100}%` }}
                      />
                    </div>
                    <span className="dash-bar-week">{formatDate(w.week)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weak Areas */}
          {weakAreas.length > 0 && (
            <div className="dash-section">
              <h2 className="dash-section-title">Areas to Focus On</h2>
              <p className="dash-section-desc">Topics with the lowest average scores from recent quizzes. These are good candidates for extra practise.</p>
              {weakAreas.map((area) => (
                <div key={area.topic} className="dash-weak-item">
                  <span className="dash-weak-topic">{area.topic}</span>
                  <div className="dash-weak-bar-track">
                    <div
                      className="dash-weak-bar-fill"
                      style={{ width: `${area.avg}%` }}
                    />
                  </div>
                  <span className="dash-weak-pct">{area.avg}%</span>
                </div>
              ))}
            </div>
          )}

          {/* Subject Breakdown — Plus feature */}
          {recentAttempts.length > 0 && (
            isPlus ? (
              <div className="dash-section">
                <h2 className="dash-section-title">Subject Breakdown</h2>
                <p className="dash-section-desc">Average accuracy per subject across all recent quizzes.</p>
                {subjectBreakdown.map((s) => (
                  <div key={s.subject} className="dash-subject-item">
                    <span className="dash-subject-icon">{SUBJECT_ICONS[s.subject] || "📘"}</span>
                    <span className="dash-subject-name">{s.subject}</span>
                    <div className="dash-weak-bar-track">
                      <div
                        className="dash-weak-bar-fill dash-subject-fill"
                        style={{ width: `${s.avg}%` }}
                      />
                    </div>
                    <span className="dash-weak-pct">{s.avg}%</span>
                  </div>
                ))}
              </div>
            ) : (
              <PlusSection title="Subject Breakdown">
                {subjectBreakdown.map((s) => (
                  <div key={s.subject} className="dash-subject-item">
                    <span className="dash-subject-icon">{SUBJECT_ICONS[s.subject] || "📘"}</span>
                    <span className="dash-subject-name">{s.subject}</span>
                    <div className="dash-weak-bar-track">
                      <div className="dash-weak-bar-fill dash-subject-fill" style={{ width: `${s.avg}%` }} />
                    </div>
                    <span className="dash-weak-pct">{s.avg}%</span>
                  </div>
                ))}
              </PlusSection>
            )
          )}

          {/* Recent Activity */}
          {recentAttempts.length > 0 && (
            <div className="dash-section">
              <h2 className="dash-section-title">Recent Activity</h2>
              <p className="dash-section-desc">
                {isPlus
                  ? "Tap any quiz to see which questions were missed."
                  : `The last ${recentLimit} quizzes completed, showing the score for each attempt.`}
              </p>
              <div className="dash-recent-list">
                {recentAttempts.slice(0, recentLimit).map((a) => (
                  <div key={a.id}>
                    <div
                      className={`dash-recent-item ${isPlus && a.wrong_answers?.length > 0 ? "dash-recent-tappable" : ""}`}
                      onClick={() => {
                        if (isPlus && a.wrong_answers?.length > 0) {
                          setExpandedAttempt(expandedAttempt === a.id ? null : a.id);
                        }
                      }}
                    >
                      <span className="dash-recent-title">{getModuleTitle(a.module_id)}</span>
                      <span className="dash-recent-score">
                        ⭐ {a.score}/{a.total}
                      </span>
                      <span className="dash-recent-date">{formatDate(a.completed_at)}</span>
                      {isPlus && a.wrong_answers?.length > 0 && (
                        <span className="dash-recent-expand">{expandedAttempt === a.id ? "▾" : "▸"}</span>
                      )}
                    </div>

                    {isPlus && expandedAttempt === a.id && a.wrong_answers?.length > 0 && (
                      <div className="dash-wrong-list">
                        {a.wrong_answers.map((w, i) => (
                          <div key={i} className="dash-wrong-item">
                            <p className="dash-wrong-q">{w.question}</p>
                            <div className="dash-wrong-answers">
                              <span className="dash-wrong-user">
                                ✗ {w.userAnswer}
                              </span>
                              <span className="dash-wrong-correct">
                                ✓ {w.correctAnswer}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Wrong answer drill-down teaser for free users */}
              {!isPlus && recentAttempts.some((a) => a.wrong_answers?.length > 0) && (
                <div className="dash-plus-teaser">
                  <span className="dash-plus-badge">Plus</span>
                  <span className="dash-plus-teaser-text">
                    Tap quizzes to see exactly which questions were missed
                  </span>
                </div>
              )}
            </div>
          )}

          {recentAttempts.length === 0 && (
            <div className="dash-empty">
              <p>No quiz attempts yet. Start a module to see progress here!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
