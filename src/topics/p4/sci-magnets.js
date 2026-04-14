import { shuffle } from "../../utils/helpers";

export const P4_MAGNETS_INTRO = {
  "p4s-mg1": {
    title: "Magnets",
    pages: [
      {
        text: "Magnets attract materials made of iron, steel, nickel, and cobalt. But not all metals are magnetic — copper and aluminium are NOT!",
        emoji: "🧲 🪙 ✅ ❌",
      },
      {
        text: "Every magnet has a North pole and a South pole. Like poles repel each other, unlike poles attract!",
        emoji: "🔴🔴 ❌ 🔴🔵 ✅",
      },
      {
        text: "The only sure test for a magnet is repulsion. If two objects repel each other, both must be magnets!",
        emoji: "🧲 ↔️ 🧲 = ✅",
      },
    ],
  },
};

// Module 1: Magnetic and Non-Magnetic Materials
function buildP4sMg1() {
  return shuffle([
    { q: "Which of these is a magnetic material?", a: "Iron", choices: ["Iron", "Copper", "Aluminium"] },
    { q: "Which of these is NOT magnetic?", a: "Copper", choices: ["Copper", "Steel", "Iron"] },
    { q: "Are all metals magnetic?", a: "No — copper, aluminium, and gold are not magnetic", choices: ["No — copper, aluminium, and gold are not magnetic", "Yes, all metals are magnetic", "Only heavy metals are magnetic"] },
    { q: "A magnet will attract?", a: "A steel paperclip", choices: ["A steel paperclip", "A plastic ruler", "A wooden pencil"] },
    { q: "A magnet will NOT attract?", a: "An aluminium can", choices: ["An aluminium can", "An iron nail", "A steel spoon"] },
    { q: "Which material is magnetic?", a: "Nickel", choices: ["Nickel", "Brass", "Rubber"] },
    { q: "Which material is magnetic?", a: "Cobalt", choices: ["Cobalt", "Plastic", "Glass"] },
    { q: "A fridge magnet sticks to a fridge because the fridge door is made of?", a: "Steel", choices: ["Steel", "Plastic", "Wood"] },
    { q: "Will a magnet attract a gold ring?", a: "No, gold is not magnetic", choices: ["No, gold is not magnetic", "Yes, all metals are magnetic", "Only if the magnet is strong"] },
    { q: "Where is the magnetic force strongest on a magnet?", a: "At the poles", choices: ["At the poles", "In the middle", "Everywhere equally"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

// Module 2: Poles, Attraction and Repulsion
function buildP4sMg2() {
  return shuffle([
    { q: "Every magnet has?", a: "A North pole and a South pole", choices: ["A North pole and a South pole", "Only a North pole", "No poles"] },
    { q: "What happens when two North poles are brought together?", a: "They repel", choices: ["They repel", "They attract", "Nothing happens"] },
    { q: "What happens when a North pole meets a South pole?", a: "They attract", choices: ["They attract", "They repel", "Nothing happens"] },
    { q: "Like poles?", a: "Repel each other", choices: ["Repel each other", "Attract each other", "Have no effect"] },
    { q: "Unlike poles?", a: "Attract each other", choices: ["Attract each other", "Repel each other", "Cancel each other out"] },
    { q: "Object X attracts one end of a magnet and repels the other end. Is X a magnet?", a: "Yes — repulsion proves it is a magnet", choices: ["Yes — repulsion proves it is a magnet", "No, it is just magnetic material", "Cannot tell"] },
    { q: "Object Y attracts both ends of a magnet. Is Y definitely a magnet?", a: "No — it could be just a magnetic material", choices: ["No — it could be just a magnetic material", "Yes, it must be a magnet", "No, it is not magnetic at all"] },
    { q: "The only sure test for a magnet is?", a: "Repulsion", choices: ["Repulsion", "Attraction", "Weight"] },
    { q: "Both poles of a magnet can?", a: "Attract magnetic materials", choices: ["Attract magnetic materials", "Only attract other magnets", "Repel all materials"] },
    { q: "If you break a magnet in half, each piece?", a: "Has its own North and South pole", choices: ["Has its own North and South pole", "Has only one pole", "Is no longer a magnet"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const MAGNETS_BUILDERS = {
  "p4s-mg1": buildP4sMg1,
  "p4s-mg2": buildP4sMg2,
};

export const P4_MAGNETS_QUESTION_COUNTS = {
  "p4s-mg1": 10, "p4s-mg2": 10,
};

export function buildMagnetsQuestions(moduleId) {
  const builder = MAGNETS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
