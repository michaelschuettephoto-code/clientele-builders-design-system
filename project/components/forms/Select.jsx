import React from 'react';

/**
 * Select — labelled dropdown built on the native <select> for reliability.
 * Matches Input's hairline styling with a custom chevron.
 */
export function Select({
  label,
  id,
  hint = null,
  error = null,
  options = [],
  placeholder = null,
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
        <select
          id={fieldId}
          aria-invalid={invalid || undefined}
          style={{
            width: '100%',
            appearance: 'none',
            WebkitAppearance: 'none',
            padding: '0.75rem 2.5rem 0.75rem 0.875rem',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-primary)',
            background: 'var(--surface-card)',
            border: `1px solid ${invalid ? 'var(--alert)' : 'var(--border-strong)'}`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            cursor: 'pointer',
            transition: 'var(--transition-base)',
          }}
          onFocus={(e) => { e.target.style.boxShadow = 'var(--focus-ring)'; e.target.style.borderColor = 'var(--brand-blue)'; }}
          onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = invalid ? 'var(--alert)' : 'var(--border-strong)'; }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const labelText = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{labelText}</option>;
          })}
        </select>
        <span aria-hidden="true" style={{ position: 'absolute', right: '0.875rem', display: 'flex', color: 'var(--text-muted)', pointerEvents: 'none', fontSize: '0' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </div>
      {(error || hint) && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', letterSpacing: '0.03em', color: invalid ? 'var(--alert)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
