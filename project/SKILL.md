---
name: clientele-builders-design
description: Use this skill to generate well-branded interfaces and assets for Clientele Builders, a distribution intelligence firm for life insurance, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/` for the visual foundations, `components/` for the React primitives, `ui_kits/website/` for full-screen patterns, `assets/` for the logo).

**The core idea before you design anything:** Clientele Builders sells
*visibility / diagnosis*, not solutions. The brand is a calm diagnostic
instrument — an "MRI machine for distribution" — never a loud marketing agency.
Tone is "smart people explaining real business problems clearly." Lead with the
reframe ("not a lead problem — a visibility problem"); the homepage is a door
whose only job is getting the right person to take the Distribution Leak
Assessment.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy
assets out and create static HTML files for the user to view. If working on
production code, copy assets and read the rules here to become an expert in
designing with this brand.

If the user invokes this skill without other guidance, ask them what they want
to build or design, ask a few focused questions, and act as an expert designer
who outputs HTML artifacts *or* production code, depending on the need.

Quick reference:
- Fonts: Newsreader (serif display), Hanken Grotesk (sans body), IBM Plex Mono (labels/data) — via Google Fonts.
- Color: ink navy `#0B1A2E`, action blue `#1E5FD0`, scan teal `#1BA7C2`; amber `--leak`, green `--healthy`. Cool slate neutrals.
- Icons: Lucide, 2px stroke, line style.
- Signature visual: stacked `HealthBar` leak meters forming a system scorecard.
- Never: hype, exclamation marks, emoji, purple gradients, urgency theater.
