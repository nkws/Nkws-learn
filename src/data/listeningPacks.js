// 听力理解 — P1 listening comprehension, anchored to the MOE 生字表 lesson by
// lesson. The passage features that lesson's 生字 (plus earlier and everyday
// heard-vocabulary so it stays natural), but the QUESTION needs inference — the
// answer is NOT stated in the passage; the child works it out and writes it.
// `answer` is the expected written answer, revealed for self-check. No MCQ.
// Human-authored, fixed content, no live AI. COMPREHENSION[syllabusId][lessonTag].
export const COMPREHENSION = {
  "hw-p1": {
    L1: [
      { passage: "我家有五口人，可是今天只有我一个人在家。", q: "其他人在家吗？", answer: "不在" },
      { passage: "他从来不欺负别人，大家都愿意和他做朋友。", q: "他是个怎样的人？", answer: "好人" },
    ],
    L2: [
      { passage: "弟弟一口饭也不想吃，一直说肚子不舒服。", q: "弟弟今天怎么了？", answer: "生病了" },
      { passage: "这件衣服有裙子，是粉红色的。", q: "这件衣服是男生还是女生穿的？", answer: "女生" },
    ],
    L3: [
      { passage: "下课了，小明拿着足球往操场跑。", q: "小明要去做什么？", answer: "踢球" },
      { passage: "星期六不用上课，我可以睡到很晚。", q: "星期六要去学校吗？", answer: "不用去" },
    ],
    L4: [
      { passage: "小红每天很早起床，坐第一班巴士。", q: "小红上学会迟到吗？", answer: "不会" },
      { passage: "停车场里停了好几辆车，就是没看到爸爸的。", q: "爸爸的车在停车场吗？", answer: "不在" },
    ],
    L5: [
      { passage: "太阳很大，羊儿都躲到大树下乘凉。", q: "今天天气热不热？", answer: "很热" },
      { passage: "早上公鸡一叫，我就起床了。", q: "这是什么时候的事？", answer: "早上" },
    ],
    L6: [
      { passage: "太阳下山了，小鸟都飞回家休息。", q: "现在大概是什么时候？", answer: "傍晚" },
      { passage: "这个大箱子，我一个人怎么也搬不动。", q: "箱子是轻还是重？", answer: "很重" },
    ],
    L7: [
      { passage: "妹妹袋子里的糖只剩一颗了。", q: "妹妹的糖是多还是少？", answer: "很少" },
      { passage: "这条路走了很久很久，还看不到尽头。", q: "这条路长不长？", answer: "很长" },
    ],
    L8: [
      { passage: "小明揉着眼睛，一直打哈欠。", q: "小明现在想做什么？", answer: "睡觉" },
      { passage: "他捂着头说好痛，脸也红红的。", q: "他现在舒不舒服？", answer: "不舒服" },
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
