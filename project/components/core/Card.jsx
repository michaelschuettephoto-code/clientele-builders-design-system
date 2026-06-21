import React from 'react';

/**
 * Card — the base surface container. `surface` is white-on-page (default),
 * `ink` is the dark instrument surface, `outline` is borderless hairline.
 * Set `interactive` for hover lift on clickable cards.
 */
export function Card({
  children,
  variant = 'surface',
  elevation = 'sm',
  interactive = false,
  padding = 'lg',
  className = '',
  style = {},
  ...rest
}) {
  const shadows = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  };
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)',
    xl: 'var(--space-8)',
  };
  const variants = {
    surface: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)',
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)',
    },
    ink: {
      background: 'var(--surface-ink)',
      border: '1px solid var(--border-on-dark)',
      color: 'var(--text-on-dark)',
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-primary)',
    },
  };

  return (
    <div
      className={`cb-card ${interactive ? 'cb-card--interactive' : ''} ${className}`}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: pads[padding],
        boxShadow: variant === 'ink' ? 'var(--shadow-lg)' : shadows[elevation],
        transition: 'var(--transition-base)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
