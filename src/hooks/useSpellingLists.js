import { useCallback, useEffect, useState } from "react";
import { loadSpellingLists, saveSpellingLists, newListId } from "../utils/spellingStorage";

export function useSpellingLists() {
  const [state, setState] = useState(() => loadSpellingLists());

  useEffect(() => {
    saveSpellingLists(state);
  }, [state]);

  const createList = useCallback((title, lang = "en") => {
    const now = Date.now();
    const list = {
      id: newListId(),
      title: title?.trim() || "Untitled list",
      lang,
      words: [],
      createdAt: now,
      updatedAt: now,
    };
    setState((prev) => ({ ...prev, lists: [list, ...prev.lists] }));
    return list.id;
  }, []);

  const updateList = useCallback((id, updates) => {
    setState((prev) => ({
      ...prev,
      lists: prev.lists.map((l) =>
        l.id === id ? { ...l, ...updates, updatedAt: Date.now() } : l
      ),
    }));
  }, []);

  const deleteList = useCallback((id) => {
    setState((prev) => ({ ...prev, lists: prev.lists.filter((l) => l.id !== id) }));
  }, []);

  const getList = useCallback(
    (id) => state.lists.find((l) => l.id === id) || null,
    [state]
  );

  return { lists: state.lists, createList, updateList, deleteList, getList };
}
