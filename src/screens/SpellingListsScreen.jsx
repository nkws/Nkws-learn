import { useState } from "react";
import { useSpellingLists } from "../hooks/useSpellingLists";

export default function SpellingListsScreen({ lang = "en", onBack, onOpenList }) {
  const { lists, createList, deleteList } = useSpellingLists();
  const [creating, setCreating] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  const isZh = lang === "zh";
  const visibleLists = lists.filter((l) => (l.lang === "zh") === isZh);

  const handleCreate = () => {
    const title = titleInput.trim();
    if (!title) return;
    const id = createList(title, lang);
    setCreating(false);
    setTitleInput("");
    onOpenList(id);
  };

  return (
    <div className="screen spelling-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-topic">{isZh ? "中文听写" : "English Spelling"}</span>
      </div>

      <div className="hero-section">
        <span className="hero-mascot">{isZh ? "字" : "✏️"}</span>
        <h1 className="hero-title">
          {isZh ? "听写词语表" : "Spelling Lists"}
        </h1>
        <p className="hero-tagline">
          {isZh
            ? "把这周要听写的词加进来——Koko 会带孩子练习。"
            : "Add this week's spelling words — Koko will help your child practise."}
        </p>
      </div>

      {!creating && (
        <button
          className="btn-primary spelling-new-btn"
          onClick={() => setCreating(true)}
        >
          {isZh ? "+ 新词语表" : "+ New List"}
        </button>
      )}

      {creating && (
        <div className="spelling-new-form">
          <input
            type="text"
            className="spelling-text-input"
            placeholder={isZh ? "词语表名字（例如：第五周）" : "List name (e.g. Week 5)"}
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleCreate(); }}
            autoFocus
          />
          <div className="spelling-form-actions">
            <button className="btn-primary" onClick={handleCreate}>
              {isZh ? "新建" : "Create"}
            </button>
            <button
              className="btn-secondary"
              onClick={() => { setCreating(false); setTitleInput(""); }}
            >
              {isZh ? "取消" : "Cancel"}
            </button>
          </div>
        </div>
      )}

      {visibleLists.length === 0 && !creating && (
        <p className="spelling-empty">
          {isZh
            ? "还没有词语表。点击「+ 新词语表」开始。"
            : "No lists yet. Tap \"+ New List\" to start."}
        </p>
      )}

      <div className="topic-list">
        {visibleLists.map((list) => (
          <div key={list.id} className="topic-card spelling-list-card">
            <button
              className="spelling-list-main"
              onClick={() => onOpenList(list.id)}
            >
              <span className="topic-icon">{isZh ? "字" : "📚"}</span>
              <div className="topic-info">
                <h2 className="topic-title">{list.title}</h2>
                <p className="topic-desc">
                  {list.words.length}{isZh
                    ? ` 个词语`
                    : ` word${list.words.length === 1 ? "" : "s"}`}
                </p>
              </div>
              <span className="topic-arrow">›</span>
            </button>
            <button
              className="spelling-list-delete"
              onClick={() => setConfirmDelete(list.id)}
              aria-label={isZh ? "删除词语表" : "Delete list"}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      {confirmDelete && (
        <div className="reward-overlay" onClick={() => setConfirmDelete(null)}>
          <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="reward-title">
              {isZh ? "删除这个词语表？" : "Delete list?"}
            </h2>
            <p className="reward-subtitle">
              {isZh
                ? "整个词语表和里面的词都会被删掉，不能恢复。"
                : "This will remove the list and all its words. This can't be undone."}
            </p>
            <button
              className="btn-primary reward-dismiss"
              onClick={() => { deleteList(confirmDelete); setConfirmDelete(null); }}
            >
              {isZh ? "删除" : "Delete"}
            </button>
            <button className="confirm-cancel" onClick={() => setConfirmDelete(null)}>
              {isZh ? "取消" : "Cancel"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
