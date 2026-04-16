import { shuffle } from "../../utils/helpers";

export const P5_REPRODUCTION_INTRO = {
  "p5s-rp1": {
    title: "Plant Reproduction",
    pages: [
      { text: "Flowers are the reproductive parts of a plant. They contain pollen and ovules needed to make seeds!", emoji: "🌸 🐝 🌰" },
      { text: "Pollination is the transfer of pollen from the stamen to the stigma. Bees, wind, and water can help!", emoji: "🐝 💨 💧" },
      { text: "After pollination, seeds form inside a fruit. Seeds are dispersed by wind, water, animals, or explosive action!", emoji: "🌰 💨 🐦 💥" },
    ],
  },
  "p5s-rp2": {
    title: "Animal Reproduction",
    pages: [
      { text: "Animals reproduce to ensure the survival of their species. Some lay eggs, others give birth to live young!", emoji: "🥚 🐣 🐶" },
      { text: "Some animals go through metamorphosis — a big change in body form as they grow. Butterflies and frogs do this!", emoji: "🐛 ➡️ 🦋" },
    ],
  },
};

function buildP5sRp1() {
  return shuffle([
    { q: "Which part of a plant is responsible for reproduction?", a: "Flower", choices: ["Flower", "Root", "Stem"] },
    { q: "What is pollination?", a: "Transfer of pollen from stamen to stigma", choices: ["Transfer of pollen from stamen to stigma", "A seed growing into a plant", "Water moving through a plant"] },
    { q: "Which of these helps with pollination?", a: "Bees", choices: ["Bees", "Fish", "Worms"] },
    { q: "After pollination and fertilisation, what forms?", a: "Seeds inside a fruit", choices: ["Seeds inside a fruit", "More flowers", "New roots"] },
    { q: "A dandelion seed is dispersed by?", a: "Wind", choices: ["Wind", "Water", "Explosion"] },
    { q: "A coconut is dispersed by?", a: "Water", choices: ["Water", "Wind", "Animals"] },
    { q: "Berries eaten by birds are dispersed by?", a: "Animals", choices: ["Animals", "Wind", "Explosion"] },
    { q: "A balsam plant shoots out its seeds by?", a: "Explosive action", choices: ["Explosive action", "Wind", "Water"] },
    { q: "Wind-dispersed seeds are usually?", a: "Light with wing-like structures", choices: ["Light with wing-like structures", "Heavy and round", "Sticky and sweet"] },
    { q: "Why is seed dispersal important?", a: "So seeds grow away from the parent plant and have space", choices: ["So seeds grow away from the parent plant and have space", "So animals have food", "So the parent plant grows bigger"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5sRp2() {
  return shuffle([
    { q: "A butterfly goes through complete metamorphosis. The correct order is?", a: "Egg → Larva → Pupa → Adult", choices: ["Egg → Larva → Pupa → Adult", "Egg → Pupa → Larva → Adult", "Egg → Adult → Larva → Pupa"] },
    { q: "A frog goes through a 3-stage life cycle. A tadpole is the?", a: "Young stage that lives in water", choices: ["Young stage that lives in water", "Adult stage", "Egg stage"] },
    { q: "Which animal lays eggs?", a: "A chicken", choices: ["A chicken", "A dog", "A whale"] },
    { q: "Which animal gives birth to live young?", a: "A cat", choices: ["A cat", "A robin", "A turtle"] },
    { q: "The larva of a butterfly is called a?", a: "Caterpillar", choices: ["Caterpillar", "Tadpole", "Chick"] },
    { q: "The pupa stage of a butterfly is when?", a: "The caterpillar transforms inside a cocoon", choices: ["The caterpillar transforms inside a cocoon", "The butterfly lays eggs", "The caterpillar eats leaves"] },
    { q: "A grasshopper goes through incomplete metamorphosis. It does NOT have a?", a: "Pupa stage", choices: ["Pupa stage", "Egg stage", "Young stage"] },
    { q: "Incomplete metamorphosis has how many stages?", a: "3 — Egg, Young, Adult", choices: ["3 — Egg, Young, Adult", "4 — Egg, Larva, Pupa, Adult", "2 — Egg, Adult"] },
    { q: "Complete metamorphosis has how many stages?", a: "4 — Egg, Larva, Pupa, Adult", choices: ["4 — Egg, Larva, Pupa, Adult", "3 — Egg, Young, Adult", "2 — Egg, Adult"] },
    { q: "Which animal cares for its young after birth?", a: "A dog", choices: ["A dog", "A sea turtle", "A butterfly"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5s-rp1": buildP5sRp1, "p5s-rp2": buildP5sRp2 };
export const P5_REPRODUCTION_QUESTION_COUNTS = { "p5s-rp1": 10, "p5s-rp2": 10 };
export function buildReproductionQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
