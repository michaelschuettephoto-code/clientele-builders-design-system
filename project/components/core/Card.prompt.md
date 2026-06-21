**Card** — the base surface container; everything content-bearing sits in one.

```jsx
<Card variant="surface" interactive>…diagnostic category…</Card>
<Card variant="ink" padding="xl">…dark instrument panel…</Card>
<Card variant="outline" elevation="none">…quiet block…</Card>
```

Variants: `surface` (white, default), `outline`, `ink` (dark), `sunken`. Control `elevation` (none→lg), `padding` (none→xl), and `interactive` for hover lift. Corner radius is fixed to the brand's `--radius-lg`.
