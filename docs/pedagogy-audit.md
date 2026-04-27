# Kokoclassroom Pedagogy Audit

_Date: April 2026 · Audited against the state of `claude/enhance-kokoclassroom-curriculum-O3h1T` after the strategy-audit follow-through (PR #34) and the new Wellbeing / Explore tracks._

## Executive summary

Kokoclassroom is a strong, content-rich Singapore P1–P6 learning app. Recent work has closed the biggest content gaps (P6 Math depth, mock paper engine, age-appropriate Wellbeing/Explore tracks). The remaining pedagogical weaknesses are **structural** — the app teaches well, scores transparently, but does not yet *adapt* or *retain*. Closing those gaps is the next high-leverage investment.

### Scorecard

| Dimension | Rating | One-line verdict |
|---|---|---|
| 1. Learning objectives | 🟡 Partial | Implicit in module titles; no explicit SWBAT statements machine-readable in data. |
| 2. Scaffolding & sequencing | 🟢 Strong | Intros + progressive difficulty + cross-topic mock papers. |
| 3. Formative assessment | 🟡 Partial | Star scoring is clear; per-question feedback explains nothing about *why*. |
| 4. Mastery & retention | 🔴 Gap | Any score marks a module "complete." No mastery threshold, no spaced repetition. |
| 5. Metacognition & reflection | 🔴 Gap | No reflection prompts, no "what tripped you up?" loop. |
| 6. Differentiation & accessibility | 🟡 Partial | TTS exists, but no adaptive difficulty, no EAL toggle, no SEN supports. |

🟢 Strong · 🟡 Partial · 🔴 Gap

---

## 1. Learning objectives — 🟡 Partial

**What's there.** Each module has a `title` and `description` field in `src/utils/constants.js` that implies a learning objective (e.g., `{ id: "p6m-st1", title: "Speed, Distance & Time", description: "D = S × T. Find any of the three when you know the other two." }` at `src/utils/constants.js:792`). Intros further frame the *why* and *what* (e.g., `src/topics/addition.js` ADDITION_INTRO).

**What's missing.** No explicit, machine-readable "Students Will Be Able To" (SWBAT) field. Teachers, parents, or a future analytics dashboard can't programmatically answer *what skill is this module training?* The MockPaperScreen scorecard at `src/screens/MockPaperScreen.jsx:108` already groups by topic for weakness diagnosis — adding LOs would let it diagnose by *skill within a topic*.

**Recommendation (Quick win).** Add an optional `objective: "Calculate distance given speed and time."` field to module objects in `constants.js`. Show it on the ModuleListScreen card and at the start of an attempt. Backwards compatible — modules without it just don't display it.

---

## 2. Scaffolding & sequencing — 🟢 Strong

**What's there.**
- **Intros first, drills second.** Modules with `hasIntro: true` show 4–6 illustrated pages (`src/screens/ChatScreen.jsx`) before any quiz. Recent example: `P6_MATH6_INTRO` for ratio/algebra at `src/topics/p6/math6.js`.
- **Progressive difficulty within a module.** Builders shuffle questions but typically keep concept→application order in their source array (e.g., `src/topics/p6/eng-cloze.js:17–29` mixes simple cloze and harder relative-clause cloze).
- **Basic → depth pairing per topic.** PR #34 added `p6m-ra2`, `p6m-al2`, `p6m-pe2` so each high-stakes PSLE Math topic has a basics module *and* a word-problem follow-up (`src/utils/constants.js:777–802`).
- **Cross-topic synthesis.** `sci-revision.js` and the new mock paper engine (`src/topics/mockpapers.js`) force students to integrate across topics — the pedagogically correct capstone format.
- **Age-tiering across the new tracks.** Wellbeing P1 → P2 → P3 → Explore P4 → P5 → P6 walks the same five themes from concrete-and-illustrated to abstract-and-applied. This is exactly the spiral curriculum approach modern primary curricula use.

**What's missing.**
- Within a single quiz session, question order is shuffled (`src/topics/*/*.js` `shuffle(...)`). This is fine for review but undermines the deliberate easy → hard progression on first exposure.
- No "prerequisite" links between modules. A struggling student can't be auto-routed back to the precursor (e.g., a P6 Ratio learner who fails should be pointed at P5 fractions; nothing does this today).

**Recommendations (Medium).**
- Add an optional `prerequisites: ["p5m-fr1"]` field to module objects. Use it in MockPaperScreen weak-topic cards to route weaker students back further.
- Optional `firstTime` flag that runs questions in source order on the first attempt and shuffles only on retries.

---

## 3. Formative assessment — 🟡 Partial

**What's there.**
- **Stars per module.** `progress.moduleStars[moduleId]` in `src/utils/progress.js`. Attempts persist locally and to Supabase via `src/utils/cloudSync.js`.
- **Per-attempt scorecard for mock papers.** `src/screens/MockPaperScreen.jsx:108–132` shows a per-topic breakdown sorted weakest-first, with deep-links into the matching drill module. This is genuinely well-done formative feedback at the *paper* grain.
- **Praise/hint phrases.** `src/utils/kokoEngine.js` rotates praise/hint copy to avoid staleness — a small but real motivational nudge.

**What's missing.**
- **Per-question 'why'.** When a student picks a wrong answer in `ChatScreen.jsx`, they see "incorrect" and the right answer — but no *explanation*. Students who fail because of a misconception keep failing because nobody surfaced the misconception.
- **No distractor analysis.** All wrong choices are treated equally. In well-designed assessments, each distractor is tied to a specific misconception (e.g., a percentage MCQ where "$5" tests forgetting GST and "$50" tests using the wrong base). Today the data model can't represent this.
- **No item difficulty data.** We don't know which questions are too easy or too hard. Difficult items on first exposure are pedagogically valuable but should be paired with hints; today they just frustrate.

**Recommendations.**
- (Quick) Allow each question to optionally specify a `feedback: { wrong: "Reread the question — they asked for the discount, not the final price." }` and surface it in `ChatScreen.jsx` after a wrong answer.
- (Medium) Allow per-distractor feedback: `{ choices: [{ text: "$5", explanation: "That's the GST amount, not the bill total." }, ...] }`. Bigger refactor of the data shape but unlocks real misconception teaching.
- (Medium) Add an attempt log per question (correct/incorrect, time-to-answer) to Supabase — gives later item analysis.

---

## 4. Mastery & retention — 🔴 Gap

This is the single biggest pedagogy gap.

**What's there.**
- A module is "complete" once attempted at all (`progress.completedModules`).
- Stars retain the latest attempt's score.

**What's missing.**
- **No mastery threshold.** A student who scored 5/12 on first try and then gave up has the same UI state ("started") as one who scored 11/12. The dashboard does not distinguish "tried but weak" from "actually mastered."
- **No spaced repetition.** Students never see a question or topic again unless they manually go back. Decades of evidence (Ebbinghaus, Cepeda et al.) show retention requires re-exposure at increasing intervals.
- **No mastery badge / completion gate.** Topic videos unlock when all modules are touched (`src/screens/TopicListScreen.jsx`). They could unlock on demonstrated mastery instead.

**Recommendations.**
- (Quick) Define mastery as ≥ 80% on a single attempt. Add a `mastered: true` flag to `progress.moduleStars` when achieved. Show ⭐ for attempted, 🌟 (or filled icon) for mastered. Tiny UI lift, big motivation/credibility lift.
- (Medium) Re-gate the topic-completion video on mastery (configurable per level — keep it lenient at P1, stricter at P6).
- (Large) Ship a basic spaced-repetition queue: any module with mastery < 80% surfaces in a daily "5-minute revisit" list. Implementation is plain JS — no ML — and aligns with the existing module data shape.

---

## 5. Metacognition & reflection — 🔴 Gap

**What's there.** Nothing today. Students answer, get scored, move on.

**What's missing.** Reflection is a research-backed lever (Hattie effect size ≈ 0.75). Questions like "which one tricked you?" or "would you tell a friend that ratio is easy or hard?" turn passive practice into self-knowledge. The PSLE Wellbeing module ("Stay Calm & Sleep Well") was the placeholder for this, but it never shipped — the strategy audit follow-through went deep on Math content instead, which was the right call given exam timing.

**Recommendations (Medium).**
- After every module attempt, show a 1-tap reflection: "How did that go?" → "Easy / Just right / Tough." Save to `progress`. Use it in the dashboard ("Your tough modules — let's revisit these").
- After a mock paper, prompt: "What surprised you most?" with two preset answers + free text. Free text is optional; short selectable options keep it kid-friendly.

These prompts are tiny UI but pedagogically outsized.

---

## 6. Differentiation & accessibility — 🟡 Partial

**What's there.**
- **Text-to-speech** via `src/hooks/useSpeech.js` — present and functional.
- **Bilingual content** in Chinese subjects.
- **Mobile-friendly UI** (`src/index.css`: `env(safe-area-inset-*)`, large touch targets).
- **Free vs Plus gating** (`src/topics/mockpapers.js:54–60`) is consistent and not hidden behind paywall walls during navigation.

**What's missing.**
- **No adaptive difficulty.** A high-performing P3 student who finds P3 Math trivial gets no harder content; they have to manually click into P4 (which is age-stigmatised). Conversely a struggling P6 student gets no scaffolded easier path.
- **No EAL/EFL support.** Singapore has many EFL learners; English questions assume Singlish-fluent comprehension. A toggle for plain-English re-phrasing or per-question Mandarin glossary would help.
- **No SEN considerations.** No high-contrast mode, no dyslexia-friendly font option, no reduced-motion toggle.
- **Comprehension passages not displayed in MockPaperScreen.** `eng-comprehension6.js` ships passages with each question, but `MockPaperScreen.jsx:188` renders only `q.question`. We sidestep this in the new mock papers (we deliberately exclude comprehension modules from paper configs in `src/topics/mockpapers.js`) — but the underlying display gap should be fixed before adding comprehension to mock papers.

**Recommendations.**
- (Quick) Render `q.passage` above `q.question` in `MockPaperScreen.jsx` when present. Five-line change. Lets us add comprehension to mock papers safely.
- (Medium) Add a per-child `accessibility` profile (font, contrast, motion). Persist in Supabase. Affects CSS classes only.
- (Large) Adaptive difficulty hook: at the end of any module attempt, recommend "next module" based on score (≥ 80% → next harder; < 50% → prerequisite). Reuses the proposed `prerequisites` field from §2.

---

## Other observations

- **PSLE coverage is now solid.** P6 Math has both basics and word-problem depth modules. Mock papers exist for P6 Math (×2, free + Plus), P6 English (×2), P6 Science (×2), and P6 Chinese (×1). Strategy/wellbeing modules deliberately deferred — those land naturally inside the new P6 Explore "Friendships, Peer Pressure, and Knowing When to Get Help" content rather than as standalone PSLE-prep tiles.
- **Wellbeing/Explore tracks expand the curriculum thoughtfully.** They cover bullying, financial literacy, AI literacy, sustainability, critical thinking — five themes spiralled across all six levels. Singapore-specific anchors (NEWater, Pulau Semakau, GST, helplines like TOUCHline / Tinkle Friend) keep the content grounded. The bullying / mental-health threads include real helpline numbers (`src/topics/p6/explore.js` P6 bullying intro), which is appropriate and responsible.
- **Engineering guardrails are now in place.** `.github/workflows/ci.yml` runs lint + build on every PR. Sentry is wired in `src/utils/sentry.js`. ErrorBoundary at `src/components/ErrorFallback.jsx`. These are non-pedagogical but they protect everything above from silent regression.
- **Code health is good.** All new builders follow the same canonical 5-part shape (intro export, builder fns, BUILDERS registry, counts export, public `build*Questions` fn). Consistency makes future audits cheap.

---

## Prioritised backlog

### Quick wins (≤ 2 hours each)
1. Add `objective` field to module data; surface on ModuleListScreen and ChatScreen.
2. Add per-question `feedback.wrong` field; surface in ChatScreen on incorrect answer.
3. Define mastery as ≥ 80% and distinguish "attempted" vs "mastered" in the UI.
4. Render `q.passage` in MockPaperScreen so comprehension can join mock papers.
5. Add 1-tap "How did that go? (Easy / Just right / Tough)" reflection after every attempt.

### Medium (1–3 days each)
6. Per-distractor explanations (data shape change + ChatScreen update).
7. Module `prerequisites` field; deep-link from weak-topic cards to prerequisite when relevant.
8. Mock-paper scorecard "what surprised you?" reflection.
9. Per-child accessibility profile (font, contrast, motion).
10. Attempt-log per question to Supabase for later item analysis.

### Larger investments (1–2 weeks each)
11. Spaced-repetition queue ("5-minute revisit").
12. Adaptive difficulty hook (next-module recommender from score).
13. EAL toggle: plain-English rephrasing for English module questions, optional Mandarin glossary.

The first five quick wins together would move three of the six dimensions from 🟡/🔴 to 🟢. They are the highest leverage next investment.
