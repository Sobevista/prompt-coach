# Prompt Coach — Build Outline

Owner: Daniel. Executor: Claude. Purpose: turn the corpus's prompting arc into a teaching tool for beginners.

## Phase 0 — Extract what's true (DONE)
Mined 7,876 real prompts for transferable craft. Output: 3 habits + 7 moves, backed by receipts and the evolution deltas (prompt length 50→106 words; output-shape requests 0.6%→8.9%). LOCKED: the product teaches the *habits*, not Daniel's personal voice.

## Phase 1 — The brain (DONE)
Coach system prompt, platform-agnostic. v0 → v1.
- v0: caught structural gaps (context, shape); missed behavioral ones.
- v1: added turn-2 reaction awareness + priority-ordered diagnosis with an OVERWHELM branch and an OVER-TRUST branch. LOCKED: one move per turn; never make a beginner feel dumb.

## Phase 2 — Validation rig (DONE)
Four personas across DISC quadrants (cross-ref Kolbe/PI), each with a *different* weak link, played by independent agents so inputs aren't self-authored. Blind diagnosis test.
- v0 blind: 2/4 correct (missed Ada=overwhelm, Sam=over-trust).
- v1 blind: overwhelm + over-trust branches fire correctly; misses closed. Sunny shifted shape→context (acceptable; logged).

## Phase 3 — The teaching surfaces (DONE)
- `trainer.html`: 5-step interactive flow with practice drills + instant feedback + copyable coach. Single file, offline, no login.
- `Primer.md`, `Cheat_Sheet.md`: readable companions.

## Phase 4 — Live kill test (OPEN — needs Daniel)
Run the trainer + coach with a real beginner (Chelsie / Tyler / Troy). Watch one full session. Record: which move did they learn, where did they get stuck, what confused them. This is the only test that converts "good persona scores" into "actually works."
- OPEN QUESTION (Daniel): who's the first live tester, and do we sit with them or hand it off cold? (Cold is the truer test.)

## THE ARCHITECTURE (2026-07-10): three layers — the durable one is neither product
1. **The ore (Layer 1)** — the Knowledge_Base: distilled judgment, heuristics, receipts, playbooks, plain markdown. The only irreplaceable asset. Models change, platforms die, prompts rot; plain-text knowledge doesn't.
2. **The renderings (Layer 2)** — products compiled FROM Layer 1, kept thin enough to regenerate: the **Console + cartridges** (teacher — makes people independent) and the **Dan Lens** (advisor — "Dan in the room," see `Dan_Lens/`). Two different products; merged they corrupt each other (an advisor breeds dependence, a teacher breaks it). Judgment is NEVER patched only in a prompt or HTML file — fix the KB, re-render. (The v1/trainer drift bug, elevated to law.)
3. **The loop (Layer 3)** — friction logs, coach cards, teach-back, learners' sessions feed back into Layer 1. The ore grows from every person it trains.

## THE DECISION (2026-07-10): the product is the LOOP, not the kit
Daniel's call. Not artifacts we hand out — a guild that replicates teachers. Frame: **console + cartridges** (Daniel's "fractal duplication"). The trainer engine is the console; each domain someone cages up, maps, and packages becomes a cartridge the console accepts. Prompt Coach is Cartridge #1. Goal: "the teacher everyone wished they had, subject by subject."
Open tension, to be resolved WITH Chelsie, not for her: she leans app + monetization; Daniel leans open-source guild. Natural split available when it's time: open console, cartridges licensed however their authors want. Decide at Phase 7, with real usage data in hand.

## Phase 5 — Cohort zero + v1.1 certification (CURRENT)
- Re-run the blind persona rig on v1.1 (triggers changed; v1 results don't certify it). Add persona 5: enthusiastic high-volume, NOT overwhelmed (tests the false-positive fix).
- `Friction_Log.md` in testers' hands. Chelsie already has v0; her notes are the first entries.
- Fold friction + rig results into v1.2.
- **GATE: one person who doesn't think like Daniel learns a move cold.**

## Phase 6 — The Coach Card (memory without infrastructure)
A small text block the coach writes at session end: asker default (Blurter/Rambler/Freezer/Accepter), moves landed, current edge. Learner pastes card + coach next session; coaching resumes where it left off. Repo-as-memory applied to a person. Spec in v1.2, ship in v1.3.
- **GATE: one learner's card shows real progression across 3+ sessions.**

## Phase 7 — The Console (engine/content split)
Refactor trainer.html: engine (steps, drills UI, quiz, progress via localStorage) reads a cartridge — a content block holding the domain's ~5 primitives, moves, recognition + rewrite drills, before/afters, and the coach's diagnostic branches for that domain. Front-load a short quiz that types the learner two ways: asker default (which weak link first) and G&C cognitive profile (Builder/Architect/Translator/Validator — which door the content enters through). Prompt Coach becomes Cartridge #1 with zero content loss.
- **GATE: guild members return to it unprompted; a second cartridge slots in without touching engine code.**

## Phase 8 — The Foundry (teach-back + cartridge authoring)
Graduation = coaching someone else through it. The G&C module template becomes the cartridge authoring spec, so graduates don't just coach — they cage up THEIR domain and ship Cartridge N. This is the fractal: the console replicates teachers, the foundry replicates subjects. Instrument only if the guild outgrows paste-in (wrapper + n8n pipe feeding coach cards and friction logs back into the Knowledge Base).
- **GATE: a graduate coaches a stranger; first cartridge not authored by Daniel ships.**

---

## STATE OF BUILD
- **2026-07-10** — Built Phases 0–3. Extracted habits/moves from corpus; wrote Coach v0→v1; built persona rig and blind-tested (v1 closes the v0 behavioral misses); built trainer.html + primer + cheat sheet + README. Verified trainer JS parses clean. **NEXT ACTION: Phase 4 — hand `trainer.html` to one real beginner and watch a session (recommend cold hand-off to Tyler or Troy).**
- **2026-07-10 (Loop decision)** — Daniel chose the LOOP over the kit. Roadmap rewritten as Phases 5–8 (cohort zero → Coach Card → Console → Foundry) with gates. Console/cartridge architecture adopted; Prompt Coach = Cartridge #1. Friction_Log.md created. Prompt Coach row added to Projects_Index. **NEXT ACTION: Phase 5 — persona re-run of v1.1 + get Friction_Log to Chelsie.**
- **2026-07-10 (later, Fable review)** — Independent model review found 7 issues; fixed: (1) coach text drift between .md and trainer — unified, .md is now single source of truth, trainer embeds it verbatim; (2) over-trust branch rewritten to trigger on the INPUT's known gaps instead of self-grading output (structural blind spot the persona rig couldn't catch — in live use the coach authors the answers it would have to judge); (3) overwhelm cues now require emotion/inability signal, volume words alone don't fire; (4) added Part 2 production drills (rewrite-and-reveal) to trainer practice; (5) 7 moves reordered by habit everywhere; (6) coach now graduates users instead of coaching forever; (7) cheat sheet no longer assumes reader has the folder. **v1.1 trigger changes NOT yet persona re-tested — re-run the blind rig before wide distribution. NEXT ACTION unchanged: Phase 4 live test.**
