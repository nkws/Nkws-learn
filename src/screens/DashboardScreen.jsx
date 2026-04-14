import { useState, useEffect } from "react";
import { getTotalStars, LEVELS } from "../utils/constants";
import { MODULE_QUESTION_COUNTS } from "../utils/kokoEngine";
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

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export default function DashboardScreen({ child, progress, onBack }) {
  const [recentAttempts, setRecentAttempts] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!child) return;
    Promise.all([
      fetchRecentAttempts(child.id, 20),
      fetchWeeklyStats(child.id, 4),
    ]).then(([recent, weekly]) => {
      setRecentAttempts(recent);
      setWeeklyData(weekly);
      setLoading(false);
    });
  }, [child]);

  const totalStars = getTotalStars(progress.moduleStars || {});
  const completedCount = (progress.completedModules || []).length;
  const totalModules = Object.keys(MODULE_QUESTION_COUNTS).length;
  const weeklyGroups = groupByWeek(weeklyData);
  const weakAreas = findWeakAreas(recentAttempts);
  const maxAvg = Math.max(...weeklyGroups.map((w) => w.avg), 1);

  // Trend detection
  const trend = weeklyGroups.length >= 2
    ? weeklyGroups[weeklyGroups.length - 1].avg - weeklyGroups[weeklyGroups.length - 2].avg
    : 0;

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
            <div className="dash-card">
              <span className="dash-card-value">⭐ {totalStars}</span>
              <span className="dash-card-label">Total Stars</span>
            </div>
            <div className="dash-card">
              <span className="dash-card-value">{completedCount}</span>
              <span className="dash-card-label">Modules Done</span>
            </div>
            <div className="dash-card">
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

          {/* Recent Activity */}
          {recentAttempts.length > 0 && (
            <div className="dash-section">
              <h2 className="dash-section-title">Recent Activity</h2>
              <div className="dash-recent-list">
                {recentAttempts.slice(0, 10).map((a) => (
                  <div key={a.id} className="dash-recent-item">
                    <span className="dash-recent-title">{getModuleTitle(a.module_id)}</span>
                    <span className="dash-recent-score">
                      ⭐ {a.score}/{a.total}
                    </span>
                    <span className="dash-recent-date">{formatDate(a.completed_at)}</span>
                  </div>
                ))}
              </div>
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
