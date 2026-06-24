import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P3_DIVERSITY_INTRO = {
  "p3s-dv1": {
    title: "Classifying Living Things",
    pages: [
      {
        text: "Scientists group living things to make them easier to study. This is called classification!",
        emoji: "🔬 📋",
      },
      {
        text: "Mammals have fur or hair and feed milk to their babies. Dogs, cats and whales are mammals!",
        emoji: "🐶 🐱 🐋",
      },
      {
        text: "Birds have feathers and lay eggs. Eagles, penguins and sparrows are all birds!",
        emoji: "🦅 🐧 🐦",
      },
      {
        text: "Reptiles have dry, scaly skin. Lizards, snakes and crocodiles are reptiles!",
        emoji: "🦎 🐍 🐊",
      },
      {
        text: "Fish live in water and breathe through gills. Insects have six legs. Let's learn more!",
        emoji: "🐟 🦋 🧠",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildP3sDv1() {
  return shuffle([
    { q: "A whale lives in the ocean but must surface to breathe air through a blowhole. What type of animal is a whale?", a: "Mammal", choices: ["Mammal", "Fish", "Reptile"], explain: "Although a whale lives in the sea, it is a mammal. Whales are warm-blooded, breathe air, and nurse their young with milk — all mammal features. Fish breathe underwater through gills, which whales cannot." },
    { q: "A robin has a bright red breast and builds cup-shaped nests where it lays eggs. What type of animal is a robin?", a: "Bird", choices: ["Bird", "Mammal", "Insect"], explain: "Robins are birds. All birds have feathers and lay eggs. Even though robins look different from penguins or eagles, they share those bird features, so they belong in the bird group." },
    { q: "A snake has no legs and moves by slithering along the ground. What type of animal is a snake?", a: "Reptile", choices: ["Reptile", "Mammal", "Fish"], explain: "Snakes are reptiles. Reptiles have dry, scaly skin and are cold-blooded. A snake shares these features with lizards and crocodiles, placing it in the reptile group." },
    { q: "A goldfish lives in water and breathes through gills. It is a?", a: "Fish", choices: ["Fish", "Mammal", "Reptile"], explain: "Animals that live in water and breathe through gills are fish. Gills let them take in oxygen from the water, which is the fish group's special feature." },
    { q: "A butterfly has six legs and wings. It is an?", a: "Insect", choices: ["Insect", "Bird", "Mammal"], explain: "Animals with six legs and a body in three parts are insects. Counting the legs is the quick way to spot an insect." },
    { q: "A dog barks, lives with families as a pet, and gives birth to live puppies. What type of animal is a dog?", a: "Mammal", choices: ["Mammal", "Bird", "Reptile"], explain: "Dogs are mammals. Mammals have fur or hair, are warm-blooded, give birth to live young, and feed their young milk. A dog does all of these, making it a mammal." },
    { q: "A frog lives on land and in water. It is an?", a: "Amphibian", choices: ["Amphibian", "Reptile", "Fish"], explain: "Animals that can live both on land and in water are amphibians. A frog spends part of its life in each place, so it is an amphibian." },
    { q: "An ant has six legs and a hard body covering. It is an?", a: "Insect", choices: ["Insect", "Reptile", "Mammal"], explain: "Animals with six legs are insects. The hard covering and six legs together tell you an ant belongs in the insect group." },
    { q: "A crocodile has scaly skin and lives near water. It is a?", a: "Reptile", choices: ["Reptile", "Fish", "Amphibian"], explain: "Animals with dry, scaly skin that breathe air are reptiles. A crocodile has scaly skin and comes up to breathe, so it is a reptile, not a fish." },
    { q: "A penguin lives in icy Antarctica, cannot fly, but swims very well and lays eggs. What type of animal is a penguin?", a: "Bird", choices: ["Bird", "Fish", "Mammal"], explain: "Penguins are birds, even though they cannot fly. All birds have feathers and lay eggs, and penguins have both. Wings that are shaped for swimming instead of flying do not change the group they belong to." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3sDv2() {
  return shuffle([
    { q: "Mushrooms are?", a: "Fungi", choices: ["Fungi", "Plants", "Animals"], explain: "Fungi are their own group of living things. They cannot make their own food like plants, so a mushroom is a fungus, not a plant." },
    { q: "Which of these is NOT a plant?", a: "Mushroom", choices: ["Mushroom", "Rose", "Fern"], explain: "A rose and a fern are green plants that make their own food. A mushroom is a fungus, so it is the one that is not a plant." },
    { q: "Bacteria are very tiny living things. They are?", a: "Micro-organisms", choices: ["Micro-organisms", "Plants", "Animals"], explain: "Living things too small to see without a microscope are called micro-organisms. Bacteria are tiny, so they belong in that group." },
    { q: "Mould that grows on old bread is a type of?", a: "Fungi", choices: ["Fungi", "Plant", "Bacteria"], explain: "Mould feeds on the bread instead of making its own food, which is what fungi do. So mould is a kind of fungus." },
    { q: "Which living thing is too small to see without a microscope?", a: "Bacteria", choices: ["Bacteria", "Mushroom", "Fern"], explain: "Bacteria are micro-organisms, which means they are far too small to see with just your eyes. You need a microscope to see them." },
    { q: "Yeast is used to make bread rise. Yeast is a?", a: "Fungus", choices: ["Fungus", "Plant", "Animal"], explain: "Yeast cannot make its own food from sunlight the way plants do, so it belongs to the fungi group. It is a tiny fungus." },
    { q: "Fungi get their food from?", a: "Dead or living things", choices: ["Dead or living things", "Sunlight", "Soil only"], explain: "Fungi cannot make food from sunlight, so they take their food from other dead or living things. That is how the fungi group feeds." },
    { q: "Unlike plants, fungi cannot make their own food because they lack?", a: "Chlorophyll", choices: ["Chlorophyll", "Roots", "Leaves"], explain: "Chlorophyll is the green stuff that lets plants make food from sunlight. Fungi do not have it, so they cannot make their own food." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3sDv3() {
  return shuffle([
    { q: "A cactus has thick stems to?", a: "Store water", choices: ["Store water", "Catch insects", "Grow taller"], explain: "An animal or plant's body parts help it survive where it lives. A cactus lives in the dry desert, so its thick stem stores water to use when there is no rain." },
    { q: "A polar bear has thick fur to?", a: "Keep warm", choices: ["Keep warm", "Swim faster", "Hide from prey"], explain: "Body parts match where an animal lives. A polar bear lives in the freezing cold, so its thick fur traps heat to keep it warm." },
    { q: "A camel has a hump to?", a: "Store fat for energy", choices: ["Store fat for energy", "Store water", "Balance itself"], explain: "Body parts help an animal survive its home. A camel lives where food is scarce, so its hump stores fat it can use for energy when there is little to eat." },
    { q: "Fish have streamlined bodies to?", a: "Move easily in water", choices: ["Move easily in water", "Stay warm", "Breathe air"], explain: "A smooth, streamlined shape slips through water with less pushing back. That helps a fish swim easily in the water where it lives." },
    { q: "A chameleon changes colour to?", a: "Hide from enemies", choices: ["Hide from enemies", "Stay warm", "Find food"], explain: "Blending into the background helps an animal stay safe. A chameleon changes colour to match its surroundings so enemies cannot spot it." },
    { q: "Birds have hollow bones to?", a: "Be lighter for flying", choices: ["Be lighter for flying", "Store food", "Grow faster"], explain: "Lighter bodies are easier to lift into the air. A bird's hollow bones make it light, which helps it fly." },
    { q: "A duck has webbed feet to?", a: "Swim in water", choices: ["Swim in water", "Run fast", "Climb trees"], explain: "Webbed feet act like paddles, pushing against the water. That helps a duck swim well in the ponds where it lives." },
    { q: "An owl has large eyes to?", a: "See well at night", choices: ["See well at night", "Scare predators", "Fly higher"], explain: "Big eyes let in more light. An owl hunts in the dark, so its large eyes help it see well at night." },
    { q: "A giraffe has a long neck to?", a: "Reach tall trees for food", choices: ["Reach tall trees for food", "Run faster", "Breathe better"], explain: "A giraffe eats leaves high up that other animals cannot reach. Its long neck lets it get food from tall trees." },
    { q: "A hedgehog has spines to?", a: "Protect itself from enemies", choices: ["Protect itself from enemies", "Keep warm", "Catch food"], explain: "Sharp spines make an animal hard and painful to bite. A hedgehog rolls up so its spines protect it from enemies." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

const DIVERSITY_BUILDERS = {
  "p3s-dv1": buildP3sDv1,
  "p3s-dv2": buildP3sDv2,
  "p3s-dv3": buildP3sDv3,
};

export const P3_DIVERSITY_QUESTION_COUNTS = {
  "p3s-dv1": 10, "p3s-dv2": 8, "p3s-dv3": 10,
};

export function buildDiversityQuestions(moduleId) {
  const builder = DIVERSITY_BUILDERS[moduleId];
  return builder ? builder() : [];
}
