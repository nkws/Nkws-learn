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
    { q: "A magnet can attract which material?", a: "Iron", choices: ["Iron", "Wood", "Paper"], explain: "A magnet attracts iron and steel. Iron is one of those magnetic metals, but wood and paper are not pulled at all." },
    { q: "Which is NOT attracted to a magnet?", a: "Plastic ruler", choices: ["Plastic ruler", "Iron nail", "Steel spoon"], explain: "A magnet only pulls iron and steel. A plastic ruler is not metal, so it is not attracted, but the iron nail and steel spoon are." },
    { q: "A magnet has how many poles?", a: "2", choices: ["2", "1", "4"], explain: "Every magnet has two poles, a North pole and a South pole. Two is always the answer, even for a tiny magnet." },
    { q: "What happens when two North poles meet?", a: "They push away", choices: ["They push away", "They stick together", "Nothing"], explain: "The rule is: like poles push apart. Two North poles are the same, so they push each other away." },
    { q: "A North pole and a South pole will?", a: "Attract each other", choices: ["Attract each other", "Push apart", "Do nothing"], explain: "The rule is: unlike poles pull together. North and South are different, so they attract and snap together." },
    { q: "Which of these can a magnet pick up?", a: "A steel paperclip", choices: ["A steel paperclip", "A wooden stick", "A rubber eraser"], explain: "A magnet attracts iron and steel. The paperclip is steel, so it gets picked up, but wood and rubber do not." },
    { q: "Is aluminium magnetic?", a: "No", choices: ["No", "Yes", "Sometimes"], explain: "Magnets only pull iron and steel. Aluminium is a different metal, so a magnet does not stick to it." },
    { q: "Where is a magnet strongest?", a: "At the poles", choices: ["At the poles", "In the middle", "Everywhere equally"], explain: "A magnet's pull is strongest at its two poles, the North and South ends, and weaker in the middle." },
    { q: "A fridge magnet sticks because the fridge door is made of?", a: "Steel", choices: ["Steel", "Plastic", "Wood"], explain: "A magnet attracts iron and steel. The fridge door is steel underneath, so the magnet grabs on and holds." },
    { q: "Which everyday item uses a magnet?", a: "A compass", choices: ["A compass", "A ruler", "A pencil"], explain: "A compass has a tiny magnet inside that lines up with the Earth, so its needle always points the way to North." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p2s-mg1": buildP2sMg1 };
export const P2_SCI_EXTENDED_QUESTION_COUNTS = { "p2s-mg1": 10 };
export function buildSciExtended2Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
