import { shuffle } from "../../utils/helpers";

export const P1_WELLBEING_INTRO = {
  "p1wb-bul1": {
    title: "Kind Hands, Kind Words",
    pages: [
      { text: "Being KIND means we use kind hands, kind words, and kind feet. We don't hit, push, or say mean things.", emoji: "🤲 💛" },
      { text: "If someone is not kind to you on purpose, walk away and TELL A GROWN-UP you trust — a teacher or parent.", emoji: "🚶 → 🧑‍🏫" },
      { text: "Telling a grown-up to keep someone SAFE is good. It is NOT being a tattle-tale.", emoji: "🛡️" },
      { text: "If you see a friend who is alone or sad, you can sit with them, share, or just smile. Small kindness helps a lot.", emoji: "🙂" },
    ],
  },
  "p1wb-feel1": {
    title: "Big Feelings",
    pages: [
      { text: "Everyone has feelings — happy, sad, angry, scared, excited. ALL feelings are okay. What matters is what we DO.", emoji: "😀 😢 😠 😨" },
      { text: "When you feel angry, take 3 BIG breaths. Count slowly: 1... 2... 3... It helps your brain calm down.", emoji: "🌬️ 1️⃣2️⃣3️⃣" },
      { text: "If you are sad, talk to a grown-up or hug someone you love. Sad feelings get smaller when shared.", emoji: "🤗" },
      { text: "It is okay to ask for help. Strong kids ask for help.", emoji: "💪" },
    ],
  },
  "p1wb-money1": {
    title: "What is Money?",
    pages: [
      { text: "Money is what we use to buy things we need and want. In Singapore we use DOLLARS and CENTS.", emoji: "💵 🇸🇬" },
      { text: "Money is LIMITED. If we spend it, it is gone. We must choose carefully.", emoji: "🪙" },
      { text: "Some things we NEED — like food, water, and clothes for school. Some things are just nice to have, like sweets.", emoji: "🍎 vs 🍬" },
      { text: "When we put money in a piggy bank, that is SAVING. Saving lets us buy bigger things later.", emoji: "🐷💰" },
    ],
  },
  "p1wb-eco1": {
    title: "Looking After Earth",
    pages: [
      { text: "Earth is our home. We share it with people, animals, plants, and the sea.", emoji: "🌍" },
      { text: "We can help by SAVING WATER. Turn off the tap when you brush your teeth.", emoji: "🚰" },
      { text: "We can SAVE ELECTRICITY by turning off lights and the TV when nobody is using them.", emoji: "💡" },
      { text: "Throw rubbish in the BIN, not on the ground. If you can, sort paper, plastic, and cans into the right bins.", emoji: "🗑️ ♻️" },
    ],
  },
  "p1wb-think1": {
    title: "Asking 'Is It True?'",
    pages: [
      { text: "Not everything we hear or see is TRUE. Sometimes people make mistakes. Sometimes people pretend.", emoji: "🤔" },
      { text: "If a friend says something that sounds strange, it is okay to ASK: 'How do you know?' or 'Did you see it yourself?'", emoji: "❓" },
      { text: "On TV and the internet, some things are stories — they look real but they are made up.", emoji: "📺" },
      { text: "When you don't know if something is true, ask a grown-up you trust.", emoji: "🧑‍🏫" },
    ],
  },
};

function buildP1WbBul1() {
  return shuffle([
    { q: "What does 'kind hands' mean?", a: "We do not hit or push", choices: ["We do not hit or push", "We wash our hands", "We clap loudly"] },
    { q: "What should you do if someone is mean to you on purpose?", a: "Tell a trusted grown-up", choices: ["Tell a trusted grown-up", "Hit them back", "Cry alone and say nothing"] },
    { q: "If you see a friend sitting alone, you can:", a: "Sit with them and be kind", choices: ["Sit with them and be kind", "Laugh and walk away", "Tell others not to talk to them"] },
    { q: "Telling a teacher when someone is being hurt is:", a: "The right thing to do", choices: ["The right thing to do", "Being a tattle-tale", "Being mean"] },
    { q: "Which is a kind word to say?", a: "Are you okay?", choices: ["Are you okay?", "Go away!", "I don't like you."] },
    { q: "Bullying means hurting someone:", a: "On purpose, again and again", choices: ["On purpose, again and again", "By accident once", "Only with words"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP1WbFeel1() {
  return shuffle([
    { q: "When you are angry, what is one calm thing to do?", a: "Take three big breaths", choices: ["Take three big breaths", "Hit the wall", "Yell at someone"] },
    { q: "Are sad feelings okay to have?", a: "Yes, all feelings are okay", choices: ["Yes, all feelings are okay", "No, only happy is okay", "Only on weekends"] },
    { q: "If you feel sad for a long time, you should:", a: "Tell a grown-up you trust", choices: ["Tell a grown-up you trust", "Keep it a secret forever", "Pretend to be happy"] },
    { q: "Asking for help is:", a: "Brave and strong", choices: ["Brave and strong", "Weak", "Not allowed"] },
    { q: "Which feeling word matches 'I won my game!'?", a: "Excited", choices: ["Excited", "Angry", "Scared"] },
    { q: "When a friend is sad, a kind thing to do is:", a: "Listen and ask if they are okay", choices: ["Listen and ask if they are okay", "Tell them to stop crying", "Walk away"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP1WbMoney1() {
  return shuffle([
    { q: "What do we use to buy things in Singapore?", a: "Dollars and cents", choices: ["Dollars and cents", "Pebbles", "Stickers"] },
    { q: "Which is a NEED?", a: "Food", choices: ["Food", "Toy", "Sweet"] },
    { q: "Which is a WANT?", a: "A new toy", choices: ["A new toy", "Drinking water", "Clean clothes"] },
    { q: "Putting money in a piggy bank is called:", a: "Saving", choices: ["Saving", "Spending", "Wasting"] },
    { q: "After we spend our money, what happens?", a: "It is gone", choices: ["It is gone", "It comes back", "It grows by itself"] },
    { q: "If you save your pocket money each week, you will have:", a: "More money for bigger things later", choices: ["More money for bigger things later", "No money ever again", "The exact same amount"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP1WbEco1() {
  return shuffle([
    { q: "What should we do when we brush our teeth to save water?", a: "Turn off the tap", choices: ["Turn off the tap", "Leave it running", "Make the water hotter"] },
    { q: "Where should rubbish go?", a: "In the bin", choices: ["In the bin", "On the floor", "In the river"] },
    { q: "What helps save electricity?", a: "Switching off lights we don't need", choices: ["Switching off lights we don't need", "Leaving the TV on all night", "Opening the fridge for fun"] },
    { q: "Why should we look after Earth?", a: "It is our home and we share it with everyone", choices: ["It is our home and we share it with everyone", "Earth is just dirt", "It does not matter"] },
    { q: "Recycling means:", a: "Turning old things into new things", choices: ["Turning old things into new things", "Throwing things into a big hole", "Burning rubbish"] },
    { q: "Which is a kind action to Earth?", a: "Bringing your own water bottle", choices: ["Bringing your own water bottle", "Buying a new plastic bottle every day", "Leaving the tap running"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP1WbThink1() {
  return shuffle([
    { q: "If a friend says something strange, you can ask:", a: "How do you know?", choices: ["How do you know?", "Why are you my friend?", "Can I have a sweet?"] },
    { q: "Are all things you see on TV true?", a: "No, some are made-up stories", choices: ["No, some are made-up stories", "Yes, all of it is real", "Only the cartoons"] },
    { q: "If you don't know if something is true, you should:", a: "Ask a grown-up you trust", choices: ["Ask a grown-up you trust", "Just believe it", "Say it to everyone"] },
    { q: "It is okay to ask questions when something seems strange.", a: "True", choices: ["True", "False", "Only on Mondays"] },
    { q: "Which is the SAFEST person to ask a question?", a: "A trusted teacher or parent", choices: ["A trusted teacher or parent", "A stranger online", "Nobody, you should know everything yourself"] },
    { q: "Asking 'is it true?' is:", a: "A smart thing to do", choices: ["A smart thing to do", "Rude", "A waste of time"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = {
  "p1wb-bul1": buildP1WbBul1,
  "p1wb-feel1": buildP1WbFeel1,
  "p1wb-money1": buildP1WbMoney1,
  "p1wb-eco1": buildP1WbEco1,
  "p1wb-think1": buildP1WbThink1,
};

export const P1_WELLBEING_QUESTION_COUNTS = {
  "p1wb-bul1": 6,
  "p1wb-feel1": 6,
  "p1wb-money1": 6,
  "p1wb-eco1": 6,
  "p1wb-think1": 6,
};

export function buildP1WellbeingQuestions(moduleId) {
  return (BUILDERS[moduleId] || (() => []))();
}
