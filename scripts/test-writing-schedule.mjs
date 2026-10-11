// Unit tests for character-writing review scheduling (4-grade). Pure Node.
// Run: node scripts/test-writing-schedule.mjs
import { gradeAttempt, nextIntervalDays, dueAt, scheduleReview } from "../src/utils/writingSchedule.js";

let passed = 0;
let failed = 0;
function check(name, cond) {
  if (cond) { passed++; console.log(`  ✓ ${name}`); }
  else { failed++; console.log(`  ✗ ${name}`); }
}

console.log("gradeAttempt (again/hard/good/easy)");
check("hint used -> again", gradeAttempt({ totalMistakes: 0, charCount: 1, hintUsed: true }) === "again");
check("3 mistakes / 1 char (avg 3) -> again", gradeAttempt({ totalMistakes: 3, charCount: 1, hintUsed: false }) === "again");
check("6 mistakes / 2 chars (avg 3) -> again", gradeAttempt({ totalMistakes: 6, charCount: 2, hintUsed: false }) === "again");
check("2 mistakes / 1 char (avg 2) -> hard", gradeAttempt({ totalMistakes: 2, charCount: 1, hintUsed: false }) === "hard");
check("4 mistakes / 2 chars (avg 2) -> hard", gradeAttempt({ totalMistakes: 4, charCount: 2, hintUsed: false }) === "hard");
check("1 mistake / 1 char -> good", gradeAttempt({ totalMistakes: 1, charCount: 1, hintUsed: false }) === "good");
check("3 mistakes / 2 chars (avg 1.5) -> good", gradeAttempt({ totalMistakes: 3, charCount: 2, hintUsed: false }) === "good");
check("0 mistakes, no hint -> easy", gradeAttempt({ totalMistakes: 0, charCount: 1, hintUsed: false }) === "easy");

console.log("nextIntervalDays");
check("again -> 1", nextIntervalDays("again", 10) === 1);
check("hard, prev 0 -> 2", nextIntervalDays("hard", 0) === 2);
check("hard, prev 4 -> 6", nextIntervalDays("hard", 4) === 6);
check("hard, prev 5 -> 8 (round 7.5)", nextIntervalDays("hard", 5) === 8);
check("good, prev 0 -> 3", nextIntervalDays("good", 0) === 3);
check("good, prev 3 -> 6", nextIntervalDays("good", 3) === 6);
check("easy, prev 0 -> 7", nextIntervalDays("easy", 0) === 7);
check("easy, prev 7 -> 21", nextIntervalDays("easy", 7) === 21);

console.log("dueAt — Singapore day boundary (UTC+8, no DST)");
{
  const now = Date.parse("2026-01-01T02:00:00Z"); // 10:00 SGT
  check("interval 7 -> 2026-01-07T16:00:00Z", dueAt(now, 7).toISOString() === "2026-01-07T16:00:00.000Z");
}
{
  const now = Date.parse("2026-01-01T17:00:00Z"); // 2026-01-02 01:00 SGT
  check("late-UTC uses SGT date -> 2026-01-02T16:00:00Z", dueAt(now, 1).toISOString() === "2026-01-02T16:00:00.000Z");
}

console.log("scheduleReview — acceptance");
{
  const now = Date.parse("2026-03-10T03:00:00Z"); // 11:00 SGT
  const perfect = scheduleReview({ prevIntervalDays: 0, totalMistakes: 0, charCount: 1, hintUsed: false, now });
  check("0 mistakes -> easy", perfect.grade === "easy");
  check("0 mistakes schedules >= 7 days", perfect.intervalDays >= 7);
  check("0 mistakes due = 2026-03-16T16:00:00Z", perfect.dueAt.toISOString() === "2026-03-16T16:00:00.000Z");

  const hinted = scheduleReview({ prevIntervalDays: 20, totalMistakes: 0, charCount: 1, hintUsed: true, now });
  check("hint -> again, interval 1", hinted.grade === "again" && hinted.intervalDays === 1);
  check("hint due = next SGT midnight (2026-03-10T16:00:00Z)", hinted.dueAt.toISOString() === "2026-03-10T16:00:00.000Z");

  check("2 mistakes / 1 char -> hard", scheduleReview({ totalMistakes: 2, charCount: 1, now }).grade === "hard");
  check("1 mistake / 1 char -> good", scheduleReview({ totalMistakes: 1, charCount: 1, now }).grade === "good");
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
