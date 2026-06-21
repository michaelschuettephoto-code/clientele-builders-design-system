import React from 'react';

/**
 * Badge — compact status/label pill. Tones map to the brand's signal
 * system: scan (diagnostic), leak (amber), healthy (green), neutral.
 */
export function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  className = '',
  style = {},
  ...rest
}) {
  const palette = {
    neutral: { soft: ['var(--neutral-100)', 'var(--neutral-700)'], solid: ['var(--ink)', '#fff'] },
    scan:    { soft: ['var(--scan-100)', '#0E6E80'], solid: ['var(--scan)', '#fff'] },
    leak:    { soft: ['var(--leak-100)', '#9A5A12'], solid: ['var(--leak)', '#fff'] },
    healthy: { soft: ['var(--healthy-100)', '#1C6B47'], solid: ['var(--healthy)', '#fff'] },
    brand:   { soft: ['#E3ECF8', 'var(--brand)'], solid: ['var(--brand)', '#fff'] },
  };
  const [bg, fg] = palette[tone][variant];

  return (
    <span
      className={`cb-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.25rem 0.625rem',
        background: bg,
        color: fg,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-3xs)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          aria-hidden="true"
          style={{ width: '6px', height: '6px', borderRadius: '999px', background: 'currentColor' }}
        />
      )}
      {children}
    </span>
  );
}
