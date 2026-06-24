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
    { q: "A moving car has?", a: "Kinetic energy", choices: ["Kinetic energy", "Sound energy only", "Light energy"] , explain: "Kinetic energy is the energy of movement, so anything that is moving has it. A car is moving, so it carries kinetic energy — the faster it goes, the more it has." },
    { q: "A stretched rubber band has?", a: "Potential energy", choices: ["Potential energy", "Kinetic energy", "Sound energy"], explain: "Potential energy is stored energy waiting to be used. Stretching a rubber band stores energy in it, which is released as movement when you let go." },
    { q: "A book on a high shelf has?", a: "Gravitational potential energy", choices: ["Gravitational potential energy", "Kinetic energy", "Electrical energy"], explain: "Anything lifted up stores gravitational potential energy because of its height. The higher the book, the more it stores — it would turn into movement energy if it fell." },
    { q: "A burning candle converts chemical energy to?", a: "Light and heat energy", choices: ["Light and heat energy", "Electrical energy", "Sound energy"], explain: "Energy is never made, only changed from one form to another. The wax stores chemical energy, and burning changes it into light and heat energy." },
    { q: "A radio converts electrical energy to?", a: "Sound energy", choices: ["Sound energy", "Light energy", "Kinetic energy"], explain: "Devices change energy from one form into the form we need. A radio takes in electrical energy and turns it into sound energy so we can hear it." },
    { q: "A solar panel converts?", a: "Light energy to electrical energy", choices: ["Light energy to electrical energy", "Heat to sound", "Kinetic to potential"], explain: "A solar panel is an energy changer: it captures light energy from the Sun and turns it into electrical energy we can use to power things." },
    { q: "When you clap your hands, kinetic energy is converted to?", a: "Sound energy", choices: ["Sound energy", "Light energy", "Electrical energy"], explain: "Moving things carry kinetic energy. When your hands clap together, that movement energy is changed into sound energy, which you hear as the clap." },
    { q: "A fan converts electrical energy to?", a: "Kinetic energy", choices: ["Kinetic energy", "Chemical energy", "Potential energy"], explain: "A fan changes one form of energy into another. It takes in electrical energy and turns it into kinetic energy — the movement of the spinning blades." },
    { q: "Food contains?", a: "Chemical energy", choices: ["Chemical energy", "Electrical energy", "Light energy"], explain: "Food stores chemical energy, locked up in its substances. Our bodies release this energy when we digest food, using it to move, grow and stay warm." },
    { q: "Can energy be created or destroyed?", a: "No — energy can only be converted from one form to another", choices: ["No — energy can only be converted from one form to another", "Yes, we can create energy", "Yes, energy disappears when used"], explain: "Energy cannot be made or destroyed — it is only transferred and changed in form. When energy seems to be 'used up', it has really turned into another form like heat." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5s-en1": buildP5sEn1 };
export const P5_ENERGY_QUESTION_COUNTS = { "p5s-en1": 10 };
export function buildEnergyQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
