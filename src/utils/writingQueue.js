// Pure queue / lesson-list builders for the Character Writing drill. No React,
// no Supabase. A card belongs to a syllabus, encoded as a prefix in its
// lesson_tag: "<syllabusId>::<lessonTag>" (e.g. "hcl-p1::L3"). That keeps each
// chosen list separate without an extra column.

const dueMs = (c) => (c.due_at ? Date.parse(c.due_at) : null);

export function syllabusOf(card) {
  const t = card.lesson_tag || "";
  const i = t.indexOf("::");
  return i >= 0 ? t.slice(0, i) : null;
}

// Progress summary per syllabus the child has any cards for.
// Returns { [syllabusId]: {id,total,new,due,learned} }.
export function buildSyllabusProgress(cards, nowMs = Date.now()) {
  const out = {};
  for (const c of cards) {
    const sid = syllabusOf(c);
    if (!sid) continue;
    const S = (out[sid] = out[sid] || { id: sid, total: 0, new: 0, due: 0, learned: 0 });
    S.total += 1;
    const d = dueMs(c);
    if (d === null) S.new += 1;
    else if (d <= nowMs) S.due += 1;
    else S.learned += 1;
  }
  return out;
}

// Per-lesson summary for a syllabus's landing (new / due / learned counts).
export function buildLessons(cards, { syllabusId = null, nowMs = Date.now() } = {}) {
  const scope = syllabusId ? cards.filter((c) => syllabusOf(c) === syllabusId) : cards;
  const map = new Map();
  for (const c of scope) {
    const key = c.lesson_tag || "—";
    if (!map.has(key)) {
      map.set(key, { lesson_tag: key, lesson_seq: c.lesson_seq ?? 9999, total: 0, new: 0, due: 0, learned: 0 });
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

// Session queue: due cards first (soonest first), then new cards in syllabus
// order (new last). Scoped to a syllabus and optionally one lesson.
export function buildQueue(cards, { syllabusId = null, lessonTag = null, nowMs = Date.now(), maxDue = 15, maxNew = 5 } = {}) {
  let scope = cards;
  if (syllabusId) scope = scope.filter((c) => syllabusOf(c) === syllabusId);
  if (lessonTag) scope = scope.filter((c) => c.lesson_tag === lessonTag);
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
