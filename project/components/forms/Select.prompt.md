**Select** — labelled native dropdown, styled to match `Input`.

```jsx
<Select
  label="Organization type"
  placeholder="Choose one"
  options={['IMO', 'Agency', 'Distribution leader', 'Carrier']}
/>
<Select label="Agents" options={[{value:'1', label:'1–25'},{value:'2',label:'26–100'},{value:'3',label:'100+'}]} />
```

Accepts string options or `{value,label}` objects. Same `label`/`hint`/`error` API as `Input`.
