import { useMemo, useState } from "react";
import { useSpellingLists } from "../hooks/useSpellingLists";
import { getLastSpellingAttempt } from "../utils/spellingStorage";
import { listKind } from "../utils/spellingKinds";

const SCOPE_DECIDED_KEY = "koko-spelling-childscope-decided";

// Short relative-time label for the "Last test" badge. Keeps the prose tight
// so it fits on one line on a phone card.
function relativeTime(ts, isZh) {
  if (!ts) return "";
  const diff = Date.now() - ts;
  if (diff < 60_000) return isZh ? "刚刚" : "just now";
  const mins = Math.floor(diff / 60_000);
  if (mins < 60) return isZh ? `${mins} 分钟前` : `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return isZh ? `${hours} 小时前` : `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return isZh ? "昨天" : "yesterday";
  if (days < 7) return isZh ? `${days} 天前` : `${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return isZh ? `${weeks} 周前` : `${weeks} wk ago`;
  return isZh ? `${Math.floor(days / 30)} 月前` : `${Math.floor(days / 30)} mo ago`;
}

export default function SpellingListsScreen({ lang = "en", kind = "spelling", activeChild, user, onBack, onOpenList }) {
  const { lists, allLists, syncStatus, createList, deleteList, claimSharedLists } = useSpellingLists(activeChild, user?.id);
  const [creating, setCreating] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [promptDismissed, setPromptDismissed] = useState(false);

  const isZh = lang === "zh";
  const isPinyin = kind === "pinyin";
  // Only show lists of this practice category, so pinyin lists stay independent
  // from 听写 lists even though both hold Chinese words.
  const visibleLists = lists.filter((l) => listKind(l) === kind);

  // Migration prompt shows once per device, when an active child opens the
  // spelling tool and lists from before per-child mode still exist. Derived
  // rather than set-via-effect so the lint rule about cascading state stays
  // happy.
  const shouldShowMigrationPrompt = useMemo(() => {
    if (!activeChild) return false;
    let decided = false;
    try {
      decided = localStorage.getItem(SCOPE_DECIDED_KEY) === "1";
    } catch { /* ignore */ }
    if (decided) return false;
    return allLists.some((l) => l.childId == null);
  }, [activeChild, allLists]);
  const showMigrationPrompt = shouldShowMigrationPrompt && !promptDismissed;

  // Last-test attempt per visible list, recomputed when the lists or
  // localStorage scores change. (`Date.now()` in dependency would over-fire;
  // we just refresh on render.)
  const lastByList = useMemo(() => {
    const map = {};
    for (const l of visibleLists) map[l.id] = getLastSpellingAttempt(l.id);
    return map;
  }, [visibleLists]);

  const handleCreate = () => {
    const title = titleInput.trim();
    if (!title) return;
    const id = createList(title, lang, kind);
    setCreating(false);
    setTitleInput("");
    onOpenList(id);
  };

  const persistScopeDecision = () => {
    try { localStorage.setItem(SCOPE_DECIDED_KEY, "1"); } catch { /* ignore */ }
  };

  const handleMigrationSave = () => {
    claimSharedLists();
    persistScopeDecision();
    setPromptDismissed(true);
  };

  const handleMigrationKeepShared = () => {
    persistScopeDecision();
    setPromptDismissed(true);
  };

  return (
    <div className="screen spelling-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-topic">
          {isPinyin ? "汉语拼音" : isZh ? "中文听写" : "English Spelling"}
        </span>
      </div>

      <div className="hero-section">
        <span className="hero-mascot">{isPinyin ? "ā" : isZh ? "字" : "✏️"}</span>
        <h1 className="hero-title">
          {isPinyin ? "拼音词语表" : isZh ? "听写词语表" : "Spelling Lists"}
        </h1>
        <p className="hero-tagline">
          {isPinyin
            ? "把要练拼音的词加进来——Koko 会读出来，孩子写拼音。"
            : isZh
            ? "把这周要听写的词加进来——Koko 会带孩子练习。"
            : "Add this week's spelling words — Koko will help your child practise."}
        </p>
        {!user && (
          <p className="spelling-device-note">
            {isZh
              ? "📱 词语表只保存在这台设备上。登录后可同步到其他设备。"
              : "📱 Lists are saved on this device only. Sign in to sync across devices."}
          </p>
        )}
        {user && syncStatus === "error" && (
          <p className="spelling-device-note spelling-device-note-error">
            {isZh
              ? "⚠️ 无法同步到云端。词语表已存在这台设备上，但暂时没有同步到其他设备。请检查网络后重试。"
              : "⚠️ Can't sync to the cloud right now. Lists are saved on this device but aren't syncing. Check your connection and try again."}
          </p>
        )}
        {user && syncStatus === "syncing" && (
          <p className="spelling-device-note">
            {isZh ? "☁️ 正在同步…" : "☁️ Syncing…"}
          </p>
        )}
        {user && (syncStatus === "synced" || syncStatus === "off") && (
          <p className="spelling-device-note">
            {isZh
              ? "☁️ 词语表已同步到你的账号，所有设备都可以用。"
              : "☁️ Lists sync across all your devices automatically."}
          </p>
        )}
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
        {visibleLists.map((list) => {
          const last = lastByList[list.id];
          return (
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
                  {last && (
                    <p className="spelling-list-lastscore">
                      {isZh
                        ? `上次：${last.score}/${last.total} · ${relativeTime(last.completedAt, true)}`
                        : `Last test: ${last.score}/${last.total} · ${relativeTime(last.completedAt, false)}`}
                    </p>
                  )}
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
          );
        })}
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

      {showMigrationPrompt && activeChild && (
        <div className="reward-overlay">
          <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="reward-title">
              {isZh ? "把以前的词语表分给孩子？" : "Save your lists to a child?"}
            </h2>
            <p className="reward-subtitle">
              {isZh
                ? `以前做的词语表还不属于任何一个孩子。要把它们都分给 ${activeChild.name} 吗？还是先和其他孩子一起共用？`
                : `Your existing spelling lists aren't tied to a child yet. Save them all to ${activeChild.name}, or keep them shared with everyone on this device?`}
            </p>
            <button
              className="btn-primary reward-dismiss"
              onClick={handleMigrationSave}
            >
              {isZh ? `分给 ${activeChild.name}` : `Save to ${activeChild.name}`}
            </button>
            <button className="confirm-cancel" onClick={handleMigrationKeepShared}>
              {isZh ? "保持共用" : "Keep shared"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
