import { useState } from "react";
import { useSpellingLists } from "../hooks/useSpellingLists";

export default function SpellingListsScreen({ onBack, onOpenList }) {
  const { lists, createList, deleteList } = useSpellingLists();
  const [creating, setCreating] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleCreate = () => {
    const title = titleInput.trim();
    if (!title) return;
    const id = createList(title, "en");
    setCreating(false);
    setTitleInput("");
    onOpenList(id);
  };

  return (
    <div className="screen spelling-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-topic">Spelling Practice</span>
      </div>

      <div className="hero-section">
        <span className="hero-mascot">📝</span>
        <h1 className="hero-title">Spelling Lists</h1>
        <p className="hero-tagline">
          Snap a photo of this week's words or type them in — then Koko helps your child practise.
        </p>
      </div>

      {!creating && (
        <button
          className="btn-primary spelling-new-btn"
          onClick={() => setCreating(true)}
        >
          + New List
        </button>
      )}

      {creating && (
        <div className="spelling-new-form">
          <input
            type="text"
            className="spelling-text-input"
            placeholder="List name (e.g. Week 5)"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleCreate(); }}
            autoFocus
          />
          <div className="spelling-form-actions">
            <button className="btn-primary" onClick={handleCreate}>Create</button>
            <button
              className="btn-secondary"
              onClick={() => { setCreating(false); setTitleInput(""); }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {lists.length === 0 && !creating && (
        <p className="spelling-empty">No lists yet. Tap "+ New List" to start.</p>
      )}

      <div className="topic-list">
        {lists.map((list) => (
          <div key={list.id} className="topic-card spelling-list-card">
            <button
              className="spelling-list-main"
              onClick={() => onOpenList(list.id)}
            >
              <span className="topic-icon">📚</span>
              <div className="topic-info">
                <h2 className="topic-title">{list.title}</h2>
                <p className="topic-desc">
                  {list.words.length} word{list.words.length === 1 ? "" : "s"}
                </p>
              </div>
              <span className="topic-arrow">›</span>
            </button>
            <button
              className="spelling-list-delete"
              onClick={() => setConfirmDelete(list.id)}
              aria-label="Delete list"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      {confirmDelete && (
        <div className="reward-overlay" onClick={() => setConfirmDelete(null)}>
          <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="reward-title">Delete list?</h2>
            <p className="reward-subtitle">
              This will remove the list and all its words. This can't be undone.
            </p>
            <button
              className="btn-primary reward-dismiss"
              onClick={() => { deleteList(confirmDelete); setConfirmDelete(null); }}
            >
              Delete
            </button>
            <button className="confirm-cancel" onClick={() => setConfirmDelete(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
