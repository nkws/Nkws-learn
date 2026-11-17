// Hand-authored P1 listening-comprehension packs, human-reviewed, saved as
// fixed content (no live AI). Vocabulary is grounded in the MOE P1 生字表
// (see writingSyllabi.js): passages stay at P1 listening level and the ANSWERS
// are syllabus words wherever possible, so the fill-in-the-blank mode (write +
// self-check) reinforces exactly the characters the child is learning to write.
//
// Each item: { passage, q, choices, answer } where answer is the index of the
// correct choice. choices[answer] is also what the child writes in 填空 mode.
export const LISTENING_PACKS = [
  {
    id: "lcp-hw-p1",
    stream: "华文",
    streamEn: "Chinese",
    level: "P1",
    levelNum: 1,
    label: "小一 华文 听力",
    items: [
      { passage: "今天天气很好，我和爸爸去公园玩。", q: "我和谁去公园？", choices: ["爸爸", "妈妈", "老师"], answer: 0 },
      { passage: "姐姐买了三个苹果，弟弟吃了一个。", q: "姐姐买了几个苹果？", choices: ["三个", "两个", "四个"], answer: 0 },
      { passage: "小明有一只小猫，小猫很喜欢喝水。", q: "小猫喜欢喝什么？", choices: ["水", "牛奶", "果汁"], answer: 0 },
      { passage: "下雨了，妈妈叫我带雨伞去上学。", q: "妈妈叫我带什么？", choices: ["雨伞", "书包", "帽子"], answer: 0 },
      { passage: "哥哥在看书，我在画画。", q: "我在做什么？", choices: ["画画", "看书", "玩水"], answer: 0 },
      { passage: "爸爸开车，我们一起去公公家。", q: "爸爸做什么？", choices: ["开车", "走路", "坐巴士"], answer: 0 },
      { passage: "老师说，上课要用心听。", q: "上课要怎么样？", choices: ["用心听", "大声叫", "快快跑"], answer: 0 },
      { passage: "妈妈的生日到了，我给她一张画。", q: "我给妈妈什么？", choices: ["一张画", "一本书", "一个果"], answer: 0 },
    ],
  },
  {
    id: "lcp-hcl-p1",
    stream: "高级华文",
    streamEn: "Higher Chinese",
    level: "P1",
    levelNum: 1,
    label: "小一 高级华文 听力",
    items: [
      { passage: "今天是教师节，我们给老师送花。", q: "今天是什么节日？", choices: ["教师节", "生日", "新年"], answer: 0 },
      { passage: "弟弟最喜欢红色，他有一个红色的球。", q: "弟弟喜欢什么颜色？", choices: ["红色", "青色", "白色"], answer: 0 },
      { passage: "小鱼在水里游来游去。", q: "小鱼在哪里？", choices: ["水里", "天上", "山里"], answer: 0 },
      { passage: "姐姐每天早上跑步，身体很好。", q: "姐姐每天早上做什么？", choices: ["跑步", "画画", "看书"], answer: 0 },
      { passage: "我和好朋友一起走路去学校。", q: "我和谁一起去学校？", choices: ["好朋友", "爸爸", "老师"], answer: 0 },
      { passage: "妈妈买了一条鱼和一些青菜。", q: "妈妈买了什么？", choices: ["鱼和青菜", "肉和米", "果汁"], answer: 0 },
      { passage: "天上的鸟儿飞得很高。", q: "鸟儿怎么样？", choices: ["飞得很高", "走得很快", "跑得很慢"], answer: 0 },
      { passage: "下课了，同学们在草地上玩球。", q: "同学们在哪里玩球？", choices: ["草地上", "教室里", "家里"], answer: 0 },
    ],
  },
];

export function listeningPackById(id) {
  return LISTENING_PACKS.find((p) => p.id === id) || null;
}
