#!/usr/bin/env node
/**
 * Quiz Audit Tool
 *
 * Sends quiz content to Claude for a professional pedagogical review.
 * Analyses question quality, distractor design, Bloom's taxonomy coverage,
 * Singapore MOE syllabus alignment, and learning‑outcome effectiveness.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/quiz-audit.mjs [--level p1] [--subject math]
 *
 * Options:
 *   --level    Audit only one level: p1, p2, p3, p4, p5, p6  (default: all)
 *   --subject  Audit only one subject: math, english, science, chinese  (default: all)
 *   --out      Output file path  (default: quiz-audit-report.md)
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, basename } from "node:path";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error("Error: set ANTHROPIC_API_KEY environment variable.");
  console.error("  ANTHROPIC_API_KEY=sk-... node scripts/quiz-audit.mjs");
  process.exit(1);
}

const MODEL = "claude-sonnet-4-20250514";
const MAX_TOKENS = 8192;
const TOPICS_DIR = join(import.meta.dirname, "..", "src", "topics");

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
}

const filterLevel = getArg("level"); // e.g. "p1", "p3"
const filterSubject = getArg("subject"); // e.g. "math", "english"
const outPath = getArg("out") || "quiz-audit-report.md";

// ---------------------------------------------------------------------------
// Discover and group topic files
// ---------------------------------------------------------------------------

/** Map a file path → { level, subject } heuristic */
function classifyFile(relPath, content) {
  // Level from directory or default to p1
  let level = "p1";
  const dirMatch = relPath.match(/^p(\d)\//);
  if (dirMatch) level = `p${dirMatch[1]}`;

  // Subject from filename conventions
  let subject = "unknown";
  const name = basename(relPath, ".js");
  if (/^(sci-|living|plants|animals|body|weather)/.test(name)) subject = "science";
  else if (/^(eng-|sightwords|phonics|vocabulary|grammar|comprehension)/.test(name)) subject = "english";
  else if (/^(cn-|pinyin|characters|cnvocab|cnsentences)/.test(name)) subject = "chinese";
  else if (/^(addition|subtraction|numbers|addsub|shapes|patterns|measurement|money|time|multiplication|division|fractions|graphs|timestables|angles|math|money\d?)/.test(name)) subject = "math";

  // Fallback: peek at content for clues
  if (subject === "unknown") {
    if (content.includes("华") || content.includes("pinyin") || content.includes("汉")) subject = "chinese";
    else if (content.includes("tense") || content.includes("grammar") || content.includes("vocabulary")) subject = "english";
    else if (content.includes("photosynthesis") || content.includes("energy") || content.includes("matter")) subject = "science";
    else subject = "math";
  }

  return { level, subject };
}

function collectFiles() {
  const files = [];

  function walk(dir, prefix = "") {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const rel = prefix ? `${prefix}/${entry}` : entry;
      if (statSync(full).isDirectory()) {
        walk(full, rel);
      } else if (entry.endsWith(".js")) {
        const content = readFileSync(full, "utf-8");
        const { level, subject } = classifyFile(rel, content);
        files.push({ rel, level, subject, content });
      }
    }
  }

  walk(TOPICS_DIR);
  return files;
}

function groupFiles(files) {
  const groups = {};
  for (const f of files) {
    if (filterLevel && f.level !== filterLevel) continue;
    if (filterSubject && f.subject !== filterSubject) continue;
    const key = `${f.level}-${f.subject}`;
    if (!groups[key]) groups[key] = { level: f.level, subject: f.subject, files: [] };
    groups[key].files.push(f);
  }
  return Object.values(groups).sort((a, b) => a.level.localeCompare(b.level) || a.subject.localeCompare(b.subject));
}

// ---------------------------------------------------------------------------
// Claude API helper
// ---------------------------------------------------------------------------

async function callClaude(systemPrompt, userContent, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral" } }],
          messages: [{ role: "user", content: userContent }],
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        if (res.status === 429 || res.status >= 500) {
          const wait = Math.pow(2, attempt) * 1000;
          console.warn(`  ⏳ API ${res.status}, retrying in ${wait / 1000}s...`);
          await new Promise((r) => setTimeout(r, wait));
          continue;
        }
        throw new Error(`API ${res.status}: ${body}`);
      }

      const data = await res.json();
      return data.content.map((b) => b.text).join("");
    } catch (err) {
      if (attempt === retries) throw err;
      const wait = Math.pow(2, attempt) * 1000;
      console.warn(`  ⏳ Error: ${err.message}, retrying in ${wait / 1000}s...`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
}

// ---------------------------------------------------------------------------
// Audit prompts
// ---------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are Dr Lim, a senior curriculum specialist at Singapore's Ministry of Education (MOE) with 20 years of experience designing primary-school assessments. You hold a PhD in Educational Measurement and have published research on formative assessment, distractor analysis, and Bloom's taxonomy alignment for young learners.

You have been hired to audit quiz content for "Koko", a mobile learning app for Singapore primary school students (P1–P6, ages 6–12). The app uses a chat-based quiz format where a fox mascot (Koko) presents multiple-choice questions. Students pick from 3 options. Wrong answers trigger a retry loop until all questions are answered correctly.

Your audit must be practical, specific, and reference the actual questions you see. Avoid generic advice. For every issue you flag, give a concrete "before → after" rewrite example.

Evaluate each topic file on these dimensions:

## 1. SYLLABUS ALIGNMENT
- Are questions aligned to the Singapore MOE syllabus for the stated level?
- Are there topics or skills missing that should be covered?
- Is the difficulty appropriate for the target Primary level?

## 2. QUESTION QUALITY (Bloom's Taxonomy)
- Classify each question type: Remember, Understand, Apply, Analyse, Evaluate, Create
- Flag if the mix is too skewed toward recall (most primary quizzes are, but there should be some Apply/Analyse)
- Suggest specific questions that could be elevated to higher-order thinking

## 3. DISTRACTOR QUALITY
- Are wrong answer choices plausible and diagnostic?
- Do distractors reveal common misconceptions? (e.g. for "3+5=?", distractor 7 catches off-by-one; 35 catches concatenation)
- Flag any distractors that are obviously wrong or could never be chosen by a student who is trying

## 4. QUESTION CLARITY & LANGUAGE
- Age-appropriate vocabulary and sentence length?
- Any ambiguous wording where two answers could be defended?
- For Chinese questions: is the language level appropriate?

## 5. INTRO CONTENT (if present)
- Does the intro adequately teach the concept before quizzing?
- Is the explanation age-appropriate and engaging?
- Suggestions for improvement

## 6. PEDAGOGICAL FLOW
- Does the question sequence scaffold from easy to hard?
- Is the retry-until-correct mechanism appropriate for this content?
- Any risk of pattern-matching or guessing due to limited options?

## 7. SPECIFIC RECOMMENDATIONS
- Provide 3-5 highest-impact concrete changes, each with a rewrite example
- Suggest any new question types that would improve learning outcomes
- Rate the overall quality: Excellent / Good / Needs Improvement / Major Revision Needed

Format your response as structured Markdown.`;

function buildUserPrompt(group) {
  const levelLabel = group.level.toUpperCase();
  const subjectLabel = group.subject.charAt(0).toUpperCase() + group.subject.slice(1);
  const fileBlocks = group.files.map((f) =>
    `### File: ${f.rel}\n\`\`\`javascript\n${f.content}\n\`\`\``
  ).join("\n\n");

  return `Please audit the following ${levelLabel} ${subjectLabel} quiz content for the Koko learning app.

${fileBlocks}

Provide your complete pedagogical audit following the evaluation framework in your instructions.`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("Collecting quiz topic files...");
  const files = collectFiles();
  const groups = groupFiles(files);

  if (groups.length === 0) {
    console.error("No topic files matched the filters.");
    process.exit(1);
  }

  console.log(`Found ${files.length} topic files in ${groups.length} groups.`);
  if (filterLevel) console.log(`  Filtering level: ${filterLevel}`);
  if (filterSubject) console.log(`  Filtering subject: ${filterSubject}`);
  console.log();

  const report = [];
  report.push("# Koko Quiz Pedagogical Audit Report");
  report.push(`\n_Generated: ${new Date().toISOString().slice(0, 10)}_\n`);
  report.push(`_Audited by: Claude (AI curriculum specialist persona)_\n`);
  report.push(`_Total files analysed: ${files.length} across ${groups.length} level–subject groups_\n`);
  report.push("---\n");

  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    const label = `${g.level.toUpperCase()} ${g.subject.charAt(0).toUpperCase() + g.subject.slice(1)}`;
    console.log(`[${i + 1}/${groups.length}] Auditing ${label} (${g.files.length} file${g.files.length > 1 ? "s" : ""})...`);

    const result = await callClaude(SYSTEM_PROMPT, buildUserPrompt(g));
    report.push(`\n## ${label}\n`);
    report.push(result);
    report.push("\n---\n");
  }

  // Write report
  writeFileSync(outPath, report.join("\n"), "utf-8");
  console.log(`\nDone! Report written to: ${outPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
