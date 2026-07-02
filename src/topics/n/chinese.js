import { shuffle } from "../../utils/helpers";

// Nursery 华文 — 认字 (naming animals) and colours in Chinese, picture-first
// for ages 3-4. Koko reads in Mandarin; the child taps the matching picture.

export const N_CHINESE_INTRO = {
  "ns-cn1": {
    title: "这是什么？",
    pages: [
      { text: "看图，听 Koko 说，选对的字。狗、猫、牛。", emoji: "🐶 🐱 🐄" },
      { text: "跟 Koko 一起认字，真棒！", emoji: "🦊 字" },
    ],
  },
};

const ANIMAL_ICONS = { "狗": "🐶", "猫": "🐱", "牛": "🐄", "鱼": "🐟", "鸟": "🐦", "马": "🐴" };
const COLOUR_ICONS = { "红色": "🔴", "蓝色": "🔵", "绿色": "🟢", "黄色": "🟡" };

function buildNsCn1() {
  return shuffle([
    { q: "[PIC:🐶] 这是什么？", a: "狗", choices: ["狗", "猫", "牛"], icons: ANIMAL_ICONS },
    { q: "[PIC:🐱] 这是什么？", a: "猫", choices: ["猫", "狗", "鱼"], icons: ANIMAL_ICONS },
    { q: "[PIC:🐄] 这是什么？", a: "牛", choices: ["牛", "马", "鸟"], icons: ANIMAL_ICONS },
    { q: "[PIC:🐟] 这是什么？", a: "鱼", choices: ["鱼", "猫", "狗"], icons: ANIMAL_ICONS },
    { q: "[PIC:🐦] 这是什么？", a: "鸟", choices: ["鸟", "牛", "马"], icons: ANIMAL_ICONS },
    { q: "[PIC:🐴] 这是什么？", a: "马", choices: ["马", "牛", "鱼"], icons: ANIMAL_ICONS },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: item.icons,
  }));
}

function buildNsCn2() {
  return shuffle([
    { q: "[PIC:🔴] 这是什么颜色？", a: "红色", choices: ["红色", "蓝色", "绿色"] },
    { q: "[PIC:🔵] 这是什么颜色？", a: "蓝色", choices: ["蓝色", "红色", "黄色"] },
    { q: "[PIC:🟢] 这是什么颜色？", a: "绿色", choices: ["绿色", "黄色", "蓝色"] },
    { q: "[PIC:🟡] 这是什么颜色？", a: "黄色", choices: ["黄色", "红色", "绿色"] },
    { q: "[PIC:🍎] 苹果是什么颜色？", a: "红色", choices: ["红色", "蓝色", "黄色"] },
    { q: "[PIC:🍌] 香蕉是什么颜色？", a: "黄色", choices: ["黄色", "绿色", "蓝色"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: COLOUR_ICONS,
  }));
}

const BUILDERS = { "ns-cn1": buildNsCn1, "ns-cn2": buildNsCn2 };
export const N_CHINESE_QUESTION_COUNTS = { "ns-cn1": 6, "ns-cn2": 6 };
export function buildNsChineseQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
