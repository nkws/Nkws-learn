import { useCallback, useEffect, useState } from "react";

// Per-child completion memory for Listening exercises, kept in localStorage.
// Keyed by a stable exercise id (e.g. "dict:hw-p1:L1", a weekly paper id, a
// pack id, or "my:<listId>"). An exercise is "done" once finished and "perfect"
// if every item was answered correctly. The best result sticks until reset.
//   map[id] = { done: true, perfect: bool, score, total, at }
const keyFor = (childId) => `koko_lc_progress_${childId || "guest"}`;

function read(childId) {
  try { return JSON.parse(localStorage.getItem(keyFor(childId))) || {}; }
  catch { return {}; }
}

export function useListeningProgress(childId) {
  const [map, setMap] = useState(() => read(childId));

  useEffect(() => { setMap(read(childId)); }, [childId]);

  const persist = useCallback((next) => {
    setMap(next);
    try { localStorage.setItem(keyFor(childId), JSON.stringify(next)); } catch { /* ignore */ }
  }, [childId]);

  const markComplete = useCallback((id, score, total) => {
    if (!id) return;
    setMap((prev) => {
      const was = prev[id];
      const perfect = total > 0 && score >= total;
      const best = Math.max(was?.score ?? 0, score);
      const next = { ...prev, [id]: { done: true, perfect: perfect || was?.perfect || false, score: best, total, at: Date.now() } };
      try { localStorage.setItem(keyFor(childId), JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, [childId]);

  const resetOne = useCallback((id) => {
    setMap((prev) => {
      const next = { ...prev };
      delete next[id];
      try { localStorage.setItem(keyFor(childId), JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, [childId]);

  const resetAll = useCallback(() => persist({}), [persist]);

  // "perfect" | "done" | ""
  const statusOf = useCallback((id) => {
    const e = map[id];
    return e?.perfect ? "perfect" : e?.done ? "done" : "";
  }, [map]);

  const doneCount = Object.keys(map).length;

  return { map, markComplete, resetOne, resetAll, statusOf, doneCount };
}
