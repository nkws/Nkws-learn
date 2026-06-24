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
    { q: "Which part of a plant is responsible for reproduction?", a: "Flower", choices: ["Flower", "Root", "Stem"], explain: "The flower is the plant's reproductive part because it holds the pollen and ovules needed to make seeds. Roots take in water and stems hold the plant up — they do not make seeds." },
    { q: "What is pollination?", a: "Transfer of pollen from stamen to stigma", choices: ["Transfer of pollen from stamen to stigma", "A seed growing into a plant", "Water moving through a plant"], explain: "Pollination is the first step of plant reproduction: pollen is carried from the stamen to the stigma. This must happen before fertilisation can make a seed." },
    { q: "Which of these helps with pollination?", a: "Bees", choices: ["Bees", "Fish", "Worms"], explain: "Pollen must be carried from one flower part to another, and animals that visit flowers can do this. Bees pick up pollen as they feed, moving it between flowers." },
    { q: "After pollination and fertilisation, what forms?", a: "Seeds inside a fruit", choices: ["Seeds inside a fruit", "More flowers", "New roots"], explain: "The order is pollination, then fertilisation, then seed and fruit. Once pollen fertilises the ovule, it grows into a seed, and the surrounding part swells into a fruit that protects it." },
    { q: "A dandelion seed is dispersed by?", a: "Wind", choices: ["Wind", "Water", "Explosion"], explain: "Seeds spread away from the parent plant in ways that suit their shape. A dandelion seed is light with feathery hairs, so the wind catches it and carries it far." },
    { q: "A coconut is dispersed by?", a: "Water", choices: ["Water", "Wind", "Animals"], explain: "A seed's features match how it spreads. A coconut has a tough, air-filled husk that lets it float, so water carries it across the sea to grow on a new shore." },
    { q: "Berries eaten by birds are dispersed by?", a: "Animals", choices: ["Animals", "Wind", "Explosion"], explain: "Some plants make tasty fruits so animals will eat them. The seeds inside pass through the animal unharmed and are dropped in their droppings far from the parent plant." },
    { q: "A balsam plant shoots out its seeds by?", a: "Explosive action", choices: ["Explosive action", "Wind", "Water"], explain: "Some seed pods build up tension as they dry. The balsam's ripe pod suddenly splits and bursts open, flinging its seeds outwards away from the parent plant." },
    { q: "Wind-dispersed seeds are usually?", a: "Light with wing-like structures", choices: ["Light with wing-like structures", "Heavy and round", "Sticky and sweet"], explain: "A seed's features match how it travels. To be carried by wind a seed must be light, often with wings or hairs to catch the air — heavy seeds would just drop." },
    { q: "Why is seed dispersal important?", a: "So seeds grow away from the parent plant and have space", choices: ["So seeds grow away from the parent plant and have space", "So animals have food", "So the parent plant grows bigger"], explain: "If seeds all fell beside the parent, they would crowd together and compete for light, water and space. Dispersal spreads them out so more can grow into healthy plants." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5sRp2() {
  return shuffle([
    { q: "A butterfly goes through complete metamorphosis. The correct order is?", a: "Egg → Larva → Pupa → Adult", choices: ["Egg → Larva → Pupa → Adult", "Egg → Pupa → Larva → Adult", "Egg → Adult → Larva → Pupa"], explain: "In complete metamorphosis the body changes form in a fixed order. It hatches from an egg as a larva, then rests as a pupa while it transforms, and finally emerges as the adult." },
    { q: "A frog goes through a 3-stage life cycle. A tadpole is the?", a: "Young stage that lives in water", choices: ["Young stage that lives in water", "Adult stage", "Egg stage"], explain: "A tadpole comes after the egg but before the adult, so it is the young stage. It lives and breathes in water, then changes into a frog that can also live on land." },
    { q: "Which animal lays eggs?", a: "A chicken", choices: ["A chicken", "A dog", "A whale"], explain: "Animals reproduce in different ways: some lay eggs and others give birth to live young. Birds like the chicken lay eggs, while dogs and whales are mammals that give live birth." },
    { q: "Which animal gives birth to live young?", a: "A cat", choices: ["A cat", "A robin", "A turtle"], explain: "Mammals give birth to live young instead of laying eggs. A cat is a mammal, so it has live babies, while the robin and turtle lay eggs." },
    { q: "The larva of a butterfly is called a?", a: "Caterpillar", choices: ["Caterpillar", "Tadpole", "Chick"], explain: "Each animal has its own name for its young stage. The larva of a butterfly is the caterpillar; a tadpole is a young frog and a chick is a young bird." },
    { q: "The pupa stage of a butterfly is when?", a: "The caterpillar transforms inside a cocoon", choices: ["The caterpillar transforms inside a cocoon", "The butterfly lays eggs", "The caterpillar eats leaves"], explain: "The pupa is the resting stage of metamorphosis. Inside its case the caterpillar's body is rebuilt into a butterfly, so it changes form rather than feeding or laying eggs." },
    { q: "A grasshopper goes through incomplete metamorphosis. It does NOT have a?", a: "Pupa stage", choices: ["Pupa stage", "Egg stage", "Young stage"], explain: "Incomplete metamorphosis has only egg, young and adult — there is no resting pupa stage. The young grasshopper simply grows bit by bit into an adult." },
    { q: "Incomplete metamorphosis has how many stages?", a: "3 — Egg, Young, Adult", choices: ["3 — Egg, Young, Adult", "4 — Egg, Larva, Pupa, Adult", "2 — Egg, Adult"], explain: "Incomplete metamorphosis skips the pupa, so it has three stages: egg, young and adult. The young already looks like a small version of the adult and grows larger." },
    { q: "Complete metamorphosis has how many stages?", a: "4 — Egg, Larva, Pupa, Adult", choices: ["4 — Egg, Larva, Pupa, Adult", "3 — Egg, Young, Adult", "2 — Egg, Adult"], explain: "Complete metamorphosis has four stages because it includes a pupa: egg, larva, pupa and adult. The larva looks nothing like the adult until it transforms in the pupa." },
    { q: "Which animal cares for its young after birth?", a: "A dog", choices: ["A dog", "A sea turtle", "A butterfly"], explain: "Some animals look after their babies while others leave them to survive alone. A dog is a mammal that feeds and protects its puppies, while sea turtles and butterflies do not stay to care for their young." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5s-rp1": buildP5sRp1, "p5s-rp2": buildP5sRp2 };
export const P5_REPRODUCTION_QUESTION_COUNTS = { "p5s-rp1": 10, "p5s-rp2": 10 };
export function buildReproductionQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
