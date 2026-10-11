// Seed Lesson 37 (Berries, Primary 1 Higher Chinese) character-writing cards
// for one learner. Idempotent: re-running upserts by (child_id, word, lesson_tag).
//
// Usage:
//   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
//     node scripts/seed-writing-l37.mjs <childId>
//
// The service-role key bypasses RLS (same as the app's serverless functions),
// so this can insert rows for the given child without an auth session. Find the
// child's id in Supabase: select id, name from children;
import { createClient } from "@supabase/supabase-js";

const childId = process.argv[2];
if (!childId) {
  console.error("Usage: node scripts/seed-writing-l37.mjs <childId>");
  process.exit(1);
}

const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment.");
  process.exit(1);
}

const LESSON_TAG = "Berries-P1-L37";
const WORDS = [
  { word: "香", pinyin: "xiāng", sentence: "花园里的花很香。" },
  { word: "站", pinyin: "zhàn", sentence: "我们站在门口等妈妈。" },
  { word: "书", pinyin: "shū", sentence: "我每天晚上看书。" },
  { word: "地方", pinyin: "dìfang", sentence: "公园是我最喜欢的地方。" },
  { word: "动作", pinyin: "dòngzuò", sentence: "老师教我们做新的动作。" },
  { word: "看见", pinyin: "kànjiàn", sentence: "我看见一只小鸟在树上。" },
  { word: "变成", pinyin: "biànchéng", sentence: "小蝌蚪变成了青蛙。" },
  { word: "庆祝", pinyin: "qìngzhù", sentence: "我们一起庆祝妹妹的生日。" },
  { word: "自己", pinyin: "zìjǐ", sentence: "我会自己穿鞋子。" },
  { word: "讲", pinyin: "jiǎng", sentence: "爸爸给我讲故事。" },
  { word: "常常", pinyin: "chángcháng", sentence: "我常常和爸爸去游泳。" },
  { word: "高兴", pinyin: "gāoxìng", sentence: "考了一百分，我很高兴。" },
  { word: "附近", pinyin: "fùjìn", sentence: "我家附近有一个公园。" },
  { word: "东西", pinyin: "dōngxi", sentence: "妈妈去超市买东西。" },
  { word: "昨天", pinyin: "zuótiān", sentence: "昨天我去了动物园。" },
];

const supabase = createClient(url, key, { auth: { persistSession: false } });

// Stagger created_at in lesson order (1s apart) so the "new cards" queue, which
// orders by created_at, presents the words in the lesson's order (香 first).
const base = Date.now();
const rows = WORDS.map((w, i) => ({
  child_id: childId,
  lesson_tag: LESSON_TAG,
  created_at: new Date(base - (WORDS.length - i) * 1000).toISOString(),
  ...w,
}));
const { data, error } = await supabase
  .from("writing_cards")
  .upsert(rows, { onConflict: "child_id,word,lesson_tag" })
  .select("word");

if (error) {
  console.error("Seed failed:", error);
  process.exit(1);
}
console.log(`Seeded ${data.length} writing cards for child ${childId} (lesson ${LESSON_TAG}).`);
