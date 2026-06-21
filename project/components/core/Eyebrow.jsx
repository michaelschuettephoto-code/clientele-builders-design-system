import React from 'react';

/**
 * Eyebrow — the small uppercase mono label that sits above headings.
 * The instrument-readout signature of the brand. Often paired with a
 * leading tick mark.
 */
export function Eyebrow({
  children,
  tone = 'accent',
  tick = true,
  className = '',
  style = {},
  ...rest
}) {
  const tones = {
    accent: 'var(--scan)',
    neutral: 'var(--text-muted)',
    onDark: 'var(--text-on-dark-muted)',
    leak: 'var(--leak)',
  };
  return (
    <span
      className={`cb-eyebrow ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: tones[tone],
        ...style,
      }}
      {...rest}
    >
      {tick && (
        <span
          aria-hidden="true"
          style={{
            width: '14px',
            height: '1.5px',
            background: 'currentColor',
            opacity: 0.7,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}
