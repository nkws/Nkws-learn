// Unit tests for character-writing review scheduling. Pure Node, no deps.
// Run: node scripts/test-writing-schedule.mjs
import { gradeAttempt, nextIntervalDays, dueAt, scheduleReview } from "../src/utils/writingSchedule.js";

let passed = 0;
let failed = 0;
function check(name, cond) {
  if (cond) { passed++; console.log(`  ✓ ${name}`); }
  else { failed++; console.log(`  ✗ ${name}`); }
}

console.log("gradeAttempt");
check("hint used -> again (even with 0 mistakes)", gradeAttempt({ totalMistakes: 0, charCount: 1, hintUsed: true }) === "again");
check("3 mistakes on 1 char (avg 3) -> again", gradeAttempt({ totalMistakes: 3, charCount: 1, hintUsed: false }) === "again");
check("6 mistakes on 2 chars (avg 3) -> again", gradeAttempt({ totalMistakes: 6, charCount: 2, hintUsed: false }) === "again");
check("0 mistakes, no hint -> easy", gradeAttempt({ totalMistakes: 0, charCount: 1, hintUsed: false }) === "easy");
check("2 mistakes on 1 char -> good", gradeAttempt({ totalMistakes: 2, charCount: 1, hintUsed: false }) === "good");
check("5 mistakes on 2 chars (avg 2.5) -> good", gradeAttempt({ totalMistakes: 5, charCount: 2, hintUsed: false }) === "good");
check("1 mistake on 2 chars (avg 0.5) -> good (mistakes > 0)", gradeAttempt({ totalMistakes: 1, charCount: 2, hintUsed: false }) === "good");

console.log("nextIntervalDays");
check("again -> 1 regardless of prev", nextIntervalDays("again", 10) === 1);
check("good, prev 0 -> 3", nextIntervalDays("good", 0) === 3);
check("good, prev 3 -> 6", nextIntervalDays("good", 3) === 6);
check("good, prev 5 -> 10", nextIntervalDays("good", 5) === 10);
check("easy, prev 0 -> 7", nextIntervalDays("easy", 0) === 7);
check("easy, prev 3 -> 9", nextIntervalDays("easy", 3) === 9);
check("easy, prev 7 -> 21", nextIntervalDays("easy", 7) === 21);

console.log("dueAt — Singapore day boundary (UTC+8, no DST)");
{
  // 2026-01-01 02:00 UTC == 2026-01-01 10:00 SGT. +7 days -> 2026-01-08 00:00 SGT == 2026-01-07 16:00 UTC.
  const now = Date.parse("2026-01-01T02:00:00Z");
  check("interval 7 lands on SGT midnight (2026-01-07T16:00:00Z)",
    dueAt(now, 7).toISOString() === "2026-01-07T16:00:00.000Z");
}
{
  // 2026-01-01 17:00 UTC == 2026-01-02 01:00 SGT (SGT date is the 2nd, UTC date is the 1st).
  // interval 1 -> start of 2026-01-03 SGT == 2026-01-02 16:00 UTC. Confirms SGT date is used, not UTC date.
  const now = Date.parse("2026-01-01T17:00:00Z");
  check("late-UTC-day uses SGT calendar date (2026-01-02T16:00:00Z)",
    dueAt(now, 1).toISOString() === "2026-01-02T16:00:00.000Z");
}

console.log("scheduleReview — acceptance criteria");
{
  const now = Date.parse("2026-03-10T03:00:00Z"); // 11:00 SGT
  const perfect = scheduleReview({ prevIntervalDays: 0, totalMistakes: 0, charCount: 1, hintUsed: false, now });
  check("0 mistakes -> easy", perfect.grade === "easy");
  check("0 mistakes schedules >= 7 days out", perfect.intervalDays >= 7);
  check("0 mistakes due is 7 days later SGT midnight", perfect.dueAt.toISOString() === "2026-03-16T16:00:00.000Z");

  const hinted = scheduleReview({ prevIntervalDays: 20, totalMistakes: 0, charCount: 1, hintUsed: true, now });
  check("hint -> again", hinted.grade === "again");
  check("hint schedules for tomorrow (interval 1)", hinted.intervalDays === 1);
  // now is 11:00 SGT on Mar 10; +1 day = start of Mar 11 SGT = 2026-03-10T16:00:00Z.
  check("hint due is next SGT midnight", hinted.dueAt.toISOString() === "2026-03-10T16:00:00.000Z");
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
