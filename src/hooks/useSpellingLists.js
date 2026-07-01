import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { loadSpellingLists, saveSpellingLists, newListId } from "../utils/spellingStorage";
import {
  fetchCloudSpellingLists,
  upsertCloudSpellingList,
  deleteCloudSpellingList,
  subscribeToSpellingLists,
} from "../utils/cloudSync";
import { mergeSpellingLists } from "../utils/spellingMerge";

// Sync status surfaced to the UI:
//   "off"     — not logged in / Supabase not configured: local-only, not a fault
//   "syncing" — a cloud pull is in flight
//   "synced"  — last cloud op succeeded
//   "error"   — a configured cloud op failed (table missing, RLS, network…)
export const SYNC = { OFF: "off", SYNCING: "syncing", SYNCED: "synced", ERROR: "error" };

// Apply the pure merge to the local store and persist. Returns the merged store
// (or null if unchanged) plus the local-only lists that still need pushing up.
function applyMerge(cloudRows) {
  const current = loadSpellingLists();
  const { lists, changed, toPush } = mergeSpellingLists(current.lists, cloudRows);
  const next = changed ? { ...current, lists } : null;
  if (next) saveSpellingLists(next);
  return { next, toPush };
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
  const [syncStatus, setSyncStatus] = useState(userId ? SYNC.SYNCING : SYNC.OFF);
  const childId = activeChild?.id || null;
  // Guards a refetch already in flight so overlapping triggers don't stack.
  const pullingRef = useRef(false);

  // Pull from cloud, merge, and push any local-only lists up. Safe to call
  // repeatedly (idempotent merge). Updates syncStatus so the UI can show when
  // the cloud is unreachable instead of silently staying local.
  const syncFromCloud = useCallback(async () => {
    if (!userId || pullingRef.current) return;
    pullingRef.current = true;
    setSyncStatus(SYNC.SYNCING);
    try {
      const { data, error } = await fetchCloudSpellingLists(userId);
      if (error) { setSyncStatus(SYNC.ERROR); return; }

      const { next, toPush } = applyMerge(data);
      if (next) setState(next);

      // Send lists that exist on this device but not yet in the cloud (created
      // offline, before login, or while a previous push failed) up to the cloud.
      let pushError = false;
      for (const local of toPush) {
        const res = await upsertCloudSpellingList(userId, local);
        if (res.error) pushError = true;
      }
      setSyncStatus(pushError ? SYNC.ERROR : SYNC.SYNCED);
    } finally {
      pullingRef.current = false;
    }
  }, [userId]);

  // Initial sync + live subscription + focus/visibility refetch.
  useEffect(() => {
    if (!userId) { setSyncStatus(SYNC.OFF); return; }
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

  // Flip syncStatus based on the outcome of a write-through cloud call, so a
  // failed create/edit/delete shows "sync unavailable" and a later success
  // clears it.
  const trackWrite = useCallback((promise) => {
    promise.then((res) => setSyncStatus(res?.error ? SYNC.ERROR : SYNC.SYNCED));
  }, []);

  // ── Mutations (local + cloud write-through) ────────────────────────────────
  const createList = useCallback((title, lang = "en", kind = "spelling") => {
    const now = Date.now();
    const list = {
      id: newListId(),
      title: title?.trim() || "Untitled list",
      lang,
      kind,
      childId,
      words: [],
      order: now, // newest sorts to the top until manually arranged
      createdAt: now,
      updatedAt: now,
    };
    const current = loadSpellingLists();
    const next = { ...current, lists: [list, ...current.lists] };
    saveSpellingLists(next);
    setState(next);
    if (userId) trackWrite(upsertCloudSpellingList(userId, list));
    return list.id;
  }, [childId, userId, trackWrite]);

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
      if (updated) trackWrite(upsertCloudSpellingList(userId, updated));
    }
  }, [userId, trackWrite]);

  const deleteList = useCallback((id) => {
    const current = loadSpellingLists();
    const next = { ...current, lists: current.lists.filter((l) => l.id !== id) };
    saveSpellingLists(next);
    setState(next);
    if (userId) trackWrite(deleteCloudSpellingList(id));
  }, [userId, trackWrite]);

  const getList = useCallback(
    (id) => state.lists.find((l) => l.id === id) || null,
    [state]
  );

  // Persist a new arrangement. `orderedIds` is the visible lists top→bottom;
  // each gets a fresh `order` (top = highest) so sortListsByOrder reproduces the
  // arrangement. Values are ≥ now, keeping arranged lists above unarranged ones.
  // Bumps updatedAt so the change syncs through the normal write-through path.
  const reorderLists = useCallback((orderedIds) => {
    const base = Date.now();
    const n = orderedIds.length;
    const orderById = {};
    orderedIds.forEach((id, i) => { orderById[id] = base + (n - i); });

    const current = loadSpellingLists();
    const changed = [];
    const nextLists = current.lists.map((l) => {
      if (l.id in orderById) {
        const updated = { ...l, order: orderById[l.id], updatedAt: base };
        changed.push(updated);
        return updated;
      }
      return l;
    });
    const next = { ...current, lists: nextLists };
    saveSpellingLists(next);
    setState(next);

    if (userId && changed.length) {
      Promise.all(changed.map((l) => upsertCloudSpellingList(userId, l)))
        .then((results) =>
          setSyncStatus(results.some((r) => r.error) ? SYNC.ERROR : SYNC.SYNCED)
        );
    }
  }, [userId]);

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
      const claimed = next.lists.filter((l) => claimedIds.includes(l.id));
      Promise.all(claimed.map((l) => upsertCloudSpellingList(userId, l)))
        .then((results) =>
          setSyncStatus(results.some((r) => r.error) ? SYNC.ERROR : SYNC.SYNCED)
        );
    }
  }, [childId, userId]);

  return {
    lists,
    allLists: state.lists,
    syncStatus,
    createList,
    updateList,
    deleteList,
    getList,
    reorderLists,
    claimSharedLists,
  };
}
