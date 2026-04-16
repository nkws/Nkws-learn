import { shuffle } from "../../utils/helpers";

export const P6_CLOZE_INTRO = {
  "p6e-cl1": {
    title: "Cloze Practice",
    pages: [
      { text: "Cloze passages test how well you understand context. For each blank, choose the word that fits the meaning AND the grammar.", emoji: "📖 ✏️" },
      { text: "Read the WHOLE sentence first — clues are usually in the words around the blank!", emoji: "🔍 ➡️ ⬅️" },
      { text: "Watch tense, subject-verb agreement, and word collocations (e.g. 'good AT', 'afraid OF').", emoji: "📐 🧠" },
      { text: "If two words look right, pick the one that fits BEST in context — not just the one that 'sounds nice'.", emoji: "🎯" },
      { text: "PSLE tip: don't change your answer at the last minute unless you're sure. Trust your first careful read!", emoji: "✅" },
    ],
  },
};

function buildP6eCl1() {
  return shuffle([
    { q: "Despite the heavy rain, the team ___ to win the match.", a: "managed", choices: ["managed", "manages", "managing"] },
    { q: "If I ___ harder, I would have passed the exam.", a: "had studied", choices: ["had studied", "studied", "would study"] },
    { q: "She is responsible ___ keeping the classroom tidy.", a: "for", choices: ["for", "of", "with"] },
    { q: "The teacher, along with her students, ___ planning the trip.", a: "is", choices: ["is", "are", "were"] },
    { q: "Neither the principal nor the teachers ___ aware of the issue.", a: "were", choices: ["were", "was", "is"] },
    { q: "He spoke so softly that nobody could hear ___.", a: "him", choices: ["him", "his", "he"] },
    { q: "The cake, ___ was baked by my mother, tasted delicious.", a: "which", choices: ["which", "who", "whose"] },
    { q: "She has been living in Singapore ___ 2010.", a: "since", choices: ["since", "for", "from"] },
    { q: "The boy was punished ___ breaking the window.", a: "for", choices: ["for", "of", "by"] },
    { q: "By the time we arrived at the cinema, the movie ___ already started.", a: "had", choices: ["had", "has", "was"] },
    { q: "She is one of the students who ___ always early.", a: "are", choices: ["are", "is", "be"] },
    { q: "The villagers were warned to evacuate ___ the storm hit.", a: "before", choices: ["before", "until", "while"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6e-cl1": buildP6eCl1 };
export const P6_CLOZE_QUESTION_COUNTS = { "p6e-cl1": 12 };
export function buildClozeQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
