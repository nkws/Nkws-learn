import { shuffle } from "../utils/helpers";
export const PINYIN_INTRO = {
  "py-6": {
    title: "声母 (j, q, x)",
    pages: [
      { text: "j, q, x 只和 i, ü 做朋友！比如 ji（鸡）, qi（七）, xi（西）。", emoji: "j q x + i ü" },
      { text: `j 像"鸡蛋"的"鸡"。q 像"七"。x 像"西瓜"的"西"。`, emoji: "j→鸡 q→七 x→西" },
    ],
  },
  "py-7": {
    title: "声母 (zh, ch, sh, r)",
    pages: [
      { text: "zh, ch, sh, r 是翘舌音——舌头要卷起来！", emoji: "👅 翘舌音" },
      { text: `zh 像"中国"的"中"。ch 像"吃"。sh 像"书"。r 像"热"。`, emoji: "zh→中 ch→吃 sh→书 r→热" },
    ],
  },
  "py-8": {
    title: "声母 (z, c, s)",
    pages: [
      { text: "z, c, s 是平舌音——舌头放平！", emoji: "👅 平舌音" },
      { text: `z 像"早"。c 像"草"。s 像"三"。注意不要和翘舌音 zh, ch, sh 搞混！`, emoji: "z→早 c→草 s→三" },
    ],
  },
  "py-9": {
    title: "复韵母 (ai, ei, ao, ou)",
    pages: [
      { text: "复韵母是两个韵母合在一起的音：ai, ei, ao, ou。", emoji: "a+i=ai" },
      { text: `ai 像"爱"。ei 像"北"。ao 像"好"。ou 像"口"。`, emoji: "ai→爱 ei→北 ao→好 ou→口" },
    ],
  },
  "py-10": {
    title: "鼻韵母 (an, en, ang, eng, ong)",
    pages: [
      { text: "鼻韵母的尾巴是 n 或 ng。an 和 ang 听起来不一样哦！", emoji: "n vs ng" },
      { text: `an 像"安"。en 像"人"。ang 像"方"。eng 像"灯"。ong 像"东"。`, emoji: "an→安 eng→灯 ong→东" },
    ],
  },
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

// ⚠️ CHINESE CONTENT — flagged for manual validation of pinyin associations

function buildPy6() {
  return shuffle([
    { q: '"家"的"家"是哪个声母？', a: "j", choices: ["j", "g", "z"] },
    { q: '"七"的"七"是哪个声母？', a: "q", choices: ["q", "k", "c"] },
    { q: '"学校"的"学"是哪个声母？', a: "x", choices: ["x", "s", "sh"] },
    { q: '"鸡蛋"的"鸡"是哪个声母？', a: "j", choices: ["j", "q", "z"] },
    { q: '"去"是哪个声母？', a: "q", choices: ["q", "k", "g"] },
    { q: '"小"是哪个声母？', a: "x", choices: ["x", "s", "sh"] },
    { q: '"姐姐"的"姐"是哪个声母？', a: "j", choices: ["j", "z", "q"] },
    { q: '"铅笔"的"铅"是哪个声母？', a: "q", choices: ["q", "j", "k"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPy7() {
  return shuffle([
    { q: '"中国"的"中"是哪个声母？', a: "zh", choices: ["zh", "z", "ch"] },
    { q: '"吃饭"的"吃"是哪个声母？', a: "ch", choices: ["ch", "c", "sh"] },
    { q: '"是"的"是"是哪个声母？', a: "sh", choices: ["sh", "s", "zh"] },
    { q: '"人"是哪个声母？', a: "r", choices: ["r", "l", "n"] },
    { q: '"知道"的"知"是哪个声母？', a: "zh", choices: ["zh", "z", "sh"] },
    { q: '"车"是哪个声母？', a: "ch", choices: ["ch", "c", "zh"] },
    { q: '"书"是哪个声母？', a: "sh", choices: ["sh", "s", "ch"] },
    { q: '"热"是哪个声母？', a: "r", choices: ["r", "l", "sh"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPy8() {
  return shuffle([
    { q: '"早上"的"早"是哪个声母？', a: "z", choices: ["z", "zh", "c"] },
    { q: '"草地"的"草"是哪个声母？', a: "c", choices: ["c", "ch", "s"] },
    { q: '"四"的"四"是哪个声母？', a: "s", choices: ["s", "sh", "z"] },
    { q: '"做"是哪个声母？', a: "z", choices: ["z", "zh", "s"] },
    { q: '"从"是哪个声母？', a: "c", choices: ["c", "ch", "z"] },
    { q: '"三"是哪个声母？', a: "s", choices: ["s", "sh", "c"] },
    { q: '"字"是哪个声母？', a: "z", choices: ["z", "c", "zh"] },
    { q: '"色"是哪个声母？', a: "s", choices: ["s", "c", "sh"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPy9() {
  return shuffle([
    { q: '"爱"的韵母是什么？', a: "ai", choices: ["ai", "ei", "ao"] },
    { q: '"北"的韵母是什么？', a: "ei", choices: ["ei", "ai", "ou"] },
    { q: '"好"的韵母是什么？', a: "ao", choices: ["ao", "ou", "ai"] },
    { q: '"口"的韵母是什么？', a: "ou", choices: ["ou", "ao", "ei"] },
    { q: "bai 里面的韵母是什么？", a: "ai", choices: ["ai", "a", "ei"] },
    { q: "mei 里面的韵母是什么？", a: "ei", choices: ["ei", "ai", "e"] },
    { q: "hao 里面的韵母是什么？", a: "ao", choices: ["ao", "a", "ou"] },
    { q: "dou 里面的韵母是什么？", a: "ou", choices: ["ou", "o", "ao"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildPy10() {
  return shuffle([
    { q: '"安"的韵母是什么？', a: "an", choices: ["an", "ang", "en"] },
    { q: '"灯"的韵母是什么？', a: "eng", choices: ["eng", "en", "ang"] },
    { q: '"人"的韵母是什么？', a: "en", choices: ["en", "an", "eng"] },
    { q: '"东"的韵母是什么？', a: "ong", choices: ["ong", "eng", "ang"] },
    { q: '"方"的韵母是什么？', a: "ang", choices: ["ang", "an", "eng"] },
    { q: "ban 里面的韵母是什么？", a: "an", choices: ["an", "a", "ang"] },
    { q: "feng 里面的韵母是什么？", a: "eng", choices: ["eng", "en", "ong"] },
    { q: "dong 里面的韵母是什么？", a: "ong", choices: ["ong", "ou", "eng"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "py-1": buildPy1, "py-2": buildPy2, "py-3": buildPy3, "py-4": buildPy4, "py-5": buildPy5, "py-6": buildPy6, "py-7": buildPy7, "py-8": buildPy8, "py-9": buildPy9, "py-10": buildPy10 };
export const PINYIN_QUESTION_COUNTS = { "py-1": 8, "py-2": 8, "py-3": 8, "py-4": 8, "py-5": 8, "py-6": 8, "py-7": 8, "py-8": 8, "py-9": 8, "py-10": 8 };
export function buildPinyinQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
