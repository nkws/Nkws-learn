import { useCallback, useMemo, useState } from "react";
import { loadSpellingLists, saveSpellingLists, newListId } from "../utils/spellingStorage";

// Lists are scoped to a child. Lists with childId === null are "shared on
// this device" — used for skipped-login (no active child) and for legacy
// lists created before per-child mode (until the parent picks a side via the
// migration prompt). The returned `lists` array filters to the active
// child's lists plus shared lists. All mutations still hit the global store.
export function useSpellingLists(activeChild) {
  const [state, setState] = useState(() => loadSpellingLists());
  const childId = activeChild?.id || null;

  const lists = useMemo(() => {
    if (!childId) return state.lists;
    return state.lists.filter(
      (l) => l.childId === childId || l.childId == null
    );
  }, [state.lists, childId]);

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
    return list.id;
  }, [childId]);

  const updateList = useCallback((id, updates) => {
    const current = loadSpellingLists();
    const next = {
      ...current,
      lists: current.lists.map((l) =>
        l.id === id ? { ...l, ...updates, updatedAt: Date.now() } : l
      ),
    };
    saveSpellingLists(next);
    setState(next);
  }, []);

  const deleteList = useCallback((id) => {
    const current = loadSpellingLists();
    const next = { ...current, lists: current.lists.filter((l) => l.id !== id) };
    saveSpellingLists(next);
    setState(next);
  }, []);

  const getList = useCallback(
    (id) => state.lists.find((l) => l.id === id) || null,
    [state]
  );

  // Bulk-assign all shared (null-childId) lists to the active child. Used by
  // the migration prompt on first launch under per-child mode.
  const claimSharedLists = useCallback(() => {
    if (!childId) return;
    const current = loadSpellingLists();
    const next = {
      ...current,
      lists: current.lists.map((l) =>
        l.childId == null ? { ...l, childId, updatedAt: Date.now() } : l
      ),
    };
    saveSpellingLists(next);
    setState(next);
  }, [childId]);

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
