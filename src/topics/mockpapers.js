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
  {
    id: "p6-english-paper-1",
    level: "p6",
    subject: "english",
    title: "P6 English PSLE Practice — Paper 1",
    description: "20 mixed-skill questions: grammar, vocabulary, cloze, and editing. 30-minute time limit.",
    durationMin: 30,
    questionRefs: [
      { moduleId: "p6e-gr1", topicId: "p6-grammar", topicTitle: "Tenses & Agreement", count: 4 },
      { moduleId: "p6e-gr2", topicId: "p6-grammar", topicTitle: "Conjunctions & Relatives", count: 4 },
      { moduleId: "p6e-vc1", topicId: "p6-vocabulary", topicTitle: "Vocabulary", count: 4 },
      { moduleId: "p6e-cl1", topicId: "p6-cloze", topicTitle: "Cloze", count: 4 },
      { moduleId: "p6e-ed1", topicId: "p6-editing", topicTitle: "Editing", count: 4 },
    ],
  },
  {
    id: "p6-english-paper-2",
    level: "p6",
    subject: "english",
    title: "P6 English PSLE Practice — Paper 2",
    description: "20 cloze and editing-heavy questions — the hardest PSLE English sections. 30-minute time limit.",
    durationMin: 30,
    questionRefs: [
      { moduleId: "p6e-cl1", topicId: "p6-cloze", topicTitle: "Cloze", count: 6 },
      { moduleId: "p6e-ed1", topicId: "p6-editing", topicTitle: "Editing", count: 6 },
      { moduleId: "p6e-gr2", topicId: "p6-grammar", topicTitle: "Conjunctions & Relatives", count: 4 },
      { moduleId: "p6e-vc1", topicId: "p6-vocabulary", topicTitle: "Vocabulary", count: 4 },
    ],
  },
  {
    id: "p6-science-paper-1",
    level: "p6",
    subject: "science",
    title: "P6 Science PSLE Practice — Paper 1",
    description: "20 mixed-topic Science questions across all PSLE themes. 30-minute time limit.",
    durationMin: 30,
    questionRefs: [
      { moduleId: "p6s-ph1", topicId: "p6-photosynthesis", topicTitle: "Photosynthesis", count: 3 },
      { moduleId: "p6s-fc1", topicId: "p6-forces", topicTitle: "Types of Forces", count: 3 },
      { moduleId: "p6s-fc2", topicId: "p6-forces", topicTitle: "Effects of Forces", count: 2 },
      { moduleId: "p6s-fd1", topicId: "p6-food-chains", topicTitle: "Food Chains", count: 3 },
      { moduleId: "p6s-fd2", topicId: "p6-food-chains", topicTitle: "Food Webs", count: 2 },
      { moduleId: "p6s-ev1", topicId: "p6-environment", topicTitle: "Adaptations", count: 3 },
      { moduleId: "p6s-ev2", topicId: "p6-environment", topicTitle: "Man's Impact", count: 2 },
      { moduleId: "p6s-re1", topicId: "p6-revision", topicTitle: "Mixed Revision", count: 2 },
    ],
  },
  {
    id: "p6-science-paper-2",
    level: "p6",
    subject: "science",
    title: "P6 Science PSLE Practice — Paper 2",
    description: "20 questions weighted toward harder mixed-revision and applied items. 30-minute time limit.",
    durationMin: 30,
    questionRefs: [
      { moduleId: "p6s-re1", topicId: "p6-revision", topicTitle: "Mixed Revision", count: 5 },
      { moduleId: "p6s-fc2", topicId: "p6-forces", topicTitle: "Effects of Forces", count: 3 },
      { moduleId: "p6s-fd2", topicId: "p6-food-chains", topicTitle: "Food Webs", count: 3 },
      { moduleId: "p6s-ev2", topicId: "p6-environment", topicTitle: "Man's Impact", count: 3 },
      { moduleId: "p6s-ph1", topicId: "p6-photosynthesis", topicTitle: "Photosynthesis", count: 3 },
      { moduleId: "p6s-ev1", topicId: "p6-environment", topicTitle: "Adaptations", count: 3 },
    ],
  },
  {
    id: "p6-chinese-paper-1",
    level: "p6",
    subject: "chinese",
    title: "P6 华文 PSLE Practice — Paper 1",
    description: "20道综合题：成语、语法、病句、近反义词。30分钟。",
    durationMin: 30,
    questionRefs: [
      { moduleId: "p6c-vc1", topicId: "p6-cn-vocab", topicTitle: "成语 (一)", count: 4 },
      { moduleId: "p6c-vc2", topicId: "p6-cn-vocab", topicTitle: "成语 (二)", count: 4 },
      { moduleId: "p6c-gr1", topicId: "p6-cn-grammar", topicTitle: "语法", count: 4 },
      { moduleId: "p6c-bj1", topicId: "p6-cn-bingju", topicTitle: "病句", count: 4 },
      { moduleId: "p6c-sy1", topicId: "p6-cn-synonyms", topicTitle: "近反义词", count: 4 },
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
