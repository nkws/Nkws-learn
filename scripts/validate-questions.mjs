#!/usr/bin/env node
/**
 * Question Bank Validator
 *
 * Builds every quiz module via the real kokoEngine builders and checks the
 * output for structural errors. Free to run (no API keys, no network) and
 * wired into CI so broken questions can't ship.
 *
 * Checks per question:
 *   - question text and answer are non-empty strings
 *   - choices is an array of 3-4 non-empty options
 *   - the marked answer appears exactly in choices
 *   - no duplicate choices within a question
 * Checks per module:
 *   - builder exists and returns questions
 *   - returned count matches MODULE_QUESTION_COUNTS (across several runs,
 *     since some builders generate questions procedurally)
 *   - no duplicate questions (same text AND same choices) within a single run
 * Checks for mock papers:
 *   - every questionRef points at a real module with enough questions
 *   - per-paper ref counts sum to 20 (the nominal paper size)
 *
 * Usage: node scripts/validate-questions.mjs
 */

import { registerHooks } from "node:module";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

// The app's source uses Vite-style extensionless relative imports
// ("../utils/helpers"); plain Node needs the ".js" added back.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (
      (specifier.startsWith("./") || specifier.startsWith("../")) &&
      !/\.[a-z]+$/i.test(specifier)
    ) {
      return nextResolve(`${specifier}.js`, context);
    }
    return nextResolve(specifier, context);
  },
});

const ROOT = join(fileURLToPath(import.meta.url), "..", "..");
const TOPICS_DIR = join(ROOT, "src", "topics");
const RUNS_PER_MODULE = 5;

// Map each moduleId to the topic file that declares it, for error reporting.
function buildModuleFileMap() {
  const map = {};
  function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (entry.endsWith(".js")) {
        const content = readFileSync(full, "utf-8");
        const rel = relative(ROOT, full);
        for (const m of content.matchAll(/"([a-z0-9]+-[a-z0-9]+)":\s*\d+/g)) {
          map[m[1]] = rel;
        }
      }
    }
  }
  walk(TOPICS_DIR);
  return map;
}

function validateQuestion(q, idx) {
  const errors = [];
  if (typeof q.question !== "string" || q.question.trim() === "") {
    errors.push(`q${idx + 1}: empty or missing question text`);
  }
  if (typeof q.answer !== "string" || q.answer.trim() === "") {
    errors.push(`q${idx + 1}: empty or missing answer`);
  }
  if (!Array.isArray(q.choices) || q.choices.length < 3 || q.choices.length > 4) {
    errors.push(`q${idx + 1} "${q.question}": expected 3-4 choices, got ${Array.isArray(q.choices) ? q.choices.length : typeof q.choices}`);
    return errors;
  }
  if (q.choices.some((c) => typeof c !== "string" || c.trim() === "")) {
    errors.push(`q${idx + 1} "${q.question}": blank choice`);
  }
  if (!q.choices.includes(q.answer)) {
    errors.push(`q${idx + 1} "${q.question}": answer "${q.answer}" not in choices [${q.choices.join(" | ")}]`);
  }
  if (new Set(q.choices).size !== q.choices.length) {
    errors.push(`q${idx + 1} "${q.question}": duplicate choices [${q.choices.join(" | ")}]`);
  }
  // `explain` is optional, but if present it must be a non-empty string.
  if (q.explain !== undefined && (typeof q.explain !== "string" || q.explain.trim() === "")) {
    errors.push(`q${idx + 1} "${q.question}": explain present but empty or not a string`);
  }
  return errors;
}

async function main() {
  const { buildModuleQuestions, MODULE_QUESTION_COUNTS } = await import(
    "../src/utils/kokoEngine.js"
  );
  const { MOCK_PAPERS } = await import("../src/topics/mockpapers.js");

  const moduleFile = buildModuleFileMap();
  const failures = [];
  const moduleIds = Object.keys(MODULE_QUESTION_COUNTS);
  let questionsChecked = 0;

  for (const moduleId of moduleIds) {
    const expected = MODULE_QUESTION_COUNTS[moduleId];
    const where = moduleFile[moduleId] || "unknown file";
    const moduleErrors = new Set();

    for (let run = 0; run < RUNS_PER_MODULE; run++) {
      const questions = buildModuleQuestions(moduleId);
      if (run === 0) questionsChecked += questions.length;

      if (questions.length === 0) {
        moduleErrors.add("no builder matched or builder returned 0 questions");
        break;
      }
      if (questions.length !== expected) {
        moduleErrors.add(`declared count ${expected} but builder returned ${questions.length}`);
      }
      const seen = new Set();
      questions.forEach((q, idx) => {
        for (const err of validateQuestion(q, idx)) moduleErrors.add(err);
        // Same stem with different choices is a valid format (e.g. editing
        // questions all ask "Which sentence is correct?"), so a duplicate
        // means identical text AND identical choice set.
        if (typeof q.question === "string" && Array.isArray(q.choices)) {
          const key = `${q.question.trim()}::${[...q.choices].sort().join("|")}`;
          if (seen.has(key)) moduleErrors.add(`duplicate question: "${q.question.trim()}" with identical choices`);
          seen.add(key);
        }
      });
    }

    if (moduleErrors.size > 0) {
      failures.push({ moduleId, where, errors: [...moduleErrors] });
    }
  }

  // Mock papers: refs must point at real modules with enough questions,
  // and each paper should total 20 questions.
  for (const paper of MOCK_PAPERS) {
    const paperErrors = [];
    let total = 0;
    for (const ref of paper.questionRefs) {
      total += ref.count;
      const available = MODULE_QUESTION_COUNTS[ref.moduleId];
      if (available === undefined) {
        paperErrors.push(`ref "${ref.moduleId}" is not a known module`);
      } else if (ref.count > available) {
        paperErrors.push(`ref "${ref.moduleId}" wants ${ref.count} questions but module only has ${available}`);
      }
    }
    if (total !== 20) {
      paperErrors.push(`questionRefs sum to ${total}, expected 20`);
    }
    if (paperErrors.length > 0) {
      failures.push({ moduleId: paper.id, where: "src/topics/mockpapers.js", errors: paperErrors });
    }
  }

  console.log(`Checked ${moduleIds.length} modules (~${questionsChecked} questions) and ${MOCK_PAPERS.length} mock papers.`);

  if (failures.length === 0) {
    console.log("All question banks valid. ✓");
    return;
  }

  console.error(`\n${failures.length} module(s) with problems:\n`);
  for (const f of failures) {
    console.error(`✗ ${f.moduleId} (${f.where})`);
    for (const err of f.errors) console.error(`    - ${err}`);
  }
  process.exit(1);
}

main().catch((err) => {
  console.error("Validator crashed:", err);
  process.exit(1);
});
