import { useMemo, useState, useCallback } from "react";
import { useTTS } from "../hooks/useSpeech";
import { useListeningProgress } from "../hooks/useListeningProgress";
import { SYLLABI, syllabusById } from "../data/writingSyllabi";
import { DICTATION, dictationLessons, dictationItems, weeklyPapers, weeklyItems } from "../data/dictationSentences";
import SentenceWritePad from "../components/SentenceWritePad";
import StrokeDemoLine from "../components/StrokeDemoLine";
import PracticeCanvas from "../components/PracticeCanvas";

// 听力 · 句子听写 — Chinese sentence dictation, P1 first, from the MOE 生字表.
// The whole sentence is read aloud. 写汉字 fills the blank character (listening
// only, no pinyin cue); 写拼音 shows the character underlined and the child
// writes its hanyu pinyin. These are SEPARATE exercises (chosen in the library),
// each with its own completion. Writing is self-checked. ZERO live AI.
const PHASE = { LIBRARY: "library", PRACTICE: "practice", DONE: "done", REFERENCE: "reference" };
const P1_SYLLABI = SYLLABI.filter((s) => s.levelNum === 1);

const isCJK = (ch) => /[一-鿿]/.test(ch);
const PUNCT = /[。，、；：！？·…—“”‘’""''（）()《》〈〉【】]/;
const tokensOf = (s) =>
  [...String(s)]
    .map((ch) => (isCJK(ch) ? { t: "c", ch } : PUNCT.test(ch) ? { t: "p", ch } : null))
    .filter(Boolean);

const clozeItem = (c) => ({ word: c.blanks.map((b) => b.ch).join(""), segs: c.segs, blanks: c.blanks, sentence: c.full });

const DICT_SYLLABI = Object.keys(DICTATION);
const cellFor = (n) => (n <= 2 ? 132 : n <= 4 ? 116 : 104);
const CIRC = ["①", "②", "③", "④", "⑤", "⑥"];

function cnNum(n) {
  const d = "零一二三四五六七八九";
  if (n <= 10) return n === 10 ? "十" : d[n];
  if (n < 20) return "十" + (n % 10 ? d[n % 10] : "");
  const t = Math.floor(n / 10), o = n % 10;
  return d[t] + "十" + (o ? d[o] : "");
}
const lessonName = (tag) => `第${cnNum(parseInt(String(tag).replace(/\D/g, ""), 10) || 0)}课`;
const modeLabel = (mode) => (mode === "pinyin" ? "写拼音" : "写汉字");

export default function ListeningScreen({ activeChild, onBack }) {
  const { speak, unlock } = useTTS("zh");
  const { markComplete, resetOne, resetAll, statusOf, doneCount } = useListeningProgress(activeChild?.id);

  const [phase, setPhase] = useState(PHASE.LIBRARY);
  const [sessionId, setSessionId] = useState(null);
  const [manage, setManage] = useState(false);
  const [dictType, setDictType] = useState("hanzi"); // 写汉字 vs 写拼音 (separate exercises)

  const [sessionTitle, setSessionTitle] = useState("");
  const [dictMode, setDictMode] = useState("hanzi");
  const [playItems, setPlayItems] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [played, setPlayed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const current = playItems[qIndex] || null;
  const isLast = qIndex >= playItems.length - 1;
  const answerTokens = useMemo(() => tokensOf(current?.word || ""), [current]);
  const pinyinMode = dictMode === "pinyin";
  const multi = !!current?.blanks && current.blanks.length > 1;

  const beginSession = useCallback((id, title, normItems, mode) => {
    if (!normItems.length) return;
    unlock();
    setSessionId(id); setSessionTitle(title); setDictMode(mode); setPlayItems(normItems);
    setQIndex(0); setRevealed(false); setScore(0); setPlayed(false); setAttempt((a) => a + 1); setPhase(PHASE.PRACTICE);
  }, [unlock]);

  const startDictation = (syllId, tag, mode) => {
    const label = syllabusById(syllId)?.label || "听写";
    beginSession(`dict:${syllId}:${tag}:${mode}`, `${label} · ${lessonName(tag)} · ${modeLabel(mode)}`, dictationItems(syllId, tag).map(clozeItem), mode);
  };
  const startWeekly = (paper, mode) => beginSession(`${paper.id}:${mode}`, `${paper.label} · ${modeLabel(mode)}`, weeklyItems(paper.id).map(clozeItem), mode);

  const playCurrent = () => { if (!current) return; setPlayed(true); speak(current.sentence); };
  const goNext = (finalScore) => {
    if (isLast) { markComplete(sessionId, finalScore, playItems.length); setPhase(PHASE.DONE); return; }
    setQIndex((i) => i + 1); setRevealed(false); setPlayed(false); setAttempt((a) => a + 1);
  };
  const selfCheck = (ok) => { const finalScore = ok ? score + 1 : score; if (ok) setScore(finalScore); goNext(finalScore); };

  const launchTap = (id, launch) => (manage && statusOf(id) ? () => resetOne(id) : launch);
  const doneClass = (id) => { const st = statusOf(id); return st ? ` lc-${st}${manage ? " lc-resettable" : ""}` : ""; };

  const onTopBack = () => { if (phase === PHASE.LIBRARY) onBack(); else setPhase(PHASE.LIBRARY); };

  const selfCheckBlock = (
    <div className="lc-selfcheck">
      <span className="lc-selfcheck-q">写对了吗？</span>
      <button className="lc-self-yes" onClick={() => selfCheck(true)}>✓ 对了</button>
      <button className="lc-self-no" onClick={() => selfCheck(false)}>✗ 错了</button>
    </div>
  );

  return (
    <div className="screen writing-screen">
      <div className="chat-topbar">
        <button className="back-btn" onClick={onTopBack}>←</button>
        <span className="topbar-topic">句子听写 Sentence Dictation</span>
      </div>

      {phase === PHASE.LIBRARY ? (
        <div className="writing-body">
          {doneCount > 0 && (
            <div className="lc-manage-row">
              <span className="lc-manage-hint">{manage ? "点亮的练习 → 点一下可重置" : "⭐ 完成的练习会亮起"}</span>
              <span className="lc-manage-actions">
                {manage && <button className="lc-manage-btn lc-reset-all" onClick={() => { if (confirm("重置所有进度？")) { resetAll(); setManage(false); } }}>全部重置</button>}
                <button className="lc-manage-btn" onClick={() => setManage((m) => !m)}>{manage ? "✓ 完成" : "✎ 管理进度"}</button>
              </span>
            </div>
          )}

          <p className="home-pick-label">句子听写 · 跟着课本 Sentence dictation</p>
          <div className="sw-modebar sw-modebar-mini lc-type-seg">
            <button className={`sw-mode-btn${dictType === "hanzi" ? " active" : ""}`} onClick={() => setDictType("hanzi")}>写汉字<span className="lc-seg-sub">听写</span></button>
            <button className={`sw-mode-btn${dictType === "pinyin" ? " active" : ""}`} onClick={() => setDictType("pinyin")}>写拼音<span className="lc-seg-sub">注音</span></button>
          </div>

          {DICT_SYLLABI.map((id) => {
            const syll = syllabusById(id);
            if (!syll) return null;
            const weekly = weeklyPapers(id);
            return (
              <div key={id} className="lc-syll">
                <div className="lc-syll-head">
                  <span className="lc-syll-name">{syll.label}{syll.stream === "高级华文" ? " (Higher)" : ""}</span>
                </div>
                <div className="lc-lesson-chips">
                  {dictationLessons(id).map((l) => {
                    const lid = `dict:${id}:${l.tag}:${dictType}`;
                    return (
                      <button key={l.tag} className={`lc-chip${doneClass(lid)}`} onClick={launchTap(lid, () => startDictation(id, l.tag, dictType))}>
                        {statusOf(lid) === "perfect" && <span className="lc-star">★</span>}{lessonName(l.tag)}<span className="lc-chip-n">{l.count}</span>
                      </button>
                    );
                  })}
                </div>
                {weekly.length > 0 && (
                  <div className="lc-weekly">
                    {weekly.map((p) => {
                      const wid = `${p.id}:${dictType}`;
                      return (
                        <button key={p.id} className={`lc-weekly-btn${doneClass(wid)}`} onClick={launchTap(wid, () => startWeekly(p, dictType))}>
                          {statusOf(wid) === "perfect" ? "⭐" : "📄"} {p.label.split("·").pop().trim()}<span className="lc-chip-n">{p.count}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <button className="lc-ref-link" onClick={() => setPhase(PHASE.REFERENCE)}>📖 生字表 · 家长参考 Word lists</button>
        </div>
      ) : phase === PHASE.REFERENCE ? (
        <div className="writing-body lc-ref">
          <p className="writing-note-en sw-hint lc-ref-note">生字表（家长参考）· 练习时请勿让孩子看到答案 — for parents' reference, not during the child's practice.</p>
          {P1_SYLLABI.map((syll) => (
            <div key={syll.id} className="lc-ref-syll">
              <h2 className="lc-ref-title">{syll.label}{syll.stream === "高级华文" ? " (Higher)" : ""}</h2>
              {syll.lessons.map((l) => (
                <div key={l.tag} className="lc-ref-lesson">
                  <span className="lc-ref-lnum">{lessonName(l.tag)}</span>
                  <span className="lc-ref-chars">{l.chars.join(" ")}</span>
                </div>
              ))}
            </div>
          ))}
          <button className="btn-secondary lc-ref-back" onClick={() => setPhase(PHASE.LIBRARY)}>← 返回 Back</button>
        </div>
      ) : phase === PHASE.PRACTICE && current ? (
        <div className="writing-body lc-practice">
          <div className="lc-progress">
            {sessionTitle && <span className="sw-lesson-name">{sessionTitle} · </span>}
            第 {qIndex + 1}/{playItems.length} 句
          </div>

          <button className={`lc-play-btn${played ? " played" : ""}`} onClick={playCurrent}>
            <span className="lc-play-icon">🔊</span>
            <span className="lc-play-label">{played ? "再听一次 Again" : "听句子 Play"}</span>
          </button>

          <p className="lc-cloze">
            {current.segs.map((sg, k) => sg.t === "text" ? (
              <span key={k}>{sg.text}</span>
            ) : pinyinMode ? (
              <span key={k}>{multi && <sup className="lc-bnum">{CIRC[sg.i]}</sup>}<u className="lc-underline">{sg.ch}</u></span>
            ) : (
              <span key={k} className="lc-blank-wrap">{multi && <sup className="lc-bnum">{CIRC[sg.i]}</sup>}<span className="lc-blank" /></span>
            ))}
          </p>

          {pinyinMode ? (
            <div className="lc-write">
              <p className="lc-write-hint">{multi ? "写出画线字的拼音" : <>写出<b> {current.blanks[0].ch} </b>的拼音</>}</p>
              <PracticeCanvas key={`py-${qIndex}-${attempt}`} clearLabel="重写 Clear" height={130} />
              {!revealed ? (
                <button className="btn-primary lc-reveal-btn" onClick={() => setRevealed(true)}>看答案 Reveal ✓</button>
              ) : (
                <div className="lc-answer lc-answer-compare">
                  <p className="lc-answer-label">答案 Answer（和你写的比一比）</p>
                  <div className="lc-py-list">
                    {current.blanks.map((b, k) => (
                      <span key={k} className="lc-py-answer">{multi && <span className="lc-bnum">{CIRC[k]} </span>}{b.ch} <b>{b.py}</b></span>
                    ))}
                  </div>
                  {selfCheckBlock}
                </div>
              )}
            </div>
          ) : (
            <div className="lc-write">
              <SentenceWritePad
                key={`pad-${qIndex}-${attempt}`}
                charCount={Math.max(1, answerTokens.length)}
                cell={cellFor(answerTokens.length)}
                doneLabel="看答案 Reveal ✓"
                showDone={!revealed}
                onDone={() => setRevealed(true)}
              />
              {revealed && (
                <div className="lc-answer lc-answer-compare">
                  <p className="lc-answer-label">答案 Answer（和你写的比一比）</p>
                  <StrokeDemoLine key={`ans-${qIndex}-${attempt}`} tokens={answerTokens} size={72} pinyinMap={{}} />
                  {selfCheckBlock}
                </div>
              )}
            </div>
          )}
        </div>
      ) : phase === PHASE.DONE ? (
        <div className="writing-body writing-centered">
          <div className="writing-done-emoji">{score >= playItems.length ? "⭐" : "🎉"}</div>
          <h1 className="hero-title">{score >= playItems.length ? "全对了！" : "练完了！"}</h1>
          <p className="writing-done-stats">{sessionTitle} · 答对 {score}/{playItems.length}</p>
          <button className="btn-primary" onClick={() => beginSession(sessionId, sessionTitle, playItems, dictMode)}>再练一次 Again</button>
          <button className="btn-secondary" onClick={() => setPhase(PHASE.LIBRARY)}>回到练习 Back</button>
        </div>
      ) : null}
    </div>
  );
}
