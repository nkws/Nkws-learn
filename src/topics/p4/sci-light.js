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
    { q: "Which of these is a source of light?", a: "The Sun", choices: ["The Sun", "The Moon", "A mirror"], explain: "A light source makes its own light. The Sun does, but the Moon and a mirror only reflect light from elsewhere, so they are not sources." },
    { q: "The Moon is NOT a source of light because?", a: "It reflects light from the Sun", choices: ["It reflects light from the Sun", "It only shines at night", "It is too far away"], explain: "A light source produces its own light. The Moon makes none; it shines only because it reflects the Sun's light, so it is not a source." },
    { q: "Light travels in?", a: "Straight lines", choices: ["Straight lines", "Curved lines", "Zigzag lines"], explain: "Light always travels in straight lines. This rule explains shadows, beams, and why we cannot see around corners." },
    { q: "Why can we not see around corners?", a: "Light travels in straight lines", choices: ["Light travels in straight lines", "Our eyes are too small", "Walls absorb light"], explain: "Because light travels in straight lines, it cannot bend around a corner to reach your eyes, so you cannot see what is hidden behind it." },
    { q: "Which of these is a light source?", a: "A firefly", choices: ["A firefly", "A diamond", "A glass window"], explain: "A light source makes its own light. A firefly glows on its own, while a diamond and a window only reflect or let light pass through." },
    { q: "We can see objects that do not produce light because?", a: "Light reflects off them into our eyes", choices: ["Light reflects off them into our eyes", "Our eyes produce light", "Objects glow in the dark"], explain: "Our eyes do not make light. We see non-glowing objects only when light bounces off them and travels into our eyes, which is why a dark room looks black." },
    { q: "A mirror is NOT a light source because?", a: "It only reflects light from other sources", choices: ["It only reflects light from other sources", "It is flat", "It is made of glass"], explain: "A light source produces its own light. A mirror makes none of its own; it just bounces back light from other sources, so it is not a source." },
    { q: "Which produces its own light?", a: "A candle flame", choices: ["A candle flame", "The Moon", "A white wall"], explain: "A light source makes its own light, like a candle flame. The Moon and a white wall only reflect light that falls on them." },
    { q: "Light bouncing off a surface is called?", a: "Reflection", choices: ["Reflection", "Absorption", "Evaporation"], explain: "When light hits a surface and bounces back, we call it reflection. It is how mirrors work and how we see objects that make no light of their own." },
    { q: "Stars are light sources because?", a: "They produce their own light", choices: ["They produce their own light", "They reflect moonlight", "They are very big"], explain: "A light source makes its own light. Stars burn and give off their own light, so they are sources, unlike the Moon which only reflects." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

// Module 2: Shadows
function buildP4sLg2() {
  return shuffle([
    { q: "A shadow forms when light is blocked by?", a: "An opaque object", choices: ["An opaque object", "A transparent object", "Air"] , explain: "A shadow is a dark area where light cannot reach. It forms when an opaque object blocks the straight path of light, leaving a dark shape behind it." },
    { q: "An opaque object?", a: "Does not allow light to pass through", choices: ["Does not allow light to pass through", "Allows all light through", "Allows some light through"], explain: "Opaque means light cannot pass through at all. Because the light is fully blocked, opaque objects cast clear, dark shadows." },
    { q: "A translucent object?", a: "Allows some light to pass through", choices: ["Allows some light to pass through", "Blocks all light", "Produces light"], explain: "Translucent means only some light gets through, so you cannot see clearly through it. Frosted glass is a good example." },
    { q: "A transparent object?", a: "Allows most light to pass through", choices: ["Allows most light to pass through", "Blocks all light", "Allows no light through"], explain: "Transparent means nearly all light passes straight through, so you can see clearly through it, like clear glass or clean water." },
    { q: "Which of these is opaque?", a: "A wooden door", choices: ["A wooden door", "A glass window", "Frosted glass"], explain: "Opaque objects block all light. A wooden door lets no light through, while a window is transparent and frosted glass is translucent." },
    { q: "Which of these is translucent?", a: "Frosted glass", choices: ["Frosted glass", "A brick wall", "Clear water"], explain: "Translucent lets only some light through so you see a blurry view. Frosted glass does this, while a brick wall is opaque and clear water is transparent." },
    { q: "Which of these is transparent?", a: "Clear glass", choices: ["Clear glass", "A book", "Wax paper"], explain: "Transparent lets almost all light through so you see clearly. Clear glass does this, while a book is opaque and wax paper is translucent." },
    { q: "Moving an object closer to the light source makes its shadow?", a: "Larger", choices: ["Larger", "Smaller", "The same size"], explain: "Light spreads out in straight lines from the source. Closer to the light, the object blocks more of those spreading rays, so its shadow grows larger." },
    { q: "Moving an object closer to the screen makes its shadow?", a: "Smaller", choices: ["Smaller", "Larger", "Disappear"], explain: "When the object is nearer the screen, it blocks fewer of the spreading light rays, so the shadow shrinks closer to the object's real size." },
    { q: "A shadow forms on which side of the object?", a: "The side opposite to the light source", choices: ["The side opposite to the light source", "The same side as the light source", "Above the object"], explain: "Light travels in straight lines and is blocked by the object, so the dark shadow falls on the far side, away from the light." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
