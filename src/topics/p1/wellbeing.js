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
    { q: "What does 'kind hands' mean?", a: "We do not hit or push", choices: ["We do not hit or push", "We wash our hands", "We clap loudly"], explain: "Kind hands are gentle hands. They help and care, so kind hands never hit or push another person." },
    { q: "What should you do if someone is mean to you on purpose?", a: "Tell a trusted grown-up", choices: ["Tell a trusted grown-up", "Hit them back", "Cry alone and say nothing"], explain: "Hitting back can hurt you too. The safe thing is to tell a trusted grown-up who can help and keep everyone safe." },
    { q: "If you see a friend sitting alone, you can:", a: "Sit with them and be kind", choices: ["Sit with them and be kind", "Laugh and walk away", "Tell others not to talk to them"], explain: "A friend alone may feel sad. Sitting with them and being kind helps them feel they belong and are cared for." },
    { q: "Telling a teacher when someone is being hurt is:", a: "The right thing to do", choices: ["The right thing to do", "Being a tattle-tale", "Being mean"], explain: "Telling to keep someone safe is helping, not tattling. When a person could be hurt, a grown-up needs to know." },
    { q: "Which is a kind word to say?", a: "Are you okay?", choices: ["Are you okay?", "Go away!", "I don't like you."], explain: "Kind words show you care about someone's feelings. Asking 'Are you okay?' tells a friend you want to help them." },
    { q: "Bullying means hurting someone:", a: "On purpose, again and again", choices: ["On purpose, again and again", "By accident once", "Only with words"], explain: "Bullying is meant to hurt and keeps happening. An accident that happens once is not bullying, but it should still be sorted out kindly." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP1WbFeel1() {
  return shuffle([
    { q: "When you are angry, what is one calm thing to do?", a: "Take three big breaths", choices: ["Take three big breaths", "Hit the wall", "Yell at someone"], explain: "Anger is okay, but hurting things or people is not. Slow breaths help your body calm down so you can think clearly." },
    { q: "Are sad feelings okay to have?", a: "Yes, all feelings are okay", choices: ["Yes, all feelings are okay", "No, only happy is okay", "Only on weekends"], explain: "Every feeling, even a sad one, is okay to have. What matters is choosing a kind and safe thing to do with it." },
    { q: "If you feel sad for a long time, you should:", a: "Tell a grown-up you trust", choices: ["Tell a grown-up you trust", "Keep it a secret forever", "Pretend to be happy"], explain: "Sad feelings get smaller when shared. Telling a grown-up you trust means someone can help you feel better." },
    { q: "Asking for help is:", a: "Brave and strong", choices: ["Brave and strong", "Weak", "Not allowed"], explain: "Nobody can do everything alone. Speaking up and asking for help is a brave, strong thing that smart kids do." },
    { q: "Which feeling word matches 'I won my game!'?", a: "Excited", choices: ["Excited", "Angry", "Scared"], explain: "Winning is happy, bouncy news, and that big happy feeling is called excited. Angry and scared are not happy feelings." },
    { q: "When a friend is sad, a kind thing to do is:", a: "Listen and ask if they are okay", choices: ["Listen and ask if they are okay", "Tell them to stop crying", "Walk away"], explain: "A sad friend needs to feel heard, not rushed. Listening and asking if they are okay shows you care about them." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP1WbMoney1() {
  return shuffle([
    { q: "What do we use to buy things in Singapore?", a: "Dollars and cents", choices: ["Dollars and cents", "Pebbles", "Stickers"], explain: "Money is what shops accept to buy things. In Singapore that money is counted in dollars and cents." },
    { q: "Which is a NEED?", a: "Food", choices: ["Food", "Toy", "Sweet"], explain: "A need is something we must have to live and grow. We need food every day; a toy or a sweet is only nice to have." },
    { q: "Which is a WANT?", a: "A new toy", choices: ["A new toy", "Drinking water", "Clean clothes"], explain: "A want is something nice to have but not needed to live. A new toy is a want; water and clothes are needs." },
    { q: "Putting money in a piggy bank is called:", a: "Saving", choices: ["Saving", "Spending", "Wasting"], explain: "Keeping money instead of using it now is called saving. Saved money waits in the bank so you can buy bigger things later." },
    { q: "After we spend our money, what happens?", a: "It is gone", choices: ["It is gone", "It comes back", "It grows by itself"], explain: "Money is limited, so once you spend it on something, that money is gone. That is why we choose carefully before we buy." },
    { q: "If you save your pocket money each week, you will have:", a: "More money for bigger things later", choices: ["More money for bigger things later", "No money ever again", "The exact same amount"], explain: "Saving a little each week adds up over time. Bit by bit it grows into more money for the bigger things you want later." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP1WbEco1() {
  return shuffle([
    { q: "What should we do when we brush our teeth to save water?", a: "Turn off the tap", choices: ["Turn off the tap", "Leave it running", "Make the water hotter"], explain: "Clean water is precious and should not be wasted. While we brush, we don't need the water, so we turn off the tap." },
    { q: "Where should rubbish go?", a: "In the bin", choices: ["In the bin", "On the floor", "In the river"], explain: "Rubbish on the ground or in rivers hurts animals and makes places dirty. Putting it in the bin keeps our home clean and safe." },
    { q: "What helps save electricity?", a: "Switching off lights we don't need", choices: ["Switching off lights we don't need", "Leaving the TV on all night", "Opening the fridge for fun"], explain: "Lights and screens use electricity even when no one needs them. Switching off what we are not using saves it." },
    { q: "Why should we look after Earth?", a: "It is our home and we share it with everyone", choices: ["It is our home and we share it with everyone", "Earth is just dirt", "It does not matter"], explain: "Earth gives us air, water and food, and people, animals and plants all live here together, so we all care for our shared home." },
    { q: "Recycling means:", a: "Turning old things into new things", choices: ["Turning old things into new things", "Throwing things into a big hole", "Burning rubbish"], explain: "Recycling reuses materials instead of wasting them. Old paper, plastic and cans are made into new things, which saves Earth." },
    { q: "Which is a kind action to Earth?", a: "Bringing your own water bottle", choices: ["Bringing your own water bottle", "Buying a new plastic bottle every day", "Leaving the tap running"], explain: "Reusing makes less rubbish. Bringing your own bottle means fewer plastic bottles are thrown away, which is kind to Earth." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP1WbThink1() {
  return shuffle([
    { q: "If a friend says something strange, you can ask:", a: "How do you know?", choices: ["How do you know?", "Why are you my friend?", "Can I have a sweet?"], explain: "Checking before you believe is smart and kind. Asking 'How do you know?' helps you find out if something is really true." },
    { q: "Are all things you see on TV true?", a: "No, some are made-up stories", choices: ["No, some are made-up stories", "Yes, all of it is real", "Only the cartoons"], explain: "Screens show real things and pretend things mixed together. Some shows are made-up stories, so not everything on TV is true." },
    { q: "If you don't know if something is true, you should:", a: "Ask a grown-up you trust", choices: ["Ask a grown-up you trust", "Just believe it", "Say it to everyone"], explain: "Believing or sharing something untrue can cause problems. When you are unsure, a trusted grown-up can help you check." },
    { q: "It is okay to ask questions when something seems strange.", a: "True", choices: ["True", "False", "Only on Mondays"], explain: "Questions help us learn and stay safe. Whenever something seems strange, it is always okay to ask about it." },
    { q: "Which is the SAFEST person to ask a question?", a: "A trusted teacher or parent", choices: ["A trusted teacher or parent", "A stranger online", "Nobody, you should know everything yourself"], explain: "A grown-up who knows and cares for you keeps you safe. A trusted teacher or parent is safer to ask than a stranger online." },
    { q: "Asking 'is it true?' is:", a: "A smart thing to do", choices: ["A smart thing to do", "Rude", "A waste of time"], explain: "Thinking before you believe helps you find the truth. Asking 'is it true?' is a smart, careful thing to do, never rude." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
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
