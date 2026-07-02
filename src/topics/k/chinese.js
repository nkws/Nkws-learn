import { shuffle } from "../../utils/helpers";

// Kindergarten 华文 — 基础识字 (basic character recognition) and counting in
// Chinese, picture-first. Koko reads the prompt in Mandarin; the child taps
// the matching character/picture.

export const K_CHINESE_INTRO = {
  "kg-cn1": {
    title: "认一认",
    pages: [
      { text: "每样东西都有名字。猫、狗、鱼。听一听，看图，选出对的字。", emoji: "🐱 🐶 🐟" },
      { text: "跟着 Koko 一起认字，你真棒！", emoji: "🦊 字" },
    ],
  },
};

const ANIMAL_ICONS = { "猫": "🐱", "狗": "🐶", "鱼": "🐟", "牛": "🐄", "鸟": "🐦", "兔": "🐰" };

function buildKgCn1() {
  // 认字 — "这是什么？" tap the matching character.
  return shuffle([
    { q: "[PIC:🐱] 这是什么？", a: "猫", choices: ["猫", "狗", "鱼"] },
    { q: "[PIC:🐶] 这是什么？", a: "狗", choices: ["狗", "猫", "牛"] },
    { q: "[PIC:🐟] 这是什么？", a: "鱼", choices: ["鱼", "鸟", "兔"] },
    { q: "[PIC:🐄] 这是什么？", a: "牛", choices: ["牛", "猫", "狗"] },
    { q: "[PIC:🐦] 这是什么？", a: "鸟", choices: ["鸟", "鱼", "兔"] },
    { q: "[PIC:🐰] 这是什么？", a: "兔", choices: ["兔", "牛", "猫"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    choiceIcons: ANIMAL_ICONS,
  }));
}

function buildKgCn2() {
  // 数一数 — count and tap the Chinese number word.
  return shuffle([
    { q: "[PIC:🍎] 有几个苹果？", a: "一", choices: ["一", "二", "三"] },
    { q: "[PIC:🍎🍎] 有几个苹果？", a: "二", choices: ["一", "二", "三"] },
    { q: "[PIC:🍎🍎🍎] 有几个苹果？", a: "三", choices: ["二", "三", "四"] },
    { q: "[PIC:⭐⭐⭐⭐] 有几颗星星？", a: "四", choices: ["三", "四", "五"] },
    { q: "[PIC:⭐⭐⭐⭐⭐] 有几颗星星？", a: "五", choices: ["四", "五", "六"] },
    { q: "[PIC:🐟🐟🐟🐟🐟🐟] 有几条鱼？", a: "六", choices: ["五", "六", "七"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "kg-cn1": buildKgCn1, "kg-cn2": buildKgCn2 };
export const K_CHINESE_QUESTION_COUNTS = { "kg-cn1": 6, "kg-cn2": 6 };
export function buildKgChineseQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
