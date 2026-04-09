import { useState } from "react";
import Clock from "../components/Clock";
import { MODULES } from "../utils/constants";
import { extractVideoId } from "../utils/videos";

export default function WelcomeScreen({
  progress,
  moduleVideos,
  onModuleVideosChange,
  onStartModule,
}) {
  const [editingModule, setEditingModule] = useState(null);
  const [videoInput, setVideoInput] = useState("");
  const [error, setError] = useState("");

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

  return (
    <div className="screen welcome-screen">
      <div className="welcome-header">
        <div className="welcome-clock floating">
          <Clock hours={10} minutes={10} size={120} />
        </div>
        <div>
          <h1 className="welcome-heading">Hi Keanu!</h1>
          <p className="welcome-sub">
            🦊 Pick a lesson to start learning!
          </p>
        </div>
      </div>

      {progress.stars > 0 && (
        <div className="welcome-progress">
          <span>⭐ {progress.stars} stars</span>
        </div>
      )}

      <div className="module-list">
        {MODULES.map((mod) => {
          const modStars = progress.moduleStars[mod.id] || 0;
          const locked = progress.stars < mod.starsToUnlock;
          const hasVideo = !!moduleVideos[mod.id];

          return (
            <div
              key={mod.id}
              className={`module-card ${locked ? "module-locked" : ""}`}
            >
              <div className="module-info">
                <div className="module-title-row">
                  <span className="module-number">{mod.id}</span>
                  <h3 className="module-title">{mod.title}</h3>
                  {modStars > 0 && (
                    <span className="module-stars">⭐ {modStars}</span>
                  )}
                </div>
                <p className="module-desc">{mod.description}</p>

                {/* Video setting for parent */}
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
                    className="module-video-btn"
                    onClick={() => {
                      setEditingModule(mod.id);
                      setVideoInput(moduleVideos[mod.id] || "");
                      setError("");
                    }}
                  >
                    {hasVideo ? "🎬 Reward video set" : "🎬 Set reward video"}
                  </button>
                )}
              </div>

              {locked ? (
                <div className="module-lock">
                  🔒 {mod.starsToUnlock} stars
                </div>
              ) : (
                <button
                  className="module-play-btn"
                  onClick={() => onStartModule(mod.id)}
                >
                  ▶
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
