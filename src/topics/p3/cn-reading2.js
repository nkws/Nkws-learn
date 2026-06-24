import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP3cRd1() {
  const passage = "星期五，学校举办了运动会。小明参加了跑步比赛，他跑得很快，得了第一名。小红参加了跳远比赛，也拿到了奖牌。同学们都为他们高兴。";
  return shuffle([
    { q: `${passage}\n\n学校什么时候举办运动会？`, a: "星期五", choices: ["星期五", "星期一", "星期三"], explain: "问'什么时候'就是问时间。在短文开头找表示日子的词，第一句'星期五'就是答案。" },
    { q: `${passage}\n\n小明参加了什么比赛？`, a: "跑步比赛", choices: ["跑步比赛", "跳远比赛", "游泳比赛"], explain: "在短文里先找'小明'这个名字，再看他后面做了什么，就能读到他参加的是跑步比赛。" },
    { q: `${passage}\n\n小明得了第几名？`, a: "第一名", choices: ["第一名", "第二名", "第三名"], explain: "找到'小明'那一句，后面写他'跑得很快，得了第一名'，名次的答案就在这句里。" },
    { q: `${passage}\n\n小红参加了什么比赛？`, a: "跳远比赛", choices: ["跳远比赛", "跑步比赛", "唱歌比赛"], explain: "别和小明搞混。在短文里找'小红'的名字，看她后面做的事，就知道她参加跳远比赛。" },
    { q: `${passage}\n\n小红有没有拿到奖牌？`, a: "有", choices: ["有", "没有", "不知道"], explain: "回答'有没有'要回原文找证据。短文写小红'也拿到了奖牌'，有这句话，所以答'有'。" },
    { q: `${passage}\n\n同学们为他们感到怎样？`, a: "高兴", choices: ["高兴", "难过", "生气"], explain: "问心情就找表示心情的词。短文最后说同学们'都为他们高兴'，'高兴'就是答案。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3cRd2() {
  const passage = "春天来了，公园里的花都开了。小鸟在树上唱歌，蝴蝶在花丛中飞来飞去。小华和妈妈一起去公园散步，他们看到了许多美丽的花。";
  return shuffle([
    { q: `${passage}\n\n这是什么季节？`, a: "春天", choices: ["春天", "夏天", "冬天"], explain: "问季节就找表示季节的词。短文第一句就是'春天来了'，开头常常会告诉我们时间。" },
    { q: `${passage}\n\n公园里的花怎么了？`, a: "都开了", choices: ["都开了", "都枯了", "还没开"], explain: "把问题里的'花'当关键词，回原文找到这个词，再看它紧跟着的词。'花'后面写的是'都开了'，照原文抄就对。" },
    { q: `${passage}\n\n小鸟在哪里唱歌？`, a: "树上", choices: ["树上", "地上", "水里"], explain: "问'在哪里'就找表示地点的词。找到'小鸟'那一句，它写'在树上唱歌'，地点就是树上。" },
    { q: `${passage}\n\n蝴蝶在哪里飞？`, a: "花丛中", choices: ["花丛中", "天空中", "树上"], explain: "先在短文里找'蝴蝶'，再看它后面的地点词。原文写蝴蝶'在花丛中飞来飞去'。" },
    { q: `${passage}\n\n小华和谁一起去公园？`, a: "妈妈", choices: ["妈妈", "爸爸", "朋友"], explain: "问'和谁'就找人物。读到'小华和妈妈一起去公园散步'，'和'字后面的人就是答案。" },
    { q: `${passage}\n\n他们在公园做什么？`, a: "散步", choices: ["散步", "跑步", "游泳"], explain: "问做什么就找表示动作的词。原文写他们去公园'散步'，按短文里的动作来选，别乱猜。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP3cRd3() {
  const passage = "放学后，小丽看到一位老奶奶提着很重的袋子。小丽跑过去帮老奶奶提袋子，一直送到老奶奶家门口。老奶奶笑着说谢谢，小丽心里很开心。";
  return shuffle([
    { q: `${passage}\n\n小丽什么时候看到老奶奶？`, a: "放学后", choices: ["放学后", "上学前", "中午"], explain: "问'什么时候'就找时间词。短文第一句'放学后'就告诉了我们事情发生的时间。" },
    { q: `${passage}\n\n老奶奶在做什么？`, a: "提着很重的袋子", choices: ["提着很重的袋子", "在散步", "在买东西"], explain: "在短文里找'老奶奶'，看她正在做的动作。原文写她'提着很重的袋子'，照原文选最准。" },
    { q: `${passage}\n\n小丽做了什么？`, a: "帮老奶奶提袋子", choices: ["帮老奶奶提袋子", "走开了", "叫了妈妈"], explain: "找'小丽'后面的动作词。原文写她'跑过去帮老奶奶提袋子'，做的事就在这句里。" },
    { q: `${passage}\n\n小丽把袋子送到哪里？`, a: "老奶奶家门口", choices: ["老奶奶家门口", "学校门口", "公园门口"], explain: "问'到哪里'就找地点词。原文有'送到老奶奶家门口'，'到'字后面的地方就是答案。" },
    { q: `${passage}\n\n老奶奶对小丽说了什么？`, a: "谢谢", choices: ["谢谢", "再见", "对不起"], explain: "问'说了什么'，就找原文里带'说'字的句子。'说'字后面的话就是答案，这里是老奶奶'笑着说谢谢'。" },
    { q: `${passage}\n\n小丽帮助老奶奶后感觉怎样？`, a: "很开心", choices: ["很开心", "很累", "很难过"], explain: "问心情就找表示心情的词。短文最后写小丽'心里很开心'，帮助别人后心情是开心的。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

const CN_READING2_BUILDERS = {
  "p3c-rd1": buildP3cRd1,
  "p3c-rd2": buildP3cRd2,
  "p3c-rd3": buildP3cRd3,
};

export const P3_CN_READING2_QUESTION_COUNTS = {
  "p3c-rd1": 6, "p3c-rd2": 6, "p3c-rd3": 6,
};

export function buildCnReading2Questions(moduleId) {
  const builder = CN_READING2_BUILDERS[moduleId];
  return builder ? builder() : [];
}
