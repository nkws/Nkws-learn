# Explanation Rubric & Audit Process

How Koko's per-question `explain` text is written, and how it gets evaluated and
rectified over time. Applies to every `explain` field added during the Stage 1+
rollout across P5–P6 Maths and beyond.

## What an explanation is for

`explain` is shown (and read aloud by TTS) **after a wrong answer**. Its job is
to teach the *method and the idea behind it* so the child can solve the next
one — not merely to reveal the answer. PSLE structured questions reward exactly
this kind of reasoning, so good explanations are also PSLE preparation.

## The standard: concept-first

Lead with the **idea that makes the method work**, then apply it. Do not just
list the arithmetic steps.

- **Weak (procedural):** "Divide both sides by 4: 12÷4 = 3 and 8÷4 = 2, so 3:2."
- **Strong (concept-first):** "A ratio compares two amounts, not their actual
  size, so 12:8 and 3:2 describe the same relationship scaled down. Simplify it
  like a fraction — divide both sides by their highest common factor, 4: 3:2."

### Do
- Name the underlying concept (a ratio is a comparison; an equation is a
  balance; average speed = total distance ÷ total time).
- Generalise: phrase it so it transfers to similar questions ("finding one unit
  is the key move in every sharing problem").
- Keep the worked numbers, but in service of the idea.
- Stay age-appropriate (P5–P6) and consistent with the module's intro pages.
- Be concise: roughly **one concept clause + the working**.

### Don't
- Restate the answer ("The answer is 16 because it's 16").
- List steps with no reason ("subtract, then divide").
- Exceed what fits a chat bubble / is pleasant to hear via TTS.
- Reuse the same explanation for different questions.

### Length
Target ~40–360 characters. Below ~40 can't carry a concept; above ~360 is a wall
of text in the bubble and tedious read aloud. (Enforced by Layer 1 below;
constants live in `scripts/validate-questions.mjs`.)

## The two-layer audit

Quality is checked continuously, not in one big retro pass.

### Layer 1 — heuristic lint (free, in CI)
`scripts/validate-questions.mjs` runs on every push (no API key, no network) and
fails the build on the mechanical tells of a weak explanation:
- **Partial coverage** — a module must be all-or-nothing on explanations, so no
  question silently ships without one.
- **Length out of band** — too terse to teach, or too long for a bubble/TTS.
- **Barely adds beyond the answer** — strips the answer text; flags if almost
  nothing is left.
- **Verbatim reuse** — the same explanation used for two questions in a module.

Layer 1 is high-precision (it won't flag good explanations) but it cannot judge
whether an explanation is genuinely *concept-first* — that's Layer 2.

### Layer 2 — Claude rubric pass (per Stage PR)
When a batch of explanations is added (or on a scheduled review), Claude reads
each one against this rubric and rates it, then rewrites the weak ones in place.
Run it **as part of each Stage's PR**, before merge, so quality stays current
instead of accumulating debt. Two ways to run, both fine:
- **In-session subagents** — no extra cost beyond the session (how the question
  audit and the concept-first rewrite were done).
- **`scripts/quiz-audit.mjs`** — deeper pass, but it calls the paid Anthropic
  API, so reserve it for occasional use.

#### Layer-2 checklist (per explanation)
1. Does it name the **concept**, not just the steps?
2. Is the method **correct** and the worked numbers right?
3. Does it **generalise** to similar questions?
4. **Age-appropriate** and consistent with the intro pages?
5. Within the **length** window and pleasant read aloud?
6. Distinct from sibling questions' explanations?

An explanation failing 1–4 is "weak" and should be rewritten; 5–6 are usually
caught by Layer 1.
