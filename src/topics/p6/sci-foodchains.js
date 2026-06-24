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
    { q: "A food chain always starts with?", a: "A producer (plant)", choices: ["A producer (plant)", "A consumer (animal)", "A decomposer"], explain: "Energy in a food chain comes from the Sun, and only producers like plants can capture it by photosynthesis. So every food chain must begin with a producer." },
    { q: "What is a producer?", a: "An organism that makes its own food", choices: ["An organism that makes its own food", "An animal that hunts", "A fungus that decomposes"], explain: "A producer makes its own food using sunlight, usually a green plant. Because it does not need to eat others, it starts the food chain and passes energy on." },
    { q: "What is a consumer?", a: "An organism that eats other organisms", choices: ["An organism that eats other organisms", "An organism that makes food from sunlight", "A plant"], explain: "A consumer cannot make its own food, so it gets energy by eating other organisms. Animals are consumers, taking in energy that producers first captured from the Sun." },
    { q: "A herbivore eats?", a: "Only plants", choices: ["Only plants", "Only animals", "Both plants and animals"], explain: "A herbivore is a plant-eater. It takes its energy directly from producers, so in a food chain it is the consumer that feeds on plants." },
    { q: "A carnivore eats?", a: "Only other animals", choices: ["Only other animals", "Only plants", "Both plants and animals"], explain: "A carnivore is a meat-eater that gets its energy by eating other animals. It sits higher in the food chain, feeding on the consumers below it." },
    { q: "An omnivore eats?", a: "Both plants and animals", choices: ["Both plants and animals", "Only plants", "Only animals"], explain: "An omnivore eats both plants and animals, so it can get energy from producers and from other consumers. Humans are a good example of an omnivore." },
    { q: "What is a decomposer?", a: "An organism that breaks down dead matter", choices: ["An organism that breaks down dead matter", "A plant that makes food", "An animal that hunts"], explain: "A decomposer, like a fungus or bacteria, breaks down dead plants and animals. This returns nutrients to the soil so producers can grow, completing the cycle." },
    { q: "In the food chain: Grass → Rabbit → Fox, the rabbit is a?", a: "Primary consumer", choices: ["Primary consumer", "Producer", "Decomposer"], explain: "The primary consumer is the first animal in the chain, eating the producer. The rabbit eats grass, so it is the primary consumer, while the fox that eats it is secondary." },
    { q: "If all the rabbits in a food chain died, the fox population would?", a: "Decrease because they have less food", choices: ["Decrease because they have less food", "Increase", "Stay the same"], explain: "The fox depends on rabbits for food and energy. Remove its prey and many foxes starve, so the fox population falls. Removing one organism affects others in the chain." },
    { q: "A food web is?", a: "Many interconnected food chains", choices: ["Many interconnected food chains", "A single food chain", "A type of spider web"], explain: "In nature most animals eat more than one kind of food, so many food chains link together. A food web shows all these interconnected chains in a habitat." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP6sFd2() {
  return shuffle([
    { q: "In the food chain: Plant → Caterpillar → Bird → Hawk, which is the top consumer?", a: "Hawk", choices: ["Hawk", "Bird", "Caterpillar"], explain: "The top consumer is the last animal in the chain, which nothing else eats. Following the arrows of energy flow, the hawk is at the end, so it is the top consumer." },
    { q: "If the number of plants decreases, the number of herbivores will?", a: "Decrease due to less food", choices: ["Decrease due to less food", "Increase", "Not change"], explain: "Herbivores depend on plants for food and energy. With fewer plants there is less food, so fewer herbivores can survive. A change low in the chain affects every level above." },
    { q: "Mushrooms and bacteria are examples of?", a: "Decomposers", choices: ["Decomposers", "Producers", "Consumers"], explain: "Mushrooms and bacteria feed by breaking down dead plants and animals, so they are decomposers. They do not make food like producers or hunt like consumers." },
    { q: "Decomposers are important because?", a: "They recycle nutrients back into the soil", choices: ["They recycle nutrients back into the soil", "They produce oxygen", "They eat all the animals"], explain: "When decomposers break down dead matter, the nutrients return to the soil. Producers then take up these nutrients to grow, so decomposers keep the cycle of materials going." },
    { q: "An animal that eats a herbivore is called a?", a: "Secondary consumer", choices: ["Secondary consumer", "Primary consumer", "Producer"], explain: "We count consumers by their position. The herbivore that eats the plant is the primary consumer, so the animal that eats the herbivore is the second link, the secondary consumer." },
    { q: "The arrows in a food chain show?", a: "The direction energy flows (from eaten to eater)", choices: ["The direction energy flows (from eaten to eater)", "Which animal is bigger", "Which animal runs faster"], explain: "Each arrow points from the organism being eaten to the one eating it, showing energy passing along. The arrow means is eaten by, tracing the flow of energy, not size or speed." },
    { q: "If a predator is removed from a food web, its prey population will?", a: "Increase because nothing is eating them", choices: ["Increase because nothing is eating them", "Decrease", "Stay exactly the same"], explain: "Predators keep prey numbers in check by eating them. Remove the predator and nothing controls the prey, so the prey population grows. Removing one organism upsets the whole web." },
    { q: "All energy in a food chain originally comes from?", a: "The Sun", choices: ["The Sun", "Soil", "Water"], explain: "Producers capture the Sun's light energy through photosynthesis, and this energy then passes along the chain as animals eat. So the Sun is the original source of all the energy." },
    { q: "Which group has the most energy in a food chain?", a: "Producers", choices: ["Producers", "Top consumers", "Decomposers"], explain: "Energy is lost at every step as it passes up a chain, so each level has less than the one below. Producers come first and capture the Sun's energy, so they hold the most." },
    { q: "A population is?", a: "All organisms of one species living in an area", choices: ["All organisms of one species living in an area", "All living things in an area", "One single organism"], explain: "A population means all the members of one kind of organism, one species, living together in an area. All the different species together would instead be a community." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p6s-fd1": buildP6sFd1, "p6s-fd2": buildP6sFd2 };
export const P6_FOODCHAINS_QUESTION_COUNTS = { "p6s-fd1": 10, "p6s-fd2": 10 };
export function buildFoodChainsQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
