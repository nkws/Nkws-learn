// Pure queue / lesson-list builders for the Character Writing drill. No React,
// no Supabase — the screen fetches the cards (writingSync.js) then builds the
// lesson summary and daily queue from them in memory, so these are unit-tested
// directly.

const dueMs = (c) => (c.due_at ? Date.parse(c.due_at) : null);

// Per-lesson summary for the "study by list" landing: counts of new (never
// reviewed), due (review date reached), and learned (scheduled ahead).
export function buildLessons(cards, nowMs = Date.now()) {
  const map = new Map();
  for (const c of cards) {
    const key = c.lesson_tag || "—";
    if (!map.has(key)) {
      map.set(key, {
        lesson_tag: key,
        level: c.level || null,
        lesson_seq: c.lesson_seq ?? 9999,
        total: 0, new: 0, due: 0, learned: 0,
      });
    }
    const L = map.get(key);
    L.total += 1;
    const d = dueMs(c);
    if (d === null) L.new += 1;
    else if (d <= nowMs) L.due += 1;
    else L.learned += 1;
  }
  return [...map.values()].sort((a, b) => a.lesson_seq - b.lesson_seq);
}

// Build a session queue: due cards first (soonest first), then new cards in
// syllabus order (new last). Optionally scoped to one lesson.
export function buildQueue(cards, { lessonTag = null, nowMs = Date.now(), maxDue = 15, maxNew = 5 } = {}) {
  const scope = lessonTag ? cards.filter((c) => c.lesson_tag === lessonTag) : cards;
  const due = scope
    .filter((c) => dueMs(c) !== null && dueMs(c) <= nowMs)
    .sort((a, b) => dueMs(a) - dueMs(b))
    .slice(0, maxDue);
  const fresh = scope
    .filter((c) => dueMs(c) === null)
    .sort((a, b) => (a.lesson_seq - b.lesson_seq) || (a.word_seq - b.word_seq))
    .slice(0, maxNew);
  return [...due, ...fresh];
}
