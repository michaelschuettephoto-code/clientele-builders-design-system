import React from 'react';

/**
 * HealthBar — the diagnostic leak meter. Visualizes the health of a
 * single distribution area on a 0–100 scale. Tone derives automatically
 * from the value (leak < 40, watch < 70, healthy ≥ 70) unless overridden.
 */
export function HealthBar({
  label,
  value = 0,
  tone = 'auto',
  showValue = true,
  statusText = null,
  onDark = false,
  className = '',
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const resolved = tone === 'auto' ? (pct < 40 ? 'leak' : pct < 70 ? 'watch' : 'healthy') : tone;
  const colors = {
    leak: 'var(--leak)',
    watch: 'var(--scan)',
    healthy: 'var(--healthy)',
  };
  const fill = colors[resolved] || 'var(--scan)';
  const track = onDark ? 'rgba(231,238,246,0.12)' : 'var(--neutral-100)';
  const labelColor = onDark ? 'var(--text-on-dark)' : 'var(--text-primary)';
  const metaColor = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';

  return (
    <div className={`cb-healthbar ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: labelColor }}>
          {label}
        </span>
        {showValue && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: fill, fontVariantNumeric: 'tabular-nums' }}>
            {pct}
            <span style={{ color: metaColor }}>/100</span>
          </span>
        )}
      </div>
      <div style={{ position: 'relative', height: '8px', borderRadius: 'var(--radius-pill)', background: track, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: '0 auto 0 0',
            width: `${pct}%`,
            background: fill,
            borderRadius: 'var(--radius-pill)',
            transition: 'width var(--dur-slow) var(--ease-out)',
          }}
        />
      </div>
      {statusText && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: fill }}>
          {statusText}
        </span>
      )}
    </div>
  );
}
