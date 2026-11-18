// 句子听写 — sentence-dictation carrier sentences, grounded in the MOE P1 生字表.
// The whole sentence is read aloud; on screen it is shown with the target word
// either blanked (写汉字 — hear & write the character, no pinyin cue) or
// underlined (写拼音 — write the character's hanyu pinyin). Human-authored, saved
// as fixed content — no live AI.
//
// Marker format: 【字|pīnyīn】 — the character to practise and its context-correct
// pinyin (tone marks). P1 tone-sandhi characters (一/不/七) use the citation tone
// the child is taught. Scope so far: 华文 P1, lessons L1–L8.
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
  },
};

// Weekly-style mixed papers (like the school's 听写（十三）/（十四）): each draws
// from several recent lessons. Hand-curated.
export const WEEKLY = {
  "hw-p1": [
    {
      id: "wk-hw-p1-1", label: "小一 华文 · 听写练习（一）",
      sentences: ["他是个好【人|rén】。", "我【不|bù】爱吃糖。", "我要【去|qù】学校。", "我坐巴【士|shì】回家。", "我在看【书|shū】。", "妈妈【在|zài】家里。", "这条路很【长|cháng】。", "我的【头|tóu】有点痛。"],
    },
    {
      id: "wk-hw-p1-2", label: "小一 华文 · 听写练习（二）",
      sentences: ["哥哥开【口|kǒu】唱歌。", "她是【女|nǚ】生。", "你有【几|jǐ】本书？", "爸爸会开【车|chē】。", "我们去爬【山|shān】。", "太阳【下|xià】山了。", "请【关|guān】灯。", "爸爸去【工|gōng】作。"],
    },
  ],
};

const MARK = /【([^|】]+)\|?([^】]*)】/;

// Turn a marked sentence into the pieces the UI needs.
export function parseCloze(s) {
  const m = String(s).match(MARK);
  if (!m) return { full: s, before: s, answer: "", after: "", py: "" };
  const answer = m[1];
  const py = m[2] || "";
  const before = s.slice(0, m.index);
  const after = s.slice(m.index + m[0].length);
  return { full: before + answer + after, before, answer, after, py };
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
