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
    { q: "What is the weather like when the sun is shining?", a: "Sunny", choices: ["Sunny", "Rainy", "Stormy"], explain: "We name weather after what we see in the sky. When the bright sun shines and it feels warm, we call it sunny." },
    { q: "What is the weather like when water falls from the sky?", a: "Rainy", choices: ["Sunny", "Rainy", "Windy"], explain: "When water drops fall down from the clouds, we call that weather rainy." },
    { q: "What is the weather like when clouds cover the sky?", a: "Cloudy", choices: ["Cloudy", "Sunny", "Stormy"], explain: "When grey clouds cover the sky and hide the sun, we call that weather cloudy." },
    { q: "What is the weather like when the air blows hard?", a: "Windy", choices: ["Rainy", "Windy", "Sunny"], explain: "When the air blows hard enough to move trees and hats, we call that weather windy." },
    { q: "What is the weather like when there is thunder?", a: "Stormy", choices: ["Sunny", "Cloudy", "Stormy"], explain: "Loud thunder and flashes of lightning come together in a big storm, so that weather is called stormy." },
    { q: "On a sunny day, the sky is usually ___.", a: "Blue", choices: ["Blue", "Black", "Green"], explain: "When the sun shines and there are few clouds, sunlight makes the sky look a clear blue colour." },
    { q: "What falls from clouds when it rains?", a: "Water", choices: ["Water", "Sand", "Rocks"], explain: "Rain is made of tiny water drops that grow heavy in the clouds and then fall down as water." },
    { q: "Which weather has lightning?", a: "Stormy", choices: ["Sunny", "Cloudy", "Stormy"], explain: "Bright flashes of lightning happen in a storm along with thunder, so lightning means the weather is stormy." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildWt2() {
  return shuffle([
    { q: "What should you bring when it is rainy?", a: "Umbrella", choices: ["Umbrella", "Sunglasses", "Shorts"], explain: "We dress for the weather to stay comfy. Rain falls from the sky, so an umbrella keeps you dry." },
    { q: "What should you wear when it is sunny?", a: "Sunglasses", choices: ["Umbrella", "Sunglasses", "Scarf"], explain: "On a sunny day the bright light can hurt your eyes, so sunglasses shade them and help you see." },
    { q: "What should you wear when it is cold?", a: "Jacket", choices: ["Jacket", "Swimsuit", "Shorts"], explain: "When the weather is cold you need to trap warmth, so a thick jacket keeps your body cosy and warm." },
    { q: "What should you wear on a hot day?", a: "Shorts", choices: ["Jacket", "Scarf", "Shorts"], explain: "On a hot day you want to stay cool, so light, airy clothes like shorts help your body not get too warm." },
    { q: "On a rainy day, you should wear ___.", a: "Rain boots", choices: ["Rain boots", "Sandals", "Flip flops"], explain: "Rain makes the ground wet and full of puddles, so rain boots keep your feet dry while you splash." },
    { q: "On a cold day, what keeps your hands warm?", a: "Gloves", choices: ["Gloves", "Sunglasses", "Shorts"], explain: "Cold weather makes your fingers chilly, so gloves cover your hands and trap warmth to keep them cosy." },
    { q: "What do you wear on your head to block the sun?", a: "A hat", choices: ["A hat", "Gloves", "Rain boots"], explain: "On a sunny day, something with a brim worn on your head shades your face from the sun, and that is a hat." },
    { q: "On a windy day, what might blow away?", a: "A hat", choices: ["A hat", "Your shoes", "Your bag"], explain: "Strong wind lifts light things, and a light hat sitting on your head can easily be blown right off." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildWt3() {
  return shuffle([
    { q: "When does the sun rise?", a: "Morning", choices: ["Morning", "Night", "Afternoon"], explain: "The sun comes up to start a new day, and that beginning of the day is the morning, so the sun rises then." },
    { q: "When does the sun set?", a: "Evening", choices: ["Morning", "Evening", "Midnight"], explain: "The sun goes down at the end of the day as it gets dark, and that time is the evening." },
    { q: "What do we see in the sky at night?", a: "Moon", choices: ["Sun", "Moon", "Rainbow"], explain: "At night the sun is gone and the sky is dark, so the bright round moon is what we see glowing up there." },
    { q: "Is it light or dark at night?", a: "Dark", choices: ["Light", "Dark", "Both"], explain: "At night the sun is not shining on our part of Earth, so there is no sunlight and it becomes dark." },
    { q: "Is it light or dark during the day?", a: "Light", choices: ["Light", "Dark", "Both"], explain: "In the daytime the sun shines on us and fills the sky with sunshine, so the day is bright and light." },
    { q: "What gives us light during the day?", a: "Sun", choices: ["Moon", "Stars", "Sun"], explain: "The sun is a giant ball of light in the sky, and its bright rays light up our whole day." },
    { q: "What do we see in the sky with the moon?", a: "Stars", choices: ["Stars", "Clouds", "Sun"], explain: "At night the dark sky lets faraway stars twinkle, so we see them shining around the moon." },
    { q: "When do you go to sleep?", a: "Night", choices: ["Morning", "Afternoon", "Night"], explain: "When it gets dark and quiet your body feels tired and ready to rest, so we usually sleep at night." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
