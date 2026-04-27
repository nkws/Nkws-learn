const PROGRESS_KEY = "koko-time-tutor-progress";
const MODULE_VIDEOS_KEY = "koko-module-videos";
const TOPIC_VIDEOS_KEY = "koko-topic-videos";

const DEFAULT_PROGRESS = {
  stars: 0,
  moduleStars: {},
  completedModules: [],
  completedTopics: [],
  lastSession: null,
};

export function loadProgress() {
  try {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) return { ...DEFAULT_PROGRESS, ...JSON.parse(saved) };
  } catch { /* ignore */ }
  return { ...DEFAULT_PROGRESS };
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ ...progress, lastSession: Date.now() }));
  } catch { /* ignore */ }
}

export function loadModuleVideos() {
  try {
    const saved = localStorage.getItem(MODULE_VIDEOS_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return {};
}

export function saveModuleVideos(videos) {
  try { localStorage.setItem(MODULE_VIDEOS_KEY, JSON.stringify(videos)); } catch { /* ignore */ }
}

export function loadTopicVideos() {
  try {
    const saved = localStorage.getItem(TOPIC_VIDEOS_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return {};
}

export function saveTopicVideos(videos) {
  try { localStorage.setItem(TOPIC_VIDEOS_KEY, JSON.stringify(videos)); } catch { /* ignore */ }
}

const NAV_STATE_KEY = "koko-nav-state";

export function loadNavState() {
  try {
    const saved = localStorage.getItem(NAV_STATE_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return null;
}

export function saveNavState(state) {
  try { localStorage.setItem(NAV_STATE_KEY, JSON.stringify(state)); } catch { /* ignore */ }
}

const MOCK_PAPER_HISTORY_KEY = "koko-mock-paper-history";

export function loadMockPaperHistory() {
  try {
    const saved = localStorage.getItem(MOCK_PAPER_HISTORY_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return [];
}

export function saveMockPaperAttempt(attempt) {
  try {
    const history = loadMockPaperHistory();
    history.unshift({ ...attempt, completedAt: Date.now() });
    // Cap to 50 most recent so localStorage doesn't grow without bound.
    const trimmed = history.slice(0, 50);
    localStorage.setItem(MOCK_PAPER_HISTORY_KEY, JSON.stringify(trimmed));
  } catch { /* ignore */ }
}

const AUTO_READ_KEY = "koko-auto-read";

export function loadAutoRead() {
  try {
    const saved = localStorage.getItem(AUTO_READ_KEY);
    if (saved !== null) return saved === "1";
  } catch { /* ignore */ }
  return true;
}

export function saveAutoRead(enabled) {
  try { localStorage.setItem(AUTO_READ_KEY, enabled ? "1" : "0"); } catch { /* ignore */ }
}

const STREAK_KEY = "koko-streak";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function loadStreak() {
  try {
    const saved = localStorage.getItem(STREAK_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return { count: 0, lastDate: null };
}

export function saveStreak(streak) {
  try { localStorage.setItem(STREAK_KEY, JSON.stringify(streak)); } catch { /* ignore */ }
}

export function updateStreak() {
  const streak = loadStreak();
  const today = todayStr();
  if (streak.lastDate === today) return streak; // Already counted today
  if (streak.lastDate === yesterdayStr()) {
    // Consecutive day — increment
    const updated = { count: streak.count + 1, lastDate: today };
    saveStreak(updated);
    return updated;
  }
  // Streak broken — reset to 1
  const updated = { count: 1, lastDate: today };
  saveStreak(updated);
  return updated;
}
