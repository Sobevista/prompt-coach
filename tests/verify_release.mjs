import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => readFileSync(resolve(root, relativePath), 'utf8');

const trainer = read('trainer.html');
const coachSource = read('Coach_v1_system_prompt.md');
const testerBrief = read('Tester_Brief.md');
const frictionLog = read('Friction_Log.md');
const primer = read('Primer.md');
const cheatSheet = read('Cheat_Sheet.md');
const buildOutline = read('BUILD_OUTLINE.md');
const resume = read('RESUME.md');
const personaLog = read('tests/Persona_Test_Log.md');

assert.ok(existsSync(resolve(root, 'METHOD.md')), 'METHOD.md must document evidence limits');
assert.match(read('README.md'), /\[Method and evidence limits\]\(METHOD\.md\)/);
assert.doesNotMatch(read('README.md'), /so a total beginner can learn/i);
assert.doesNotMatch(trainer, /all climbed the same short ladder/i);
assert.match(coachSource, /system prompt \(v1\.2 draft\)/);
assert.match(buildOutline, /current-prompt certification \(v1\.2 draft\)/);
assert.match(resume, /v1\.2 draft/);
assert.match(personaLog, /v1\.2 draft[^\n]*NOT YET TESTED/i);

const scriptBlocks = [...trainer.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scriptBlocks.length, 1, 'trainer must have one inline script');
const trainerScript = scriptBlocks[0][1];
new vm.Script(trainerScript, { filename: 'trainer-inline.js' });

const coachFence = coachSource.match(/```[^\n]*\n([\s\S]*?)\n```/);
assert.ok(coachFence, 'coach source must contain one fenced prompt');
const tick = String.fromCharCode(96);
const promptStart = trainerScript.indexOf(`const SYS=${tick}`) + 11;
const promptEnd = trainerScript.indexOf(`${tick};`, promptStart);
assert.ok(promptStart > 10 && promptEnd > promptStart, 'trainer must embed the coach prompt');
assert.equal(
  trainerScript.slice(promptStart, promptEnd),
  coachFence[1],
  'trainer prompt must match Coach_v1_system_prompt.md exactly',
);

const forbiddenNetwork = [
  ['fetch', /\bfetch\s*\(/],
  ['XMLHttpRequest', /\bXMLHttpRequest\b/],
  ['WebSocket', /\bWebSocket\b/],
  ['sendBeacon', /\bsendBeacon\b/],
  ['external script', /<script[^>]+src\s*=\s*["']https?:/i],
  ['external stylesheet', /<link[^>]+href\s*=\s*["']https?:/i],
];
for (const [name, pattern] of forbiddenNetwork) {
  assert.doesNotMatch(trainer, pattern, `trainer must stay offline: found ${name}`);
}

for (const [name, text] of [
  ['trainer', trainer],
  ['coach prompt', coachSource],
  ['primer', primer],
  ['cheat sheet', cheatSheet],
]) {
  assert.doesNotMatch(
    text,
    /show (?:its|your) (?:work|reasoning)|ask for (?:the|your) reasoning/i,
    `${name} must teach checkable evidence rather than hidden reasoning`,
  );
}

assert.match(trainer, /class="callout safe-data"[^>]*role="note"/);
assert.match(trainer, /personal data/i);
assert.match(trainer, /client-confidential/i);
assert.match(trainer, /credentials/i);
assert.match(trainer, /commercially sensitive/i);
assert.match(testerBrief, /approved AI tool/i);
assert.match(testerBrief, /redact/i);
assert.match(frictionLog, /Name or participant code \(optional\)/);
assert.match(frictionLog, /redact/i);

assert.match(trainer, /class="progress"[^>]*role="progressbar"/);
assert.match(trainer, /aria-valuemin="1"/);
assert.match(trainer, /aria-valuemax="5"/);
assert.match(trainer, /aria-live="polite"/);
assert.match(trainer, /aria-current/);
assert.match(trainer, /:focus-visible/);
assert.match(trainer, /prefers-reduced-motion/);

console.log('Prompt Coach release checks passed.');
