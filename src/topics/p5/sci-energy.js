import { shuffle } from "../../utils/helpers";

export const P5_ENERGY_INTRO = {
  "p5s-en1": {
    title: "Forms and Conversion of Energy",
    pages: [
      { text: "Energy comes in many forms: light, heat, sound, kinetic (movement), potential (stored), and electrical!", emoji: "💡 🔥 🔊 🏃 🔋 ⚡" },
      { text: "Energy can be converted from one form to another. A light bulb converts electrical energy to light and heat energy!", emoji: "⚡ ➡️ 💡 🔥" },
    ],
  },
};

function buildP5sEn1() {
  return shuffle([
    { q: "A moving car has?", a: "Kinetic energy", choices: ["Kinetic energy", "Sound energy only", "Light energy"] },
    { q: "A stretched rubber band has?", a: "Potential energy", choices: ["Potential energy", "Kinetic energy", "Sound energy"] },
    { q: "A book on a high shelf has?", a: "Gravitational potential energy", choices: ["Gravitational potential energy", "Kinetic energy", "Electrical energy"] },
    { q: "A burning candle converts chemical energy to?", a: "Light and heat energy", choices: ["Light and heat energy", "Electrical energy", "Sound energy"] },
    { q: "A radio converts electrical energy to?", a: "Sound energy", choices: ["Sound energy", "Light energy", "Kinetic energy"] },
    { q: "A solar panel converts?", a: "Light energy to electrical energy", choices: ["Light energy to electrical energy", "Heat to sound", "Kinetic to potential"] },
    { q: "When you clap your hands, kinetic energy is converted to?", a: "Sound energy", choices: ["Sound energy", "Light energy", "Electrical energy"] },
    { q: "A fan converts electrical energy to?", a: "Kinetic energy", choices: ["Kinetic energy", "Chemical energy", "Potential energy"] },
    { q: "Food contains?", a: "Chemical energy", choices: ["Chemical energy", "Electrical energy", "Light energy"] },
    { q: "Can energy be created or destroyed?", a: "No — energy can only be converted from one form to another", choices: ["No — energy can only be converted from one form to another", "Yes, we can create energy", "Yes, energy disappears when used"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5s-en1": buildP5sEn1 };
export const P5_ENERGY_QUESTION_COUNTS = { "p5s-en1": 10 };
export function buildEnergyQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
