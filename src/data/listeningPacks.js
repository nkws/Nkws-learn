// 听力理解 — P1 listening comprehension, anchored to the MOE 生字表 lesson by
// lesson. Each item's passage features that lesson's 生字 (with earlier,
// already-taught words and everyday heard-vocabulary so it stays natural), and
// the correct answer is always a syllabus word. Human-authored, fixed content,
// no live AI. Organised like 句子听写: COMPREHENSION[syllabusId][lessonTag].
export const COMPREHENSION = {
  "hw-p1": {
    L1: [
      { passage: "我家有五口人：爸爸、妈妈、哥哥、姐姐和我。", q: "我家有几口人？", choices: ["三口", "五口", "四口"], answer: 1 },
      { passage: "他是一个好人，大家都喜欢他。", q: "大家喜欢他吗？", choices: ["喜欢", "不喜欢"], answer: 0 },
    ],
    L2: [
      { passage: "妹妹是女生，弟弟是男生。", q: "妹妹是男生还是女生？", choices: ["男生", "女生"], answer: 1 },
      { passage: "她不爱吃糖，也不爱吃饼干。", q: "她爱吃糖吗？", choices: ["很爱", "不爱"], answer: 1 },
    ],
    L3: [
      { passage: "我有七个气球，送给弟弟一个。", q: "我本来有几个气球？", choices: ["七个", "五个", "八个"], answer: 0 },
      { passage: "下课了，我要去公园玩。", q: "我要去哪里？", choices: ["学校", "公园", "家里"], answer: 1 },
    ],
    L4: [
      { passage: "我每天坐巴士上学。", q: "我怎么去上学？", choices: ["走路", "坐巴士", "坐船"], answer: 1 },
      { passage: "弟弟养了四只小狗。", q: "弟弟有几只小狗？", choices: ["四只", "三只", "十只"], answer: 0 },
    ],
    L5: [
      { passage: "早上，我们一起去爬山。", q: "我们早上做什么？", choices: ["看书", "爬山", "画画"], answer: 1 },
      { passage: "草地上有三只小羊在吃草。", q: "草地上有几只羊？", choices: ["两只", "三只", "五只"], answer: 1 },
    ],
    L6: [
      { passage: "太阳下山了，天慢慢黑了。", q: "太阳怎么了？", choices: ["升起来了", "下山了"], answer: 1 },
      { passage: "妈妈在家里做饭，爸爸在公司上班。", q: "妈妈在哪里？", choices: ["家里", "公司", "学校"], answer: 0 },
    ],
    L7: [
      { passage: "晚上，天上有很多星星。", q: "天上的星星多吗？", choices: ["很多", "很少"], answer: 0 },
      { passage: "我们每个人有两只手。", q: "我们有几只手？", choices: ["一只", "两只", "三只"], answer: 1 },
    ],
    L8: [
      { passage: "爸爸每天早上去工作。", q: "爸爸每天去做什么？", choices: ["工作", "玩球", "睡觉"], answer: 0 },
      { passage: "我今天头有点痛，想休息。", q: "我哪里不舒服？", choices: ["手", "头", "脚"], answer: 1 },
    ],
  },
};

export function comprehensionLessons(syllabusId) {
  const g = COMPREHENSION[syllabusId];
  if (!g) return [];
  return Object.keys(g).map((tag) => ({ tag, count: g[tag].length }));
}

export function comprehensionItems(syllabusId, tag) {
  return COMPREHENSION[syllabusId]?.[tag] || [];
}
