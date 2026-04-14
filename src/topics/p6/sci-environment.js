import { shuffle } from "../../utils/helpers";

export const P6_ENVIRONMENT_INTRO = {
  "p6s-ev1": {
    title: "Adaptations and the Environment",
    pages: [
      { text: "Living things have special features called adaptations that help them survive in their environment!", emoji: "🌵 🐪 🦎" },
      { text: "Human activities can harm the environment — pollution, deforestation, and overuse of resources. But we can also help through conservation!", emoji: "🏭 ❌ 🌍 ✅" },
    ],
  },
};

function buildP6sEv1() {
  return shuffle([
    { q: "An adaptation is?", a: "A feature that helps an organism survive in its environment", choices: ["A feature that helps an organism survive in its environment", "A disease", "A type of food"] },
    { q: "A cactus has thick stems to?", a: "Store water in the desert", choices: ["Store water in the desert", "Attract bees", "Block sunlight"] },
    { q: "A polar bear has thick fur to?", a: "Keep warm in the cold", choices: ["Keep warm in the cold", "Swim faster", "Hide from predators"] },
    { q: "A chameleon changes colour to?", a: "Camouflage itself from predators", choices: ["Camouflage itself from predators", "Attract mates only", "Cool down in the sun"] },
    { q: "Structural adaptations are?", a: "Physical features of an organism", choices: ["Physical features of an organism", "Behaviours of an organism", "Diseases of an organism"] },
    { q: "Behavioural adaptations are?", a: "Actions an organism takes to survive", choices: ["Actions an organism takes to survive", "Physical features", "Changes in body structure"] },
    { q: "Birds migrating to warmer places in winter is an example of?", a: "Behavioural adaptation", choices: ["Behavioural adaptation", "Structural adaptation", "Decomposition"] },
    { q: "A fish has gills. This is an example of?", a: "Structural adaptation for breathing underwater", choices: ["Structural adaptation for breathing underwater", "Behavioural adaptation", "Decomposition"] },
    { q: "What does a Venus flytrap do to survive in nutrient-poor soil?", a: "Catches and digests insects", choices: ["Catches and digests insects", "Grows very tall", "Moves to better soil"] },
    { q: "Nocturnal animals are active at night. This helps them?", a: "Avoid predators and heat during the day", choices: ["Avoid predators and heat during the day", "See better", "Grow faster"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6sEv2() {
  return shuffle([
    { q: "Deforestation means?", a: "Cutting down large areas of forest", choices: ["Cutting down large areas of forest", "Planting new trees", "Building parks"] },
    { q: "Deforestation harms the environment because?", a: "Animals lose their habitats and less carbon dioxide is absorbed", choices: ["Animals lose their habitats and less carbon dioxide is absorbed", "It creates more rain", "Trees grow back immediately"] },
    { q: "Water pollution can be caused by?", a: "Factories dumping waste into rivers", choices: ["Factories dumping waste into rivers", "Fish swimming", "Rain falling"] },
    { q: "Air pollution can be caused by?", a: "Vehicle exhaust and factory emissions", choices: ["Vehicle exhaust and factory emissions", "Plants releasing oxygen", "Wind blowing"] },
    { q: "What is conservation?", a: "Protecting and preserving the natural environment", choices: ["Protecting and preserving the natural environment", "Building more factories", "Cutting down forests for farms"] },
    { q: "Recycling helps the environment by?", a: "Reducing waste and saving resources", choices: ["Reducing waste and saving resources", "Creating more pollution", "Using more energy"] },
    { q: "Endangered species are?", a: "Species at risk of dying out completely", choices: ["Species at risk of dying out completely", "Species that are very common", "Species that live in cities"] },
    { q: "Using less electricity helps the environment because?", a: "Less fossil fuels are burned to generate power", choices: ["Less fossil fuels are burned to generate power", "It makes lights brighter", "It creates more heat"] },
    { q: "A nature reserve is set up to?", a: "Protect habitats and the organisms living in them", choices: ["Protect habitats and the organisms living in them", "Allow hunting", "Build houses"] },
    { q: "Reducing, reusing, and recycling are called?", a: "The 3Rs", choices: ["The 3Rs", "The 3Cs", "The 3Ps"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6s-ev1": buildP6sEv1, "p6s-ev2": buildP6sEv2 };
export const P6_ENVIRONMENT_QUESTION_COUNTS = { "p6s-ev1": 10, "p6s-ev2": 10 };
export function buildEnvironmentQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
