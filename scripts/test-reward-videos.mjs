// Unit tests for the parent reward-video list logic. Pure Node, no deps.
// Run: node scripts/test-reward-videos.mjs
import { addToPool, removeFromPool, pickFromPool } from "../src/utils/rewardVideos.js";

let passed = 0;
let failed = 0;
function check(name, cond) {
  if (cond) { passed++; console.log(`  ✓ ${name}`); }
  else { failed++; console.log(`  ✗ ${name}`); }
}

console.log("Adding links");
{
  let list = [];
  let r = addToPool(list, "https://www.youtube.com/watch?v=abcdefghijk");
  check("parses watch?v= link", r.error === null && r.list.length === 1 && r.list[0].id === "abcdefghijk");
  list = r.list;

  r = addToPool(list, "https://youtu.be/ABCDEFGHIJK");
  check("parses youtu.be link", r.error === null && r.list.length === 2 && r.list[1].id === "ABCDEFGHIJK");
  list = r.list;

  r = addToPool(list, "not a link");
  check("rejects invalid input", r.error === "invalid" && r.list.length === 2);

  r = addToPool(list, "https://youtu.be/abcdefghijk");
  check("rejects duplicate id", r.error === "duplicate" && r.list.length === 2);
}

console.log("Removing");
{
  const list = [{ id: "aaaaaaaaaaa" }, { id: "bbbbbbbbbbb" }];
  const next = removeFromPool(list, "aaaaaaaaaaa");
  check("removes by id", next.length === 1 && next[0].id === "bbbbbbbbbbb");
}

console.log("Picking");
{
  check("empty list -> null", pickFromPool([]) === null);
  check("single item -> that item", pickFromPool([{ id: "solo000solo" }]) === "solo000solo");

  const list = [{ id: "aaaaaaaaaaa" }, { id: "bbbbbbbbbbb" }];
  let repeated = false;
  for (let i = 0; i < 50; i++) if (pickFromPool(list, "aaaaaaaaaaa") === "aaaaaaaaaaa") repeated = true;
  check("avoids the previous video when an alternative exists", repeated === false);
  check("single-item list still returns even if it equals excludeId", pickFromPool([{ id: "only0000000" }], "only0000000") === "only0000000");
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
