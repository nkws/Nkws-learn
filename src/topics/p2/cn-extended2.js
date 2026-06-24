import { shuffle } from "../../utils/helpers";
// ⚠️ CHINESE CONTENT — flagged for manual validation

function buildP2cId1() {
  // ⚠️ Simple expressions/idioms for P2 level
  return shuffle([
    { q: "'开开心心'是什么意思？", a: "非常开心", choices: ["非常开心", "有一点开心", "不开心"], explain: "'开开心心'kāi kāi xīn xīn 把'开心'两个字叠起来，意思更强，表示心里非常开心、很快乐。" },
    { q: "'高高兴兴'是什么意思？", a: "很高兴", choices: ["很高兴", "很生气", "很难过"], explain: "'高高兴兴'gāo gāo xìng xìng 是'高兴'的叠词，意思是心情很好、很高兴。" },
    { q: "'干干净净'是什么意思？", a: "非常干净", choices: ["非常干净", "有一点脏", "很乱"], explain: "'干干净净'gān gān jìng jìng 是'干净'的叠词，表示一点脏东西都没有，非常干净。" },
    { q: "'认认真真'是什么意思？", a: "非常认真", choices: ["非常认真", "马马虎虎", "不认真"], explain: "'认认真真'rèn rèn zhēn zhēn 是'认真'的叠词，意思是做事很专心、非常认真。" },
    { q: "'平平安安'是什么意思？", a: "平安没有危险", choices: ["平安没有危险", "很害怕", "很紧张"], explain: "'平平安安'píng píng ān ān 表示平平稳稳、没有危险，常用来祝别人安全。" },
    { q: "'马马虎虎'是什么意思？", a: "不认真，随便", choices: ["不认真，随便", "非常认真", "像马一样快"], explain: "'马马虎虎'mǎ mǎ hū hū 是说做事不认真、很随便，不是真的指马和虎。" },
    { q: "'安安静静'是什么意思？", a: "很安静", choices: ["很安静", "很吵", "很快"], explain: "'安安静静'ān ān jìng jìng 是'安静'的叠词，表示一点声音都没有，很安静。" },
    { q: "'开开心心'的反义词是？", a: "伤心", choices: ["伤心", "高兴", "快乐"], explain: "反义词是意思相反的词。'开开心心'是快乐，相反就是难过，所以反义词是'伤心'shāng xīn。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildP2cBj1() {
  return shuffle([
    { q: "哪个句子是正确的？", a: "一只小鸟在唱歌。", choices: ["一只小鸟在唱歌。", "一条小鸟在唱歌。", "一个小鸟在唱歌。"], explain: "数鸟、猫、狗这类小动物用量词'只'zhī，所以是'一只小鸟'，不能说一条或一个。" },
    { q: "哪个句子是正确的？", a: "他的书包很重。", choices: ["他的书包很重。", "他得书包很重。", "他地书包很重。"], explain: "表示'谁的东西'要用'的'，所以是'他的书包'。'得'和'地'用法不一样，这里不能用。" },
    { q: "哪个句子是正确的？", a: "妈妈开心地笑了。", choices: ["妈妈开心地笑了。", "妈妈开心的笑了。", "妈妈开心得笑了。"], explain: "形容怎么做一件事，动作前面用'地'，所以是'开心地笑'。妈妈 mā ma 笑的样子是开心的。" },
    { q: "哪个句子是正确的？", a: "一条鱼在水里游。", choices: ["一条鱼在水里游。", "一只鱼在水里游。", "一个鱼在水里游。"], explain: "长长的东西像鱼、蛇、河，量词用'条'tiáo，所以是'一条鱼'。" },
    { q: "哪个句子是正确的？", a: "因为下雨了，所以我们不出去。", choices: ["因为下雨了，所以我们不出去。", "因为下雨了，但是我们不出去。", "虽然下雨了，所以我们不出去。"], explain: "'因为'yīn wèi 和'所以'是一对，前面说原因、后面说结果，所以要一起用。" },
    { q: "哪个句子是正确的？", a: "一本故事书在桌子上。", choices: ["一本故事书在桌子上。", "一只故事书在桌子上。", "一条故事书在桌子上。"], explain: "数书本用量词'本'běn，所以是'一本故事书'，不能说一只或一条。" },
    { q: "哪个句子是正确的？", a: "漂亮的花朵开了。", choices: ["漂亮的花朵开了。", "漂亮地花朵开了。", "漂亮得花朵开了。"], explain: "形容后面的东西（花朵）要用'的'，所以是'漂亮的花朵'。" },
    { q: "哪个句子是正确的？", a: "小明快乐地跑了。", choices: ["小明快乐地跑了。", "小明快乐的跑了。", "小明快乐得跑了。"], explain: "形容怎么做动作（跑），前面用'地'，所以是'快乐地跑'。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p2c-id1": buildP2cId1, "p2c-bj1": buildP2cBj1 };
export const P2_CN_EXTENDED_QUESTION_COUNTS = { "p2c-id1": 8, "p2c-bj1": 8 };
export function buildCnExtended2Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
