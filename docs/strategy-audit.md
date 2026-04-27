# Strategy Audit & PSLE Roadmap

> Captured April 2026. Living document — update as direction shifts.
>
> **What was shipped from this audit (PR #34):** P6 Math content depth (Bar Models module, Ratio/Algebra intros, three word-problem depth modules), Mock Paper engine with freemium gating + topic scorecard + drill-back, GitHub Actions CI, Sentry error tracking with ErrorBoundary.
>
> **Still to do from this audit:** activate Sentry by setting `VITE_SENTRY_DSN` in Vercel; webhook idempotency log; Playwright smoke test; English/Science/Chinese mock papers; SRS engine (deferred); content CMS (deferred while founder-authored).

---

## Context

This started as a strategy audit of Koko's Classroom (Nkws-learn). Full audit notes are in §6 below; the headline finding drove the actionable plan:

> **The content funnel is upside-down vs willingness-to-pay.** P1 has 110 modules; P6 has 36. PSLE at the end of P6 is where Singapore parents actually spend on learning products — and it's where we have the least content. Every competitor in this market (Koobits, Geniebook, MathsBuddy) is P5/P6-heavy. Closing this gap is the highest-revenue-leverage single move.

Capacity constraint: **solo, dev-authored content** — no CMS investment in this cycle. Plan stays inside the existing `src/topics/*.js` pattern.

The plan has two halves:
1. **Topical drills** for named PSLE gaps (table stakes — closes the obvious holes).
2. **A mock-paper mode** (the differentiator — new flow, this is the moat piece).

---

## PSLE gap analysis (specific, not generic)

Based on `src/topics/p5/` and `src/topics/p6/` listings vs the published PSLE syllabus.

> **Note:** initial gap analysis was based on file naming and turned out to be wrong for several P6 Math entries — Decimals, Average, Ratio, and Algebra all already existed inside the consolidated `math5.js` / `math-extended5.js` / `math6.js` files. Re-scoped accordingly. PR #34 shipped: P6 Bar Models (genuinely missing), intros for Ratio + Algebra (existed but had no concept page), and depth modules for Ratio / Algebra / Percentage Word Problems.

### P5/P6 Math — gaps
| Topic | Status | Note |
|---|---|---|
| Ratio | Exists in `math6.js` | **Intro added in PR #34.** Depth module `p6m-ra2` Ratio Word Problems shipped. |
| Algebra (P6 intro) | Exists in `math6.js` | **Intro added in PR #34.** Depth module `p6m-al2` Algebra Word Problems shipped. |
| Decimals (4 ops) | Exists in `math-extended5.js` | OK. |
| Average | Exists in `math-extended5.js` | OK. |
| Bar models / heuristics (P5/P6) | **Was missing** | **Shipped in PR #34** as `p6m-bm1` Bar Model Heuristics. |
| Percentage depth | Single module pre-PR | **Depth module `p6m-pe2` Percentage Word Problems shipped in PR #34.** |
| Speed/Distance/Time | Inside `math6.js` | OK. |
| Fractions / Geometry / Volume / Data | Present | OK. |

### P5/P6 English — gaps
| Topic | Status | Note |
|---|---|---|
| Synthesis & Transformation | **Missing** | Major PSLE Paper 2 component. Add `p6/eng-synthesis.js`. |
| Visual text comprehension | **Missing** | PSLE Paper 2 Section A. Add `p6/eng-visual-text.js`. |
| Vocabulary MCQ at P5/P6 | Present at P3 only | Add `p6/eng-vocabulary6.js`. |
| Cloze / Comp / Editing / Grammar | Present | OK. |

### P5/P6 Science — gaps
| Topic | Status | Note |
|---|---|---|
| Cells / diversity at P5+ depth | Thin | Existing `sci-diversity.js` is P3. Add `p5/sci-cells.js`. |
| Circulatory system | **Missing** | P5 syllabus. Add `p5/sci-circulatory.js`. |
| Plant transport (water/food) | **Missing** | P5. Add `p5/sci-plant-transport.js`. |
| Heredity | **Missing** | P5. Add `p5/sci-heredity.js`. |
| Energy/Forces/Foodchains/Photosynthesis/Environment | Present | OK. |

### P5/P6 Chinese (Mother Tongue) — gaps
| Topic | Status | Note |
|---|---|---|
| 病句改正 (sentence correction) | **Missing** | Major MT PSLE component. Add `p6/cn-sentence-correction.js`. |
| 填空 cloze (with options) | **Missing** | Add `p6/cn-cloze6.js`. |
| 看图作文 vocab/structure prompts | **Missing** | Add `p6/cn-picture-comp.js`. |
| Vocab / advanced / reading | Present | OK. |

---

## The differentiator: Mock Paper mode (shipped in PR #34)

A new question flow distinct from per-module quizzes. PSLE-shaped:

- **Mixed topics** drawn from existing P5 or P6 modules within one subject.
- **Fixed length** (20 MCQ for the v1 papers).
- **Timed** (visible MM:SS countdown, auto-submit at 0).
- **No in-session retry round** (this is a *test*, not practice).
- **End-of-paper scorecard** with per-topic breakdown sorted weakest-first.
- **Each weak topic links back to its drill module** (closes the engagement loop from "what did I miss" to "go practise it now").

### What shipped
- `src/topics/mockpapers.js` — paper configs, freemium gating helper (`isPaperLocked`).
- `src/screens/MockPaperListScreen.jsx` — picker grouped by subject, lock icons on Plus papers, upgrade modal.
- `src/screens/MockPaperScreen.jsx` — timer + sequential MCQ + scorecard + topic deep-link.
- `src/screens/SubjectScreen.jsx` — "📝 PSLE Prep" tile when `levelHasPapers(level)`.
- Two P6 Math papers: Paper 1 (free, basics modules), Paper 2 (Plus, word-problem depth modules).

### What's deferred for v2
- Cloud sync of mock paper history (currently localStorage only, capped to 50 entries via `koko-mock-paper-history` key).
- Supabase `quiz_attempts` schema migration to add `mode: "mock_paper"` field.
- English / Science / Chinese papers.
- Short-answer / Booklet B style questions.

---

## Gating decision (locked)

**First mock paper per level+subject is free; additional papers are Plus-only.** Duolingo-style sampling — parents see the value before being asked to pay. This doubles as the answer to audit finding §3b ("Plus tier isn't worth paying for"): mock papers become the headline Plus benefit alongside the existing multi-child + analytics gates.

Implementation: positional gating in `isPaperLocked()` — index 0 of `getPapersForLevel(level, subject)` is free, indices > 0 are Plus-only. Re-uses the existing `isPlus` flow from `DashboardScreen.jsx` / `ChildPickerScreen.jsx` and the existing `createCheckoutSession` Stripe flow.

---

## Engineering guardrails (shipped in PR #34)

The audit's §3e finding was that the codebase had no monitoring on a payment-taking product. Two highest-leverage guardrails shipped:

- **GitHub Actions CI** (`.github/workflows/ci.yml`) — runs `npm run lint && npm run build` on every PR and on push to main/master. Pre-existing dead `nearbyWrongs3` helper in `p2/math-extended2.js` removed so CI passes from the very first run.
- **Sentry React SDK** — conditional init (no-op without `VITE_SENTRY_DSN`), `sendDefaultPii: false` so children's names and parents' emails never leave the app, ErrorBoundary fallback (`src/components/ErrorFallback.jsx`) instead of a white screen.

To activate Sentry in production: create a project at sentry.io, copy the DSN, add `VITE_SENTRY_DSN` to Vercel env vars, redeploy.

Deferred guardrails (worth doing before any volume Plus traffic):
- Stripe webhook idempotency log (Supabase table recording every event we process).
- Playwright smoke test of signup → upgrade → Plus-feature visibility.

---

## Sequencing for the next quarter

1. **Engineering guardrails** — done in PR #34. Activate Sentry as the only remaining manual step.
2. **Mock Paper engine** — done in PR #34 for P6 Math. Broaden to English / Science / Chinese as content catches up.
3. **PSLE depth content** — partly done in PR #34 (P6 Math). Continue with English (Synthesis & Transformation, Visual Text), Science (Circulatory, Plant Transport, Heredity), Chinese (病句, 填空, 看图作文).
4. **AI-assisted hints + weekly parent email** — first real Plus-tier upgrades after mock papers.
5. **SRS / wrong-answer engine** — biggest pedagogy moat; uses existing `quiz_attempts` data.
6. **Content CMS** — only when founder-authored cadence becomes the bottleneck.

---

## §6 — Audit summary (for context)

**What's working:** clear "ad-free, MOE-aligned, parent-first" niche; mastery-based pedagogy is philosophically coherent; Stripe plumbing is solid (proper webhook signing, idempotent upsert, promo codes, portal); guest-mode fallback lowers activation friction; Chinese coverage is unusually deep.

**What's concerning:**
- §3a Upside-down content funnel vs willingness-to-pay → **partly addressed in PR #34 (P6 Math)**.
- §3b Plus tier gates aren't worth paying for → **partly addressed in PR #34** (mock papers as Plus benefit).
- §3c Pedagogy is static under the hood (no SRS, no diagnostic, no adaptive) — deferred.
- §3d Content velocity is founder-gated, no CMS — accepted given solo capacity.
- §3e Engineering safety rails thin for a payments product — **addressed in PR #34** (CI + Sentry); webhook log + Playwright still pending.
- §3f Engagement loop is thin (only streak + reward video) — deferred.

---

## Out of scope (deferred)

- **SRS / wrong-answer engine** (audit §4C) — bigger build, save for next cycle once mock-paper data is flowing.
- **Content CMS** (audit §4D) — founder is solo, dev-authored content is fine for now.
- **PWA push, weekly parent email** (audit §4E).
- **Geographic expansion** (audit §4G).
- **Webhook idempotency log + Playwright smoke** (audit §4F) — partly addressed in PR #34, completion deferred.
