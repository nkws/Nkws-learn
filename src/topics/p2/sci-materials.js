function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ INTRO CONTENT ============

export const P2_MATERIALS_INTRO = {
  "p2s-mt1": {
    title: "Types of Materials",
    pages: [
      {
        text: "Everything around us is made of materials!",
        emoji: "🪵 🪨 🧱",
      },
      {
        text: "Wood comes from trees. We use it to make tables and chairs.",
        emoji: "🌳 ➡️ 🪑",
      },
      {
        text: "Metal is strong. We use it for keys, coins, and cars.",
        emoji: "🔑 🪙 🚗",
      },
      {
        text: "Glass is transparent. We can see through windows!",
        emoji: "🪟 👀",
      },
      {
        text: "Let's learn about the materials around us!",
        emoji: "🦊 🔬 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildP2sMt1() {
  return shuffle([
    { q: "A window is usually made of?", a: "Glass", choices: ["Glass", "Wood", "Fabric"] },
    { q: "A chair is usually made of?", a: "Wood", choices: ["Wood", "Glass", "Rubber"] },
    { q: "A coin is made of?", a: "Metal", choices: ["Metal", "Plastic", "Wood"] },
    { q: "A t-shirt is made of?", a: "Fabric", choices: ["Fabric", "Metal", "Glass"] },
    { q: "A water bottle is often made of?", a: "Plastic", choices: ["Plastic", "Wood", "Fabric"] },
    { q: "A door is usually made of?", a: "Wood", choices: ["Wood", "Glass", "Fabric"] },
    { q: "A mirror has a surface made of?", a: "Glass", choices: ["Glass", "Plastic", "Wood"] },
    { q: "A cooking pot is made of?", a: "Metal", choices: ["Metal", "Fabric", "Plastic"] },
    { q: "A rubber duck is made of?", a: "Rubber", choices: ["Rubber", "Metal", "Glass"] },
    { q: "A school bag is often made of?", a: "Fabric", choices: ["Fabric", "Glass", "Metal"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2sMt2() {
  return shuffle([
    { q: "Which material is transparent?", a: "Glass", choices: ["Glass", "Wood", "Metal"] },
    { q: "Which material is the hardest?", a: "Metal", choices: ["Metal", "Fabric", "Rubber"] },
    { q: "Which material is flexible and can bend easily?", a: "Rubber", choices: ["Rubber", "Glass", "Metal"] },
    { q: "Which material is soft to touch?", a: "Fabric", choices: ["Fabric", "Metal", "Glass"] },
    { q: "Which material can float on water?", a: "Wood", choices: ["Wood", "Metal", "Glass"] },
    { q: "Which material is waterproof?", a: "Plastic", choices: ["Plastic", "Fabric", "Wood"] },
    { q: "Which material breaks easily if dropped?", a: "Glass", choices: ["Glass", "Rubber", "Fabric"] },
    { q: "Which material can be attracted by a magnet?", a: "Metal", choices: ["Metal", "Plastic", "Wood"] },
    { q: "Which material is rough like tree bark?", a: "Wood", choices: ["Wood", "Glass", "Plastic"] },
    { q: "Which material can stretch?", a: "Rubber", choices: ["Rubber", "Glass", "Wood"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2sMt3() {
  return shuffle([
    { q: "Why is rubber used for tyres?", a: "It is flexible and strong", choices: ["It is flexible and strong", "It is transparent", "It is soft and light"] },
    { q: "Why is glass used for windows?", a: "We can see through it", choices: ["We can see through it", "It is very strong", "It is easy to bend"] },
    { q: "Why is metal used for keys?", a: "It is strong and hard", choices: ["It is strong and hard", "It is soft", "It is transparent"] },
    { q: "Why is wood used for furniture?", a: "It is strong and can be shaped", choices: ["It is strong and can be shaped", "It is transparent", "It is very soft"] },
    { q: "Why is plastic used for lunch boxes?", a: "It is light and waterproof", choices: ["It is light and waterproof", "It is very heavy", "It breaks easily"] },
    { q: "Why is fabric used for clothes?", a: "It is soft and comfortable", choices: ["It is soft and comfortable", "It is hard and strong", "It is transparent"] },
    { q: "Why are metal pots used for cooking?", a: "Metal can handle heat well", choices: ["Metal can handle heat well", "Metal is soft", "Metal is transparent"] },
    { q: "Why is rubber used for erasers?", a: "It can rub off pencil marks", choices: ["It can rub off pencil marks", "It is transparent", "It is very heavy"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const MATERIALS_BUILDERS = {
  "p2s-mt1": buildP2sMt1,
  "p2s-mt2": buildP2sMt2,
  "p2s-mt3": buildP2sMt3,
};

export const P2_MATERIALS_QUESTION_COUNTS = {
  "p2s-mt1": 10, "p2s-mt2": 10, "p2s-mt3": 8,
};

export function buildMaterialsQuestions(moduleId) {
  const builder = MATERIALS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
