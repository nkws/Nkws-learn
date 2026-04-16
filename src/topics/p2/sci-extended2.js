import { shuffle } from "../../utils/helpers";

export const P2_SCI_EXTENDED_INTRO = {
  "p2s-mg1": {
    title: "Magnets",
    pages: [
      { text: "A magnet can pull things made of iron and steel towards it. This is called attraction!", emoji: "🧲" },
      { text: "Not all metals are magnetic. Gold, silver and aluminium are NOT attracted to magnets.", emoji: "🧲 ✕ 🥇" },
      { text: "Every magnet has two poles: North (N) and South (S). Like poles push away, unlike poles pull together!", emoji: "N-S attract | N-N repel" },
    ],
  },
};

function buildP2sMg1() {
  return shuffle([
    { q: "A magnet can attract which material?", a: "Iron", choices: ["Iron", "Wood", "Paper"] },
    { q: "Which is NOT attracted to a magnet?", a: "Plastic ruler", choices: ["Plastic ruler", "Iron nail", "Steel spoon"] },
    { q: "A magnet has how many poles?", a: "2", choices: ["2", "1", "4"] },
    { q: "What happens when two North poles meet?", a: "They push away", choices: ["They push away", "They stick together", "Nothing"] },
    { q: "A North pole and a South pole will?", a: "Attract each other", choices: ["Attract each other", "Push apart", "Do nothing"] },
    { q: "Which of these can a magnet pick up?", a: "A steel paperclip", choices: ["A steel paperclip", "A wooden stick", "A rubber eraser"] },
    { q: "Is aluminium magnetic?", a: "No", choices: ["No", "Yes", "Sometimes"] },
    { q: "Where is a magnet strongest?", a: "At the poles", choices: ["At the poles", "In the middle", "Everywhere equally"] },
    { q: "A fridge magnet sticks because the fridge door is made of?", a: "Steel", choices: ["Steel", "Plastic", "Wood"] },
    { q: "Which everyday item uses a magnet?", a: "A compass", choices: ["A compass", "A ruler", "A pencil"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p2s-mg1": buildP2sMg1 };
export const P2_SCI_EXTENDED_QUESTION_COUNTS = { "p2s-mg1": 10 };
export function buildSciExtended2Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
