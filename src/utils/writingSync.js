// Supabase I/O + pure queue/list builders for the Character Writing drill.
// Mirrors cloudSync.js style: every call guards on isSupabaseConfigured() and
// logs errors rather than throwing. Rows are owner-scoped by RLS.
import { supabase, isSupabaseConfigured } from "./supabase";
import { buildWritingRows } from "../data/writingSyllabus";

// Load the universal MOE P1 syllabus for a child who has no cards yet. Idempotent
// (upsert on the unique key), and RLS lets a parent insert their own child's
// rows, so this runs safely from the client on first open.
export async function seedWritingSyllabus(childId) {
  if (!isSupabaseConfigured() || !childId) return { error: "not-configured", count: 0 };
  const rows = buildWritingRows(childId);
  const { error } = await supabase
    .from("writing_cards")
    .upsert(rows, { onConflict: "child_id,word,lesson_tag" });
  if (error) { console.error("seedWritingSyllabus:", error); return { error, count: 0 }; }
  return { error: null, count: rows.length };
}

// Fetch all of a learner's cards once (small — one lesson set), ordered by
// syllabus position. The screen builds the lesson list and the daily queue from
// this in memory, so there's one round-trip per session.
export async function fetchAllCards(childId) {
  if (!isSupabaseConfigured() || !childId) return [];
  const { data, error } = await supabase
    .from("writing_cards")
    .select("*")
    .eq("child_id", childId)
    .order("lesson_seq", { ascending: true, nullsFirst: false })
    .order("word_seq", { ascending: true, nullsFirst: false });
  if (error) { console.error("fetchAllCards:", error); return []; }
  return data || [];
}

// Log one attempt and advance the card's schedule. `review` carries the already
// computed grade/interval/dueAt (from writingSchedule.js).
export async function recordWritingReview(childId, cardId, review) {
  if (!isSupabaseConfigured() || !childId || !cardId) return { error: "not-configured" };
  const { grade, totalMistakes, hintUsed, firstAttempt, intervalDays, dueAt } = review;
  const dueIso = dueAt instanceof Date ? dueAt.toISOString() : dueAt;

  const ins = await supabase.from("writing_reviews").insert({
    card_id: cardId,
    child_id: childId,
    grade,
    total_mistakes: totalMistakes,
    hint_used: hintUsed,
    first_attempt: firstAttempt,
    interval_days: intervalDays,
    due_at: dueIso,
  });
  if (ins.error) { console.error("recordWritingReview (insert):", ins.error); return { error: ins.error }; }

  const upd = await supabase
    .from("writing_cards")
    .update({ interval_days: intervalDays, due_at: dueIso })
    .eq("id", cardId);
  if (upd.error) { console.error("recordWritingReview (update):", upd.error); return { error: upd.error }; }

  return { error: null };
}
