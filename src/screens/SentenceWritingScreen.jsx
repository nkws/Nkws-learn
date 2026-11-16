import { useState, useEffect, useMemo, useCallback } from "react";
import SentenceWritePad from "../components/SentenceWritePad";
import StrokeDemoLine from "../components/StrokeDemoLine";
import { boxSizeFor } from "../utils/writingBox";
import { lookupWord } from "../utils/dictionary";
import { useTTS } from "../hooks/useSpeech";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { listKind, sortListsByOrder } from "../utils/spellingKinds";

// Chinese sentence/paragraph-writing ladder. Lessons are saved exactly like
// spelling lists — same store, same cloud sync, per-child — with kind
// "sentence": a title plus the model text split into PARAGRAPHS (stored as
// `words`, one paragraph per entry). In practice, one paragraph shows per page
// (whole paragraph visible, split into sentences); the child writes it sentence
// by sentence in plain 田字格 boxes with a finger (no stroke recognition —
// self-assessed). Two modes: 照着写 copy (model shown) · 默写 from memory
// (model hidden). ← → arrows move between paragraphs.
const KIND = "sentence";
const PHASE = { LIBRARY: "library", EDIT: "edit", PRACTICE: "practice", DONE: "done" };

const MODES = [
  { key: "copy", label: "照着写", en: "Copy" },
  { key: "memory", label: "默写", en: "Memory" },
];
const SAMPLE = "今天天气很好。我和妈妈去公园。\n我们玩得很开心，妈妈买了雪糕。";

const isCJK = (ch) => /[一-鿿]/.test(ch);
const PUNCT = /[。，、；：！？·…—“”‘’""''（）()《》〈〉【】]/;
const cjkCount = (s) => [...String(s)].filter(isCJK).length;
const tokensOf = (display) =>
  [...String(display)]
    .map((ch) => (isCJK(ch) ? { t: "c", ch } : PUNCT.test(ch) ? { t: "p", ch } : null))
    .filter(Boolean);

const paragraphsFromText = (text) =>
  String(text || "").split(/\n+/).map((s) => s.trim()).filter((s) => cjkCount(s) > 0);
const sentencesOf = (para) =>
  String(para || "")
    .split(/(?<=[。！？!?])/)
    .map((s) => s.trim())
    .filter((s) => cjkCount(s) > 0)
    .map((display) => ({ display, tokens: tokensOf(display) }));

export default function SentenceWritingScreen({ activeChild, user, onBack }) {
  const { speak } = useTTS("zh");
  const { lists, createList, updateList, deleteList } = useSpellingLists(activeChild, user?.id);

  const [phase, setPhase] = useState(PHASE.LIBRARY);
  const [editId, setEditId] = useState(null);
  const [titleDraft, setTitleDraft] = useState("");
  const [draft, setDraft] = useState("");

  // Practice state
  const [lessonTitle, setLessonTitle] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [pIndex, setPIndex] = useState(0);
  const [mode, setMode] = useState("copy");
  const [activeSentence, setActiveSentence] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [pinyinMap, setPinyinMap] = useState({});

  const lessons = useMemo(() => sortListsByOrder(lists.filter((l) => listKind(l) === KIND)), [lists]);

  const sentences = useMemo(() => sentencesOf(paragraphs[pIndex] || ""), [paragraphs, pIndex]);
  const paraCells = useMemo(() => sentences.reduce((n, s) => n + s.tokens.length, 0), [sentences]);
  const boxSize = useMemo(() => boxSizeFor(paraCells || 1), [paraCells]);
  const memory = mode === "memory";

  // The child writes at full (finger) size; the demonstration is just a compact
  // reference to watch, so it gets a smaller box.
  const demoSize = Math.min(72, boxSize); // compact demonstrated characters (reference only)
  // A generous per-character writing box, sized for his hand (not the demo).
  const cell = Math.min(150, Math.max(104, Math.round(boxSize * 1.4)));

  // Pinyin for every character in the current paragraph.
  useEffect(() => {
    if (phase !== PHASE.PRACTICE || sentences.length === 0) return;
    let cancelled = false;
    const chars = [...new Set(sentences.flatMap((s) => s.tokens.filter((t) => t.t === "c").map((t) => t.ch)))];
    (async () => {
      const entries = await Promise.all(chars.map(async (c) => [c, (await lookupWord(c, "zh"))?.pinyin || ""]));
      if (!cancelled) setPinyinMap((m) => ({ ...m, ...Object.fromEntries(entries) }));
    })();
    return () => { cancelled = true; };
  }, [phase, sentences]);

  // ── Library / edit ──────────────────────────────────────────────────────
  const openNew = () => { setEditId(null); setTitleDraft(""); setDraft(""); setPhase(PHASE.EDIT); };
  const openEdit = (lesson) => {
    setEditId(lesson.id);
    setTitleDraft(lesson.title || "");
    setDraft((lesson.words || []).join("\n\n"));
    setPhase(PHASE.EDIT);
  };
  const saveLesson = (thenPractise) => {
    const paras = paragraphsFromText(draft);
    if (paras.length === 0) return;
    const title = titleDraft.trim() || "未命名练习";
    let id = editId;
    if (id) updateList(id, { title, words: paras });
    else { id = createList(title, "zh", KIND); updateList(id, { words: paras }); setEditId(id); }
    if (thenPractise) startPractice({ title, words: paras });
    else setPhase(PHASE.LIBRARY);
  };

  const startPractice = useCallback((lesson) => {
    setLessonTitle(lesson.title || "");
    setParagraphs(lesson.words || []);
    setPIndex(0);
    setMode("copy");
    setActiveSentence(0);
    setAttempt((a) => a + 1);
    setPhase(PHASE.PRACTICE);
  }, []);

  // ── Practice controls ───────────────────────────────────────────────────
  const restartParagraph = () => { setActiveSentence(0); setAttempt((a) => a + 1); };
  const pickMode = (m) => { setMode(m); restartParagraph(); };
  const goParagraph = (delta) => {
    const next = pIndex + delta;
    if (next < 0 || next >= paragraphs.length) return;
    setPIndex(next); setActiveSentence(0); setAttempt((a) => a + 1);
  };
  const advanceSentence = () => { setActiveSentence((si) => si + 1); setAttempt((a) => a + 1); };

  const paraDone = activeSentence >= sentences.length && sentences.length > 0;
  const lastPara = pIndex >= paragraphs.length - 1;
  const activeS = sentences[activeSentence] || null;

  const onTopBack = () => { if (phase === PHASE.LIBRARY) onBack(); else setPhase(PHASE.LIBRARY); };

  return (
    <div className="screen writing-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onTopBack}>←</button>
        <span className="topbar-topic">写句子 Sentence Writing</span>
      </div>

      {phase === PHASE.LIBRARY ? (
        <div className="writing-body">
          <button className="btn-primary sw-new-btn" onClick={openNew}>➕ 新建练习 New lesson</button>
          {lessons.length === 0 ? (
            <p className="writing-note-en sw-hint">No saved lessons yet. Tap "New lesson" to key in a sentence or paragraph.</p>
          ) : (
            <>
              <p className="home-pick-label">我的练习 My lessons</p>
              <div className="topic-list">
                {lessons.map((l) => (
                  <button key={l.id} className="topic-card" onClick={() => startPractice(l)}>
                    <span className="topic-icon">句</span>
                    <div className="topic-info">
                      <h2 className="topic-title">{l.title}</h2>
                      <p className="topic-desc">
                        {(l.words || []).length} 段 · {(l.words || []).reduce((n, w) => n + cjkCount(w), 0)} 字
                      </p>
                    </div>
                    <span className="sw-card-edit" onClick={(e) => { e.stopPropagation(); openEdit(l); }} title="编辑">✏️</span>
                    <span className="sw-card-del" onClick={(e) => { e.stopPropagation(); if (confirm(`删除「${l.title}」？`)) deleteList(l.id); }} title="删除">🗑️</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      ) : phase === PHASE.EDIT ? (
        <div className="writing-body">
          <p className="home-pick-label">练习名称 Title</p>
          <input className="sw-title-input" value={titleDraft} onChange={(e) => setTitleDraft(e.target.value)} placeholder="例如：第一课 造句" />
          <p className="home-pick-label">范文 Model text（换行分段 line break = new paragraph）</p>
          <textarea className="sw-input" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="例如：今天天气很好。我和妈妈去公园。" rows={6} />
          <div className="sw-input-actions">
            <button className="btn-secondary" onClick={() => setDraft(SAMPLE)}>用例子 Sample</button>
            <button className="btn-secondary" onClick={() => saveLesson(false)} disabled={paragraphsFromText(draft).length === 0}>保存 Save</button>
            <button className="btn-primary" onClick={() => saveLesson(true)} disabled={paragraphsFromText(draft).length === 0}>保存并练习 →</button>
          </div>
          {paragraphsFromText(draft).length > 0 && (
            <p className="sw-count">{paragraphsFromText(draft).length} 段 · {cjkCount(draft)} 个字</p>
          )}
        </div>
      ) : phase === PHASE.PRACTICE ? (
        <div className="writing-body sw-practice">
          {/* One slim toolbar: paragraph nav + progress + mode + speaker */}
          <div className="sw-toolbar">
            <button className="sw-arrow" onClick={() => goParagraph(-1)} disabled={pIndex === 0} aria-label="上一段">‹</button>
            <div className="sw-toolbar-mid">
              <span className="sw-toolbar-pos">
                {lessonTitle && <span className="sw-lesson-name">{lessonTitle} · </span>}
                {paragraphs.length > 1 && `第 ${pIndex + 1}/${paragraphs.length} 段 · `}
                第 {Math.min(activeSentence + 1, sentences.length)}/{sentences.length} 句
              </span>
              {sentences.length > 1 && (
                <span className="sw-dots">
                  {sentences.map((_, i) => (
                    <span key={i} className={`sw-dot${i < activeSentence ? " done" : i === activeSentence ? " now" : ""}`} />
                  ))}
                </span>
              )}
            </div>
            <button className="sw-arrow" onClick={() => goParagraph(1)} disabled={lastPara} aria-label="下一段">›</button>
            <div className="sw-modebar sw-modebar-mini">
              {MODES.map((m) => (
                <button key={m.key} className={`sw-mode-btn${mode === m.key ? " active" : ""}`} onClick={() => pickMode(m.key)}>{m.label}</button>
              ))}
            </div>
            <button className="sw-srow-speak" onClick={() => activeS && speak(activeS.display)} aria-label="听一听" title="听一听">🔊</button>
          </div>

          {paraDone ? (
            <div className="sw-para-done">
              <span className="sw-para-done-msg">这段写完了！🎉</span>
              {lastPara ? (
                <button className="btn-primary" onClick={() => setPhase(PHASE.DONE)}>完成 Finish</button>
              ) : (
                <button className="btn-primary" onClick={() => goParagraph(1)}>下一段 Next paragraph →</button>
              )}
              <button className="btn-secondary" onClick={restartParagraph}>再写一次 Again</button>
            </div>
          ) : activeS ? (
            <div className="sw-stage">
              {!memory && (
                <StrokeDemoLine key={`demo-${pIndex}-${activeSentence}-${attempt}`} tokens={activeS.tokens} size={demoSize} pinyinMap={pinyinMap} />
              )}
              <SentenceWritePad
                key={`pad-${pIndex}-${activeSentence}-${mode}-${attempt}`}
                pinyin={memory ? activeS.tokens.filter((t) => t.t === "c").map((t) => pinyinMap[t.ch] || "").join(" ") : ""}
                charCount={activeS.tokens.length}
                cell={cell}
                onDone={advanceSentence}
              />
            </div>
          ) : null}
        </div>
      ) : phase === PHASE.DONE ? (
        <div className="writing-body writing-centered">
          <div className="writing-done-emoji">🎉</div>
          <h1 className="hero-title">练完了！</h1>
          <p className="writing-done-stats">{lessonTitle} · {paragraphs.length} 段都写完了！</p>
          <button className="btn-primary" onClick={() => startPractice({ title: lessonTitle, words: paragraphs })}>再练一次 Again</button>
          <button className="btn-secondary" onClick={() => setPhase(PHASE.LIBRARY)}>回到练习 My lessons</button>
        </div>
      ) : null}
    </div>
  );
}
