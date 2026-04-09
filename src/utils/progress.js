const PROGRESS_KEY = "koko-time-tutor-progress";
const VIDEOS_KEY = "koko-module-videos";

const DEFAULT_PROGRESS = {
  stars: 0,
  // Per-module stars: { 1: 3, 2: 5, ... }
  moduleStars: {},
  lastSession: null,
};

export function loadProgress() {
  try {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      return { ...DEFAULT_PROGRESS, ...JSON.parse(saved) };
    }
  } catch {
    // ignore
  }
  return { ...DEFAULT_PROGRESS };
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({ ...progress, lastSession: Date.now() })
    );
  } catch {
    // ignore
  }
}

// Per-module reward video IDs: { 1: "abc123", 2: "def456", ... }
export function loadModuleVideos() {
  try {
    const saved = localStorage.getItem(VIDEOS_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // ignore
  }
  return {};
}

export function saveModuleVideos(videos) {
  try {
    localStorage.setItem(VIDEOS_KEY, JSON.stringify(videos));
  } catch {
    // ignore
  }
}
