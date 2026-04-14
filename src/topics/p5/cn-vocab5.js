import { shuffle } from "../../utils/helpers";

function buildP5cVc1() {
  return shuffle([
    { q: "\"坚持\"的意思是？", a: "不放弃，继续做下去", choices: ["不放弃，继续做下去", "很快放弃", "犹豫不决"] },
    { q: "\"感激\"的近义词是？", a: "感谢", choices: ["感谢", "生气", "害怕"] },
    { q: "\"自私\"的反义词是？", a: "大方", choices: ["大方", "小气", "害羞"] },
    { q: "\"勇敢\"的意思是？", a: "不害怕，敢于面对困难", choices: ["不害怕，敢于面对困难", "非常害怕", "非常聪明"] },
    { q: "选择正确的量词：一___大象", a: "头", choices: ["头", "只", "条"] },
    { q: "选择正确的量词：一___裤子", a: "条", choices: ["条", "件", "只"] },
    { q: "\"后悔\"的意思是？", a: "对做过的事感到不对", choices: ["对做过的事感到不对", "非常高兴", "非常期待"] },
    { q: "\"粗心\"的反义词是？", a: "细心", choices: ["细心", "大意", "快速"] },
    { q: "选择正确的量词：一___衣服", a: "件", choices: ["件", "条", "只"] },
    { q: "\"惭愧\"的意思是？", a: "因为做错事而不好意思", choices: ["因为做错事而不好意思", "非常骄傲", "非常生气"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP5cGr1() {
  return shuffle([
    { q: "他把书包___在桌子上了。", a: "放", choices: ["放", "被", "给"] },
    { q: "书被弟弟___坏了。", a: "弄", choices: ["弄", "把", "给"] },
    { q: "___他很小，___他已经能照顾自己了。", a: "虽然...但是", choices: ["虽然...但是", "因为...所以", "如果...就"] },
    { q: "妈妈___做饭___听音乐。", a: "一边...一边", choices: ["一边...一边", "先...再", "不但...而且"] },
    { q: "他___学习好，___体育也好。", a: "不但...而且", choices: ["不但...而且", "虽然...但是", "因为...所以"] },
    { q: "___你不认真，___会考不好。", a: "如果...就", choices: ["如果...就", "虽然...但是", "不但...而且"] },
    { q: "他跑得比我___。", a: "快", choices: ["快", "快地", "快的"] },
    { q: "这道题他做___对了。", a: "得", choices: ["得", "的", "地"] },
    { q: "小明___是我的好朋友。", a: "是", choices: ["是", "被", "把"] },
    { q: "花是___妈妈种的。", a: "被", choices: ["被", "把", "给"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p5c-vc1": buildP5cVc1, "p5c-gr1": buildP5cGr1 };
export const P5_CN_VOCAB5_QUESTION_COUNTS = { "p5c-vc1": 10, "p5c-gr1": 10 };
export function buildCnVocab5Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
