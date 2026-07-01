// Unit tests for the spelling/听写 sync merge logic. Pure Node, no deps.
// Run: node scripts/test-spelling-merge.mjs
import { mergeSpellingLists, cloudRowToLocal } from "../src/utils/spellingMerge.js";
import { listKind, sortListsByOrder } from "../src/utils/spellingKinds.js";

let passed = 0;
let failed = 0;

function eq(actual, expected) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}
function check(name, cond) {
  if (cond) { passed++; console.log(`  ✓ ${name}`); }
  else { failed++; console.log(`  ✗ ${name}`); }
}

// Helpers to build local lists and cloud rows.
const localList = (id, updatedAt, extra = {}) => ({
  id, title: id, lang: "en", childId: null, words: [], createdAt: 1, updatedAt, ...extra,
});
const cloudRow = (id, updatedAtMs, extra = {}) => ({
  id, title: id, lang: "en", child_id: null, words: [],
  created_at: new Date(1).toISOString(),
  updated_at: new Date(updatedAtMs).toISOString(),
  deleted: false, ...extra,
});

console.log("Scenario 1: cloud has a new list this device has never seen");
{
  const local = [localList("a", 1000)];
  const cloud = [cloudRow("a", 1000), cloudRow("b", 2000, { title: "b", words: ["cat"] })];
  const { lists, changed, toPush } = mergeSpellingLists(local, cloud);
  check("pulls the new list 'b'", lists.some((l) => l.id === "b"));
  check("'b' has its words", eq(lists.find((l) => l.id === "b").words, ["cat"]));
  check("marks changed", changed === true);
  check("nothing to push (both exist in cloud)", toPush.length === 0);
}

console.log("Scenario 2: cloud edit is newer than local -> local updated");
{
  const local = [localList("a", 1000, { words: ["old"] })];
  const cloud = [cloudRow("a", 5000, { words: ["new", "words"] })];
  const { lists, changed } = mergeSpellingLists(local, cloud);
  check("adopts newer cloud words", eq(lists.find((l) => l.id === "a").words, ["new", "words"]));
  check("marks changed", changed === true);
}

console.log("Scenario 3: local edit is newer than cloud -> local WINS (no clobber)");
{
  const local = [localList("a", 9000, { words: ["fresh-local-edit"] })];
  const cloud = [cloudRow("a", 5000, { words: ["stale-cloud"] })];
  const { lists, changed } = mergeSpellingLists(local, cloud);
  check("keeps the fresh local edit", eq(lists.find((l) => l.id === "a").words, ["fresh-local-edit"]));
  check("reports no change", changed === false);
}

console.log("Scenario 4: cloud soft-delete -> list removed locally");
{
  const local = [localList("a", 1000), localList("b", 1000)];
  const cloud = [cloudRow("a", 1000), cloudRow("b", 2000, { deleted: true })];
  const { lists, changed } = mergeSpellingLists(local, cloud);
  check("removes soft-deleted 'b'", !lists.some((l) => l.id === "b"));
  check("keeps 'a'", lists.some((l) => l.id === "a"));
  check("marks changed", changed === true);
}

console.log("Scenario 5: local-only list (made offline) -> flagged for push");
{
  const local = [localList("a", 1000), localList("offline", 3000)];
  const cloud = [cloudRow("a", 1000)];
  const { toPush, changed } = mergeSpellingLists(local, cloud);
  check("flags 'offline' to push", toPush.length === 1 && toPush[0].id === "offline");
  check("no local change needed", changed === false);
}

console.log("Scenario 6: identical state -> no-op (avoids needless re-render)");
{
  const local = [localList("a", 1000)];
  const cloud = [cloudRow("a", 1000)];
  const { changed, toPush } = mergeSpellingLists(local, cloud);
  check("no change", changed === false);
  check("nothing to push", toPush.length === 0);
}

console.log("Scenario 7: word edit propagates (add a word on device A -> device B)");
{
  // Device B's local copy has 2 words at t=1000; device A added a 3rd at t=4000.
  const local = [localList("wk5", 1000, { words: ["dog", "cat"] })];
  const cloud = [cloudRow("wk5", 4000, { words: ["dog", "cat", "fish"] })];
  const { lists } = mergeSpellingLists(local, cloud);
  check("device B now sees the added word", eq(lists.find((l) => l.id === "wk5").words, ["dog", "cat", "fish"]));
}

console.log("Scenario 8: cloudRowToLocal shape conversion");
{
  const row = cloudRow("x", 1234, { child_id: "child-1", lang: "zh", words: ["学校"] });
  const l = cloudRowToLocal(row);
  check("maps child_id -> childId", l.childId === "child-1");
  check("keeps lang + words", l.lang === "zh" && eq(l.words, ["学校"]));
  check("updatedAt is a number (ms)", typeof l.updatedAt === "number" && l.updatedAt === 1234);
}

console.log("Scenario 9: list kinds keep pinyin independent from 听写");
{
  // Legacy rows carried only lang; they must migrate to a concrete kind.
  const enRow = cloudRowToLocal(cloudRow("en1", 1, { lang: "en" }));
  const zhRow = cloudRowToLocal(cloudRow("zh1", 1, { lang: "zh" }));
  const pyRow = cloudRowToLocal(cloudRow("py1", 1, { lang: "zh", kind: "pinyin" }));
  check("legacy English row -> spelling", enRow.kind === "spelling");
  check("legacy Chinese row -> tingxie (听写)", zhRow.kind === "tingxie");
  check("explicit pinyin kind preserved", pyRow.kind === "pinyin");

  // listKind derives the same way for local lists lacking a kind.
  check("listKind: en list -> spelling", listKind({ lang: "en" }) === "spelling");
  check("listKind: zh list -> tingxie", listKind({ lang: "zh" }) === "tingxie");
  check("listKind: explicit kind wins", listKind({ lang: "zh", kind: "pinyin" }) === "pinyin");

  // A 听写 list and a pinyin list are different collections, never merged.
  const tingxie = { id: "a", lang: "zh", kind: "tingxie", words: ["猫"] };
  const pinyin = { id: "b", lang: "zh", kind: "pinyin", words: ["猫"] };
  check("same word in two kinds are separate lists",
    listKind(tingxie) !== listKind(pinyin));
}

console.log("Scenario 10: list arrangement order");
{
  // Explicit order wins, highest first (top of the screen).
  const a = { id: "a", order: 300, createdAt: 1 };
  const b = { id: "b", order: 100, createdAt: 2 };
  const c = { id: "c", order: 200, createdAt: 3 };
  const sorted = sortListsByOrder([a, b, c]).map((l) => l.id);
  check("sorts by order desc", eq(sorted, ["a", "c", "b"]));

  // Lists without an order fall back to createdAt (newest first).
  const legacy = [
    { id: "old", createdAt: 100 },
    { id: "new", createdAt: 900 },
  ];
  check("legacy falls back to newest-first", eq(sortListsByOrder(legacy).map((l) => l.id), ["new", "old"]));

  // An arranged list (order ≥ now) always sits above an unarranged one.
  const mixed = [
    { id: "arranged", order: Date.parse("2030-01-01") },
    { id: "unarranged", createdAt: Date.parse("2026-01-01") },
  ];
  check("arranged sorts above unarranged", sortListsByOrder(mixed)[0].id === "arranged");

  // sortListsByOrder must not mutate its input.
  const input = [a, b, c];
  sortListsByOrder(input);
  check("does not mutate input array", input[0].id === "a");
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed === 0 ? 0 : 1);
