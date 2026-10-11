import { useState, useEffect, useMemo, useCallback } from "react";
import HanziWriterQuiz from "../components/HanziWriterQuiz";
import StrokeAnimation from "../components/StrokeAnimation";
import { fetchAllCards, recordWritingReview, seedWritingSyllabus } from "../utils/writingSync";
import { buildLessons, buildQueue } from "../utils/writingQueue";
import { scheduleReview } from "../utils/writingSchedule";
import { lookupWord } from "../utils/dictionary";
import { useTTS } from "../hooks/useSpeech";

const PHASE = { LOADING: "loading", LANDING: "landing", CARD: "card", REVEAL: "reveal", DONE: "done" };

const GRADE_DISPLAY = {
  easy: { stars: "⭐⭐⭐", text: "太棒了！一笔都没错！", en: "Perfect!" },
  good: { stars: "⭐⭐", text: "很好！", en: "Good!" },
  hard: { stars: "⭐", text: "快记住了，再练一练。", en: "Almost — keep practising." },
  again: { stars: "", text: "没关系，明天再来一次。", en: "Try again tomorrow." },
};

export default function WritingPracticeScreen({ activeChild, onBack }) {
  const { speak } = useTTS("zh");
  const [phase, setPhase] = useState(PHASE.LOADING);
  const [allCards, setAllCards] = useState([]);
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(0);
  const [lastGrade, setLastGrade] = useState(null);
  const [stats, setStats] = useState({ done: 0, again: 0 });
  const [saving, setSaving] = useState(false);
  const [pyFor, setPyFor] = useState(null);

  // Load all of this learner's cards once.
  useEffect(() => {
    if (!activeChild) return;
    let cancelled = false;
    (async () => {
      let cards = await fetchAllCards(activeChild.id);
      if (cancelled) return;
      // First time for this child: load the universal P1 syllabus, then refetch.
      if (cards.length === 0) {
        await seedWritingSyllabus(activeChild.id);
        if (cancelled) return;
        cards = await fetchAllCards(activeChild.id);
        if (cancelled) return;
      }
      setAllCards(cards);
      setPhase(PHASE.LANDING);
    })();
    return () => { cancelled = true; };
  }, [activeChild]);

  const lessons = useMemo(() => buildLessons(allCards), [allCards]);
  const totalDue = useMemo(() => lessons.reduce((n, l) => n + l.due, 0), [lessons]);

  const card = queue[index] || null;
  const isNew = card ? !card.due_at : false;

  // Derive pinyin for the cue when the card doesn't carry it (MOE cards don't).
  useEffect(() => {
    if (!card || card.pinyin) return;
    let cancelled = false;
    lookupWord(card.word, "zh").then((e) => {
      if (!cancelled) setPyFor({ word: card.word, pinyin: e?.pinyin || "" });
    });
    return () => { cancelled = true; };
  }, [card]);
  const pinyin = card ? (card.pinyin || (pyFor?.word === card.word ? pyFor.pinyin : "")) : "";

  // Auto-play the word when a card appears (the dictation cue).
  useEffect(() => {
    if (phase !== PHASE.CARD || !card) return;
    const t = setTimeout(() => speak(card.word), 350);
    return () => clearTimeout(t);
  }, [phase, card, speak]);

  const startSession = (opts) => {
    const q = buildQueue(allCards, opts);
    setQueue(q);
    setIndex(0);
    setStats({ done: 0, again: 0 });
    setLastGrade(null);
    setPhase(q.length === 0 ? PHASE.DONE : PHASE.CARD);
  };

  const handleComplete = useCallback(async ({ totalMistakes, hintUsed }) => {
    if (!card || saving) return;
    setSaving(true);
    const charCount = [...card.word].length;
    const sched = scheduleReview({
      prevIntervalDays: card.interval_days || 0,
      totalMistakes, charCount, hintUsed, now: Date.now(),
    });
    const firstAttempt = !card.due_at;
    await recordWritingReview(activeChild.id, card.id, {
      grade: sched.grade, totalMistakes, hintUsed, firstAttempt,
      intervalDays: sched.intervalDays, dueAt: sched.dueAt,
    });
    // Reflect the new schedule locally so the landing counts stay correct.
    setAllCards((prev) => prev.map((c) =>
      c.id === card.id ? { ...c, interval_days: sched.intervalDays, due_at: sched.dueAt.toISOString() } : c));
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

  const lessonTitle = (tag) => (tag || "").replace(/^P\d+-/, "").replace(/-/g, " ");

  return (
    <div className="screen writing-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={() => (phase === PHASE.LANDING || phase === PHASE.LOADING ? onBack() : setPhase(PHASE.LANDING))}>←</button>
        <span className="topbar-topic">写字 Character Writing</span>
      </div>

      {!activeChild ? (
        <div className="writing-body writing-centered">
          <p className="writing-note">请先登录并选择小朋友。</p>
          <p className="writing-note-en">Sign in and choose a child to start.</p>
        </div>
      ) : phase === PHASE.LOADING ? (
        <div className="writing-body writing-centered"><p className="writing-note">正在准备…</p></div>
      ) : phase === PHASE.LANDING ? (
        <div className="writing-body">
          {lessons.length === 0 ? (
            <div className="writing-centered">
              <p className="writing-note">还没有字表。</p>
              <p className="writing-note-en">No lessons loaded yet.</p>
            </div>
          ) : (
            <>
              {totalDue > 0 && (
                <button className="btn-primary writing-review-all" onClick={() => startSession({ maxNew: 0, maxDue: 15 })}>
                  🔁 复习到期的字 Review due ({totalDue})
                </button>
              )}
              <p className="home-pick-label">选一课 Pick a lesson</p>
              <div className="topic-list">
                {lessons.map((l) => (
                  <button key={l.lesson_tag} className="topic-card" onClick={() => startSession({ lessonTag: l.lesson_tag, maxNew: 5, maxDue: 15 })}>
                    <span className="topic-icon">字</span>
                    <div className="topic-info">
                      <h2 className="topic-title">{lessonTitle(l.lesson_tag)}</h2>
                      <p className="topic-desc">
                        {l.new > 0 && <span className="wl-new">新 {l.new}</span>}
                        {l.due > 0 && <span className="wl-due"> 复习 {l.due}</span>}
                        {l.new === 0 && l.due === 0 && <span className="wl-done">全部学完 ✓</span>}
                        <span className="wl-total"> · 共 {l.total} 字</span>
                      </p>
                    </div>
                    <span className="topic-arrow">›</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      ) : phase === PHASE.DONE ? (
        <div className="writing-body writing-centered">
          <div className="writing-done-emoji">🎉</div>
          <h1 className="hero-title">{queue.length === 0 ? "没有要练的字！" : "练完了！"}</h1>
          {queue.length > 0 && (
            <p className="writing-done-stats">
              写了 {stats.done} 个字{stats.again > 0 ? `，有 ${stats.again} 个明天再练` : "，全部过关！🌟"}
            </p>
          )}
          <button className="btn-primary" onClick={() => setPhase(PHASE.LANDING)}>选另一课 More lessons</button>
          <button className="btn-secondary" onClick={onBack}>回到首页 Home</button>
        </div>
      ) : phase === PHASE.CARD && card ? (
        <div className="writing-body">
          <div className="writing-prompt">
            <div className="writing-pinyin-row">
              <span className="writing-pinyin">{pinyin || "…"}</span>
              <button className="spelling-word-speak" onClick={() => speak(card.word)} aria-label="听一听" title="听一听">🔊</button>
            </div>
            <p className="writing-progress-label">
              {isNew ? "新字 New" : "复习 Review"} · {index + 1} / {queue.length}
            </p>
          </div>
          <HanziWriterQuiz key={card.id} word={card.word} teachFirst={isNew} onComplete={handleComplete} />
        </div>
      ) : phase === PHASE.REVEAL && card ? (
        <div className="writing-body writing-centered">
          <div className="writing-reveal-grade">{GRADE_DISPLAY[lastGrade]?.stars}</div>
          <StrokeAnimation key={`anim-${card.id}`} word={card.word} />
          <div className="writing-reveal-wordline">
            <span className="writing-reveal-word-sm">{card.word}</span>
            <span className="writing-pinyin">{pinyin}</span>
            <button className="spelling-word-speak" onClick={() => speak(card.word)} aria-label="听一听" title="听一听">🔊</button>
          </div>
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
