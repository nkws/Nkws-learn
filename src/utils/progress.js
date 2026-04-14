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

const SKIP_INTROS_KEY = "koko-skip-intros";

export function loadSkipIntros() {
  try {
    return localStorage.getItem(SKIP_INTROS_KEY) === "1";
  } catch { return false; }
}

export function saveSkipIntros(skip) {
  try { localStorage.setItem(SKIP_INTROS_KEY, skip ? "1" : "0"); } catch { /* ignore */ }
}
