**Eyebrow** — the small uppercase mono label above a heading. The brand's instrument-readout signature; use it to categorize a section.

```jsx
<Eyebrow>The Diagnostic</Eyebrow>
<Eyebrow tone="leak" tick={false}>Leak detected</Eyebrow>
<Eyebrow tone="onDark">What we diagnose</Eyebrow>
```

Tones: `accent` (teal, default), `neutral`, `onDark` (for ink backgrounds), `leak` (amber). Keep to 1–4 words, ALL-CAPS handled automatically.
