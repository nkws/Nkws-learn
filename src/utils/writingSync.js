// Supabase I/O for the Character Writing drill. Mirrors cloudSync.js style:
// every call guards on isSupabaseConfigured() and logs errors rather than
// throwing. Rows are owner-scoped by RLS (children.user_id = auth.uid()).
import { supabase, isSupabaseConfigured } from "./supabase";

// Today's queue for a learner: up to `maxDue` cards that are due now (soonest
// first), then up to `maxNew` brand-new cards (never reviewed), new cards last.
export async function fetchWritingQueue(childId, { maxDue = 10, maxNew = 5 } = {}) {
  if (!isSupabaseConfigured() || !childId) return [];
  const nowIso = new Date().toISOString();
  const [dueRes, newRes] = await Promise.all([
    supabase
      .from("writing_cards")
      .select("*")
      .eq("child_id", childId)
      .not("due_at", "is", null)
      .lte("due_at", nowIso)
      .order("due_at", { ascending: true })
      .limit(maxDue),
    supabase
      .from("writing_cards")
      .select("*")
      .eq("child_id", childId)
      .is("due_at", null)
      .order("created_at", { ascending: true })
      .limit(maxNew),
  ]);
  if (dueRes.error) console.error("fetchWritingQueue (due):", dueRes.error);
  if (newRes.error) console.error("fetchWritingQueue (new):", newRes.error);
  return [...(dueRes.data || []), ...(newRes.data || [])];
}

// Log one attempt and advance the card's schedule. `review` carries the already
// computed grade/interval/dueAt (from writingSchedule.js) so this stays pure I/O.
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
