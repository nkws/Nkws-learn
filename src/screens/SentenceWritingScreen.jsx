import { useState, useEffect, useCallback } from "react";
import HanziWriterLine from "../components/HanziWriterLine";
import { lookupWord } from "../utils/dictionary";
import { gradeAttempt } from "../utils/writingSchedule";
import { useTTS } from "../hooks/useSpeech";

// Prototype: Chinese sentence-writing ladder. A grown-up keys in a model
// sentence or paragraph; the app splits it into lines; the child practises each
// line character-by-character with stroke guidance (reusing HanziWriterQuiz)
// through three modes that fade support: 描红 (trace) -> 照着写 (copy, model
// shown) -> 默写 (from memory, model hidden). No persistence yet.

const PHASE = { INPUT: "input", PRACTICE: "practice", REVEAL: "reveal", DONE: "done" };

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

// Split a paragraph into practice lines on sentence-ending punctuation and
// newlines; keep only lines that contain characters to write.
function splitLines(text) {
  return String(text || "")
    .split(/[。！？!?\n]+/)
    .map((s) => s.trim())
    .filter((s) => [...s].some(isCJK))
    .map((display) => ({ display, chars: [...display].filter(isCJK) }));
}

export default function SentenceWritingScreen({ onBack }) {
  const { speak } = useTTS("zh");
  const [phase, setPhase] = useState(PHASE.INPUT);
  const [draft, setDraft] = useState("");
  const [lines, setLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [modeIndex, setModeIndex] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [lastGrade, setLastGrade] = useState(null);
  const [pinyinMap, setPinyinMap] = useState({});

  const line = lines[lineIndex] || null;
  const mode = MODES[modeIndex];
  const writeWord = line ? line.chars.join("") : "";

  // Pinyin for the characters of the current line (looked up once per line).
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

  const start = () => {
    const ls = splitLines(draft);
    if (ls.length === 0) return;
    setLines(ls);
    setLineIndex(0);
    setModeIndex(0);
    setAttempt((a) => a + 1);
    setLastGrade(null);
    setPhase(PHASE.PRACTICE);
  };

  const handleComplete = useCallback(({ totalMistakes, hintUsed }) => {
    const grade = gradeAttempt({ totalMistakes, charCount: writeWord.length || 1, hintUsed });
    setLastGrade(grade);
    setPhase(PHASE.REVEAL);
    if (line) setTimeout(() => speak(line.display), 200);
  }, [writeWord, line, speak]);

  const goNext = () => {
    setLastGrade(null);
    setAttempt((a) => a + 1);
    if (modeIndex + 1 < MODES.length) {
      setModeIndex(modeIndex + 1);
      setPhase(PHASE.PRACTICE);
    } else if (lineIndex + 1 < lines.length) {
      setLineIndex(lineIndex + 1);
      setModeIndex(0);
      setPhase(PHASE.PRACTICE);
    } else {
      setPhase(PHASE.DONE);
    }
  };

  const onTopBack = () => {
    if (phase === PHASE.INPUT) onBack();
    else if (phase === PHASE.DONE) setPhase(PHASE.INPUT);
    else setPhase(PHASE.INPUT);
  };

  const showModel = mode && mode.key !== "memory";

  return (
    <div className="screen writing-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onTopBack}>←</button>
        <span className="topbar-topic">写句子 Sentence Writing</span>
      </div>

      {phase === PHASE.INPUT ? (
        <div className="writing-body">
          <p className="home-pick-label">输入范文 Type a model sentence or paragraph</p>
          <p className="writing-note-en sw-hint">
            Paste or type Chinese below. It's split into sentences; your child
            practises each one: trace → copy → from memory.
          </p>
          <textarea
            className="sw-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="例如：今天天气很好。我和妈妈去公园。"
            rows={5}
          />
          <div className="sw-input-actions">
            <button className="btn-secondary" onClick={() => setDraft(SAMPLE)}>用例子 Use sample</button>
            <button className="btn-primary" onClick={start} disabled={splitLines(draft).length === 0}>
              开始 Start →
            </button>
          </div>
          {splitLines(draft).length > 0 && (
            <p className="sw-count">{splitLines(draft).length} 句 · {splitLines(draft).reduce((n, l) => n + l.chars.length, 0)} 个字</p>
          )}
        </div>
      ) : phase === PHASE.PRACTICE && line ? (
        <div className="writing-body">
          <div className="writing-prompt">
            <p className="writing-progress-label">
              第 {lineIndex + 1} 句 / 共 {lines.length} · <span className="sw-mode">{mode.label}</span>
            </p>
            {showModel ? (
              <div className="sw-model">
                {line.chars.map((c, i) => (
                  <span key={i} className="sw-model-char">
                    <span className="sw-model-py">{pinyinMap[c] || ""}</span>
                    <span className="sw-model-hz">{c}</span>
                  </span>
                ))}
                <button className="spelling-word-speak" onClick={() => speak(line.display)} aria-label="听一听" title="听一听">🔊</button>
              </div>
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
          <div className="sw-model">
            {line.chars.map((c, i) => (
              <span key={i} className="sw-model-char">
                <span className="sw-model-py">{pinyinMap[c] || ""}</span>
                <span className="sw-model-hz">{c}</span>
              </span>
            ))}
            <button className="spelling-word-speak" onClick={() => speak(line.display)} aria-label="听一听" title="听一听">🔊</button>
          </div>
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
          <button className="btn-primary" onClick={start}>再练一次 Again</button>
          <button className="btn-secondary" onClick={() => setPhase(PHASE.INPUT)}>换一段 New text</button>
        </div>
      ) : null}
    </div>
  );
}
