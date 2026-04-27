import { useState, useEffect, useRef, useMemo } from "react";
import { buildPaperQuestions } from "../topics/mockpapers";
import { saveMockPaperAttempt } from "../utils/progress";

const CHOICE_LABELS = ["a", "b", "c", "d", "e"];

function formatTime(seconds) {
  if (seconds < 0) seconds = 0;
  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

function buildScorecard(questions, answers) {
  const byTopic = {};
  let totalCorrect = 0;
  questions.forEach((q, i) => {
    const correct = answers[i] === q.answer;
    if (correct) totalCorrect += 1;
    const key = q._topicId;
    if (!byTopic[key]) {
      byTopic[key] = {
        topicId: q._topicId,
        topicTitle: q._topicTitle,
        moduleId: q._moduleId,
        correct: 0,
        total: 0,
      };
    }
    byTopic[key].total += 1;
    if (correct) byTopic[key].correct += 1;
  });
  return {
    totalCorrect,
    totalQuestions: questions.length,
    topics: Object.values(byTopic),
  };
}

export default function MockPaperScreen({ paper, onExit, onPracticeTopic }) {
  const questions = useMemo(() => buildPaperQuestions(paper), [paper]);
  const [phase, setPhase] = useState("running"); // "running" | "scorecard"
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null));
  const [secondsLeft, setSecondsLeft] = useState(paper.durationMin * 60);
  const submittedRef = useRef(false);

  const submit = () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    const scorecard = buildScorecard(questions, answers);
    saveMockPaperAttempt({
      paperId: paper.id,
      paperTitle: paper.title,
      level: paper.level,
      subject: paper.subject,
      score: scorecard.totalCorrect,
      total: scorecard.totalQuestions,
      topicBreakdown: scorecard.topics,
    });
    setPhase("scorecard");
  };

  // Countdown timer — auto-submit at 0
  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          submit();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === "scorecard") {
    const scorecard = buildScorecard(questions, answers);
    const pct = Math.round((scorecard.totalCorrect / scorecard.totalQuestions) * 100);
    const sortedTopics = [...scorecard.topics].sort((a, b) => {
      const aPct = a.correct / a.total;
      const bPct = b.correct / b.total;
      return aPct - bPct; // weakest first
    });

    return (
      <div className="screen home-screen">
        <div className="welcome-header">
          <button className="back-btn" onClick={onExit}>←</button>
          <div>
            <h1 className="welcome-heading">Paper Complete</h1>
            <p className="welcome-sub">{paper.title}</p>
          </div>
        </div>

        <div className="hero-section" style={{ marginTop: 0 }}>
          <span className="hero-mascot">{pct >= 80 ? "🌟" : pct >= 50 ? "💪" : "📘"}</span>
          <h1 className="hero-title">
            {scorecard.totalCorrect} / {scorecard.totalQuestions}
          </h1>
          <p className="hero-tagline">{pct}% — {pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good effort, keep practising." : "Plenty to revise — let's drill the weak topics."}</p>
        </div>

        <p className="home-pick-label">Topic breakdown — weakest first</p>

        <div className="topic-list">
          {sortedTopics.map((t) => {
            const topicPct = Math.round((t.correct / t.total) * 100);
            const weak = topicPct < 70;
            return (
              <button
                key={t.topicId}
                className="topic-card"
                onClick={() => onPracticeTopic(paper.level, paper.subject, t.topicId, t.moduleId)}
              >
                <span className="topic-icon">{topicPct >= 80 ? "✅" : topicPct >= 50 ? "📘" : "📍"}</span>
                <div className="topic-info">
                  <h2 className="topic-title">{t.topicTitle}</h2>
                  <p className="topic-desc">
                    {t.correct} / {t.total} correct ({topicPct}%)
                    {weak ? " — tap to practise this topic" : ""}
                  </p>
                </div>
                <span className="topic-arrow">›</span>
              </button>
            );
          })}
        </div>

        <div className="module-done-bar">
          <button className="btn-primary" onClick={onExit}>
            Back to PSLE Prep
          </button>
        </div>
      </div>
    );
  }

  const q = questions[questionIndex];
  const isLast = questionIndex === questions.length - 1;
  const answered = answers.filter((a) => a !== null).length;

  const choose = (choice) => {
    const next = [...answers];
    next[questionIndex] = choice;
    setAnswers(next);
  };

  const goNext = () => {
    if (isLast) {
      submit();
    } else {
      setQuestionIndex((i) => i + 1);
    }
  };

  const goPrev = () => {
    if (questionIndex > 0) setQuestionIndex((i) => i - 1);
  };

  const lowTime = secondsLeft <= 60;

  return (
    <div className="screen chat-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onExit}>←</button>
        <span className="topbar-mascot">📝 Paper</span>
        <span className="topbar-topic" style={lowTime ? { color: "#d33" } : null}>
          ⏱ {formatTime(secondsLeft)}
        </span>
      </div>

      <div className="chat-progress-bar">
        <span className="chat-stars">
          Question {questionIndex + 1} of {questions.length}
        </span>
        <span className="chat-reward-hint">
          Answered {answered} / {questions.length}
        </span>
      </div>

      <div className="chat-messages">
        <div className="chat-bubble bubble-assistant">
          <span className="bubble-text">{q.question}</span>
        </div>
      </div>

      <div className="choice-buttons">
        {q.choices.map((choice, i) => {
          const selected = answers[questionIndex] === choice;
          return (
            <button
              key={choice}
              className={`choice-btn ${selected ? "choice-selected" : ""}`}
              onClick={() => choose(choice)}
              style={selected ? { borderColor: "#3b82f6", background: "#eff6ff" } : null}
            >
              <span className="choice-label">{CHOICE_LABELS[i]}</span> {choice}
            </button>
          );
        })}
      </div>

      <div className="module-done-bar" style={{ display: "flex", gap: "0.5rem" }}>
        <button
          className="btn-primary"
          onClick={goPrev}
          disabled={questionIndex === 0}
          style={{ flex: 1, opacity: questionIndex === 0 ? 0.4 : 1 }}
        >
          Previous
        </button>
        <button
          className="btn-primary"
          onClick={goNext}
          disabled={answers[questionIndex] === null}
          style={{ flex: 1, opacity: answers[questionIndex] === null ? 0.4 : 1 }}
        >
          {isLast ? "Submit Paper" : "Next"}
        </button>
      </div>
    </div>
  );
}
