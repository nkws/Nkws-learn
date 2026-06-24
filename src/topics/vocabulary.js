import { shuffle } from "../utils/helpers";
// ============ QUESTION BANKS ============

function buildVc1() {
  return shuffle([
    { q: "Your mother's mother is your...?", a: "Grandmother", choices: ["Grandmother", "Aunt", "Sister"], explain: "We add 'grand' to mean one step further up the family. Your mother's mother is one step above your mum, so she is your grandmother." },
    { q: "Your father's brother is your...?", a: "Uncle", choices: ["Uncle", "Brother", "Cousin"], explain: "The brother of your mum or dad is called your uncle. He is your father's brother, so he is your uncle." },
    { q: "Your mother's sister is your...?", a: "Aunt", choices: ["Aunt", "Grandmother", "Sister"], explain: "The sister of your mum or dad is called your aunt. She is your mother's sister, so she is your aunt." },
    { q: "Your aunt's child is your...?", a: "Cousin", choices: ["Cousin", "Brother", "Uncle"], explain: "The children of your aunts and uncles are your cousins. Your aunt's child is in that group, so he or she is your cousin." },
    { q: "A girl with the same parents as you is your...?", a: "Sister", choices: ["Sister", "Cousin", "Aunt"], explain: "Children who share the same mum and dad are called brothers and sisters. A girl who shares your parents is your sister." },
    { q: "A boy with the same parents as you is your...?", a: "Brother", choices: ["Brother", "Uncle", "Father"], explain: "Children who share the same mum and dad are called brothers and sisters. A boy who shares your parents is your brother." },
    { q: "Your father's father is your...?", a: "Grandfather", choices: ["Grandfather", "Uncle", "Brother"], explain: "We add 'grand' to mean one step further up the family. Your father's father is one step above your dad, so he is your grandfather." },
    { q: "The woman who takes care of you at home is often your...?", a: "Mother", choices: ["Mother", "Teacher", "Aunt"], explain: "The woman who is your parent and looks after you at home is your mother. A teacher cares for you at school, not at home." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildVc2() {
  return shuffle([
    { q: "Which animal says 'moo'?", a: "Cow", choices: ["Cow", "Dog", "Cat"], explain: "Different animals make different sounds. The big farm animal that gives us milk and says 'moo' is the cow." },
    { q: "Which animal says 'woof'?", a: "Dog", choices: ["Dog", "Cat", "Bird"], explain: "Different animals make different sounds. The pet that barks 'woof' and likes to fetch is the dog." },
    { q: "Which animal says 'meow'?", a: "Cat", choices: ["Cat", "Cow", "Frog"], explain: "Different animals make different sounds. The soft, furry pet that says 'meow' is the cat." },
    { q: "Which animal can fly in the sky?", a: "Bird", choices: ["Bird", "Fish", "Dog"], explain: "Animals with wings and feathers can fly. The bird has wings, so it can fly up in the sky." },
    { q: "Which animal lives in water?", a: "Fish", choices: ["Fish", "Cat", "Horse"], explain: "Some animals live in water and breathe with gills. The fish swims and lives in the water." },
    { q: "Which animal says 'ribbit'?", a: "Frog", choices: ["Frog", "Duck", "Cow"], explain: "Different animals make different sounds. The small green animal that hops and says 'ribbit' is the frog." },
    { q: "Which animal says 'quack'?", a: "Duck", choices: ["Duck", "Hen", "Dog"], explain: "Different animals make different sounds. The bird that swims on ponds and says 'quack' is the duck." },
    { q: "Which animal gives us eggs?", a: "Hen", choices: ["Hen", "Cow", "Frog"], explain: "Different farm animals give us different foods. The hen lays the eggs we eat, while the cow gives milk." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildVc3() {
  return shuffle([
    { q: "Which is a fruit?", a: "Apple", choices: ["Apple", "Bread", "Rice"], explain: "Fruit grows on plants and trees and is sweet to eat. The apple is a fruit, while bread and rice are not." },
    { q: "Which is a drink?", a: "Milk", choices: ["Milk", "Cake", "Egg"], explain: "A drink is something you pour and sip. Milk is a drink, while cake and egg are foods you chew." },
    { q: "Which is a vegetable?", a: "Carrot", choices: ["Carrot", "Banana", "Juice"], explain: "Vegetables are plant parts we eat, often in dinner. The carrot is a vegetable, while a banana is a fruit." },
    { q: "Which do you eat for breakfast?", a: "Cereal", choices: ["Cereal", "Noodles", "Rice"], explain: "Breakfast is the first meal of the day. Cereal is a common breakfast food, while noodles and rice are usually eaten at lunch or dinner." },
    { q: "Which fruit is yellow and curved?", a: "Banana", choices: ["Banana", "Apple", "Grape"], explain: "We can name fruit by colour and shape. The fruit that is long, yellow and curved is the banana." },
    { q: "Which is made from flour and baked?", a: "Bread", choices: ["Bread", "Milk", "Mango"], explain: "Some foods are baked in an oven from flour. Bread is made from flour and baked, while milk and mango are not." },
    { q: "Which drink is made from oranges?", a: "Orange juice", choices: ["Orange juice", "Tea", "Soup"], explain: "We can name a drink by what it is made from. Squeezing oranges gives us orange juice." },
    { q: "Which grows on a vine and is red when ripe?", a: "Tomato", choices: ["Tomato", "Potato", "Onion"], explain: "Plants grow in different ways. The tomato grows on a vine and turns red when it is ripe, unlike the potato and onion which grow underground." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildVc4() {
  return shuffle([
    { q: "Where do you go to learn?", a: "School", choices: ["School", "Shop", "Park"], explain: "Each place is for a special job. The place where teachers help you learn and read is the school." },
    { q: "Where do you go to buy food?", a: "Shop", choices: ["Shop", "School", "Library"], explain: "Each place is for a special job. The place where you pay money to buy food is the shop." },
    { q: "Where do you go to play on swings?", a: "Park", choices: ["Park", "Hospital", "School"], explain: "Each place is for a special job. The outdoor place with swings and slides to play on is the park." },
    { q: "Where do you go when you are sick?", a: "Hospital", choices: ["Hospital", "Library", "Park"], explain: "Each place is for a special job. The place where doctors and nurses help you get better is the hospital." },
    { q: "Where do you borrow books?", a: "Library", choices: ["Library", "Shop", "Church"], explain: "Each place is for a special job. The quiet place where you borrow books to take home is the library." },
    { q: "Where do you sleep at night?", a: "Home", choices: ["Home", "School", "Park"], explain: "Each place is for a special job. The place where you live with your family and sleep at night is home." },
    { q: "Where do you go to swim?", a: "Pool", choices: ["Pool", "Shop", "Hospital"], explain: "Each place is for a special job. The big tank of water you go to for swimming is the pool." },
    { q: "Where do you catch a bus or train?", a: "Station", choices: ["Station", "Library", "Home"], explain: "Each place is for a special job. The place where you wait to catch a bus or train is the station." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildVc5() {
  return shuffle([
    { q: "Which body part do we use to see things?", a: "Eyes", choices: ["Eyes", "Ears", "Nose"], explain: "Each body part has its own job. Your eyes let in light and tell your brain what shapes and colours are around you." },
    { q: "Which body part do we use to hear sounds?", a: "Ears", choices: ["Ears", "Eyes", "Hands"], explain: "Each body part has its own job. Your ears catch sounds from the air and send them to your brain so you can hear them." },
    { q: "You use your nose to...", a: "Smell", choices: ["Smell", "Hear", "Touch"], explain: "Each body part has its own job. Your nose takes in air so you can smell things like flowers and food." },
    { q: "You use your tongue to...", a: "Taste", choices: ["Taste", "Smell", "See"], explain: "Each body part has its own job. Your tongue lets you taste if food is sweet or sour." },
    { q: "You use your hands to...", a: "Touch", choices: ["Touch", "Taste", "Hear"], explain: "Each body part has its own job. Your hands let you touch and feel if things are soft or hard." },
    { q: "You use your legs to...", a: "Walk", choices: ["Walk", "See", "Smell"], explain: "Each body part has its own job. Your legs are strong so you can walk and run from place to place." },
    { q: "You use your mouth to...", a: "Talk", choices: ["Talk", "Walk", "Hear"], explain: "Each body part has its own job. Your mouth makes sounds and words so you can talk to people." },
    { q: "You use your teeth to...", a: "Chew", choices: ["Chew", "Smell", "See"], explain: "Each body part has its own job. Your teeth bite and chew food into small pieces so you can swallow it." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
