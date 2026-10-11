// Seed the MOE Primary 1 writing-character lists (《欢乐伙伴》识写字, 一上 + 一下)
// for one learner. The app auto-loads the same list on first open; this script
// is for backfilling or seeding out-of-band. Shares one data source with the
// app: src/data/writingSyllabus.js.
//
// Usage (seed): SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
//                 node scripts/seed-moe-p1-writing.mjs <childId>
// Usage (print SQL, no network): node scripts/seed-moe-p1-writing.mjs --sql <childId>
import { fileURLToPath } from "node:url";
import { buildWritingRows } from "../src/data/writingSyllabus.js";

export function buildInsertSql(childId) {
  const vals = buildWritingRows(childId)
    .map((r) => `('${r.child_id}','${r.word}','${r.level}','${r.lesson_tag}',${r.lesson_seq},${r.word_seq})`)
    .join(",\n");
  return `insert into public.writing_cards (child_id, word, level, lesson_tag, lesson_seq, word_seq) values\n${vals}\n` +
    `on conflict (child_id, word, lesson_tag) do update set level=excluded.level, lesson_seq=excluded.lesson_seq, word_seq=excluded.word_seq;`;
}

async function main() {
  const args = process.argv.slice(2);
  if (args[0] === "--sql") {
    const childId = args[1];
    if (!childId) { console.error("Usage: node scripts/seed-moe-p1-writing.mjs --sql <childId>"); process.exit(1); }
    console.log(buildInsertSql(childId));
    return;
  }
  const childId = args[0];
  if (!childId) { console.error("Usage: node scripts/seed-moe-p1-writing.mjs <childId>"); process.exit(1); }
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) { console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."); process.exit(1); }
  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase
    .from("writing_cards")
    .upsert(buildWritingRows(childId), { onConflict: "child_id,word,lesson_tag" })
    .select("word");
  if (error) { console.error("Seed failed:", error); process.exit(1); }
  console.log(`Seeded ${data.length} P1 writing cards for child ${childId}.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
