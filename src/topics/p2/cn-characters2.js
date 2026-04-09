function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildP2cCh1() {
  return shuffle([
    { q: "桌子用来做什么？", a: "放东西和写字", choices: ["放东西和写字", "坐着休息", "睡觉用的"] },
    { q: "椅子用来做什么？", a: "坐着休息", choices: ["坐着休息", "放东西", "写字用的"] },
    { q: "杯子用来做什么？", a: "喝水", choices: ["喝水", "吃饭", "写字"] },
    { q: "书包用来做什么？", a: "装书本", choices: ["装书本", "喝水", "吃东西"] },
    { q: "铅笔用来做什么？", a: "写字和画画", choices: ["写字和画画", "吃东西", "喝水"] },
    { q: "雨伞用来做什么？", a: "挡雨", choices: ["挡雨", "写字", "吃饭"] },
    { q: "钟用来做什么？", a: "看时间", choices: ["看时间", "听音乐", "看电视"] },
    { q: "钥匙用来做什么？", a: "开门", choices: ["开门", "写字", "喝水"] },
    { q: "碗用来做什么？", a: "装饭菜", choices: ["装饭菜", "喝水", "写字"] },
    { q: "鞋子用来做什么？", a: "穿在脚上走路", choices: ["穿在脚上走路", "戴在头上", "拿在手上"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2cCh2() {
  return shuffle([
    { q: "太阳什么时候出来？", a: "白天", choices: ["白天", "晚上", "半夜"] },
    { q: "月亮什么时候出来？", a: "晚上", choices: ["晚上", "白天", "中午"] },
    { q: "下雨的时候天上有什么？", a: "乌云", choices: ["乌云", "太阳", "星星"] },
    { q: "彩虹有几种颜色？", a: "七种", choices: ["七种", "三种", "五种"] },
    { q: "花朵需要什么才能生长？", a: "阳光和水", choices: ["阳光和水", "只要水", "只要土"] },
    { q: "树叶是什么颜色的？", a: "绿色", choices: ["绿色", "红色", "蓝色"] },
    { q: "风是看得见的吗？", a: "看不见", choices: ["看不见", "看得见", "有时看得见"] },
    { q: "大海里的水是什么味道？", a: "咸的", choices: ["咸的", "甜的", "酸的"] },
    { q: "冬天会下什么？", a: "雪", choices: ["雪", "雨", "冰雹"] },
    { q: "天上的白色是什么？", a: "云", choices: ["云", "雪", "烟"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP2cCh3() {
  return shuffle([
    { q: "一年有几个月？", a: "十二个月", choices: ["十二个月", "十个月", "六个月"] },
    { q: "一个星期有几天？", a: "七天", choices: ["七天", "五天", "六天"] },
    { q: "一天有几个小时？", a: "二十四个小时", choices: ["二十四个小时", "十二个小时", "十个小时"] },
    { q: "一个小时有几分钟？", a: "六十分钟", choices: ["六十分钟", "三十分钟", "一百分钟"] },
    { q: "早上我们做什么？", a: "起床上学", choices: ["起床上学", "睡觉", "吃晚饭"] },
    { q: "晚上我们做什么？", a: "睡觉休息", choices: ["睡觉休息", "上学", "吃早饭"] },
    { q: "中午我们通常做什么？", a: "吃午饭", choices: ["吃午饭", "睡觉", "上学"] },
    { q: "星期六和星期天叫什么？", a: "周末", choices: ["周末", "假期", "上学日"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const CHARACTERS2_BUILDERS = {
  "p2c-ch1": buildP2cCh1,
  "p2c-ch2": buildP2cCh2,
  "p2c-ch3": buildP2cCh3,
};

export const P2_CHARACTERS2_QUESTION_COUNTS = {
  "p2c-ch1": 10, "p2c-ch2": 10, "p2c-ch3": 8,
};

export function buildCharacters2Questions(moduleId) {
  const builder = CHARACTERS2_BUILDERS[moduleId];
  return builder ? builder() : [];
}
