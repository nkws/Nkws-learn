import { useState, useEffect, useMemo, useCallback } from "react";
import HanziWriterLine from "../components/HanziWriterLine";
import { lookupWord } from "../utils/dictionary";
import { gradeAttempt } from "../utils/writingSchedule";
import { useTTS } from "../hooks/useSpeech";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { listKind, sortListsByOrder } from "../utils/spellingKinds";

// Chinese sentence-writing ladder. Lessons are saved exactly like spelling
// lists — same store, same cloud sync — just with kind "sentence": a title
// plus the model text split into lines (stored as `words`). A grown-up keys in
// a paragraph; the child practises each line character-by-character with stroke
// guidance (HanziWriterLine) through three fading modes:
//   描红 trace -> 照着写 copy (model shown) -> 默写 from memory (model hidden).
const KIND = "sentence";
const PHASE = { LIBRARY: "library", EDIT: "edit", PRACTICE: "practice", REVEAL: "reveal", DONE: "done" };

const MODES = [
  { key: "trace", label: "描红 Trace", en: "Trace over the outline" },
  { key: "copy", label: "照着写 Copy", en: "Copy — the sentence is shown" },
  { key: "memory", label: "默写 From memory", en: "Write it from memory" },
];

const GRADE_STARS = {
  easy: { stars: "⭐⭐⭐", text: "太棒了！一笔都没错！" },
  good: { stars: "⭐⭐", text: "很好！" },
  hard: { stars: "⭐", text: "快记住了，再练一练。" },
  again: { stars: "", text: "没关系，慢慢来。" },
};

const SAMPLE = "今天天气很好。我和妈妈去公园。我们很开心。";

const isCJK = (ch) => /[一-鿿]/.test(ch);

// A paragraph -> practice lines (sentence strings with characters to write).
function linesFromText(text) {
  return String(text || "")
    .split(/[。！？!?\n]+/)
    .map((s) => s.trim())
    .filter((s) => [...s].some(isCJK));
}
const toUnits = (lineStrings) =>
  lineStrings.map((display) => ({ display, chars: [...display].filter(isCJK) }));

// The model line shown above the writing boxes: each character with its pinyin,
// plus a play button.
function ModelRow({ chars, pinyinMap, onSpeak }) {
  return (
    <div className="sw-model">
      {chars.map((c, i) => (
        <span key={i} className="sw-model-char">
          <span className="sw-model-py">{pinyinMap[c] || ""}</span>
          <span className="sw-model-hz">{c}</span>
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
  const [lessonTitle, setLessonTitle] = useState("");

  const [lines, setLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [modeIndex, setModeIndex] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [lastGrade, setLastGrade] = useState(null);
  const [pinyinMap, setPinyinMap] = useState({});

  const lessons = useMemo(
    () => sortListsByOrder(lists.filter((l) => listKind(l) === KIND)),
    [lists]
  );

  const line = lines[lineIndex] || null;
  const mode = MODES[modeIndex];
  const writeWord = line ? line.chars.join("") : "";

  // Pinyin for the characters of the current line.
  useEffect(() => {
    if (!line) return;
    let cancelled = false;
    (async () => {
      const entries = await Promise.all(
        line.chars.map(async (c) => [c, (await lookupWord(c, "zh"))?.pinyin || ""])
      );
      if (!cancelled) setPinyinMap(Object.fromEntries(entries));
    })();
    return () => { cancelled = true; };
  }, [line]);

  // Read the line aloud when a practice round begins.
  useEffect(() => {
    if (phase !== PHASE.PRACTICE || !line) return;
    const t = setTimeout(() => speak(line.display), 350);
    return () => clearTimeout(t);
  }, [phase, line, modeIndex, speak]);

  const openNew = () => { setEditId(null); setTitleDraft(""); setDraft(""); setPhase(PHASE.EDIT); };
  const openEdit = (lesson) => {
    setEditId(lesson.id);
    setTitleDraft(lesson.title || "");
    setDraft((lesson.words || []).join("\n"));
    setPhase(PHASE.EDIT);
  };

  // Persist the lesson (same store as spelling lists; kind "sentence").
  const saveLesson = (thenPractise) => {
    const lineStrings = linesFromText(draft);
    if (lineStrings.length === 0) return;
    const title = titleDraft.trim() || "未命名练习";
    let id = editId;
    if (id) {
      updateList(id, { title, words: lineStrings });
    } else {
      id = createList(title, "zh", KIND);
      updateList(id, { words: lineStrings });
      setEditId(id);
    }
    if (thenPractise) startPractice({ title, words: lineStrings });
    else setPhase(PHASE.LIBRARY);
  };

  const startPractice = useCallback((lesson) => {
    setLessonTitle(lesson.title || "");
    setLines(toUnits(lesson.words || []));
    setLineIndex(0);
    setModeIndex(0);
    setAttempt((a) => a + 1);
    setLastGrade(null);
    setPhase(PHASE.PRACTICE);
  }, []);

  const handleComplete = useCallback(({ totalMistakes, hintUsed }) => {
    const grade = gradeAttempt({ totalMistakes, charCount: writeWord.length || 1, hintUsed });
    setLastGrade(grade);
    setPhase(PHASE.REVEAL);
    if (line) setTimeout(() => speak(line.display), 200);
  }, [writeWord, line, speak]);

  const goNext = () => {
    setLastGrade(null);
    setAttempt((a) => a + 1);
    if (modeIndex + 1 < MODES.length) { setModeIndex(modeIndex + 1); setPhase(PHASE.PRACTICE); }
    else if (lineIndex + 1 < lines.length) { setLineIndex(lineIndex + 1); setModeIndex(0); setPhase(PHASE.PRACTICE); }
    else setPhase(PHASE.DONE);
  };

  const onTopBack = () => {
    if (phase === PHASE.LIBRARY) onBack();
    else if (phase === PHASE.EDIT) setPhase(PHASE.LIBRARY);
    else if (phase === PHASE.DONE || phase === PHASE.PRACTICE || phase === PHASE.REVEAL) setPhase(PHASE.LIBRARY);
    else setPhase(PHASE.LIBRARY);
  };

  const showModel = mode && mode.key !== "memory";
  const speakLine = () => { if (line) speak(line.display); };

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
                        {(l.words || []).length} 句 · {(l.words || []).reduce((n, w) => n + [...w].filter(isCJK).length, 0)} 字
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
          <input
            className="sw-title-input"
            value={titleDraft}
            onChange={(e) => setTitleDraft(e.target.value)}
            placeholder="例如：第一课 造句"
          />
          <p className="home-pick-label">范文 Model sentence or paragraph</p>
          <textarea
            className="sw-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="例如：今天天气很好。我和妈妈去公园。"
            rows={5}
          />
          <div className="sw-input-actions">
            <button className="btn-secondary" onClick={() => setDraft(SAMPLE)}>用例子 Use sample</button>
            <button className="btn-secondary" onClick={() => saveLesson(false)} disabled={linesFromText(draft).length === 0}>保存 Save</button>
            <button className="btn-primary" onClick={() => saveLesson(true)} disabled={linesFromText(draft).length === 0}>保存并练习 →</button>
          </div>
          {linesFromText(draft).length > 0 && (
            <p className="sw-count">{linesFromText(draft).length} 句 · {linesFromText(draft).reduce((n, l) => n + [...l].filter(isCJK).length, 0)} 个字</p>
          )}
        </div>
      ) : phase === PHASE.PRACTICE && line ? (
        <div className="writing-body">
          <div className="writing-prompt">
            <p className="writing-progress-label">
              {lessonTitle && <span className="sw-lesson-name">{lessonTitle} · </span>}
              第 {lineIndex + 1} 句 / 共 {lines.length} · <span className="sw-mode">{mode.label}</span>
            </p>
            {showModel ? (
              <ModelRow chars={line.chars} pinyinMap={pinyinMap} onSpeak={speakLine} />
            ) : (
              <div className="sw-model sw-model-memory">
                <span className="sw-model-py-line">{line.chars.map((c) => pinyinMap[c] || "·").join(" ")}</span>
                <button className="spelling-word-speak" onClick={() => speak(line.display)} aria-label="听一听" title="听一听">🔊</button>
              </div>
            )}
            <p className="writing-progress-label sw-mode-en">{mode.en}</p>
          </div>
          <HanziWriterLine
            key={`${lineIndex}-${modeIndex}-${attempt}`}
            word={writeWord}
            trace={mode.key === "trace"}
            teachFirst={mode.key === "copy"}
            onComplete={handleComplete}
          />
        </div>
      ) : phase === PHASE.REVEAL && line ? (
        <div className="writing-body writing-centered">
          <div className="writing-reveal-grade">{GRADE_STARS[lastGrade]?.stars}</div>
          <ModelRow chars={line.chars} pinyinMap={pinyinMap} onSpeak={speakLine} />
          <p className="writing-grade-text">{GRADE_STARS[lastGrade]?.text}</p>
          <button className="btn-primary" onClick={goNext}>
            {modeIndex + 1 < MODES.length
              ? `下一步：${MODES[modeIndex + 1].label} →`
              : lineIndex + 1 < lines.length
                ? "下一句 Next sentence →"
                : "完成 Finish"}
          </button>
        </div>
      ) : phase === PHASE.DONE ? (
        <div className="writing-body writing-centered">
          <div className="writing-done-emoji">🎉</div>
          <h1 className="hero-title">练完了！</h1>
          <p className="writing-done-stats">写了 {lines.length} 句，一步一步都做到了！</p>
          <button className="btn-primary" onClick={() => startPractice({ title: lessonTitle, words: lines.map((l) => l.display) })}>再练一次 Again</button>
          <button className="btn-secondary" onClick={() => setPhase(PHASE.LIBRARY)}>回到练习 My lessons</button>
        </div>
      ) : null}
    </div>
  );
}
