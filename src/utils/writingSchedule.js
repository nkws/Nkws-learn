// Character-writing review scheduling.
//
// Skritter-style 4-level grading — Again / Hard / Good / Easy — but graded
// OBJECTIVELY from how cleanly the child wrote (stroke mistakes + whether a hint
// was shown), not self-reported, which is more honest for a young child. The
// four grades also line up 1:1 with FSRS's ratings for a later upgrade.
//
// Pure functions only (no React/Supabase/Date side effects unless you pass
// `now`), so the whole ladder is unit-tested directly.

// Singapore has no DST, so the day boundary is a fixed UTC+8 offset.
const SGT_OFFSET_MIN = 8 * 60;
const MS_PER_MIN = 60 * 1000;

// Grade one attempt from objective signals. `totalMistakes` is summed across
// every character of the word; `charCount` is how many characters it had;
// `hintUsed` is true if the stroke hint was shown (3 misses on a stroke) or the
// child tapped "Show hint".
//   again (Forgot): hint used, OR ≥3 mistakes per character on average
//   hard  (So-so):  ~2 mistakes per character
//   good  (Got it): some mistakes, but under 2 per character
//   easy:           0 mistakes, no hint
export function gradeAttempt({ totalMistakes, charCount, hintUsed }) {
  const chars = Math.max(1, charCount || 0);
  const avg = (totalMistakes || 0) / chars;
  if (hintUsed || avg >= 3) return "again";
  if (avg >= 2) return "hard";
  if ((totalMistakes || 0) > 0) return "good";
  return "easy";
}

// Next interval in whole days from the grade and the previous interval.
//   again → 1
//   hard  → max(2, round(prev × 1.5))
//   good  → max(3, prev × 2)
//   easy  → max(7, prev × 3)
export function nextIntervalDays(grade, prevIntervalDays = 0) {
  const prev = Math.max(0, prevIntervalDays || 0);
  if (grade === "again") return 1;
  if (grade === "hard") return Math.max(2, Math.round(prev * 1.5));
  if (grade === "good") return Math.max(3, prev * 2);
  if (grade === "easy") return Math.max(7, prev * 3);
  return 1;
}

// Due date = the start of the Singapore calendar day `intervalDays` days after
// the day of `now` (in SGT), returned as a UTC Date. Day-granular on purpose.
export function dueAt(now, intervalDays) {
  const nowMs = now instanceof Date ? now.getTime() : Number(now);
  const sgt = new Date(nowMs + SGT_OFFSET_MIN * MS_PER_MIN);
  const y = sgt.getUTCFullYear();
  const m = sgt.getUTCMonth();
  const d = sgt.getUTCDate();
  const targetUtcMs =
    Date.UTC(y, m, d + intervalDays, 0, 0, 0, 0) - SGT_OFFSET_MIN * MS_PER_MIN;
  return new Date(targetUtcMs);
}

// Grade an attempt and compute the resulting schedule in one call.
// Returns { grade, intervalDays, dueAt } (dueAt is a Date).
export function scheduleReview({
  prevIntervalDays = 0,
  totalMistakes = 0,
  charCount = 1,
  hintUsed = false,
  now = Date.now(),
}) {
  const grade = gradeAttempt({ totalMistakes, charCount, hintUsed });
  const intervalDays = nextIntervalDays(grade, prevIntervalDays);
  return { grade, intervalDays, dueAt: dueAt(now, intervalDays) };
}
