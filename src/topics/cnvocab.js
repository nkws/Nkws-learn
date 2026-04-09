function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildCnv1() {
  return shuffle([
    { q: "What does 你好 mean?", a: "Hello", choices: ["Hello", "Goodbye", "Sorry"] },
    { q: "What does 谢谢 mean?", a: "Thank you", choices: ["Thank you", "Sorry", "Hello"] },
    { q: "What does 再见 mean?", a: "Goodbye", choices: ["Goodbye", "Hello", "Please"] },
    { q: "What does 对不起 mean?", a: "Sorry", choices: ["Sorry", "Thank you", "It's okay"] },
    { q: "What does 没关系 mean?", a: "It's okay", choices: ["It's okay", "Sorry", "Goodbye"] },
    { q: "What does 早上好 mean?", a: "Good morning", choices: ["Good morning", "Good evening", "Hello"] },
    { q: "What does 晚上好 mean?", a: "Good evening", choices: ["Good evening", "Good morning", "Goodbye"] },
    { q: "What does 请 mean?", a: "Please", choices: ["Please", "Thank you", "Hello"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCnv2() {
  return shuffle([
    { q: "What does 饭 mean?", a: "Rice", choices: ["Rice", "Noodles", "Bread"] },
    { q: "What does 面 mean?", a: "Noodles", choices: ["Noodles", "Rice", "Egg"] },
    { q: "What does 水 mean?", a: "Water", choices: ["Water", "Milk", "Rice"] },
    { q: "What does 牛奶 mean?", a: "Milk", choices: ["Milk", "Water", "Egg"] },
    { q: "What does 鸡蛋 mean?", a: "Egg", choices: ["Egg", "Bread", "Milk"] },
    { q: "What does 面包 mean?", a: "Bread", choices: ["Bread", "Noodles", "Rice"] },
    { q: "What does 苹果 mean?", a: "Apple", choices: ["Apple", "Banana", "Egg"] },
    { q: "What does 香蕉 mean?", a: "Banana", choices: ["Banana", "Apple", "Bread"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCnv3() {
  return shuffle([
    { q: "What does 老师 mean?", a: "Teacher", choices: ["Teacher", "Student", "School"] },
    { q: "What does 学生 mean?", a: "Student", choices: ["Student", "Teacher", "Book"] },
    { q: "What does 书 mean?", a: "Book", choices: ["Book", "Pen", "Desk"] },
    { q: "What does 笔 mean?", a: "Pen", choices: ["Pen", "Book", "Chair"] },
    { q: "What does 桌子 mean?", a: "Desk", choices: ["Desk", "Chair", "School"] },
    { q: "What does 椅子 mean?", a: "Chair", choices: ["Chair", "Desk", "Pen"] },
    { q: "What does 学校 mean?", a: "School", choices: ["School", "Classroom", "Teacher"] },
    { q: "What does 教室 mean?", a: "Classroom", choices: ["Classroom", "School", "Student"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCnv4() {
  return shuffle([
    { q: "What does 红色 mean?", a: "Red", choices: ["Red", "Blue", "Green"] },
    { q: "What does 蓝色 mean?", a: "Blue", choices: ["Blue", "Red", "Yellow"] },
    { q: "What does 绿色 mean?", a: "Green", choices: ["Green", "Blue", "White"] },
    { q: "What does 黄色 mean?", a: "Yellow", choices: ["Yellow", "Green", "Orange"] },
    { q: "What does 白色 mean?", a: "White", choices: ["White", "Black", "Yellow"] },
    { q: "What does 黑色 mean?", a: "Black", choices: ["Black", "White", "Red"] },
    { q: "What does 粉色 mean?", a: "Pink", choices: ["Pink", "Red", "Orange"] },
    { q: "What does 橙色 mean?", a: "Orange", choices: ["Orange", "Yellow", "Pink"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const CNVOCAB_BUILDERS = {
  "cnv-1": buildCnv1,
  "cnv-2": buildCnv2,
  "cnv-3": buildCnv3,
  "cnv-4": buildCnv4,
};

export const CNVOCAB_QUESTION_COUNTS = {
  "cnv-1": 8, "cnv-2": 8, "cnv-3": 8, "cnv-4": 8,
};

export function buildCnVocabQuestions(moduleId) {
  const builder = CNVOCAB_BUILDERS[moduleId];
  return builder ? builder() : [];
}
