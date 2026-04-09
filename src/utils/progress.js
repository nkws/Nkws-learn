const STORAGE_KEY = "koko-time-tutor-progress";

const DEFAULT_PROGRESS = {
  stars: 0,
  level: 1,
  streak: 0,
  rewardCount: 0,
  lastSession: null,
};

export function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
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
      STORAGE_KEY,
      JSON.stringify({ ...progress, lastSession: Date.now() })
    );
  } catch {
    // ignore
  }
}
