import { shuffle } from "../../utils/helpers";
// ⚠️ CHINESE CONTENT — flagged for manual validation

export const P4_CN_EXTENDED_INTRO = {
  "p4c-rd1": {
    title: "阅读理解",
    pages: [
      { text: "先认真读短文，再回答问题。答案藏在短文里！", emoji: "📖 → ❓" },
    ],
  },
};

function buildP4cRd1() {
  // ⚠️ Flagged for Chinese accuracy review
  const passage1 = "短文：今天是星期六，天气很好。小文和爸爸一起去公园放风筝。公园里有很多人，有的在跑步，有的在打太极拳。小文的风筝是一只大蝴蝶，飞得又高又远。小文开心地叫了起来：'爸爸，你看，我的风筝飞得最高！'";
  const passage2 = "短文：学校的图书馆有很多书。小雨最喜欢去图书馆看书。她最爱看的是童话故事。每个星期三下午，小雨都会去图书馆借两本书。她看完后总是准时还书。图书馆的阿姨说小雨是最好的小读者。";
  const p1Qs = shuffle([
    { q: "今天是星期几？", p: passage1, a: "星期六", choices: ["星期六", "星期天", "星期五"] },
    { q: "小文和谁去公园？", p: passage1, a: "爸爸", choices: ["爸爸", "妈妈", "朋友"] },
    { q: "小文的风筝是什么样子的？", p: passage1, a: "一只大蝴蝶", choices: ["一只大蝴蝶", "一只老鹰", "一条龙"] },
    { q: "公园里的人在做什么？", p: passage1, a: "跑步和打太极拳", choices: ["跑步和打太极拳", "踢足球", "游泳"] },
    { q: "小文的心情怎么样？", p: passage1, a: "很开心", choices: ["很开心", "很难过", "很生气"] },
  ]);
  const p2Qs = shuffle([
    { q: "小雨最喜欢去哪里？", p: passage2, a: "图书馆", choices: ["图书馆", "公园", "超市"] },
    { q: "小雨最爱看什么书？", p: passage2, a: "童话故事", choices: ["童话故事", "科学书", "漫画"] },
    { q: "小雨每次借几本书？", p: passage2, a: "两本", choices: ["两本", "三本", "一本"] },
    { q: "小雨什么时候去图书馆？", p: passage2, a: "每个星期三下午", choices: ["每个星期三下午", "每天早上", "每个周末"] },
    { q: "图书馆的阿姨怎么评价小雨？", p: passage2, a: "最好的小读者", choices: ["最好的小读者", "最安静的孩子", "最聪明的学生"] },
  ]);
  const groups = Math.random() < 0.5 ? [p1Qs, p2Qs] : [p2Qs, p1Qs];
  return [...groups[0], ...groups[1]].map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), passage: item.p }));
}

function buildP4cId1() {
  // ⚠️ Flagged for idiom accuracy review — simpler P4-level idioms
  return shuffle([
    { q: "'三心二意'是什么意思？", a: "做事不专心", choices: ["做事不专心", "非常认真", "有三个心"] },
    { q: "'自言自语'是什么意思？", a: "自己跟自己说话", choices: ["自己跟自己说话", "大声说话", "不说话"] },
    { q: "'七上八下'是什么意思？", a: "心里不安，很紧张", choices: ["心里不安，很紧张", "上上下下跑", "很开心"] },
    { q: "'五颜六色'是什么意思？", a: "颜色很多，很好看", choices: ["颜色很多，很好看", "只有五种颜色", "黑白色"] },
    { q: "'大惊小怪'是什么意思？", a: "对小事情过于吃惊", choices: ["对小事情过于吃惊", "非常勇敢", "很害怕"] },
    { q: "'一干二净'是什么意思？", a: "非常干净，什么都没有了", choices: ["非常干净，什么都没有了", "只洗了一次", "有一点脏"] },
    { q: "'东张西望'是什么意思？", a: "到处看，不专心", choices: ["到处看，不专心", "往东走", "看风景"] },
    { q: "'无可奈何'是什么意思？", a: "没有办法", choices: ["没有办法", "很生气", "很高兴"] },
    { q: "'恍然大悟'是什么意思？", a: "突然明白了", choices: ["突然明白了", "睡着了", "忘记了"] },
    { q: "'争先恐后'是什么意思？", a: "抢着做，怕落后", choices: ["抢着做，怕落后", "害怕得不敢做", "慢慢来"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4cBj1() {
  // ⚠️ Flagged for Chinese accuracy review
  return shuffle([
    { q: "哪个句子是正确的？", a: "一本书放在桌子上。", choices: ["一本书放在桌子上。", "一只书放在桌子上。", "一条书放在桌子上。"] },
    { q: "哪个句子是正确的？", a: "因为下雨了，所以我们不去了。", choices: ["因为下雨了，所以我们不去了。", "因为下雨了，但是我们不去了。", "虽然下雨了，所以我们不去了。"] },
    { q: "哪个句子是正确的？", a: "美丽的花开了。", choices: ["美丽的花开了。", "美丽地花开了。", "美丽得花开了。"] },
    { q: "哪个句子是正确的？", a: "他高兴地唱歌。", choices: ["他高兴地唱歌。", "他高兴的唱歌。", "他高兴得唱歌。"] },
    { q: "哪个句子是正确的？", a: "一条鱼在水里游。", choices: ["一条鱼在水里游。", "一只鱼在水里游。", "一个鱼在水里游。"] },
    { q: "哪个句子是正确的？", a: "虽然他很累，但是他还是坚持跑步。", choices: ["虽然他很累，但是他还是坚持跑步。", "虽然他很累，所以他还是坚持跑步。", "因为他很累，但是他还是坚持跑步。"] },
    { q: "哪个句子是正确的？", a: "一棵树长在路边。", choices: ["一棵树长在路边。", "一条树长在路边。", "一张树长在路边。"] },
    { q: "哪个句子是正确的？", a: "他跑得很快。", choices: ["他跑得很快。", "他跑的很快。", "他跑地很快。"] },
    { q: "哪个句子是正确的？", a: "如果你努力学习，就一定能考好。", choices: ["如果你努力学习，就一定能考好。", "如果你努力学习，但是一定能考好。", "虽然你努力学习，就一定能考好。"] },
    { q: "哪个句子是正确的？", a: "一支铅笔在笔盒里。", choices: ["一支铅笔在笔盒里。", "一根铅笔在笔盒里。", "一条铅笔在笔盒里。"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4c-rd1": buildP4cRd1, "p4c-id1": buildP4cId1, "p4c-bj1": buildP4cBj1 };
export const P4_CN_EXTENDED_QUESTION_COUNTS = { "p4c-rd1": 10, "p4c-id1": 10, "p4c-bj1": 10 };
export function buildCnExtended4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
