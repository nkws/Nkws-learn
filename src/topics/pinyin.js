import { shuffle } from "../utils/helpers";
export const PINYIN_INTRO = {
  "py-6": {
    title: "声母 (j, q, x)",
    pages: [
      { text: "j, q, x 只和 i, ü 做朋友！比如 ji（鸡）, qi（七）, xi（西）。", emoji: "j q x + i ü" },
      { text: `j 像"鸡蛋"的"鸡"。q 像"七"。x 像"西瓜"的"西"。`, emoji: "j→鸡 q→七 x→西" },
    ],
  },
  "py-7": {
    title: "声母 (zh, ch, sh, r)",
    pages: [
      { text: "zh, ch, sh, r 是翘舌音——舌头要卷起来！", emoji: "👅 翘舌音" },
      { text: `zh 像"中国"的"中"。ch 像"吃"。sh 像"书"。r 像"热"。`, emoji: "zh→中 ch→吃 sh→书 r→热" },
    ],
  },
  "py-8": {
    title: "声母 (z, c, s)",
    pages: [
      { text: "z, c, s 是平舌音——舌头放平！", emoji: "👅 平舌音" },
      { text: `z 像"早"。c 像"草"。s 像"三"。注意不要和翘舌音 zh, ch, sh 搞混！`, emoji: "z→早 c→草 s→三" },
    ],
  },
  "py-9": {
    title: "复韵母 (ai, ei, ao, ou)",
    pages: [
      { text: "复韵母是两个韵母合在一起的音：ai, ei, ao, ou。", emoji: "a+i=ai" },
      { text: `ai 像"爱"。ei 像"北"。ao 像"好"。ou 像"口"。`, emoji: "ai→爱 ei→北 ao→好 ou→口" },
    ],
  },
  "py-10": {
    title: "鼻韵母 (an, en, ang, eng, ong)",
    pages: [
      { text: "鼻韵母的尾巴是 n 或 ng。an 和 ang 听起来不一样哦！", emoji: "n vs ng" },
      { text: `an 像"安"。en 像"人"。ang 像"方"。eng 像"灯"。ong 像"东"。`, emoji: "an→安 eng→灯 ong→东" },
    ],
  },
  "py-1": {
    title: "声母 (b, p, m, f)",
    pages: [
      { text: "汉语拼音帮助我们学习中文的发音！", emoji: "🗣️ 拼音" },
      { text: "声母是放在前面的音。比如 b, p, m, f。", emoji: "b  p  m  f" },
      { text: `b 像\u201C玻璃\u201D的\u201C玻\u201D。p 像\u201C泼水\u201D的\u201C泼\u201D。`, emoji: "b → 玻  p → 泼" },
      { text: `m 像\u201C妈妈\u201D的\u201C妈\u201D。f 像\u201C发现\u201D的\u201C发\u201D。`, emoji: "m → 妈  f → 发" },
      { text: "我们来练习吧！", emoji: "🦊 加油！💪" },
    ],
  },
};

function buildPy1() {
  return shuffle([
    { q: '"妈妈"的"妈"是哪个声母？', a: "m", choices: ["b", "m", "f"], explain: "声母是一个字开头的音。'妈'读 mā，开头的音是 m，所以声母是 m。" },
    { q: '"爸爸"的"爸"是哪个声母？', a: "b", choices: ["b", "p", "d"], explain: "声母是开头的音。'爸'读 bà，最前面的音是 b，所以声母是 b。" },
    { q: '"泼水"的"泼"是哪个声母？', a: "p", choices: ["p", "b", "f"], explain: "听一听开头的音。'泼'读 pō，要送一口气，开头是 p，所以声母是 p。" },
    { q: '"发现"的"发"是哪个声母？', a: "f", choices: ["f", "m", "p"], explain: "声母是开头的音。'发'读 fā，上牙咬下唇吹气，开头是 f，所以声母是 f。" },
    { q: '"玻璃"的"玻"是哪个声母？', a: "b", choices: ["b", "d", "p"], explain: "声母是开头的音。'玻'读 bō，双唇先闭起来，开头是 b，所以声母是 b。" },
    { q: '"蘑菇"的"蘑"是哪个声母？', a: "m", choices: ["m", "n", "f"], explain: "声母是开头的音。'蘑'读 mó，鼻子有声音，开头是 m，所以声母是 m。" },
    { q: '"佛山"的"佛"是哪个声母？', a: "f", choices: ["f", "b", "p"], explain: "声母是开头的音。'佛'读 fó，上牙碰下唇吹气，开头是 f，所以声母是 f。" },
    { q: '"瀑布"的"瀑"是哪个声母？', a: "p", choices: ["p", "b", "m"], explain: "声母是开头的音。'瀑'读 pù，要送一口气，开头是 p，所以声母是 p。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPy2() {
  return shuffle([
    { q: '"大家"的"大"是哪个声母？', a: "d", choices: ["d", "t", "n"], explain: "声母是开头的音。'大'读 dà，舌尖顶上牙不送气，开头是 d，所以声母是 d。" },
    { q: '"太阳"的"太"是哪个声母？', a: "t", choices: ["t", "d", "l"], explain: "声母是开头的音。'太'读 tài，舌尖顶上牙要送气，开头是 t，所以声母是 t。" },
    { q: '"你好"的"你"是哪个声母？', a: "n", choices: ["n", "l", "m"], explain: "声母是开头的音。'你'读 nǐ，鼻子里有声音，开头是 n，所以声母是 n。" },
    { q: '"老师"的"老"是哪个声母？', a: "l", choices: ["l", "n", "d"], explain: "声母是开头的音。'老'读 lǎo，舌尖轻轻碰上面，开头是 l，所以声母是 l。" },
    { q: '"弟弟"的"弟"是哪个声母？', a: "d", choices: ["d", "b", "t"], explain: "声母是开头的音。'弟'读 dì，舌尖顶上牙不送气，开头是 d，所以声母是 d。" },
    { q: '"天空"的"天"是哪个声母？', a: "t", choices: ["t", "d", "n"], explain: "声母是开头的音。'天'读 tiān，舌尖顶上牙送一口气，开头是 t，所以声母是 t。" },
    { q: '"牛奶"的"牛"是哪个声母？', a: "n", choices: ["n", "l", "m"], explain: "声母是开头的音。'牛'读 niú，鼻子里有声音，开头是 n，所以声母是 n。" },
    { q: '"蓝色"的"蓝"是哪个声母？', a: "l", choices: ["l", "n", "d"], explain: "声母是开头的音。'蓝'读 lán，舌尖轻碰上面流出气，开头是 l，所以声母是 l。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPy3() {
  return shuffle([
    { q: '"哥哥"的"哥"是哪个声母？', a: "g", choices: ["g", "k", "h"], explain: "声母是开头的音。'哥'读 gē，舌根抬起不送气，开头是 g，所以声母是 g。" },
    { q: '"开心"的"开"是哪个声母？', a: "k", choices: ["k", "g", "h"], explain: "声母是开头的音。'开'读 kāi，舌根抬起送一口气，开头是 k，所以声母是 k。" },
    { q: '"好的"的"好"是哪个声母？', a: "h", choices: ["h", "g", "k"], explain: "声母是开头的音。'好'读 hǎo，喉咙轻轻送气，开头是 h，所以声母是 h。" },
    { q: '"公园"的"公"是哪个声母？', a: "g", choices: ["g", "k", "h"], explain: "声母是开头的音。'公'读 gōng，舌根抬起不送气，开头是 g，所以声母是 g。" },
    { q: '"快乐"的"快"是哪个声母？', a: "k", choices: ["k", "g", "h"], explain: "声母是开头的音。'快'读 kuài，舌根抬起送一口气，开头是 k，所以声母是 k。" },
    { q: '"花朵"的"花"是哪个声母？', a: "h", choices: ["h", "k", "g"], explain: "声母是开头的音。'花'读 huā，喉咙轻轻吹气，开头是 h，所以声母是 h。" },
    { q: '"狗狗"的"狗"是哪个声母？', a: "g", choices: ["g", "h", "k"], explain: "声母是开头的音。'狗'读 gǒu，舌根抬起不送气，开头是 g，所以声母是 g。" },
    { q: '"喝水"的"喝"是哪个声母？', a: "h", choices: ["h", "g", "k"], explain: "声母是开头的音。'喝'读 hē，喉咙送出一点气，开头是 h，所以声母是 h。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPy4() {
  return shuffle([
    { q: '"啊"是哪个韵母？', a: "a", choices: ["a", "o", "e"], explain: "韵母是声母后面的音。'啊'读 a，嘴巴张得大大的，这个音就是韵母 a。" },
    { q: '"哦"是哪个韵母？', a: "o", choices: ["o", "a", "u"], explain: "韵母是后面的音。'哦'读 o，嘴巴圆圆的，这个音就是韵母 o。" },
    { q: '"鹅"是哪个韵母？', a: "e", choices: ["e", "a", "i"], explain: "韵母是后面的音。'鹅'读 e，嘴角往两边拉，这个音就是韵母 e。" },
    { q: '"衣服"的"衣"是哪个韵母？', a: "i", choices: ["i", "u", "ü"], explain: "韵母是后面的音。'衣'读 yi，嘴巴扁扁笑一笑，这个音就是韵母 i。" },
    { q: '"乌鸦"的"乌"是哪个韵母？', a: "u", choices: ["u", "i", "ü"], explain: "韵母是后面的音。'乌'读 wu，嘴巴撅成小圆，这个音就是韵母 u。" },
    { q: '"鱼"是哪个韵母？', a: "ü", choices: ["ü", "u", "i"], explain: "韵母是后面的音。'鱼'读 yu，嘴撅圆再说衣，这个音就是韵母 ü。" },
    { q: "ma 里面的韵母是什么？", a: "a", choices: ["a", "o", "e"], explain: "一个字分声母和韵母。ma 的声母是 m，后面剩下的 a 就是韵母。" },
    { q: "lu 里面的韵母是什么？", a: "u", choices: ["u", "i", "a"], explain: "一个字分声母和韵母。lu 的声母是 l，后面剩下的 u 就是韵母。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPy5() {
  return shuffle([
    { q: "第一声是怎样的？", a: "又高又平", choices: ["又高又平", "从低到高", "先降后升"], explain: "声调是字的高低变化。第一声像 mā，声音一直放在高高的地方，又高又平。" },
    { q: "第二声是怎样的？", a: "从低到高", choices: ["又高又平", "从低到高", "从高到低"], explain: "声调是字的高低变化。第二声像 má，声音往上走，所以是从低到高。" },
    { q: "第三声是怎样的？", a: "先降后升", choices: ["又高又平", "从高到低", "先降后升"], explain: "声调是字的高低变化。第三声像 mǎ，声音先往下再往上，所以是先降后升。" },
    { q: "第四声是怎样的？", a: "从高到低", choices: ["从低到高", "从高到低", "先降后升"], explain: "声调是字的高低变化。第四声像 mà，声音一下子往下掉，所以是从高到低。" },
    { q: "mā 是第几声？", a: "第一声", choices: ["第一声", "第二声", "第三声"], explain: "看字上的调号。mā 的帽子是一横，又高又平，这是第一声。" },
    { q: "má 是第几声？", a: "第二声", choices: ["第一声", "第二声", "第四声"], explain: "看字上的调号。má 的帽子往上斜，声音往上走，这是第二声。" },
    { q: "mǎ 是第几声？", a: "第三声", choices: ["第二声", "第三声", "第四声"], explain: "看字上的调号。mǎ 的帽子像小弯弯，先降后升，这是第三声。" },
    { q: "mà 是第几声？", a: "第四声", choices: ["第一声", "第三声", "第四声"], explain: "看字上的调号。mà 的帽子往下斜，声音往下掉，这是第四声。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

// ⚠️ CHINESE CONTENT — flagged for manual validation of pinyin associations

function buildPy6() {
  return shuffle([
    { q: '"家"的"家"是哪个声母？', a: "j", choices: ["j", "g", "z"], explain: "j q x 只和 i、ü 做朋友。'家'读 jiā，舌面靠前不送气，开头是 j。" },
    { q: '"七"的"七"是哪个声母？', a: "q", choices: ["q", "k", "c"], explain: "j q x 只和 i、ü 做朋友。'七'读 qī，舌面靠前送一口气，开头是 q。" },
    { q: '"学校"的"学"是哪个声母？', a: "x", choices: ["x", "s", "sh"], explain: "j q x 只和 i、ü 做朋友。'学'读 xué，舌面靠前轻吹气，开头是 x。" },
    { q: '"鸡蛋"的"鸡"是哪个声母？', a: "j", choices: ["j", "q", "z"], explain: "j q x 只和 i、ü 做朋友。'鸡'读 jī，舌面靠前不送气，开头是 j。" },
    { q: '"去"是哪个声母？', a: "q", choices: ["q", "k", "g"], explain: "j q x 只和 i、ü 做朋友。'去'读 qù，舌面靠前送一口气，开头是 q。" },
    { q: '"小"是哪个声母？', a: "x", choices: ["x", "s", "sh"], explain: "j q x 只和 i、ü 做朋友。'小'读 xiǎo，舌面靠前轻轻吹气，开头是 x。" },
    { q: '"姐姐"的"姐"是哪个声母？', a: "j", choices: ["j", "z", "q"], explain: "j q x 只和 i、ü 做朋友。'姐'读 jiě，舌面靠前不送气，开头是 j。" },
    { q: '"铅笔"的"铅"是哪个声母？', a: "q", choices: ["q", "j", "k"], explain: "j q x 只和 i、ü 做朋友。'铅'读 qiān，舌面靠前送一口气，开头是 q。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPy7() {
  return shuffle([
    { q: '"中国"的"中"是哪个声母？', a: "zh", choices: ["zh", "z", "ch"], explain: "zh ch sh r 是翘舌音，舌头要卷起来。'中'读 zhōng，开头是 zh。" },
    { q: '"吃饭"的"吃"是哪个声母？', a: "ch", choices: ["ch", "c", "sh"], explain: "zh ch sh r 是翘舌音，舌头卷起来送气。'吃'读 chī，开头是 ch。" },
    { q: '"是"的"是"是哪个声母？', a: "sh", choices: ["sh", "s", "zh"], explain: "zh ch sh r 是翘舌音，舌头卷起轻吹气。'是'读 shì，开头是 sh。" },
    { q: '"人"是哪个声母？', a: "r", choices: ["r", "l", "n"], explain: "zh ch sh r 是翘舌音，舌头卷起来。'人'读 rén，舌头卷着出声，开头是 r。" },
    { q: '"知道"的"知"是哪个声母？', a: "zh", choices: ["zh", "z", "sh"], explain: "zh ch sh r 是翘舌音，舌头要卷起来。'知'读 zhī，开头是 zh。" },
    { q: '"车"是哪个声母？', a: "ch", choices: ["ch", "c", "zh"], explain: "zh ch sh r 是翘舌音，舌头卷起来送气。'车'读 chē，开头是 ch。" },
    { q: '"书"是哪个声母？', a: "sh", choices: ["sh", "s", "ch"], explain: "zh ch sh r 是翘舌音，舌头卷起轻吹气。'书'读 shū，开头是 sh。" },
    { q: '"热"是哪个声母？', a: "r", choices: ["r", "l", "sh"], explain: "zh ch sh r 是翘舌音，舌头要卷起来。'热'读 rè，舌头卷着出声，开头是 r。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPy8() {
  return shuffle([
    { q: '"早上"的"早"是哪个声母？', a: "z", choices: ["z", "zh", "c"], explain: "z c s 是平舌音，舌头要放平。'早'读 zǎo，舌头放平不送气，开头是 z。" },
    { q: '"草地"的"草"是哪个声母？', a: "c", choices: ["c", "ch", "s"], explain: "z c s 是平舌音，舌头要放平。'草'读 cǎo，舌头放平送一口气，开头是 c。" },
    { q: '"四"的"四"是哪个声母？', a: "s", choices: ["s", "sh", "z"], explain: "z c s 是平舌音，舌头要放平。'四'读 sì，舌头放平轻轻吹气，开头是 s。" },
    { q: '"做"是哪个声母？', a: "z", choices: ["z", "zh", "s"], explain: "z c s 是平舌音，舌头要放平。'做'读 zuò，舌头放平不送气，开头是 z。" },
    { q: '"从"是哪个声母？', a: "c", choices: ["c", "ch", "z"], explain: "z c s 是平舌音，舌头要放平。'从'读 cóng，舌头放平送一口气，开头是 c。" },
    { q: '"三"是哪个声母？', a: "s", choices: ["s", "sh", "c"], explain: "z c s 是平舌音，舌头要放平。'三'读 sān，舌头放平轻轻吹气，开头是 s。" },
    { q: '"字"是哪个声母？', a: "z", choices: ["z", "c", "zh"], explain: "z c s 是平舌音，舌头要放平。'字'读 zì，舌头放平不送气，开头是 z。" },
    { q: '"色"是哪个声母？', a: "s", choices: ["s", "c", "sh"], explain: "z c s 是平舌音，舌头要放平。'色'读 sè，舌头放平轻轻吹气，开头是 s。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPy9() {
  return shuffle([
    { q: '"爱"的韵母是什么？', a: "ai", choices: ["ai", "ei", "ao"], explain: "复韵母是两个音连在一起。'爱'读 ài，由 a 滑到 i，合起来的韵母是 ai。" },
    { q: '"北"的韵母是什么？', a: "ei", choices: ["ei", "ai", "ou"], explain: "复韵母是两个音连在一起。'北'读 běi，由 e 滑到 i，合起来的韵母是 ei。" },
    { q: '"好"的韵母是什么？', a: "ao", choices: ["ao", "ou", "ai"], explain: "复韵母是两个音连在一起。'好'读 hǎo，由 a 滑到 o，合起来的韵母是 ao。" },
    { q: '"口"的韵母是什么？', a: "ou", choices: ["ou", "ao", "ei"], explain: "复韵母是两个音连在一起。'口'读 kǒu，由 o 滑到 u，合起来的韵母是 ou。" },
    { q: "bai 里面的韵母是什么？", a: "ai", choices: ["ai", "a", "ei"], explain: "先拿掉声母再看后面。bai 的声母是 b，剩下的 ai 是复韵母，不只是 a。" },
    { q: "mei 里面的韵母是什么？", a: "ei", choices: ["ei", "ai", "e"], explain: "先拿掉声母再看后面。mei 的声母是 m，剩下的 ei 是复韵母，不只是 e。" },
    { q: "hao 里面的韵母是什么？", a: "ao", choices: ["ao", "a", "ou"], explain: "先拿掉声母再看后面。hao 的声母是 h，剩下的 ao 是复韵母，不只是 a。" },
    { q: "dou 里面的韵母是什么？", a: "ou", choices: ["ou", "o", "ao"], explain: "先拿掉声母再看后面。dou 的声母是 d，剩下的 ou 是复韵母，不只是 o。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

function buildPy10() {
  return shuffle([
    { q: '"安"的韵母是什么？', a: "an", choices: ["an", "ang", "en"], explain: "鼻韵母的尾巴是 n 或 ng。'安'读 ān，尾巴是 n 不是 ng，所以韵母是 an。" },
    { q: '"灯"的韵母是什么？', a: "eng", choices: ["eng", "en", "ang"], explain: "鼻韵母的尾巴是 n 或 ng。'灯'读 dēng，尾巴是 ng，所以韵母是 eng。" },
    { q: '"人"的韵母是什么？', a: "en", choices: ["en", "an", "eng"], explain: "鼻韵母的尾巴是 n 或 ng。'人'读 rén，尾巴是 n 不是 ng，所以韵母是 en。" },
    { q: '"东"的韵母是什么？', a: "ong", choices: ["ong", "eng", "ang"], explain: "鼻韵母的尾巴是 n 或 ng。'东'读 dōng，嘴巴圆圆带 ng，所以韵母是 ong。" },
    { q: '"方"的韵母是什么？', a: "ang", choices: ["ang", "an", "eng"], explain: "鼻韵母的尾巴是 n 或 ng。'方'读 fāng，尾巴是 ng 不是 n，所以韵母是 ang。" },
    { q: "ban 里面的韵母是什么？", a: "an", choices: ["an", "a", "ang"], explain: "先拿掉声母再看尾巴。ban 的声母是 b，剩下 an，尾巴是 n 不是 ng。" },
    { q: "feng 里面的韵母是什么？", a: "eng", choices: ["eng", "en", "ong"], explain: "先拿掉声母再看尾巴。feng 的声母是 f，剩下 eng，尾巴是 ng 不是 n。" },
    { q: "dong 里面的韵母是什么？", a: "ong", choices: ["ong", "ou", "eng"], explain: "先拿掉声母再看尾巴。dong 的声母是 d，剩下 ong，嘴巴圆圆带 ng。" },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "py-1": buildPy1, "py-2": buildPy2, "py-3": buildPy3, "py-4": buildPy4, "py-5": buildPy5, "py-6": buildPy6, "py-7": buildPy7, "py-8": buildPy8, "py-9": buildPy9, "py-10": buildPy10 };
export const PINYIN_QUESTION_COUNTS = { "py-1": 8, "py-2": 8, "py-3": 8, "py-4": 8, "py-5": 8, "py-6": 8, "py-7": 8, "py-8": 8, "py-9": 8, "py-10": 8 };
export function buildPinyinQuestions(moduleId) { return BUILDERS[moduleId]?.() || []; }
