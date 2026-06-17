import { shuffle } from "../utils/helpers";
// ============ INTRO CONTENT ============

export const BODY_INTRO = {
  "bd-2": {
    title: "The 5 Senses",
    pages: [
      { text: "We have 5 senses that help us understand the world around us!", emoji: "👀 👂 👃 👅 ✋" },
      { text: "We use our EYES to SEE things. Seeing is our sense of sight!", emoji: "👀 🌈" },
      { text: "We use our EARS to HEAR sounds. Hearing is our sense of hearing!", emoji: "👂 🎵" },
      { text: "We use our NOSE to SMELL things. Smelling is our sense of smell!", emoji: "👃 🌹" },
      { text: "We use our TONGUE to TASTE food. Tasting is our sense of taste!", emoji: "👅 🍭" },
      { text: "We use our HANDS to TOUCH and feel things. Touching is our sense of touch!", emoji: "✋ 🧸" },
      { text: "Let's test your knowledge of the 5 senses! Koko is excited!", emoji: "🦊 🧠 = 💪" },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildBd1() {
  return shuffle([
    { q: "What do we use to see?", a: "Eyes", choices: ["Eyes", "Ears", "Nose"], explain: "Each body part has its own job. Looking at things is the job of your eyes, so we see with our eyes." },
    { q: "What do we use to hear?", a: "Ears", choices: ["Eyes", "Ears", "Hands"], explain: "Sounds are caught by your ears, so listening and hearing is the job your ears do." },
    { q: "What do we use to walk?", a: "Legs", choices: ["Arms", "Legs", "Head"], explain: "Your legs are strong and made for moving your body, so walking and running is the job of your legs." },
    { q: "What do we use to hold things?", a: "Hands", choices: ["Feet", "Hands", "Ears"], explain: "Your hands have fingers that can grip, so holding and picking up things is the job of your hands." },
    { q: "What body part helps us think?", a: "Brain", choices: ["Brain", "Stomach", "Knee"], explain: "Your brain is inside your head and is the part that does your thinking and remembering." },
    { q: "What body part pumps blood?", a: "Heart", choices: ["Heart", "Lungs", "Brain"], explain: "Your heart squeezes like a little pump to push blood all around your body, so it is the part that pumps blood." },
    { q: "What do we use to smell?", a: "Nose", choices: ["Ears", "Nose", "Mouth"], explain: "Smells go in through your nose, so sniffing and smelling things is the job your nose does." },
    { q: "What do we use to chew food?", a: "Teeth", choices: ["Teeth", "Eyes", "Fingers"], explain: "Your teeth are hard and made for biting and crushing, so chewing food is the job of your teeth." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildBd2() {
  return shuffle([
    { q: "Which sense do you use to see a rainbow?", a: "Sight", choices: ["Sight", "Smell", "Touch"], explain: "Looking at colours with your eyes is the sense of sight, so that is the sense you use to see a rainbow." },
    { q: "Which sense do you use to hear music?", a: "Hearing", choices: ["Hearing", "Taste", "Sight"], explain: "Catching sounds with your ears is the sense of hearing, so that is the sense you use for music." },
    { q: "Which sense do you use to smell a flower?", a: "Smell", choices: ["Touch", "Smell", "Hearing"], explain: "Sniffing nice scents with your nose is the sense of smell, so that is the sense you use for a flower." },
    { q: "Which sense do you use to taste ice cream?", a: "Taste", choices: ["Taste", "Sight", "Smell"], explain: "Knowing if food is sweet or sour with your tongue is the sense of taste, so that is the sense for ice cream." },
    { q: "Which sense do you use to feel something soft?", a: "Touch", choices: ["Touch", "Taste", "Hearing"], explain: "Feeling if something is soft or hard with your skin is the sense of touch." },
    { q: "Which body part is for the sense of sight?", a: "Eyes", choices: ["Eyes", "Ears", "Nose"], explain: "Each sense has a body part that does it. Sight means seeing, and we see with our eyes." },
    { q: "Which body part is for the sense of hearing?", a: "Ears", choices: ["Tongue", "Ears", "Hands"], explain: "Each sense uses one body part. Hearing means listening to sounds, and we hear with our ears." },
    { q: "Which body part is for the sense of taste?", a: "Tongue", choices: ["Nose", "Eyes", "Tongue"], explain: "Each sense has its own body part. Taste means tasting food, and we taste with our tongue." },
    { q: "Which body part is for the sense of touch?", a: "Hands", choices: ["Hands", "Ears", "Tongue"], explain: "Each sense uses a body part. Touch means feeling things, and we feel most with our hands and skin." },
    { q: "Which body part is for the sense of smell?", a: "Nose", choices: ["Eyes", "Nose", "Tongue"], explain: "Each sense has its own body part. Smell means smelling scents, and we smell with our nose." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildBd3() {
  return shuffle([
    { q: "What should you do every day to stay healthy?", a: "Exercise", choices: ["Exercise", "Watch TV", "Eat candy"], explain: "Moving and playing makes your muscles and heart strong, so exercise every day keeps your body healthy." },
    { q: "How many hours of sleep do kids need?", a: "About 10 hours", choices: ["About 10 hours", "About 2 hours", "About 20 hours"], explain: "Sleep is when your body rests and grows, so children need a lot of it, about 10 hours each night." },
    { q: "What kind of food keeps you healthy?", a: "Vegetables", choices: ["Candy", "Vegetables", "Chips"], explain: "Vegetables are full of good things that help your body grow, so they keep you healthy and strong." },
    { q: "When should you brush your teeth?", a: "Morning and night", choices: ["Morning and night", "Never", "Once a year"], explain: "Brushing washes away germs that hurt your teeth, so doing it morning and night keeps teeth clean and safe." },
    { q: "When should you wash your hands?", a: "Before eating", choices: ["Before eating", "Never", "Once a week"], explain: "Hands pick up tiny germs, so washing before you eat stops those germs going into your tummy." },
    { q: "Is drinking water good for you?", a: "Yes", choices: ["Yes", "No", "Maybe"], explain: "Your body needs water to work well and stay cool, so drinking it is very good and healthy for you." },
    { q: "What helps your body grow strong?", a: "Healthy food", choices: ["Healthy food", "Candy", "Soda"], explain: "Your body builds itself from the food you eat, so healthy food gives it what it needs to grow strong." },
    { q: "What should you do after playing outside?", a: "Wash hands", choices: ["Wash hands", "Eat dirt", "Skip bath"], explain: "Playing outside leaves germs and dirt on your hands, so washing them afterwards keeps you clean and well." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = {
  "bd-1": buildBd1, "bd-2": buildBd2, "bd-3": buildBd3,
};

export const BODY_QUESTION_COUNTS = {
  "bd-1": 8, "bd-2": 10, "bd-3": 8,
};

export function buildBodyQuestions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
