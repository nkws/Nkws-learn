import { shuffle } from "../utils/helpers";
import { buildModuleQuestions } from "../utils/kokoEngine";

// Paper configs. Each questionRef pulls `count` questions from the module's
// existing builder; the topicId is used by the scorecard to deep-link to the
// drill module for weak topics. questionRef counts must sum to the paper's
// nominal question count.
export const MOCK_PAPERS = [
  {
    id: "p6-math-paper-1",
    level: "p6",
    subject: "math",
    title: "P6 Math PSLE Practice — Paper 1",
    description: "20 mixed-topic MCQs covering the core PSLE Math syllabus. 30-minute time limit.",
    durationMin: 30,
    questionRefs: [
      { moduleId: "p6m-ra1", topicId: "p6-ratio", topicTitle: "Ratio", count: 3 },
      { moduleId: "p6m-al1", topicId: "p6-algebra", topicTitle: "Algebra", count: 3 },
      { moduleId: "p6m-pe1", topicId: "p6-percentage", topicTitle: "Percentage", count: 3 },
      { moduleId: "p6m-st1", topicId: "p6-speed", topicTitle: "Speed, Distance & Time", count: 3 },
      { moduleId: "p6m-fw1", topicId: "p6-fractions", topicTitle: "Fractions", count: 2 },
      { moduleId: "p6m-vo1", topicId: "p6-volume", topicTitle: "Volume", count: 2 },
      { moduleId: "p6m-ge1", topicId: "p6-geometry", topicTitle: "Angles", count: 2 },
      { moduleId: "p6m-pc1", topicId: "p6-piecharts", topicTitle: "Pie Charts", count: 2 },
    ],
  },
  {
    id: "p6-math-paper-2",
    level: "p6",
    subject: "math",
    title: "P6 Math PSLE Practice — Paper 2",
    description: "20 harder mixed-topic questions drawing from PSLE word-problem modules. 30-minute time limit.",
    durationMin: 30,
    questionRefs: [
      { moduleId: "p6m-ra2", topicId: "p6-ratio", topicTitle: "Ratio Word Problems", count: 3 },
      { moduleId: "p6m-al2", topicId: "p6-algebra", topicTitle: "Algebra Word Problems", count: 3 },
      { moduleId: "p6m-pe2", topicId: "p6-percentage", topicTitle: "Percentage Word Problems", count: 3 },
      { moduleId: "p6m-bm1", topicId: "p6-barmodels", topicTitle: "Bar Model Heuristics", count: 3 },
      { moduleId: "p6m-fw1", topicId: "p6-fractions", topicTitle: "Fractions", count: 3 },
      { moduleId: "p6m-st1", topicId: "p6-speed", topicTitle: "Speed, Distance & Time", count: 3 },
      { moduleId: "p6m-ge1", topicId: "p6-geometry", topicTitle: "Angles", count: 2 },
    ],
  },
];

export function getPapersForLevel(level, subject) {
  return MOCK_PAPERS.filter((p) => p.level === level && p.subject === subject);
}

export function getPaper(id) {
  return MOCK_PAPERS.find((p) => p.id === id);
}

// Freemium gating: first paper for each level+subject is free; the rest are Plus-only.
export function isPaperLocked(paper, isPlus) {
  if (isPlus) return false;
  const siblings = getPapersForLevel(paper.level, paper.subject);
  const idx = siblings.findIndex((p) => p.id === paper.id);
  return idx > 0;
}

// Pull `count` questions from each referenced module, tag each with its source
// topic, then shuffle the whole set so questions aren't grouped by topic.
export function buildPaperQuestions(paper) {
  const all = [];
  for (const ref of paper.questionRefs) {
    const qs = buildModuleQuestions(ref.moduleId).slice(0, ref.count);
    for (const q of qs) {
      all.push({
        ...q,
        _moduleId: ref.moduleId,
        _topicId: ref.topicId,
        _topicTitle: ref.topicTitle,
      });
    }
  }
  return shuffle(all);
}

export function getTotalLevelsWithPapers() {
  const levels = new Set(MOCK_PAPERS.map((p) => p.level));
  return Array.from(levels);
}

export function levelHasPapers(level) {
  return MOCK_PAPERS.some((p) => p.level === level);
}
