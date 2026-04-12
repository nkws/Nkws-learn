import { shuffle } from "../utils/helpers";
function nearbyWrongs(correct, min = 0, max = 20, count = 2) {
  const wrongs = new Set();
  for (const off of shuffle([-1, 1, -2, 2, -3, 3])) {
    if (wrongs.size >= count) break;
    const f = correct + off;
    if (f >= min && f <= max && f !== correct) wrongs.add(f);
  }
  return [...wrongs];
}

function addQ(a, b) {
  const ans = a + b;
  const w = nearbyWrongs(ans);
  return { question: `What is ${a} + ${b}?`, answer: String(ans), choices: shuffle([String(ans), String(w[0]), String(w[1])]) };
}

function subQ(a, b) {
  const ans = a - b;
  const w = nearbyWrongs(ans);
  return { question: `What is ${a} - ${b}?`, answer: String(ans), choices: shuffle([String(ans), String(w[0]), String(w[1])]) };
}

function buildAS1() {
  // Addition within 20 (no regrouping focus)
  const qs = [];
  const pairs = [[10,1],[10,5],[10,9],[11,2],[11,5],[12,3],[12,7],[13,4],[14,5],[11,8],[13,6],[15,4]];
  for (const [a, b] of shuffle(pairs).slice(0, 12)) {
    if (a + b <= 20) qs.push(addQ(a, b));
  }
  return qs;
}

function buildAS2() {
  // Subtraction within 20
  const qs = [];
  const pairs = [[11,1],[13,3],[15,5],[17,7],[20,10],[18,8],[14,4],[16,6],[19,9],[12,2],[20,5],[15,3]];
  for (const [a, b] of shuffle(pairs).slice(0, 12)) {
    qs.push(subQ(a, b));
  }
  return qs;
}

function buildAS3() {
  // Addition word problems
  return shuffle([
    { q: "You have 8 stickers. You get 5 more. How many now?", a: "13" },
    { q: "There are 7 birds. 6 more come. How many birds?", a: "13" },
    { q: "You read 9 pages. Then you read 4 more. How many total?", a: "13" },
    { q: "There are 11 apples. You add 3. How many?", a: "14" },
    { q: "You have 6 toys. You get 8 more. How many now?", a: "14" },
    { q: "There are 12 children. 5 more join. How many?", a: "17" },
    { q: "You score 10 points, then 7 more. Total?", a: "17" },
    { q: "There are 9 fish. 9 more swim in. How many?", a: "18" },
    { q: "You have 11 cards. You find 4 more. How many?", a: "15" },
    { q: "There are 8 chairs. We add 8 more. How many?", a: "16" },
  ]).map((item) => {
    const w = nearbyWrongs(Number(item.a));
    return { question: item.q, answer: item.a, choices: shuffle([item.a, String(w[0]), String(w[1])]) };
  });
}

function buildAS4() {
  // Subtraction word problems
  return shuffle([
    { q: "You have 15 sweets. You eat 5. How many left?", a: "10" },
    { q: "There are 18 balloons. 8 pop. How many left?", a: "10" },
    { q: "You have 14 stickers. You give away 4. How many?", a: "10" },
    { q: "There are 20 children. 7 go home. How many left?", a: "13" },
    { q: "You have 16 crayons. You lose 3. How many left?", a: "13" },
    { q: "There are 17 cookies. You eat 5. How many left?", a: "12" },
    { q: "You have 19 marbles. You give 6 away. How many?", a: "13" },
    { q: "There are 13 birds. 3 fly away. How many left?", a: "10" },
    { q: "You have 12 pencils. You break 2. How many left?", a: "10" },
    { q: "There are 20 stars. 10 disappear. How many left?", a: "10" },
  ]).map((item) => {
    const w = nearbyWrongs(Number(item.a));
    return { question: item.q, answer: item.a, choices: shuffle([item.a, String(w[0]), String(w[1])]) };
  });
}

function buildAS5() {
  // Mixed
  const qs = [];
  const used = new Set();
  while (qs.length < 12) {
    const isAdd = Math.random() > 0.5;
    if (isAdd) {
      const a = Math.floor(Math.random() * 11) + 5;
      const b = Math.floor(Math.random() * (20 - a + 1));
      const key = `${a}+${b}`;
      if (used.has(key)) continue;
      used.add(key);
      qs.push(addQ(a, b));
    } else {
      const a = Math.floor(Math.random() * 11) + 10;
      const b = Math.floor(Math.random() * (a - 9)) + 1;
      const key = `${a}-${b}`;
      if (used.has(key)) continue;
      used.add(key);
      qs.push(subQ(a, b));
    }
  }
  return shuffle(qs);
}

const BUILDERS = {
  "as20-1": buildAS1, "as20-2": buildAS2, "as20-3": buildAS3,
  "as20-4": buildAS4, "as20-5": buildAS5,
};

export const ADDSUB20_QUESTION_COUNTS = {
  "as20-1": 12, "as20-2": 12, "as20-3": 10, "as20-4": 10, "as20-5": 12,
};

export function buildAddSub20Questions(moduleId) {
  return BUILDERS[moduleId]?.() || [];
}
