import { shuffle } from "../../utils/helpers";
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
    { q: "A window is usually made of?", a: "Glass", choices: ["Glass", "Wood", "Fabric"], explain: "Glass is transparent, which means we can see right through it. That is why windows are made of glass, so we can look outside." },
    { q: "A chair is usually made of?", a: "Wood", choices: ["Wood", "Glass", "Rubber"], explain: "Wood is strong and hard, so it can hold our weight when we sit down. That makes wood a good material for chairs." },
    { q: "A coin is made of?", a: "Metal", choices: ["Metal", "Plastic", "Wood"], explain: "Metal is hard and strong, so coins do not break or wear out as we use them every day. That is why coins are made of metal." },
    { q: "A t-shirt is made of?", a: "Fabric", choices: ["Fabric", "Metal", "Glass"], explain: "Fabric is soft and bendy, so it feels nice on our skin and moves when we move. That is why clothes are made of fabric." },
    { q: "A water bottle is often made of?", a: "Plastic", choices: ["Plastic", "Wood", "Fabric"], explain: "Plastic is light and waterproof, so it can hold water without leaking and is easy to carry. That is why bottles are often plastic." },
    { q: "A door is usually made of?", a: "Wood", choices: ["Wood", "Glass", "Fabric"], explain: "Wood is strong and can be cut into a flat shape, so it makes a solid door that keeps a room safe and shut." },
    { q: "A mirror has a surface made of?", a: "Glass", choices: ["Glass", "Plastic", "Wood"], explain: "Glass is smooth and shiny, so light bounces off it and we see our reflection. That is why a mirror has a glass surface." },
    { q: "A cooking pot is made of?", a: "Metal", choices: ["Metal", "Fabric", "Plastic"], explain: "Metal does not melt or burn on a hot stove, and it carries heat well to cook food. That is why pots are made of metal." },
    { q: "A rubber duck is made of?", a: "Rubber", choices: ["Rubber", "Metal", "Glass"], explain: "Rubber is soft, bendy, and waterproof, so a rubber duck is safe to squeeze and floats in the bath." },
    { q: "A school bag is often made of?", a: "Fabric", choices: ["Fabric", "Glass", "Metal"], explain: "Fabric is light and soft but still strong, so a fabric bag is comfy on your back and can hold your books." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2sMt2() {
  return shuffle([
    { q: "Which material is transparent?", a: "Glass", choices: ["Glass", "Wood", "Metal"], explain: "Transparent means light passes through so we can see the other side. Glass is transparent, but wood and metal are not." },
    { q: "Which material is the hardest?", a: "Metal", choices: ["Metal", "Fabric", "Rubber"], explain: "Metal is the hardest of these, so it does not dent or squash easily. Fabric and rubber are soft and bendy instead." },
    { q: "Which material is flexible and can bend easily?", a: "Rubber", choices: ["Rubber", "Glass", "Metal"], explain: "Flexible means it bends without breaking. Rubber is flexible, so it bends easily, while glass would crack." },
    { q: "Which material is soft to touch?", a: "Fabric", choices: ["Fabric", "Metal", "Glass"], explain: "Soft means it gives way gently when you press it. Fabric is soft to touch, but metal and glass feel hard." },
    { q: "Which material can float on water?", a: "Wood", choices: ["Wood", "Metal", "Glass"], explain: "Wood is light for its size, so it floats on water. Metal and glass are heavier and sink." },
    { q: "Which material is waterproof?", a: "Plastic", choices: ["Plastic", "Fabric", "Wood"], explain: "Waterproof means water cannot soak through. Plastic is waterproof, but fabric and wood soak up water." },
    { q: "Which material breaks easily if dropped?", a: "Glass", choices: ["Glass", "Rubber", "Fabric"], explain: "Glass is hard but brittle, so it shatters when it is dropped. Rubber and fabric just bounce or bend instead." },
    { q: "Which material can be attracted by a magnet?", a: "Metal", choices: ["Metal", "Plastic", "Wood"], explain: "Magnets pull on some metals, like iron and steel. Plastic and wood are not metal, so a magnet does not attract them." },
    { q: "Which material is rough like tree bark?", a: "Wood", choices: ["Wood", "Glass", "Plastic"], explain: "Wood comes from trees, so it can feel rough and bumpy. Glass and plastic are made smooth instead." },
    { q: "Which material can stretch?", a: "Rubber", choices: ["Rubber", "Glass", "Wood"], explain: "Rubber is stretchy, so you can pull it longer and it springs back. Glass and wood snap if you try to stretch them." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2sMt3() {
  return shuffle([
    { q: "Why is rubber used for tyres?", a: "It is flexible and strong", choices: ["It is flexible and strong", "It is transparent", "It is soft and light"], explain: "We pick a material by its property. Rubber is flexible and strong, so tyres can bend over bumps without breaking." },
    { q: "Why is glass used for windows?", a: "We can see through it", choices: ["We can see through it", "It is very strong", "It is easy to bend"], explain: "We pick a material by its property. Glass is transparent, so we can see through a window to the outside." },
    { q: "Why is metal used for keys?", a: "It is strong and hard", choices: ["It is strong and hard", "It is soft", "It is transparent"], explain: "We pick a material by its property. Metal is strong and hard, so a key keeps its shape and does not bend in the lock." },
    { q: "Why is wood used for furniture?", a: "It is strong and can be shaped", choices: ["It is strong and can be shaped", "It is transparent", "It is very soft"], explain: "We pick a material by its property. Wood is strong yet easy to cut, so it can be shaped into sturdy tables and chairs." },
    { q: "Why is plastic used for lunch boxes?", a: "It is light and waterproof", choices: ["It is light and waterproof", "It is very heavy", "It breaks easily"], explain: "We pick a material by its property. Plastic is light and waterproof, so a lunch box is easy to carry and keeps food from leaking." },
    { q: "Why is fabric used for clothes?", a: "It is soft and comfortable", choices: ["It is soft and comfortable", "It is hard and strong", "It is transparent"], explain: "We pick a material by its property. Fabric is soft and bendy, so clothes feel comfortable and move with our bodies." },
    { q: "Why are metal pots used for cooking?", a: "Metal can handle heat well", choices: ["Metal can handle heat well", "Metal is soft", "Metal is transparent"], explain: "We pick a material by its property. Metal does not burn and carries heat well, so a metal pot can cook food on a hot stove." },
    { q: "Why is rubber used for erasers?", a: "It can rub off pencil marks", choices: ["It can rub off pencil marks", "It is transparent", "It is very heavy"], explain: "We pick a material by its property. Rubber is soft and grippy, so it lifts pencil marks off the paper when you rub it." },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
