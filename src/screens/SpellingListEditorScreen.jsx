import { useState, useMemo, useCallback } from "react";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { useTTS } from "../hooks/useSpeech";
import { splitWordInput } from "../utils/spellingStorage";

export default function SpellingListEditorScreen({ listId, onBack, onStartTest }) {
  const { getList, updateList } = useSpellingLists();
  const list = getList(listId);
  const { speak } = useTTS(list?.lang === "zh" ? "zh" : "en");

  const [titleDraft, setTitleDraft] = useState(list?.title || "");
  const [titleEditing, setTitleEditing] = useState(false);
  const [bulkInput, setBulkInput] = useState("");
  const [cardIndex, setCardIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [showModeChooser, setShowModeChooser] = useState(false);

  const isZh = list?.lang === "zh";

  const startTest = useCallback((mode) => {
    if (!list || !onStartTest) return;
    setShowModeChooser(false);
    onStartTest(list.id, mode);
  }, [list, onStartTest]);

  const handleStartTestClick = useCallback(() => {
    if (!list || !onStartTest) return;
    if (isZh) {
      setShowModeChooser(true);
    } else {
      onStartTest(list.id, "write");
    }
  }, [list, onStartTest, isZh]);

  const words = useMemo(() => list?.words || [], [list]);

  const saveTitle = useCallback(() => {
    const t = titleDraft.trim();
    if (t && list && t !== list.title) updateList(list.id, { title: t });
    setTitleEditing(false);
  }, [titleDraft, list, updateList]);

  const addWords = useCallback(
    (incoming) => {
      if (!list) return;
      const seen = new Set(list.words);
      const merged = [...list.words];
      for (const w of incoming) {
        const trimmed = (w || "").trim();
        if (!trimmed || seen.has(trimmed)) continue;
        merged.push(trimmed);
        seen.add(trimmed);
      }
      if (merged.length !== list.words.length) {
        updateList(list.id, { words: merged });
      }
    },
    [list, updateList]
  );

  const handleAddFromInput = useCallback(() => {
    if (!list) return;
    const parsed = splitWordInput(bulkInput, list.lang === "zh" ? "zh" : "en");
    if (parsed.length === 0) return;
    addWords(parsed);
    setBulkInput("");
  }, [bulkInput, list, addWords]);

  const editWord = useCallback(
    (index, value) => {
      if (!list) return;
      const next = [...list.words];
      next[index] = value;
      updateList(list.id, { words: next });
    },
    [list, updateList]
  );

  const removeWord = useCallback(
    (index) => {
      if (!list) return;
      const next = list.words.filter((_, i) => i !== index);
      updateList(list.id, { words: next });
    },
    [list, updateList]
  );

  if (!list) {
    return (
      <div className="screen spelling-screen">
        <div className="chat-topbar">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="topbar-topic">Spelling List</span>
        </div>
        <p className="spelling-empty">List not found.</p>
      </div>
    );
  }

  // Practice cards view: one word per screen, big, with a Hear-it button.
  if (showCards && words.length > 0) {
    const word = words[cardIndex];
    const goPrev = () => setCardIndex((i) => (i - 1 + words.length) % words.length);
    const goNext = () => setCardIndex((i) => (i + 1) % words.length);
    return (
      <div className="screen spelling-screen">
        <div className="chat-topbar">
          <button className="back-btn" onClick={() => setShowCards(false)}>←</button>
          <span className="topbar-topic">{list.title}</span>
        </div>
        <div className="spelling-card">
          <p className="spelling-card-position">
            {cardIndex + 1} / {words.length}
          </p>
          <div className="spelling-card-word">{word}</div>
          <button
            className="btn-primary spelling-card-speak"
            onClick={() => speak(word)}
          >
            🔊 {list.lang === "zh" ? "听一听" : "Hear it"}
          </button>
          <div className="spelling-card-nav">
            <button className="btn-secondary" onClick={goPrev}>
              {list.lang === "zh" ? "← 上一个" : "← Previous"}
            </button>
            <button className="btn-secondary" onClick={goNext}>
              {list.lang === "zh" ? "下一个 →" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen spelling-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-topic">Spelling List</span>
      </div>

      <div className="spelling-editor-header">
        {titleEditing ? (
          <input
            type="text"
            className="spelling-text-input spelling-title-input"
            value={titleDraft}
            onChange={(e) => setTitleDraft(e.target.value)}
            onBlur={saveTitle}
            onKeyDown={(e) => { if (e.key === "Enter") saveTitle(); }}
            autoFocus
          />
        ) : (
          <button
            className="spelling-title-button"
            onClick={() => { setTitleDraft(list.title); setTitleEditing(true); }}
          >
            <h1 className="hero-title">{list.title}</h1>
            <span className="spelling-title-edit-hint">
              ✏️ {isZh ? "改名" : "Edit name"}
            </span>
          </button>
        )}
        <p className="topic-desc">
          {words.length}{isZh
            ? ` 个词语`
            : ` word${words.length === 1 ? "" : "s"}`}
        </p>
      </div>

      {words.length > 0 && (
        <div className="spelling-editor-actions">
          <button
            className="btn-primary"
            onClick={() => { setCardIndex(0); setShowCards(true); }}
          >
            🃏 {isZh ? "练习卡片" : "Practice cards"}
          </button>
          {onStartTest && (
            <button
              className="btn-secondary"
              onClick={handleStartTestClick}
            >
              ✍️ {isZh ? "开始听写" : "Start test"}
            </button>
          )}
        </div>
      )}

      <div className="spelling-add-block">
        <p className="spelling-add-hint">
          {list.lang === "zh"
            ? "一行一个词，或用逗号 / 空格分开。可以一次性粘贴整张词语表。"
            : "One word per line, or separate with commas or spaces. Paste a whole list at once if you like."}
        </p>
        <textarea
          className="spelling-text-input spelling-bulk-input"
          placeholder={list.lang === "zh"
            ? "例如：\n学校\n老师\n同学"
            : "e.g.\ncat\nhouse\nschool"}
          value={bulkInput}
          onChange={(e) => setBulkInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              handleAddFromInput();
            }
          }}
          rows={4}
        />
        <button
          className="btn-primary spelling-add-btn"
          onClick={handleAddFromInput}
          disabled={!bulkInput.trim()}
        >
          {isZh ? "加入词语表" : "Add to list"}
        </button>
      </div>

      {words.length === 0 ? (
        <p className="spelling-empty">
          {list.lang === "zh"
            ? "还没有词语。先在上方加入这周要学的词。"
            : "No words yet. Add this week's words above."}
        </p>
      ) : (
        <ul className="spelling-word-list">
          {words.map((word, i) => (
            <li key={i} className="spelling-word-row">
              <button
                className="spelling-word-speak"
                onClick={() => speak(word)}
                aria-label={`Hear ${word}`}
              >
                🔊
              </button>
              <input
                type="text"
                className="spelling-text-input spelling-word-input"
                value={word}
                onChange={(e) => editWord(i, e.target.value)}
              />
              <button
                className="spelling-word-remove"
                onClick={() => removeWord(i)}
                aria-label={`Remove ${word}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {showModeChooser && (
        <div className="reward-overlay" onClick={() => setShowModeChooser(false)}>
          <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="reward-title">选哪种听写？</h2>
            <p className="reward-subtitle">
              老师听一听词，你可以写汉字，或者写拼音。
            </p>
            <div className="spelling-mode-choice">
              <button
                className="btn-primary spelling-mode-btn"
                onClick={() => startTest("character")}
              >
                <span className="spelling-mode-icon">字</span>
                <span>写汉字</span>
              </button>
              <button
                className="btn-primary spelling-mode-btn"
                onClick={() => startTest("pinyin")}
              >
                <span className="spelling-mode-icon">ā</span>
                <span>写拼音</span>
              </button>
            </div>
            <button
              className="confirm-cancel"
              onClick={() => setShowModeChooser(false)}
            >
              取消
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
