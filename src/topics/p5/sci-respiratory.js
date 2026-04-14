import { shuffle } from "../../utils/helpers";

export const P5_RESPIRATORY_INTRO = {
  "p5s-rs1": {
    title: "Respiratory and Circulatory Systems",
    pages: [
      { text: "We need oxygen to stay alive! The respiratory system brings oxygen into our body and removes carbon dioxide.", emoji: "🫁 💨 O₂" },
      { text: "Air enters through the nose, passes through the trachea (windpipe), and reaches the lungs. The diaphragm helps us breathe!", emoji: "👃 ➡️ 🫁" },
      { text: "The circulatory system pumps blood around the body. The heart pushes blood through blood vessels to deliver oxygen and nutrients!", emoji: "❤️ 🩸 🔄" },
    ],
  },
};

function buildP5sRs1() {
  return shuffle([
    { q: "What gas do we breathe in that our body needs?", a: "Oxygen", choices: ["Oxygen", "Carbon dioxide", "Nitrogen"] },
    { q: "What gas do we breathe out as waste?", a: "Carbon dioxide", choices: ["Carbon dioxide", "Oxygen", "Hydrogen"] },
    { q: "Air enters the body through the?", a: "Nose", choices: ["Nose", "Stomach", "Skin"] },
    { q: "The trachea (windpipe) carries air from the nose to the?", a: "Lungs", choices: ["Lungs", "Heart", "Stomach"] },
    { q: "The diaphragm helps us breathe by?", a: "Moving down to let air into the lungs", choices: ["Moving down to let air into the lungs", "Filtering the air", "Pumping blood"] },
    { q: "Gas exchange happens in the?", a: "Lungs", choices: ["Lungs", "Heart", "Nose"] },
    { q: "The heart pumps?", a: "Blood around the body", choices: ["Blood around the body", "Air into the lungs", "Food to the stomach"] },
    { q: "Arteries carry blood?", a: "Away from the heart", choices: ["Away from the heart", "Towards the heart", "Only to the lungs"] },
    { q: "Veins carry blood?", a: "Back to the heart", choices: ["Back to the heart", "Away from the heart", "Only to the brain"] },
    { q: "Blood carries oxygen and nutrients to?", a: "All parts of the body", choices: ["All parts of the body", "Only the brain", "Only the lungs"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5sRs2() {
  return shuffle([
    { q: "When we exercise, our breathing rate?", a: "Increases", choices: ["Increases", "Decreases", "Stays the same"] },
    { q: "When we exercise, our heart rate?", a: "Increases", choices: ["Increases", "Decreases", "Stops"] },
    { q: "Why does breathing rate increase during exercise?", a: "Muscles need more oxygen", choices: ["Muscles need more oxygen", "We feel tired", "The air gets hotter"] },
    { q: "Capillaries are?", a: "Very tiny blood vessels where exchange of substances occurs", choices: ["Very tiny blood vessels where exchange of substances occurs", "Large tubes carrying blood", "Part of the lungs"] },
    { q: "The nose warms, moistens, and?", a: "Filters the air we breathe", choices: ["Filters the air we breathe", "Digests food", "Pumps blood"] },
    { q: "Blood that is rich in oxygen is carried by?", a: "Arteries", choices: ["Arteries", "Veins", "The trachea"] },
    { q: "Blood that carries carbon dioxide waste is carried by?", a: "Veins", choices: ["Veins", "Arteries", "The nose"] },
    { q: "You can feel your pulse because?", a: "Blood is being pumped through arteries by the heart", choices: ["Blood is being pumped through arteries by the heart", "Air is moving through your body", "Your bones are vibrating"] },
    { q: "How many chambers does the human heart have?", a: "4", choices: ["4", "2", "6"] },
    { q: "The respiratory and circulatory systems work together to?", a: "Deliver oxygen to the body and remove carbon dioxide", choices: ["Deliver oxygen to the body and remove carbon dioxide", "Digest food", "Move muscles"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5s-rs1": buildP5sRs1, "p5s-rs2": buildP5sRs2 };
export const P5_RESPIRATORY_QUESTION_COUNTS = { "p5s-rs1": 10, "p5s-rs2": 10 };
export function buildRespiratoryQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
