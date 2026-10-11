// Unit tests for the Character Writing lesson/queue builders. Pure Node.
// Run: node scripts/test-writing-queue.mjs
import { buildLessons, buildQueue } from "../src/utils/writingQueue.js";

let passed = 0, failed = 0;
const check = (n, c) => { if (c) { passed++; console.log(`  ✓ ${n}`); } else { failed++; console.log(`  ✗ ${n}`); } };

const NOW = Date.parse("2026-03-10T00:00:00Z");
const iso = (ms) => new Date(ms).toISOString();
const DAY = 86400000;

const cards = [
  { id: "a", lesson_tag: "P1-L1", level: "P1", lesson_seq: 1, word_seq: 1, due_at: null },             // new
  { id: "b", lesson_tag: "P1-L1", level: "P1", lesson_seq: 1, word_seq: 2, due_at: null },             // new
  { id: "c", lesson_tag: "P1-L1", level: "P1", lesson_seq: 1, word_seq: 3, due_at: iso(NOW - DAY) },   // due
  { id: "d", lesson_tag: "P1-L1", level: "P1", lesson_seq: 1, word_seq: 4, due_at: iso(NOW + DAY) },   // learned
  { id: "e", lesson_tag: "P1-L2", level: "P1", lesson_seq: 2, word_seq: 1, due_at: null },             // new
];

console.log("buildLessons");
const lessons = buildLessons(cards, NOW);
check("two lessons, sorted by lesson_seq", lessons.length === 2 && lessons[0].lesson_tag === "P1-L1" && lessons[1].lesson_tag === "P1-L2");
check("L1 counts: total 4, new 2, due 1, learned 1",
  lessons[0].total === 4 && lessons[0].new === 2 && lessons[0].due === 1 && lessons[0].learned === 1);
check("L2 counts: total 1, new 1", lessons[1].total === 1 && lessons[1].new === 1);

console.log("buildQueue");
const all = buildQueue(cards, { nowMs: NOW });
check("due before new", all[0].id === "c");
check("new follow in lesson/word order (a,b,e)", all[1].id === "a" && all[2].id === "b" && all[3].id === "e");
check("learned card excluded", !all.some((c) => c.id === "d"));

const scoped = buildQueue(cards, { nowMs: NOW, lessonTag: "P1-L1" });
check("lesson scope keeps only that lesson", scoped.every((c) => c.lesson_tag === "P1-L1") && scoped.length === 3);

const capped = buildQueue(cards, { nowMs: NOW, maxNew: 1 });
check("maxNew caps new cards", capped.filter((c) => !c.due_at).length === 1);

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
