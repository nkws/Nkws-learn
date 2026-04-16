import { shuffle } from "../../utils/helpers";
// ⚠️ CHINESE CONTENT — flagged for manual validation

export const P5_CN_EXTENDED_INTRO = {
  "p5c-rd1": {
    title: "阅读理解",
    pages: [
      { text: "先读短文，再回答问题。有些答案可以在短文中直接找到！", emoji: "📖 → ❓" },
    ],
  },
};

function buildP5cRd1() {
  // ⚠️ Flagged for Chinese accuracy review
  const passage1 = "短文：放学后，小明和同学们一起去操场踢足球。小明踢得很好，进了两个球。可是在比赛快结束的时候，小明不小心摔倒了，膝盖受了伤。同学们马上跑过来帮助他。老师也赶来了，把小明送到了医务室。";
  const passage2 = "短文：星期六早上，小红跟着爸爸去菜市场买菜。菜市场里人很多，非常热闹。爸爸买了鱼、虾和青菜。小红帮爸爸拎袋子。回到家后，爸爸做了一顿丰盛的午餐。小红觉得自己帮了爸爸，心里很开心。";
  const p1Qs = shuffle([
    { q: "放学后小明去做什么？", p: passage1, a: "踢足球", choices: ["踢足球", "打篮球", "跑步"] },
    { q: "小明进了几个球？", p: passage1, a: "两个", choices: ["两个", "三个", "一个"] },
    { q: "小明受伤后谁来帮助他？", p: passage1, a: "同学们和老师", choices: ["同学们和老师", "爸爸妈妈", "医生"] },
    { q: "小明被送到了哪里？", p: passage1, a: "医务室", choices: ["医务室", "医院", "教室"] },
    { q: "这个故事告诉我们什么？", p: passage1, a: "同学之间要互相帮助", choices: ["同学之间要互相帮助", "不要踢足球", "运动很危险"] },
  ]);
  const p2Qs = shuffle([
    { q: "小红星期六跟谁去菜市场？", p: passage2, a: "爸爸", choices: ["爸爸", "妈妈", "奶奶"] },
    { q: "菜市场怎么样？", p: passage2, a: "人很多，很热闹", choices: ["人很多，很热闹", "很安静", "没有人"] },
    { q: "爸爸买了什么？", p: passage2, a: "鱼、虾和青菜", choices: ["鱼、虾和青菜", "鸡蛋和牛奶", "水果和面包"] },
    { q: "小红帮爸爸做了什么？", p: passage2, a: "拎袋子", choices: ["拎袋子", "做饭", "洗菜"] },
    { q: "小红为什么开心？", p: passage2, a: "因为她帮了爸爸", choices: ["因为她帮了爸爸", "因为吃了好吃的", "因为去了菜市场"] },
  ]);
  const groups = Math.random() < 0.5 ? [p1Qs, p2Qs] : [p2Qs, p1Qs];
  return [...groups[0], ...groups[1]].map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), passage: item.p }));
}

function buildP5cId1() {
  // ⚠️ Flagged for idiom accuracy review
  return shuffle([
    { q: "'一心一意'是什么意思？", a: "专心做一件事", choices: ["专心做一件事", "有很多想法", "三心二意"] },
    { q: "'手忙脚乱'是什么意思？", a: "忙得不知道怎么办", choices: ["忙得不知道怎么办", "手脚很灵活", "跑得很快"] },
    { q: "'自言自语'是什么意思？", a: "自己跟自己说话", choices: ["自己跟自己说话", "大声说话", "和朋友聊天"] },
    { q: "'异口同声'是什么意思？", a: "大家一起说同样的话", choices: ["大家一起说同样的话", "每个人说不同的话", "不说话"] },
    { q: "'目不转睛'是什么意思？", a: "眼睛盯着看，不转开", choices: ["眼睛盯着看，不转开", "闭着眼睛", "看不清楚"] },
    { q: "'兴高采烈'是什么意思？", a: "非常高兴", choices: ["非常高兴", "非常生气", "非常难过"] },
    { q: "'迫不及待'是什么意思？", a: "急得等不了", choices: ["急得等不了", "很有耐心", "不想做"] },
    { q: "'津津有味'是什么意思？", a: "吃得很香或听得很入迷", choices: ["吃得很香或听得很入迷", "食物没有味道", "很难吃"] },
    { q: "'四面八方'是什么意思？", a: "各个方向", choices: ["各个方向", "只有四个方向", "一个方向"] },
    { q: "'半信半疑'是什么意思？", a: "有一点相信又有一点怀疑", choices: ["有一点相信又有一点怀疑", "完全相信", "完全不信"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5cBj1() {
  // ⚠️ Flagged for Chinese accuracy review
  return shuffle([
    { q: "哪个句子是正确的？", a: "他慢慢地走过来。", choices: ["他慢慢地走过来。", "他慢慢的走过来。", "他慢慢得走过来。"] },
    { q: "哪个句子是正确的？", a: "这道题做得很好。", choices: ["这道题做得很好。", "这道题做的很好。", "这道题做地很好。"] },
    { q: "哪个句子是正确的？", a: "因为下雨了，所以我带了伞。", choices: ["因为下雨了，所以我带了伞。", "因为下雨了，但是我带了伞。", "虽然下雨了，所以我带了伞。"] },
    { q: "哪个句子有错误？", a: "大约有三十多位客人来了。", choices: ["大约有三十多位客人来了。", "大约有三十位客人来了。", "这两句都正确。"] },
    { q: "哪个句子是正确的？", a: "一只小鸟停在树上。", choices: ["一只小鸟停在树上。", "一条小鸟停在树上。", "一个小鸟停在树上。"] },
    { q: "哪个句子是正确的？", a: "他不但学习好，而且体育也好。", choices: ["他不但学习好，而且体育也好。", "他不但学习好，但是体育也好。", "他虽然学习好，而且体育也好。"] },
    { q: "哪个句子是正确的？", a: "妈妈买的苹果很甜。", choices: ["妈妈买的苹果很甜。", "妈妈买得苹果很甜。", "妈妈买地苹果很甜。"] },
    { q: "哪个句子有错误？", a: "他把书本放在书包里面去。", choices: ["他把书本放在书包里面去。", "他把书本放进书包里。", "这两句都正确。"] },
    { q: "哪个句子是正确的？", a: "如果明天不下雨，我们就去公园。", choices: ["如果明天不下雨，我们就去公园。", "如果明天不下雨，我们可是去公园。", "虽然明天不下雨，我们就去公园。"] },
    { q: "哪个句子是正确的？", a: "一棵大树长在路旁。", choices: ["一棵大树长在路旁。", "一只大树长在路旁。", "一根大树长在路旁。"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5c-rd1": buildP5cRd1, "p5c-id1": buildP5cId1, "p5c-bj1": buildP5cBj1 };
export const P5_CN_EXTENDED_QUESTION_COUNTS = { "p5c-rd1": 10, "p5c-id1": 10, "p5c-bj1": 10 };
export function buildCnExtended5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
