import { useState, useMemo, useCallback } from "react";
import { useTTS } from "../hooks/useSpeech";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { listKind, sortListsByOrder } from "../utils/spellingKinds";
import { useListeningProgress } from "../hooks/useListeningProgress";
import { SYLLABI, syllabusById } from "../data/writingSyllabi";
import { DICTATION, dictationLessons, dictationItems, weeklyPapers, weeklyItems } from "../data/dictationSentences";
import { LISTENING_PACKS } from "../data/listeningPacks";
import SentenceWritePad from "../components/SentenceWritePad";
import StrokeDemoLine from "../components/StrokeDemoLine";
import PracticeCanvas from "../components/PracticeCanvas";

// 中文听力 — Chinese listening, P1 first, grounded in the MOE 生字表.
//   1. 句子听写 — sentence dictation: the whole sentence is read aloud. In 写汉字
//      the target character is a blank to fill (listening only, no pinyin cue);
//      in 写拼音 the character is shown underlined and the child writes its hanyu
//      pinyin. Per-lesson and weekly mixed papers.
//   2. 听力理解 — comprehension packs (passage + question), 选择 or 填空.
//   3. 我的听力 — the parent's own items (kind "listening", per-child cloud sync).
// Writing is self-checked (reveal the answer, mark ✓/✗) — matches the sentence
// writing approach and the school's marked worksheets. ZERO live AI.
const KIND = "listening";
const PHASE = { LIBRARY: "library", EDIT: "edit", PRACTICE: "practice", DONE: "done", REFERENCE: "reference" };
const P1_SYLLABI = SYLLABI.filter((s) => s.levelNum === 1);

const isCJK = (ch) => /[一-鿿]/.test(ch);
const PUNCT = /[。，、；：！？·…—“”‘’""''（）()《》〈〉【】]/;
const tokensOf = (s) =>
  [...String(s)]
    .map((ch) => (isCJK(ch) ? { t: "c", ch } : PUNCT.test(ch) ? { t: "p", ch } : null))
    .filter(Boolean);

const blankItem = () => ({ passage: "", q: "", choices: ["", "", ""], answer: 0 });

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

const compItem = (it) => ({ passage: it.passage || "", q: it.q || "", choices: it.choices, answer: it.answer, word: it.choices[it.answer] || "", segs: null, blanks: null, sentence: "" });
const clozeItem = (c) => ({ passage: "", q: "", choices: [], answer: 0, word: c.blanks.map((b) => b.ch).join(""), segs: c.segs, blanks: c.blanks, sentence: c.full });

const DICT_SYLLABI = Object.keys(DICTATION);
const cellFor = (n) => (n <= 2 ? 132 : n <= 4 ? 116 : 104);
const CIRC = ["①", "②", "③", "④", "⑤", "⑥"];

// Chinese numeral for 1–99, so lessons read 第一课, 第十二课 … (not "L1").
function cnNum(n) {
  const d = "零一二三四五六七八九";
  if (n <= 10) return n === 10 ? "十" : d[n];
  if (n < 20) return "十" + (n % 10 ? d[n % 10] : "");
  const t = Math.floor(n / 10), o = n % 10;
  return d[t] + "十" + (o ? d[o] : "");
}
const lessonName = (tag) => `第${cnNum(parseInt(String(tag).replace(/\D/g, ""), 10) || 0)}课`;

export default function ListeningScreen({ activeChild, user, onBack }) {
  const { speak, unlock } = useTTS("zh");
  const { lists, createList, updateList, deleteList } = useSpellingLists(activeChild, user?.id);
  const { markComplete, resetOne, resetAll, statusOf, doneCount } = useListeningProgress(activeChild?.id);

  const [phase, setPhase] = useState(PHASE.LIBRARY);
  const [sessionId, setSessionId] = useState(null);
  const [manage, setManage] = useState(false); // tap a completed item to reset it
  const [dictType, setDictType] = useState("hanzi"); // library: 写汉字 vs 写拼音 (separate exercises)
  const [editId, setEditId] = useState(null);
  const [titleDraft, setTitleDraft] = useState("");
  const [items, setItems] = useState([blankItem()]);

  // Practice session
  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionType, setSessionType] = useState("comprehension"); // "dictation" | "comprehension"
  const [format, setFormat] = useState("select"); // comprehension: "select" | "write"
  const [dictMode, setDictMode] = useState("hanzi"); // dictation: "hanzi" | "pinyin"
  const [playItems, setPlayItems] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [reveal, setReveal] = useState(false); // comprehension passage shown
  const [played, setPlayed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const myLessons = useMemo(() => sortListsByOrder(lists.filter((l) => listKind(l) === KIND)), [lists]);

  const current = playItems[qIndex] || null;
  const isLast = qIndex >= playItems.length - 1;
  const answerTokens = useMemo(() => tokensOf(current?.word || ""), [current]);
  const isDictation = sessionType === "dictation";
  const pinyinMode = isDictation && dictMode === "pinyin";
  const selectMode = !isDictation && format === "select";
  const multi = isDictation && !!current?.blanks && current.blanks.length > 1;

  // ── Launchers ────────────────────────────────────────────────────────────
  const beginSession = useCallback((id, title, type, fmt, normItems, mode = "hanzi") => {
    if (!normItems.length) return;
    unlock();
    setSessionId(id); setSessionTitle(title); setSessionType(type); setFormat(fmt); setDictMode(mode); setPlayItems(normItems);
    setQIndex(0); setPicked(null); setRevealed(false); setScore(0);
    setReveal(false); setPlayed(false); setAttempt((a) => a + 1); setPhase(PHASE.PRACTICE);
  }, [unlock]);

  const modeLabel = (mode) => (mode === "pinyin" ? "写拼音" : "写汉字");
  const startDictation = (syllId, tag, mode) => {
    const label = syllabusById(syllId)?.label || "听写";
    beginSession(`dict:${syllId}:${tag}:${mode}`, `${label} · ${lessonName(tag)} · ${modeLabel(mode)}`, "dictation", "write", dictationItems(syllId, tag).map(clozeItem), mode);
  };
  const startWeekly = (paper, mode) => beginSession(`${paper.id}:${mode}`, `${paper.label} · ${modeLabel(mode)}`, "dictation", "write", weeklyItems(paper.id).map(clozeItem), mode);
  const startPack = (pack) => beginSession(pack.id, pack.label, "comprehension", "select", pack.items.map(compItem));
  const startMyLesson = (lesson) => beginSession(`my:${lesson.id}`, lesson.title || "我的听力", "comprehension", "select", itemsFromWords(lesson.words).map(compItem));

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
    if (thenPractise) beginSession(`my:${id}`, title, "comprehension", "select", itemsFromWords(words).map(compItem));
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
    if (isDictation) { speak(current.sentence); return; }
    const text = current.passage ? `${current.passage} ${current.q}` : current.q;
    speak(text, format === "select" ? current.choices : undefined);
  };
  const goNext = (finalScore) => {
    if (isLast) { markComplete(sessionId, finalScore, playItems.length); setPhase(PHASE.DONE); return; }
    setQIndex((i) => i + 1);
    setPicked(null); setRevealed(false); setReveal(false); setPlayed(false); setAttempt((a) => a + 1);
  };
  const pick = (ci) => { if (picked !== null) return; setPicked(ci); if (ci === current.answer) setScore((s) => s + 1); };
  // Self-marking: tapping ✓/✗ records and goes straight to the next item.
  const selfCheck = (ok) => { const finalScore = ok ? score + 1 : score; if (ok) setScore(finalScore); goNext(finalScore); };
  const advance = () => goNext(score);
  // In manage mode, tapping a completed exercise resets just that one; otherwise
  // the tap launches it. Returns the class suffix for the completion colour.
  const launchTap = (id, launch) => (manage && statusOf(id) ? () => resetOne(id) : launch);
  const doneClass = (id) => { const st = statusOf(id); return st ? ` lc-${st}${manage ? " lc-resettable" : ""}` : ""; };

  const onTopBack = () => { if (phase === PHASE.LIBRARY) onBack(); else setPhase(PHASE.LIBRARY); };
  const answered = selectMode ? picked !== null : revealed;
  const nextLabel = isLast ? "完成 Finish" : (isDictation ? "下一句 Next →" : "下一题 Next →");

  const selfCheckBlock = (
    <div className="lc-selfcheck">
      <span className="lc-selfcheck-q">写对了吗？</span>
      <button className="lc-self-yes" onClick={() => selfCheck(true)}>✓ 对了</button>
      <button className="lc-self-no" onClick={() => selfCheck(false)}>✗ 错了</button>
    </div>
  );

  return (
    <div className="screen writing-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onTopBack}>←</button>
        <span className="topbar-topic">听力 Listening</span>
      </div>

      {phase === PHASE.LIBRARY ? (
        <div className="writing-body">
          {doneCount > 0 && (
            <div className="lc-manage-row">
              <span className="lc-manage-hint">{manage ? "点亮的练习 → 点一下可重置" : "⭐ 完成的练习会亮起"}</span>
              <span className="lc-manage-actions">
                {manage && <button className="lc-manage-btn lc-reset-all" onClick={() => { if (confirm("重置所有听力进度？")) { resetAll(); setManage(false); } }}>全部重置</button>}
                <button className="lc-manage-btn" onClick={() => setManage((m) => !m)}>{manage ? "✓ 完成" : "✎ 管理进度"}</button>
              </span>
            </div>
          )}
          {/* 1. Sentence dictation from the syllabus — 写汉字 and 写拼音 are
               separate exercises, each with its own completion. */}
          <p className="home-pick-label">句子听写 · 跟着课本 Sentence dictation</p>
          <div className="sw-modebar sw-modebar-mini lc-type-seg">
            <button className={`sw-mode-btn${dictType === "hanzi" ? " active" : ""}`} onClick={() => setDictType("hanzi")}>写汉字<span className="lc-seg-sub">听写</span></button>
            <button className={`sw-mode-btn${dictType === "pinyin" ? " active" : ""}`} onClick={() => setDictType("pinyin")}>写拼音<span className="lc-seg-sub">注音</span></button>
          </div>
          {DICT_SYLLABI.map((id) => {
            const syll = syllabusById(id);
            if (!syll) return null;
            const weekly = weeklyPapers(id);
            return (
              <div key={id} className="lc-syll">
                <div className="lc-syll-head">
                  <span className="lc-syll-name">{syll.label}{syll.stream === "高级华文" ? " (Higher)" : ""}</span>
                </div>
                <div className="lc-lesson-chips">
                  {dictationLessons(id).map((l) => {
                    const lid = `dict:${id}:${l.tag}:${dictType}`;
                    return (
                      <button key={l.tag} className={`lc-chip${doneClass(lid)}`} onClick={launchTap(lid, () => startDictation(id, l.tag, dictType))}>
                        {statusOf(lid) === "perfect" && <span className="lc-star">★</span>}{lessonName(l.tag)}<span className="lc-chip-n">{l.count}</span>
                      </button>
                    );
                  })}
                </div>
                {weekly.length > 0 && (
                  <div className="lc-weekly">
                    {weekly.map((p) => {
                      const wid = `${p.id}:${dictType}`;
                      return (
                        <button key={p.id} className={`lc-weekly-btn${doneClass(wid)}`} onClick={launchTap(wid, () => startWeekly(p, dictType))}>
                          {statusOf(wid) === "perfect" ? "⭐" : "📄"} {p.label.split("·").pop().trim()}<span className="lc-chip-n">{p.count}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* 2. Hand-authored comprehension packs */}
          <p className="home-pick-label lc-section-gap">听力理解 Comprehension</p>
          <div className="topic-list">
            {LISTENING_PACKS.map((p) => (
              <button key={p.id} className={`topic-card${doneClass(p.id)}`} onClick={launchTap(p.id, () => startPack(p))}>
                <span className="topic-icon">{statusOf(p.id) === "perfect" ? "⭐" : "耳"}</span>
                <div className="topic-info">
                  <h2 className="topic-title">{p.label}</h2>
                  <p className="topic-desc">{p.items.length} 题 · 选择 / 填空</p>
                </div>
                <span className="topic-arrow">{manage && statusOf(p.id) ? "↺" : "›"}</span>
              </button>
            ))}
          </div>

          {/* 3. Parent's own lessons */}
          <p className="home-pick-label lc-section-gap">我的听力 My lessons</p>
          <button className="btn-primary sw-new-btn" onClick={openNew}>➕ 新建听力 New lesson</button>
          {myLessons.length > 0 && (
            <div className="topic-list">
              {myLessons.map((l) => (
                <button key={l.id} className={`topic-card${doneClass(`my:${l.id}`)}`} onClick={launchTap(`my:${l.id}`, () => startMyLesson(l))}>
                  <span className="topic-icon">{statusOf(`my:${l.id}`) === "perfect" ? "⭐" : "句"}</span>
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

          <button className="lc-ref-link" onClick={() => setPhase(PHASE.REFERENCE)}>📖 生字表 · 家长参考 Word lists</button>
        </div>
      ) : phase === PHASE.REFERENCE ? (
        <div className="writing-body lc-ref">
          <p className="writing-note-en sw-hint lc-ref-note">生字表（家长参考）· 练习时请勿让孩子看到答案 — for parents' reference, not during the child's practice.</p>
          {P1_SYLLABI.map((syll) => (
            <div key={syll.id} className="lc-ref-syll">
              <h2 className="lc-ref-title">{syll.label}{syll.stream === "高级华文" ? " (Higher)" : ""}</h2>
              {syll.lessons.map((l) => (
                <div key={l.tag} className="lc-ref-lesson">
                  <span className="lc-ref-lnum">{lessonName(l.tag)}</span>
                  <span className="lc-ref-chars">{l.chars.join(" ")}</span>
                </div>
              ))}
            </div>
          ))}
          <button className="btn-secondary lc-ref-back" onClick={() => setPhase(PHASE.LIBRARY)}>← 返回 Back</button>
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
            第 {qIndex + 1}/{playItems.length} {isDictation ? "句" : "题"}
          </div>

          {/* Comprehension answers two ways; dictation mode is fixed per exercise. */}
          {!isDictation && !answered && (
            <div className="sw-modebar sw-modebar-mini lc-modebar">
              <button className={`sw-mode-btn${format === "select" ? " active" : ""}`} onClick={() => setFormat("select")}>选择</button>
              <button className={`sw-mode-btn${format === "write" ? " active" : ""}`} onClick={() => setFormat("write")}>填空</button>
            </div>
          )}

          <button className={`lc-play-btn${played ? " played" : ""}`} onClick={playCurrent}>
            <span className="lc-play-icon">🔊</span>
            <span className="lc-play-label">
              {isDictation ? (played ? "再听一次 Again" : "听句子 Play") : (played ? "再听一次 Listen again" : "听一听 Play")}
            </span>
          </button>

          {/* Prompt */}
          {isDictation ? (
            <p className="lc-cloze">
              {current.segs.map((sg, k) => sg.t === "text" ? (
                <span key={k}>{sg.text}</span>
              ) : pinyinMode ? (
                <span key={k}>{multi && <sup className="lc-bnum">{CIRC[sg.i]}</sup>}<u className="lc-underline">{sg.ch}</u></span>
              ) : (
                <span key={k} className="lc-blank-wrap">{multi && <sup className="lc-bnum">{CIRC[sg.i]}</sup>}<span className="lc-blank" /></span>
              ))}
            </p>
          ) : (
            <>
              {current.passage && (reveal
                ? <p className="lc-passage">{current.passage}</p>
                : <button className="lc-reveal" onClick={() => setReveal(true)}>看文字 Show text</button>)}
              <p className="lc-question">{current.q}</p>
            </>
          )}

          {/* Response */}
          {selectMode ? (
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
                  <button className="btn-primary" onClick={advance}>{nextLabel}</button>
                </div>
              )}
            </>
          ) : pinyinMode ? (
            <div className="lc-write">
              <p className="lc-write-hint">{multi ? "写出画线字的拼音" : <>写出<b> {current.blanks[0].ch} </b>的拼音</>}</p>
              <PracticeCanvas key={`py-${qIndex}-${attempt}`} clearLabel="重写 Clear" height={130} />
              {!revealed ? (
                <button className="btn-primary lc-reveal-btn" onClick={() => setRevealed(true)}>看答案 Reveal ✓</button>
              ) : (
                <div className="lc-answer">
                  <p className="lc-answer-label">答案 Answer</p>
                  <div className="lc-py-list">
                    {current.blanks.map((b, k) => (
                      <span key={k} className="lc-py-answer">{multi && <span className="lc-bnum">{CIRC[k]} </span>}{b.ch} <b>{b.py}</b></span>
                    ))}
                  </div>
                  {selfCheckBlock}
                </div>
              )}
            </div>
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
                  {selfCheckBlock}
                </div>
              )}
            </div>
          )}
        </div>
      ) : phase === PHASE.DONE ? (
        <div className="writing-body writing-centered">
          <div className="writing-done-emoji">{score >= playItems.length ? "⭐" : "🎉"}</div>
          <h1 className="hero-title">{score >= playItems.length ? "全对了！" : "练完了！"}</h1>
          <p className="writing-done-stats">{sessionTitle} · 答对 {score}/{playItems.length}</p>
          <button className="btn-primary" onClick={() => beginSession(sessionId, sessionTitle, sessionType, format, playItems, dictMode)}>再练一次 Again</button>
          <button className="btn-secondary" onClick={() => setPhase(PHASE.LIBRARY)}>回到听力 Back</button>
        </div>
      ) : null}
    </div>
  );
}
