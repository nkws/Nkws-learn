const STORAGE_KEY = "koko-reward-videos";

const DEFAULT_VIDEOS = [
  { id: "yCLaJmDraXE", title: "Numberblocks" },
  { id: "WHfRIKBFbYQ", title: "StoryBots" },
  { id: "eVcBSoRqLMo", title: "Cocomelon" },
];

export function loadVideos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return [...DEFAULT_VIDEOS];
}

export function saveVideos(videos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
  } catch {
    // ignore
  }
}

// Extract YouTube video ID from various URL formats or plain ID
export function extractVideoId(input) {
  const trimmed = input.trim();

  // Already a plain ID (11 chars, alphanumeric + dash/underscore)
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    // youtube.com/watch?v=ID
    if (url.searchParams.has("v")) return url.searchParams.get("v");
    // youtu.be/ID
    if (url.hostname === "youtu.be") return url.pathname.slice(1).split("/")[0];
    // youtube.com/embed/ID
    const embedMatch = url.pathname.match(/\/embed\/([\w-]+)/);
    if (embedMatch) return embedMatch[1];
    // youtube.com/shorts/ID
    const shortsMatch = url.pathname.match(/\/shorts\/([\w-]+)/);
    if (shortsMatch) return shortsMatch[1];
  } catch {
    // not a URL
  }

  return null;
}
