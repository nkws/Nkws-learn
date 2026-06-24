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
    { q: "What is matter?", a: "Anything that has mass and takes up space", choices: ["Anything that has mass and takes up space", "Anything we can see", "Anything that is heavy"], explain: "Matter is defined by two things: it has mass and it takes up space. Being visible or heavy is not the test, which is why invisible air still counts." },
    { q: "Which of these is NOT matter?", a: "Shadow", choices: ["Shadow", "Air", "Smoke"], explain: "Matter must have mass and take up space. A shadow is only a dark area where light is blocked; it has no mass, so it is not matter." },
    { q: "Which of these is matter?", a: "Air", choices: ["Air", "Light", "Heat"], explain: "Matter has mass and takes up space. Air does, even though we cannot see it, while light and heat are forms of energy, not matter." },
    { q: "Why is air considered matter?", a: "It has mass and takes up space", choices: ["It has mass and takes up space", "We can see it moving", "It makes sound"], explain: "Anything counts as matter if it has mass and takes up space. Air does both, so it is matter even though we cannot see it." },
    { q: "A block of wood is moved from a square box into a round bowl. What happens to its shape and volume?", a: "Both shape and volume stay the same", choices: ["Both shape and volume stay the same", "Shape stays the same but volume changes", "Shape changes but volume stays the same"], explain: "A solid's particles are locked tightly in place, so it keeps both its shape and its volume no matter what container it sits in." },
    { q: "Water is poured from a round bowl into a tall glass. What changes?", a: "Its shape changes, but its volume stays the same", choices: ["Its shape changes, but its volume stays the same", "Both its shape and volume change", "Neither its shape nor its volume changes"], explain: "A liquid keeps a fixed volume but flows to fit its container. The same amount of water just takes a different shape in the tall glass." },
    { q: "Which state of matter can be compressed?", a: "Gas", choices: ["Gas", "Liquid", "Solid"], explain: "A gas can be squeezed smaller because its particles are far apart with lots of empty space between them. Solids and liquids have little space to compress." },
    { q: "Air is released from a small balloon into a large room. What will the air do?", a: "Spread out to fill the whole room — no fixed shape or volume", choices: ["Spread out to fill the whole room — no fixed shape or volume", "Stay as a balloon-shaped pocket of air", "Compress itself into a tiny ball in the corner"], explain: "A gas has no fixed shape or volume. Its particles move freely, so released air spreads out to fill whatever space is available." },
    { q: "Which of these is a gas?", a: "Water vapour", choices: ["Water vapour", "Ice", "Juice"], explain: "Water vapour is water in its gas state, with particles spread far apart. Ice is a solid and juice is a liquid." },
    { q: "Is a shadow matter?", a: "No, it has no mass", choices: ["No, it has no mass", "Yes, we can see it", "Yes, it has a shape"], explain: "Matter must have mass and take up space. A shadow is just a dark area where light is blocked, with no mass, so it is not matter." },
  ]).map((item) => ({
    explain: item.explain,
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

// Module 2: Mass, Volume, and Measurement
function buildP4sMt2() {
  return shuffle([
    { q: "An object is placed on a balance. Which measurement does the balance reading show?", a: "Mass — the amount of matter in the object", choices: ["Mass — the amount of matter in the object", "Volume — the space the object takes up", "Temperature — how hot the object is"], explain: "A balance measures mass, which is the amount of matter inside an object. Volume is measured with a measuring cylinder, not a balance." },
    { q: "What unit do we use to measure mass?", a: "Grams or kilograms", choices: ["Grams or kilograms", "Millilitres", "Centimetres"], explain: "Mass is measured in grams or kilograms. Millilitres measure volume and centimetres measure length, so they answer different questions." },
    { q: "What instrument do we use to measure mass?", a: "A balance", choices: ["A balance", "A measuring cylinder", "A ruler"], explain: "Mass is measured with a balance. A measuring cylinder is for the volume of liquids and a ruler is for length." },
    { q: "Which measurement describes how much space an object takes up?", a: "Volume", choices: ["Volume", "Mass", "Temperature"], explain: "Volume is the amount of space an object fills, measured in mL or cm³. Mass tells how much matter is inside it, and temperature tells how hot it is." },
    { q: "What unit do we use to measure the volume of a liquid?", a: "Millilitres (mL)", choices: ["Millilitres (mL)", "Grams (g)", "Metres (m)"], explain: "Liquid volume is measured in millilitres. Grams measure mass and metres measure length, so they do not measure how much space a liquid fills." },
    { q: "How do we find the volume of an irregular solid?", a: "Water displacement method", choices: ["Water displacement method", "Measure with a ruler", "Weigh it on a balance"], explain: "An odd-shaped solid cannot be measured neatly with a ruler. Instead we sink it in water and use the water it pushes aside to find its volume." },
    { q: "In the water displacement method, the volume of the object equals?", a: "The rise in water level", choices: ["The rise in water level", "The total water level", "The weight of the water"], explain: "The sunken object pushes water out of its way, so the water level rises. That rise equals exactly the space the object takes up, which is its volume." },
    { q: "Does the mass of an object change when its shape changes?", a: "No, mass stays the same", choices: ["No, mass stays the same", "Yes, it increases", "Yes, it decreases"], explain: "Reshaping does not add or remove matter, so the mass stays the same. Squashing clay into a ball, for example, keeps the same amount of stuff." },
    { q: "1 mL is equal to?", a: "1 cm³", choices: ["1 cm³", "1 g", "1 m"], explain: "Millilitres and cubic centimetres measure the same thing, volume, and are equal in size. Grams and metres measure mass and length instead." },
    { q: "When reading a measuring cylinder, your eyes should be at?", a: "The same level as the liquid surface", choices: ["The same level as the liquid surface", "Above the liquid surface", "Below the liquid surface"], explain: "Looking from above or below makes the reading appear wrong. Keeping your eyes level with the liquid surface gives an accurate, honest measurement." },
  ]).map((item) => ({
    explain: item.explain,
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

// Module 3: States of Matter and Changes
function buildP4sMt3() {
  return shuffle([
    { q: "When ice melts, it changes from a solid to a?", a: "Liquid", choices: ["Liquid", "Gas", "Solid"], explain: "Adding heat to a solid makes its particles move enough to break free and flow. This melting changes ice from a solid into liquid water." },
    { q: "When water boils, it changes from a liquid to a?", a: "Gas", choices: ["Gas", "Solid", "Liquid"], explain: "Strong heating gives liquid particles enough energy to escape into the air. Boiling changes liquid water into a gas called water vapour." },
    { q: "When water vapour condenses, it changes from a gas to a?", a: "Liquid", choices: ["Liquid", "Solid", "Gas"], explain: "Cooling a gas makes its particles slow and join together. Condensation changes water vapour back into liquid water droplets." },
    { q: "When water freezes, it changes from a liquid to a?", a: "Solid", choices: ["Solid", "Gas", "Liquid"], explain: "Cooling a liquid enough makes its particles lock into place. Freezing changes liquid water into solid ice." },
    { q: "What is evaporation?", a: "Liquid changing to gas without boiling", choices: ["Liquid changing to gas without boiling", "Solid changing to liquid", "Gas changing to solid"], explain: "Evaporation is a liquid slowly turning into a gas at its surface, even when not boiling. It is how puddles dry up on a warm day." },
    { q: "Water droplets forming on a cold glass is an example of?", a: "Condensation", choices: ["Condensation", "Evaporation", "Melting"], explain: "Water vapour in the air touches the cold glass, cools down, and turns back into liquid droplets. This gas-to-liquid change is condensation." },
    { q: "Does the mass of water change when it freezes into ice?", a: "No, mass is conserved", choices: ["No, mass is conserved", "Yes, it increases", "Yes, it decreases"], explain: "Freezing only rearranges the particles; none are added or lost. So the same amount of matter remains and the mass stays exactly the same." },
    { q: "Wet clothes drying on a line is an example of?", a: "Evaporation", choices: ["Evaporation", "Condensation", "Freezing"], explain: "The water in the wet clothes slowly turns into a gas and drifts into the air, even without boiling. This liquid-to-gas change is evaporation." },
    { q: "At what temperature does water boil?", a: "100°C", choices: ["100°C", "0°C", "50°C"], explain: "Water boils and turns to gas at 100 degrees Celsius. This fixed boiling point is a useful property we can rely on." },
    { q: "At what temperature does water freeze?", a: "0°C", choices: ["0°C", "100°C", "50°C"], explain: "Water freezes and turns to solid ice at 0 degrees Celsius. This fixed freezing point is the same for pure water every time." },
  ]).map((item) => ({
    explain: item.explain,
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
