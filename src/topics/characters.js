import { shuffle } from "../utils/helpers";
export const CHARACTERS_INTRO = {
  "ch-1": {
    title: "数字 一 到 十",
    pages: [
      { text: "我们来学习中文数字！", emoji: "🔢" },
      { text: "一 二 三 四 五", emoji: "1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣" },
      { text: "六 七 八 九 十", emoji: "6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟" },
      { text: "我们来练习吧！", emoji: "🦊 加油！" },
    ],
  },
};

function buildCh1() {
  return shuffle([
    { q: "数字 3 的中文怎么写？", a: "三", choices: ["二", "三", "四"] },
    { q: "数字 7 的中文怎么写？", a: "七", choices: ["六", "七", "九"] },
    { q: "数字 5 的中文怎么写？", a: "五", choices: ["四", "五", "六"] },
    { q: "数字 1 的中文怎么写？", a: "一", choices: ["一", "二", "十"] },
    { q: "数字 9 的中文怎么写？", a: "九", choices: ["八", "九", "七"] },
    { q: "数字 4 的中文怎么写？", a: "四", choices: ["三", "四", "五"] },
    { q: "数字 10 的中文怎么写？", a: "十", choices: ["八", "九", "十"] },
    { q: "数字 2 的中文怎么写？", a: "二", choices: ["一", "二", "三"] },
    { q: "数字 8 的中文怎么写？", a: "八", choices: ["六", "八", "九"] },
    { q: "数字 6 的中文怎么写？", a: "六", choices: ["五", "六", "七"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCh2() {
  return shuffle([
    { q: "爸爸 是谁？", a: "父亲", choices: ["父亲", "母亲", "哥哥"] },
    { q: "妈妈 是谁？", a: "母亲", choices: ["父亲", "母亲", "姐姐"] },
    { q: "哥哥 是什么？", a: "比你大的男孩", choices: ["比你大的男孩", "比你小的男孩", "比你大的女孩"] },
    { q: "姐姐 是什么？", a: "比你大的女孩", choices: ["比你小的女孩", "比你大的女孩", "比你大的男孩"] },
    { q: "弟弟 是什么？", a: "比你小的男孩", choices: ["比你大的男孩", "比你小的男孩", "比你小的女孩"] },
    { q: "妹妹 是什么？", a: "比你小的女孩", choices: ["比你大的女孩", "比你小的女孩", "比你小的男孩"] },
    { q: "爷爷 是谁？", a: "爸爸的爸爸", choices: ["爸爸的爸爸", "妈妈的爸爸", "爸爸的妈妈"] },
    { q: "奶奶 是谁？", a: "爸爸的妈妈", choices: ["爸爸的妈妈", "妈妈的妈妈", "爸爸的爸爸"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCh3() {
  return shuffle([
    { q: "头 是身体的哪个部分？", a: "最上面的部分", choices: ["最上面的部分", "中间的部分", "最下面的部分"] },
    { q: "手 用来做什么？", a: "拿东西", choices: ["拿东西", "走路", "听声音"] },
    { q: "脚 用来做什么？", a: "走路", choices: ["拿东西", "走路", "看东西"] },
    { q: "眼睛 用来做什么？", a: "看东西", choices: ["看东西", "听声音", "闻味道"] },
    { q: "耳朵 用来做什么？", a: "听声音", choices: ["看东西", "听声音", "吃东西"] },
    { q: "嘴巴 用来做什么？", a: "吃东西和说话", choices: ["看东西", "听声音", "吃东西和说话"] },
    { q: "鼻子 用来做什么？", a: "闻味道", choices: ["闻味道", "看东西", "听声音"] },
    { q: "头发 长在哪里？", a: "头上", choices: ["手上", "头上", "脚上"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCh4() {
  return shuffle([
    { q: "猫 是什么动物？", a: "会喵喵叫的小动物", choices: ["会喵喵叫的小动物", "会汪汪叫的小动物", "会飞的动物"] },
    { q: "狗 是什么动物？", a: "会汪汪叫的小动物", choices: ["会喵喵叫的小动物", "会汪汪叫的小动物", "会游泳的动物"] },
    { q: "鱼 住在哪里？", a: "水里", choices: ["树上", "水里", "地上"] },
    { q: "鸟 会做什么？", a: "飞", choices: ["游泳", "飞", "挖洞"] },
    { q: "兔子 有什么特点？", a: "长耳朵", choices: ["长鼻子", "长耳朵", "长尾巴"] },
    { q: "马 可以做什么？", a: "跑得很快", choices: ["飞得很高", "跑得很快", "游得很快"] },
    { q: "牛 可以给我们什么？", a: "牛奶", choices: ["鸡蛋", "牛奶", "蜂蜜"] },
    { q: "鸡 会下什么？", a: "鸡蛋", choices: ["牛奶", "鸡蛋", "面包"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "ch-1": buildCh1, "ch-2": buildCh2, "ch-3": buildCh3, "ch-4": buildCh4 };
export const CHARACTERS_QUESTION_COUNTS = { "ch-1": 10, "ch-2": 8, "ch-3": 8, "ch-4": 8 };
export function buildCharactersQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
