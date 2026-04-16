import { shuffle } from "../../utils/helpers";
// ⚠️ CHINESE CONTENT — flagged for manual validation of characters and grammar

export const P6_CN_READING_INTRO = {
  "p6c-rd1": {
    title: "阅读理解",
    pages: [
      { text: "阅读理解考的是你是否读懂了短文的内容。先读短文，再回答问题！", emoji: "📖 → ❓" },
      { text: "有些答案在短文中可以直接找到，有些需要你自己推理和思考。", emoji: "🔍 🧠" },
    ],
  },
};

function buildP6cRd1() {
  // ⚠️ Flagged for Chinese accuracy review
  const passage1 = "短文：小华每天早上六点半起床。他先刷牙洗脸，然后吃早餐。七点钟，他背着书包走路去学校。他的学校离家不远，只要走十分钟就到了。小华最喜欢的科目是数学，因为他觉得解题很有趣。";
  const passage2 = "短文：上个星期天，小美和妈妈一起去超市买东西。她们买了蔬菜、水果和牛奶。在回家的路上，小美看到一位老奶奶提着很重的袋子。小美马上跑过去帮老奶奶提袋子。老奶奶笑着说：'谢谢你，你真是个好孩子！'";
  const p1Qs = shuffle([
    { q: "小华每天几点起床？", p: passage1, a: "六点半", choices: ["六点半", "七点", "六点"] },
    { q: "小华怎么去学校？", p: passage1, a: "走路", choices: ["走路", "坐车", "骑车"] },
    { q: "小华最喜欢什么科目？", p: passage1, a: "数学", choices: ["数学", "华文", "英文"] },
    { q: "小华为什么喜欢数学？", p: passage1, a: "他觉得解题很有趣", choices: ["他觉得解题很有趣", "数学老师很好", "数学考试很容易"] },
    { q: "从家到学校要多久？", p: passage1, a: "十分钟", choices: ["十分钟", "三十分钟", "一个小时"] },
  ]);
  const p2Qs = shuffle([
    { q: "小美和谁去超市？", p: passage2, a: "妈妈", choices: ["妈妈", "爸爸", "朋友"] },
    { q: "她们买了什么？", p: passage2, a: "蔬菜、水果和牛奶", choices: ["蔬菜、水果和牛奶", "面包和鸡蛋", "糖果和饼干"] },
    { q: "小美在路上看到了谁？", p: passage2, a: "一位老奶奶", choices: ["一位老奶奶", "一位老师", "一位同学"] },
    { q: "小美做了什么好事？", p: passage2, a: "帮老奶奶提袋子", choices: ["帮老奶奶提袋子", "帮老奶奶过马路", "给老奶奶买东西"] },
    { q: "这个故事告诉我们什么？", p: passage2, a: "要乐于助人", choices: ["要乐于助人", "要多去超市", "不要和陌生人说话"] },
  ]);
  const groups = Math.random() < 0.5 ? [p1Qs, p2Qs] : [p2Qs, p1Qs];
  return [...groups[0], ...groups[1]].map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), passage: item.p }));
}

const BUILDERS = { "p6c-rd1": buildP6cRd1 };
export const P6_CN_READING_QUESTION_COUNTS = { "p6c-rd1": 10 };
export function buildCnReading6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
