import { useState } from "react";
import { getSubject, getTopicStars } from "../utils/constants";
import { extractVideoId } from "../utils/videos";
import AdSlot from "../components/AdSlot";

export default function TopicListScreen({
  subjectId,
  level,
  progress,
  topicVideos,
  onTopicVideosChange,
  onSelectTopic,
  onBack,
}) {
  const [editingTopic, setEditingTopic] = useState(null);
  const [videoInput, setVideoInput] = useState("");
  const [error, setError] = useState("");

  const subject = getSubject(subjectId, level);
  if (!subject) return null;

  const handleSaveVideo = (topicId) => {
    if (!videoInput.trim()) {
      onTopicVideosChange({ ...topicVideos, [topicId]: "" });
      setEditingTopic(null);
      setVideoInput("");
      return;
    }
    const id = extractVideoId(videoInput);
    if (!id) { setError("Paste a valid YouTube link"); return; }
    onTopicVideosChange({ ...topicVideos, [topicId]: id });
    setEditingTopic(null);
    setVideoInput("");
    setError("");
  };

  return (
    <div className="screen welcome-screen">
      <div className="welcome-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <div>
          <h1 className="welcome-heading">{subject.icon} {subject.title}</h1>
          <p className="welcome-sub">Pick a topic!</p>
        </div>
      </div>

      <div className="video-tip-banner">
        <p className="video-tip-text">
          🎬 <strong>Tip for parents:</strong> Tap the video link on any topic to add a YouTube reward. Your child earns it by getting a perfect score!
        </p>
      </div>

      <div className="module-list">
        {subject.topics.map((topic) => {
          const topicStars = getTopicStars(topic.id, progress.moduleStars || {});
          const completedModules = progress.completedModules || [];
          const allCompleted = topic.modules.every((m) => completedModules.includes(m.id));
          const hasVideo = !!topicVideos[topic.id];

          return (
            <div key={topic.id} className={`module-card ${allCompleted ? "module-completed" : ""}`}>
              <div className="module-info">
                <div className="module-title-row">
                  <span className={`module-number ${allCompleted ? "module-number-done" : ""}`}>
                    {allCompleted ? "✓" : topic.icon}
                  </span>
                  <h3 className="module-title">{topic.title}</h3>
                  {topicStars > 0 && <span className="module-stars">⭐ {topicStars}</span>}
                </div>
                <p className="module-desc">{topic.description}</p>

                {editingTopic === topic.id ? (
                  <div className="module-video-edit">
                    <input
                      className="mv-input"
                      type="text"
                      placeholder="Paste YouTube link for topic reward..."
                      value={videoInput}
                      onChange={(e) => { setVideoInput(e.target.value); setError(""); }}
                      onKeyDown={(e) => e.key === "Enter" && handleSaveVideo(topic.id)}
                      autoFocus
                    />
                    <button className="mv-save" onClick={() => handleSaveVideo(topic.id)}>Save</button>
                    <button className="mv-cancel" onClick={() => { setEditingTopic(null); setVideoInput(""); setError(""); }}>✕</button>
                    {error && <p className="mv-error">{error}</p>}
                  </div>
                ) : (
                  <button
                    className={`module-video-btn ${hasVideo ? "" : "no-video"}`}
                    onClick={() => { setEditingTopic(topic.id); setVideoInput(topicVideos[topic.id] || ""); setError(""); }}
                  >
                    {hasVideo ? "✅ Topic reward video set" : "⚠️ Set topic reward video"}
                  </button>
                )}
              </div>

              <button
                className="module-play-btn"
                onClick={() => onSelectTopic(topic.id)}
              >
                ▶
              </button>
            </div>
          );
        })}
      </div>

      <AdSlot />
    </div>
  );
}
