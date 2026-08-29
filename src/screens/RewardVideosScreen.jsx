import { useState } from "react";
import { loadRewardPool, saveRewardPool, addToPool, removeFromPool } from "../utils/rewardVideos";

// Parent screen: paste YouTube links to build the reward-video list for a child.
// When that child finishes a module with no video set for it, one of these
// plays at random as a surprise reward.
export default function RewardVideosScreen({ activeChild, onBack, onSync }) {
  const childId = activeChild?.id || null;
  const [list, setList] = useState(() => loadRewardPool(childId));
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const persist = (next) => {
    setList(next);
    saveRewardPool(childId, next);
    onSync?.(next); // push to the cloud so the list follows the parent's account
  };

  const handleAdd = () => {
    const { list: next, error: err } = addToPool(list, input);
    if (err === "invalid") {
      setError("That doesn't look like a YouTube link. Paste a link like youtube.com/watch?v=… or youtu.be/…");
      return;
    }
    if (err === "duplicate") {
      setError("That video is already in the list.");
      return;
    }
    persist(next);
    setInput("");
    setError("");
  };

  const handleRemove = (id) => persist(removeFromPool(list, id));

  return (
    <div className="screen reward-videos-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-topic">Reward Videos</span>
      </div>

      <div className="reward-videos-body">
        <h1 className="hero-title">
          {activeChild ? `${activeChild.avatar || "🎬"} ${activeChild.name}'s reward videos` : "Reward videos"}
        </h1>
        <p className="reward-videos-intro">
          Paste YouTube links your child loves. When they finish a whole topic
          (a full set of modules) and you haven't set a video for that topic, one
          of these plays as a surprise reward — a different one each time. Please
          keep them <strong>short (under 5 minutes)</strong> and age-appropriate;
          whatever you add here is what your child sees.
        </p>

        <div className="reward-add-row">
          <input
            type="text"
            className="spelling-text-input reward-add-input"
            placeholder="Paste a YouTube link…"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(""); }}
            onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
          />
          <button className="btn-primary reward-add-btn" onClick={handleAdd}>Add</button>
        </div>
        {error && <p className="reward-add-error">{error}</p>}

        {list.length === 0 ? (
          <p className="reward-empty">No reward videos yet. Paste a link above to add your first one.</p>
        ) : (
          <ul className="reward-video-list">
            {list.map((v) => (
              <li key={v.id} className="reward-video-row">
                <a
                  className="reward-video-thumb-link"
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="reward-video-thumb"
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt=""
                    loading="lazy"
                  />
                </a>
                <div className="reward-video-meta">
                  <span className="reward-video-id">{v.id}</span>
                  <a
                    className="reward-video-open"
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open on YouTube ↗
                  </a>
                </div>
                <button
                  className="spelling-word-remove"
                  onClick={() => handleRemove(v.id)}
                  aria-label={`Remove ${v.id}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="reward-videos-note">
          {list.length} video{list.length === 1 ? "" : "s"} in the list. Saved on this
          device{activeChild ? ` for ${activeChild.name}` : ""}.
        </p>
      </div>
    </div>
  );
}
