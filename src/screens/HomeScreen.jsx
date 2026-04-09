import { SUBJECTS, getTotalStars } from "../utils/constants";

export default function HomeScreen({ progress, onSelectSubject }) {
  const totalStars = getTotalStars(progress.moduleStars || {});

  return (
    <div className="screen home-screen">
      <div className="home-header">
        <span className="home-mascot">🦊</span>
        <div>
          <h1 className="home-heading">Koko's Classroom</h1>
          <p className="home-sub">Pick a subject to learn!</p>
        </div>
      </div>

      {totalStars > 0 && (
        <div className="welcome-progress">
          <span>⭐ {totalStars} total stars</span>
        </div>
      )}

      <div className="topic-list">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            className="topic-card"
            onClick={() => onSelectSubject(subject.id)}
          >
            <span className="topic-icon">{subject.icon}</span>
            <div className="topic-info">
              <h2 className="topic-title">{subject.title}</h2>
              <p className="topic-desc">{subject.description}</p>
              <span className="topic-stars">{subject.topics.length} topics</span>
            </div>
            <span className="topic-arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}
