// 句子听写 — sentence-dictation carrier sentences, grounded in the MOE P1 生字表.
// Each syllabus lesson has short, P1-level sentences; the character in 【...】 is
// the blank the child fills in. The WHOLE sentence is read aloud (brackets
// removed); the sentence is printed on screen with a blank where the bracketed
// word goes. Human-authored, saved as fixed content — no live AI.
//
// Scope so far: 华文 P1, lessons L1–L8 (one target character per sentence, the
// 识写字 for that lesson). Extend lesson by lesson, and to 高级华文 / other levels,
// using the same shape.
export const DICTATION = {
  "hw-p1": {
    L1: [
      "我有【一】只小猫。",
      "一加一等于【二】。",
      "我今年【五】岁。",
      "哥哥开【口】唱歌。",
      "他是个好【人】。",
    ],
    L2: [
      "大树是【木】头做的。",
      "小花种在【土】里。",
      "我有【八】个气球。",
      "弟弟【也】要去。",
      "我【不】爱吃糖。",
      "她是【女】生。",
      "他是爸爸的【儿】子。",
    ],
    L3: [
      "他很用【力】。",
      "田里的【禾】苗很绿。",
      "你有【几】本书？",
      "一个星期有【七】天。",
      "我有三【个】苹果。",
      "这个【可】以吃。",
      "我要【去】学校。",
    ],
    L4: [
      "今天是星期【日】。",
      "桌【子】上有书。",
      "爸爸会开【车】。",
      "我有【四】本书。",
      "五加五等于【十】。",
      "我坐【巴】士上学。",
      "我坐巴【士】回家。",
      "我有一【只】小狗。",
    ],
    L5: [
      "我们去爬【山】。",
      "草地上有小【羊】。",
      "小猫的【毛】是白的。",
      "他姓【王】。",
      "我有【三】个球。",
      "我在看【书】。",
      "【早】上好！",
      "中【午】我们吃饭。",
    ],
    L6: [
      "农夫在【田】里工作。",
      "用【刀】要小心。",
      "妈妈【在】家里。",
      "书【上】有图画。",
      "太阳【下】山了。",
      "这个西瓜很【大】。",
      "小老鼠很【小】。",
      "请你过【来】。",
    ],
    L7: [
      "请【开】门。",
      "【火】很热。",
      "请【关】灯。",
      "我有【两】只手。",
      "这条路很【长】。",
      "【广】场很大。",
      "天上有很【多】星星。",
      "我的糖很【少】。",
    ],
    L8: [
      "电视节【目】很好看。",
      "我有两只【手】。",
      "这【本】书很好。",
      "爸爸去【工】作。",
      "请关好【门】。",
      "明天【见】！",
      "他【又】来了。",
      "我的【头】有点痛。",
    ],
  },
};

const MARK = /【([^】]+)】/;

// Turn a marked sentence into the pieces the UI needs.
export function parseCloze(s) {
  const m = String(s).match(MARK);
  if (!m) return { full: s, before: s, answer: "", after: "" };
  const answer = m[1];
  const before = s.slice(0, m.index);
  const after = s.slice(m.index + m[0].length);
  return { full: before + answer + after, before, answer, after };
}

// Lessons available for a syllabus id, in order.
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
