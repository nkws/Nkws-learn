// Seed the MOE Primary 1 writing-character lists (《欢乐伙伴》识写字, 一上 + 一下)
// for one learner, in syllabus order, for the Character Writing drill.
// Source: MOE 《欢乐伙伴》小学华文生字表 (official). Single characters; pinyin is
// derived at render time, so it isn't stored here.
//
// Usage (seed): SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
//                 node scripts/seed-moe-p1-writing.mjs <childId>
// Usage (print SQL, no network): node scripts/seed-moe-p1-writing.mjs --sql <childId>
import { fileURLToPath } from "node:url";

export const LEVEL = "P1";

// seq = lesson order within P1; tag groups a lesson; chars in lesson order.
export const LESSONS = [
  { seq: 1,  tag: "P1-L1",  chars: ["一","五"] },
  { seq: 2,  tag: "P1-L2",  chars: ["木","八","大","土","女"] },
  { seq: 3,  tag: "P1-L3",  chars: ["立","几","七","个","可","去"] },
  { seq: 4,  tag: "P1-L4",  chars: ["巴","士","四","只","子","十","日","了"] },
  { seq: 5,  tag: "P1-L5",  chars: ["太","书","王","来","早","午","三","半"] },
  { seq: 6,  tag: "P1-L6",  chars: ["口","目","手","我","头","自","己","走"] },
  { seq: 7,  tag: "P1-L7",  chars: ["工","厂","门","二","人","问","儿","本"] },
  { seq: 8,  tag: "P1-L8",  chars: ["山","心","天","上","六","九","下","小"] },
  { seq: 9,  tag: "P1-L9",  chars: ["文","回","水","少","也","写","具","在"] },
  { seq: 10, tag: "P1-L10", chars: ["开","关","有","白","云","生","月","火"] },
  { seq: 11, tag: "P1-L11", chars: ["长","左","右","中","间","面","后","坐"] },
  { seq: 12, tag: "P1-L12", chars: ["牙","东","西","用","毛","巾","又","的","你"] },
  { seq: 13, tag: "P1-L13", chars: ["双","衣","床","包","里","尺","是","好","快","和"] },
  { seq: 14, tag: "P1-L14", chars: ["兄","父","母","她","会","他","们","地","马","干"] },
  { seq: 15, tag: "P1-L15", chars: ["两","元","吃","虫","妈","今","吗","米","青"] },
  { seq: 16, tag: "P1-L16", chars: ["果","画","飞","爸","买","田","以","它","刀"] },
  { seq: 17, tag: "P1-L17", chars: ["昨","明","乐","老","师","这","气","台","每"] },
  { seq: 18, tag: "P1-L18", chars: ["爪","尖","什","么","力","园","站","叫","再"] },
  { seq: 19, tag: "P1-L19", chars: ["广","公","常","看","到","皮","高","兴","玩"] },
];

export function buildRows(childId) {
  const rows = [];
  for (const L of LESSONS) {
    L.chars.forEach((ch, i) => {
      rows.push({ child_id: childId, word: ch, level: LEVEL, lesson_tag: L.tag, lesson_seq: L.seq, word_seq: i + 1 });
    });
  }
  return rows;
}

export function buildInsertSql(childId) {
  const vals = buildRows(childId)
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
    .upsert(buildRows(childId), { onConflict: "child_id,word,lesson_tag" })
    .select("word");
  if (error) { console.error("Seed failed:", error); process.exit(1); }
  console.log(`Seeded ${data.length} P1 writing cards for child ${childId}.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
