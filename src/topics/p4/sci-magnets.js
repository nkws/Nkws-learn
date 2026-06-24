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
    { q: "Which of these is a magnetic material?", a: "Iron", choices: ["Iron", "Copper", "Aluminium"], explain: "Only iron, steel, nickel, and cobalt are attracted by magnets. Iron is one of them, while copper and aluminium are metals that are not magnetic." },
    { q: "Which of these is NOT magnetic?", a: "Copper", choices: ["Copper", "Steel", "Iron"], explain: "Being a metal does not make something magnetic. Copper is not attracted by magnets, while steel and iron are." },
    { q: "Are all metals magnetic?", a: "No — copper, aluminium, and gold are not magnetic", choices: ["No — copper, aluminium, and gold are not magnetic", "Yes, all metals are magnetic", "Only heavy metals are magnetic"], explain: "Magnets attract only a few metals: iron, steel, nickel, and cobalt. Many metals like copper, aluminium, and gold are not magnetic at all." },
    { q: "A magnet will attract?", a: "A steel paperclip", choices: ["A steel paperclip", "A plastic ruler", "A wooden pencil"], explain: "Magnets attract magnetic materials like iron and steel. A steel paperclip is pulled, but plastic and wood are not magnetic, so they are not." },
    { q: "A magnet will NOT attract?", a: "An aluminium can", choices: ["An aluminium can", "An iron nail", "A steel spoon"], explain: "Aluminium is a metal but not a magnetic one, so a magnet ignores it. The iron nail and steel spoon are magnetic and would be attracted." },
    { q: "Which material is magnetic?", a: "Nickel", choices: ["Nickel", "Brass", "Rubber"], explain: "Nickel is one of the few magnetic metals, along with iron, steel, and cobalt. Brass and rubber are not attracted by magnets." },
    { q: "Which material is magnetic?", a: "Cobalt", choices: ["Cobalt", "Plastic", "Glass"], explain: "Cobalt is one of the four magnetic materials, with iron, steel, and nickel. Plastic and glass are not magnetic at all." },
    { q: "A fridge magnet sticks to a fridge because the fridge door is made of?", a: "Steel", choices: ["Steel", "Plastic", "Wood"], explain: "Magnets stick only to magnetic materials. The fridge door is made of steel, which is magnetic, so the magnet is attracted and holds on." },
    { q: "Will a magnet attract a gold ring?", a: "No, gold is not magnetic", choices: ["No, gold is not magnetic", "Yes, all metals are magnetic", "Only if the magnet is strong"], explain: "Not all metals are magnetic. Gold is not one of the magnetic metals, so even a strong magnet will not pull a gold ring." },
    { q: "Where is the magnetic force strongest on a magnet?", a: "At the poles", choices: ["At the poles", "In the middle", "Everywhere equally"], explain: "Every magnet's pulling power is concentrated at its two ends, called poles. That is where the force is strongest and where most paperclips cluster." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

// Module 2: Poles, Attraction and Repulsion
function buildP4sMg2() {
  return shuffle([
    { q: "Every magnet has?", a: "A North pole and a South pole", choices: ["A North pole and a South pole", "Only a North pole", "No poles"], explain: "Every magnet always has two poles, North and South. You can never have just one pole on its own, even if you cut the magnet smaller." },
    { q: "What happens when two North poles are brought together?", a: "They repel", choices: ["They repel", "They attract", "Nothing happens"], explain: "North and North are like poles, and like poles push away. So two North poles brought together repel each other." },
    { q: "What happens when a North pole meets a South pole?", a: "They attract", choices: ["They attract", "They repel", "Nothing happens"], explain: "North and South are unlike poles, and unlike poles pull together. So a North pole and a South pole attract each other." },
    { q: "Two magnets are placed with their North poles facing each other. What will happen?", a: "They repel and push apart", choices: ["They repel and push apart", "They attract and pull together", "Nothing happens"], explain: "North and North are like poles. Like poles always repel, pushing each other away — which is why two North poles push apart." },
    { q: "The North pole of one magnet faces the South pole of another. What will happen?", a: "They attract and pull together", choices: ["They attract and pull together", "They repel and push apart", "Nothing happens"], explain: "North and South are unlike poles. Unlike poles always attract, pulling each other together — which is why a North and South pole snap together." },
    { q: "Object X attracts one end of a magnet and repels the other end. Is X a magnet?", a: "Yes — repulsion proves it is a magnet", choices: ["Yes — repulsion proves it is a magnet", "No, it is just magnetic material", "Cannot tell"], explain: "Only a magnet can repel. Since X pushes one pole away, it must have its own poles, so X is definitely a magnet." },
    { q: "Object Y attracts both ends of a magnet. Is Y definitely a magnet?", a: "No — it could be just a magnetic material", choices: ["No — it could be just a magnetic material", "Yes, it must be a magnet", "No, it is not magnetic at all"], explain: "Magnetic materials like iron are attracted by both poles too. Only repulsion proves a magnet, so attraction alone cannot prove Y is one." },
    { q: "The only sure test for a magnet is?", a: "Repulsion", choices: ["Repulsion", "Attraction", "Weight"], explain: "Magnetic materials can be attracted but never repelled. So only repulsion, where two objects push apart, proves that both are magnets." },
    { q: "Both poles of a magnet can?", a: "Attract magnetic materials", choices: ["Attract magnetic materials", "Only attract other magnets", "Repel all materials"], explain: "A magnet attracts magnetic materials like iron at both its North and South poles. Repelling only happens between two magnets with like poles." },
    { q: "If you break a magnet in half, each piece?", a: "Has its own North and South pole", choices: ["Has its own North and South pole", "Has only one pole", "Is no longer a magnet"], explain: "A magnet can never have a single pole. Break it and each piece becomes a smaller magnet, each with its own North and South pole." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
