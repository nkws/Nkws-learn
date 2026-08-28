// Parent-curated reward videos.
//
// A parent pastes their own YouTube links (one list per child) on the Reward
// Videos screen. When that child finishes a module and no video was set for
// that specific module, we play a random one from their list — never the same
// one twice in a row. Because the parent hand-picks the videos, they're
// age-appropriate by definition and nothing unvetted is ever shown.
//
// Stored per child in localStorage under `koko-reward-pool:<childId>` as an
// array of { id, addedAt }. No age bands and no hardcoded content: the parent's
// own list is the whole source.

import { extractVideoId } from "./videos.js";

const poolKey = (childId) => `koko-reward-pool:${childId || "default"}`;
const LAST_KEY = "koko-last-reward-video";

export function loadRewardPool(childId) {
  try {
    const raw = localStorage.getItem(poolKey(childId));
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr.filter((v) => v && v.id) : [];
  } catch {
    return [];
  }
}

export function saveRewardPool(childId, list) {
  try {
    localStorage.setItem(poolKey(childId), JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

// ---- Pure list operations (no localStorage; unit-tested directly) ----

// Add a pasted YouTube link/id to the list. Returns { list, error } where error
// is null on success, "invalid" if the link can't be parsed, or "duplicate".
export function addToPool(list, input) {
  const id = extractVideoId((input || "").trim());
  if (!id) return { list, error: "invalid" };
  if (list.some((v) => v.id === id)) return { list, error: "duplicate" };
  return { list: [...list, { id, addedAt: Date.now() }], error: null };
}

export function removeFromPool(list, id) {
  return list.filter((v) => v.id !== id);
}

// Random id from the list, avoiding excludeId (the previous reward) unless it's
// the only one. Returns null when the list is empty.
export function pickFromPool(list, excludeId = null) {
  const ids = (list || []).map((v) => v.id).filter(Boolean);
  if (ids.length === 0) return null;
  const choices = ids.length > 1 ? ids.filter((x) => x !== excludeId) : ids;
  const pool = choices.length > 0 ? choices : ids;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ---- localStorage-backed conveniences used by the quiz screen ----

export function loadLastRewardVideo() {
  try {
    return localStorage.getItem(LAST_KEY) || null;
  } catch {
    return null;
  }
}

export function saveLastRewardVideo(id) {
  try {
    if (id) localStorage.setItem(LAST_KEY, id);
  } catch {
    /* ignore */
  }
}

// Pick a fallback reward video id for a child's list, or null if they have none.
export function pickRewardVideo(childId, excludeId = null) {
  return pickFromPool(loadRewardPool(childId), excludeId);
}
