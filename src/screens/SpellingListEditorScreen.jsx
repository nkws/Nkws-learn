import { useState, useMemo, useCallback } from "react";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { useTTS } from "../hooks/useSpeech";
import { splitWordInput, getSpellingHistory } from "../utils/spellingStorage";
import { listKind, KIND_MODE } from "../utils/spellingKinds";
import WordDetail from "../components/WordDetail";
import PracticeCanvas from "../components/PracticeCanvas";

const MODE_LABELS = {
  write: { en: "Write", zh: "写" },
  character: { en: "Character", zh: "写汉字" },
  pinyin: { en: "Pinyin", zh: "写拼音" },
};

function relativeAttemptDate(ts, isZh) {
  if (!ts) return "";
  const diff = Date.now() - ts;
  const day = 24 * 60 * 60 * 1000;
  if (diff < 60_000) return isZh ? "刚刚" : "just now";
  if (diff < 60 * 60_000) return isZh ? `${Math.floor(diff / 60_000)} 分钟前` : `${Math.floor(diff / 60_000)} min ago`;
  if (diff < day) return isZh ? `${Math.floor(diff / (60 * 60_000))} 小时前` : `${Math.floor(diff / (60 * 60_000))} hr ago`;
  if (diff < 2 * day) return isZh ? "昨天" : "yesterday";
  if (diff < 7 * day) return isZh ? `${Math.floor(diff / day)} 天前` : `${Math.floor(diff / day)} days ago`;
  const d = new Date(ts);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

export default function SpellingListEditorScreen({ listId, activeChild, user, onBack, onStartTest }) {
  const { getList, updateList, syncStatus } = useSpellingLists(activeChild, user?.id);
  const list = getList(listId);
  const { speak } = useTTS(list?.lang === "zh" ? "zh" : "en");

  const [titleDraft, setTitleDraft] = useState(list?.title || "");
  const [titleEditing, setTitleEditing] = useState(false);
  const [bulkInput, setBulkInput] = useState("");
  const [cardIndex, setCardIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [lookupWord, setLookupWord] = useState(null);

  const isZh = list?.lang === "zh";

  // The list's category fixes its test mode: spelling→write, 听写→character,
  // pinyin→pinyin. No per-test chooser — pinyin lists are their own category.
  const handleStartTestClick = useCallback(() => {
    if (!list || !onStartTest) return;
    onStartTest(list.id, KIND_MODE[listKind(list)] || "write");
  }, [list, onStartTest]);

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

  // Learn view: one word per screen with meaning, pinyin (for zh) and TTS.
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
        <div className="spelling-card spelling-learn-card">
          <p className="spelling-card-position">
            {cardIndex + 1} / {words.length}
          </p>
          <WordDetail
            word={word}
            lang={isZh ? "zh" : "en"}
          />
          <div className="practice-canvas-section">
            <p className="practice-canvas-hint">
              {isZh ? "试一试，自己写写看 ✍️" : "Try writing it yourself ✍️"}
            </p>
            <PracticeCanvas
              key={`learn-${cardIndex}`}
              clearLabel={isZh ? "擦掉" : "Clear"}
            />
          </div>
          <div className="spelling-card-nav">
            <button className="btn-secondary" onClick={goPrev}>
              {isZh ? "← 上一个" : "← Previous"}
            </button>
            <button className="btn-secondary" onClick={goNext}>
              {isZh ? "下一个 →" : "Next →"}
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

      {user && syncStatus === "error" && (
        <p className="spelling-device-note spelling-device-note-error">
          {isZh
            ? "⚠️ 无法同步到云端。改动已存在这台设备上，但暂时没有同步。请检查网络后重试。"
            : "⚠️ Can't sync to the cloud right now. Your changes are saved on this device but aren't syncing. Check your connection and try again."}
        </p>
      )}

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
            📖 {isZh ? "学习" : "Learn"}
          </button>
          {onStartTest && (
            <button
              className="btn-secondary"
              onClick={handleStartTestClick}
            >
              ✍️ {isZh ? "开始听写" : "Test"}
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
                aria-label={isZh ? `听 ${word}` : `Hear ${word}`}
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
                className="spelling-word-lookup"
                onClick={() => setLookupWord(word)}
                aria-label={isZh ? `查 ${word}` : `Look up ${word}`}
                title={isZh ? "查释义" : "Look up meaning"}
              >
                📖
              </button>
              <button
                className="spelling-word-remove"
                onClick={() => removeWord(i)}
                aria-label={isZh ? `删除 ${word}` : `Remove ${word}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <RecentTestsPanel listId={list.id} isZh={isZh} />

      {lookupWord && (
        <div className="reward-overlay" onClick={() => setLookupWord(null)}>
          <div className="reward-modal word-detail-modal" onClick={(e) => e.stopPropagation()}>
            <WordDetail
              word={lookupWord}
              lang={isZh ? "zh" : "en"}
              />
            <button className="confirm-cancel" onClick={() => setLookupWord(null)}>
              {isZh ? "关闭" : "Close"}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

function RecentTestsPanel({ listId, isZh }) {
  const history = getSpellingHistory(listId);
  if (!history || history.length === 0) return null;
  const recent = history.slice(0, 5);
  return (
    <div className="spelling-history">
      <p className="spelling-history-title">
        {isZh ? "最近的听写记录" : "Recent tests"}
      </p>
      <ul className="spelling-history-list">
        {recent.map((a, i) => {
          const modeLabel = MODE_LABELS[a.mode]?.[isZh ? "zh" : "en"] || "";
          return (
            <li key={i} className="spelling-history-row">
              <span className="spelling-history-score">
                ⭐ {a.score}/{a.total}
              </span>
              {modeLabel && (
                <span className="spelling-history-mode">{modeLabel}</span>
              )}
              <span className="spelling-history-date">
                {relativeAttemptDate(a.completedAt, isZh)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
