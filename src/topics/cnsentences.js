function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildCns1() {
  return shuffle([
    { q: "What does 我是男孩 mean?", a: "I am a boy", choices: ["I am a boy", "I am a girl", "I am a teacher"] },
    { q: "What does 我是女孩 mean?", a: "I am a girl", choices: ["I am a girl", "I am a boy", "I am a student"] },
    { q: "What does 我是学生 mean?", a: "I am a student", choices: ["I am a student", "I am a teacher", "I am a boy"] },
    { q: "What does 我是老师 mean?", a: "I am a teacher", choices: ["I am a teacher", "I am a student", "I am a girl"] },
    { q: "What does 他是哥哥 mean?", a: "He is an older brother", choices: ["He is an older brother", "He is a younger brother", "He is a father"] },
    { q: "What does 她是姐姐 mean?", a: "She is an older sister", choices: ["She is an older sister", "She is a younger sister", "She is a mother"] },
    { q: "What does 我是中国人 mean?", a: "I am Chinese", choices: ["I am Chinese", "I am a student", "I am a boy"] },
    { q: "What does 他是爸爸 mean?", a: "He is a father", choices: ["He is a father", "He is a mother", "He is a brother"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCns2() {
  return shuffle([
    { q: "What does 这是书 mean?", a: "This is a book", choices: ["This is a book", "This is a pen", "This is a desk"] },
    { q: "What does 这是笔 mean?", a: "This is a pen", choices: ["This is a pen", "This is a book", "This is a chair"] },
    { q: "What does 这是猫 mean?", a: "This is a cat", choices: ["This is a cat", "This is a dog", "This is a fish"] },
    { q: "What does 这是狗 mean?", a: "This is a dog", choices: ["This is a dog", "This is a cat", "This is a bird"] },
    { q: "What does 这是苹果 mean?", a: "This is an apple", choices: ["This is an apple", "This is a banana", "This is bread"] },
    { q: "What does 这是水 mean?", a: "This is water", choices: ["This is water", "This is milk", "This is rice"] },
    { q: "What does 这是学校 mean?", a: "This is a school", choices: ["This is a school", "This is a classroom", "This is a book"] },
    { q: "What does 这是椅子 mean?", a: "This is a chair", choices: ["This is a chair", "This is a desk", "This is a pen"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCns3() {
  return shuffle([
    { q: "What does 我喜欢猫 mean?", a: "I like cats", choices: ["I like cats", "I like dogs", "I like fish"] },
    { q: "What does 我喜欢狗 mean?", a: "I like dogs", choices: ["I like dogs", "I like cats", "I like birds"] },
    { q: "What does 我喜欢吃饭 mean?", a: "I like eating rice", choices: ["I like eating rice", "I like eating noodles", "I like drinking water"] },
    { q: "What does 我喜欢看书 mean?", a: "I like reading books", choices: ["I like reading books", "I like writing", "I like school"] },
    { q: "What does 我喜欢红色 mean?", a: "I like red", choices: ["I like red", "I like blue", "I like green"] },
    { q: "What does 我喜欢苹果 mean?", a: "I like apples", choices: ["I like apples", "I like bananas", "I like bread"] },
    { q: "What does 我喜欢学校 mean?", a: "I like school", choices: ["I like school", "I like reading books", "I like cats"] },
    { q: "What does 我喜欢喝水 mean?", a: "I like drinking water", choices: ["I like drinking water", "I like eating rice", "I like milk"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildCns4() {
  return shuffle([
    { q: "What does 你好吗 mean?", a: "How are you?", choices: ["How are you?", "What is this?", "Who are you?"] },
    { q: "What does 你叫什么名字 mean?", a: "What is your name?", choices: ["What is your name?", "How are you?", "How old are you?"] },
    { q: "What does 你几岁 mean?", a: "How old are you?", choices: ["How old are you?", "What is your name?", "Where are you?"] },
    { q: "What does 这是什么 mean?", a: "What is this?", choices: ["What is this?", "Who is this?", "Where is this?"] },
    { q: "What does 你喜欢什么 mean?", a: "What do you like?", choices: ["What do you like?", "How are you?", "What is this?"] },
    { q: "What does 你要去哪里 mean?", a: "Where are you going?", choices: ["Where are you going?", "What is your name?", "How old are you?"] },
    { q: "What does 你是谁 mean?", a: "Who are you?", choices: ["Who are you?", "How are you?", "Where are you?"] },
    { q: "What does 你吃了吗 mean?", a: "Have you eaten?", choices: ["Have you eaten?", "What do you like?", "How are you?"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const CNSENTENCES_BUILDERS = {
  "cns-1": buildCns1,
  "cns-2": buildCns2,
  "cns-3": buildCns3,
  "cns-4": buildCns4,
};

export const CNSENTENCES_QUESTION_COUNTS = {
  "cns-1": 8, "cns-2": 8, "cns-3": 8, "cns-4": 8,
};

export function buildCnSentencesQuestions(moduleId) {
  const builder = CNSENTENCES_BUILDERS[moduleId];
  return builder ? builder() : [];
}
