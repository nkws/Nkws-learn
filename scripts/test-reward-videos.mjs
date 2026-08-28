// Unit tests for the fallback reward-video selection. Pure Node, no deps.
// Run: node scripts/test-reward-videos.mjs
import { levelBand, pickRewardVideo, REWARD_VIDEO_POOL } from "../src/utils/rewardVideos.js";

let passed = 0;
let failed = 0;
function check(name, cond) {
  if (cond) { passed++; console.log(`  ✓ ${name}`); }
  else { failed++; console.log(`  ✗ ${name}`); }
}

console.log("Age-band mapping");
check("n → early", levelBand("n") === "early");
check("k → early", levelBand("k") === "early");
check("p1 → lower", levelBand("p1") === "lower");
check("p2 → lower", levelBand("p2") === "lower");
check("p3 → middle", levelBand("p3") === "middle");
check("p4 → middle", levelBand("p4") === "middle");
check("p5 → upper", levelBand("p5") === "upper");
check("p6 → upper", levelBand("p6") === "upper");

console.log("Nothing plays until an entry is verified");
check("seed pool returns null (all verified:false)", pickRewardVideo("p1") === null);
check("early band also null before verification", pickRewardVideo("n") === null);

console.log("Selection once entries are verified");
// Activate two entries in the 'lower' (p1/p2) band for the test.
REWARD_VIDEO_POOL.lower.push(
  { id: "AAAAAAAAAAA", verified: true, title: "test-a" },
  { id: "BBBBBBBBBBB", verified: true, title: "test-b" },
);
const got = pickRewardVideo("p1");
check("returns a verified id", got === "AAAAAAAAAAA" || got === "BBBBBBBBBBB");
check("unverified entries with empty id are never returned", got.length === 11);

console.log("Never repeats the previous reward when an alternative exists");
let repeated = false;
for (let i = 0; i < 50; i++) {
  if (pickRewardVideo("p1", "AAAAAAAAAAA") === "AAAAAAAAAAA") repeated = true;
}
check("excludeId is avoided across 50 draws", repeated === false);
check("excluded draw returns the other verified id", pickRewardVideo("p1", "AAAAAAAAAAA") === "BBBBBBBBBBB");

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
