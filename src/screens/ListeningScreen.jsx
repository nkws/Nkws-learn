import { useState, useMemo, useCallback } from "react";
import { useTTS } from "../hooks/useSpeech";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { listKind, sortListsByOrder } from "../utils/spellingKinds";

// 中文听力理解 — Chinese listening comprehension (P1 first). Lessons are saved
// exactly like spelling/sentence lists — same store, same cloud sync, per-child —
// with kind "listening". Each lesson holds a set of short items; each item is a
// little passage, a question, a few choices and the correct one, stored in
// `words` as JSON strings (one item per entry).
//
// Operating model: ZERO live AI. The parent keys the items in once; the browser's
// built-in Chinese voice (useTTS "zh") reads them aloud on-device; the child
// answers a multiple-choice question. Hear-first by default — the passage text is
// hidden until "看文字 Show text" is tapped, so it practises real listening, not
// reading. No audio files, no per-use cost.
const KIND = "listening";
const PHASE = { LIBRARY: "library", EDIT: "edit", PRACTICE: "practice", DONE: "done" };

const blankItem = () => ({ passage: "", q: "", choices: ["", "", ""], answer: 0 });

// A lesson's items live in `words` as JSON strings. Parse defensively so a
// malformed entry never breaks the whole lesson.
const itemsFromWords = (words) =>
  (words || [])
    .map((w) => {
      try {
        const o = typeof w === "string" ? JSON.parse(w) : w;
        if (!o || typeof o !== "object") return null;
        const choices = Array.isArray(o.choices) ? o.choices.map((c) => String(c)) : [];
        return {
          passage: String(o.passage || ""),
          q: String(o.q || ""),
          choices,
          answer: Number.isInteger(o.answer) ? o.answer : 0,
        };
      } catch {
        return null;
      }
    })
    .filter((it) => it && it.q && it.choices.filter((c) => c.trim()).length >= 2);

const wordsFromItems = (items) =>
  items
    .map((it) => ({
      passage: it.passage.trim(),
      q: it.q.trim(),
      choices: it.choices.map((c) => c.trim()).filter(Boolean),
      answer: Math.min(it.answer, Math.max(0, it.choices.filter((c) => c.trim()).length - 1)),
    }))
    .filter((it) => it.q && it.choices.length >= 2)
    .map((it) => JSON.stringify(it));

const SAMPLE = [
  { passage: "小明有一只小猫。小猫是白色的，它很喜欢喝牛奶。", q: "小明的小猫是什么颜色的？", choices: ["白色", "黑色", "黄色"], answer: 0 },
  { passage: "今天下雨了。小红带着一把红色的雨伞去上学。", q: "小红带了什么去上学？", choices: ["雨伞", "书包", "帽子"], answer: 0 },
  { passage: "弟弟最喜欢吃水果。他每天都吃一个苹果。", q: "弟弟每天吃什么？", choices: ["苹果", "饼干", "糖果"], answer: 0 },
];

export default function ListeningScreen({ activeChild, user, onBack }) {
  const { speak, unlock } = useTTS("zh");
  const { lists, createList, updateList, deleteList } = useSpellingLists(activeChild, user?.id);

  const [phase, setPhase] = useState(PHASE.LIBRARY);
  const [editId, setEditId] = useState(null);
  const [titleDraft, setTitleDraft] = useState("");
  const [items, setItems] = useState([blankItem()]);

  // Practice state
  const [lessonTitle, setLessonTitle] = useState("");
  const [playItems, setPlayItems] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [played, setPlayed] = useState(false);

  const lessons = useMemo(() => sortListsByOrder(lists.filter((l) => listKind(l) === KIND)), [lists]);

  const current = playItems[qIndex] || null;
  const isLast = qIndex >= playItems.length - 1;

  // ── Library / edit ──────────────────────────────────────────────────────
  const openNew = () => { setEditId(null); setTitleDraft(""); setItems([blankItem()]); setPhase(PHASE.EDIT); };
  const openEdit = (lesson) => {
    const its = itemsFromWords(lesson.words);
    setEditId(lesson.id);
    setTitleDraft(lesson.title || "");
    setItems(its.length ? its : [blankItem()]);
    setPhase(PHASE.EDIT);
  };

  const editValid = useMemo(() => wordsFromItems(items).length > 0, [items]);

  const saveLesson = (thenPractise) => {
    const words = wordsFromItems(items);
    if (words.length === 0) return;
    const title = titleDraft.trim() || "未命名听力";
    let id = editId;
    if (id) updateList(id, { title, words });
    else { id = createList(title, "zh", KIND); updateList(id, { words }); setEditId(id); }
    if (thenPractise) startPractice({ title, words });
    else setPhase(PHASE.LIBRARY);
  };

  // Item form helpers
  const setItem = (i, patch) => setItems((arr) => arr.map((it, k) => (k === i ? { ...it, ...patch } : it)));
  const setChoice = (i, ci, val) =>
    setItems((arr) => arr.map((it, k) => (k === i ? { ...it, choices: it.choices.map((c, j) => (j === ci ? val : c)) } : it)));
  const addChoice = (i) => setItems((arr) => arr.map((it, k) => (k === i && it.choices.length < 4 ? { ...it, choices: [...it.choices, ""] } : it)));
  const addItem = () => setItems((arr) => [...arr, blankItem()]);
  const removeItem = (i) => setItems((arr) => (arr.length <= 1 ? arr : arr.filter((_, k) => k !== i)));

  // ── Practice ────────────────────────────────────────────────────────────
  const startPractice = useCallback((lesson) => {
    const its = itemsFromWords(lesson.words);
    if (its.length === 0) return;
    unlock(); // first user gesture — primes TTS for later taps on iOS
    setLessonTitle(lesson.title || "");
    setPlayItems(its);
    setQIndex(0);
    setPicked(null);
    setScore(0);
    setReveal(false);
    setPlayed(false);
    setPhase(PHASE.PRACTICE);
  }, [unlock]);

  const playCurrent = () => {
    if (!current) return;
    setPlayed(true);
    // Read the passage, then the question, then the options — one flow.
    speak(current.passage ? `${current.passage} ${current.q}` : current.q, current.choices);
  };

  const pick = (ci) => {
    if (picked !== null) return; // lock after first answer
    setPicked(ci);
    if (ci === current.answer) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (isLast) { setPhase(PHASE.DONE); return; }
    setQIndex((i) => i + 1);
    setPicked(null);
    setReveal(false);
    setPlayed(false);
  };

  const onTopBack = () => { if (phase === PHASE.LIBRARY) onBack(); else setPhase(PHASE.LIBRARY); };

  return (
    <div className="screen writing-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onTopBack}>←</button>
        <span className="topbar-topic">听力理解 Listening</span>
      </div>

      {phase === PHASE.LIBRARY ? (
        <div className="writing-body">
          <button className="btn-primary sw-new-btn" onClick={openNew}>➕ 新建听力 New lesson</button>
          {lessons.length === 0 ? (
            <p className="writing-note-en sw-hint">No saved lessons yet. Tap “New lesson” to key in a short passage and a question — the app reads it aloud for your child to answer.</p>
          ) : (
            <>
              <p className="home-pick-label">我的听力 My lessons</p>
              <div className="topic-list">
                {lessons.map((l) => {
                  const n = itemsFromWords(l.words).length;
                  return (
                    <button key={l.id} className="topic-card" onClick={() => startPractice(l)}>
                      <span className="topic-icon">耳</span>
                      <div className="topic-info">
                        <h2 className="topic-title">{l.title}</h2>
                        <p className="topic-desc">{n} 题</p>
                      </div>
                      <span className="sw-card-edit" onClick={(e) => { e.stopPropagation(); openEdit(l); }} title="编辑">✏️</span>
                      <span className="sw-card-del" onClick={(e) => { e.stopPropagation(); if (confirm(`删除「${l.title}」？`)) deleteList(l.id); }} title="删除">🗑️</span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      ) : phase === PHASE.EDIT ? (
        <div className="writing-body">
          <p className="home-pick-label">练习名称 Title</p>
          <input className="sw-title-input" value={titleDraft} onChange={(e) => setTitleDraft(e.target.value)} placeholder="例如：第一课 听力" />

          {items.map((it, i) => (
            <div key={i} className="lc-edit-card">
              <div className="lc-edit-head">
                <span className="lc-edit-num">第 {i + 1} 题</span>
                {items.length > 1 && <button className="lc-edit-remove" onClick={() => removeItem(i)} title="删除这题">✕</button>}
              </div>
              <label className="lc-edit-label">短文 Passage（读给孩子听）</label>
              <textarea className="sw-input lc-edit-passage" value={it.passage} onChange={(e) => setItem(i, { passage: e.target.value })} placeholder="例如：小明有一只小猫。小猫是白色的。" rows={2} />
              <label className="lc-edit-label">问题 Question</label>
              <input className="sw-title-input" value={it.q} onChange={(e) => setItem(i, { q: e.target.value })} placeholder="例如：小明的小猫是什么颜色的？" />
              <label className="lc-edit-label">选项 Choices（点圆圈标正确答案）</label>
              {it.choices.map((c, ci) => (
                <div key={ci} className="lc-edit-choice">
                  <button
                    className={`lc-edit-correct${it.answer === ci ? " on" : ""}`}
                    onClick={() => setItem(i, { answer: ci })}
                    title="标为正确答案"
                    aria-label="正确答案"
                  >{it.answer === ci ? "✓" : ""}</button>
                  <input className="sw-title-input" value={c} onChange={(e) => setChoice(i, ci, e.target.value)} placeholder={`选项 ${ci + 1}`} />
                </div>
              ))}
              {it.choices.length < 4 && <button className="lc-edit-addchoice" onClick={() => addChoice(i)}>+ 加选项</button>}
            </div>
          ))}

          <button className="btn-secondary lc-edit-additem" onClick={addItem}>+ 加一题 Add question</button>

          <div className="sw-input-actions">
            <button className="btn-secondary" onClick={() => { setTitleDraft((t) => t || "样本听力"); setItems(SAMPLE.map((s) => ({ ...s, choices: [...s.choices] }))); }}>用例子 Sample</button>
            <button className="btn-secondary" onClick={() => saveLesson(false)} disabled={!editValid}>保存 Save</button>
            <button className="btn-primary" onClick={() => saveLesson(true)} disabled={!editValid}>保存并练习 →</button>
          </div>
        </div>
      ) : phase === PHASE.PRACTICE && current ? (
        <div className="writing-body lc-practice">
          <div className="lc-progress">
            {lessonTitle && <span className="sw-lesson-name">{lessonTitle} · </span>}
            第 {qIndex + 1}/{playItems.length} 题
          </div>

          {/* The listen button is the heart of it — big and obvious. */}
          <button className={`lc-play-btn${played ? " played" : ""}`} onClick={playCurrent}>
            <span className="lc-play-icon">🔊</span>
            <span className="lc-play-label">{played ? "再听一次 Listen again" : "听一听 Play"}</span>
          </button>

          {/* Hear-first: the passage is hidden until Show text is tapped. */}
          {current.passage && (
            reveal ? (
              <p className="lc-passage">{current.passage}</p>
            ) : (
              <button className="lc-reveal" onClick={() => setReveal(true)}>看文字 Show text</button>
            )
          )}

          <p className="lc-question">{current.q}</p>

          <div className="lc-choices">
            {current.choices.map((c, ci) => {
              const isAnswer = ci === current.answer;
              const isPicked = ci === picked;
              const state = picked === null ? "" : isAnswer ? " correct" : isPicked ? " wrong" : " dim";
              return (
                <button key={ci} className={`lc-choice${state}`} onClick={() => pick(ci)} disabled={picked !== null}>
                  <span className="lc-choice-text">{c}</span>
                  {picked !== null && isAnswer && <span className="lc-choice-mark">✓</span>}
                  {picked !== null && isPicked && !isAnswer && <span className="lc-choice-mark">✗</span>}
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div className="lc-feedback">
              <span className={`lc-feedback-msg${picked === current.answer ? " ok" : " no"}`}>
                {picked === current.answer ? "答对了！🎉" : `再想想～ 正确答案：${current.choices[current.answer]}`}
              </span>
              <button className="btn-primary" onClick={nextQuestion}>{isLast ? "完成 Finish" : "下一题 Next →"}</button>
            </div>
          )}
        </div>
      ) : phase === PHASE.DONE ? (
        <div className="writing-body writing-centered">
          <div className="writing-done-emoji">🎉</div>
          <h1 className="hero-title">练完了！</h1>
          <p className="writing-done-stats">{lessonTitle} · 答对 {score}/{playItems.length} 题</p>
          <button className="btn-primary" onClick={() => startPractice({ title: lessonTitle, words: playItems.map((it) => JSON.stringify(it)) })}>再练一次 Again</button>
          <button className="btn-secondary" onClick={() => setPhase(PHASE.LIBRARY)}>回到听力 My lessons</button>
        </div>
      ) : null}
    </div>
  );
}
