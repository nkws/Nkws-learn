import { shuffle } from "../utils/helpers";
// ============ QUESTION BANKS ============

function buildVc1() {
  return shuffle([
    { q: "Your mother's mother is your...?", a: "Grandmother", choices: ["Grandmother", "Aunt", "Sister"] },
    { q: "Your father's brother is your...?", a: "Uncle", choices: ["Uncle", "Brother", "Cousin"] },
    { q: "Your mother's sister is your...?", a: "Aunt", choices: ["Aunt", "Grandmother", "Sister"] },
    { q: "Your aunt's child is your...?", a: "Cousin", choices: ["Cousin", "Brother", "Uncle"] },
    { q: "A girl with the same parents as you is your...?", a: "Sister", choices: ["Sister", "Cousin", "Aunt"] },
    { q: "A boy with the same parents as you is your...?", a: "Brother", choices: ["Brother", "Uncle", "Father"] },
    { q: "Your father's father is your...?", a: "Grandfather", choices: ["Grandfather", "Uncle", "Brother"] },
    { q: "The woman who takes care of you at home is often your...?", a: "Mother", choices: ["Mother", "Teacher", "Aunt"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildVc2() {
  return shuffle([
    { q: "Which animal says 'moo'?", a: "Cow", choices: ["Cow", "Dog", "Cat"] },
    { q: "Which animal says 'woof'?", a: "Dog", choices: ["Dog", "Cat", "Bird"] },
    { q: "Which animal says 'meow'?", a: "Cat", choices: ["Cat", "Cow", "Frog"] },
    { q: "Which animal can fly in the sky?", a: "Bird", choices: ["Bird", "Fish", "Dog"] },
    { q: "Which animal lives in water?", a: "Fish", choices: ["Fish", "Cat", "Horse"] },
    { q: "Which animal says 'ribbit'?", a: "Frog", choices: ["Frog", "Duck", "Cow"] },
    { q: "Which animal says 'quack'?", a: "Duck", choices: ["Duck", "Hen", "Dog"] },
    { q: "Which animal gives us eggs?", a: "Hen", choices: ["Hen", "Cow", "Frog"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildVc3() {
  return shuffle([
    { q: "Which is a fruit?", a: "Apple", choices: ["Apple", "Bread", "Rice"] },
    { q: "Which is a drink?", a: "Milk", choices: ["Milk", "Cake", "Egg"] },
    { q: "Which is a vegetable?", a: "Carrot", choices: ["Carrot", "Banana", "Juice"] },
    { q: "Which do you eat for breakfast?", a: "Cereal", choices: ["Cereal", "Pillow", "Shoe"] },
    { q: "Which fruit is yellow and curved?", a: "Banana", choices: ["Banana", "Apple", "Grape"] },
    { q: "Which is made from flour and baked?", a: "Bread", choices: ["Bread", "Milk", "Mango"] },
    { q: "Which drink is made from oranges?", a: "Orange juice", choices: ["Orange juice", "Tea", "Soup"] },
    { q: "Which grows on a vine and is red when ripe?", a: "Tomato", choices: ["Tomato", "Potato", "Onion"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildVc4() {
  return shuffle([
    { q: "Where do you go to learn?", a: "School", choices: ["School", "Shop", "Park"] },
    { q: "Where do you go to buy food?", a: "Shop", choices: ["Shop", "School", "Library"] },
    { q: "Where do you go to play on swings?", a: "Park", choices: ["Park", "Hospital", "School"] },
    { q: "Where do you go when you are sick?", a: "Hospital", choices: ["Hospital", "Library", "Park"] },
    { q: "Where do you borrow books?", a: "Library", choices: ["Library", "Shop", "Church"] },
    { q: "Where do you sleep at night?", a: "Home", choices: ["Home", "School", "Park"] },
    { q: "Where do you go to swim?", a: "Pool", choices: ["Pool", "Shop", "Hospital"] },
    { q: "Where do you catch a bus or train?", a: "Station", choices: ["Station", "Library", "Home"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildVc5() {
  return shuffle([
    { q: "You use your eyes to...", a: "See", choices: ["See", "Hear", "Smell"] },
    { q: "You use your ears to...", a: "Hear", choices: ["Hear", "See", "Taste"] },
    { q: "You use your nose to...", a: "Smell", choices: ["Smell", "Hear", "Touch"] },
    { q: "You use your tongue to...", a: "Taste", choices: ["Taste", "Smell", "See"] },
    { q: "You use your hands to...", a: "Touch", choices: ["Touch", "Taste", "Hear"] },
    { q: "You use your legs to...", a: "Walk", choices: ["Walk", "See", "Smell"] },
    { q: "You use your mouth to...", a: "Talk", choices: ["Talk", "Walk", "Hear"] },
    { q: "You use your teeth to...", a: "Chew", choices: ["Chew", "Smell", "See"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const VOCABULARY_BUILDERS = {
  "vc-1": buildVc1,
  "vc-2": buildVc2,
  "vc-3": buildVc3,
  "vc-4": buildVc4,
  "vc-5": buildVc5,
};

export const VOCABULARY_QUESTION_COUNTS = {
  "vc-1": 8, "vc-2": 8, "vc-3": 8, "vc-4": 8, "vc-5": 8,
};

export function buildVocabularyQuestions(moduleId) {
  const builder = VOCABULARY_BUILDERS[moduleId];
  return builder ? builder() : [];
}
