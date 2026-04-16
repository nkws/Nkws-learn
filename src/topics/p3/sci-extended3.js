import { shuffle } from "../../utils/helpers";

export const P3_SCI_EXTENDED_INTRO = {
  "p3s-mg1": {
    title: "Magnets",
    pages: [
      { text: "Magnets attract some metals — iron, steel, nickel, cobalt. Not all metals are magnetic!", emoji: "🧲" },
      { text: "Every magnet has 2 poles: North (N) and South (S). Like poles repel, unlike poles attract.", emoji: "N ↔ S attract | N ↔ N repel" },
    ],
  },
  "p3s-lg1": {
    title: "Light",
    pages: [
      { text: "Light comes from luminous sources like the sun, fire, and light bulbs. The moon reflects light — it is not a source!", emoji: "☀️ 💡 🔥" },
      { text: "Shadows form when light is blocked by an opaque object. Transparent objects let light through!", emoji: "🌑 shadow" },
    ],
  },
};

function buildP3sMg1() {
  return shuffle([
    { q: "Which material is attracted by a magnet?", a: "Iron", choices: ["Iron", "Wood", "Plastic"] },
    { q: "Every magnet has how many poles?", a: "2 (North and South)", choices: ["2 (North and South)", "1", "4"] },
    { q: "What happens when two North poles are brought together?", a: "They repel (push away)", choices: ["They repel (push away)", "They attract", "Nothing happens"] },
    { q: "What happens when a North pole meets a South pole?", a: "They attract (pull together)", choices: ["They attract (pull together)", "They repel", "Nothing happens"] },
    { q: "Which of these is NOT magnetic?", a: "Aluminium", choices: ["Aluminium", "Iron", "Steel"] },
    { q: "A magnet can pick up?", a: "Steel paperclips", choices: ["Steel paperclips", "Wooden blocks", "Rubber bands"] },
    { q: "The strongest part of a magnet is at the?", a: "Poles", choices: ["Poles", "Middle", "All parts are equal"] },
    { q: "If a bar magnet is cut in half, each piece?", a: "Becomes a complete magnet with 2 poles", choices: ["Becomes a complete magnet with 2 poles", "Loses its magnetism", "Has only 1 pole"] },
    { q: "A compass needle points North because?", a: "It is a magnet attracted to Earth's magnetic North", choices: ["It is a magnet attracted to Earth's magnetic North", "The wind pushes it", "It is lighter on one side"] },
    { q: "Which test proves an object is a MAGNET (not just magnetic)?", a: "It repels another known magnet", choices: ["It repels another known magnet", "It attracts iron", "It sticks to the fridge"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP3sLg1() {
  return shuffle([
    { q: "Which is a source of light?", a: "The sun", choices: ["The sun", "The moon", "A mirror"] },
    { q: "The moon shines because it?", a: "Reflects light from the sun", choices: ["Reflects light from the sun", "Makes its own light", "Is very hot"] },
    { q: "Shadows form when light is blocked by?", a: "An opaque object", choices: ["An opaque object", "A transparent object", "Air"] },
    { q: "Which material is transparent?", a: "Clear glass", choices: ["Clear glass", "Cardboard", "Aluminium foil"] },
    { q: "Which material is opaque?", a: "A wooden door", choices: ["A wooden door", "Clear water", "Clear glass"] },
    { q: "Light travels in?", a: "Straight lines", choices: ["Straight lines", "Curved lines", "Zigzag lines"] },
    { q: "A shadow is largest when the object is?", a: "Close to the light source", choices: ["Close to the light source", "Far from the light source", "Size doesn't change"] },
    { q: "Which is a man-made source of light?", a: "A light bulb", choices: ["A light bulb", "The sun", "A star"] },
    { q: "Frosted glass is?", a: "Translucent — some light passes through", choices: ["Translucent — some light passes through", "Transparent", "Opaque"] },
    { q: "We can see objects because?", a: "Light bounces off them into our eyes", choices: ["Light bounces off them into our eyes", "Our eyes shoot out light rays", "Objects glow in the dark"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p3s-mg1": buildP3sMg1, "p3s-lg1": buildP3sLg1 };
export const P3_SCI_EXTENDED_QUESTION_COUNTS = { "p3s-mg1": 10, "p3s-lg1": 10 };
export function buildSciExtended3Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
