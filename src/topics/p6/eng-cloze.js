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
    { q: "Despite the heavy rain, the team ___ to win the match.", a: "managed", choices: ["managed", "manages", "managing"], explain: "The blank tests the past simple. 'Despite the heavy rain' describes one completed action, so use 'managed'. 'Manages' is present and 'managing' is not a finite verb here." },
    { q: "If I ___ harder, I would have passed the exam.", a: "had studied", choices: ["had studied", "studied", "would study"], explain: "This is a third conditional about an unreal past: 'if + past perfect, would have + past participle'. The 'would have passed' half forces the past perfect 'had studied' in the if-clause." },
    { q: "She is responsible ___ keeping the classroom tidy.", a: "for", choices: ["for", "of", "with"], explain: "This is fixed collocation: the adjective 'responsible' always pairs with the preposition 'for'. You learn these word partnerships as a set, not by meaning." },
    { q: "The teacher, along with her students, ___ planning the trip.", a: "is", choices: ["is", "are", "were"], explain: "Subject-verb agreement. The phrase 'along with her students' is extra information, not part of the subject. The real subject is the singular 'teacher', so use 'is'." },
    { q: "Neither John nor his sister ___ at home this afternoon.", a: "is", choices: ["is", "are", "were"], explain: "With 'neither...nor', the verb agrees with the nearer subject. 'His sister' is singular, so use 'is'. The present time ('this afternoon') rules out 'were'." },
    { q: "He spoke so softly that nobody could hear ___.", a: "him", choices: ["him", "his", "he"], explain: "After the verb 'hear' you need an object pronoun, not a subject pronoun. 'Him' is the object form; 'he' is a subject and 'his' is possessive." },
    { q: "The cake, ___ was baked by my mother, tasted delicious.", a: "which", choices: ["which", "who", "whose"], explain: "A relative pronoun must match its noun. A cake is a thing, so use 'which'. 'Who' is only for people and 'whose' shows possession." },
    { q: "She has been living in Singapore ___ 2010.", a: "since", choices: ["since", "for", "from"], explain: "With the present perfect, use 'since' for a starting point in time (a year or date) and 'for' for a length of time. '2010' is a point, so 'since'." },
    { q: "The boy was punished ___ breaking the window.", a: "for", choices: ["for", "of", "by"], explain: "The verb 'punish' takes 'for' to give the reason. 'By' would introduce who did the punishing, not the cause, so it does not fit here." },
    { q: "By the time we arrived at the cinema, the movie ___ already started.", a: "had", choices: ["had", "has", "was"], explain: "When one past action happens before another, the earlier one takes the past perfect: 'had started'. The movie started before 'we arrived', so use 'had'." },
    { q: "She is the only student who ___ always early.", a: "is", choices: ["is", "are", "was"], explain: "In a relative clause, the verb agrees with the noun it describes. 'Who' refers to the singular 'student', and the sentence is present tense, so use 'is'." },
    { q: "The villagers were warned to evacuate ___ the storm hit.", a: "before", choices: ["before", "until", "while"], explain: "Choose the connector by meaning. Evacuating happens earlier than the storm, so 'before' shows the correct order. 'Until' and 'while' would change the timing." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6e-cl1": buildP6eCl1 };
export const P6_CLOZE_QUESTION_COUNTS = { "p6e-cl1": 12 };
export function buildClozeQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
