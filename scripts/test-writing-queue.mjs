// Unit tests for the Character Writing syllabus/lesson/queue builders. Pure Node.
// Run: node scripts/test-writing-queue.mjs
import { syllabusOf, buildSyllabusProgress, buildLessons, buildQueue } from "../src/utils/writingQueue.js";

let passed = 0, failed = 0;
const check = (n, c) => { if (c) { passed++; console.log(`  ✓ ${n}`); } else { failed++; console.log(`  ✗ ${n}`); } };

const NOW = Date.parse("2026-03-10T00:00:00Z");
const iso = (ms) => new Date(ms).toISOString();
const DAY = 86400000;

// Two syllabi mixed together.
const cards = [
  { id: "a", lesson_tag: "hcl-p1::L1", lesson_seq: 1, word_seq: 1, due_at: null },           // new (hcl)
  { id: "b", lesson_tag: "hcl-p1::L1", lesson_seq: 1, word_seq: 2, due_at: null },           // new (hcl)
  { id: "c", lesson_tag: "hcl-p1::L1", lesson_seq: 1, word_seq: 3, due_at: iso(NOW - DAY) }, // due (hcl)
  { id: "d", lesson_tag: "hcl-p1::L2", lesson_seq: 2, word_seq: 1, due_at: iso(NOW + DAY) }, // learned (hcl)
  { id: "e", lesson_tag: "hw-p1::L1",  lesson_seq: 1, word_seq: 1, due_at: null },           // new (hw)
];

console.log("syllabusOf");
check("parses syllabus prefix", syllabusOf(cards[0]) === "hcl-p1" && syllabusOf(cards[4]) === "hw-p1");
check("null when no prefix", syllabusOf({ lesson_tag: "P1-L1" }) === null);

console.log("buildSyllabusProgress");
const prog = buildSyllabusProgress(cards, NOW);
check("hcl-p1: total 4, new 2, due 1, learned 1",
  prog["hcl-p1"].total === 4 && prog["hcl-p1"].new === 2 && prog["hcl-p1"].due === 1 && prog["hcl-p1"].learned === 1);
check("hw-p1: total 1, new 1", prog["hw-p1"].total === 1 && prog["hw-p1"].new === 1);

console.log("buildLessons (scoped to a syllabus)");
const lessons = buildLessons(cards, { syllabusId: "hcl-p1", nowMs: NOW });
check("only hcl-p1 lessons, sorted", lessons.length === 2 && lessons[0].lesson_tag === "hcl-p1::L1" && lessons[1].lesson_tag === "hcl-p1::L2");
check("L1 counts: total 3, new 2, due 1", lessons[0].total === 3 && lessons[0].new === 2 && lessons[0].due === 1);

console.log("buildQueue (scoped to a syllabus)");
const q = buildQueue(cards, { syllabusId: "hcl-p1", nowMs: NOW });
check("only hcl-p1 cards", q.every((c) => syllabusOf(c) === "hcl-p1"));
check("due before new (c, then a, b)", q[0].id === "c" && q[1].id === "a" && q[2].id === "b");
check("learned excluded", !q.some((c) => c.id === "d"));

const qLesson = buildQueue(cards, { syllabusId: "hcl-p1", lessonTag: "hcl-p1::L1", nowMs: NOW });
check("lesson scope keeps only that lesson", qLesson.every((c) => c.lesson_tag === "hcl-p1::L1") && qLesson.length === 3);
check("maxNew caps new", buildQueue(cards, { syllabusId: "hcl-p1", nowMs: NOW, maxNew: 1 }).filter((c) => !c.due_at).length === 1);

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
