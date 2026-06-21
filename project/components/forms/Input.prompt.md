**Input** — labelled text field for assessment and contact forms.

```jsx
<Input label="Work email" type="email" placeholder="you@agency.com" hint="We'll send your report here." />
<Input label="Agency name" iconLeft={<i data-lucide="building-2" />} />
<Input label="Producers" type="number" error="Required to estimate your leak." />
```

Supports `label`, `hint`, `error` (turns red), `iconLeft`, and all native input attributes. Pairs with `Select` and `Button` in forms.
