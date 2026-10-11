// Supabase I/O for the Character Writing drill. Mirrors cloudSync.js style:
// every call guards on isSupabaseConfigured() and logs errors rather than
// throwing. Rows are owner-scoped by RLS.
import { supabase, isSupabaseConfigured } from "./supabase";
import { buildSyllabusRows } from "../data/writingSyllabi";

// All of a learner's syllabus-scoped cards (lesson_tag carries a "<id>::" prefix),
// ordered by syllabus position. Old/ungrouped rows (no "::") are ignored, so
// superseded seedings simply drop out of view.
export async function fetchAllCards(childId) {
  if (!isSupabaseConfigured() || !childId) return [];
  const { data, error } = await supabase
    .from("writing_cards")
    .select("*")
    .eq("child_id", childId)
    .like("lesson_tag", "%::%")
    .order("lesson_seq", { ascending: true, nullsFirst: false })
    .order("word_seq", { ascending: true, nullsFirst: false });
  if (error) { console.error("fetchAllCards:", error); return []; }
  return data || [];
}

// Load a whole syllabus (the chosen list) for a child. Idempotent upsert; RLS
// lets a parent insert their own child's rows, so it runs from the client.
export async function seedSyllabus(childId, syllabusId) {
  if (!isSupabaseConfigured() || !childId || !syllabusId) return { error: "not-configured", count: 0 };
  const rows = buildSyllabusRows(childId, syllabusId);
  if (rows.length === 0) return { error: "unknown-syllabus", count: 0 };
  const { error } = await supabase
    .from("writing_cards")
    .upsert(rows, { onConflict: "child_id,word,lesson_tag" });
  if (error) { console.error("seedSyllabus:", error); return { error, count: 0 }; }
  return { error: null, count: rows.length };
}

// Log one attempt and advance the card's schedule.
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
