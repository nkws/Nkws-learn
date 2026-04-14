import { shuffle } from "../../utils/helpers";

export const P5_WATER_CYCLE_INTRO = {
  "p5s-wc1": {
    title: "The Water Cycle",
    pages: [
      { text: "Water on Earth is constantly recycled through a process called the water cycle!", emoji: "🌊 🔄 ☁️" },
      { text: "The Sun heats water in rivers, lakes, and oceans, causing it to evaporate into water vapour. This rises into the sky!", emoji: "☀️ 💧 ⬆️" },
      { text: "As water vapour rises and cools, it condenses into tiny water droplets forming clouds. When droplets get heavy enough, they fall as rain!", emoji: "☁️ 🌧️ 🌍" },
    ],
  },
};

function buildP5sWc1() {
  return shuffle([
    { q: "What provides the energy to drive the water cycle?", a: "The Sun", choices: ["The Sun", "The Moon", "Wind"] },
    { q: "When water changes from liquid to gas, this is called?", a: "Evaporation", choices: ["Evaporation", "Condensation", "Freezing"] },
    { q: "When water vapour cools and forms tiny water droplets, this is called?", a: "Condensation", choices: ["Condensation", "Evaporation", "Melting"] },
    { q: "What are clouds made of?", a: "Tiny water droplets", choices: ["Tiny water droplets", "Smoke", "Cotton"] },
    { q: "Rain, snow, and hail falling from clouds is called?", a: "Precipitation", choices: ["Precipitation", "Evaporation", "Condensation"] },
    { q: "Where does most evaporation on Earth happen?", a: "Oceans", choices: ["Oceans", "Deserts", "Forests"] },
    { q: "After rain falls on land, water flows into rivers and eventually?", a: "Back to the ocean", choices: ["Back to the ocean", "Into space", "Underground forever"] },
    { q: "The water cycle is important because?", a: "It provides fresh water for living things", choices: ["It provides fresh water for living things", "It creates new water", "It removes all water from Earth"] },
    { q: "Does the water cycle ever stop?", a: "No, it is a continuous process", choices: ["No, it is a continuous process", "Yes, it stops at night", "Yes, it stops in winter"] },
    { q: "Water that seeps into the ground becomes?", a: "Groundwater", choices: ["Groundwater", "Sea water", "Air"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5s-wc1": buildP5sWc1 };
export const P5_WATER_CYCLE_QUESTION_COUNTS = { "p5s-wc1": 10 };
export function buildWaterCycleQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
