import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP2cRd1() {
  const passage = "小明每天早上七点起床。他吃了面包和牛奶，然后走路去上学。他最喜欢的科目是数学。";
  return shuffle([
    { q: `${passage}\n\n小明几点起床？`, a: "七点", choices: ["七点", "八点", "六点"], explain: "短文里说'小明每天早上七点起床'，直接告诉了我们时间，所以答案是七点。" },
    { q: `${passage}\n\n小明早上吃了什么？`, a: "面包和牛奶", choices: ["面包和牛奶", "饭和汤", "面条"], explain: "短文里说'他吃了面包和牛奶'，照着文中的话找，答案就是面包和牛奶。" },
    { q: `${passage}\n\n小明怎么去上学？`, a: "走路", choices: ["走路", "坐车", "骑车"], explain: "短文里说'然后走路去上学'，'走路'就是去上学的方法，所以答案是走路。" },
    { q: `${passage}\n\n小明最喜欢什么科目？`, a: "数学", choices: ["数学", "英文", "华文"], explain: "问'最喜欢'，就在短文里找'喜欢'这个词。它说'最喜欢的科目是数学'，所以答案是数学。" },
    { q: `${passage}\n\n小明什么时候起床？`, a: "早上", choices: ["早上", "中午", "晚上"], explain: "短文里说'每天早上七点起床'，七点在早上，所以他是早上起床的。" },
    { q: `${passage}\n\n小明每天都去哪里？`, a: "上学", choices: ["上学", "公园", "商店"], explain: "短文里说他'走路去上学'，这是他每天做的事，所以他每天去上学。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2cRd2() {
  const passage = "星期天，小美和爸爸妈妈去动物园。她看到了大象、猴子和长颈鹿。小美最喜欢猴子，因为猴子很可爱。";
  return shuffle([
    { q: `${passage}\n\n小美什么时候去动物园？`, a: "星期天", choices: ["星期天", "星期一", "星期六"], explain: "短文一开头就说'星期天……去动物园'，所以去的时间是星期天。" },
    { q: `${passage}\n\n小美和谁一起去？`, a: "爸爸妈妈", choices: ["爸爸妈妈", "朋友", "老师"], explain: "问'和谁'，就找'和'后面的人。短文说'小美和爸爸妈妈去'，所以一起去的是爸爸妈妈。" },
    { q: `${passage}\n\n小美在动物园看到了什么？`, a: "大象、猴子和长颈鹿", choices: ["大象、猴子和长颈鹿", "猫和狗", "鱼和鸟"], explain: "短文里说'她看到了大象、猴子和长颈鹿'，把这三种动物连起来就是答案。" },
    { q: `${passage}\n\n小美最喜欢什么动物？`, a: "猴子", choices: ["猴子", "大象", "长颈鹿"], explain: "短文里说'小美最喜欢猴子'，所以她最喜欢的动物是猴子。" },
    { q: `${passage}\n\n小美为什么喜欢猴子？`, a: "因为猴子很可爱", choices: ["因为猴子很可爱", "因为猴子很大", "因为猴子会飞"], explain: "'为什么'要找原因。短文里说'因为猴子很可爱'，这就是她喜欢猴子的原因。" },
    { q: `${passage}\n\n小美去了哪里？`, a: "动物园", choices: ["动物园", "公园", "学校"], explain: "问'去哪里'，就找'去'后面的地方。短文说'去动物园'，所以她去的是动物园。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2cRd3() {
  const passage = "小华有一只小狗，叫小白。小白的毛是白色的，很喜欢玩球。每天放学后，小华都会带小白去公园散步。";
  return shuffle([
    { q: `${passage}\n\n小华的宠物是什么？`, a: "小狗", choices: ["小狗", "小猫", "小鸟"], explain: "短文里说'小华有一只小狗'，所以他养的宠物是小狗。" },
    { q: `${passage}\n\n小狗叫什么名字？`, a: "小白", choices: ["小白", "小黑", "小花"], explain: "问名字，就找'叫'后面的字。短文说小狗'叫小白'，所以名字是小白。" },
    { q: `${passage}\n\n小白的毛是什么颜色？`, a: "白色", choices: ["白色", "黑色", "棕色"], explain: "短文里说'小白的毛是白色的'，所以它的毛是白色，名字里的'白'也提示了颜色。" },
    { q: `${passage}\n\n小白喜欢做什么？`, a: "玩球", choices: ["玩球", "睡觉", "吃东西"], explain: "短文里说小白'很喜欢玩球'，所以它喜欢做的事是玩球。" },
    { q: `${passage}\n\n小华什么时候带小白去公园？`, a: "放学后", choices: ["放学后", "早上", "中午"], explain: "短文里说'每天放学后，小华都会带小白去公园'，所以时间是放学后。" },
    { q: `${passage}\n\n小华带小白去哪里？`, a: "公园", choices: ["公园", "学校", "商店"], explain: "问'去哪里'，就找'去'后面的地方。短文说'去公园散步'，所以去的是公园。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
