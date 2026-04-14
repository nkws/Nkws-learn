import { shuffle } from "../../utils/helpers";

export const P6_GRAMMAR6_INTRO = {
  "p6e-gr1": {
    title: "Grammar — PSLE Revision",
    pages: [
      { text: "Let's revise all the grammar you need for PSLE — tenses, voices, conditionals, and more!", emoji: "📝 🎯 💪" },
    ],
  },
};

function buildP6eGr1() {
  return shuffle([
    { q: "If I ___ harder, I would have passed.", a: "had studied", choices: ["had studied", "study", "will study"] },
    { q: "If it rains, we ___ stay indoors.", a: "will", choices: ["will", "would", "had"] },
    { q: "She ___, doesn't she?", a: "sings well", choices: ["sings well", "sing well", "sang well"] },
    { q: "He rarely comes late, ___?", a: "does he", choices: ["does he", "doesn't he", "is he"] },
    { q: "The students ___ the exam when the fire alarm rang.", a: "were taking", choices: ["were taking", "took", "take"] },
    { q: "By the time we arrived, the show ___.", a: "had already started", choices: ["had already started", "already starts", "is starting"] },
    { q: "She asked me where I ___.", a: "lived", choices: ["lived", "live", "will live"] },
    { q: "Neither the teacher nor the students ___ present.", a: "were", choices: ["were", "was", "is"] },
    { q: "Each of the boys ___ given a book.", a: "was", choices: ["was", "were", "are"] },
    { q: "The news ___ shocking.", a: "was", choices: ["was", "were", "are"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6eGr2() {
  return shuffle([
    { q: "Change to passive: 'Someone stole my wallet.'", a: "My wallet was stolen", choices: ["My wallet was stolen", "Someone was stolen my wallet", "My wallet stole someone"] },
    { q: "Combine: 'She is smart. She is kind.'", a: "She is not only smart but also kind", choices: ["She is not only smart but also kind", "She is smart so she is kind", "She is smart because she is kind"] },
    { q: "Combine with 'although': 'He was tired. He finished his work.'", a: "Although he was tired, he finished his work", choices: ["Although he was tired, he finished his work", "He was tired although he finished his work", "Although he finished his work, he was tired"] },
    { q: "The modal 'should' expresses?", a: "Advice or obligation", choices: ["Advice or obligation", "Ability", "Permission"] },
    { q: "The modal 'might' expresses?", a: "Possibility", choices: ["Possibility", "Certainty", "Ability"] },
    { q: "'Must' expresses?", a: "Necessity or strong obligation", choices: ["Necessity or strong obligation", "Possibility", "Permission"] },
    { q: "She ___ swim when she was five.", a: "could", choices: ["could", "can", "will"] },
    { q: "___ I borrow your pen?", a: "May", choices: ["May", "Must", "Should"] },
    { q: "You ___ not park here. It is not allowed.", a: "must", choices: ["must", "may", "should"] },
    { q: "He ___ come to the party if he finishes his work.", a: "might", choices: ["might", "must", "shall"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6eVc1() {
  return shuffle([
    { q: "The word 'apprehensive' means?", a: "Anxious or fearful", choices: ["Anxious or fearful", "Happy", "Bored"] },
    { q: "What is a synonym of 'meticulous'?", a: "Thorough", choices: ["Thorough", "Careless", "Quick"] },
    { q: "What is an antonym of 'abundant'?", a: "Scarce", choices: ["Scarce", "Plentiful", "Cheap"] },
    { q: "'Put off' means?", a: "Postpone", choices: ["Postpone", "Continue", "Celebrate"] },
    { q: "'Look up to' means?", a: "Admire and respect", choices: ["Admire and respect", "Look for something", "Ignore"] },
    { q: "The word 'persevere' means?", a: "Continue despite difficulty", choices: ["Continue despite difficulty", "Give up easily", "Start something new"] },
    { q: "What is a synonym of 'elated'?", a: "Overjoyed", choices: ["Overjoyed", "Disappointed", "Confused"] },
    { q: "What is an antonym of 'deteriorate'?", a: "Improve", choices: ["Improve", "Worsen", "Maintain"] },
    { q: "'Break out' means?", a: "Start suddenly", choices: ["Start suddenly", "End slowly", "Break something"] },
    { q: "The word 'inevitable' means?", a: "Certain to happen", choices: ["Certain to happen", "Unlikely", "Avoidable"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6e-gr1": buildP6eGr1, "p6e-gr2": buildP6eGr2, "p6e-vc1": buildP6eVc1 };
export const P6_GRAMMAR6_QUESTION_COUNTS = { "p6e-gr1": 10, "p6e-gr2": 10, "p6e-vc1": 10 };
export function buildGrammar6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
