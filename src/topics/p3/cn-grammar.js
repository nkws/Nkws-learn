function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ QUESTION BANKS ============

function buildP3cGr1() {
  return shuffle([
    { q: "一___书", a: "本", choices: ["本", "个", "只"] },
    { q: "一___猫", a: "只", choices: ["只", "本", "条"] },
    { q: "一___鱼", a: "条", choices: ["条", "只", "个"] },
    { q: "一___花", a: "朵", choices: ["朵", "棵", "个"] },
    { q: "一___树", a: "棵", choices: ["棵", "朵", "条"] },
    { q: "一___铅笔", a: "支", choices: ["支", "本", "条"] },
    { q: "一___衣服", a: "件", choices: ["件", "条", "个"] },
    { q: "一___桌子", a: "张", choices: ["张", "把", "个"] },
    { q: "一___车", a: "辆", choices: ["辆", "只", "条"] },
    { q: "一___老师", a: "位", choices: ["位", "个", "只"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3cGr2() {
  return shuffle([
    { q: "用'因为...所以...'造句，哪个对？", a: "因为下雨了，所以我带了伞。", choices: ["因为下雨了，所以我带了伞。", "因为我带了伞，所以下雨了。", "所以下雨了，因为我带了伞。"] },
    { q: "用'虽然...但是...'造句，哪个对？", a: "虽然天气很冷，但是他还是出去跑步。", choices: ["虽然天气很冷，但是他还是出去跑步。", "但是天气很冷，虽然他出去跑步。", "虽然他跑步，但是天气不冷。"] },
    { q: "用'如果...就...'造句，哪个对？", a: "如果明天不下雨，我们就去公园。", choices: ["如果明天不下雨，我们就去公园。", "就明天不下雨，如果我们去公园。", "如果去公园，就不下雨了。"] },
    { q: "用'不但...而且...'造句，哪个对？", a: "她不但会唱歌，而且会跳舞。", choices: ["她不但会唱歌，而且会跳舞。", "她而且会唱歌，不但会跳舞。", "不但她唱歌，而且她不跳舞。"] },
    { q: "用'一边...一边...'造句，哪个对？", a: "他一边吃饭，一边看电视。", choices: ["他一边吃饭，一边看电视。", "他一边看电视。", "一边他吃饭一边看。"] },
    { q: "用'先...然后...'造句，哪个对？", a: "我先写作业，然后出去玩。", choices: ["我先写作业，然后出去玩。", "然后写作业，先出去玩。", "我先然后写作业出去玩。"] },
    { q: "用'因为...所以...'造句，哪个对？", a: "因为他生病了，所以没有来上学。", choices: ["因为他生病了，所以没有来上学。", "所以他生病了，因为没有来上学。", "因为没有来上学，所以他生病了。"] },
    { q: "用'虽然...但是...'造句，哪个对？", a: "虽然这道题很难，但是他做对了。", choices: ["虽然这道题很难，但是他做对了。", "但是这道题很难，虽然他做对了。", "虽然他做对了，但是题不难。"] },
    { q: "用'如果...就...'造句，哪个对？", a: "如果你努力学习，就能取得好成绩。", choices: ["如果你努力学习，就能取得好成绩。", "就你努力学习，如果取得好成绩。", "如果好成绩，就努力学习。"] },
    { q: "用'不但...而且...'造句，哪个对？", a: "这个公园不但很大，而且很漂亮。", choices: ["这个公园不但很大，而且很漂亮。", "这个公园而且很大，不但很漂亮。", "不但公园，而且漂亮大。"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

function buildP3cGr3() {
  return shuffle([
    { q: "她高兴___跳起来。", a: "地", choices: ["地", "的", "得"] },
    { q: "这是我___书包。", a: "的", choices: ["的", "地", "得"] },
    { q: "他跑___很快。", a: "得", choices: ["得", "的", "地"] },
    { q: "美丽___花朵开了。", a: "的", choices: ["的", "地", "得"] },
    { q: "妹妹慢慢___走过来。", a: "地", choices: ["地", "的", "得"] },
    { q: "他唱___非常好听。", a: "得", choices: ["得", "的", "地"] },
    { q: "这是一朵红色___花。", a: "的", choices: ["的", "地", "得"] },
    { q: "弟弟认真___写作业。", a: "地", choices: ["地", "的", "得"] },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
  }));
}

const CN_GRAMMAR_BUILDERS = {
  "p3c-gr1": buildP3cGr1,
  "p3c-gr2": buildP3cGr2,
  "p3c-gr3": buildP3cGr3,
};

export const P3_CN_GRAMMAR_QUESTION_COUNTS = {
  "p3c-gr1": 10, "p3c-gr2": 10, "p3c-gr3": 8,
};

export function buildCnGrammarQuestions(moduleId) {
  const builder = CN_GRAMMAR_BUILDERS[moduleId];
  return builder ? builder() : [];
}
