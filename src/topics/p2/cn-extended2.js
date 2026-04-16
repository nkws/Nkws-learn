import { shuffle } from "../../utils/helpers";
// ⚠️ CHINESE CONTENT — flagged for manual validation

function buildP2cId1() {
  // ⚠️ Simple expressions/idioms for P2 level
  return shuffle([
    { q: "'开开心心'是什么意思？", a: "非常开心", choices: ["非常开心", "有一点开心", "不开心"] },
    { q: "'高高兴兴'是什么意思？", a: "很高兴", choices: ["很高兴", "很生气", "很难过"] },
    { q: "'干干净净'是什么意思？", a: "非常干净", choices: ["非常干净", "有一点脏", "很乱"] },
    { q: "'认认真真'是什么意思？", a: "非常认真", choices: ["非常认真", "马马虎虎", "不认真"] },
    { q: "'平平安安'是什么意思？", a: "平安没有危险", choices: ["平安没有危险", "很害怕", "很紧张"] },
    { q: "'马马虎虎'是什么意思？", a: "不认真，随便", choices: ["不认真，随便", "非常认真", "像马一样快"] },
    { q: "'安安静静'是什么意思？", a: "很安静", choices: ["很安静", "很吵", "很快"] },
    { q: "'开开心心'的反义词是？", a: "伤伤心心", choices: ["伤伤心心", "高高兴兴", "快快乐乐"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP2cBj1() {
  return shuffle([
    { q: "哪个句子是正确的？", a: "一只小鸟在唱歌。", choices: ["一只小鸟在唱歌。", "一条小鸟在唱歌。", "一个小鸟在唱歌。"] },
    { q: "哪个句子是正确的？", a: "他的书包很重。", choices: ["他的书包很重。", "他得书包很重。", "他地书包很重。"] },
    { q: "哪个句子是正确的？", a: "妈妈开心地笑了。", choices: ["妈妈开心地笑了。", "妈妈开心的笑了。", "妈妈开心得笑了。"] },
    { q: "哪个句子是正确的？", a: "一条鱼在水里游。", choices: ["一条鱼在水里游。", "一只鱼在水里游。", "一个鱼在水里游。"] },
    { q: "哪个句子是正确的？", a: "因为下雨了，所以我们不出去。", choices: ["因为下雨了，所以我们不出去。", "因为下雨了，但是我们不出去。", "虽然下雨了，所以我们不出去。"] },
    { q: "哪个句子是正确的？", a: "一本故事书在桌子上。", choices: ["一本故事书在桌子上。", "一只故事书在桌子上。", "一条故事书在桌子上。"] },
    { q: "哪个句子是正确的？", a: "漂亮的花朵开了。", choices: ["漂亮的花朵开了。", "漂亮地花朵开了。", "漂亮得花朵开了。"] },
    { q: "哪个句子是正确的？", a: "小明快乐地跑了。", choices: ["小明快乐地跑了。", "小明快乐的跑了。", "小明快乐得跑了。"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p2c-id1": buildP2cId1, "p2c-bj1": buildP2cBj1 };
export const P2_CN_EXTENDED_QUESTION_COUNTS = { "p2c-id1": 8, "p2c-bj1": 8 };
export function buildCnExtended2Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
