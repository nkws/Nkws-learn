function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const PINYIN_INTRO = {
  "py-1": {
    title: "声母 (b, p, m, f)",
    pages: [
      { text: "汉语拼音帮助我们学习中文的发音！", emoji: "🗣️ 拼音" },
      { text: "声母是放在前面的音。比如 b, p, m, f。", emoji: "b  p  m  f" },
      { text: `b 像\u201C玻璃\u201D的\u201C玻\u201D。p 像\u201C泼水\u201D的\u201C泼\u201D。`, emoji: "b → 玻  p → 泼" },
      { text: `m 像\u201C妈妈\u201D的\u201C妈\u201D。f 像\u201C发现\u201D的\u201C发\u201D。`, emoji: "m → 妈  f → 发" },
      { text: "我们来练习吧！", emoji: "🦊 加油！💪" },
    ],
  },
};

function buildPy1() {
  return shuffle([
    { q: '"妈妈"的"妈"是哪个声母？', a: "m", choices: ["b", "m", "f"] },
    { q: '"爸爸"的"爸"是哪个声母？', a: "b", choices: ["b", "p", "d"] },
    { q: '"泼水"的"泼"是哪个声母？', a: "p", choices: ["p", "b", "f"] },
    { q: '"发现"的"发"是哪个声母？', a: "f", choices: ["f", "m", "p"] },
    { q: '"玻璃"的"玻"是哪个声母？', a: "b", choices: ["b", "d", "p"] },
    { q: '"蘑菇"的"蘑"是哪个声母？', a: "m", choices: ["m", "n", "f"] },
    { q: '"佛山"的"佛"是哪个声母？', a: "f", choices: ["f", "b", "p"] },
    { q: '"瀑布"的"瀑"是哪个声母？', a: "p", choices: ["p", "b", "m"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPy2() {
  return shuffle([
    { q: '"大家"的"大"是哪个声母？', a: "d", choices: ["d", "t", "n"] },
    { q: '"太阳"的"太"是哪个声母？', a: "t", choices: ["t", "d", "l"] },
    { q: '"你好"的"你"是哪个声母？', a: "n", choices: ["n", "l", "m"] },
    { q: '"老师"的"老"是哪个声母？', a: "l", choices: ["l", "n", "d"] },
    { q: '"弟弟"的"弟"是哪个声母？', a: "d", choices: ["d", "b", "t"] },
    { q: '"天空"的"天"是哪个声母？', a: "t", choices: ["t", "d", "n"] },
    { q: '"牛奶"的"牛"是哪个声母？', a: "n", choices: ["n", "l", "m"] },
    { q: '"蓝色"的"蓝"是哪个声母？', a: "l", choices: ["l", "n", "d"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPy3() {
  return shuffle([
    { q: '"哥哥"的"哥"是哪个声母？', a: "g", choices: ["g", "k", "h"] },
    { q: '"开心"的"开"是哪个声母？', a: "k", choices: ["k", "g", "h"] },
    { q: '"好的"的"好"是哪个声母？', a: "h", choices: ["h", "g", "k"] },
    { q: '"公园"的"公"是哪个声母？', a: "g", choices: ["g", "k", "h"] },
    { q: '"快乐"的"快"是哪个声母？', a: "k", choices: ["k", "g", "h"] },
    { q: '"花朵"的"花"是哪个声母？', a: "h", choices: ["h", "k", "g"] },
    { q: '"狗狗"的"狗"是哪个声母？', a: "g", choices: ["g", "h", "k"] },
    { q: '"喝水"的"喝"是哪个声母？', a: "h", choices: ["h", "g", "k"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPy4() {
  return shuffle([
    { q: '"啊"是哪个韵母？', a: "a", choices: ["a", "o", "e"] },
    { q: '"哦"是哪个韵母？', a: "o", choices: ["o", "a", "u"] },
    { q: '"鹅"是哪个韵母？', a: "e", choices: ["e", "a", "i"] },
    { q: '"衣服"的"衣"是哪个韵母？', a: "i", choices: ["i", "u", "ü"] },
    { q: '"乌鸦"的"乌"是哪个韵母？', a: "u", choices: ["u", "i", "ü"] },
    { q: '"鱼"是哪个韵母？', a: "ü", choices: ["ü", "u", "i"] },
    { q: "ma 里面的韵母是什么？", a: "a", choices: ["a", "o", "e"] },
    { q: "lu 里面的韵母是什么？", a: "u", choices: ["u", "i", "a"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPy5() {
  return shuffle([
    { q: "第一声是怎样的？", a: "又高又平", choices: ["又高又平", "从低到高", "先降后升"] },
    { q: "第二声是怎样的？", a: "从低到高", choices: ["又高又平", "从低到高", "从高到低"] },
    { q: "第三声是怎样的？", a: "先降后升", choices: ["又高又平", "从高到低", "先降后升"] },
    { q: "第四声是怎样的？", a: "从高到低", choices: ["从低到高", "从高到低", "先降后升"] },
    { q: "mā 是第几声？", a: "第一声", choices: ["第一声", "第二声", "第三声"] },
    { q: "má 是第几声？", a: "第二声", choices: ["第一声", "第二声", "第四声"] },
    { q: "mǎ 是第几声？", a: "第三声", choices: ["第二声", "第三声", "第四声"] },
    { q: "mà 是第几声？", a: "第四声", choices: ["第一声", "第三声", "第四声"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "py-1": buildPy1, "py-2": buildPy2, "py-3": buildPy3, "py-4": buildPy4, "py-5": buildPy5 };
export const PINYIN_QUESTION_COUNTS = { "py-1": 8, "py-2": 8, "py-3": 8, "py-4": 8, "py-5": 8 };
export function buildPinyinQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
