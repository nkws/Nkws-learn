import { useState, useMemo, useCallback } from "react";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { useTTS } from "../hooks/useSpeech";
import CameraCaptureModal from "../components/CameraCaptureModal";

export default function SpellingListEditorScreen({ listId, onBack, onStartTest }) {
  const { getList, updateList } = useSpellingLists();
  const list = getList(listId);
  const { speak } = useTTS(list?.lang === "zh" ? "zh" : "en");

  const [titleDraft, setTitleDraft] = useState(list?.title || "");
  const [titleEditing, setTitleEditing] = useState(false);
  const [newWord, setNewWord] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);

  const words = useMemo(() => list?.words || [], [list]);

  const saveTitle = useCallback(() => {
    const t = titleDraft.trim();
    if (t && list && t !== list.title) updateList(list.id, { title: t });
    setTitleEditing(false);
  }, [titleDraft, list, updateList]);

  const addWord = useCallback(
    (word) => {
      const w = (word || "").trim();
      if (!w || !list) return;
      if (list.words.includes(w)) return;
      updateList(list.id, { words: [...list.words, w] });
    },
    [list, updateList]
  );

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
      updateList(list.id, { words: merged });
    },
    [list, updateList]
  );

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
            🔊 Hear it
          </button>
          <div className="spelling-card-nav">
            <button className="btn-secondary" onClick={goPrev}>← Previous</button>
            <button className="btn-secondary" onClick={goNext}>Next →</button>
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
            <span className="spelling-title-edit-hint">✏️ Edit name</span>
          </button>
        )}
        <p className="topic-desc">
          {words.length} word{words.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="spelling-editor-actions">
        <button className="btn-primary" onClick={() => setShowCamera(true)}>
          📷 Scan word list
        </button>
        {words.length > 0 && (
          <>
            <button
              className="btn-secondary"
              onClick={() => { setCardIndex(0); setShowCards(true); }}
            >
              🃏 Practice cards
            </button>
            {onStartTest && (
              <button
                className="btn-secondary"
                onClick={() => onStartTest(list.id)}
              >
                ✍️ Start test
              </button>
            )}
          </>
        )}
      </div>

      <div className="spelling-add-row">
        <input
          type="text"
          className="spelling-text-input"
          placeholder="Type a word and press Enter"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addWord(newWord);
              setNewWord("");
            }
          }}
        />
        <button
          className="btn-primary spelling-add-btn"
          onClick={() => { addWord(newWord); setNewWord(""); }}
        >
          Add
        </button>
      </div>

      {words.length === 0 ? (
        <p className="spelling-empty">
          No words yet. Tap "Scan word list" to capture them with the camera,
          or type each word above.
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

      {showCamera && (
        <CameraCaptureModal
          lang={list.lang === "zh" ? "zh" : "en"}
          onClose={() => setShowCamera(false)}
          onAddWords={addWords}
        />
      )}
    </div>
  );
}
