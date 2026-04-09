import { YOUTUBE_REWARDS } from "../utils/constants";

export default function RewardModal({ rewardCount, onDismiss }) {
  const videoId =
    YOUTUBE_REWARDS[(rewardCount - 1) % YOUTUBE_REWARDS.length];

  return (
    <div className="reward-overlay" onClick={onDismiss}>
      <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
        <div className="reward-emojis">🎉⭐🏆</div>
        <h2 className="reward-title">Amazing Job, Keanu!</h2>
        <p className="reward-subtitle">You earned a video reward! 🎬</p>
        <div className="reward-video">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Reward video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button className="btn-primary reward-dismiss" onClick={onDismiss}>
          Keep Learning! 📚
        </button>
      </div>
    </div>
  );
}
