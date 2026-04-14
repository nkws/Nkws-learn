import { shuffle } from "../../utils/helpers";

export const P4_LIGHT_INTRO = {
  "p4s-lg1": {
    title: "Light Energy",
    pages: [
      {
        text: "Light is a form of energy. Objects that produce their own light are called light sources — like the Sun, fire, and light bulbs!",
        emoji: "☀️ 🔥 💡",
      },
      {
        text: "Light travels in straight lines. That is why we cannot see around corners!",
        emoji: "➡️ 🧱 👀",
      },
      {
        text: "When light hits an opaque object, a shadow forms on the other side. The shadow's size depends on the distance between the light, object, and screen.",
        emoji: "💡 ✋ 👤",
      },
    ],
  },
};

// Module 1: Sources and Properties of Light
function buildP4sLg1() {
  return shuffle([
    { q: "Which of these is a source of light?", a: "The Sun", choices: ["The Sun", "The Moon", "A mirror"] },
    { q: "The Moon is NOT a source of light because?", a: "It reflects light from the Sun", choices: ["It reflects light from the Sun", "It only shines at night", "It is too far away"] },
    { q: "Light travels in?", a: "Straight lines", choices: ["Straight lines", "Curved lines", "Zigzag lines"] },
    { q: "Why can we not see around corners?", a: "Light travels in straight lines", choices: ["Light travels in straight lines", "Our eyes are too small", "Walls absorb light"] },
    { q: "Which of these is a light source?", a: "A firefly", choices: ["A firefly", "A diamond", "A glass window"] },
    { q: "We can see objects that do not produce light because?", a: "Light reflects off them into our eyes", choices: ["Light reflects off them into our eyes", "Our eyes produce light", "Objects glow in the dark"] },
    { q: "A mirror is NOT a light source because?", a: "It only reflects light from other sources", choices: ["It only reflects light from other sources", "It is flat", "It is made of glass"] },
    { q: "Which produces its own light?", a: "A candle flame", choices: ["A candle flame", "The Moon", "A white wall"] },
    { q: "Light bouncing off a surface is called?", a: "Reflection", choices: ["Reflection", "Absorption", "Evaporation"] },
    { q: "Stars are light sources because?", a: "They produce their own light", choices: ["They produce their own light", "They reflect moonlight", "They are very big"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

// Module 2: Shadows
function buildP4sLg2() {
  return shuffle([
    { q: "A shadow forms when light is blocked by?", a: "An opaque object", choices: ["An opaque object", "A transparent object", "Air"] },
    { q: "An opaque object?", a: "Does not allow light to pass through", choices: ["Does not allow light to pass through", "Allows all light through", "Allows some light through"] },
    { q: "A translucent object?", a: "Allows some light to pass through", choices: ["Allows some light to pass through", "Blocks all light", "Produces light"] },
    { q: "A transparent object?", a: "Allows most light to pass through", choices: ["Allows most light to pass through", "Blocks all light", "Allows no light through"] },
    { q: "Which of these is opaque?", a: "A wooden door", choices: ["A wooden door", "A glass window", "Frosted glass"] },
    { q: "Which of these is translucent?", a: "Frosted glass", choices: ["Frosted glass", "A brick wall", "Clear water"] },
    { q: "Which of these is transparent?", a: "Clear glass", choices: ["Clear glass", "A book", "Wax paper"] },
    { q: "Moving an object closer to the light source makes its shadow?", a: "Larger", choices: ["Larger", "Smaller", "The same size"] },
    { q: "Moving an object closer to the screen makes its shadow?", a: "Smaller", choices: ["Smaller", "Larger", "Disappear"] },
    { q: "A shadow forms on which side of the object?", a: "The side opposite to the light source", choices: ["The side opposite to the light source", "The same side as the light source", "Above the object"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const LIGHT_BUILDERS = {
  "p4s-lg1": buildP4sLg1,
  "p4s-lg2": buildP4sLg2,
};

export const P4_LIGHT_QUESTION_COUNTS = {
  "p4s-lg1": 10, "p4s-lg2": 10,
};

export function buildLightQuestions(moduleId) {
  const builder = LIGHT_BUILDERS[moduleId];
  return builder ? builder() : [];
}
