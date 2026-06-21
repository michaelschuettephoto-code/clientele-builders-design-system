**Button** — the main action element; pill-shaped, used for every call-to-action. Reach for it whenever the user needs to do something.

```jsx
<Button variant="primary" size="lg">Take the Assessment</Button>
<Button variant="secondary" iconRight={<i data-lucide="arrow-right" />}>See the 8 categories</Button>
<Button variant="ghost" size="sm">Learn more</Button>
```

Variants: `primary` (ink-navy fill — the converting CTA), `accent` (brand blue), `secondary` (hairline outline on white), `ghost` (text-only). Sizes: `sm` / `md` / `lg`. Supports `iconLeft`, `iconRight`, `fullWidth`, `disabled`, and `href` (renders an `<a>`). Keep button labels short, plain, and instructional — never salesy.
