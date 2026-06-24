import { shuffle } from "../utils/helpers";
export const CHARACTERS_INTRO = {
  "ch-1": {
    title: "数字 一 到 十",
    pages: [
      { text: "我们来学习中文数字！", emoji: "🔢" },
      { text: "一 二 三 四 五", emoji: "1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣" },
      { text: "六 七 八 九 十", emoji: "6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟" },
      { text: "我们来练习吧！", emoji: "🦊 加油！" },
    ],
  },
};

function buildCh1() {
  return shuffle([
    { q: "数字 3 的中文怎么写？", a: "三", choices: ["二", "三", "四"], explain: "数横线就知道。三（sān）有三横，二（èr）只有两横，所以 3 写成 三。" },
    { q: "数字 7 的中文怎么写？", a: "七", choices: ["六", "七", "九"], explain: "记住样子。七（qī）像一根拐杖加一横，所以数字 7 写成 七。" },
    { q: "数字 5 的中文怎么写？", a: "五", choices: ["四", "五", "六"], explain: "记住样子。五（wǔ）中间像一个交叉，所以数字 5 写成 五。" },
    { q: "数字 1 的中文怎么写？", a: "一", choices: ["一", "二", "十"], explain: "数横线就知道。一（yī）只有一横，二有两横，所以 1 写成 一。" },
    { q: "数字 9 的中文怎么写？", a: "九", choices: ["八", "九", "七"], explain: "记住样子。九（jiǔ）有一个弯弯的勾，所以数字 9 写成 九。" },
    { q: "数字 4 的中文怎么写？", a: "四", choices: ["三", "四", "五"], explain: "记住样子。四（sì）外面有一个方框，里面有两笔，所以 4 写成 四。" },
    { q: "数字 10 的中文怎么写？", a: "十", choices: ["八", "九", "十"], explain: "记住样子。十（shí）是一横加一竖，像个加号，所以 10 写成 十。" },
    { q: "数字 2 的中文怎么写？", a: "二", choices: ["一", "二", "三"], explain: "数横线就知道。二（èr）有两横，一只有一横，所以 2 写成 二。" },
    { q: "数字 8 的中文怎么写？", a: "八", choices: ["六", "八", "九"], explain: "记住样子。八（bā）是分开的两笔，像八字胡，所以 8 写成 八。" },
    { q: "数字 6 的中文怎么写？", a: "六", choices: ["五", "六", "七"], explain: "记住样子。六（liù）上面一点一横，下面两笔，所以 6 写成 六。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildCh2() {
  return shuffle([
    { q: "爸爸 是谁？", a: "父亲", choices: ["父亲", "母亲", "哥哥"], explain: "爸爸（bàba）就是生你养你的男人，书面上叫父亲，母亲是指妈妈。" },
    { q: "妈妈 是谁？", a: "母亲", choices: ["父亲", "母亲", "姐姐"], explain: "妈妈（māma）就是生你养你的女人，书面上叫母亲，父亲是指爸爸。" },
    { q: "哥哥 是什么？", a: "比你大的男孩", choices: ["比你大的男孩", "比你小的男孩", "比你大的女孩"], explain: "哥哥（gēge）是同一个家里年纪比你大的男孩，弟弟才是比你小的男孩。" },
    { q: "姐姐 是什么？", a: "比你大的女孩", choices: ["比你小的女孩", "比你大的女孩", "比你大的男孩"], explain: "姐姐（jiějie）是同一个家里年纪比你大的女孩，妹妹才是比你小的女孩。" },
    { q: "弟弟 是什么？", a: "比你小的男孩", choices: ["比你大的男孩", "比你小的男孩", "比你小的女孩"], explain: "弟弟（dìdi）是同一个家里年纪比你小的男孩，哥哥才是比你大的男孩。" },
    { q: "妹妹 是什么？", a: "比你小的女孩", choices: ["比你大的女孩", "比你小的女孩", "比你小的男孩"], explain: "妹妹（mèimei）是同一个家里年纪比你小的女孩，姐姐才是比你大的女孩。" },
    { q: "爷爷 是谁？", a: "爸爸的爸爸", choices: ["爸爸的爸爸", "妈妈的爸爸", "爸爸的妈妈"], explain: "爷爷（yéye）是爸爸那一边的长辈，就是爸爸的爸爸，不是妈妈的爸爸。" },
    { q: "奶奶 是谁？", a: "爸爸的妈妈", choices: ["爸爸的妈妈", "妈妈的妈妈", "爸爸的爸爸"], explain: "奶奶（nǎinai）是爸爸那一边的长辈，就是爸爸的妈妈，不是妈妈的妈妈。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildCh3() {
  return shuffle([
    { q: "头 是身体的哪个部分？", a: "最上面的部分", choices: ["最上面的部分", "中间的部分", "最下面的部分"], explain: "头（tóu）在身体最高的地方，里面装着脑子，所以它是身体最上面的部分。" },
    { q: "手 用来做什么？", a: "拿东西", choices: ["拿东西", "走路", "听声音"], explain: "手（shǒu）上有手指，可以抓和握，所以我们用手来拿东西，用脚走路。" },
    { q: "脚 用来做什么？", a: "走路", choices: ["拿东西", "走路", "看东西"], explain: "脚（jiǎo）在身体最下面，踩在地上，所以我们用脚走路，用手拿东西。" },
    { q: "眼睛 用来做什么？", a: "看东西", choices: ["看东西", "听声音", "闻味道"], explain: "眼睛（yǎnjing）能感觉到光和颜色，所以我们用眼睛看东西，用耳朵听声音。" },
    { q: "耳朵 用来做什么？", a: "听声音", choices: ["看东西", "听声音", "吃东西"], explain: "耳朵（ěrduo）长在头两边，能收到声音，所以我们用耳朵听声音，用眼睛看东西。" },
    { q: "嘴巴 用来做什么？", a: "吃东西和说话", choices: ["看东西", "听声音", "吃东西和说话"], explain: "嘴巴（zuǐba）里有牙齿和舌头，所以它既能吃东西，也能说话。" },
    { q: "鼻子 用来做什么？", a: "闻味道", choices: ["闻味道", "看东西", "听声音"], explain: "鼻子（bízi）能吸气，闻到香和臭，所以我们用鼻子闻味道，用眼睛看东西。" },
    { q: "头发 长在哪里？", a: "头上", choices: ["手上", "头上", "脚上"], explain: "头发是一根一根细细长长的丝，密密麻麻地长在头顶上，不会长在手上或脚上。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildCh4() {
  return shuffle([
    { q: "猫 是什么动物？", a: "会喵喵叫的小动物", choices: ["会喵喵叫的小动物", "会汪汪叫的小动物", "会飞的动物"], explain: "猫（māo）的叫声是喵喵，狗才是汪汪叫，所以猫是会喵喵叫的小动物。" },
    { q: "狗 是什么动物？", a: "会汪汪叫的小动物", choices: ["会喵喵叫的小动物", "会汪汪叫的小动物", "会游泳的动物"], explain: "狗（gǒu）的叫声是汪汪，猫才是喵喵叫，所以狗是会汪汪叫的小动物。" },
    { q: "鱼 住在哪里？", a: "水里", choices: ["树上", "水里", "地上"], explain: "鱼（yú）要用水才能呼吸和游泳，离开水就活不了，所以鱼住在水里。" },
    { q: "鸟 会做什么？", a: "飞", choices: ["游泳", "飞", "挖洞"], explain: "鸟（niǎo）有翅膀和羽毛，拍一拍就能飞上天，所以鸟最会做的事是飞。" },
    { q: "兔子 有什么特点？", a: "长耳朵", choices: ["长鼻子", "长耳朵", "长尾巴"], explain: "兔子（tùzi）的耳朵长长的，尾巴却短短圆圆的，所以它的特点是长耳朵。" },
    { q: "马 可以做什么？", a: "跑得很快", choices: ["飞得很高", "跑得很快", "游得很快"], explain: "马（mǎ）有四条又长又有力的腿，所以马可以在地上跑得很快。" },
    { q: "牛 可以给我们什么？", a: "牛奶", choices: ["鸡蛋", "牛奶", "蜂蜜"], explain: "农场里这种大动物的妈妈会产出白白的奶，我们每天喝的就是它，不是鸡蛋也不是蜂蜜。" },
    { q: "鸡 会下什么？", a: "鸡蛋", choices: ["牛奶", "鸡蛋", "面包"], explain: "农场里的母鸡会在巢里下圆圆硬壳的东西，我们用来煎或煮着吃，不是牛奶也不是面包。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "ch-1": buildCh1, "ch-2": buildCh2, "ch-3": buildCh3, "ch-4": buildCh4 };
export const CHARACTERS_QUESTION_COUNTS = { "ch-1": 10, "ch-2": 8, "ch-3": 8, "ch-4": 8 };
export function buildCharactersQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
