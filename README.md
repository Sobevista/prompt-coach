# Prompt Coach

A beginner's guide to prompting AI — built from 15 months of real AI conversations, tuned against personality-typed personas, and packaged so a total beginner can learn without an expert in the room.

*Origin: Chelsie's idea. First dismissed, then done properly.*

## Who it's for
People new to AI who want to actually get useful results — starting with the handful of people Daniel is already teaching, and open to anyone who wants to learn. Not a commercial product; a teaching tool.

## The bet
Good prompting isn't tricks or talent — it's **three compounding habits** (give the givens → ask for a shape → don't trust the first answer) plus seven concrete moves under them. These weren't invented; they were *extracted* from a real corpus of 7,876 prompts, where the two biggest measurable changes over time were richer context and explicit output shape. If the habits are real and teachable, a beginner can be walked up the same ladder on purpose.

## What's here
- **`trainer.html`** — the centerpiece. Open in any browser (no internet, no login). A 5-step guided flow: the 3 habits, the 7 moves with before/afters, interactive practice drills with instant feedback, and a copy-paste live coach. This is the teaching surface.
- **`Primer.md`** — the readable companion. The arc, the habits, the moves, and "know your default." Keep it by the keyboard.
- **`Cheat_Sheet.md`** — one page. The pre-flight checklist and the 7 moves as one-liners.
- **`Coach_v1_system_prompt.md`** — the "brain." Paste it into any AI (ChatGPT, Claude, Gemini, Copilot) to turn that AI into a live prompting coach. Platform-agnostic.
- **`tests/Persona_Test_Log.md`** — how the coach was validated: four DISC/Kolbe/PI personas, blind diagnosis, what missed and what got fixed.

## How to use it (hand-off)
1. Send someone `trainer.html` — tell them to open it and click through.
2. Give them `Cheat_Sheet.md` to keep.
3. When they're ready to practice live, have them copy `Coach_v1_system_prompt.md` into whatever AI they use and coach them on real work.

## Kill test (is it actually working?)
Hand it to a real beginner who does **not** think like Daniel. Watch one session. **Pass** = they leave able to do a move they couldn't do before, without being handed the whole list. **Fail** = it only clicks for people who already prompt well. Until it passes with a live stranger, it stays a draft — however good the persona tests look.

## Where this is going
The product is the **loop**, not the kit (decided 2026-07-10): console + cartridges. The trainer engine becomes a reusable console; each domain the guild cages up and packages becomes a cartridge it accepts. Prompt Coach is Cartridge #1; graduates coach the next cohort and author the next cartridges. See BUILD_OUTLINE Phases 5–8.

## Status
v1.1 built (Fable review fixes applied: unified coach text, input-based over-trust trigger, tightened overwhelm cues, production drills, graduation). Persona re-run of v1.1 pending; not yet run against a live human. See BUILD_OUTLINE.
