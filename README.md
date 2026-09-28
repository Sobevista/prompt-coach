# Prompt Coach

A beginner's guide to prompting AI — shaped by one practitioner's experience, tested against simulated learner scenarios, and designed to help a beginner practise without an expert in the room.

*Origin: Chelsie's idea. First dismissed, then done properly.*

## Who it's for
People new to AI who want to actually get useful results — starting with the handful of people Daniel is already teaching, and open to anyone who wants to learn. Not a commercial product; a teaching tool.

## The bet
Good prompting isn't tricks or talent — this project proposes **three compounding habits** (give the givens → ask for a shape → don't trust the first answer) plus seven concrete moves under them. They were shaped by one private corpus whose owner reported 7,876 prompts and two changes over time: richer context and more explicit output shape. Those observations are not independently reproducible from this repository and should not be presented as general proof. See [Method and evidence limits](METHOD.md).

## What's here
- **`trainer.html`** — the centerpiece. Open in any browser (no internet, no login). A 5-step guided flow: the 3 habits, the 7 moves with before/afters, interactive practice drills with instant feedback, and a copy-paste live coach. This is the teaching surface.
- **`Primer.md`** — the readable companion. The arc, the habits, the moves, and "know your default." Keep it by the keyboard.
- **`Cheat_Sheet.md`** — one page. The pre-flight checklist and the 7 moves as one-liners.
- **`Coach_v1_system_prompt.md`** — the "brain." Paste it into any AI (ChatGPT, Claude, Gemini, Copilot) to turn that AI into a live prompting coach. Platform-agnostic.
- **`METHOD.md`** — provenance, limits and the evidence still needed before making validation claims.
- **`tests/Persona_Test_Log.md`** — simulated-scenario diagnostic tests: what missed, what got fixed and what still needs retesting.

## How to use it (hand-off)
1. Send someone `trainer.html` — tell them to open it and click through.
2. Give them `Cheat_Sheet.md` to keep.
3. When they're ready to practice live, have them copy `Coach_v1_system_prompt.md` into an AI tool approved for that work. Do not paste personal data, client-confidential material, credentials or commercially sensitive information into an unapproved tool.

## Verify the release

Run `node tests/verify_release.mjs`. It checks that the trainer's JavaScript parses, the embedded coach exactly matches its Markdown source, the trainer stays offline, and the safety/accessibility contract is present.

## Kill test (is it actually working?)
Hand it to a real beginner who does **not** think like Daniel. Watch one session. **Pass** = they leave able to do a move they couldn't do before, without being handed the whole list. **Fail** = it only clicks for people who already prompt well. Until it passes with a live stranger, it stays a draft — however good the persona tests look.

## Where this is going
The product is the **loop**, not the kit (decided 2026-07-10): console + cartridges. The trainer engine becomes a reusable console; each domain the guild cages up and packages becomes a cartridge it accepts. Prompt Coach is Cartridge #1; graduates coach the next cohort and author the next cartridges. See BUILD_OUTLINE Phases 5–8.

## Status
v1.2 draft prepared (evidence limits, checkable-work language, safe-data guidance, accessibility basics and release checks). The repository is MIT-licensed. The changed coach still needs its stated persona rerun and has not been tested with a live beginner. See BUILD_OUTLINE.
