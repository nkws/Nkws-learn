import { shuffle } from "../utils/helpers";
function buildCnv1() {
  return shuffle([
    { q: "见到朋友要说什么？", a: "你好", choices: ["你好", "再见", "谢谢"] },
    { q: "别人帮助你要说什么？", a: "谢谢", choices: ["你好", "谢谢", "对不起"] },
    { q: "要离开了说什么？", a: "再见", choices: ["再见", "你好", "谢谢"] },
    { q: "做错事了要说什么？", a: "对不起", choices: ["谢谢", "再见", "对不起"] },
    { q: "别人说对不起，你说什么？", a: "没关系", choices: ["没关系", "谢谢", "再见"] },
    { q: "早上见到老师说什么？", a: "早上好", choices: ["早上好", "晚上好", "再见"] },
    { q: "晚上见到爸妈说什么？", a: "晚上好", choices: ["早上好", "晚上好", "你好"] },
    { q: "请别人帮忙先说什么？", a: "请", choices: ["请", "谢谢", "对不起"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCnv2() {
  return shuffle([
    { q: "我们每天吃的白色的食物是什么？", a: "饭", choices: ["饭", "面", "面包"] },
    { q: "长长的可以用筷子夹的食物是什么？", a: "面", choices: ["饭", "面", "鸡蛋"] },
    { q: "口渴了要喝什么？", a: "水", choices: ["水", "饭", "面包"] },
    { q: "牛给我们的白色饮料是什么？", a: "牛奶", choices: ["水", "牛奶", "果汁"] },
    { q: "鸡下的是什么？", a: "鸡蛋", choices: ["鸡蛋", "牛奶", "面包"] },
    { q: "早餐可以吃的，软软的是什么？", a: "面包", choices: ["饭", "面", "面包"] },
    { q: "红色的，圆圆的水果是什么？", a: "苹果", choices: ["苹果", "香蕉", "面包"] },
    { q: "黄色的，弯弯的水果是什么？", a: "香蕉", choices: ["苹果", "香蕉", "鸡蛋"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCnv3() {
  return shuffle([
    { q: "在学校教我们知识的人是谁？", a: "老师", choices: ["老师", "学生", "爸爸"] },
    { q: "在学校学习的人叫什么？", a: "学生", choices: ["老师", "学生", "朋友"] },
    { q: "我们读的东西叫什么？", a: "书", choices: ["书", "笔", "桌子"] },
    { q: "我们用来写字的是什么？", a: "笔", choices: ["书", "笔", "椅子"] },
    { q: "我们把书放在哪里？", a: "桌子", choices: ["桌子", "椅子", "书"] },
    { q: "我们坐的东西叫什么？", a: "椅子", choices: ["桌子", "椅子", "笔"] },
    { q: "我们每天去学习的地方叫什么？", a: "学校", choices: ["学校", "公园", "家"] },
    { q: "上课的房间叫什么？", a: "教室", choices: ["教室", "学校", "家"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildCnv4() {
  return shuffle([
    { q: "苹果是什么颜色？", a: "红色", choices: ["红色", "蓝色", "绿色"] },
    { q: "天空是什么颜色？", a: "蓝色", choices: ["红色", "蓝色", "黄色"] },
    { q: "树叶是什么颜色？", a: "绿色", choices: ["绿色", "红色", "白色"] },
    { q: "香蕉是什么颜色？", a: "黄色", choices: ["黄色", "蓝色", "黑色"] },
    { q: "云是什么颜色？", a: "白色", choices: ["白色", "黑色", "红色"] },
    { q: "夜晚的天空是什么颜色？", a: "黑色", choices: ["白色", "蓝色", "黑色"] },
    { q: "小女孩喜欢的颜色，像花一样？", a: "粉色", choices: ["粉色", "黑色", "绿色"] },
    { q: "橙子是什么颜色？", a: "橙色", choices: ["红色", "黄色", "橙色"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "cnv-1": buildCnv1, "cnv-2": buildCnv2, "cnv-3": buildCnv3, "cnv-4": buildCnv4 };
export const CNVOCAB_QUESTION_COUNTS = { "cnv-1": 8, "cnv-2": 8, "cnv-3": 8, "cnv-4": 8 };
export function buildCnVocabQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
