import { useState } from "react";
import { extractVideoId } from "../utils/videos";

export default function VideoManager({ videos, onUpdate }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    const videoId = extractVideoId(input);
    if (!videoId) {
      setError("Paste a YouTube link or video ID");
      return;
    }
    if (videos.some((v) => v.id === videoId)) {
      setError("Video already added");
      return;
    }
    setError("");
    setInput("");
    onUpdate([...videos, { id: videoId, title: `Video ${videos.length + 1}` }]);
  };

  const handleRemove = (id) => {
    onUpdate(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="video-manager">
      <h3 className="vm-title">Reward Videos</h3>
      <p className="vm-hint">Add YouTube links for Keanu's rewards</p>

      <div className="vm-list">
        {videos.map((v) => (
          <div key={v.id} className="vm-item">
            <img
              src={`https://img.youtube.com/vi/${v.id}/default.jpg`}
              alt=""
              className="vm-thumb"
            />
            <span className="vm-label">{v.title}</span>
            <button className="vm-remove" onClick={() => handleRemove(v.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="vm-add">
        <input
          className="vm-input"
          type="text"
          placeholder="Paste YouTube link..."
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(""); }}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button className="vm-add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      {error && <p className="vm-error">{error}</p>}
    </div>
  );
}
