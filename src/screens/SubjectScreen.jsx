import { getSubjectsForLevel } from "../utils/constants";
import AdSlot from "../components/AdSlot";

export default function SubjectScreen({ level, progress, onSelectSubject, onBack }) {
  const subjects = getSubjectsForLevel(level);
  const levelLabel = level.toUpperCase();

  return (
    <div className="screen home-screen">
      <div className="welcome-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <div>
          <h1 className="welcome-heading">{levelLabel}</h1>
          <p className="welcome-sub">Pick a subject!</p>
        </div>
      </div>

      <div className="topic-list">
        {subjects.map((subject) => (
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

      <AdSlot />
    </div>
  );
}
