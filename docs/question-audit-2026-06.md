# Koko's Classroom — Question Audit & PSLE-Readiness Review

_Date: June 2026 · Branch: `claude/koko-classroom-questions-etd94n`_
_Scope: question-by-question review of all ~2,750 authored questions (≈3,107 generated instances) across 116 topic files, P1–P6, all subjects._

---

## 1. What was done

Every question in `src/topics/**` was reviewed for: wrong marked answers, factual/scientific errors, answers missing from choices, duplicate choices, ambiguous wording (two defensible answers), broken/giveaway distractors, within-module duplicates, and typos (English and Chinese). Math answers were recomputed; science was checked against MOE syllabus precision; Chinese characters, pinyin tones, idioms and grammar were verified.

A new **structural validator** (`scripts/validate-questions.mjs`) was added and wired into CI. It builds every module through the real engine and checks answer-in-choices, choice counts, duplicate choices/questions, declared-vs-actual counts, and mock-paper references — so this class of error cannot regress. It is pure Node: **no API keys, no network, zero ongoing cost.**

**Headline:** the content is in very good shape. Across ~2,750 questions only **2 genuine content errors** existed (one of them a P6 ratio answer that would have taught the wrong method), plus **8 structural bugs** in the procedural generators — including one P6 Chinese module that silently produced **zero** questions in production.

---

## 2. Errors fixed

### Structural bugs (found by the new validator) — commit `f4a905b`

| Module | File | Bug | Fix |
|---|---|---|---|
| `p6c-vc2` | p6/cn-advanced6.js | Mis-routed in `kokoEngine` prefix map → builder returned **0 questions** live (also shorted the P6 Chinese mock paper to 16/20) | Added exact-key route before the `p6c-vc` prefix |
| `time-5` | time.js | Declared 12 questions, generator built only 8 | Fixed minute-value array to yield 12 unique clocks |
| `n20-3` | numbers20.js | Could emit a 2-choice question when the distractor collided with the smaller number | Rewrote third-choice selection |
| `n100-4` | numbers100.js | Could emit duplicate choices (same collision) | Pick a distinct nearby wrong |
| `p2m-mul2` | p2/multiplication.js | "extras" repeated 2×6 already in the main loop | Changed extra to 2×8 |
| `p2m-mul3` | p2/multiplication.js | "extras" repeated 4×9 | Changed extra to 4×4 |
| `p3m-tt1` | p3/timestables.js | "extras" repeated 7×9 | Changed extra to 7×4 |
| `p3m-tt2` | p3/timestables.js | "extras" repeated 9×6 | Changed extra to 9×4 |

### Content errors & quality fixes — commits `d176e72`, `ef5425c`

| Module | File | Type | Before → After |
|---|---|---|---|
| `p6m-ra2` | p6/math6.js | **Wrong answer** | "Sam:Tom stamps 3:4, Sam buys 12 more → 3:2, how many did Tom have?" answer `8` → **`16`** (Sam=12, Tom=16; 24:16=3:2) |
| `p2c-id1` | p2/cn-extended2.js | **Invalid word** | Antonym of 开开心心 was `伤伤心心` (not a real word) → `伤心`, distractors 高兴/快乐 |
| `bd-2` | body.js | Factual wording | "Hearing is our sense of **sound**" → "sense of **hearing**" |
| `sw-4` | sightwords.js | Wrong premise | "opposite of yes" had answer `not` (the opposite of yes is *no*) → reworded to a fill-in-the-blank where `not` fits |
| `p3e-cl1` | p3/eng-extended3.js | Two correct answers | "He __ already finished" accepted *has* **and** *had* → replaced `had` distractor with `is` |
| `p3e-tn3` | p3/eng-tenses2.js | Two correct answers | "Yesterday at 5pm I __ my homework" accepted *was doing* **and** *did* → replaced `did` distractor |
| `p3e-vc2` | p3/eng-vocabulary2.js | Two correct answers ×2 | "opposite of old" (young/**new** both valid) and "opposite of loud" (quiet/**soft** both valid) → swapped the second valid option for a non-antonym |
| `p3m-mn3` | p3/money3.js | Ambiguous | "Which costs less: 6 for $12 or 4 for $12?" — both total $12 → "Which costs less **per item**" |
| `p3m-fr4` | p3/fractions2.js | Quality | Replaced an un-simplified `2/4 + 1/4` item with `4/10 + 5/10` |

Everything else was verified correct. The full per-level reviews (P1 Math, P1 Science/English, P1 Chinese + P2, P3, P4, P5, P6) each concluded that the remaining content holds up; per-level "flagged but not changed" notes (defensible borderline items such as "all metals conduct heat" at P4 level) are retained in the review notes but were deliberately left unchanged under a conservative edit policy.

---

## 3. PSLE-readiness: can a blank-slate student ace the PSLE using only Koko's Classroom?

**Short answer: No — but it is a strong foundation-builder, not a complete PSLE prep.** A child who started from nothing and used only this app would gain solid concept recall and confidence (especially for the MCQ booklets), but would walk into the PSLE under-prepared on format and on several whole skills the exam tests. The gap is **not mainly content quality — it is exam format and coverage.**

### Where the app genuinely prepares a student
- **Concept recall and fluency** across Maths, Science, English grammar/vocab, and Chinese 成语/语法 — the question banks are accurate and syllabus-aligned.
- **Maths MCQ (PSLE Paper 2, Booklet A)**: ratio, algebra, speed, percentage, fractions, volume, geometry, pie charts, averages, bar-model *concepts* are all present and correct.
- **English Paper 2 components**: cloze, editing, grammar, comprehension MCQ are well covered.
- **Mock paper mode** mixes topics and gives a weakest-topic scorecard — good formative practice for the MCQ format.

### Why it is not sufficient on its own
1. **Format mismatch is the biggest issue.** Roughly half of PSLE marks come from **open-ended / structured** questions requiring written working and free-text answers. Koko is **100% 3-option multiple choice.** PSLE MCQ also use **4 options** and are frequently multi-step. A student trained only on 3-option recall will be under-drilled on the dominant answer format.
2. **Entire assessed skills are absent:**
   - **Composition / situational & continuous writing** (English Paper 1, ~40 marks) — not in the app at all.
   - **Chinese 作文 (writing), 口试 (oral), 听力 (listening)** — not present.
   - **English oral and listening comprehension** — not present.
   - **Science open-ended (Section B)** — the app tests recognition, not the "explain why / apply the concept" writing PSLE Science demands.
3. **Content gaps within subjects** (from the P6 review):
   - **Maths: no Circles module** (area/circumference/arc — a guaranteed PSLE topic). This is the single biggest content omission.
   - **Science**: human body systems (digestion/respiration/circulation), cells, reproduction, water cycle and electrical systems exist at P4/P5 but are only *sampled* in P6 revision rather than drilled as dedicated PSLE-level modules.
   - **Chinese**: no 综合填空 (passage cloze), 汉语拼音, or writing/oral practice.
4. **Mastery model.** As the existing `docs/pedagogy-audit.md` notes, any score marks a module "complete" — there is no mastery threshold or spaced revisit, so "I finished it" does not mean "I retained it under exam pressure."

### Honest verdict
Koko's Classroom is an excellent **MCQ drill and concept-recall companion** — realistically it can take a beginner a large part of the way on Booklet-A-style questions and foundational knowledge, and it would noticeably lift a weak student. But "ace the PSLE from a blank slate" also requires **open-ended problem solving with working, composition, oral and listening** — none of which this format delivers. Position it (in marketing and in parent expectations) as **"build and revise the fundamentals + master the MCQ sections,"** to be paired with past-paper practice on structured/open-ended questions and writing.

---

## 4. Zero-cost improvement suggestions

All of these reuse existing data and engine plumbing — **no new external APIs, no per-use cost, no infra.** Ordered by impact-to-effort.

1. **Per-question `explain` field (content-only).** Add an optional `explain: "24:16 simplifies to 3:2"` to question objects; show it after a wrong answer (and on the retry). The hint pipeline in `src/utils/kokoEngine.js` (`getHint`) already fires on wrong answers — this just enriches it. Backwards-compatible: questions without it behave as today. Highest learning-per-effort win, and it directly addresses the PSLE "explain why" weakness by teaching method, not just the answer.

2. **Move toward 4-option questions where natural.** The data model already allows 4 choices (the validator accepts 3–4). For P5–P6 Maths/Science, adding a 4th plausible distractor better mirrors PSLE MCQ and reduces guess-rate. Incremental and content-only.

3. **Mastery threshold for "complete."** Use the existing `progress.moduleStars` (localStorage, already synced) to require e.g. ≥80% first-attempt before a module is marked mastered, and surface "modules to revisit." No backend, no cost — pure logic over data you already store. (Echoes `docs/pedagogy-audit.md` §4.)

4. **First-attempt in authored order, shuffle only on retry.** Builders currently `shuffle` every time, which undermines the deliberate easy→hard ordering on first exposure. A one-line conditional in the builder callers preserves order for the first attempt. Free.

5. **"Review Day" using existing data.** A mode that re-serves questions from low-star modules — lightweight spaced revision built entirely on local progress. No SRS engine, no API. Directly targets the retention gap.

6. **Close the highest-value content gap: a P6 Circles module.** Founder-authored, fits the existing `src/topics/p6/` pattern exactly. It's the clearest PSLE Maths omission and costs nothing but authoring time.

7. **Optional display-only `objective`/`prerequisites` on modules** (from the pedagogy audit's quick wins) — supports routing a struggling student back a level. Data-only.

### Note on the existing paid tool
`scripts/quiz-audit.mjs` calls the Anthropic API (paid) for deep pedagogy reviews. With the **free CI validator** now catching structural/answer-shape errors on every push, that script is no longer needed for routine error-catching — keep it only for occasional qualitative pedagogy passes, which keeps spend at zero for day-to-day work.

---

## 4a. Closing the PSLE gap within current constraints

Constraints assumed: solo, founder-authored content; no CMS; the existing 3-option MCQ chat engine; browser-native TTS (free); zero added per-use cost; freemium model. The goal is **not** to turn an MCQ app into a full PSLE simulator — it is to push the MCQ format as far toward PSLE skills as it can honestly go, and to be straight with parents about the rest.

**Status:** Step 1 below (the `explain` field) is now **implemented** for P6 Maths (math6.js) — engine plumbing + reference content. The rest are authoring/format extensions that reuse it.

1. **Teach method, not just the answer — done, now extend.** The new `explain` field turns every wrong answer into a mini worked solution. Roll the same pattern out, file by file, to the other PSLE-heavy modules (percentage, fractions, bar models, volume, geometry, and the science word items). Pure content; no code.

2. **Add "reasoning MCQs" that drill open-ended thinking without leaving MCQ.** PSLE open-ended marks reward *method*. You can assess method inside 3–4 option MCQ by changing what you ask:
   - "Which is the correct **first step**?"
   - "Which **working** is correct?" (show 3 worked attempts, one right)
   - "Which statement **explains why**?" (science cause-and-effect)
   These are founder-authored in the existing `{q,a,choices,explain}` shape — zero new infra, and they target exactly the skill the MCQ-only format currently misses.

3. **Self-marked open-ended practice (no AI grading needed).** Add a question variant that presents a true open-ended question, lets the child think, then reveals a **model answer with full working** and asks "Did you get it right? (yes / nearly / no)" as the MCQ. This delivers genuine structured-question practice and model answers using only a reveal + self-report — within the existing engine, at zero cost. Honest about its limits, but real practice.

4. **Free listening comprehension via the TTS you already have.** `useSpeech` (Web Speech API) is browser-native and free. A "listening" module = TTS reads a passage aloud, then standard MCQ questions. This adds a whole PSLE-assessed skill (English & Chinese listening) at no cost.

5. **Close the concrete content gaps with new topic files** (same pattern, no infra): **P6 Circles** (the single biggest Maths omission), and dedicated P6 Science modules for body systems / cells / reproduction / water cycle / electrical (currently only sampled in revision). For Chinese, add 综合填空 (passage cloze) and 词语搭配.

6. **Move P5–P6 questions to 4 options** where natural (the engine and validator already allow 3–4) to match PSLE MCQ and cut the guess rate.

7. **Composition & oral — be honest, but still add value cheaply.** Auto-grading prose or speech needs human marking or paid AI, so don't fake it. Instead: provide **model compositions + a self-check rubric** (MCQ checklist: "does your story have a clear beginning, middle, end?"), and **situational-writing component drills** as MCQ ("which opening is correct for a formal email?"). For oral, offer model spoken responses (TTS) and practice prompts as self-practice. This teaches the building blocks without pretending to mark the final piece.

8. **Make it stick for the exam.** Pair the above with the mastery threshold + "Review Day" (suggestions #3 and #5 in section 4), both built on existing local progress data, so knowledge is retained under exam conditions rather than just "completed once."

**Sequencing (highest leverage first):** finish rolling out `explain` across P6/P5 maths → add reasoning MCQs to P6 maths & science → ship the P6 Circles module → add TTS listening modules → self-marked open-ended practice → 4-option migration → composition/oral scaffolding. Every step is founder-authored content or small engine tweaks; none requires a CMS, a backend change, or any per-use spend.

**Positioning:** market honestly as *"master the fundamentals and the MCQ booklets, and learn the method"* — paired with past-paper practice for full open-ended/composition/oral. That keeps the product promise truthful while these steps progressively widen real PSLE coverage.

---

## 5. Verification

```
npm run validate   # Checked 334 modules (~3107 questions) and 7 mock papers. All valid. ✓
npm run lint       # clean
npm run build      # ✓ built
```
The CI workflow (`.github/workflows/ci.yml`) now runs `validate` between lint and build.
