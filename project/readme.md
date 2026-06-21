# Clientele Builders — Design System

> Clientele Builders is a **distribution intelligence firm** for the life
> insurance industry. It helps IMOs, agencies, and distribution leaders find
> and fix the leaks between **attention → trust → activation → revenue →
> retention** — through diagnostics, research, operational visibility, and
> strategic advisory.

This design system encodes that positioning into a reusable visual + verbal
language: **a calm diagnostic instrument**, not a loud marketing agency.

---

## The one thing to understand

Clientele Builders sells **visibility**, not solutions. Like a doctor, a
mechanic, or an auditor, it sells **diagnosis** first — the fix comes later.
Every surface should feel like *"let's see what's actually going on,"* never
*"buy our service now."* The homepage is a **door**, and the door's only job
is to get the right person to **take the Distribution Leak Assessment**.

Brand personality: **calm · intelligent · observant · strategic · trustworthy
· analytical · operator-focused.** The voice is *"smart people explaining real
business problems clearly."*

---

## Sources & provenance

This system was built from a written brand brief and homepage spec (provided
in-chat), plus one reference screenshot:

- `uploads/Blue Growth Advisors  Outsourced CFO.jpeg` — a clean blue financial
  services site, used only as a loose tonal reference (professional, blue,
  card-based). **Not** copied.
- The brief referenced two additional screenshots (`Screenshot 2026-06-09 at
  10.52.37 PM.jpeg`, `…10.51.31 PM.jpeg`) that **did not arrive** in the upload
  set. ⚠️ See CAVEATS — re-upload them to refine direction.

There was **no existing codebase, Figma, logo, or brand typeface.** The visual
language below was therefore authored from scratch to fit the brief, and key
choices (fonts, logo mark) are flagged as substitutions to confirm.

---

## CONTENT FUNDAMENTALS — how Clientele Builders writes

**Tone.** Calm, declarative, observational. The reader should feel *seen*, then
*curious*, never *sold to*. The signature move is a **reframe**: take the
problem the owner thinks they have and replace it with the real one.

> "Most organizations don't have a lead problem. They have a visibility problem."

**Casing.** Sentence case for headlines and body. Mono labels and eyebrows are
UPPERCASE with wide tracking (the "instrument readout"). Never ALL-CAPS a whole
headline.

**Person.** Speaks to **you** (the owner / leader) about **your** system. The
firm is **we**, used sparingly and confidently — "We start with diagnosis,"
"That is where we help." Never "I."

**Rhythm.** Short lines. Frequent paragraph breaks. One idea per line. Lists are
clipped, not flowery. Lean on **contrast pairs**: *more leads* vs *visibility*;
*symptoms* vs *source*; *do more* vs *see more*.

**Vocabulary (own these words).** Distribution leak · visibility · diagnosis ·
the chain (attention → trust → activation → revenue → retention) · momentum ·
pressure points · friction · the source vs the symptom · the eight systems.

**Numbers.** Used as *evidence of leakage*, not hype. Frame as recoverable /
protected revenue ("+$640K / yr if activation improves 10%"). Always anchored to
a lever, never a vanity stat.

**Do NOT sound like.** ❌ "Unlock explosive growth!" ❌ "The #1 platform for
IMOs." ❌ "Revolutionary AI." ❌ "Limited spots — act now." No exclamation
hype, no superlatives, no urgency theater. **No emoji** in product/brand copy.

---

## VISUAL FOUNDATIONS

**The metaphor: an MRI machine for distribution.** Precise, observant,
trustworthy. Dark "instrument" grounds (ink navy) for moments of focus; calm,
light, generously-spaced surfaces for reading.

**Color.** Deep **ink navy** (`--ink #0B1A2E`) is the dominant brand color —
used for dark hero/CTA grounds, primary buttons, and headings. A confident
**action blue** (`--brand-blue #1E5FD0`) drives links and accent CTAs. The
signature is the **diagnostic teal "scan"** (`--scan #1BA7C2`) — eyebrows,
highlights, the "watch" state. Two functional signals carry the whole product
story: **amber `--leak`** (revenue leaking) and **green `--healthy`** (a healthy
system). Neutrals are a **cool slate ramp**. Imagery, when used, skews cool and
analytical (data-viz overlays, deep blues), never warm/lifestyle.

**Type.**
- **Newsreader** (serif) — display & headlines. Editorial authority; "the
  thinking." Weights 400/500, tight tracking (-0.02 to -0.03em).
- **Hanken Grotesk** (sans) — body & UI. Warm, highly readable; "the operator."
- **IBM Plex Mono** — eyebrows, tags, metric values, micro-labels; "the
  instrument readout." UPPERCASE + 0.14em tracking for labels; tabular-nums for
  figures.

**Spacing.** 8px base grid. Generous, calm whitespace — ideas get room. Sections
use `--section-y` (clamped 4→8rem).

**Backgrounds.** Mostly flat: light `--surface-page` and white cards, alternated
with full `--ink` sections for rhythm. The hero uses a subtle **radial teal scan
glow** + a faint **64px grid overlay** to read as an instrument — used *once*,
not everywhere. No heavy gradients, no purple, no noise textures.

**Borders & cards.** Hairline borders (`--border-default`, cool slate). Cards are
white, radius `--radius-lg (14px)`, hairline border + soft shadow. Corner radii
are **modest** (6–20px); pills (`--radius-pill`) only for buttons & badges.

**Shadows.** Soft and **navy-tinted** (never neutral gray), restrained. A special
`--shadow-scan` teal ring is reserved for the diagnostic accent.

**Motion.** Calm and observant. Short eased fades/lifts (`--ease-out`,
140–420ms). HealthBars fill on a slow ease. **No bounces, no spring, nothing
playful.** Respect reduced-motion.

**Hover / press.** Buttons darken slightly on hover (`--action-bg-hover`); cards
lift (shadow + 1–2px translate) when `interactive`. Links underline. Presses are
a small settle, never a big shrink.

**Layout rules.** Sticky translucent (blurred) nav. Max content width 1200px.
Two-column hero collapses to one below 1000px. The diagnostic scorecard
(stacked HealthBars) is the recurring hero visual.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) (`lucide@0.456.0`, loaded from CDN).
  Chosen for its **calm, even, 2px-stroke outline** style — analytical and
  trustworthy, matching the instrument aesthetic. ⚠️ This is a **substitution**
  (no brand icon set was provided); swap if a licensed set arrives.
- **Usage:** line icons only, `stroke-width: 2`, sized 16–22px in UI, ~22px in
  category cards. Color inherits (`currentColor`) — teal/navy on light, white on
  ink, amber when flagging a leak. Wrapped in the `Icon` component (see
  `ui_kits/website/Icon.jsx`) so Lucide's DOM swap never fights React.
- **The 8 diagnostic categories → icons:** Recruiting `user-plus` · Onboarding
  `clipboard-check` · Marketing `megaphone` · Sales Process `handshake` ·
  Persistency `shield-check` · Compensation `scale` · Leadership
  `graduation-cap` · Technology & Data `activity`.
- **Logo mark:** `assets/logo-mark.svg` — a geometric **diagnostic scan ring**
  (concentric rings + crosshair) with one **teal node** offset on the ring (the
  *detected leak*). Authored from scratch as a placeholder wordmark/mark. ⚠️
  Confirm or replace with a real logo.
- **No emoji.** No decorative unicode glyphs. Icons are functional, never
  ornamental.

---

## Index / manifest

**Foundations**
- `styles.css` — entry point (consumers link this; `@import`s only)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
  `fonts.css` (Google Fonts), `base.css` (resets)
- `guidelines/*.html` — specimen cards (Type, Colors, Spacing, Brand)

**Components** (`window.ClienteleBuildersDesignSystem_6b1cb1`)
- `components/core/` — **Button**, **Badge**, **Eyebrow**, **Card**
- `components/data/` — **Metric**, **HealthBar** (the leak meter)
- `components/forms/` — **Input**, **Select**

Each component has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and the
directory has a `@dsCard` HTML preview.

**UI kits**
- `ui_kits/website/` — the marketing **homepage** (the "door"): sticky nav,
  ink hero with a live diagnostic panel, the leak chain, the 8-part diagnostic
  grid, the lever/calculator teaser, research themes, final CTA, footer — plus
  an interactive **assessment overlay** (intake → sample scorecard result).
  Entry: `ui_kits/website/index.html`.

**Brand assets**
- `assets/logo-mark.svg`

**Skill**
- `SKILL.md` — portable Agent Skill front-matter for use in Claude Code.
