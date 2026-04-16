import { shuffle } from "../../utils/helpers";

export const P6_REVISION_INTRO = {
  "p6s-re1": {
    title: "PSLE Science Revision",
    pages: [
      { text: "PSLE Science tests topics from P3 to P6. This revision mixes questions across all themes!", emoji: "📚 P3→P6" },
      { text: "Key themes: Diversity, Cycles, Systems, Interactions, Energy. Think about how concepts connect.", emoji: "🔗 🧠" },
    ],
  },
};

function buildP6sRe1() {
  return shuffle([
    { q: "Which part of a plant absorbs water from the soil?", a: "Roots", choices: ["Roots", "Leaves", "Stem"] },
    { q: "What gas do plants take in during photosynthesis?", a: "Carbon dioxide", choices: ["Carbon dioxide", "Oxygen", "Nitrogen"] },
    { q: "Which type of force slows down moving objects?", a: "Friction", choices: ["Friction", "Gravity", "Magnetic force"] },
    { q: "An electrical circuit must be ___ for current to flow.", a: "Closed (complete)", choices: ["Closed (complete)", "Open (broken)", "Short"] },
    { q: "In a food chain, the arrow points from?", a: "The organism being eaten to the one eating it", choices: ["The organism being eaten to the one eating it", "The predator to the prey", "Left to right always"] },
    { q: "Water evaporates faster when the temperature is?", a: "Higher", choices: ["Higher", "Lower", "The same"] },
    { q: "Which body system breaks down food into nutrients?", a: "Digestive system", choices: ["Digestive system", "Respiratory system", "Circulatory system"] },
    { q: "A metal spoon in hot soup gets warm. This is because metal is a good?", a: "Conductor of heat", choices: ["Conductor of heat", "Insulator", "Magnet"] },
    { q: "Which of these is NOT a form of energy?", a: "Weight", choices: ["Weight", "Heat", "Light"] },
    { q: "Deforestation harms the environment mainly because?", a: "Animals lose their habitats and less oxygen is produced", choices: ["Animals lose their habitats and less oxygen is produced", "It makes the land look ugly", "Trees are expensive to replant"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6s-re1": buildP6sRe1 };
export const P6_REVISION_QUESTION_COUNTS = { "p6s-re1": 10 };
export function buildRevisionQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
