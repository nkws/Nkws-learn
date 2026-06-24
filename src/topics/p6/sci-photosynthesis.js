import { shuffle } from "../../utils/helpers";

export const P6_PHOTOSYNTHESIS_INTRO = {
  "p6s-ph1": {
    title: "Photosynthesis",
    pages: [
      { text: "Plants are producers — they make their own food through photosynthesis!", emoji: "🌿 ☀️ 🍽️" },
      { text: "Photosynthesis uses water, carbon dioxide, and sunlight to produce glucose (food) and oxygen.", emoji: "💧 + CO₂ + ☀️ = 🍬 + O₂" },
    ],
  },
};

function buildP6sPh1() {
  return shuffle([
    { q: "What is photosynthesis?", a: "The process by which plants make food using sunlight", choices: ["The process by which plants make food using sunlight", "The process of breathing", "How animals find food"], explain: "Plants are food-makers, not food-finders. Photosynthesis is how a leaf traps the Sun's light energy and uses it to build its own food, so the plant never has to eat." },
    { q: "What three things do plants need for photosynthesis?", a: "Water, carbon dioxide, and sunlight", choices: ["Water, carbon dioxide, and sunlight", "Soil, oxygen, and heat", "Minerals, nitrogen, and wind"], explain: "Photosynthesis has three raw ingredients: water from the roots, carbon dioxide from the air, and sunlight as the energy. Remove any one and the leaf cannot make food." },
    { q: "What does photosynthesis produce?", a: "Glucose (food) and oxygen", choices: ["Glucose (food) and oxygen", "Carbon dioxide and water", "Minerals and soil"], explain: "The leaf joins water and carbon dioxide using light energy to make glucose, the plant's food. Oxygen is given off as a by-product, which is why plants help keep our air fresh." },
    { q: "Where does photosynthesis mainly occur?", a: "In the leaves", choices: ["In the leaves", "In the roots", "In the stem"], explain: "Leaves are wide and flat to catch the most sunlight, and they hold the green chlorophyll that traps light. That is why photosynthesis happens mainly there, not in the dark roots." },
    { q: "The green pigment in leaves that captures sunlight is?", a: "Chlorophyll", choices: ["Chlorophyll", "Oxygen", "Glucose"], explain: "Chlorophyll is the green substance that traps light energy from the Sun. Without it the leaf could not capture the energy needed to start photosynthesis, so leaves look green." },
    { q: "Plants are called producers because?", a: "They make their own food", choices: ["They make their own food", "They eat other plants", "They produce carbon dioxide"], explain: "In a food chain, producers are the organisms that make their own food by photosynthesis. Everything else is a consumer that must eat, so the plant sits at the start." },
    { q: "The oxygen released during photosynthesis?", a: "Is used by animals for breathing", choices: ["Is used by animals for breathing", "Is poisonous", "Goes into the soil"], explain: "Oxygen leaves the leaf as a useful waste product. Animals, including us, breathe it in to release energy from food, so plants and animals depend on each other." },
    { q: "Without sunlight, can a plant carry out photosynthesis?", a: "No", choices: ["No", "Yes, it uses moonlight", "Yes, it uses soil instead"], explain: "Sunlight is the energy source that powers photosynthesis. With no light there is no energy to join water and carbon dioxide, so no food can be made, even in rich soil." },
    { q: "A plant kept in a dark room for weeks will?", a: "Weaken and eventually die because it cannot make food", choices: ["Weaken and eventually die because it cannot make food", "Grow faster", "Turn into a mushroom"], explain: "No light means no photosynthesis, so the plant cannot make glucose for energy. It uses up its stores, weakens, and dies, showing how vital sunlight is to a plant." },
    { q: "Carbon dioxide enters the leaf through?", a: "Tiny openings on the leaf surface", choices: ["Tiny openings on the leaf surface", "The roots", "The stem"], explain: "Carbon dioxide is a gas in the air, so it enters through tiny pores on the leaf surface. Water comes from the roots, but the gas needed for food-making comes in here." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6s-ph1": buildP6sPh1 };
export const P6_PHOTOSYNTHESIS_QUESTION_COUNTS = { "p6s-ph1": 10 };
export function buildPhotosynthesisQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
