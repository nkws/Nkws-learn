import { useState, useEffect, useCallback } from "react";
import HanziWriterQuiz from "../components/HanziWriterQuiz";
import { fetchWritingQueue, recordWritingReview } from "../utils/writingSync";
import { scheduleReview } from "../utils/writingSchedule";
import { useTTS } from "../hooks/useSpeech";

const PHASE = { LOADING: "loading", CARD: "card", REVEAL: "reveal", DONE: "done" };

// Render the sentence with the target word shown as a blank (writing phase) or
// highlighted (reveal phase). Full-width ＿ keeps the gap obvious for a child.
function renderSentence(sentence, word, reveal) {
  const i = sentence.indexOf(word);
  if (i === -1) return <span>{sentence}{reveal ? "" : " ＿＿"}</span>;
  const before = sentence.slice(0, i);
  const after = sentence.slice(i + word.length);
  return (
    <span>
      {before}
      {reveal
        ? <span className="hw-reveal-word">{word}</span>
        : <span className="hw-blank">{"＿".repeat(Math.max(2, [...word].length))}</span>}
      {after}
    </span>
  );
}

const GRADE_DISPLAY = {
  easy: { stars: "⭐⭐⭐", text: "太棒了！一笔都没错！", en: "Perfect!" },
  good: { stars: "⭐⭐", text: "做得好！", en: "Well done!" },
  again: { stars: "", text: "没关系，明天再练一次。", en: "Try again tomorrow." },
};

export default function WritingPracticeScreen({ activeChild, onBack }) {
  const { speak } = useTTS("zh");
  const [phase, setPhase] = useState(PHASE.LOADING);
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(0);
  const [lastGrade, setLastGrade] = useState(null);
  const [stats, setStats] = useState({ done: 0, again: 0 });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // No child → the render below shows the sign-in note (phase stays LOADING).
    if (!activeChild) return;
    let cancelled = false;
    (async () => {
      const q = await fetchWritingQueue(activeChild.id);
      if (cancelled) return;
      setQueue(q);
      setIndex(0);
      setStats({ done: 0, again: 0 });
      setPhase(q.length === 0 ? PHASE.DONE : PHASE.CARD);
    })();
    return () => { cancelled = true; };
  }, [activeChild]);

  const card = queue[index] || null;

  const handleComplete = useCallback(async ({ totalMistakes, hintUsed }) => {
    if (!card || saving) return;
    setSaving(true);
    const charCount = [...card.word].length;
    const sched = scheduleReview({
      prevIntervalDays: card.interval_days || 0,
      totalMistakes,
      charCount,
      hintUsed,
      now: Date.now(),
    });
    const firstAttempt = !card.due_at;
    await recordWritingReview(activeChild.id, card.id, {
      grade: sched.grade,
      totalMistakes,
      hintUsed,
      firstAttempt,
      intervalDays: sched.intervalDays,
      dueAt: sched.dueAt,
    });
    setLastGrade(sched.grade);
    setStats((s) => ({ done: s.done + 1, again: s.again + (sched.grade === "again" ? 1 : 0) }));
    setSaving(false);
    setPhase(PHASE.REVEAL);
    setTimeout(() => speak(card.word), 250);
  }, [card, saving, activeChild, speak]);

  const goNext = () => {
    setLastGrade(null);
    if (index + 1 >= queue.length) setPhase(PHASE.DONE);
    else { setIndex(index + 1); setPhase(PHASE.CARD); }
  };

  return (
    <div className="screen writing-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-topic">写字 Character Writing</span>
      </div>

      {!activeChild ? (
        <div className="writing-body writing-centered">
          <p className="writing-note">请先登录并选择小朋友。</p>
          <p className="writing-note-en">Sign in and choose a child to start writing practice.</p>
        </div>
      ) : phase === PHASE.LOADING ? (
        <div className="writing-body writing-centered">
          <p className="writing-note">正在准备今天的练习…</p>
        </div>
      ) : phase === PHASE.DONE ? (
        <div className="writing-body writing-centered">
          <div className="writing-done-emoji">🎉</div>
          <h1 className="hero-title">
            {queue.length === 0 ? "今天没有要练的字！" : "今天练完了！"}
          </h1>
          {queue.length > 0 && (
            <p className="writing-done-stats">
              写了 {stats.done} 个词{stats.again > 0 ? `，有 ${stats.again} 个明天再练` : "，全部过关！🌟"}
            </p>
          )}
          <button className="btn-primary" onClick={onBack}>回到首页 Back home</button>
        </div>
      ) : phase === PHASE.CARD && card ? (
        <div className="writing-body">
          <div className="writing-prompt">
            <div className="writing-pinyin-row">
              <span className="writing-pinyin">{card.pinyin}</span>
              <button
                className="spelling-word-speak"
                onClick={() => speak(card.word)}
                aria-label="听一听"
                title="听一听"
              >
                🔊
              </button>
            </div>
            <p className="writing-sentence">{renderSentence(card.sentence, card.word, false)}</p>
            <p className="writing-progress-label">
              第 {index + 1} / {queue.length} 个
            </p>
          </div>
          <HanziWriterQuiz key={card.id} word={card.word} onComplete={handleComplete} />
        </div>
      ) : phase === PHASE.REVEAL && card ? (
        <div className="writing-body writing-centered">
          <div className="writing-reveal-grade">{GRADE_DISPLAY[lastGrade]?.stars}</div>
          <div className="writing-reveal-word">{card.word}</div>
          <p className="writing-pinyin">{card.pinyin}</p>
          <p className="writing-sentence writing-sentence-reveal">
            {renderSentence(card.sentence, card.word, true)}
          </p>
          <p className="writing-grade-text">
            {GRADE_DISPLAY[lastGrade]?.text}
            <span className="writing-grade-en"> {GRADE_DISPLAY[lastGrade]?.en}</span>
          </p>
          <button className="btn-primary" onClick={goNext}>
            {index + 1 >= queue.length ? "完成 Finish" : "下一个 Next →"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
