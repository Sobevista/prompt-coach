# Prompt Coach — Persona Test Log

## The rig
Four personas spanning DISC quadrants, cross-referenced to Kolbe action modes and PI reference profiles, each with a **different** designed weak link so the test measures whether the coach diagnoses the *right* one. Personas are played by independent agents (they don't see the coach's reasoning), so test inputs aren't authored to flatter the coach. Coach is tested **blind**: given only the system prompt and the raw opening messages, no answer key.

| Persona | DISC | Weak link (design key) |
|---|---|---|
| Push | D | Missing context / shape |
| Sunny | I | Buries the ask / no shape |
| Ada | C | Overwhelm — won't chunk; needs to verify |
| Sam | S | Over-trust — accepts the first answer |

## v0 blind result — 2/4
- Push → "no context" ✅
- Sunny → "no context, but no shape" ✅ (credited her context)
- Ada → "no context" ❌ (saw the fear cue, defaulted to context anyway)
- Sam → "no context" ⚠️ (over-trust is invisible at turn 1 — not a fair miss, but not the target either)

**Root cause:** v0 diagnosed from the first message only, so it over-indexed on "add context." Behavioral weak links (overwhelm, over-trust) surface in *reactions*, not openers.

## v1 changes
1. Turn-2 reaction awareness ("read how they reacted, not just what they asked").
2. Priority-ordered diagnosis: **OVERWHELM/FEAR** cue → chunk to a checkable step + how to verify it (beats everything). **OVER-TRUST** (accepted a thin answer / never pushes back) → teach "don't take the first answer."

## v1 blind result — behavioral misses closed
- Push → "no context" ✅
- Sunny → "no context" (shifted from shape; both valid, priority ranks context first) — acceptable, logged
- Ada → **FEAR cue → "start with just income + the over/under total, show the formula in plain English, give me a 2-line test to confirm it before adding expenses."** ✅ Fixed.
- Sam (turn-2, accepted a generic bullet) → **OVER-TRUST → "that bullet's generic — make it ask you 3 questions, then give 3 versions to choose from."** ✅ Fixed.

## v1.1 (2026-07-10) — NOT YET RE-TESTED
Fable review changed two triggers: over-trust now fires on the *input's* known gaps (no self-grading of the coach's own output), and overwhelm requires an emotion/inability cue (volume words alone don't fire). Also added graduation. These change diagnostic behavior, so the v1 blind results above do NOT certify v1.1. **Re-run the four-persona blind rig (add a fifth: enthusiastic high-volume Sunny-type saying "so much going on!" who is NOT overwhelmed — tests the false-positive fix) before wide distribution.**

## v1.2 draft (2026-09-27) — NOT YET TESTED
The review draft replaces requests for hidden reasoning with checkable assumptions, criteria, sources, calculations, uncertainty and verification steps. It also adds a safe-data rule to the coach. These are behavior changes, so neither the v1 results nor an unrun v1.1 plan certify this prompt. Re-run the same five-scenario rig against the exact fenced prompt in `Coach_v1_system_prompt.md`, then conduct the cold beginner test.

## Still open
- **Live human test not yet done.** Simulated learner agents are a proxy. The real kill test is a beginner who doesn't think like Daniel (Phase 4).
- Watch Sunny-type users: the context-over-shape priority means "ramblers" get context coaching first and shape on the next turn. Confirm that sequence feels right with a real rambler.
