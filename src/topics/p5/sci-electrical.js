import { shuffle } from "../../utils/helpers";

export const P5_ELECTRICAL_INTRO = {
  "p5s-el1": {
    title: "Electrical Systems",
    pages: [
      { text: "Electricity flows through a closed circuit — a complete loop from the battery through wires and back!", emoji: "🔋 ➡️ 💡 ➡️ 🔋" },
      { text: "If there is a gap in the circuit, it is an open circuit and electricity cannot flow. The bulb will not light up!", emoji: "🔋 ✂️ 💡 ❌" },
      { text: "Conductors let electricity pass through (like metals). Insulators block electricity (like rubber and plastic).", emoji: "🪙 ✅ 🧤 ❌" },
    ],
  },
};

function buildP5sEl1() {
  return shuffle([
    { q: "For a bulb to light up, the circuit must be?", a: "Closed — a complete loop", choices: ["Closed — a complete loop", "Open — with a gap", "Broken in two places"] },
    { q: "An open circuit means?", a: "There is a gap and electricity cannot flow", choices: ["There is a gap and electricity cannot flow", "Electricity flows in a loop", "The bulb is very bright"] },
    { q: "Which is a conductor of electricity?", a: "Copper wire", choices: ["Copper wire", "Rubber band", "Wooden stick"] },
    { q: "Which is an insulator of electricity?", a: "Plastic", choices: ["Plastic", "Iron", "Aluminium"] },
    { q: "Why are electrical wires covered in plastic?", a: "Plastic is an insulator that prevents electric shock", choices: ["Plastic is an insulator that prevents electric shock", "Plastic makes electricity flow faster", "Plastic makes wires stronger"] },
    { q: "Adding more batteries to a circuit makes the bulb?", a: "Brighter", choices: ["Brighter", "Dimmer", "The same brightness"] },
    { q: "Adding more bulbs in a series circuit makes each bulb?", a: "Dimmer", choices: ["Dimmer", "Brighter", "The same brightness"] },
    { q: "A switch controls a circuit by?", a: "Opening or closing the circuit", choices: ["Opening or closing the circuit", "Adding more batteries", "Making the wire longer"] },
    { q: "Which of these materials would complete a circuit?", a: "A metal spoon", choices: ["A metal spoon", "A glass rod", "A rubber eraser"] },
    { q: "Electricity is a form of?", a: "Energy", choices: ["Energy", "Matter", "Force"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5sEl2() {
  return shuffle([
    { q: "In a series circuit, all components are connected?", a: "In a single loop", choices: ["In a single loop", "Side by side", "With no wires"] },
    { q: "If one bulb in a series circuit burns out?", a: "All bulbs go out", choices: ["All bulbs go out", "The other bulbs get brighter", "Nothing happens"] },
    { q: "A battery provides?", a: "Electrical energy to the circuit", choices: ["Electrical energy to the circuit", "Light energy", "Heat only"] },
    { q: "Which of these is safe around electricity?", a: "Using dry hands to operate switches", choices: ["Using dry hands to operate switches", "Touching bare wires", "Using metal objects near sockets"] },
    { q: "Water is a conductor of electricity. Why is it dangerous to touch electrical items with wet hands?", a: "Water can conduct electricity through your body", choices: ["Water can conduct electricity through your body", "Water makes electricity stronger", "Water damages the wire coating"] },
    { q: "The brightness of a bulb depends on?", a: "The number of batteries and bulbs in the circuit", choices: ["The number of batteries and bulbs in the circuit", "The colour of the wire", "The size of the switch"] },
    { q: "An electric current flows from?", a: "The positive terminal of the battery through the circuit to the negative terminal", choices: ["The positive terminal of the battery through the circuit to the negative terminal", "The bulb to the battery", "The switch to the wire only"] },
    { q: "A torch uses which type of circuit?", a: "A closed series circuit", choices: ["A closed series circuit", "An open circuit", "No circuit"] },
    { q: "Removing the battery from a circuit?", a: "Breaks the circuit — electricity stops flowing", choices: ["Breaks the circuit — electricity stops flowing", "Makes the bulb brighter", "Has no effect"] },
    { q: "Which is NOT a good conductor of electricity?", a: "Wood", choices: ["Wood", "Steel", "Copper"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5s-el1": buildP5sEl1, "p5s-el2": buildP5sEl2 };
export const P5_ELECTRICAL_QUESTION_COUNTS = { "p5s-el1": 10, "p5s-el2": 10 };
export function buildElectricalQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
