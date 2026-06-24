import { shuffle } from "../../utils/helpers";
// ============ INTRO CONTENT ============

export const P3_SYSTEMS_INTRO = {
  "p3s-sy1": {
    title: "Plant Systems",
    pages: [
      {
        text: "Plants have different parts that work together like a system!",
        emoji: "🌱 🌿 🌳",
      },
      {
        text: "Roots absorb water and minerals from the soil. They also hold the plant in place!",
        emoji: "🌱 💧 🪨",
      },
      {
        text: "The stem carries water from the roots to the leaves. It holds the plant up!",
        emoji: "🌿 ⬆️ 💧",
      },
      {
        text: "Leaves use sunlight, water and carbon dioxide to make food. This is called photosynthesis!",
        emoji: "🍃 ☀️ 🍽️",
      },
      {
        text: "Flowers help the plant reproduce by making seeds. Let's learn more about plant systems!",
        emoji: "🌸 🌰 🧠",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildP3sSy1() {
  return shuffle([
    { q: "Which part of a plant takes in water and minerals from the soil?", a: "Roots", choices: ["Roots", "Stem", "Leaves"], explain: "Roots grow underground and their job is to absorb water and minerals from the soil. The stem then carries those up to the leaves." },
    { q: "Which part of the plant carries water from roots to leaves?", a: "Stem", choices: ["Stem", "Flower", "Fruit"], explain: "The stem's job is to carry water up from the roots to the leaves, like a straw. It also holds the plant up." },
    { q: "Leaves use sunlight to make food. This process is called?", a: "Photosynthesis", choices: ["Photosynthesis", "Respiration", "Digestion"], explain: "Making food from sunlight, water and air in the leaves is called photosynthesis. That is the special job leaves do for the plant." },
    { q: "Which part of the plant makes seeds?", a: "Flower", choices: ["Flower", "Root", "Leaf"], explain: "The flower's job is to help the plant make seeds so new plants can grow. That is why flowers, not roots or leaves, make seeds." },
    { q: "What do roots also do besides absorbing water?", a: "Hold the plant in the soil", choices: ["Hold the plant in the soil", "Make food", "Attract insects"], explain: "Roots have two jobs: they take in water and they grip the soil to hold the plant firmly in place so it does not fall over." },
    { q: "Which gas do leaves take in from the air?", a: "Carbon dioxide", choices: ["Carbon dioxide", "Oxygen", "Nitrogen"], explain: "Leaves take in the gas carbon dioxide from the air because the plant needs it to make food during photosynthesis." },
    { q: "Plants need sunlight, water and __ to make food.", a: "Carbon dioxide", choices: ["Carbon dioxide", "Soil", "Wind"], explain: "To make food, a plant needs three things together: sunlight, water, and the gas carbon dioxide from the air." },
    { q: "What do leaves give out during photosynthesis?", a: "Oxygen", choices: ["Oxygen", "Carbon dioxide", "Water"], explain: "When leaves make food, they give out the gas oxygen as a leftover. This is the oxygen that people and animals breathe." },
    { q: "Where does a plant store its food?", a: "In different parts like roots and stems", choices: ["In different parts like roots and stems", "Only in leaves", "Only in flowers"], explain: "A plant saves extra food in different parts such as its roots and stems, ready to use later. Carrots are roots full of stored food." },
    { q: "A fruit develops from which part of the plant?", a: "Flower", choices: ["Flower", "Root", "Stem"], explain: "After a flower is pollinated, that flower grows into a fruit which holds the seeds. So fruit comes from the flower." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3sSy2() {
  return shuffle([
    { q: "Which organ pushes blood all around your body?", a: "Heart", choices: ["Heart", "Lungs", "Stomach"], explain: "The heart's job is to act as a pump that keeps blood moving all around the body. Blood carries oxygen and nutrients to every part, and the heart never stops pushing it." },
    { q: "Which organ do we use to breathe?", a: "Lungs", choices: ["Lungs", "Heart", "Stomach"], explain: "The lungs' job is to take in air so the body can get oxygen and let out air it does not need. That is breathing." },
    { q: "Food is broken down in the?", a: "Stomach", choices: ["Stomach", "Lungs", "Heart"], explain: "The stomach's job is to mash and break down the food you eat so your body can use it. That is why food goes to the stomach." },
    { q: "Food enters the mouth and is broken down by the stomach and intestines. These organs are all part of which system?", a: "Digestive system", choices: ["Digestive system", "Respiratory system", "Circulatory system"], explain: "The stomach and intestines break food down into small parts the body can use. These organs work together as the digestive system." },
    { q: "Inhaling oxygen and exhaling carbon dioxide is controlled by which body system?", a: "Respiratory system", choices: ["Respiratory system", "Digestive system", "Circulatory system"], explain: "Breathing — taking in oxygen and releasing carbon dioxide — is the job of the respiratory system. It includes the lungs, which do the gas exchange your body needs." },
    { q: "The heart and blood vessels together form which body system?", a: "Circulatory system", choices: ["Circulatory system", "Digestive system", "Respiratory system"], explain: "The heart and the network of blood vessels make up the circulatory system. Together they move blood — carrying oxygen and nutrients — to every part of the body." },
    { q: "Which body part is part of the digestive system?", a: "Intestines", choices: ["Intestines", "Lungs", "Brain"], explain: "The intestines help break down food and soak up its goodness, so they belong to the digestive system. The lungs and brain do other jobs." },
    { q: "Blood carries __ to all parts of the body.", a: "Oxygen and nutrients", choices: ["Oxygen and nutrients", "Only water", "Only food"], explain: "Blood's job is to deliver both oxygen from the lungs and nutrients from food to every part of the body so it can work and grow." },
    { q: "When we breathe in, air goes into our?", a: "Lungs", choices: ["Lungs", "Stomach", "Heart"], explain: "When you breathe in, air travels down to the lungs. The lungs take the oxygen out of that air for your body to use." },
    { q: "What does the heart do?", a: "Pumps blood around the body", choices: ["Pumps blood around the body", "Digests food", "Helps us think"], explain: "The heart's job is to act as a pump, pushing blood all around your body so oxygen and nutrients reach every part." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3sSy3() {
  return shuffle([
    { q: "We breathe in air to get?", a: "Oxygen", choices: ["Oxygen", "Carbon dioxide", "Nitrogen"], explain: "Your body needs oxygen to stay alive and make energy. That is the gas your lungs take out of the air when you breathe in." },
    { q: "The blood carries oxygen from the lungs to the?", a: "Rest of the body", choices: ["Rest of the body", "Stomach only", "Brain only"], explain: "Blood picks up oxygen at the lungs and delivers it to every part of the body, not just one spot, because all parts need oxygen to work." },
    { q: "After we digest food, nutrients enter the?", a: "Blood", choices: ["Blood", "Lungs", "Bones"], explain: "Once food is broken down, its goodness, called nutrients, passes into the blood. The blood then carries it around the body." },
    { q: "Which two systems work together to get oxygen to our muscles?", a: "Respiratory and circulatory", choices: ["Respiratory and circulatory", "Digestive and respiratory", "Digestive and circulatory"], explain: "The respiratory system takes in oxygen and the circulatory system carries it in the blood. Together they get oxygen to your muscles." },
    { q: "Why does our heart beat faster when we exercise?", a: "To pump more blood with oxygen", choices: ["To pump more blood with oxygen", "To digest food faster", "To cool us down"], explain: "Working muscles need more oxygen. The heart beats faster to pump more oxygen-carrying blood to them quickly." },
    { q: "We breathe faster when we run because our body needs more?", a: "Oxygen", choices: ["Oxygen", "Food", "Sleep"], explain: "Running makes your muscles work hard and use up oxygen fast, so you breathe faster to take in more oxygen for them." },
    { q: "The digestive system breaks down food into?", a: "Nutrients the body can use", choices: ["Nutrients the body can use", "Bones and muscles", "Blood and water"], explain: "The digestive system's job is to break big pieces of food into tiny nutrients the body can soak up and use for energy and growth." },
    { q: "What carries nutrients from digested food around the body?", a: "Blood", choices: ["Blood", "Air", "Nerves"], explain: "Blood is the body's delivery system. It carries the nutrients from digested food to every part that needs them." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

const SYSTEMS_BUILDERS = {
  "p3s-sy1": buildP3sSy1,
  "p3s-sy2": buildP3sSy2,
  "p3s-sy3": buildP3sSy3,
};

export const P3_SYSTEMS_QUESTION_COUNTS = {
  "p3s-sy1": 10, "p3s-sy2": 10, "p3s-sy3": 8,
};

export function buildSystemsQuestions(moduleId) {
  const builder = SYSTEMS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
