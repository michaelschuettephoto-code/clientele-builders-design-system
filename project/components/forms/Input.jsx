import React from 'react';

/**
 * Input — labelled text field for assessment and contact forms.
 * Hairline border, calm focus ring, mono helper text.
 */
export function Input({
  label,
  id,
  hint = null,
  error = null,
  iconLeft = null,
  type = 'text',
  className = '',
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `cb-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const invalid = Boolean(error);
  return (
    <div className={`cb-field ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && (
          <span style={{ position: 'absolute', left: '0.875rem', display: 'flex', color: 'var(--text-muted)', pointerEvents: 'none' }}>
            {iconLeft}
          </span>
        )}
        <input
          id={fieldId}
          type={type}
          aria-invalid={invalid || undefined}
          style={{
            width: '100%',
            padding: iconLeft ? '0.75rem 0.875rem 0.75rem 2.5rem' : '0.75rem 0.875rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-primary)',
            background: 'var(--surface-card)',
            border: `1px solid ${invalid ? 'var(--alert)' : 'var(--border-strong)'}`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            transition: 'var(--transition-base)',
          }}
          onFocus={(e) => { if (!invalid) e.target.style.boxShadow = 'var(--focus-ring)'; e.target.style.borderColor = invalid ? 'var(--alert)' : 'var(--brand-blue)'; }}
          onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = invalid ? 'var(--alert)' : 'var(--border-strong)'; }}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', letterSpacing: '0.03em', color: invalid ? 'var(--alert)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
