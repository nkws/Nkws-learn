// Character-writing review scheduling (Slice 1 — a simple ladder, not FSRS yet).
//
// A card attempt is graded from how cleanly the child wrote the character(s),
// then the next review interval and due date are derived from that grade. Pure
// functions only (no React, no Supabase, no Date.now side effects unless you
// pass `now`), so the whole ladder is unit-tested directly.

// Singapore has no DST, so the day boundary is a fixed UTC+8 offset.
const SGT_OFFSET_MIN = 8 * 60;
const MS_PER_MIN = 60 * 1000;

// Grade one attempt. `totalMistakes` is summed across every character in the
// word; `charCount` is how many characters it had; `hintUsed` is true if the
// stroke hint was shown for any character (reaching the miss threshold counts).
//   again: hint used, OR ≥3 mistakes per character on average
//   easy:  0 mistakes (and no hint)
//   good:  anything in between (some mistakes, <3 per character, no hint)
export function gradeAttempt({ totalMistakes, charCount, hintUsed }) {
  const chars = Math.max(1, charCount || 0);
  const avg = (totalMistakes || 0) / chars;
  if (hintUsed || avg >= 3) return "again";
  if ((totalMistakes || 0) === 0) return "easy";
  return "good";
}

// Next interval in whole days from the grade and the previous interval.
//   again → 1
//   good  → max(3, prev × 2)
//   easy  → max(7, prev × 3)
export function nextIntervalDays(grade, prevIntervalDays = 0) {
  const prev = Math.max(0, prevIntervalDays || 0);
  if (grade === "again") return 1;
  if (grade === "good") return Math.max(3, prev * 2);
  if (grade === "easy") return Math.max(7, prev * 3);
  return 1;
}

// Due date = the start of the Singapore calendar day `intervalDays` days after
// the day of `now` (in SGT), returned as a UTC Date. Day-granular on purpose:
// two reviews on the same SGT day land on the same future due day.
export function dueAt(now, intervalDays) {
  const nowMs = now instanceof Date ? now.getTime() : Number(now);
  // Shift into SGT wall-clock so the UTC getters read SGT fields.
  const sgt = new Date(nowMs + SGT_OFFSET_MIN * MS_PER_MIN);
  const y = sgt.getUTCFullYear();
  const m = sgt.getUTCMonth();
  const d = sgt.getUTCDate();
  // Midnight SGT of (that date + interval) expressed in UTC: subtract the offset.
  const targetUtcMs =
    Date.UTC(y, m, d + intervalDays, 0, 0, 0, 0) - SGT_OFFSET_MIN * MS_PER_MIN;
  return new Date(targetUtcMs);
}

// Convenience: grade an attempt and compute the resulting schedule in one call.
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
