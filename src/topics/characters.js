function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
    { q: "这是几？一", a: "1", choices: ["1", "2", "3"] },
    { q: "这是几？二", a: "2", choices: ["1", "2", "4"] },
    { q: "这是几？三", a: "3", choices: ["2", "3", "5"] },
    { q: "这是几？四", a: "4", choices: ["3", "4", "6"] },
    { q: "这是几？五", a: "5", choices: ["4", "5", "7"] },
    { q: "这是几？六", a: "6", choices: ["5", "6", "8"] },
    { q: "这是几？七", a: "7", choices: ["6", "7", "9"] },
    { q: "这是几？八", a: "8", choices: ["7", "8", "10"] },
    { q: "这是几？九", a: "9", choices: ["8", "9", "10"] },
    { q: "这是几？十", a: "10", choices: ["8", "9", "10"] },
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
