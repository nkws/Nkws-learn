// Unit tests for the spelling/听写 sync merge logic. Pure Node, no deps.
// Run: node scripts/test-spelling-merge.mjs
import { mergeSpellingLists, cloudRowToLocal } from "../src/utils/spellingMerge.js";

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

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed === 0 ? 0 : 1);
