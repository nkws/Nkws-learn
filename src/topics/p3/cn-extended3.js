import { shuffle } from "../../utils/helpers";
// ⚠️ CHINESE CONTENT — flagged for manual validation

function buildP3cId1() {
  return shuffle([
    { q: "'一心一意'是什么意思？", a: "专心做一件事", choices: ["专心做一件事", "有很多想法", "三心二意"] },
    { q: "'自言自语'是什么意思？", a: "自己跟自己说话", choices: ["自己跟自己说话", "大声说话", "和朋友聊天"] },
    { q: "'五颜六色'是什么意思？", a: "颜色很多，很好看", choices: ["颜色很多，很好看", "只有五种颜色", "黑白色"] },
    { q: "'东张西望'是什么意思？", a: "到处看，不专心", choices: ["到处看，不专心", "往东走", "看风景"] },
    { q: "'七上八下'是什么意思？", a: "心里不安，很紧张", choices: ["心里不安，很紧张", "上上下下跑", "很开心"] },
    { q: "'兴高采烈'是什么意思？", a: "非常高兴", choices: ["非常高兴", "非常生气", "很紧张"] },
    { q: "'目不转睛'是什么意思？", a: "眼睛盯着看，不转开", choices: ["眼睛盯着看，不转开", "闭着眼睛", "看不清楚"] },
    { q: "'争先恐后'是什么意思？", a: "抢着做，怕落后", choices: ["抢着做，怕落后", "害怕得不敢做", "慢慢来"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP3cBj1() {
  return shuffle([
    { q: "哪个句子是正确的？", a: "一只小猫在睡觉。", choices: ["一只小猫在睡觉。", "一条小猫在睡觉。", "一个小猫在睡觉。"] },
    { q: "哪个句子是正确的？", a: "因为天气好，所以我们去公园。", choices: ["因为天气好，所以我们去公园。", "因为天气好，但是我们去公园。", "虽然天气好，所以我们去公园。"] },
    { q: "哪个句子是正确的？", a: "美丽的花朵开了。", choices: ["美丽的花朵开了。", "美丽地花朵开了。", "美丽得花朵开了。"] },
    { q: "哪个句子是正确的？", a: "他开心地笑了。", choices: ["他开心地笑了。", "他开心的笑了。", "他开心得笑了。"] },
    { q: "哪个句子是正确的？", a: "一朵花开了。", choices: ["一朵花开了。", "一只花开了。", "一条花开了。"] },
    { q: "哪个句子是正确的？", a: "虽然他很小，但是他很勇敢。", choices: ["虽然他很小，但是他很勇敢。", "虽然他很小，所以他很勇敢。", "因为他很小，但是他很勇敢。"] },
    { q: "哪个句子是正确的？", a: "一条河在村子旁边。", choices: ["一条河在村子旁边。", "一个河在村子旁边。", "一只河在村子旁边。"] },
    { q: "哪个句子是正确的？", a: "他跑得很快。", choices: ["他跑得很快。", "他跑的很快。", "他跑地很快。"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p3c-id1": buildP3cId1, "p3c-bj1": buildP3cBj1 };
export const P3_CN_EXTENDED_QUESTION_COUNTS = { "p3c-id1": 8, "p3c-bj1": 8 };
export function buildCnExtended3Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
