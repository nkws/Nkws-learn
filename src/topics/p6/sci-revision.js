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
    { q: "Which part of a plant absorbs water from the soil?", a: "Roots", choices: ["Roots", "Leaves", "Stem"], explain: "Each plant part has its job. Roots reach down into the soil and take in water, which then travels up the stem to the leaves for photosynthesis." },
    { q: "What gas do plants take in during photosynthesis?", a: "Carbon dioxide", choices: ["Carbon dioxide", "Oxygen", "Nitrogen"], explain: "In photosynthesis a leaf uses light to join water with carbon dioxide from the air to make food. So the gas taken in is carbon dioxide, while oxygen is given out." },
    { q: "Which type of force slows down moving objects?", a: "Friction", choices: ["Friction", "Gravity", "Magnetic force"], explain: "Friction acts between surfaces that rub together and always pushes against motion. Because it opposes movement, it is the force that slows moving objects down." },
    { q: "An electrical circuit must be ___ for current to flow.", a: "Closed (complete)", choices: ["Closed (complete)", "Open (broken)", "Short"], explain: "Electric current needs an unbroken loop to travel around. Only a closed, complete circuit gives it a full path, so a break anywhere stops the current flowing." },
    { q: "In a food chain, the arrow points from?", a: "The organism being eaten to the one eating it", choices: ["The organism being eaten to the one eating it", "The predator to the prey", "Left to right always"], explain: "Each arrow shows energy flowing from the food to the feeder, meaning is eaten by. So it points from the organism being eaten to the one eating it, tracing energy along the chain." },
    { q: "Water evaporates faster when the temperature is?", a: "Higher", choices: ["Higher", "Lower", "The same"], explain: "Heat gives water particles more energy to escape into the air as vapour. So the higher the temperature, the faster evaporation happens." },
    { q: "Which body system breaks down food into nutrients?", a: "Digestive system", choices: ["Digestive system", "Respiratory system", "Circulatory system"], explain: "Each body system has a role. The digestive system breaks food down into nutrients the body can absorb, while breathing and blood transport are done by other systems." },
    { q: "A metal spoon in hot soup gets warm. This is because metal is a good?", a: "Conductor of heat", choices: ["Conductor of heat", "Insulator", "Magnet"], explain: "A conductor lets heat pass through it easily. Metal is a good conductor, so heat from the hot soup travels up the spoon and warms the handle." },
    { q: "Which of these is NOT a form of energy?", a: "Weight", choices: ["Weight", "Heat", "Light"], explain: "Heat and light are forms of energy, but weight is the pull of gravity on an object, which is a force. Forces and energy are different, so weight is not a form of energy." },
    { q: "Deforestation harms the environment mainly because?", a: "Animals lose their habitats and less oxygen is produced", choices: ["Animals lose their habitats and less oxygen is produced", "It makes the land look ugly", "Trees are expensive to replant"], explain: "Trees are homes for animals and they give out oxygen during photosynthesis. Cutting them down leaves animals without habitats and produces less oxygen, which is the real harm." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6s-re1": buildP6sRe1 };
export const P6_REVISION_QUESTION_COUNTS = { "p6s-re1": 10 };
export function buildRevisionQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
