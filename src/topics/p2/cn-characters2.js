import { shuffle } from "../../utils/helpers";
// ============ QUESTION BANKS ============

function buildP2cCh1() {
  return shuffle([
    { q: "桌子用来做什么？", a: "放东西和写字", choices: ["放东西和写字", "坐着休息", "睡觉用的"], explain: "桌子 zhuō zi 是平平的台面，我们把东西放在上面，也在上面写字、做作业。" },
    { q: "椅子用来做什么？", a: "坐着休息", choices: ["坐着休息", "放东西", "写字用的"], explain: "椅子 yǐ zi 有座位和靠背，是给人坐的，所以我们坐在椅子上休息。" },
    { q: "杯子用来做什么？", a: "喝水", choices: ["喝水", "吃饭", "写字"], explain: "杯子 bēi zi 能装水，我们用它来喝水或喝饮料，所以答案是喝水。" },
    { q: "书包用来做什么？", a: "装书本", choices: ["装书本", "喝水", "吃东西"], explain: "书包 shū bāo 里有空间，可以装书本和文具，背着去上学。" },
    { q: "铅笔用来做什么？", a: "写字和画画", choices: ["写字和画画", "吃东西", "喝水"], explain: "铅笔 qiān bǐ 有黑黑的笔芯，在纸上写字、画画，写错了还能用橡皮擦掉。" },
    { q: "雨伞用来做什么？", a: "挡雨", choices: ["挡雨", "写字", "吃饭"], explain: "雨伞 yǔ sǎn 撑开像一个盖子，下雨时遮在头上挡雨，不会淋湿。" },
    { q: "钟用来做什么？", a: "看时间", choices: ["看时间", "听音乐", "看电视"], explain: "钟 zhōng 上面有指针和数字，告诉我们现在几点，所以是用来看时间的。" },
    { q: "钥匙用来做什么？", a: "开门", choices: ["开门", "写字", "喝水"], explain: "钥匙 yào shi 插进锁孔一转，就能把门打开，所以是用来开门的。" },
    { q: "碗用来做什么？", a: "装饭菜", choices: ["装饭菜", "喝水", "写字"], explain: "碗 wǎn 是圆圆凹下去的，吃饭时用来盛饭和菜。" },
    { q: "鞋子用来做什么？", a: "穿在脚上走路", choices: ["穿在脚上走路", "戴在头上", "拿在手上"], explain: "鞋子 xié zi 是给脚穿的，保护脚底，让我们走路时舒服又安全。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2cCh2() {
  return shuffle([
    { q: "太阳什么时候出来？", a: "白天", choices: ["白天", "晚上", "半夜"], explain: "太阳 tài yáng 给我们光和热，它出来天就亮了，所以白天才看得到太阳。" },
    { q: "月亮什么时候出来？", a: "晚上", choices: ["晚上", "白天", "中午"], explain: "月亮 yuè liang 在天黑以后才看得清楚，所以它在晚上出来。" },
    { q: "下雨的时候天上有什么？", a: "乌云", choices: ["乌云", "太阳", "星星"], explain: "乌云 wū yún 是又厚又黑的云，里面装满了水，所以下雨时天上有乌云。" },
    { q: "彩虹有几种颜色？", a: "七种", choices: ["七种", "三种", "五种"], explain: "彩虹 cǎi hóng 有红橙黄绿蓝靛紫七种颜色，所以一共是七种。" },
    { q: "花朵需要什么才能生长？", a: "阳光和水", choices: ["阳光和水", "只要水", "只要土"], explain: "花朵要喝水，也要晒太阳才能长大，所以阳光和水都需要，缺一不可。" },
    { q: "树叶是什么颜色的？", a: "绿色", choices: ["绿色", "红色", "蓝色"], explain: "树叶 shù yè 里有叶绿素，所以平时看起来是绿色的。" },
    { q: "关于风，下面哪个说法是正确的？", a: "我们感觉到风但看不见它", choices: ["我们感觉到风但看不见它", "风有蓝色的形状", "风很大的时候才看得见"], explain: "风 fēng 是流动的空气，没有形状也没有颜色，我们看不见它，只能感觉到它的存在，比如头发被吹动。" },
    { q: "大海里的水是什么味道？", a: "咸的", choices: ["咸的", "甜的", "酸的"], explain: "大海 dà hǎi 的水里有很多盐，所以海水尝起来是咸的。" },
    { q: "在很冷的地方，冬天会下什么？", a: "雪", choices: ["雪", "雨", "冰雹"], explain: "天气很冷时，水会结成白白的雪 xuě 飘下来，所以冷的地方冬天会下雪。" },
    { q: "天上的白色是什么？", a: "云", choices: ["云", "雪", "烟"], explain: "云 yún 是天上的小水珠聚在一起，一团团白白的飘着，所以天上白色的是云。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
  }));
}

function buildP2cCh3() {
  return shuffle([
    { q: "一年有几个月？", a: "十二个月", choices: ["十二个月", "十个月", "六个月"], explain: "一年 yì nián 从一月数到十二月，所以一年一共有十二个月。" },
    { q: "一个星期有几天？", a: "七天", choices: ["七天", "五天", "六天"], explain: "星期 xīng qī 从星期一数到星期日，所以一个星期有七天。" },
    { q: "一天有几个小时？", a: "二十四个小时", choices: ["二十四个小时", "十二个小时", "十个小时"], explain: "一天 yì tiān 包括白天和晚上，时钟转两圈，所以一天有二十四个小时。" },
    { q: "一个小时有几分钟？", a: "六十分钟", choices: ["六十分钟", "三十分钟", "一百分钟"], explain: "时钟的长针走一整圈是一小时，一圈正好六十格，所以一小时有六十分钟。" },
    { q: "早上我们做什么？", a: "起床上学", choices: ["起床上学", "睡觉", "吃晚饭"], explain: "早上 zǎo shang 天亮了，新的一天开始，所以我们起床、上学。" },
    { q: "晚上我们做什么？", a: "睡觉休息", choices: ["睡觉休息", "上学", "吃早饭"], explain: "晚上 wǎn shang 天黑了，忙了一天该休息，所以我们睡觉休息。" },
    { q: "中午我们通常做什么？", a: "吃午饭", choices: ["吃午饭", "睡觉", "上学"], explain: "中午 zhōng wǔ 是一天的正中间，肚子饿了，所以我们通常吃午饭。" },
    { q: "星期六和星期天叫什么？", a: "周末", choices: ["周末", "假期", "上学日"], explain: "一个星期的最后两天是星期六和星期天，叫周末 zhōu mò，可以休息不上学。" },
  ]).map((item) => ({
    question: item.q,
    answer: item.a,
    choices: shuffle([...item.choices]),
    explain: item.explain,
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
