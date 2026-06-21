import React from 'react';

/**
 * Button — the primary action element for Clientele Builders.
 * Primary uses ink-navy (premium, trustworthy, high-converting);
 * accent uses brand blue; secondary is a hairline outline; ghost is text-only.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  href,
  type = 'button',
  className = '',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '0.5rem 0.875rem', fontSize: 'var(--text-xs)', gap: '0.4rem' },
    md: { padding: '0.75rem 1.25rem', fontSize: 'var(--text-sm)', gap: '0.5rem' },
    lg: { padding: '1rem 1.75rem', fontSize: 'var(--text-base)', gap: '0.6rem' },
  };

  const variants = {
    primary: {
      background: 'var(--action-bg)',
      color: 'var(--action-fg)',
      border: '1px solid var(--action-bg)',
    },
    accent: {
      background: 'var(--action-accent-bg)',
      color: '#fff',
      border: '1px solid var(--action-accent-bg)',
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent',
    },
  };

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sizes[size].fontSize,
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: '0.005em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-base)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style,
  };

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      className={`cb-button cb-button--${variant} ${className}`}
      style={base}
      data-variant={variant}
      {...tagProps}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
