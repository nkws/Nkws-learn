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
    { q: "What gas do we breathe in that our body needs?", a: "Oxygen", choices: ["Oxygen", "Carbon dioxide", "Nitrogen"], explain: "Our cells need oxygen to release energy from food to stay alive. That is the job of breathing in — the lungs take oxygen from the air into the body." },
    { q: "What gas do we breathe out as waste?", a: "Carbon dioxide", choices: ["Carbon dioxide", "Oxygen", "Hydrogen"], explain: "When the body uses oxygen it makes carbon dioxide as a waste gas. We breathe out to remove this carbon dioxide so it does not build up inside us." },
    { q: "Air enters the body through the?", a: "Nose", choices: ["Nose", "Stomach", "Skin"], explain: "Breathing starts at the nose, where air is taken in. The nose also warms, moistens and filters the air before it travels down to the lungs." },
    { q: "The trachea (windpipe) carries air from the nose to the?", a: "Lungs", choices: ["Lungs", "Heart", "Stomach"], explain: "Air must reach the lungs, where oxygen enters the blood. The trachea is the tube that carries the air down from the nose to the lungs." },
    { q: "The diaphragm helps us breathe by?", a: "Moving down to let air into the lungs", choices: ["Moving down to let air into the lungs", "Filtering the air", "Pumping blood"], explain: "The diaphragm is a muscle below the lungs. When it moves down it makes more space, so air is pulled in to fill the lungs — that is how we breathe in." },
    { q: "Gas exchange happens in the?", a: "Lungs", choices: ["Lungs", "Heart", "Nose"], explain: "Gas exchange is where oxygen enters the blood and carbon dioxide leaves it. This swap happens in the lungs, which is why air is brought all the way down to them." },
    { q: "The heart pumps?", a: "Blood around the body", choices: ["Blood around the body", "Air into the lungs", "Food to the stomach"], explain: "The heart is the pump of the circulatory system. It pushes blood through the blood vessels to carry oxygen and nutrients to every part of the body." },
    { q: "Arteries carry blood?", a: "Away from the heart", choices: ["Away from the heart", "Towards the heart", "Only to the lungs"], explain: "Blood vessels have different jobs. Arteries carry blood away from the heart to the rest of the body, while veins bring it back." },
    { q: "Veins carry blood?", a: "Back to the heart", choices: ["Back to the heart", "Away from the heart", "Only to the brain"], explain: "Veins are the return vessels of the circulatory system. After blood has delivered oxygen to the body, veins carry it back to the heart to be pumped again." },
    { q: "Blood carries oxygen and nutrients to?", a: "All parts of the body", choices: ["All parts of the body", "Only the brain", "Only the lungs"], explain: "Every living cell needs oxygen and nutrients to work. The blood is the body's delivery system, so it carries these to all parts of the body, not just one." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP5sRs2() {
  return shuffle([
    { q: "When we exercise, our breathing rate?", a: "Increases", choices: ["Increases", "Decreases", "Stays the same"], explain: "Exercise makes muscles work harder, so they need more oxygen and make more carbon dioxide. We breathe faster to take in extra oxygen and remove the extra waste gas." },
    { q: "When we exercise, our heart rate?", a: "Increases", choices: ["Increases", "Decreases", "Stops"], explain: "Working muscles need oxygen delivered faster, and the blood carries it. So the heart beats quicker to pump blood around the body more often during exercise." },
    { q: "Why does breathing rate increase during exercise?", a: "Muscles need more oxygen", choices: ["Muscles need more oxygen", "We feel tired", "The air gets hotter"], explain: "Muscles release energy using oxygen, and exercise makes them work harder. They need more oxygen, so we breathe faster to supply it through the lungs and blood." },
    { q: "Capillaries are?", a: "Very tiny blood vessels where exchange of substances occurs", choices: ["Very tiny blood vessels where exchange of substances occurs", "Large tubes carrying blood", "Part of the lungs"], explain: "Capillaries are the smallest blood vessels, with very thin walls. This lets oxygen and nutrients pass out to the cells and waste pass back in — exchange happens here." },
    { q: "The nose warms, moistens, and?", a: "Filters the air we breathe", choices: ["Filters the air we breathe", "Digests food", "Pumps blood"], explain: "The nose prepares air before it reaches the lungs. Tiny hairs and mucus trap dust and germs, filtering the air so cleaner air goes into the lungs." },
    { q: "Blood that is rich in oxygen is carried by?", a: "Arteries", choices: ["Arteries", "Veins", "The trachea"], explain: "After the lungs add oxygen, blood is pumped out of the heart to the body through arteries. So arteries usually carry oxygen-rich blood away from the heart." },
    { q: "Blood that carries carbon dioxide waste is carried by?", a: "Veins", choices: ["Veins", "Arteries", "The nose"], explain: "Once cells have used the oxygen, the blood picks up carbon dioxide waste. Veins carry this used blood back to the heart and lungs to get rid of the waste gas." },
    { q: "You can feel your pulse because?", a: "Blood is being pumped through arteries by the heart", choices: ["Blood is being pumped through arteries by the heart", "Air is moving through your body", "Your bones are vibrating"], explain: "Each heartbeat pushes a surge of blood into the arteries, making their walls stretch. You feel that throb as your pulse, so it matches how fast your heart is beating." },
    { q: "How many chambers does the human heart have?", a: "4", choices: ["4", "2", "6"], explain: "The human heart is divided into four chambers. This lets it keep oxygen-rich and oxygen-poor blood apart while it pumps blood to the lungs and the rest of the body." },
    { q: "The respiratory and circulatory systems work together to?", a: "Deliver oxygen to the body and remove carbon dioxide", choices: ["Deliver oxygen to the body and remove carbon dioxide", "Digest food", "Move muscles"], explain: "The lungs take in oxygen and remove carbon dioxide, and the blood carries these gases around. Working together, the two systems supply oxygen to cells and take waste gas away." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p5s-rs1": buildP5sRs1, "p5s-rs2": buildP5sRs2 };
export const P5_RESPIRATORY_QUESTION_COUNTS = { "p5s-rs1": 10, "p5s-rs2": 10 };
export function buildRespiratoryQuestions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
