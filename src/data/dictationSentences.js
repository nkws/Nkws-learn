// 句子听写 — sentence-dictation carrier sentences, grounded in the MOE P1 生字表.
// The whole sentence is read aloud; on screen the target word(s) are shown either
// blanked (写汉字 — hear & write the character, no pinyin cue) or underlined
// (写拼音 — write the character's hanyu pinyin). Human-authored, fixed content.
//
// Marker: 【字|pīnyīn】 — the character to practise and its context-correct pinyin.
// A sentence may contain MORE THAN ONE marker (multi-blank), like the school's
// 公__(yuán) 学__(xí). P1 tone-sandhi characters (一/不/七) use the citation tone;
// reduplicated kinship words (爸爸, 弟弟 …) are blanked as the whole word.
// Scope: 华文 P1, lessons L1–L19 (complete), plus weekly mixed papers.
export const DICTATION = {
  "hw-p1": {
    L1: ["我有【一|yī】只小猫。", "一加一等于【二|èr】。", "我今年【五|wǔ】岁。", "哥哥开【口|kǒu】唱歌。", "他是个好【人|rén】。"],
    L2: ["大树是【木|mù】头做的。", "小花种在【土|tǔ】里。", "我有【八|bā】个气球。", "弟弟【也|yě】要去。", "我【不|bù】爱吃糖。", "她是【女|nǚ】生。", "他是爸爸的【儿|ér】子。"],
    L3: ["他很用【力|lì】。", "田里的【禾|hé】苗很绿。", "你有【几|jǐ】本书？", "一个星期有【七|qī】天。", "我有三【个|gè】苹果。", "这个【可|kě】以吃。", "我要【去|qù】学校。"],
    L4: ["今天是星期【日|rì】。", "桌【子|zi】上有书。", "爸爸会开【车|chē】。", "我有【四|sì】本书。", "五加五等于【十|shí】。", "我坐【巴|bā】士上学。", "我坐巴【士|shì】回家。", "我有一【只|zhī】小狗。"],
    L5: ["我们去爬【山|shān】。", "草地上有小【羊|yáng】。", "小猫的【毛|máo】是白的。", "他姓【王|wáng】。", "我有【三|sān】个球。", "我在看【书|shū】。", "【早|zǎo】上好！", "中【午|wǔ】我们吃饭。"],
    L6: ["农夫在【田|tián】里工作。", "用【刀|dāo】要小心。", "妈妈【在|zài】家里。", "书【上|shàng】有图画。", "太阳【下|xià】山了。", "这个西瓜很【大|dà】。", "小老鼠很【小|xiǎo】。", "请你过【来|lái】。"],
    L7: ["请【开|kāi】门。", "【火|huǒ】很热。", "请【关|guān】灯。", "我有【两|liǎng】只手。", "这条路很【长|cháng】。", "【广|guǎng】场很大。", "天上有很【多|duō】星星。", "我的糖很【少|shǎo】。"],
    L8: ["电视节【目|mù】很好看。", "我有两只【手|shǒu】。", "这【本|běn】书很好。", "爸爸去【工|gōng】作。", "请关好【门|mén】。", "明天【见|jiàn】！", "他【又|yòu】来了。", "我的【头|tóu】有点痛。"],
    L9: ["农场里有一头【牛|niú】。", "沙滩上有美丽的【贝|bèi】壳。", "现在是【六|liù】点。", "我有一【支|zhī】笔。", "六加三等于【九|jiǔ】。", "你在做【什|shén】么？", "你喜欢什【么|me】？", "我在学中【文|wén】。"],
    L10: ["一年有十二个【月|yuè】。", "鸟儿在【天|tiān】上飞。", "我口渴想喝【水|shuǐ】。", "这条鱼有十【寸|cùn】长。", "请你坐【正|zhèng】。", "他把衣服穿【反|fǎn】了。", "天上有【白|bái】云。", "这座桥很【古|gǔ】老。"],
    L11: ["请排在我【后|hòu】面。", "请往【左|zuǒ】转。", "请举起【右|yòu】手。", "他坐在【中|zhōng】间。", "房【间|jiān】里有一张床。", "前【面|miàn】有一棵树。", "这是我【的|de】铅笔。", "他是我的【同|tóng】学。", "我爱上【学|xué】。", "墙上挂着一幅【画|huà】。", "放学我就【回|huí】家。"],
    L12: ["我背着书【包|bāo】。", "现在是两点【半|bàn】。", "这支笔五【元|yuán】钱。", "我喜欢【吃|chī】苹果。", "衣服晒【干|gān】了。", "弟弟爱吃【肉|ròu】。", "叶子上有一条【虫|chóng】。", "【今|jīn】天是晴天。", "我们用【米|mǐ】煮饭。", "我爱吃红【豆|dòu】。"],
    L13: ["写字要【用|yòng】力。", "睡前要刷【牙|yá】。", "妈妈给我一条毛【巾|jīn】。", "你可【以|yǐ】进来。", "我【要|yào】喝水。", "太阳从【东|dōng】方升起。", "我买了东【西|xī】。", "下【雨|yǔ】了，快回家。", "草原上有一匹【马|mǎ】。", "请你【先|xiān】走。", "现在是三【点|diǎn】。"],
    L14: ["这【是|shì】我的书。", "香蕉【皮|pí】别乱丢。", "天冷要穿【衣|yī】服。", "我【和|hé】弟弟玩。", "妈妈在家【里|lǐ】。", "我用【尺|chǐ】画线。", "书要【还|hái】给老师。", "我【自|zì】己会做。", "我自【己|jǐ】来。", "今天天气真【好|hǎo】。"],
    L15: ["今天是我的【生|shēng】日。", "我爱吃水【果|guǒ】。", "我想喝果【汁|zhī】。", "妈妈去【买|mǎi】菜。", "这些苹果两【斤|jīn】。", "小猫饿了，喂【它|tā】吃饭。", "这件事不好【办|bàn】。", "我想到一个办【法|fǎ】。", "我在【看|kàn】书。"],
    L16: ["这是我的【父|fù】亲。", "她是我的【母|mǔ】亲。", "【她|tā】是我妹妹。", "【他|tā】是我弟弟。", "我【会|huì】骑自行车。", "请问【你|nǐ】叫什么名字？", "我【们|men】一起去玩。", "【爸爸|bàba】下班回家了。", "【妈妈|māma】在厨房做饭。", "哥哥在【打|dǎ】篮球。"],
    L17: ["【昨|zuó】天我去了公园。", "【明|míng】天是星期六。", "请把书【给|gěi】我。", "他跑得很【快|kuài】。", "祝你生日快【乐|lè】！", "我【没|méi】有铅笔。", "我【有|yǒu】一本书。", "【这|zhè】是我的位子。", "【老|lǎo】师在上课。", "老【师|shī】在讲故事。", "我【每|měi】天都刷牙。"],
    L18: ["小猫的【爪|zhuǎ】子很可爱。", "铅笔很【尖|jiān】。", "今天天【气|qì】真好。", "我喜欢【玩|wán】游戏。", "【我|wǒ】是小学生。", "【弟弟|dìdi】在睡觉。", "【妹妹|mèimei】很可爱。", "请【站|zhàn】起来。", "妈妈【叫|jiào】我回家。", "下课了，【再|zài】见！"],
    L19: ["我们去【公|gōng】园玩。", "我们去公【园|yuán】玩。", "【姐姐|jiějie】在看书。", "【哥哥|gēge】在踢球。", "我要认真学【习|xí】。", "我每天七点【起|qǐ】床。", "我【到|dào】学校了。", "这棵树很【高|gāo】。", "他高【兴|xìng】得跳起来。", "做事要用【心|xīn】。"],
  },
};

// Weekly-style mixed papers (like the school's 听写（十三）/（十四）). Some sentences
// have two blanks, to practise the multi-blank format.
export const WEEKLY = {
  "hw-p1": [
    {
      id: "wk-hw-p1-1", label: "小一 华文 · 听写练习（一）",
      sentences: ["他是个好【人|rén】。", "我【不|bù】爱吃糖。", "我要【去|qù】学校。", "我坐巴【士|shì】回家。", "我在看【书|shū】。", "妈妈【在|zài】家里。", "这条路很【长|cháng】。", "我有【两|liǎng】只小【羊|yáng】。"],
    },
    {
      id: "wk-hw-p1-2", label: "小一 华文 · 听写练习（二）",
      sentences: ["哥哥开【口|kǒu】唱歌。", "她是【女|nǚ】生。", "你有【几|jǐ】本书？", "爸爸会开【车|chē】。", "【早|zǎo】上我去爬【山|shān】。", "太阳【下|xià】山了。", "请【关|guān】灯。", "爸爸去【工|gōng】作。"],
    },
  ],
};

const MARK = /【([^|】]+)\|?([^】]*)】/g;

// Parse a marked sentence into segments and blanks. Supports multiple blanks.
//   full   — the sentence read aloud (no markers)
//   segs   — [{ t:"text", text } | { t:"blank", ch, py, i }] in order
//   blanks — [{ ch, py }] in order
export function parseCloze(s) {
  const str = String(s);
  const segs = [];
  const blanks = [];
  let full = "";
  let last = 0;
  let m;
  MARK.lastIndex = 0;
  while ((m = MARK.exec(str))) {
    const text = str.slice(last, m.index);
    if (text) { segs.push({ t: "text", text }); full += text; }
    const ch = m[1];
    const py = m[2] || "";
    segs.push({ t: "blank", ch, py, i: blanks.length });
    blanks.push({ ch, py });
    full += ch;
    last = m.index + m[0].length;
  }
  const tail = str.slice(last);
  if (tail) { segs.push({ t: "text", text: tail }); full += tail; }
  if (!blanks.length) return { full: str, segs: [{ t: "text", text: str }], blanks: [] };
  return { full, segs, blanks };
}

export function dictationLessons(syllabusId) {
  const g = DICTATION[syllabusId];
  if (!g) return [];
  return Object.keys(g).map((tag) => ({ tag, count: g[tag].length }));
}

export function dictationItems(syllabusId, tag) {
  const g = DICTATION[syllabusId];
  if (!g) return [];
  const src = tag ? g[tag] || [] : Object.values(g).flat();
  return src.map(parseCloze);
}

export function weeklyPapers(syllabusId) {
  return (WEEKLY[syllabusId] || []).map((p) => ({ ...p, count: p.sentences.length }));
}

export function weeklyItems(paperId) {
  for (const arr of Object.values(WEEKLY)) {
    const p = arr.find((x) => x.id === paperId);
    if (p) return p.sentences.map(parseCloze);
  }
  return [];
}
