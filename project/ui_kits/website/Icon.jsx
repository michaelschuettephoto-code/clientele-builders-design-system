/* Icon — Lucide wrapper. React owns only the <span>; Lucide mutates its
   innerHTML, so mounting/unmounting never conflicts with React's DOM. */
const { useRef: useRefIcon, useEffect: useEffectIcon } = React;

function Icon({ name, size = 20, strokeWidth = 2, style = {} }) {
  const ref = useRefIcon(null);
  useEffectIcon(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    try { window.lucide.createIcons({ attrs: { 'stroke-width': strokeWidth } }); } catch (e) {}
  }, [name, strokeWidth]);
  return (
    <span
      ref={ref}
      className="cb-ic"
      aria-hidden="true"
      style={{ display: 'inline-flex', width: size, height: size, color: 'inherit', flexShrink: 0, ...style }}
    />
  );
}
window.Icon = Icon;
