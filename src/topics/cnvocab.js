import { shuffle } from "../utils/helpers";
function buildCnv1() {
  return shuffle([
    { q: "见到朋友要说什么？", a: "你好", choices: ["你好", "再见", "谢谢"], explain: "见面打招呼用问候的话。你好（nǐ hǎo）是见面时的招呼，再见是分开时才说的。" },
    { q: "别人帮助你要说什么？", a: "谢谢", choices: ["你好", "谢谢", "对不起"], explain: "别人帮了你，要表示感谢。谢谢（xiè xie）就是感谢的话，所以这时说谢谢。" },
    { q: "要离开了说什么？", a: "再见", choices: ["再见", "你好", "谢谢"], explain: "分开告别时用道别的话。再见（zài jiàn）的意思是下次再相见，所以离开时说再见。" },
    { q: "做错事了要说什么？", a: "对不起", choices: ["谢谢", "再见", "对不起"], explain: "做错了要道歉。对不起（duì bu qǐ）是认错和道歉的话，所以做错事时说对不起。" },
    { q: "别人说对不起，你说什么？", a: "没关系", choices: ["没关系", "谢谢", "再见"], explain: "别人道歉时要友好回应。没关系（méi guān xi）表示你原谅他，不生气了。" },
    { q: "早上见到老师说什么？", a: "早上好", choices: ["早上好", "晚上好", "再见"], explain: "问候要看时间。早上太阳刚出来，所以这时说早上好（zǎo shang hǎo）。" },
    { q: "晚上见到爸妈说什么？", a: "晚上好", choices: ["早上好", "晚上好", "你好"], explain: "问候要看时间。晚上天黑了，所以这时说晚上好（wǎn shang hǎo），不说早上好。" },
    { q: "请别人帮忙先说什么？", a: "请", choices: ["请", "谢谢", "对不起"], explain: "请别人做事要客气。请（qǐng）是有礼貌的开头，比如请帮我、请坐。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildCnv2() {
  return shuffle([
    { q: "我们每天吃的白色的食物是什么？", a: "饭", choices: ["饭", "面", "面包"], explain: "饭（fàn）是白白的米煮成的，一粒一粒的，所以每天吃的白色主食是饭。" },
    { q: "长长的可以用筷子夹的食物是什么？", a: "面", choices: ["饭", "面", "鸡蛋"], explain: "面（miàn）是一条一条长长的，正好用筷子夹起来，饭是一粒一粒的。" },
    { q: "口渴了要喝什么？", a: "水", choices: ["水", "饭", "面包"], explain: "口渴是身体缺水了。水（shuǐ）能解渴，饭和面包是用来吃的，不能解渴。" },
    { q: "牛给我们的白色饮料是什么？", a: "牛奶", choices: ["水", "牛奶", "果汁"], explain: "牛奶（niú nǎi）名字里就有牛字，是妈妈牛产的白色饮料，所以是牛给我们的。" },
    { q: "鸡下的是什么？", a: "鸡蛋", choices: ["鸡蛋", "牛奶", "面包"], explain: "鸡蛋（jī dàn）名字里就有鸡字，是母鸡下的蛋，牛奶才是牛给我们的。" },
    { q: "早餐可以吃的，软软的是什么？", a: "面包", choices: ["饭", "面", "面包"], explain: "面包（miàn bāo）是烤出来的，松松软软的，早餐常吃，饭是一粒一粒的米。" },
    { q: "红色的，圆圆的水果是什么？", a: "苹果", choices: ["苹果", "香蕉", "面包"], explain: "苹果（píng guǒ）大多是红红的、圆圆的，香蕉是黄黄弯弯的，所以答案是苹果。" },
    { q: "黄色的，弯弯的水果是什么？", a: "香蕉", choices: ["苹果", "香蕉", "鸡蛋"], explain: "香蕉（xiāng jiāo）是黄黄的、弯弯像月牙的，苹果是红红圆圆的，所以是香蕉。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildCnv3() {
  return shuffle([
    { q: "在学校教我们知识的人是谁？", a: "老师", choices: ["老师", "学生", "爸爸"], explain: "老师（lǎo shī）站在讲台上教大家本领，学生是在下面学习的人。" },
    { q: "在学校学习的人叫什么？", a: "学生", choices: ["老师", "学生", "朋友"], explain: "学生（xué sheng）名字里有学字，是在学校上课学习的人，老师是教的人。" },
    { q: "我们读的东西叫什么？", a: "书", choices: ["书", "笔", "桌子"], explain: "书（shū）里面有字有图，可以一页一页翻着读，笔是用来写字的。" },
    { q: "我们用来写字的是什么？", a: "笔", choices: ["书", "笔", "椅子"], explain: "笔（bǐ）握在手里可以写出字来，书是用来读的，所以写字用笔。" },
    { q: "我们把书放在哪里？", a: "桌子", choices: ["桌子", "椅子", "书"], explain: "桌子（zhuō zi）面平平的，可以放书写字，椅子是坐的，所以书放桌子上。" },
    { q: "我们坐的东西叫什么？", a: "椅子", choices: ["桌子", "椅子", "笔"], explain: "椅子（yǐ zi）有椅面和靠背，坐起来舒服，桌子是放东西写字的。" },
    { q: "我们每天去学习的地方叫什么？", a: "学校", choices: ["学校", "公园", "家"], explain: "学校（xué xiào）名字里有学字，是上课学习的地方，公园是玩的地方。" },
    { q: "上课的房间叫什么？", a: "教室", choices: ["教室", "学校", "家"], explain: "教室（jiào shì）是学校里一间间上课的房间，整个学校里有很多间教室。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildCnv4() {
  return shuffle([
    { q: "苹果是什么颜色？", a: "红色", choices: ["红色", "蓝色", "绿色"], explain: "颜色看东西本来的样子。熟的苹果（píng guǒ）多是红红的，所以苹果是红色。" },
    { q: "天空是什么颜色？", a: "蓝色", choices: ["红色", "蓝色", "黄色"], explain: "颜色看东西本来的样子。白天的天空（tiān kōng）是蓝蓝的，所以天空是蓝色。" },
    { q: "树叶是什么颜色？", a: "绿色", choices: ["绿色", "红色", "白色"], explain: "颜色看东西本来的样子。大部分树叶（shù yè）是绿绿的，所以树叶是绿色。" },
    { q: "香蕉是什么颜色？", a: "黄色", choices: ["黄色", "蓝色", "黑色"], explain: "颜色看东西本来的样子。熟的香蕉（xiāng jiāo）是黄黄的，所以香蕉是黄色。" },
    { q: "云是什么颜色？", a: "白色", choices: ["白色", "黑色", "红色"], explain: "颜色看东西本来的样子。晴天的云（yún）是白白的一朵朵，所以云是白色。" },
    { q: "夜晚的天空是什么颜色？", a: "黑色", choices: ["白色", "蓝色", "黑色"], explain: "颜色看光亮多少。夜晚（yè wǎn）没有太阳，天空黑黑的，所以是黑色。" },
    { q: "像樱花和桃花一样的颜色是什么？", a: "粉色", choices: ["粉色", "黑色", "绿色"], explain: "颜色看花本来的样子。樱花（yīng huā）和桃花是淡淡的粉红，所以是粉色。" },
    { q: "橙子是什么颜色？", a: "橙色", choices: ["红色", "黄色", "橙色"], explain: "有些水果颜色和名字一样。橙子（chéng zi）就是橙色的，不是红色也不是黄色。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "cnv-1": buildCnv1, "cnv-2": buildCnv2, "cnv-3": buildCnv3, "cnv-4": buildCnv4 };
export const CNVOCAB_QUESTION_COUNTS = { "cnv-1": 8, "cnv-2": 8, "cnv-3": 8, "cnv-4": 8 };
export function buildCnVocabQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
