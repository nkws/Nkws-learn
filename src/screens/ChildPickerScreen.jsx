import { useState } from "react";

const AVATARS = ["🦊", "🐼", "🐰", "🦁", "🐸", "🐱", "🐶", "🦄", "🐧", "🐻"];
const FREE_CHILD_LIMIT = 1;

export default function ChildPickerScreen({ children, onSelectChild, onAddChild, onEditChild, onDeleteChild, onSignOut }) {
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [avatarInput, setAvatarInput] = useState("🦊");
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const atLimit = children.length >= FREE_CHILD_LIMIT;

  const handleAdd = () => {
    if (!nameInput.trim()) return;
    onAddChild(nameInput.trim(), avatarInput);
    setNameInput("");
    setAvatarInput("🦊");
    setAdding(false);
  };

  const handleEdit = () => {
    if (!nameInput.trim()) return;
    onEditChild(editing.id, { name: nameInput.trim(), avatar: avatarInput });
    setNameInput("");
    setAvatarInput("🦊");
    setEditing(null);
  };

  const startEdit = (child) => {
    setEditing(child);
    setNameInput(child.name);
    setAvatarInput(child.avatar || "🦊");
    setAdding(false);
  };

  return (
    <div className="screen child-picker-screen">
      <div className="child-picker-header">
        <span className="hero-mascot">🦊</span>
        <h1 className="child-picker-title">Who's learning today?</h1>
      </div>

      <div className="child-list">
        {children.map((child) => (
          <div key={child.id} className="child-card" onClick={() => onSelectChild(child)}>
            <span className="child-avatar">{child.avatar || "🦊"}</span>
            <span className="child-name">{child.name}</span>
            <button
              className="child-edit-btn"
              onClick={(e) => { e.stopPropagation(); startEdit(child); }}
              aria-label="Edit"
            >
              ✏️
            </button>
          </div>
        ))}
      </div>

      {!adding && !editing && (
        <button
          className="btn-primary child-add-btn"
          onClick={() => {
            if (atLimit) { setShowUpgrade(true); }
            else { setAdding(true); setEditing(null); }
          }}
        >
          + Add Child
        </button>
      )}

      {(adding || editing) && (
        <div className="child-form">
          <h3 className="child-form-title">{editing ? "Edit Profile" : "Add a Child"}</h3>
          <div className="avatar-picker">
            {AVATARS.map((a) => (
              <button
                key={a}
                className={`avatar-option ${a === avatarInput ? "avatar-selected" : ""}`}
                onClick={() => setAvatarInput(a)}
              >
                {a}
              </button>
            ))}
          </div>
          <input
            className="child-name-input"
            type="text"
            placeholder="Child's name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (editing ? handleEdit() : handleAdd())}
            autoFocus
          />
          <div className="child-form-actions">
            <button className="btn-primary" onClick={editing ? handleEdit : handleAdd}>
              {editing ? "Save" : "Add"}
            </button>
            <button className="child-cancel-btn" onClick={() => { setAdding(false); setEditing(null); setNameInput(""); }}>
              Cancel
            </button>
            {editing && (
              <button className="child-delete-btn" onClick={() => setConfirmDelete(editing)}>
                Delete
              </button>
            )}
          </div>
        </div>
      )}

      <button className="about-link child-signout" onClick={onSignOut}>
        Sign out
      </button>

      {confirmDelete && (
        <div className="reward-overlay" onClick={() => setConfirmDelete(null)}>
          <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
            <div className="reward-emojis">⚠️</div>
            <h2 className="reward-title">Delete {confirmDelete.name}?</h2>
            <p className="reward-subtitle">
              This will permanently delete all progress and learning history for {confirmDelete.name}. This cannot be undone.
            </p>
            <button
              className="btn-primary reward-dismiss"
              onClick={() => { onDeleteChild(confirmDelete.id); setConfirmDelete(null); setEditing(null); setNameInput(""); }}
            >
              Delete
            </button>
            <button className="confirm-cancel" onClick={() => setConfirmDelete(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {showUpgrade && (
        <div className="reward-overlay" onClick={() => setShowUpgrade(false)}>
          <div className="reward-modal upgrade-modal" onClick={(e) => e.stopPropagation()}>
            <div className="reward-emojis">⭐</div>
            <h2 className="reward-title">Koko Plus</h2>
            <p className="reward-subtitle">
              Free accounts include 1 child profile. Upgrade to Koko Plus to add unlimited profiles and unlock more features.
            </p>
            <ul className="upgrade-features">
              <li>Unlimited child profiles</li>
              <li>Detailed progress reports</li>
              <li>Achievement badges</li>
              <li>Avatar & theme customisation</li>
            </ul>
            <button className="btn-primary reward-dismiss upgrade-btn" disabled>
              Coming Soon
            </button>
            <button className="confirm-cancel" onClick={() => setShowUpgrade(false)}>
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
