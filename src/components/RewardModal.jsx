export default function RewardModal({ rewardCount, videos, onDismiss }) {
  const videoId =
    videos.length > 0
      ? videos[(rewardCount - 1) % videos.length].id
      : null;

  return (
    <div className="reward-overlay" onClick={onDismiss}>
      <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
        <div className="reward-emojis">🎉⭐🏆</div>
        <h2 className="reward-title">Amazing Job, Keanu!</h2>
        <p className="reward-subtitle">You earned a video reward! 🎬</p>
        {videoId ? (
          <div className="reward-video">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="Reward video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="reward-subtitle">No videos added yet. Ask a parent to add some!</p>
        )}
        <button className="btn-primary reward-dismiss" onClick={onDismiss}>
          Keep Learning! 📚
        </button>
      </div>
    </div>
  );
}
