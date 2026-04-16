import { shuffle } from "../utils/helpers";
// ============ INTRO CONTENT ============

export const WEATHER_INTRO = {
  "wt-1": {
    title: "Types of Weather",
    pages: [
      { text: "Weather is what is happening outside! It changes every day.", emoji: "☀️ 🌧️ ☁️ 💨 ⛈️" },
      { text: "When it is SUNNY, the sun shines bright and it feels warm!", emoji: "☀️ 😎" },
      { text: "When it is RAINY, water falls from the clouds. Splash!", emoji: "🌧️ 💧" },
      { text: "When it is CLOUDY, clouds cover the sky and block the sun.", emoji: "☁️☁️☁️" },
      { text: "When it is WINDY, the air blows hard. Hold onto your hat!", emoji: "💨 🧢" },
      { text: "When it is STORMY, there is thunder and lightning. Stay inside!", emoji: "⛈️ ⚡" },
      { text: "Let's learn about weather together! Koko loves weather!", emoji: "🦊 🌤️ = 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildWt1() {
  return shuffle([
    { q: "What is the weather like when the sun is shining?", a: "Sunny", choices: ["Sunny", "Rainy", "Stormy"] },
    { q: "What is the weather like when water falls from the sky?", a: "Rainy", choices: ["Sunny", "Rainy", "Windy"] },
    { q: "What is the weather like when clouds cover the sky?", a: "Cloudy", choices: ["Cloudy", "Sunny", "Stormy"] },
    { q: "What is the weather like when the air blows hard?", a: "Windy", choices: ["Rainy", "Windy", "Sunny"] },
    { q: "What is the weather like when there is thunder?", a: "Stormy", choices: ["Sunny", "Cloudy", "Stormy"] },
    { q: "On a sunny day, the sky is usually ___.", a: "Blue", choices: ["Blue", "Black", "Green"] },
    { q: "What falls from clouds when it rains?", a: "Water", choices: ["Water", "Sand", "Rocks"] },
    { q: "Which weather has lightning?", a: "Stormy", choices: ["Sunny", "Cloudy", "Stormy"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildWt2() {
  return shuffle([
    { q: "What should you bring when it is rainy?", a: "Umbrella", choices: ["Umbrella", "Sunglasses", "Shorts"] },
    { q: "What should you wear when it is sunny?", a: "Sunglasses", choices: ["Umbrella", "Sunglasses", "Scarf"] },
    { q: "What should you wear when it is cold?", a: "Jacket", choices: ["Jacket", "Swimsuit", "Shorts"] },
    { q: "What should you wear on a hot day?", a: "Shorts", choices: ["Jacket", "Scarf", "Shorts"] },
    { q: "On a rainy day, you should wear ___.", a: "Rain boots", choices: ["Rain boots", "Sandals", "Flip flops"] },
    { q: "On a cold day, what keeps your hands warm?", a: "Gloves", choices: ["Gloves", "Sunglasses", "Shorts"] },
    { q: "What do you wear on your head to block the sun?", a: "A hat", choices: ["A hat", "Gloves", "Rain boots"] },
    { q: "On a windy day, what might blow away?", a: "A hat", choices: ["A hat", "Your shoes", "Your bag"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildWt3() {
  return shuffle([
    { q: "When does the sun rise?", a: "Morning", choices: ["Morning", "Night", "Afternoon"] },
    { q: "When does the sun set?", a: "Evening", choices: ["Morning", "Evening", "Midnight"] },
    { q: "What do we see in the sky at night?", a: "Moon", choices: ["Sun", "Moon", "Rainbow"] },
    { q: "Is it light or dark at night?", a: "Dark", choices: ["Light", "Dark", "Both"] },
    { q: "Is it light or dark during the day?", a: "Light", choices: ["Light", "Dark", "Both"] },
    { q: "What gives us light during the day?", a: "Sun", choices: ["Moon", "Stars", "Sun"] },
    { q: "What do we see in the sky with the moon?", a: "Stars", choices: ["Stars", "Clouds", "Sun"] },
    { q: "When do you go to sleep?", a: "Night", choices: ["Morning", "Afternoon", "Night"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "wt-1": buildWt1, "wt-2": buildWt2, "wt-3": buildWt3,
};

export const WEATHER_QUESTION_COUNTS = {
  "wt-1": 8, "wt-2": 8, "wt-3": 8,
};

export function buildWeatherQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
