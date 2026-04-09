import { useState, useEffect, useRef } from "react";

const SCREEN_TIME_SECONDS = 5 * 60; // 5 minutes

export default function RewardModal({ rewardCount, videos, onDismiss }) {
  const [secondsLeft, setSecondsLeft] = useState(SCREEN_TIME_SECONDS);
  const [started, setStarted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const intervalRef = useRef(null);

  const videoId =
    videos.length > 0
      ? videos[(rewardCount - 1) % videos.length].id
      : null;

  useEffect(() => {
    if (!started || timeUp) return;

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [started, timeUp]);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const pct = (secondsLeft / SCREEN_TIME_SECONDS) * 100;

  if (timeUp) {
    return (
      <div className="reward-overlay">
        <div className="reward-modal">
          <div className="reward-emojis">⏰📚</div>
          <h2 className="reward-title">Time's Up!</h2>
          <p className="reward-subtitle">
            Great break! Let's get back to learning!
          </p>
          <button className="btn-primary reward-dismiss" onClick={onDismiss}>
            Keep Learning! 📚
          </button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="reward-overlay">
        <div className="reward-modal">
          <div className="reward-emojis">🎉⭐🏆</div>
          <h2 className="reward-title">Amazing Job, Keanu!</h2>
          <p className="reward-subtitle">
            You earned 5 minutes of YouTube! 🎬
          </p>
          {videoId ? (
            <button className="btn-primary reward-start" onClick={() => setStarted(true)}>
              Watch Now! 🎬
            </button>
          ) : (
            <p className="reward-subtitle">No videos added yet. Ask a parent to add some!</p>
          )}
          <button className="reward-skip" onClick={onDismiss}>
            Skip, keep learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reward-overlay reward-playing">
      <div className="reward-timer-bar">
        <div className="reward-timer-track">
          <div
            className="reward-timer-fill"
            style={{
              width: `${pct}%`,
              background: secondsLeft < 60 ? "#FF6B6B" : "#00897B",
            }}
          />
        </div>
        <span className="reward-timer-text">
          {mins}:{String(secs).padStart(2, "0")}
        </span>
        <button className="reward-done-btn" onClick={onDismiss}>
          Done
        </button>
      </div>

      <div className="reward-video-container">
        {videoId && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="YouTube reward"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="reward-iframe"
          />
        )}
      </div>
    </div>
  );
}
