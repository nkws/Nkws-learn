import { shuffle } from "../../utils/helpers";

// ============ INTRO CONTENT ============

export const P4_MATTER_INTRO = {
  "p4s-mt1": {
    title: "What is Matter?",
    pages: [
      {
        text: "Everything around us is made of tiny particles. Anything that has mass and takes up space is called matter!",
        emoji: "🧊 💧 💨",
      },
      {
        text: "There are three states of matter: solids, liquids, and gases. Each behaves differently!",
        emoji: "🪨 🥤 🎈",
      },
      {
        text: "Solids have a fixed shape and volume. Liquids have a fixed volume but take the shape of their container. Gases have no fixed shape or volume!",
        emoji: "📦 🫗 ☁️",
      },
      {
        text: "Is air matter? Yes! Air has mass and takes up space, even though we cannot see it. But light, heat, and shadows are NOT matter.",
        emoji: "🌬️ ✅ 💡 ❌",
      },
    ],
  },
  "p4s-mt2": {
    title: "Properties of Matter",
    pages: [
      {
        text: "Mass is the amount of matter in an object. We measure mass in grams (g) or kilograms (kg) using a balance.",
        emoji: "⚖️ 🔢",
      },
      {
        text: "Volume is the amount of space an object takes up. We measure volume in millilitres (mL) or cubic centimetres (cm³).",
        emoji: "🧪 📏",
      },
      {
        text: "To find the volume of an irregular object, use the water displacement method: submerge it in water and measure how much the water level rises!",
        emoji: "🪨 💧 📈",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

// Module 1: What is Matter?
function buildP4sMt1() {
  return shuffle([
    { q: "What is matter?", a: "Anything that has mass and takes up space", choices: ["Anything that has mass and takes up space", "Anything we can see", "Anything that is heavy"] },
    { q: "Which of these is NOT matter?", a: "Shadow", choices: ["Shadow", "Air", "Smoke"] },
    { q: "Which of these is matter?", a: "Air", choices: ["Air", "Light", "Heat"] },
    { q: "Why is air considered matter?", a: "It has mass and takes up space", choices: ["It has mass and takes up space", "We can see it moving", "It makes sound"] },
    { q: "A solid has a fixed shape and a fixed?", a: "Volume", choices: ["Volume", "Colour", "Temperature"] },
    { q: "A liquid takes the shape of its?", a: "Container", choices: ["Container", "Colour", "Temperature"] },
    { q: "Which state of matter can be compressed?", a: "Gas", choices: ["Gas", "Liquid", "Solid"] },
    { q: "A gas has no fixed shape and no fixed?", a: "Volume", choices: ["Volume", "Mass", "Colour"] },
    { q: "Which of these is a gas?", a: "Water vapour", choices: ["Water vapour", "Ice", "Juice"] },
    { q: "Is a shadow matter?", a: "No, it has no mass", choices: ["No, it has no mass", "Yes, we can see it", "Yes, it has a shape"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

// Module 2: Mass, Volume, and Measurement
function buildP4sMt2() {
  return shuffle([
    { q: "Mass is the amount of?", a: "Matter in an object", choices: ["Matter in an object", "Space an object takes up", "Heat in an object"] },
    { q: "What unit do we use to measure mass?", a: "Grams or kilograms", choices: ["Grams or kilograms", "Millilitres", "Centimetres"] },
    { q: "What instrument do we use to measure mass?", a: "A balance", choices: ["A balance", "A measuring cylinder", "A ruler"] },
    { q: "Volume is the amount of?", a: "Space an object takes up", choices: ["Space an object takes up", "Matter in an object", "Heat in an object"] },
    { q: "What unit do we use to measure the volume of a liquid?", a: "Millilitres (mL)", choices: ["Millilitres (mL)", "Grams (g)", "Metres (m)"] },
    { q: "How do we find the volume of an irregular solid?", a: "Water displacement method", choices: ["Water displacement method", "Measure with a ruler", "Weigh it on a balance"] },
    { q: "In the water displacement method, the volume of the object equals?", a: "The rise in water level", choices: ["The rise in water level", "The total water level", "The weight of the water"] },
    { q: "Does the mass of an object change when its shape changes?", a: "No, mass stays the same", choices: ["No, mass stays the same", "Yes, it increases", "Yes, it decreases"] },
    { q: "1 mL is equal to?", a: "1 cm³", choices: ["1 cm³", "1 g", "1 m"] },
    { q: "When reading a measuring cylinder, your eyes should be at?", a: "The same level as the liquid surface", choices: ["The same level as the liquid surface", "Above the liquid surface", "Below the liquid surface"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

// Module 3: States of Matter and Changes
function buildP4sMt3() {
  return shuffle([
    { q: "When ice melts, it changes from a solid to a?", a: "Liquid", choices: ["Liquid", "Gas", "Solid"] },
    { q: "When water boils, it changes from a liquid to a?", a: "Gas", choices: ["Gas", "Solid", "Liquid"] },
    { q: "When water vapour condenses, it changes from a gas to a?", a: "Liquid", choices: ["Liquid", "Solid", "Gas"] },
    { q: "When water freezes, it changes from a liquid to a?", a: "Solid", choices: ["Solid", "Gas", "Liquid"] },
    { q: "What is evaporation?", a: "Liquid changing to gas without boiling", choices: ["Liquid changing to gas without boiling", "Solid changing to liquid", "Gas changing to solid"] },
    { q: "Water droplets forming on a cold glass is an example of?", a: "Condensation", choices: ["Condensation", "Evaporation", "Melting"] },
    { q: "Does the mass of water change when it freezes into ice?", a: "No, mass is conserved", choices: ["No, mass is conserved", "Yes, it increases", "Yes, it decreases"] },
    { q: "Wet clothes drying on a line is an example of?", a: "Evaporation", choices: ["Evaporation", "Condensation", "Freezing"] },
    { q: "At what temperature does water boil?", a: "100°C", choices: ["100°C", "0°C", "50°C"] },
    { q: "At what temperature does water freeze?", a: "0°C", choices: ["0°C", "100°C", "50°C"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const MATTER_BUILDERS = {
  "p4s-mt1": buildP4sMt1,
  "p4s-mt2": buildP4sMt2,
  "p4s-mt3": buildP4sMt3,
};

export const P4_MATTER_QUESTION_COUNTS = {
  "p4s-mt1": 10, "p4s-mt2": 10, "p4s-mt3": 10,
};

export function buildMatterQuestions(moduleId) {
  const builder = MATTER_BUILDERS[moduleId];
  return builder ? builder() : [];
}
