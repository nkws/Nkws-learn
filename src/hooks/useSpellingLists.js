import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { loadSpellingLists, saveSpellingLists, newListId } from "../utils/spellingStorage";
import {
  fetchCloudSpellingLists,
  upsertCloudSpellingList,
  deleteCloudSpellingList,
  cloudSpellingListToLocal,
} from "../utils/cloudSync";

// Lists are scoped to a child. Lists with childId === null are "shared on
// this device" — used for skipped-login (no active child) and for legacy
// lists created before per-child mode (until the parent picks a side via the
// migration prompt). The returned `lists` array filters to the active
// child's lists plus shared lists. All mutations still hit the global store.
//
// When `userId` is provided (parent is logged in), the hook syncs with the
// cloud spelling_lists table on mount and writes through on every mutation.
export function useSpellingLists(activeChild, userId) {
  const [state, setState] = useState(() => loadSpellingLists());
  const childId = activeChild?.id || null;
  // Tracks whether the initial cloud fetch for this userId has completed.
  const syncedRef = useRef(null);

  // ── Cloud sync on login ────────────────────────────────────────────────────
  useEffect(() => {
    if (!userId) return;
    if (syncedRef.current === userId) return; // already synced this session
    let cancelled = false;

    (async () => {
      const cloudRows = await fetchCloudSpellingLists(userId);
      if (cancelled) return;

      const current = loadSpellingLists();
      const localById = Object.fromEntries(current.lists.map((l) => [l.id, l]));
      const cloudById = Object.fromEntries(cloudRows.map((r) => [r.id, r]));

      // Build merged list: cloud wins when its updatedAt is newer.
      let merged = [...current.lists];

      for (const row of cloudRows) {
        if (row.deleted) {
          // Propagate cloud deletion to local.
          merged = merged.filter((l) => l.id !== row.id);
          continue;
        }
        const local = localById[row.id];
        const cloudUpdated = new Date(row.updated_at).getTime();
        if (!local || cloudUpdated > local.updatedAt) {
          const converted = cloudSpellingListToLocal(row);
          if (local) {
            merged = merged.map((l) => (l.id === row.id ? converted : l));
          } else {
            merged = [...merged, converted];
          }
        }
      }

      // Push any local lists that aren't in the cloud yet (created offline).
      for (const local of current.lists) {
        if (!cloudById[local.id]) {
          upsertCloudSpellingList(userId, local); // fire-and-forget
        }
      }

      if (cancelled) return;
      const next = { ...current, lists: merged };
      saveSpellingLists(next);
      setState(next);
      syncedRef.current = userId;
    })();

    return () => { cancelled = true; };
  }, [userId]);

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
    const next = {
      ...current,
      lists: current.lists.map((l) =>
        l.childId == null ? { ...l, childId, updatedAt } : l
      ),
    };
    saveSpellingLists(next);
    setState(next);
    if (userId) {
      for (const l of next.lists.filter((l) => l.childId === childId && l.updatedAt === updatedAt)) {
        upsertCloudSpellingList(userId, l);
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
