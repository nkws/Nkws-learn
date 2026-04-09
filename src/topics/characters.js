function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ INTRO CONTENT ============

export const CHARACTERS_INTRO = {
  "ch-1": {
    title: "Chinese Number Characters",
    pages: [
      {
        text: "Chinese has its own special characters for numbers! Let's learn them.",
        emoji: "🔢 🇨🇳",
      },
      {
        text: "一 means One. It looks like one line — easy to remember!",
        emoji: "一 = 1️⃣",
      },
      {
        text: "二 means Two, and 三 means Three. Count the lines!",
        emoji: "二 = 2️⃣  三 = 3️⃣",
      },
      {
        text: "Let's learn all the numbers from one to ten in Chinese!",
        emoji: "🦊 🔢 💪",
      },
    ],
  },
};

// ============ QUESTION BANKS ============

function buildCh1() {
  return shuffle([
    { q: "What does 一 mean?", a: "One", choices: ["One", "Two", "Three"] },
    { q: "What does 二 mean?", a: "Two", choices: ["Two", "One", "Four"] },
    { q: "What does 三 mean?", a: "Three", choices: ["Three", "Two", "Five"] },
    { q: "What does 四 mean?", a: "Four", choices: ["Four", "Three", "Six"] },
    { q: "What does 五 mean?", a: "Five", choices: ["Five", "Four", "Seven"] },
    { q: "What does 六 mean?", a: "Six", choices: ["Six", "Five", "Eight"] },
    { q: "What does 七 mean?", a: "Seven", choices: ["Seven", "Six", "Nine"] },
    { q: "What does 八 mean?", a: "Eight", choices: ["Eight", "Seven", "Ten"] },
    { q: "What does 九 mean?", a: "Nine", choices: ["Nine", "Eight", "Three"] },
    { q: "What does 十 mean?", a: "Ten", choices: ["Ten", "Nine", "One"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCh2() {
  return shuffle([
    { q: "What does 爸爸 mean?", a: "Father", choices: ["Father", "Mother", "Brother"] },
    { q: "What does 妈妈 mean?", a: "Mother", choices: ["Mother", "Father", "Sister"] },
    { q: "What does 哥哥 mean?", a: "Older brother", choices: ["Older brother", "Younger brother", "Father"] },
    { q: "What does 姐姐 mean?", a: "Older sister", choices: ["Older sister", "Younger sister", "Mother"] },
    { q: "What does 弟弟 mean?", a: "Younger brother", choices: ["Younger brother", "Older brother", "Father"] },
    { q: "What does 妹妹 mean?", a: "Younger sister", choices: ["Younger sister", "Older sister", "Mother"] },
    { q: "What does 爷爷 mean?", a: "Grandfather", choices: ["Grandfather", "Grandmother", "Father"] },
    { q: "What does 奶奶 mean?", a: "Grandmother", choices: ["Grandmother", "Grandfather", "Mother"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCh3() {
  return shuffle([
    { q: "What does 头 mean?", a: "Head", choices: ["Head", "Hand", "Foot"] },
    { q: "What does 手 mean?", a: "Hand", choices: ["Hand", "Head", "Foot"] },
    { q: "What does 脚 mean?", a: "Foot", choices: ["Foot", "Hand", "Head"] },
    { q: "What does 眼睛 mean?", a: "Eyes", choices: ["Eyes", "Ears", "Nose"] },
    { q: "What does 耳朵 mean?", a: "Ears", choices: ["Ears", "Eyes", "Mouth"] },
    { q: "What does 嘴巴 mean?", a: "Mouth", choices: ["Mouth", "Nose", "Eyes"] },
    { q: "What does 鼻子 mean?", a: "Nose", choices: ["Nose", "Mouth", "Ears"] },
    { q: "What does 头发 mean?", a: "Hair", choices: ["Hair", "Head", "Hand"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCh4() {
  return shuffle([
    { q: "What does 猫 mean?", a: "Cat", choices: ["Cat", "Dog", "Fish"] },
    { q: "What does 狗 mean?", a: "Dog", choices: ["Dog", "Cat", "Bird"] },
    { q: "What does 鱼 mean?", a: "Fish", choices: ["Fish", "Bird", "Cat"] },
    { q: "What does 鸟 mean?", a: "Bird", choices: ["Bird", "Fish", "Rabbit"] },
    { q: "What does 兔子 mean?", a: "Rabbit", choices: ["Rabbit", "Horse", "Bird"] },
    { q: "What does 马 mean?", a: "Horse", choices: ["Horse", "Cow", "Rabbit"] },
    { q: "What does 牛 mean?", a: "Cow", choices: ["Cow", "Horse", "Chicken"] },
    { q: "What does 鸡 mean?", a: "Chicken", choices: ["Chicken", "Cow", "Dog"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const CHARACTERS_BUILDERS = {
  "ch-1": buildCh1,
  "ch-2": buildCh2,
  "ch-3": buildCh3,
  "ch-4": buildCh4,
};

export const CHARACTERS_QUESTION_COUNTS = {
  "ch-1": 10, "ch-2": 8, "ch-3": 8, "ch-4": 8,
};

export function buildCharactersQuestions(moduleId) {
  const builder = CHARACTERS_BUILDERS[moduleId];
  return builder ? builder() : [];
}
