import React from 'react';

/**
 * Metric — a single instrument readout: a large mono value with a
 * label and optional context line. The numeric backbone of diagnostics
 * and the revenue-leak calculator.
 */
export function Metric({
  value,
  label,
  context = null,
  tone = 'default',
  align = 'left',
  size = 'md',
  className = '',
  style = {},
  ...rest
}) {
  const tones = {
    default: 'var(--text-primary)',
    accent: 'var(--scan)',
    leak: 'var(--leak)',
    healthy: 'var(--healthy)',
    onDark: 'var(--text-on-dark)',
  };
  const sizes = {
    sm: 'var(--text-xl)',
    md: 'var(--text-2xl)',
    lg: 'var(--text-3xl)',
  };
  const labelColor = tone === 'onDark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';

  return (
    <div
      className={`cb-metric ${className}`}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', textAlign: align, ...style }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: sizes[size],
          fontWeight: 'var(--weight-medium)',
          letterSpacing: '-0.01em',
          lineHeight: 1,
          color: tones[tone],
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-3xs)',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase',
          color: labelColor,
        }}
      >
        {label}
      </span>
      {context && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-xs)',
            lineHeight: 'var(--leading-normal)',
            color: tone === 'onDark' ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)',
            marginTop: '0.15rem',
          }}
        >
          {context}
        </span>
      )}
    </div>
  );
}
