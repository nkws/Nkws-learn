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
    { q: "What provides the energy to drive the water cycle?", a: "The Sun", choices: ["The Sun", "The Moon", "Wind"] , explain: "The whole water cycle is powered by the Sun's heat. The Sun warms water so it evaporates and rises, which then cools, condenses and falls again — without that heat the cycle would stop." },
    { q: "When water changes from liquid to gas, this is called?", a: "Evaporation", choices: ["Evaporation", "Condensation", "Freezing"], explain: "Evaporation is when liquid water gains heat and turns into water vapour, a gas. The Sun's heat causes it, lifting water up into the air to start the cycle." },
    { q: "When water vapour cools and forms tiny water droplets, this is called?", a: "Condensation", choices: ["Condensation", "Evaporation", "Melting"], explain: "Condensation is the opposite of evaporation: as water vapour rises and cools, the gas turns back into tiny liquid droplets. These droplets gather to form clouds." },
    { q: "What are clouds made of?", a: "Tiny water droplets", choices: ["Tiny water droplets", "Smoke", "Cotton"], explain: "Clouds form when water vapour condenses high in the cool sky. The vapour becomes countless tiny water droplets, and so many together are what we see as a cloud." },
    { q: "Rain, snow, and hail falling from clouds is called?", a: "Precipitation", choices: ["Precipitation", "Evaporation", "Condensation"], explain: "When cloud droplets join and grow too heavy to float, they fall to the ground. We call all forms of this falling water — rain, snow and hail — precipitation." },
    { q: "Where does most evaporation on Earth happen?", a: "Oceans", choices: ["Oceans", "Deserts", "Forests"], explain: "Evaporation needs a large surface of water and the Sun's heat. Oceans cover most of the Earth, so far more water evaporates from them than from anywhere else." },
    { q: "After rain falls on land, water flows into rivers and eventually?", a: "Back to the ocean", choices: ["Back to the ocean", "Into space", "Underground forever"], explain: "The water cycle is a loop, so water returns to where it can evaporate again. Rain on land runs into rivers, which carry it back to the ocean to repeat the cycle." },
    { q: "The water cycle is important because?", a: "It provides fresh water for living things", choices: ["It provides fresh water for living things", "It creates new water", "It removes all water from Earth"], explain: "When water evaporates it leaves salt behind, so the rain that falls is fresh. The cycle keeps recycling Earth's water and supplies the fresh water that living things need." },
    { q: "Does the water cycle ever stop?", a: "No, it is a continuous process", choices: ["No, it is a continuous process", "Yes, it stops at night", "Yes, it stops in winter"], explain: "The cycle keeps repeating because evaporation, condensation and precipitation happen somewhere on Earth all the time. The same water is recycled over and over without stopping." },
    { q: "Water that seeps into the ground becomes?", a: "Groundwater", choices: ["Groundwater", "Sea water", "Air"], explain: "Not all rain runs into rivers — some soaks down into the soil and rock. This water stored underground is called groundwater, and it is still part of the water cycle." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5s-wc1": buildP5sWc1 };
export const P5_WATER_CYCLE_QUESTION_COUNTS = { "p5s-wc1": 10 };
export function buildWaterCycleQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
