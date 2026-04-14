import { shuffle } from "../../utils/helpers";

export const P6_FOODCHAINS_INTRO = {
  "p6s-fd1": {
    title: "Food Chains and Food Webs",
    pages: [
      { text: "A food chain shows how energy passes from one living thing to another. It always starts with a producer (plant)!", emoji: "🌿 ➡️ 🐛 ➡️ 🐦" },
      { text: "Producers make food. Consumers eat other organisms. Decomposers break down dead matter!", emoji: "🌱 🐰 🦅 🍄" },
    ],
  },
};

function buildP6sFd1() {
  return shuffle([
    { q: "A food chain always starts with?", a: "A producer (plant)", choices: ["A producer (plant)", "A consumer (animal)", "A decomposer"] },
    { q: "What is a producer?", a: "An organism that makes its own food", choices: ["An organism that makes its own food", "An animal that hunts", "A fungus that decomposes"] },
    { q: "What is a consumer?", a: "An organism that eats other organisms", choices: ["An organism that eats other organisms", "An organism that makes food from sunlight", "A plant"] },
    { q: "A herbivore eats?", a: "Only plants", choices: ["Only plants", "Only animals", "Both plants and animals"] },
    { q: "A carnivore eats?", a: "Only other animals", choices: ["Only other animals", "Only plants", "Both plants and animals"] },
    { q: "An omnivore eats?", a: "Both plants and animals", choices: ["Both plants and animals", "Only plants", "Only animals"] },
    { q: "What is a decomposer?", a: "An organism that breaks down dead matter", choices: ["An organism that breaks down dead matter", "A plant that makes food", "An animal that hunts"] },
    { q: "In the food chain: Grass → Rabbit → Fox, the rabbit is a?", a: "Primary consumer", choices: ["Primary consumer", "Producer", "Decomposer"] },
    { q: "If all the rabbits in a food chain died, the fox population would?", a: "Decrease because they have less food", choices: ["Decrease because they have less food", "Increase", "Stay the same"] },
    { q: "A food web is?", a: "Many interconnected food chains", choices: ["Many interconnected food chains", "A single food chain", "A type of spider web"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6sFd2() {
  return shuffle([
    { q: "In the food chain: Plant → Caterpillar → Bird → Hawk, which is the top consumer?", a: "Hawk", choices: ["Hawk", "Bird", "Caterpillar"] },
    { q: "If the number of plants decreases, the number of herbivores will?", a: "Decrease due to less food", choices: ["Decrease due to less food", "Increase", "Not change"] },
    { q: "Mushrooms and bacteria are examples of?", a: "Decomposers", choices: ["Decomposers", "Producers", "Consumers"] },
    { q: "Decomposers are important because?", a: "They recycle nutrients back into the soil", choices: ["They recycle nutrients back into the soil", "They produce oxygen", "They eat all the animals"] },
    { q: "An animal that eats a herbivore is called a?", a: "Secondary consumer", choices: ["Secondary consumer", "Primary consumer", "Producer"] },
    { q: "The arrows in a food chain show?", a: "The direction energy flows (from eaten to eater)", choices: ["The direction energy flows (from eaten to eater)", "Which animal is bigger", "Which animal runs faster"] },
    { q: "If a predator is removed from a food web, its prey population will?", a: "Increase because nothing is eating them", choices: ["Increase because nothing is eating them", "Decrease", "Stay exactly the same"] },
    { q: "All energy in a food chain originally comes from?", a: "The Sun", choices: ["The Sun", "Soil", "Water"] },
    { q: "Which group has the most energy in a food chain?", a: "Producers", choices: ["Producers", "Top consumers", "Decomposers"] },
    { q: "A population is?", a: "All organisms of one species living in an area", choices: ["All organisms of one species living in an area", "All living things in an area", "One single organism"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6s-fd1": buildP6sFd1, "p6s-fd2": buildP6sFd2 };
export const P6_FOODCHAINS_QUESTION_COUNTS = { "p6s-fd1": 10, "p6s-fd2": 10 };
export function buildFoodChainsQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
