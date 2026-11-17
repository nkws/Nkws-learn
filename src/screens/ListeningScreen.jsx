import { useState, useMemo, useCallback } from "react";
import { useTTS } from "../hooks/useSpeech";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { listKind, sortListsByOrder } from "../utils/spellingKinds";
import { SYLLABI } from "../data/writingSyllabi";
import { LISTENING_PACKS } from "../data/listeningPacks";
import SentenceWritePad from "../components/SentenceWritePad";
import StrokeDemoLine from "../components/StrokeDemoLine";

// 中文听力理解 — Chinese listening comprehension, P1 first, grounded in the
// official MOE 生字表 (华文 + 高级华文). Three content sources:
//   1. 跟着课本 — listen-and-write drills generated straight from each syllabus
//      lesson (zero authoring; hear the character, write it, reveal to self-check).
//   2. 听力理解 — hand-authored comprehension packs (short passage + question).
//   3. 我的听力 — the parent's own items, saved like spelling lists (kind
//      "listening") with per-child cloud sync.
// Two response modes for comprehension: 选择 (tap the answer) and 填空 (write the
// answer by hand, then 看答案 to reveal & self-check). Word drills are always
// write-and-check. ZERO live AI: content is fixed or syllabus-derived; the
// device's Chinese voice reads it aloud on tap.
const KIND = "listening";
const PHASE = { LIBRARY: "library", EDIT: "edit", PRACTICE: "practice", DONE: "done" };

const isCJK = (ch) => /[一-鿿]/.test(ch);
const PUNCT = /[。，、；：！？·…—“”‘’""''（）()《》〈〉【】]/;
const tokensOf = (s) =>
  [...String(s)]
    .map((ch) => (isCJK(ch) ? { t: "c", ch } : PUNCT.test(ch) ? { t: "p", ch } : null))
    .filter(Boolean);

const blankItem = () => ({ passage: "", q: "", choices: ["", "", ""], answer: 0 });

// Parse a saved lesson's items (stored in `words` as JSON strings).
const itemsFromWords = (words) =>
  (words || [])
    .map((w) => {
      try {
        const o = typeof w === "string" ? JSON.parse(w) : w;
        if (!o || typeof o !== "object") return null;
        const choices = Array.isArray(o.choices) ? o.choices.map((c) => String(c)) : [];
        return { passage: String(o.passage || ""), q: String(o.q || ""), choices, answer: Number.isInteger(o.answer) ? o.answer : 0 };
      } catch { return null; }
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

// Normalise any source into practice items. A comprehension item carries
// choices; a word-drill item carries only the answer word to write.
const compItem = (it) => ({ passage: it.passage || "", q: it.q || "", choices: it.choices, answer: it.answer, word: it.choices[it.answer] || "" });
const wordItem = (ch) => ({ passage: "", q: "", choices: [], answer: 0, word: ch });

const P1_SYLLABI = SYLLABI.filter((s) => s.levelNum === 1);
const cellFor = (n) => (n <= 2 ? 132 : n <= 4 ? 116 : 104);

export default function ListeningScreen({ activeChild, user, onBack }) {
  const { speak, unlock } = useTTS("zh");
  const { lists, createList, updateList, deleteList } = useSpellingLists(activeChild, user?.id);

  const [phase, setPhase] = useState(PHASE.LIBRARY);
  const [editId, setEditId] = useState(null);
  const [titleDraft, setTitleDraft] = useState("");
  const [items, setItems] = useState([blankItem()]);

  // Practice session
  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionType, setSessionType] = useState("comprehension"); // "comprehension" | "word"
  const [format, setFormat] = useState("select"); // "select" | "write"
  const [playItems, setPlayItems] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState(null); // select mode
  const [revealed, setRevealed] = useState(false); // write mode
  const [selfResult, setSelfResult] = useState(null); // write mode: true/false
  const [score, setScore] = useState(0);
  const [reveal, setReveal] = useState(false); // passage text shown
  const [played, setPlayed] = useState(false);
  const [attempt, setAttempt] = useState(0); // remounts the write pad

  const myLessons = useMemo(() => sortListsByOrder(lists.filter((l) => listKind(l) === KIND)), [lists]);

  const current = playItems[qIndex] || null;
  const isLast = qIndex >= playItems.length - 1;
  const answerTokens = useMemo(() => tokensOf(current?.word || ""), [current]);

  // ── Launchers ────────────────────────────────────────────────────────────
  const beginSession = useCallback((title, type, fmt, normItems) => {
    if (!normItems.length) return;
    unlock();
    setSessionTitle(title);
    setSessionType(type);
    setFormat(fmt);
    setPlayItems(normItems);
    setQIndex(0);
    setPicked(null);
    setRevealed(false);
    setSelfResult(null);
    setScore(0);
    setReveal(false);
    setPlayed(false);
    setAttempt((a) => a + 1);
    setPhase(PHASE.PRACTICE);
  }, [unlock]);

  const startSyllabusDrill = (syll, lesson) => {
    const chars = lesson ? lesson.chars : syll.lessons.flatMap((l) => l.chars);
    const title = `${syll.label}${lesson ? " · " + lesson.tag : " · 全部"}`;
    beginSession(title, "word", "write", chars.map(wordItem));
  };
  const startPack = (pack) => beginSession(pack.label, "comprehension", "select", pack.items.map(compItem));
  const startMyLesson = (lesson) => beginSession(lesson.title || "我的听力", "comprehension", "select", itemsFromWords(lesson.words).map(compItem));

  // ── Editor (my lessons) ──────────────────────────────────────────────────
  const openNew = () => { setEditId(null); setTitleDraft(""); setItems([blankItem()]); setPhase(PHASE.EDIT); };
  const openEdit = (lesson) => {
    const its = itemsFromWords(lesson.words);
    setEditId(lesson.id); setTitleDraft(lesson.title || ""); setItems(its.length ? its : [blankItem()]); setPhase(PHASE.EDIT);
  };
  const editValid = useMemo(() => wordsFromItems(items).length > 0, [items]);
  const saveLesson = (thenPractise) => {
    const words = wordsFromItems(items);
    if (!words.length) return;
    const title = titleDraft.trim() || "未命名听力";
    let id = editId;
    if (id) updateList(id, { title, words });
    else { id = createList(title, "zh", KIND); updateList(id, { words }); setEditId(id); }
    if (thenPractise) beginSession(title, "comprehension", "select", itemsFromWords(words).map(compItem));
    else setPhase(PHASE.LIBRARY);
  };
  const setItem = (i, patch) => setItems((arr) => arr.map((it, k) => (k === i ? { ...it, ...patch } : it)));
  const setChoice = (i, ci, val) => setItems((arr) => arr.map((it, k) => (k === i ? { ...it, choices: it.choices.map((c, j) => (j === ci ? val : c)) } : it)));
  const addChoice = (i) => setItems((arr) => arr.map((it, k) => (k === i && it.choices.length < 4 ? { ...it, choices: [...it.choices, ""] } : it)));
  const addItem = () => setItems((arr) => [...arr, blankItem()]);
  const removeItem = (i) => setItems((arr) => (arr.length <= 1 ? arr : arr.filter((_, k) => k !== i)));

  // ── Practice actions ──────────────────────────────────────────────────────
  const playCurrent = () => {
    if (!current) return;
    setPlayed(true);
    if (sessionType === "word") { speak(current.word); return; }
    const text = current.passage ? `${current.passage} ${current.q}` : current.q;
    // Read the options too only in 选择 (MCQ) mode — in 填空 there are none shown.
    speak(text, format === "select" ? current.choices : undefined);
  };
  const pick = (ci) => { if (picked !== null) return; setPicked(ci); if (ci === current.answer) setScore((s) => s + 1); };
  const selfCheck = (ok) => { if (selfResult !== null) return; setSelfResult(ok); if (ok) setScore((s) => s + 1); };
  const advance = () => {
    if (isLast) { setPhase(PHASE.DONE); return; }
    setQIndex((i) => i + 1);
    setPicked(null); setRevealed(false); setSelfResult(null); setReveal(false); setPlayed(false);
    setAttempt((a) => a + 1);
  };

  const onTopBack = () => { if (phase === PHASE.LIBRARY) onBack(); else setPhase(PHASE.LIBRARY); };
  const answered = format === "select" ? picked !== null : selfResult !== null;

  return (
    <div className="screen writing-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onTopBack}>←</button>
        <span className="topbar-topic">听力理解 Listening</span>
      </div>

      {phase === PHASE.LIBRARY ? (
        <div className="writing-body">
          {/* 1. Syllabus listen-and-write drills */}
          <p className="home-pick-label">跟着课本 · 听写练习 From the syllabus</p>
          {P1_SYLLABI.map((syll) => (
            <div key={syll.id} className="lc-syll">
              <div className="lc-syll-head">
                <span className="lc-syll-name">{syll.label}{syll.stream === "高级华文" ? " (Higher)" : ""}</span>
                <button className="lc-syll-all" onClick={() => startSyllabusDrill(syll, null)}>全部 All ({syll.lessons.reduce((n, l) => n + l.chars.length, 0)})</button>
              </div>
              <div className="lc-lesson-chips">
                {syll.lessons.map((l) => (
                  <button key={l.tag} className="lc-chip" onClick={() => startSyllabusDrill(syll, l)} title={l.chars.join(" ")}>
                    {l.tag}<span className="lc-chip-n">{l.chars.length}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* 2. Hand-authored comprehension packs */}
          <p className="home-pick-label lc-section-gap">听力理解 Comprehension</p>
          <div className="topic-list">
            {LISTENING_PACKS.map((p) => (
              <button key={p.id} className="topic-card" onClick={() => startPack(p)}>
                <span className="topic-icon">耳</span>
                <div className="topic-info">
                  <h2 className="topic-title">{p.label}</h2>
                  <p className="topic-desc">{p.items.length} 题 · 选择 / 填空</p>
                </div>
                <span className="topic-arrow">›</span>
              </button>
            ))}
          </div>

          {/* 3. Parent's own lessons */}
          <p className="home-pick-label lc-section-gap">我的听力 My lessons</p>
          <button className="btn-primary sw-new-btn" onClick={openNew}>➕ 新建听力 New lesson</button>
          {myLessons.length > 0 && (
            <div className="topic-list">
              {myLessons.map((l) => (
                <button key={l.id} className="topic-card" onClick={() => startMyLesson(l)}>
                  <span className="topic-icon">句</span>
                  <div className="topic-info">
                    <h2 className="topic-title">{l.title}</h2>
                    <p className="topic-desc">{itemsFromWords(l.words).length} 题</p>
                  </div>
                  <span className="sw-card-edit" onClick={(e) => { e.stopPropagation(); openEdit(l); }} title="编辑">✏️</span>
                  <span className="sw-card-del" onClick={(e) => { e.stopPropagation(); if (confirm(`删除「${l.title}」？`)) deleteList(l.id); }} title="删除">🗑️</span>
                </button>
              ))}
            </div>
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
              <input className="sw-title-input" value={it.q} onChange={(e) => setItem(i, { q: e.target.value })} placeholder="例如：小猫是什么颜色的？" />
              <label className="lc-edit-label">选项 Choices（点圆圈标正确答案）</label>
              {it.choices.map((c, ci) => (
                <div key={ci} className="lc-edit-choice">
                  <button className={`lc-edit-correct${it.answer === ci ? " on" : ""}`} onClick={() => setItem(i, { answer: ci })} title="标为正确答案" aria-label="正确答案">{it.answer === ci ? "✓" : ""}</button>
                  <input className="sw-title-input" value={c} onChange={(e) => setChoice(i, ci, e.target.value)} placeholder={`选项 ${ci + 1}`} />
                </div>
              ))}
              {it.choices.length < 4 && <button className="lc-edit-addchoice" onClick={() => addChoice(i)}>+ 加选项</button>}
            </div>
          ))}
          <button className="btn-secondary lc-edit-additem" onClick={addItem}>+ 加一题 Add question</button>
          <div className="sw-input-actions">
            <button className="btn-secondary" onClick={() => saveLesson(false)} disabled={!editValid}>保存 Save</button>
            <button className="btn-primary" onClick={() => saveLesson(true)} disabled={!editValid}>保存并练习 →</button>
          </div>
        </div>
      ) : phase === PHASE.PRACTICE && current ? (
        <div className="writing-body lc-practice">
          <div className="lc-progress">
            {sessionTitle && <span className="sw-lesson-name">{sessionTitle} · </span>}
            第 {qIndex + 1}/{playItems.length} {sessionType === "word" ? "字" : "题"}
          </div>

          {/* Comprehension items can switch between tap-the-answer and write-it. */}
          {sessionType === "comprehension" && !answered && (
            <div className="sw-modebar sw-modebar-mini lc-modebar">
              <button className={`sw-mode-btn${format === "select" ? " active" : ""}`} onClick={() => setFormat("select")}>选择</button>
              <button className={`sw-mode-btn${format === "write" ? " active" : ""}`} onClick={() => setFormat("write")}>填空</button>
            </div>
          )}

          <button className={`lc-play-btn${played ? " played" : ""}`} onClick={playCurrent}>
            <span className="lc-play-icon">🔊</span>
            <span className="lc-play-label">
              {sessionType === "word"
                ? (played ? "再听一次 Again" : "听写：听一听 Play")
                : (played ? "再听一次 Listen again" : "听一听 Play")}
            </span>
          </button>

          {/* Hear-first: passage hidden until Show text. */}
          {current.passage && (reveal
            ? <p className="lc-passage">{current.passage}</p>
            : <button className="lc-reveal" onClick={() => setReveal(true)}>看文字 Show text</button>)}

          {current.q
            ? <p className="lc-question">{current.q}</p>
            : <p className="lc-question lc-q-hint">把你听到的字写出来</p>}

          {format === "select" ? (
            <>
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
                  <button className="btn-primary" onClick={advance}>{isLast ? "完成 Finish" : "下一题 Next →"}</button>
                </div>
              )}
            </>
          ) : (
            <div className="lc-write">
              {!revealed ? (
                <SentenceWritePad
                  key={`pad-${qIndex}-${attempt}`}
                  charCount={Math.max(1, answerTokens.length)}
                  cell={cellFor(answerTokens.length)}
                  doneLabel="看答案 Reveal ✓"
                  onDone={() => setRevealed(true)}
                />
              ) : (
                <div className="lc-answer">
                  <p className="lc-answer-label">答案 Answer</p>
                  <StrokeDemoLine key={`ans-${qIndex}-${attempt}`} tokens={answerTokens} size={72} pinyinMap={{}} />
                  {selfResult === null ? (
                    <div className="lc-selfcheck">
                      <span className="lc-selfcheck-q">写对了吗？</span>
                      <button className="lc-self-yes" onClick={() => selfCheck(true)}>✓ 对了</button>
                      <button className="lc-self-no" onClick={() => selfCheck(false)}>✗ 再练</button>
                    </div>
                  ) : (
                    <div className="lc-feedback">
                      <span className={`lc-feedback-msg${selfResult ? " ok" : " no"}`}>{selfResult ? "很棒！🎉" : "没关系，多练几次～"}</span>
                      <button className="btn-primary" onClick={advance}>{isLast ? "完成 Finish" : (sessionType === "word" ? "下一个 Next →" : "下一题 Next →")}</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ) : phase === PHASE.DONE ? (
        <div className="writing-body writing-centered">
          <div className="writing-done-emoji">🎉</div>
          <h1 className="hero-title">练完了！</h1>
          <p className="writing-done-stats">{sessionTitle} · 答对 {score}/{playItems.length}</p>
          <button className="btn-primary" onClick={() => beginSession(sessionTitle, sessionType, format, playItems)}>再练一次 Again</button>
          <button className="btn-secondary" onClick={() => setPhase(PHASE.LIBRARY)}>回到听力 Back</button>
        </div>
      ) : null}
    </div>
  );
}
