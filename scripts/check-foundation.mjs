// Foundation conformance gate for the marketing site (Xuanheng UI Foundation v1.4).
// Dependency-free on purpose: this repo has no test runner and adding one is out of scope.
// Run with: node scripts/check-foundation.mjs
//
// Every check asserts on its own input size, because a gate that reads nothing and
// reports success is the failure mode the contract calls out in §13.3.8 and §15.3.
import { readFileSync } from "node:fs";

const FILE = "src/styles/global.css";
const raw = readFileSync(FILE, "utf8");
const css = raw.replace(/\/\*[\s\S]*?\*\//g, "");

const problems = [];
const check = (cond, msg) => { if (!cond) problems.push(msg); };

check(raw.length > 40_000, `${FILE} unexpectedly small (${raw.length} bytes) - not really read`);

// 1. leaf rules, so a @media wrapper is not mistaken for a declaration owner
const rules = [];
const stack = [];
for (let i = 0; i < css.length; i += 1) {
  const ch = css[i];
  if (ch === "{") {
    const from = stack.length ? stack[stack.length - 1].start : 0;
    stack.push({ selector: css.slice(from, i).split("}").pop().trim(), start: i + 1 });
  } else if (ch === "}" && stack.length) {
    const frame = stack.pop();
    if (!frame.selector.startsWith("@")) {
      rules.push({ selector: frame.selector.replace(/\s+/g, " ").trim(),
                   body: css.slice(frame.start, i) });
    }
  }
}
check(rules.length > 300, `only ${rules.length} leaf rules parsed - parser or file shape changed`);

// 2. no numeric font-weight anywhere in a component rule
for (const rule of rules) {
  for (const decl of rule.body.split(";")) {
    const [name, ...rest] = decl.split(":");
    if (name.trim() !== "font-weight") continue;
    const value = rest.join(":").trim();
    if (!/^var\(--xh-weight-(body|label|title|number|emphasis)\)$/.test(value)) {
      problems.push(`numeric/non-role font-weight: ${rule.selector} -> ${value}`);
    }
  }
}

// 3. no literal design colour outside the token block
const afterRoot = css.split(/\n\*,\n\*::before/)[1] ?? "";
check(afterRoot.length > 20_000, "could not isolate the post-root section");
const hexes = afterRoot.match(/#[0-9a-fA-F]{3,8}\b/g) ?? [];
if (hexes.length) problems.push(`literal colour(s) outside the token block: ${[...new Set(hexes)].join(", ")}`);

// 4. declared --xh-* roles must be consumed (an unused role is a fake vocabulary)
const declared = new Set([...css.matchAll(/^\s*(--xh-weight-[a-z]+)\s*:/gm)].map((m) => m[1]));
for (const token of declared) {
  if (!css.includes(`var(${token})`)) problems.push(`declared but unconsumed: ${token}`);
}
check(declared.size >= 4, `only ${declared.size} weight roles declared`);

// 5. Chinese must take no tracking and no case transform (§3, §9). The site marks its
//    Latin runs with lang="en", so that - not a class list - is the exemption.
const zhGuards = [...css.matchAll(/html\[lang="zh-CN"\][^{]*\{([^}]*)\}/g)];
check(zhGuards.length > 4, `only ${zhGuards.length} zh-CN override blocks; the derived set collapsed`);
if (!zhGuards.some((m) => /letter-spacing:\s*0/.test(m[1]))) {
  problems.push("no zh-CN letter-spacing: 0 override present");
}
if (!zhGuards.some((m) => /text-transform:\s*none/.test(m[1]))) {
  problems.push("no zh-CN text-transform: none override present");
}
for (const match of zhGuards) {
  if (/letter-spacing:\s*0?\.\d+em/.test(match[1])) {
    problems.push(`zh-CN rule still sets positive tracking: ${match[1].trim().slice(0, 60)}`);
  }
}

// 6. the brand crimson is shared with the contract, not re-derived
const accent = css.match(/--xh-accent:\s*(#[0-9a-fA-F]{6})/);
if (!accent) problems.push("--xh-accent is not declared");
else if (accent[1].toLowerCase() !== "#b43a32") {
  problems.push(`--xh-accent ${accent[1]} != contract crimson #b43a32`);
}

if (problems.length) {
  console.error(`FAIL - ${problems.length} foundation conformance problem(s):`);
  for (const p of problems) console.error("  - " + p);
  process.exit(1);
}
console.log(`PASS - foundation conformance: ${rules.length} leaf rules, ` +
            `${declared.size} weight roles, brand crimson verified`);
