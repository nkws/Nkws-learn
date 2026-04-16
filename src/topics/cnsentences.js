import { shuffle } from "../utils/helpers";
function buildCns1() {
  return shuffle([
    { q: "他是一个_____。（一个小男生）", a: "男孩", choices: ["男孩", "女孩", "老师"] },
    { q: "我是_____。（你在学校是什么？）", a: "学生", choices: ["学生", "老师", "爸爸"] },
    { q: "她是我的_____。（生你的女人）", a: "妈妈", choices: ["妈妈", "姐姐", "老师"] },
    { q: "他是我的_____。（生你的男人）", a: "爸爸", choices: ["爸爸", "哥哥", "弟弟"] },
    { q: "我是一个好_____。", a: "孩子", choices: ["孩子", "老师", "桌子"] },
    { q: "我今年_____岁。（小学一年级）", a: "七", choices: ["五", "七", "十"] },
    { q: "我是新加坡的_____。", a: "小学生", choices: ["小学生", "老师", "大人"] },
    { q: "我是新加坡的_____。", a: "小朋友", choices: ["小朋友", "老师", "大人"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCns2() {
  return shuffle([
    { q: "这是什么？（看书的东西）", a: "这是书", choices: ["这是书", "这是笔", "这是桌子"] },
    { q: "那是什么？（写字的东西）", a: "那是笔", choices: ["那是书", "那是笔", "那是椅子"] },
    { q: "这是什么？（坐的东西）", a: "这是椅子", choices: ["这是桌子", "这是书", "这是椅子"] },
    { q: "这是什么？（红红的水果）", a: "这是苹果", choices: ["这是苹果", "这是香蕉", "这是鸡蛋"] },
    { q: "那是什么？（会喵喵叫的）", a: "那是猫", choices: ["那是狗", "那是猫", "那是鸟"] },
    { q: "这是什么？（会汪汪叫的）", a: "这是狗", choices: ["这是猫", "这是狗", "这是鱼"] },
    { q: "这是什么？（我们喝的）", a: "这是水", choices: ["这是水", "这是饭", "这是书"] },
    { q: "那是什么？（学习的地方）", a: "那是学校", choices: ["那是公园", "那是家", "那是学校"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCns3() {
  return shuffle([
    { q: "我喜欢什么动物？（喵喵叫的）", a: "我喜欢猫", choices: ["我喜欢猫", "我喜欢狗", "我喜欢鱼"] },
    { q: "我喜欢吃什么？（白色的主食）", a: "我喜欢吃饭", choices: ["我喜欢吃饭", "我喜欢吃面", "我喜欢喝水"] },
    { q: "我喜欢什么颜色？（天空的颜色）", a: "我喜欢蓝色", choices: ["我喜欢红色", "我喜欢蓝色", "我喜欢绿色"] },
    { q: "我喜欢做什么？（在操场上）", a: "我喜欢跑步", choices: ["我喜欢跑步", "我喜欢睡觉", "我喜欢吃饭"] },
    { q: "我喜欢看什么？（有画面的）", a: "我喜欢看书", choices: ["我喜欢看书", "我喜欢喝水", "我喜欢吃饭"] },
    { q: "我喜欢吃什么水果？（黄色弯弯的）", a: "我喜欢吃香蕉", choices: ["我喜欢吃苹果", "我喜欢吃香蕉", "我喜欢吃面包"] },
    { q: "我喜欢和谁玩？（一起上学的人）", a: "我喜欢和朋友玩", choices: ["我喜欢和老师玩", "我喜欢和朋友玩", "我喜欢和猫玩"] },
    { q: "我喜欢去哪里？（有滑梯的地方）", a: "我喜欢去公园", choices: ["我喜欢去学校", "我喜欢去公园", "我喜欢去家"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCns4() {
  return shuffle([
    { q: "你好吗？（回答：我很好）", a: "我很好", choices: ["我很好", "我不好", "再见"] },
    { q: "你叫什么名字？（选正确的回答）", a: "我叫小明", choices: ["我叫小明", "我七岁", "我是学生"] },
    { q: "你几岁了？", a: "我七岁", choices: ["我叫小明", "我七岁", "我很好"] },
    { q: "你喜欢什么？（选一个动物）", a: "我喜欢猫", choices: ["我喜欢猫", "我是学生", "我七岁"] },
    { q: "这是什么？（红红圆圆的水果）", a: "这是苹果", choices: ["这是苹果", "这是书", "这是猫"] },
    { q: "谁是你的老师？", a: "她是我的老师", choices: ["她是我的老师", "她是我的妈妈", "她是我的姐姐"] },
    { q: "你要去哪里？（学习的地方）", a: "我要去学校", choices: ["我要去学校", "我要去公园", "我要回家"] },
    { q: "今天天气怎么样？（有太阳）", a: "今天天气很好", choices: ["今天天气很好", "今天下雨", "今天很冷"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "cns-1": buildCns1, "cns-2": buildCns2, "cns-3": buildCns3, "cns-4": buildCns4 };
export const CNSENTENCES_QUESTION_COUNTS = { "cns-1": 8, "cns-2": 8, "cns-3": 8, "cns-4": 8 };
export function buildCnSentencesQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
