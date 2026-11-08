import { useState, useEffect, useMemo, useCallback } from "react";
import HanziWriterLine from "../components/HanziWriterLine";
import { boxSizeFor } from "../utils/writingBox";
import { lookupWord } from "../utils/dictionary";
import { gradeAttempt } from "../utils/writingSchedule";
import { useTTS } from "../hooks/useSpeech";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { listKind, sortListsByOrder } from "../utils/spellingKinds";

// Chinese sentence/paragraph-writing ladder. Lessons are saved exactly like
// spelling lists — same store, same cloud sync, per-child — with kind
// "sentence": a title plus the model text split into PARAGRAPHS (stored as
// `words`, one paragraph per entry). In practice, one paragraph shows per page
// (whole paragraph visible, split into sentences); the child writes it sentence
// by sentence, characters stroke-graded and punctuation traced-and-confirmed.
// ← → arrows move between paragraphs; a mode toggle sets how each sentence is
// practised: 描红 trace · 照着写 copy (model shown) · 默写 from memory.
const KIND = "sentence";
const PHASE = { LIBRARY: "library", EDIT: "edit", PRACTICE: "practice", DONE: "done" };

const MODES = [
  { key: "trace", label: "描红", en: "Trace" },
  { key: "copy", label: "照着写", en: "Copy" },
  { key: "memory", label: "默写", en: "Memory" },
];
const GRADE_STARS = { easy: "⭐⭐⭐", good: "⭐⭐", hard: "⭐", again: "·" };
const SAMPLE = "今天天气很好。我和妈妈去公园。\n我们玩得很开心，妈妈买了雪糕。";

const isCJK = (ch) => /[一-鿿]/.test(ch);
const PUNCT = /[。，、；：！？·…—“”‘’""''（）()《》〈〉【】]/;
const cjkCount = (s) => [...String(s)].filter(isCJK).length;
const tokensOf = (display) =>
  [...String(display)]
    .map((ch) => (isCJK(ch) ? { t: "c", ch } : PUNCT.test(ch) ? { t: "p", ch } : null))
    .filter(Boolean);
const charCountOf = (tokens) => tokens.filter((t) => t.t === "c").length;

// Text -> paragraphs (separated by line breaks). Each stored as one entry.
const paragraphsFromText = (text) =>
  String(text || "").split(/\n+/).map((s) => s.trim()).filter((s) => cjkCount(s) > 0);
// A paragraph -> its sentences (kept with their ending punctuation), each
// tokenised into characters + punctuation marks.
const sentencesOf = (para) =>
  String(para || "")
    .split(/(?<=[。！？!?])/)
    .map((s) => s.trim())
    .filter((s) => cjkCount(s) > 0)
    .map((display) => ({ display, tokens: tokensOf(display) }));

function StaticLine({ tokens, size, reveal }) {
  return (
    <div className="hw-line">
      {tokens.map((tok, i) => (
        <div key={i} className={`hw-box ${reveal ? "done" : "upcoming"}${tok.t === "p" ? " hw-punct" : ""}`} style={{ width: size, height: size }}>
          {reveal && <span className="sw-static-hz" style={{ fontSize: Math.round(size * (tok.t === "p" ? 0.72 : 0.66)) }}>{tok.ch}</span>}
        </div>
      ))}
    </div>
  );
}

function ModelRow({ tokens, pinyinMap, memory, onSpeak }) {
  if (memory) {
    const py = tokens.filter((t) => t.t === "c").map((t) => pinyinMap[t.ch] || "·").join(" ");
    return (
      <div className="sw-model sw-model-memory">
        <span className="sw-model-py-line">{py}</span>
        <button className="spelling-word-speak" onClick={onSpeak} aria-label="听一听" title="听一听">🔊</button>
      </div>
    );
  }
  return (
    <div className="sw-model">
      {tokens.map((tok, i) => (
        <span key={i} className={`sw-model-char${tok.t === "p" ? " sw-model-punct" : ""}`}>
          <span className="sw-model-py">{tok.t === "c" ? (pinyinMap[tok.ch] || "") : ""}</span>
          <span className="sw-model-hz">{tok.ch}</span>
        </span>
      ))}
      <button className="spelling-word-speak" onClick={onSpeak} aria-label="听一听" title="听一听">🔊</button>
    </div>
  );
}

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
  const [results, setResults] = useState({});
  const [attempt, setAttempt] = useState(0);
  const [pinyinMap, setPinyinMap] = useState({});

  const lessons = useMemo(() => sortListsByOrder(lists.filter((l) => listKind(l) === KIND)), [lists]);

  const sentences = useMemo(() => sentencesOf(paragraphs[pIndex] || ""), [paragraphs, pIndex]);
  const paraCells = useMemo(() => sentences.reduce((n, s) => n + s.tokens.length, 0), [sentences]);
  const boxSize = useMemo(() => boxSizeFor(paraCells || 1), [paraCells]);
  const memory = mode === "memory";

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

  // Speak the active sentence when it becomes active.
  useEffect(() => {
    if (phase !== PHASE.PRACTICE) return;
    const s = sentences[activeSentence];
    if (!s) return;
    const t = setTimeout(() => speak(s.display), 350);
    return () => clearTimeout(t);
  }, [phase, sentences, activeSentence, mode, speak]);

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
    setResults({});
    setAttempt((a) => a + 1);
    setPhase(PHASE.PRACTICE);
  }, []);

  // ── Practice controls ───────────────────────────────────────────────────
  const restartParagraph = () => { setActiveSentence(0); setResults({}); setAttempt((a) => a + 1); };
  const pickMode = (m) => { setMode(m); restartParagraph(); };
  const goParagraph = (delta) => {
    const next = pIndex + delta;
    if (next < 0 || next >= paragraphs.length) return;
    setPIndex(next); setActiveSentence(0); setResults({}); setAttempt((a) => a + 1);
  };

  const onSentenceComplete = useCallback(({ totalMistakes, hintUsed }) => {
    const si = activeSentence;
    const s = sentences[si];
    const grade = gradeAttempt({ totalMistakes, charCount: s ? charCountOf(s.tokens) || 1 : 1, hintUsed });
    setResults((r) => ({ ...r, [si]: grade }));
    if (s) setTimeout(() => speak(s.display), 150);
    setActiveSentence(si + 1);
    setAttempt((a) => a + 1);
  }, [activeSentence, sentences, speak]);

  const paraDone = activeSentence >= sentences.length && sentences.length > 0;
  const lastPara = pIndex >= paragraphs.length - 1;

  const onTopBack = () => { if (phase === PHASE.LIBRARY) onBack(); else setPhase(phase === PHASE.EDIT ? PHASE.LIBRARY : PHASE.LIBRARY); };

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
        <div className="writing-body">
          <div className="sw-paranav">
            <button className="sw-arrow" onClick={() => goParagraph(-1)} disabled={pIndex === 0} aria-label="上一段">‹</button>
            <span className="sw-paralabel">
              {lessonTitle && <span className="sw-lesson-name">{lessonTitle} · </span>}第 {pIndex + 1} / {paragraphs.length} 段
            </span>
            <button className="sw-arrow" onClick={() => goParagraph(1)} disabled={lastPara} aria-label="下一段">›</button>
          </div>
          <div className="sw-modebar">
            {MODES.map((m) => (
              <button key={m.key} className={`sw-mode-btn${mode === m.key ? " active" : ""}`} onClick={() => pickMode(m.key)}>{m.label}</button>
            ))}
          </div>

          {sentences.map((s, si) => (
            <div key={si} className={`sw-srow${si === activeSentence ? " active" : si > activeSentence ? " ahead" : ""}`}>
              {si >= activeSentence && (
                <ModelRow tokens={s.tokens} pinyinMap={pinyinMap} memory={memory} onSpeak={() => speak(s.display)} />
              )}
              {si === activeSentence ? (
                <HanziWriterLine
                  key={`${pIndex}-${si}-${mode}-${attempt}`}
                  tokens={s.tokens}
                  size={boxSize}
                  trace={mode === "trace"}
                  teachFirst={mode === "copy"}
                  onComplete={onSentenceComplete}
                />
              ) : si < activeSentence ? (
                <div className="sw-done-row">
                  <StaticLine tokens={s.tokens} size={boxSize} reveal />
                  <span className="sw-row-stars">{GRADE_STARS[results[si]] || ""}</span>
                </div>
              ) : (
                <StaticLine tokens={s.tokens} size={boxSize} reveal={false} />
              )}
            </div>
          ))}

          {paraDone && (
            <div className="sw-para-done">
              <span className="sw-para-done-msg">这段写完了！🎉</span>
              {lastPara ? (
                <button className="btn-primary" onClick={() => setPhase(PHASE.DONE)}>完成 Finish</button>
              ) : (
                <button className="btn-primary" onClick={() => goParagraph(1)}>下一段 Next paragraph →</button>
              )}
              <button className="btn-secondary" onClick={restartParagraph}>再写一次 Again</button>
            </div>
          )}
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
