// Fallback reward videos.
//
// When a parent has NOT set their own YouTube reward for a module, we can still
// give the child a short, age-appropriate video at the end of a completed
// module. Videos are grouped into age bands and chosen at random (never the
// same one twice in a row).
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ SAFETY GATE — READ BEFORE USE
// Every entry ships with `verified: false` and an empty `id`, so NOTHING plays
// until a human vets it. These play unattended to young children, so IDs are
// deliberately NOT guessed here — a wrong YouTube ID can resolve to any video.
//
// To turn an entry on:
//   1. Open YouTube and search the `search` text (or find the exact `title`
//      on the named `channel`).
//   2. Confirm it is the right video, age-appropriate, and UNDER 5 MINUTES.
//   3. Paste its 11-character video id into `id` (the part after `v=` in the
//      URL, or after `youtu.be/`).
//   4. Set `verified: true`.
// `pickRewardVideo` only ever returns entries that are BOTH verified AND have a
// non-empty id, so partially-filled rows stay invisible.
// ─────────────────────────────────────────────────────────────────────────────

// level id → age band
export function levelBand(level) {
  if (level === "n" || level === "k") return "early";      // ages 3-6
  if (level === "p1" || level === "p2") return "lower";    // ages 6-8
  if (level === "p3" || level === "p4") return "middle";   // ages 8-10
  return "upper";                                          // p5, p6 — ages 10-12
}

// Curated recommendations. Fill `id` + flip `verified` to activate (see above).
// `secs` is the approximate length to help you keep them under 5 minutes.
export const REWARD_VIDEO_POOL = {
  early: [
    { id: "", verified: false, title: "The Numbers Song (1–10)", channel: "Super Simple Songs", search: "super simple songs numbers song 1 to 10", secs: 180 },
    { id: "", verified: false, title: "The Alphabet / Phonics Song", channel: "Super Simple Songs", search: "super simple songs phonics song A to Z", secs: 200 },
    { id: "", verified: false, title: "Numberblocks — One", channel: "Numberblocks", search: "numberblocks one full episode", secs: 300 },
    { id: "", verified: false, title: "Shapes Song", channel: "Super Simple Songs", search: "super simple songs shapes song", secs: 180 },
    { id: "", verified: false, title: "Days of the Week Song", channel: "Super Simple Songs", search: "super simple songs days of the week", secs: 150 },
  ],
  lower: [
    { id: "", verified: false, title: "Skip Counting by 2s", channel: "Jack Hartmann", search: "jack hartmann skip counting by 2", secs: 180 },
    { id: "", verified: false, title: "The Solar System Song", channel: "Kids Learning Tube", search: "kids learning tube solar system song", secs: 240 },
    { id: "", verified: false, title: "The Water Cycle for Kids", channel: "SciShow Kids", search: "scishow kids water cycle", secs: 240 },
    { id: "", verified: false, title: "Learning Shapes & Sides", channel: "Math & Learning Videos 4 Kids", search: "2d shapes for kids sides corners", secs: 200 },
  ],
  middle: [
    { id: "", verified: false, title: "Fractions Are Parts", channel: "Math Antics", search: "math antics fractions are parts of a whole", secs: 290 },
    { id: "", verified: false, title: "The Water Cycle", channel: "National Geographic Kids", search: "nat geo kids water cycle", secs: 180 },
    { id: "", verified: false, title: "Parts of Speech (Grammar)", channel: "Grammaropolis / Scratch Garden", search: "parts of speech song for kids", secs: 240 },
    { id: "", verified: false, title: "Multiplication — Times Tables", channel: "Math Antics", search: "math antics multiplication", secs: 290 },
  ],
  upper: [
    { id: "", verified: false, title: "What Are Percentages?", channel: "Math Antics", search: "math antics what are percentages", secs: 290 },
    { id: "", verified: false, title: "Photosynthesis (short)", channel: "SciShow Kids", search: "scishow kids photosynthesis", secs: 240 },
    { id: "", verified: false, title: "A short TED-Ed lesson", channel: "TED-Ed", search: "ted ed under 5 minutes science", secs: 280 },
    { id: "", verified: false, title: "The Human Body Systems", channel: "SciShow Kids", search: "scishow kids body systems", secs: 260 },
  ],
};

const LAST_KEY = "koko-last-reward-video";

export function loadLastRewardVideo() {
  try { return localStorage.getItem(LAST_KEY) || null; } catch { return null; }
}

export function saveLastRewardVideo(id) {
  try { if (id) localStorage.setItem(LAST_KEY, id); } catch { /* ignore */ }
}

// Pick a random verified fallback video id for the level's age band. Avoids
// `excludeId` (the previous reward) unless it's the only option. Returns null
// when the band has no verified video yet — callers then fall back gracefully.
export function pickRewardVideo(level, excludeId = null) {
  const pool = (REWARD_VIDEO_POOL[levelBand(level)] || []).filter((v) => v.verified && v.id);
  if (pool.length === 0) return null;
  const choices = pool.length > 1 ? pool.filter((v) => v.id !== excludeId) : pool;
  const list = choices.length > 0 ? choices : pool;
  return list[Math.floor(Math.random() * list.length)].id;
}
