import { useState } from "react";
import { getTopic, getTopicStars } from "../utils/constants";
import { MODULE_QUESTION_COUNTS } from "../utils/kokoEngine";
import { extractVideoId } from "../utils/videos";

export default function ModuleListScreen({
  subjectId,
  topicId,
  level,
  progress,
  moduleVideos,
  onModuleVideosChange,
  onStartModule,
  onReattempt,
  onResetTopic,
  onBack,
}) {
  const [editingModule, setEditingModule] = useState(null);
  const [videoInput, setVideoInput] = useState("");
  const [error, setError] = useState("");
  const [confirmModule, setConfirmModule] = useState(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const topic = getTopic(subjectId, topicId, level);
  const topicStars = getTopicStars(topicId, progress.moduleStars || {});
  const completedModules = progress.completedModules || [];

  const handleSaveVideo = (moduleId) => {
    if (!videoInput.trim()) {
      onModuleVideosChange({ ...moduleVideos, [moduleId]: "" });
      setEditingModule(null);
      setVideoInput("");
      return;
    }
    const id = extractVideoId(videoInput);
    if (!id) {
      setError("Paste a valid YouTube link");
      return;
    }
    onModuleVideosChange({ ...moduleVideos, [moduleId]: id });
    setEditingModule(null);
    setVideoInput("");
    setError("");
  };

  const handlePlay = (moduleId) => {
    const hasVideo = !!moduleVideos[moduleId];
    if (!hasVideo) {
      setConfirmModule(moduleId);
    } else {
      onStartModule(moduleId);
    }
  };

  if (!topic) return null;

  return (
    <div className="screen welcome-screen">
      <div className="welcome-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <div>
          <h1 className="welcome-heading">{topic.icon} {topic.title}</h1>
          <p className="welcome-sub">⭐ {topicStars} stars earned</p>
        </div>
      </div>

      <div className="module-list">
        {topic.modules.map((mod, idx) => {
          const modStars = progress.moduleStars[mod.id] || 0;
          const totalQ = MODULE_QUESTION_COUNTS[mod.id] || 0;
          // First module is always unlocked; others need prior module completed
          const prevModule = idx > 0 ? topic.modules[idx - 1] : null;
          const locked = prevModule ? !completedModules.includes(prevModule.id) : false;
          const hasVideo = !!moduleVideos[mod.id];
          const isCompleted = completedModules.includes(mod.id);

          return (
            <div
              key={mod.id}
              className={`module-card ${locked ? "module-locked" : ""} ${isCompleted ? "module-completed" : ""}`}
            >
              <div className="module-info">
                <div className="module-title-row">
                  <span className={`module-number ${isCompleted ? "module-number-done" : ""}`}>
                    {isCompleted ? "✓" : idx + 1}
                  </span>
                  <h3 className="module-title">{mod.title}</h3>
                  <span className="module-stars">
                    ⭐ {modStars} / {totalQ}
                  </span>
                </div>
                <p className="module-desc">{mod.description}</p>

                {editingModule === mod.id ? (
                  <div className="module-video-edit">
                    <input
                      className="mv-input"
                      type="text"
                      placeholder="Paste YouTube link..."
                      value={videoInput}
                      onChange={(e) => { setVideoInput(e.target.value); setError(""); }}
                      onKeyDown={(e) => e.key === "Enter" && handleSaveVideo(mod.id)}
                      autoFocus
                    />
                    <button className="mv-save" onClick={() => handleSaveVideo(mod.id)}>
                      Save
                    </button>
                    <button
                      className="mv-cancel"
                      onClick={() => { setEditingModule(null); setVideoInput(""); setError(""); }}
                    >
                      ✕
                    </button>
                    {error && <p className="mv-error">{error}</p>}
                  </div>
                ) : (
                  <button
                    className={`module-video-btn ${hasVideo ? "" : "no-video"}`}
                    onClick={() => {
                      setEditingModule(mod.id);
                      setVideoInput(moduleVideos[mod.id] || "");
                      setError("");
                    }}
                  >
                    {hasVideo ? "✅ Video ready — tap to change" : "⚠️ No video — tap to add"}
                  </button>
                )}
              </div>

              {locked ? (
                <div className="module-lock">
                  🔒
                </div>
              ) : isCompleted ? (
                <button
                  className="module-redo-btn"
                  onClick={() => onReattempt(mod.id)}
                >
                  ↻
                </button>
              ) : (
                <button
                  className="module-play-btn"
                  onClick={() => handlePlay(mod.id)}
                >
                  ▶
                </button>
              )}
            </div>
          );
        })}
      </div>

      {topicStars > 0 && (
        <button className="reset-topic-btn" onClick={() => setShowResetConfirm(true)}>
          Reset all progress for this topic
        </button>
      )}

      {showResetConfirm && (
        <div className="reward-overlay" onClick={() => setShowResetConfirm(false)}>
          <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
            <div className="reward-emojis">⚠️</div>
            <h2 className="reward-title">Reset Progress?</h2>
            <p className="reward-subtitle">
              This will clear all stars and completion status for every module in this topic. This cannot be undone.
            </p>
            <button
              className="btn-primary reward-dismiss"
              onClick={() => { setShowResetConfirm(false); onResetTopic(topicId); }}
            >
              Reset
            </button>
            <button
              className="confirm-cancel"
              onClick={() => setShowResetConfirm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {confirmModule !== null && (
        <div className="reward-overlay" onClick={() => setConfirmModule(null)}>
          <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
            <div className="reward-emojis">⚠️</div>
            <h2 className="reward-title">No Reward Video</h2>
            <p className="reward-subtitle">
              No video has been set for this module. There won't be a video reward at the end.
            </p>
            <button
              className="btn-primary reward-dismiss"
              onClick={() => { setConfirmModule(null); onStartModule(confirmModule); }}
            >
              Start Anyway
            </button>
            <button
              className="confirm-cancel"
              onClick={() => setConfirmModule(null)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
