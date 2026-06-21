**Metric** — a single instrument readout: large mono value + uppercase label, with optional context line.

```jsx
<Metric value="$1.2M" label="Annual revenue leak" tone="leak" />
<Metric value="37%" label="Activation rate" context="Industry healthy range is 55–70%." />
<Metric value="4.1×" label="Recruiting ROI" tone="healthy" size="lg" />
```

Pass `value` pre-formatted (you control the unit). Tones: `default`, `accent`, `leak`, `healthy`, `onDark`. Use inside Cards, in the calculator, and in report headers.
