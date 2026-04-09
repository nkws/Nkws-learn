function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildP2cRd1() {
  const passage = "小明每天早上七点起床。他吃了面包和牛奶，然后走路去上学。他最喜欢的科目是数学。";
  return shuffle([
    { q: `${passage}\n\n小明几点起床？`, a: "七点", choices: ["七点", "八点", "六点"] },
    { q: `${passage}\n\n小明早上吃了什么？`, a: "面包和牛奶", choices: ["面包和牛奶", "饭和汤", "面条"] },
    { q: `${passage}\n\n小明怎么去上学？`, a: "走路", choices: ["走路", "坐车", "骑车"] },
    { q: `${passage}\n\n小明最喜欢什么科目？`, a: "数学", choices: ["数学", "英文", "华文"] },
    { q: `${passage}\n\n小明什么时候起床？`, a: "早上", choices: ["早上", "中午", "晚上"] },
    { q: `${passage}\n\n小明每天都去哪里？`, a: "上学", choices: ["上学", "公园", "商店"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2cRd2() {
  const passage = "星期天，小美和爸爸妈妈去动物园。她看到了大象、猴子和长颈鹿。小美最喜欢猴子，因为猴子很可爱。";
  return shuffle([
    { q: `${passage}\n\n小美什么时候去动物园？`, a: "星期天", choices: ["星期天", "星期一", "星期六"] },
    { q: `${passage}\n\n小美和谁一起去？`, a: "爸爸妈妈", choices: ["爸爸妈妈", "朋友", "老师"] },
    { q: `${passage}\n\n小美在动物园看到了什么？`, a: "大象、猴子和长颈鹿", choices: ["大象、猴子和长颈鹿", "猫和狗", "鱼和鸟"] },
    { q: `${passage}\n\n小美最喜欢什么动物？`, a: "猴子", choices: ["猴子", "大象", "长颈鹿"] },
    { q: `${passage}\n\n小美为什么喜欢猴子？`, a: "因为猴子很可爱", choices: ["因为猴子很可爱", "因为猴子很大", "因为猴子会飞"] },
    { q: `${passage}\n\n小美去了哪里？`, a: "动物园", choices: ["动物园", "公园", "学校"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2cRd3() {
  const passage = "小华有一只小狗，叫小白。小白的毛是白色的，很喜欢玩球。每天放学后，小华都会带小白去公园散步。";
  return shuffle([
    { q: `${passage}\n\n小华的宠物是什么？`, a: "小狗", choices: ["小狗", "小猫", "小鸟"] },
    { q: `${passage}\n\n小狗叫什么名字？`, a: "小白", choices: ["小白", "小黑", "小花"] },
    { q: `${passage}\n\n小白的毛是什么颜色？`, a: "白色", choices: ["白色", "黑色", "棕色"] },
    { q: `${passage}\n\n小白喜欢做什么？`, a: "玩球", choices: ["玩球", "睡觉", "吃东西"] },
    { q: `${passage}\n\n小华什么时候带小白去公园？`, a: "放学后", choices: ["放学后", "早上", "中午"] },
    { q: `${passage}\n\n小华带小白去哪里？`, a: "公园", choices: ["公园", "学校", "商店"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const CN_READING_BUILDERS = {
  "p2c-rd1": buildP2cRd1,
  "p2c-rd2": buildP2cRd2,
  "p2c-rd3": buildP2cRd3,
};

export const P2_CN_READING_QUESTION_COUNTS = {
  "p2c-rd1": 6, "p2c-rd2": 6, "p2c-rd3": 6,
};

export function buildCnReadingQuestions(moduleId) {
  const builder = CN_READING_BUILDERS[moduleId];
  return builder ? builder() : [];
}
