**HealthBar** — the diagnostic leak meter. Shows the health of one distribution area on a 0–100 scale, auto-colored: amber = leak, teal = watch, green = healthy.

```jsx
<HealthBar label="Onboarding" value={32} statusText="Significant leak" />
<HealthBar label="Sales Process" value={64} />
<HealthBar label="Persistency" value={81} />
<HealthBar label="Recruiting" value={28} onDark statusText="Critical" />
```

The signature visual of the Distribution Leak Diagnostic. Stack several to form a system scorecard. Pass `onDark` on ink surfaces; override the auto-color with `tone`.
