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
    { q: "An adaptation is?", a: "A feature that helps an organism survive in its environment", choices: ["A feature that helps an organism survive in its environment", "A disease", "A type of food"], explain: "An adaptation is a feature or behaviour that suits an organism to its habitat, helping it find food, stay safe and survive. The feature always matches the place it lives." },
    { q: "A cactus has thick stems to?", a: "Store water in the desert", choices: ["Store water in the desert", "Attract bees", "Block sunlight"], explain: "Adaptations match the habitat. A desert is hot and dry with little rain, so the cactus stores water in its thick stem to survive the long dry spells." },
    { q: "A polar bear has thick fur to?", a: "Keep warm in the cold", choices: ["Keep warm in the cold", "Swim faster", "Hide from predators"], explain: "An adaptation suits the habitat. The Arctic is freezing cold, so the polar bear's thick fur traps heat and keeps it warm enough to survive there." },
    { q: "A chameleon changes colour to?", a: "Camouflage itself from predators", choices: ["Camouflage itself from predators", "Attract mates only", "Cool down in the sun"], explain: "Camouflage means blending into the surroundings. By changing colour to match its background, the chameleon hides from predators and also sneaks up on prey, helping it survive." },
    { q: "Structural adaptations are?", a: "Physical features of an organism", choices: ["Physical features of an organism", "Behaviours of an organism", "Diseases of an organism"], explain: "Structural adaptations are body features you can see, like thick fur, sharp claws or gills. They are built into the organism, unlike behaviours, which are things it does." },
    { q: "Behavioural adaptations are?", a: "Actions an organism takes to survive", choices: ["Actions an organism takes to survive", "Physical features", "Changes in body structure"], explain: "Behavioural adaptations are things an organism does to survive, such as migrating or hunting at night. They are actions, not body parts, which are structural adaptations." },
    { q: "Birds migrating to warmer places in winter is an example of?", a: "Behavioural adaptation", choices: ["Behavioural adaptation", "Structural adaptation", "Decomposition"], explain: "Migrating is something birds do to survive cold winters and find food, so it is an action, not a body part. Actions to survive are behavioural adaptations." },
    { q: "A fish has gills. This is an example of?", a: "Structural adaptation for breathing underwater", choices: ["Structural adaptation for breathing underwater", "Behavioural adaptation", "Decomposition"], explain: "Gills are a body part that lets a fish take in oxygen from water. Because it is a physical feature suited to its watery habitat, it is a structural adaptation." },
    { q: "What does a Venus flytrap do to survive in nutrient-poor soil?", a: "Catches and digests insects", choices: ["Catches and digests insects", "Grows very tall", "Moves to better soil"], explain: "Where the soil lacks nutrients, the Venus flytrap gets them another way. It catches and digests insects, an adaptation that supplies the nutrients its poor soil cannot." },
    { q: "Nocturnal animals are active at night. This helps them?", a: "Avoid predators and heat during the day", choices: ["Avoid predators and heat during the day", "See better", "Grow faster"], explain: "Being active at night is a behavioural adaptation. By resting in the day, nocturnal animals avoid the daytime heat and many predators, improving their chance of survival." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6sEv2() {
  return shuffle([
    { q: "Deforestation means?", a: "Cutting down large areas of forest", choices: ["Cutting down large areas of forest", "Planting new trees", "Building parks"], explain: "Deforestation is a human activity that clears large areas of forest, often for farms or buildings. Knowing it means cutting down forest explains the harm it causes to habitats." },
    { q: "Deforestation harms the environment because?", a: "Animals lose their habitats and less carbon dioxide is absorbed", choices: ["Animals lose their habitats and less carbon dioxide is absorbed", "It creates more rain", "Trees grow back immediately"], explain: "Trees give animals homes and absorb carbon dioxide during photosynthesis. Removing them leaves animals without habitats and more carbon dioxide in the air, so deforestation harms living things." },
    { q: "Water pollution can be caused by?", a: "Factories dumping waste into rivers", choices: ["Factories dumping waste into rivers", "Fish swimming", "Rain falling"], explain: "Pollution is harmful waste from human activity entering the environment. When factories dump waste into rivers, it poisons the water and the organisms living there, causing water pollution." },
    { q: "Air pollution can be caused by?", a: "Vehicle exhaust and factory emissions", choices: ["Vehicle exhaust and factory emissions", "Plants releasing oxygen", "Wind blowing"], explain: "Burning fuel in vehicles and factories releases harmful gases into the air. These human-made emissions dirty the air, so they cause air pollution, unlike the oxygen plants give out." },
    { q: "What is conservation?", a: "Protecting and preserving the natural environment", choices: ["Protecting and preserving the natural environment", "Building more factories", "Cutting down forests for farms"], explain: "Conservation is the human effort to protect and care for nature, the opposite of harming it. It keeps habitats and living things safe for the future." },
    { q: "Recycling helps the environment by?", a: "Reducing waste and saving resources", choices: ["Reducing waste and saving resources", "Creating more pollution", "Using more energy"], explain: "Recycling turns used materials into new things instead of throwing them away. This means less rubbish and fewer raw materials taken from nature, so it reduces waste and saves resources." },
    { q: "Endangered species are?", a: "Species at risk of dying out completely", choices: ["Species at risk of dying out completely", "Species that are very common", "Species that live in cities"], explain: "An endangered species has so few members left that it is in danger of dying out for good, called extinction. Conservation aims to protect these species before they are lost." },
    { q: "Using less electricity helps the environment because?", a: "Less fossil fuels are burned to generate power", choices: ["Less fossil fuels are burned to generate power", "It makes lights brighter", "It creates more heat"], explain: "Much electricity is made by burning fossil fuels, which pollutes the air. Using less power means less fuel is burned, so saving electricity reduces pollution and helps the environment." },
    { q: "A nature reserve is set up to?", a: "Protect habitats and the organisms living in them", choices: ["Protect habitats and the organisms living in them", "Allow hunting", "Build houses"], explain: "A nature reserve is a conservation measure: an area set aside where building and hunting are limited. This protects the habitats and the organisms that depend on them." },
    { q: "Reducing, reusing, and recycling are called?", a: "The 3Rs", choices: ["The 3Rs", "The 3Cs", "The 3Ps"], explain: "Reduce, reuse and recycle each begin with the letter R, so together they are called the 3Rs. They are simple ways everyone can cut waste and care for the environment." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6s-ev1": buildP6sEv1, "p6s-ev2": buildP6sEv2 };
export const P6_ENVIRONMENT_QUESTION_COUNTS = { "p6s-ev1": 10, "p6s-ev2": 10 };
export function buildEnvironmentQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
