import { shuffle } from "../utils/helpers";
// ============ INTRO CONTENT ============

export const GRAMMAR_INTRO = {
  "gr-1": {
    title: "Singular and Plural",
    pages: [
      {
        text: "When we have ONE thing, we say it is singular. One cat!",
        emoji: "🐱 = 1",
      },
      {
        text: "When we have MORE THAN ONE, we say it is plural. Two cats!",
        emoji: "🐱🐱 = 2",
      },
      {
        text: "We usually add 's' to make a word plural. Cat becomes cats!",
        emoji: "cat ➡️ cats",
      },
      {
        text: "Some words are special! Child becomes children, not childs!",
        emoji: "👦 ➡️ 👦👧👦",
      },
      {
        text: "Let's practise making words plural!",
        emoji: "🦊 📝 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildGr1() {
  return shuffle([
    { q: "What is the plural of 'cat'?", a: "cats", choices: ["cats", "cates", "caties"], explain: "Plural means more than one. For most words we just add 's' to the end, so one cat becomes two cats." },
    { q: "What is the plural of 'dog'?", a: "dogs", choices: ["dogs", "doges", "dogies"], explain: "Plural means more than one. For most words we just add 's' to the end, so one dog becomes two dogs." },
    { q: "What is the plural of 'book'?", a: "books", choices: ["books", "bookes", "bookies"], explain: "Plural means more than one. For most words we just add 's' to the end, so one book becomes two books." },
    { q: "What is the plural of 'child'?", a: "children", choices: ["children", "childs", "childes"], explain: "Some words are special and do not just add 's'. The plural of child changes its whole shape to children." },
    { q: "What is the plural of 'box'?", a: "boxes", choices: ["boxes", "boxs", "boxies"], explain: "When a word ends in 'x', we add 'es' to make it easier to say. So one box becomes two boxes." },
    { q: "What is the plural of 'fish'?", a: "fish", choices: ["fish", "fishes", "fishs"], explain: "A few words stay exactly the same for one or many. We say one fish and also many fish, with no extra letters." },
    { q: "What is the plural of 'man'?", a: "men", choices: ["men", "mans", "manes"], explain: "Some words are special and do not just add 's'. The plural of man changes the middle letters to men." },
    { q: "What is the plural of 'foot'?", a: "feet", choices: ["feet", "foots", "footes"], explain: "Some words are special and do not just add 's'. The plural of foot changes the middle letters to feet." },
    { q: "What is the plural of 'bus'?", a: "buses", choices: ["buses", "buss", "busies"], explain: "When a word ends in 's', we add 'es' to make it easier to say. So one bus becomes two buses." },
    { q: "What is the plural of 'baby'?", a: "babies", choices: ["babies", "babys", "babyes"], explain: "When a word ends in 'y' after a sound letter, we change the 'y' to 'ies'. So one baby becomes two babies." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildGr2() {
  return shuffle([
    { q: "He found __ apple on his desk.", a: "an", choices: ["an", "a", "the"], explain: "Try saying 'a apple' out loud — it sounds bumpy! 'An apple' flows smoothly. We use 'an' before words that start with a, e, i, o or u." },
    { q: "She is holding __ cat.", a: "a", choices: ["a", "an", "the"], explain: "Try saying 'an cat' — it sounds wrong! 'A cat' flows smoothly. We use 'a' before words that do not start with a, e, i, o or u." },
    { q: "Dad cracked __ egg for breakfast.", a: "an", choices: ["an", "a", "the"], explain: "Try saying 'a egg' — it sounds bumpy! 'An egg' flows smoothly. We use 'an' before words that start with a, e, i, o or u." },
    { q: "Tom kicked __ ball into the goal.", a: "a", choices: ["a", "an", "the"], explain: "Try saying 'an ball' — it sounds wrong! 'A ball' flows smoothly. We use 'a' before words that do not start with a, e, i, o or u." },
    { q: "We saw __ elephant at the zoo.", a: "an", choices: ["an", "a", "the"], explain: "Try saying 'a elephant' — it sounds bumpy! 'An elephant' flows smoothly. We use 'an' before words that start with a, e, i, o or u." },
    { q: "They built __ house on the hill.", a: "a", choices: ["a", "an", "the"], explain: "Try saying 'an house' — it sounds wrong! 'A house' flows smoothly. We use 'a' before words that do not start with a, e, i, o or u." },
    { q: "__ sun gives us light and warmth.", a: "the", choices: ["the", "a", "an"], explain: "There is only one sun — we all know exactly which one we mean. So we say 'the sun'. Saying 'a sun' would sound very strange!" },
    { q: "I got a new book. __ book has many pictures.", a: "the", choices: ["the", "a", "an"], explain: "We said 'a new book' first, so now we know which book we mean. When we already know which one, we say 'the book', not 'a book'." },
    { q: "Please close __ door when you leave.", a: "the", choices: ["the", "a", "an"], explain: "There is one door in the room and everyone can see it. When we all know which thing we mean, we say 'the door', not 'a door'." },
    { q: "__ moon looks beautiful tonight.", a: "the", choices: ["the", "a", "an"], explain: "There is only one moon — we all know exactly which one we mean. So we say 'the moon'. Saying 'a moon' would sound very strange!" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildGr3() {
  return shuffle([
    { q: "Fill in: I __ happy.", a: "am", choices: ["am", "is", "are"], explain: "The word 'I' always goes with 'am'. We say 'I am', so 'I am happy' is the right way." },
    { q: "Fill in: She __ tall.", a: "is", choices: ["is", "am", "are"], explain: "We use 'is' for one person or thing. 'She' is one person, so we say 'she is tall'." },
    { q: "Fill in: They __ here.", a: "are", choices: ["are", "is", "am"], explain: "We use 'are' for more than one. 'They' means lots of people, so we say 'they are here'." },
    { q: "Fill in: He __ my friend.", a: "is", choices: ["is", "am", "are"], explain: "We use 'is' for one person or thing. 'He' is one person, so we say 'he is my friend'." },
    { q: "Fill in: We __ in school.", a: "are", choices: ["are", "is", "am"], explain: "We use 'are' for more than one. 'We' means us together, so we say 'we are in school'." },
    { q: "Fill in: I __ a boy.", a: "am", choices: ["am", "is", "are"], explain: "The word 'I' always goes with 'am'. We say 'I am', so 'I am a boy' is the right way." },
    { q: "Fill in: The cat __ small.", a: "is", choices: ["is", "am", "are"], explain: "We use 'is' for one thing. 'The cat' is only one cat, so we say 'the cat is small'." },
    { q: "Fill in: You __ my friend.", a: "are", choices: ["are", "is", "am"], explain: "The word 'you' always goes with 'are'. We say 'you are', so 'you are my friend' is the right way." },
    { q: "Fill in: The dogs __ big.", a: "are", choices: ["are", "is", "am"], explain: "We use 'are' for more than one. 'The dogs' means many dogs, so we say 'the dogs are big'." },
    { q: "Fill in: I __ hungry.", a: "am", choices: ["am", "is", "are"], explain: "The word 'I' always goes with 'am'. We say 'I am', so 'I am hungry' is the right way." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildGr4() {
  return shuffle([
    { q: "__ is my book. (pointing near)", a: "This", choices: ["This", "That", "Those"], explain: "We use 'this' for one thing that is close to us. The book is near you, so we say 'this is my book'." },
    { q: "__ is your bag. (pointing far)", a: "That", choices: ["That", "This", "These"], explain: "We use 'that' for one thing that is far away. The bag is far off, so we say 'that is your bag'." },
    { q: "__ is my pencil. (in your hand)", a: "This", choices: ["This", "That", "Those"], explain: "We use 'this' for one thing that is close to us. The pencil is in your hand, so we say 'this is my pencil'." },
    { q: "__ is a bird in the sky. (far away)", a: "That", choices: ["That", "This", "These"], explain: "We use 'that' for one thing that is far away. The bird is up in the sky, so we say 'that is a bird'." },
    { q: "__ is my chair. (you are sitting on it)", a: "This", choices: ["This", "That", "Those"], explain: "We use 'this' for one thing that is close to us. You are sitting on the chair, so we say 'this is my chair'." },
    { q: "__ is the mountain. (very far away)", a: "That", choices: ["That", "This", "These"], explain: "We use 'that' for one thing that is far away. The mountain is a long way off, so we say 'that is the mountain'." },
    { q: "__ is my lunch box. (on your desk)", a: "This", choices: ["This", "That", "Those"], explain: "We use 'this' for one thing that is close to us. The lunch box is right on your desk, so we say 'this is my lunch box'." },
    { q: "__ is a plane in the sky. (far away)", a: "That", choices: ["That", "This", "These"], explain: "We use 'that' for one thing that is far away. The plane is high in the sky, so we say 'that is a plane'." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

const GRAMMAR_BUILDERS = {
  "gr-1": buildGr1,
  "gr-2": buildGr2,
  "gr-3": buildGr3,
  "gr-4": buildGr4,
};

export const GRAMMAR_QUESTION_COUNTS = {
  "gr-1": 10, "gr-2": 10, "gr-3": 10, "gr-4": 8,
};

export function buildGrammarQuestions(moduleId) {
  const builder = GRAMMAR_BUILDERS[moduleId];
  return builder ? builder() : [];
}
