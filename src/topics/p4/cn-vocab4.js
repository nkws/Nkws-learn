import { shuffle } from "../../utils/helpers";

function buildP4cVc1() {
  return shuffle([
    { q: "\"勤劳\"的意思是？", a: "努力工作", choices: ["努力工作", "很懒", "很聪明"] },
    { q: "\"骄傲\"的反义词是？", a: "谦虚", choices: ["谦虚", "自信", "勇敢"] },
    { q: "\"犹豫\"的意思是？", a: "拿不定主意", choices: ["拿不定主意", "很高兴", "非常生气"] },
    { q: "选择正确的量词：一___书", a: "本", choices: ["本", "只", "条"] },
    { q: "选择正确的量词：一___鱼", a: "条", choices: ["条", "本", "朵"] },
    { q: "选择正确的量词：一___花", a: "朵", choices: ["朵", "条", "只"] },
    { q: "\"诚实\"的意思是？", a: "说真话，不骗人", choices: ["说真话，不骗人", "很害怕", "很高兴"] },
    { q: "\"团结\"的意思是？", a: "大家一起合作", choices: ["大家一起合作", "一个人做事", "互相争吵"] },
    { q: "选择正确的量词：一___小狗", a: "只", choices: ["只", "条", "本"] },
    { q: "\"节约\"的反义词是？", a: "浪费", choices: ["浪费", "节省", "认真"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP4cGr1() {
  return shuffle([
    { q: "因为下雨了，___我们不去公园了。", a: "所以", choices: ["所以", "但是", "如果"] },
    { q: "___他很累，___他还是坚持做完作业。", a: "虽然...但是", choices: ["虽然...但是", "因为...所以", "如果...就"] },
    { q: "___你认真学习，___能考好成绩。", a: "如果...就", choices: ["如果...就", "虽然...但是", "不但...而且"] },
    { q: "他___聪明，___勤劳。", a: "不但...而且", choices: ["不但...而且", "虽然...但是", "因为...所以"] },
    { q: "选择正确的(的/地/得)：他高兴___跳了起来。", a: "地", choices: ["地", "的", "得"] },
    { q: "选择正确的(的/地/得)：美丽___花朵开了。", a: "的", choices: ["的", "地", "得"] },
    { q: "选择正确的(的/地/得)：他跑___很快。", a: "得", choices: ["得", "的", "地"] },
    { q: "___天气很冷，小明还是去上学了。", a: "虽然", choices: ["虽然", "因为", "如果"] },
    { q: "他一看到妈妈，___高兴地笑了。", a: "就", choices: ["就", "才", "还"] },
    { q: "我___做完功课，___可以出去玩。", a: "先...再", choices: ["先...再", "一边...一边", "虽然...但是"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p4c-vc1": buildP4cVc1, "p4c-gr1": buildP4cGr1 };
export const P4_CN_VOCAB4_QUESTION_COUNTS = { "p4c-vc1": 10, "p4c-gr1": 10 };
export function buildCnVocab4Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
