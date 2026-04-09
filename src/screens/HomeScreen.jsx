import { TOPICS, getTopicStars } from "../utils/constants";

export default function HomeScreen({ progress, onSelectTopic }) {
  return (
    <div className="screen home-screen">
      <div className="home-header">
        <span className="home-mascot">🦊</span>
        <div>
          <h1 className="home-heading">Koko's Classroom</h1>
          <p className="home-sub">Pick a topic to learn!</p>
        </div>
      </div>

      {progress.stars > 0 && (
        <div className="welcome-progress">
          <span>⭐ {progress.stars} total stars</span>
        </div>
      )}

      <div className="topic-list">
        {TOPICS.map((topic) => {
          const topicStars = getTopicStars(topic.id, progress.moduleStars || {});
          return (
            <button
              key={topic.id}
              className="topic-card"
              onClick={() => onSelectTopic(topic.id)}
            >
              <span className="topic-icon">{topic.icon}</span>
              <div className="topic-info">
                <h2 className="topic-title">{topic.title}</h2>
                <p className="topic-desc">{topic.description}</p>
                {topicStars > 0 && (
                  <span className="topic-stars">⭐ {topicStars} stars</span>
                )}
              </div>
              <span className="topic-arrow">›</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
