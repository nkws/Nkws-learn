function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildP3cRd1() {
  const passage = "星期五，学校举办了运动会。小明参加了跑步比赛，他跑得很快，得了第一名。小红参加了跳远比赛，也拿到了奖牌。同学们都为他们高兴。";
  return shuffle([
    { q: `${passage}\n\n学校什么时候举办运动会？`, a: "星期五", choices: ["星期五", "星期一", "星期三"] },
    { q: `${passage}\n\n小明参加了什么比赛？`, a: "跑步比赛", choices: ["跑步比赛", "跳远比赛", "游泳比赛"] },
    { q: `${passage}\n\n小明得了第几名？`, a: "第一名", choices: ["第一名", "第二名", "第三名"] },
    { q: `${passage}\n\n小红参加了什么比赛？`, a: "跳远比赛", choices: ["跳远比赛", "跑步比赛", "唱歌比赛"] },
    { q: `${passage}\n\n小红有没有拿到奖牌？`, a: "有", choices: ["有", "没有", "不知道"] },
    { q: `${passage}\n\n同学们为他们感到怎样？`, a: "高兴", choices: ["高兴", "难过", "生气"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3cRd2() {
  const passage = "春天来了，公园里的花都开了。小鸟在树上唱歌，蝴蝶在花丛中飞来飞去。小华和妈妈一起去公园散步，他们看到了许多美丽的花。";
  return shuffle([
    { q: `${passage}\n\n这是什么季节？`, a: "春天", choices: ["春天", "夏天", "冬天"] },
    { q: `${passage}\n\n公园里的花怎么了？`, a: "都开了", choices: ["都开了", "都枯了", "还没开"] },
    { q: `${passage}\n\n小鸟在哪里唱歌？`, a: "树上", choices: ["树上", "地上", "水里"] },
    { q: `${passage}\n\n蝴蝶在哪里飞？`, a: "花丛中", choices: ["花丛中", "天空中", "树上"] },
    { q: `${passage}\n\n小华和谁一起去公园？`, a: "妈妈", choices: ["妈妈", "爸爸", "朋友"] },
    { q: `${passage}\n\n他们在公园做什么？`, a: "散步", choices: ["散步", "跑步", "游泳"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3cRd3() {
  const passage = "放学后，小丽看到一位老奶奶提着很重的袋子。小丽跑过去帮老奶奶提袋子，一直送到老奶奶家门口。老奶奶笑着说谢谢，小丽心里很开心。";
  return shuffle([
    { q: `${passage}\n\n小丽什么时候看到老奶奶？`, a: "放学后", choices: ["放学后", "上学前", "中午"] },
    { q: `${passage}\n\n老奶奶在做什么？`, a: "提着很重的袋子", choices: ["提着很重的袋子", "在散步", "在买东西"] },
    { q: `${passage}\n\n小丽做了什么？`, a: "帮老奶奶提袋子", choices: ["帮老奶奶提袋子", "走开了", "叫了妈妈"] },
    { q: `${passage}\n\n小丽把袋子送到哪里？`, a: "老奶奶家门口", choices: ["老奶奶家门口", "学校门口", "公园门口"] },
    { q: `${passage}\n\n老奶奶对小丽说了什么？`, a: "谢谢", choices: ["谢谢", "再见", "对不起"] },
    { q: `${passage}\n\n小丽帮助老奶奶后感觉怎样？`, a: "很开心", choices: ["很开心", "很累", "很难过"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
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
