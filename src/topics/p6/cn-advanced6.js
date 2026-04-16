import { shuffle } from "../../utils/helpers";
// ⚠️ CHINESE CONTENT — flagged for manual validation of characters, grammar, and idiom definitions

function buildP6cBj1() {
  // ⚠️ 病句 (sentence correction) — flagged for accuracy review
  return shuffle([
    { q: "哪个句子是正确的？", a: "这是妈妈做的饭。", choices: ["这是妈妈做的饭。", "这是妈妈做得饭。", "这是妈妈做地饭。"] },
    { q: "哪个句子是正确的？", a: "妈妈做的菜很好吃。", choices: ["妈妈做的菜很好吃。", "妈妈做得菜很好吃。", "妈妈做地菜很好吃。"] },
    { q: "哪个句子是正确的？", a: "他跑得很快。", choices: ["他跑得很快。", "他跑的很快。", "他跑地很快。"] },
    { q: "哪个句子有错误？", a: "他的成绩一直在进步着。", choices: ["他的成绩一直在进步着。", "他的成绩一直在进步。", "这两句都正确。"] },
    { q: "哪个句子是正确的？", a: "虽然下雨了，但是我们还是去公园了。", choices: ["虽然下雨了，但是我们还是去公园了。", "虽然下雨了，所以我们还是去公园了。", "因为下雨了，但是我们还是去公园了。"] },
    { q: "哪个句子是正确的？", a: "一条小河从村子旁边流过。", choices: ["一条小河从村子旁边流过。", "一个小河从村子旁边流过。", "一只小河从村子旁边流过。"] },
    { q: "哪个句子是正确的？", a: "老师让我们把作业交上去。", choices: ["老师让我们把作业交上去。", "老师让我们被作业交上去。", "老师让我们给作业交上去。"] },
    { q: "哪个句子有错误？", a: "大约有五十多个人来了。", choices: ["大约有五十多个人来了。", "大约有五十个人来了。", "这两句都正确。"] },
    { q: "哪个句子是正确的？", a: "他不但学习好，而且品德也好。", choices: ["他不但学习好，而且品德也好。", "他不但学习好，但是品德也好。", "他虽然学习好，而且品德也好。"] },
    { q: "哪个句子是正确的？", a: "这本书对我来说很有帮助。", choices: ["这本书对我来说很有帮助。", "这本书对我来说很有用处帮助。", "这本书给我来说很有帮助。"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6cVc2() {
  // ⚠️ More chengyu — flagged for definition accuracy
  return shuffle([
    { q: "'自相矛盾'是什么意思？", a: "自己的说法前后不一致", choices: ["自己的说法前后不一致", "自己和别人吵架", "用矛和盾打仗"] },
    { q: "'画蛇添足'是什么意思？", a: "做了多余的事，反而弄糟", choices: ["做了多余的事，反而弄糟", "画画很好看", "蛇长了脚"] },
    { q: "'亡羊补牢'的意思是？", a: "出了问题后及时补救", choices: ["出了问题后及时补救", "羊跑了就不管了", "建更大的羊圈"] },
    { q: "'对牛弹琴'比喻什么？", a: "对不懂的人讲道理，白费力气", choices: ["对不懂的人讲道理，白费力气", "牛喜欢听音乐", "弹琴的人很厉害"] },
    { q: "'掩耳盗铃'是什么意思？", a: "自己欺骗自己", choices: ["自己欺骗自己", "偷了一个铃铛", "耳朵听不见"] },
    { q: "'拔苗助长'的意思是？", a: "急于求成，反而坏事", choices: ["急于求成，反而坏事", "帮助植物生长", "农民很勤劳"] },
    { q: "'狐假虎威'比喻什么？", a: "借别人的威势来吓唬人", choices: ["借别人的威势来吓唬人", "狐狸很勇敢", "老虎和狐狸是朋友"] },
    { q: "'井底之蛙'比喻什么？", a: "见识短浅的人", choices: ["见识短浅的人", "住在井里的青蛙", "喜欢跳水的人"] },
    { q: "'叶公好龙'比喻什么？", a: "表面上喜欢，实际上害怕", choices: ["表面上喜欢，实际上害怕", "叶公养了一条龙", "很喜欢龙的人"] },
    { q: "'刻舟求剑'的意思是？", a: "不知道变通，用老方法解决新问题", choices: ["不知道变通，用老方法解决新问题", "在船上刻字", "找到了丢失的剑"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

function buildP6cSy1() {
  // ⚠️ Flagged for Chinese accuracy review
  return shuffle([
    { q: "'高兴'的近义词是？", a: "快乐", choices: ["快乐", "难过", "生气"] },
    { q: "'美丽'的反义词是？", a: "丑陋", choices: ["丑陋", "漂亮", "好看"] },
    { q: "'勤劳'的近义词是？", a: "勤快", choices: ["勤快", "懒惰", "聪明"] },
    { q: "'勇敢'的反义词是？", a: "胆小", choices: ["胆小", "大胆", "勇猛"] },
    { q: "'安静'的近义词是？", a: "宁静", choices: ["宁静", "吵闹", "热闹"] },
    { q: "'困难'的反义词是？", a: "容易", choices: ["容易", "辛苦", "复杂"] },
    { q: "'认真'的近义词是？", a: "仔细", choices: ["仔细", "马虎", "随便"] },
    { q: "'骄傲'的反义词是？", a: "谦虚", choices: ["谦虚", "自信", "勇敢"] },
    { q: "'迅速'的近义词是？", a: "快速", choices: ["快速", "缓慢", "安静"] },
    { q: "'节约'的反义词是？", a: "浪费", choices: ["浪费", "节省", "储蓄"] },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]) }));
}

const BUILDERS = { "p6c-bj1": buildP6cBj1, "p6c-vc2": buildP6cVc2, "p6c-sy1": buildP6cSy1 };
export const P6_CN_ADVANCED_QUESTION_COUNTS = { "p6c-bj1": 10, "p6c-vc2": 10, "p6c-sy1": 10 };
export function buildCnAdvanced6Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
