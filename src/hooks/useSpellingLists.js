import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { loadSpellingLists, saveSpellingLists, newListId } from "../utils/spellingStorage";
import {
  fetchCloudSpellingLists,
  upsertCloudSpellingList,
  deleteCloudSpellingList,
  subscribeToSpellingLists,
} from "../utils/cloudSync";
import { mergeSpellingLists } from "../utils/spellingMerge";

// Merge cloud rows into the local store using the pure merge logic, then apply
// the side effects: push local-only lists to the cloud and persist the result.
// Returns the merged store, or null if nothing changed.
function mergeCloudIntoLocal(cloudRows, userId) {
  const current = loadSpellingLists();
  const { lists, changed, toPush } = mergeSpellingLists(current.lists, cloudRows);

  // Push local-only lists (created offline / before login) up to the cloud.
  for (const local of toPush) upsertCloudSpellingList(userId, local);

  if (!changed) return null;
  const next = { ...current, lists };
  saveSpellingLists(next);
  return next;
}

// Lists are scoped to a child. Lists with childId === null are "shared on
// this device" — used for skipped-login (no active child) and for legacy
// lists created before per-child mode (until the parent picks a side via the
// migration prompt). The returned `lists` array filters to the active
// child's lists plus shared lists. All mutations still hit the global store.
//
// When `userId` is provided (parent is logged in), the hook keeps the local
// store in sync with the cloud spelling_lists table:
//   • PUSH  — every mutation (create/update/delete/claim) write-throughs.
//   • PULL  — on mount, on a Supabase realtime change event, and whenever the
//             tab regains focus/visibility. So word edits made on one device
//             appear on the others without a manual reload.
export function useSpellingLists(activeChild, userId) {
  const [state, setState] = useState(() => loadSpellingLists());
  const childId = activeChild?.id || null;
  // Guards a refetch already in flight so overlapping triggers don't stack.
  const pullingRef = useRef(false);

  // Pull from cloud and merge. Safe to call repeatedly (idempotent merge).
  const syncFromCloud = useCallback(async () => {
    if (!userId || pullingRef.current) return;
    pullingRef.current = true;
    try {
      const cloudRows = await fetchCloudSpellingLists(userId);
      const merged = mergeCloudIntoLocal(cloudRows, userId);
      if (merged) setState(merged);
    } finally {
      pullingRef.current = false;
    }
  }, [userId]);

  // Initial sync + live subscription + focus/visibility refetch.
  useEffect(() => {
    if (!userId) return;
    syncFromCloud();

    const unsubscribe = subscribeToSpellingLists(userId, () => { syncFromCloud(); });

    const onFocus = () => { syncFromCloud(); };
    const onVisible = () => { if (document.visibilityState === "visible") syncFromCloud(); };
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      unsubscribe();
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [userId, syncFromCloud]);

  // ── Filtered view ─────────────────────────────────────────────────────────
  const lists = useMemo(() => {
    if (!childId) return state.lists;
    return state.lists.filter(
      (l) => l.childId === childId || l.childId == null
    );
  }, [state.lists, childId]);

  // ── Mutations (local + cloud write-through) ────────────────────────────────
  const createList = useCallback((title, lang = "en") => {
    const now = Date.now();
    const list = {
      id: newListId(),
      title: title?.trim() || "Untitled list",
      lang,
      childId,
      words: [],
      createdAt: now,
      updatedAt: now,
    };
    const current = loadSpellingLists();
    const next = { ...current, lists: [list, ...current.lists] };
    saveSpellingLists(next);
    setState(next);
    if (userId) upsertCloudSpellingList(userId, list);
    return list.id;
  }, [childId, userId]);

  const updateList = useCallback((id, updates) => {
    const current = loadSpellingLists();
    const updatedAt = Date.now();
    const next = {
      ...current,
      lists: current.lists.map((l) =>
        l.id === id ? { ...l, ...updates, updatedAt } : l
      ),
    };
    saveSpellingLists(next);
    setState(next);
    if (userId) {
      const updated = next.lists.find((l) => l.id === id);
      if (updated) upsertCloudSpellingList(userId, updated);
    }
  }, [userId]);

  const deleteList = useCallback((id) => {
    const current = loadSpellingLists();
    const next = { ...current, lists: current.lists.filter((l) => l.id !== id) };
    saveSpellingLists(next);
    setState(next);
    if (userId) deleteCloudSpellingList(id);
  }, [userId]);

  const getList = useCallback(
    (id) => state.lists.find((l) => l.id === id) || null,
    [state]
  );

  // Bulk-assign all shared (null-childId) lists to the active child. Used by
  // the migration prompt on first launch under per-child mode.
  const claimSharedLists = useCallback(() => {
    if (!childId) return;
    const updatedAt = Date.now();
    const current = loadSpellingLists();
    const claimedIds = [];
    const next = {
      ...current,
      lists: current.lists.map((l) => {
        if (l.childId == null) {
          claimedIds.push(l.id);
          return { ...l, childId, updatedAt };
        }
        return l;
      }),
    };
    saveSpellingLists(next);
    setState(next);
    if (userId) {
      for (const l of next.lists) {
        if (claimedIds.includes(l.id)) upsertCloudSpellingList(userId, l);
      }
    }
  }, [childId, userId]);

  return {
    lists,
    allLists: state.lists,
    createList,
    updateList,
    deleteList,
    getList,
    claimSharedLists,
  };
}
