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
    { q: "For a bulb to light up, the circuit must be?", a: "Closed — a complete loop", choices: ["Closed — a complete loop", "Open — with a gap", "Broken in two places"], explain: "Electric current only flows when it has an unbroken loop to travel around, from the battery through the wires and bulb and back. A closed circuit completes that loop, so the bulb lights." },
    { q: "A student removes one wire from a working circuit, creating a gap. What will happen to the bulb?", a: "The bulb goes off — current cannot flow through a broken loop", choices: ["The bulb goes off — current cannot flow through a broken loop", "The bulb stays on — electricity still flows in a loop", "The bulb gets brighter"], explain: "Current needs a complete, unbroken path. Removing a wire creates a gap that breaks the loop, so current stops and the bulb goes off." },
    { q: "Which is a conductor of electricity?", a: "Copper wire", choices: ["Copper wire", "Rubber band", "Wooden stick"], explain: "Conductors let electricity pass through them easily, and metals are good conductors. Copper is a metal, so it carries current — that is why wires are made of it." },
    { q: "Which is an insulator of electricity?", a: "Plastic", choices: ["Plastic", "Iron", "Aluminium"], explain: "Insulators block electricity from flowing through them. Iron and aluminium are metals (conductors), while plastic is a non-metal that stops current." },
    { q: "Why are electrical wires covered in plastic?", a: "Plastic is an insulator that prevents electric shock", choices: ["Plastic is an insulator that prevents electric shock", "Plastic makes electricity flow faster", "Plastic makes wires stronger"], explain: "Plastic is an insulator, so current cannot pass through it. The cover keeps the electricity inside the metal wire and stops it reaching your hand and giving a shock." },
    { q: "Adding more batteries to a circuit makes the bulb?", a: "Brighter", choices: ["Brighter", "Dimmer", "The same brightness"], explain: "Each battery pushes electrical energy into the circuit. More batteries push more current through the bulb, so it gives off more light and shines brighter." },
    { q: "Adding more bulbs in a series circuit makes each bulb?", a: "Dimmer", choices: ["Dimmer", "Brighter", "The same brightness"], explain: "In a series circuit all bulbs share one loop, so they share the same current. Adding more bulbs spreads the energy further, so each one gets less and glows dimmer." },
    { q: "A switch controls a circuit by?", a: "Opening or closing the circuit", choices: ["Opening or closing the circuit", "Adding more batteries", "Making the wire longer"], explain: "Current only flows in a closed loop. A switch makes or breaks that loop — closing it completes the circuit to turn things on, opening it stops the current." },
    { q: "Which of these materials would complete a circuit?", a: "A metal spoon", choices: ["A metal spoon", "A glass rod", "A rubber eraser"], explain: "To complete a circuit the gap must be bridged by a conductor. Metals conduct electricity, so a metal spoon carries the current, while glass and rubber are insulators that do not." },
    { q: "Electricity is a form of?", a: "Energy", choices: ["Energy", "Matter", "Force"], explain: "Electricity is electrical energy that can be changed into other forms, like light and heat in a bulb. That is why we talk about energy flowing through a circuit." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5sEl2() {
  return shuffle([
    { q: "In a series circuit, all components are connected?", a: "In a single loop", choices: ["In a single loop", "Side by side", "With no wires"], explain: "A series circuit joins everything one after another in one single loop, so the same current flows through each part in turn. There is only one path for the current to follow." },
    { q: "If one bulb in a series circuit burns out?", a: "All bulbs go out", choices: ["All bulbs go out", "The other bulbs get brighter", "Nothing happens"], explain: "A series circuit has just one loop. A burnt-out bulb creates a gap that breaks the loop, so the current stops everywhere and all the bulbs go out." },
    { q: "A battery provides?", a: "Electrical energy to the circuit", choices: ["Electrical energy to the circuit", "Light energy", "Heat only"], explain: "A battery stores chemical energy and changes it into electrical energy, which it pushes around the circuit. The components then turn that energy into light, heat or movement." },
    { q: "Which of these is safe around electricity?", a: "Using dry hands to operate switches", choices: ["Using dry hands to operate switches", "Touching bare wires", "Using metal objects near sockets"], explain: "Electricity can flow through your body and harm you. Dry skin resists current, but bare wires, metal near sockets and water let it pass — so dry hands on a switch is the safe choice." },
    { q: "Water is a conductor of electricity. Why is it dangerous to touch electrical items with wet hands?", a: "Water can conduct electricity through your body", choices: ["Water can conduct electricity through your body", "Water makes electricity stronger", "Water damages the wire coating"], explain: "Water is a conductor, so it gives the current an easy path. Wet hands let electricity flow into your body, which can cause a dangerous shock." },
    { q: "The brightness of a bulb depends on?", a: "The number of batteries and bulbs in the circuit", choices: ["The number of batteries and bulbs in the circuit", "The colour of the wire", "The size of the switch"], explain: "Brightness depends on how much current reaches the bulb. More batteries push more current to make it brighter, while more bulbs share the current and make each one dimmer." },
    { q: "A battery has two terminals labelled + and −. In which order does conventional current travel around the circuit?", a: "+ terminal → through the circuit components → − terminal", choices: ["+ terminal → through the circuit components → − terminal", "− terminal → through the circuit components → + terminal", "From the bulb to the battery only"], explain: "We picture conventional current leaving the positive (+) terminal, flowing through the components (bulb, switch, etc.), and returning to the negative (−) terminal, completing the loop." },
    { q: "A torch uses which type of circuit?", a: "A closed series circuit", choices: ["A closed series circuit", "An open circuit", "No circuit"], explain: "A torch lights only when its switch closes the loop, joining battery and bulb in one path. That makes it a closed series circuit; if it were open, no current would flow." },
    { q: "Removing the battery from a circuit?", a: "Breaks the circuit — electricity stops flowing", choices: ["Breaks the circuit — electricity stops flowing", "Makes the bulb brighter", "Has no effect"], explain: "The battery is the energy source that pushes the current. Taking it out leaves a gap and removes the push, so the loop is broken and the current stops." },
    { q: "Which is NOT a good conductor of electricity?", a: "Wood", choices: ["Wood", "Steel", "Copper"], explain: "Metals like steel and copper conduct electricity well. Wood is a non-metal, so it does not let current pass through easily — it acts more like an insulator." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5s-el1": buildP5sEl1, "p5s-el2": buildP5sEl2 };
export const P5_ELECTRICAL_QUESTION_COUNTS = { "p5s-el1": 10, "p5s-el2": 10 };
export function buildElectricalQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
