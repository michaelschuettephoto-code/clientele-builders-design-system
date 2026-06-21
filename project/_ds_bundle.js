/* @ds-bundle: {"format":3,"namespace":"ClienteleBuildersDesignSystem_6b1cb1","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"HealthBar","sourcePath":"components/data/HealthBar.jsx"},{"name":"Metric","sourcePath":"components/data/Metric.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7a5185e6947c","components/core/Button.jsx":"e4b647bf9a01","components/core/Card.jsx":"535dfff36104","components/core/Eyebrow.jsx":"348942616a1f","components/data/HealthBar.jsx":"253525ed43cc","components/data/Metric.jsx":"d202c191faac","components/forms/Input.jsx":"4eeaa91bf555","components/forms/Select.jsx":"d0569287fdfc","ui_kits/website/Assessment.jsx":"4e6fc19623a5","ui_kits/website/Chrome.jsx":"098bb13e9836","ui_kits/website/Hero.jsx":"0e69bf6b5424","ui_kits/website/Icon.jsx":"76c3fde895b7","ui_kits/website/Sections.jsx":"ddf822059ed7","ui_kits/website/WhyResearch.jsx":"ea8c02dc802f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClienteleBuildersDesignSystem_6b1cb1 = window.ClienteleBuildersDesignSystem_6b1cb1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact status/label pill. Tones map to the brand's signal
 * system: scan (diagnostic), leak (amber), healthy (green), neutral.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  className = '',
  style = {},
  ...rest
}) {
  const palette = {
    neutral: {
      soft: ['var(--neutral-100)', 'var(--neutral-700)'],
      solid: ['var(--ink)', '#fff']
    },
    scan: {
      soft: ['var(--scan-100)', '#0E6E80'],
      solid: ['var(--scan)', '#fff']
    },
    leak: {
      soft: ['var(--leak-100)', '#9A5A12'],
      solid: ['var(--leak)', '#fff']
    },
    healthy: {
      soft: ['var(--healthy-100)', '#1C6B47'],
      solid: ['var(--healthy)', '#fff']
    },
    brand: {
      soft: ['#E3ECF8', 'var(--brand)'],
      solid: ['var(--brand)', '#fff']
    }
  };
  const [bg, fg] = palette[tone][variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `cb-badge ${className}`,
    style: {
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
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '999px',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action element for Clientele Builders.
 * Primary uses ink-navy (premium, trustworthy, high-converting);
 * accent uses brand blue; secondary is a hairline outline; ghost is text-only.
 */
function Button({
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
    sm: {
      padding: '0.5rem 0.875rem',
      fontSize: 'var(--text-xs)',
      gap: '0.4rem'
    },
    md: {
      padding: '0.75rem 1.25rem',
      fontSize: 'var(--text-sm)',
      gap: '0.5rem'
    },
    lg: {
      padding: '1rem 1.75rem',
      fontSize: 'var(--text-base)',
      gap: '0.6rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-bg)',
      color: 'var(--action-fg)',
      border: '1px solid var(--action-bg)'
    },
    accent: {
      background: 'var(--action-accent-bg)',
      color: '#fff',
      border: '1px solid var(--action-accent-bg)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    }
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
    ...style
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `cb-button cb-button--${variant} ${className}`,
    style: base,
    "data-variant": variant
  }, tagProps, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base surface container. `surface` is white-on-page (default),
 * `ink` is the dark instrument surface, `outline` is borderless hairline.
 * Set `interactive` for hover lift on clickable cards.
 */
function Card({
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
    lg: 'var(--shadow-lg)'
  };
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)',
    xl: 'var(--space-8)'
  };
  const variants = {
    surface: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)'
    },
    ink: {
      background: 'var(--surface-ink)',
      border: '1px solid var(--border-on-dark)',
      color: 'var(--text-on-dark)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cb-card ${interactive ? 'cb-card--interactive' : ''} ${className}`,
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      boxShadow: variant === 'ink' ? 'var(--shadow-lg)' : shadows[elevation],
      transition: 'var(--transition-base)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the small uppercase mono label that sits above headings.
 * The instrument-readout signature of the brand. Often paired with a
 * leading tick mark.
 */
function Eyebrow({
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
    leak: 'var(--leak)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `cb-eyebrow ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: tones[tone],
      ...style
    }
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '14px',
      height: '1.5px',
      background: 'currentColor',
      opacity: 0.7,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data/HealthBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HealthBar — the diagnostic leak meter. Visualizes the health of a
 * single distribution area on a 0–100 scale. Tone derives automatically
 * from the value (leak < 40, watch < 70, healthy ≥ 70) unless overridden.
 */
function HealthBar({
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
  const resolved = tone === 'auto' ? pct < 40 ? 'leak' : pct < 70 ? 'watch' : 'healthy' : tone;
  const colors = {
    leak: 'var(--leak)',
    watch: 'var(--scan)',
    healthy: 'var(--healthy)'
  };
  const fill = colors[resolved] || 'var(--scan)';
  const track = onDark ? 'rgba(231,238,246,0.12)' : 'var(--neutral-100)';
  const labelColor = onDark ? 'var(--text-on-dark)' : 'var(--text-primary)';
  const metaColor = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cb-healthbar ${className}`,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.55rem',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: labelColor
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: fill,
      fontVariantNumeric: 'tabular-nums'
    }
  }, pct, /*#__PURE__*/React.createElement("span", {
    style: {
      color: metaColor
    }
  }, "/100"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '8px',
      borderRadius: 'var(--radius-pill)',
      background: track,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      width: `${pct}%`,
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), statusText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: fill
    }
  }, statusText));
}
Object.assign(__ds_scope, { HealthBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/HealthBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Metric — a single instrument readout: a large mono value with a
 * label and optional context line. The numeric backbone of diagnostics
 * and the revenue-leak calculator.
 */
function Metric({
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
    onDark: 'var(--text-on-dark)'
  };
  const sizes = {
    sm: 'var(--text-xl)',
    md: 'var(--text-2xl)',
    lg: 'var(--text-3xl)'
  };
  const labelColor = tone === 'onDark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cb-metric ${className}`,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: sizes[size],
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '-0.01em',
      lineHeight: 1,
      color: tones[tone],
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), context && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      lineHeight: 'var(--leading-normal)',
      color: tone === 'onDark' ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)',
      marginTop: '0.15rem'
    }
  }, context));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Metric.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field for assessment and contact forms.
 * Hairline border, calm focus ring, mono helper text.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: `cb-field ${className}`,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '0.875rem',
      display: 'flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    "aria-invalid": invalid || undefined,
    style: {
      width: '100%',
      padding: iconLeft ? '0.75rem 0.875rem 0.75rem 2.5rem' : '0.75rem 0.875rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--alert)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'var(--transition-base)'
    },
    onFocus: e => {
      if (!invalid) e.target.style.boxShadow = 'var(--focus-ring)';
      e.target.style.borderColor = invalid ? 'var(--alert)' : 'var(--brand-blue)';
    },
    onBlur: e => {
      e.target.style.boxShadow = 'none';
      e.target.style.borderColor = invalid ? 'var(--alert)' : 'var(--border-strong)';
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: '0.03em',
      color: invalid ? 'var(--alert)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — labelled dropdown built on the native <select> for reliability.
 * Matches Input's hairline styling with a custom chevron.
 */
function Select({
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
  return /*#__PURE__*/React.createElement("div", {
    className: `cb-field ${className}`,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    "aria-invalid": invalid || undefined,
    style: {
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
      transition: 'var(--transition-base)'
    },
    onFocus: e => {
      e.target.style.boxShadow = 'var(--focus-ring)';
      e.target.style.borderColor = 'var(--brand-blue)';
    },
    onBlur: e => {
      e.target.style.boxShadow = 'none';
      e.target.style.borderColor = invalid ? 'var(--alert)' : 'var(--border-strong)';
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '0.875rem',
      display: 'flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none',
      fontSize: '0'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: '0.03em',
      color: invalid ? 'var(--alert)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Assessment.jsx
try { (() => {
const CB_A = window.ClienteleBuildersDesignSystem_6b1cb1;
const {
  useState: useStateA
} = React;

/* ---- Assessment overlay: intake → sample diagnostic result ---- */
function Assessment({
  onClose
}) {
  const {
    Button,
    Eyebrow,
    Input,
    Select,
    HealthBar,
    Metric,
    Badge,
    Card
  } = CB_A;
  const [step, setStep] = useStateA(0); // 0 intake, 1 result

  const scores = [{
    label: 'Recruiting',
    value: 34
  }, {
    label: 'Onboarding',
    value: 41
  }, {
    label: 'Marketing',
    value: 58
  }, {
    label: 'Sales Process',
    value: 63
  }, {
    label: 'Persistency',
    value: 81
  }, {
    label: 'Compensation',
    value: 72
  }, {
    label: 'Leadership',
    value: 55
  }, {
    label: 'Technology & Data',
    value: 38
  }];
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      background: 'rgba(11,26,46,0.55)',
      backdropFilter: 'blur(6px)',
      padding: '40px 20px',
      overflowY: 'auto'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      width: '100%',
      maxWidth: step === 0 ? 560 : 720,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      zIndex: 2,
      width: 36,
      height: 36,
      borderRadius: '999px',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  })), step === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 36
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16,
      display: 'inline-flex'
    }
  }, "Step 1 of 2 \xB7 Intake"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 28,
      letterSpacing: '-.02em',
      margin: '0 0 8px',
      color: 'var(--text-primary)'
    }
  }, "Let's locate your biggest leak"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: '0 0 26px'
    }
  }, "A few quick questions. The full diagnostic runs inside the assessment \u2014 this is a preview of what it reveals."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Organization type",
    placeholder: "Choose one",
    options: ['IMO', 'Agency', 'Distribution leader', 'Carrier']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Active producers",
    placeholder: "Select range",
    options: ['1–25', '26–100', '101–500', '500+']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Where do you suspect the biggest leak is?",
    placeholder: "Choose one",
    options: ['Recruiting', 'Onboarding / activation', 'Sales process', 'Persistency', "I'm not sure — that's why I'm here"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@agency.com",
    hint: "Your full report is sent here."
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setStep(1),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Reveal my sample scorecard")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'var(--text-on-dark)',
      padding: '32px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 14,
      display: 'inline-flex'
    }
  }, "Sample diagnostic result"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: '-.02em',
      margin: 0,
      color: '#fff'
    }
  }, "Your biggest leak is ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--leak)'
    }
  }, "Recruiting"))), /*#__PURE__*/React.createElement(Metric, {
    value: "$1.2M",
    label: "Est. annual leak",
    tone: "leak",
    align: "right"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px 40px',
      marginBottom: 28
    }
  }, scores.map(s => /*#__PURE__*/React.createElement(HealthBar, {
    key: s.label,
    label: s.label,
    value: s.value
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: "md",
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--leak)',
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down-circle",
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "What this means:"), " you're attracting attention but losing it before activation. The fix usually isn't more recruiting \u2014 it's the path between joining and first production."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Book a strategy call"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => setStep(0),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 17
    })
  }, "Start over"))))));
}
window.Assessment = Assessment;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Assessment.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  useState,
  useEffect,
  useRef
} = React;
const CB = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Nav ------------------------------------------------------------ */
function Nav({
  onAssess
}) {
  const {
    Button
  } = CB;
  const links = ['How it works', 'The 8 categories', 'Why it matters', 'Research'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(246,248,251,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 19,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "Clientele Builders")), /*#__PURE__*/React.createElement("nav", {
    className: "cb-nav-links",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onAssess
  }, "Take the Assessment")));
}

/* ---- Footer --------------------------------------------------------- */
function Footer() {
  const cols = [{
    h: 'Diagnostic',
    items: ['Take the Assessment', 'The 8 categories', 'Revenue Leak Calculator', 'Sample report']
  }, {
    h: 'Firm',
    items: ['What we believe', 'How we work', 'Who we serve', 'Contact']
  }, {
    h: 'Intelligence',
    items: ['Research notes', 'Distribution index', 'Benchmarks']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-container",
    style: {
      paddingTop: 72,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-footer-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 19,
      color: '#fff'
    }
  }, "Clientele Builders")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)',
      maxWidth: 300
    }
  }, "The intelligence layer for life insurance distribution. We help you see where momentum is breaking \u2014 before you invest in the wrong solution.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--scan)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 Clientele Builders"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Not a marketing agency. We start with diagnosis."))));
}
Object.assign(window, {
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const CB_H = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Hero: ink instrument ground + live diagnostic panel ---- */
function Hero({
  onAssess
}) {
  const {
    Button,
    Eyebrow,
    HealthBar,
    Badge
  } = CB_H;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-30%',
      right: '-10%',
      width: 720,
      height: 720,
      background: 'radial-gradient(circle, rgba(27,167,194,0.18), rgba(27,167,194,0) 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(231,238,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(231,238,246,0.04) 1px, transparent 1px)',
      backgroundSize: '64px 64px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cb-container cb-hero-grid",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 64,
      alignItems: 'center',
      paddingTop: 96,
      paddingBottom: 104
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 22,
      display: 'inline-flex'
    }
  }, "The Distribution Leak Diagnostic"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      color: '#fff',
      fontSize: 'clamp(2.6rem, 5vw, 4.25rem)',
      lineHeight: 1.04,
      letterSpacing: '-.03em',
      margin: '0 0 24px'
    }
  }, "Find the leaks in your distribution\xA0system"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-on-dark)',
      maxWidth: 520,
      margin: '0 0 14px',
      opacity: 0.92
    }
  }, "Most life insurance organizations don't have a lead problem."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-on-dark-muted)',
      maxWidth: 520,
      margin: '0 0 36px'
    }
  }, "They have recruiting, onboarding, activation, trust, sales, retention, or data leaks \u2014 quietly costing them revenue every month."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onAssess
  }, "Take the Distribution Leak Assessment"), /*#__PURE__*/React.createElement("a", {
    href: "#categories",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      color: '#fff',
      textDecoration: 'none'
    }
  }, "See what we diagnose", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 44,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)',
      letterSpacing: '.04em'
    }
  }, "8-PART DIAGNOSTIC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)',
      letterSpacing: '.04em'
    }
  }, "~6 MINUTES"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)',
      letterSpacing: '.04em'
    }
  }, "FOR IMOs & AGENCIES"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-2)',
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-xl)',
      padding: 28,
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, "System scorecard \xB7 sample"), /*#__PURE__*/React.createElement(Badge, {
    tone: "leak",
    dot: true
  }, "2 leaks found")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(HealthBar, {
    label: "Recruiting",
    value: 34,
    onDark: true,
    statusText: "Significant leak"
  }), /*#__PURE__*/React.createElement(HealthBar, {
    label: "Onboarding",
    value: 48,
    onDark: true
  }), /*#__PURE__*/React.createElement(HealthBar, {
    label: "Sales Process",
    value: 67,
    onDark: true
  }), /*#__PURE__*/React.createElement(HealthBar, {
    label: "Persistency",
    value: 83,
    onDark: true,
    statusText: "Healthy"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Est. annual leak"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 30,
      fontWeight: 500,
      color: 'var(--leak)'
    }
  }, "$1.2M")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
/* Icon — Lucide wrapper. React owns only the <span>; Lucide mutates its
   innerHTML, so mounting/unmounting never conflicts with React's DOM. */
const {
  useRef: useRefIcon,
  useEffect: useEffectIcon
} = React;
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style = {}
}) {
  const ref = useRefIcon(null);
  useEffectIcon(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    try {
      window.lucide.createIcons({
        attrs: {
          'stroke-width': strokeWidth
        }
      });
    } catch (e) {}
  }, [name, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "cb-ic",
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: 'inherit',
      flexShrink: 0,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const CB_P = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Section 2: the distribution chain & where it leaks ---- */
function LeakPipeline() {
  const {
    Eyebrow
  } = CB_P;
  const stages = [{
    name: 'Attention',
    icon: 'eye'
  }, {
    name: 'Recruiting',
    icon: 'user-plus',
    leak: 'Wrong people enter'
  }, {
    name: 'Licensing',
    icon: 'badge-check'
  }, {
    name: 'Activation',
    icon: 'zap',
    leak: 'Never get going'
  }, {
    name: 'Production',
    icon: 'trending-up'
  }, {
    name: 'Persistency',
    icon: 'shield-check',
    leak: 'Business lapses'
  }, {
    name: 'Revenue',
    icon: 'landmark'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "cb-section",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18,
      display: 'inline-flex'
    }
  }, "Where momentum breaks"), /*#__PURE__*/React.createElement("h2", {
    className: "cb-h2"
  }, "The hidden cost of distribution leaks"), /*#__PURE__*/React.createElement("p", {
    className: "cb-lead-text"
  }, "Every dollar of revenue travels the same chain. Most owners only watch the last link \u2014 production. But momentum can leak at any point along the way, and the earliest leaks compound the most.")), /*#__PURE__*/React.createElement("div", {
    className: "cb-pipeline"
  }, stages.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-pipe-node"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-pipe-icon",
    style: {
      borderColor: s.leak ? 'var(--leak)' : 'var(--border-strong)',
      color: s.leak ? 'var(--leak)' : 'var(--brand)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "cb-pipe-name"
  }, s.name), s.leak && /*#__PURE__*/React.createElement("span", {
    className: "cb-pipe-leak"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 12
  }), s.leak)), i < stages.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "cb-pipe-link",
    "aria-hidden": "true"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      lineHeight: 1.4,
      color: 'var(--text-primary)',
      maxWidth: 620,
      marginTop: 48,
      letterSpacing: '-.01em'
    }
  }, "The question isn't ", /*#__PURE__*/React.createElement("em", null, "\u201Chow do we get more?\u201D"), " It's ", /*#__PURE__*/React.createElement("em", null, "\u201Cwhere are we losing what we already have?\u201D"))));
}

/* ---- Section 3: the 8 categories we diagnose ---- */
function Diagnostics() {
  const {
    Eyebrow,
    Card,
    Badge
  } = CB_P;
  const items = [{
    n: '01',
    icon: 'user-plus',
    t: 'Recruiting',
    d: 'Can you consistently attract and move the right people forward?'
  }, {
    n: '02',
    icon: 'clipboard-check',
    t: 'Onboarding',
    d: 'Do new agents know exactly what to do after they join?'
  }, {
    n: '03',
    icon: 'megaphone',
    t: 'Marketing',
    d: 'Do you build trust before the conversation begins?'
  }, {
    n: '04',
    icon: 'handshake',
    t: 'Sales Process',
    d: 'Can attention reliably become revenue?'
  }, {
    n: '05',
    icon: 'shield-check',
    t: 'Persistency',
    d: 'Is long-term profit being protected?'
  }, {
    n: '06',
    icon: 'scale',
    t: 'Compensation',
    d: 'Are incentives aligned with the outcomes you want?'
  }, {
    n: '07',
    icon: 'graduation-cap',
    t: 'Leadership',
    d: 'Is the next generation of leaders being intentionally developed?'
  }, {
    n: '08',
    icon: 'activity',
    t: 'Technology & Data',
    d: 'Can leadership clearly see what is working and what is not?'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "categories",
    className: "cb-section",
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 20,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18,
      display: 'inline-flex'
    }
  }, "What we diagnose"), /*#__PURE__*/React.createElement("h2", {
    className: "cb-h2"
  }, "Eight systems. One distribution engine."), /*#__PURE__*/React.createElement("p", {
    className: "cb-lead-text"
  }, "The assessment evaluates each one independently, then shows you where the biggest leak is \u2014 and what it's costing you.")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    variant: "solid"
  }, "8-part diagnostic")), /*#__PURE__*/React.createElement("div", {
    className: "cb-diag-grid"
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.n,
    variant: "surface",
    interactive: true,
    padding: "lg",
    className: "cb-diag-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cb-diag-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--neutral-400)',
      letterSpacing: '.06em'
    }
  }, it.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 500,
      letterSpacing: '-.01em',
      color: 'var(--text-primary)',
      margin: '0 0 8px'
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, it.d))))));
}
Object.assign(window, {
  LeakPipeline,
  Diagnostics
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyResearch.jsx
try { (() => {
const CB_W = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Section 4: why this matters — the levers (calculator teaser) ---- */
function WhyMatters() {
  const {
    Eyebrow,
    Card,
    Metric,
    Badge
  } = CB_W;
  const levers = [{
    move: 'Activation +10%',
    icon: 'zap',
    value: '+$640K',
    label: 'Recoverable / yr',
    note: 'More of the agents you already recruited actually start producing.'
  }, {
    move: 'Persistency +5%',
    icon: 'shield-check',
    value: '+$410K',
    label: 'Protected / yr',
    note: 'Business that stays on the books instead of lapsing.'
  }, {
    move: 'Recruiting conv. +15%',
    icon: 'user-plus',
    value: '+$870K',
    label: 'New production / yr',
    note: 'The same top-of-funnel attention, converted more efficiently.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "cb-section",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18,
      display: 'inline-flex'
    }
  }, "Why it matters"), /*#__PURE__*/React.createElement("h2", {
    className: "cb-h2"
  }, "Small fixes to a leaking system compound fast"), /*#__PURE__*/React.createElement("p", {
    className: "cb-lead-text"
  }, "You don't need more attention at the top. You need to stop losing what's already moving through your system. Here's what a few points can be worth \u2014 sample figures for a mid-size agency.")), /*#__PURE__*/React.createElement("div", {
    className: "cb-lever-grid"
  }, levers.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.move,
    variant: "surface",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cb-diag-ico",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: l.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, l.move), /*#__PURE__*/React.createElement(Metric, {
    value: l.value,
    label: l.label,
    tone: "healthy",
    size: "md"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      marginTop: 16
    }
  }, l.note)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "scan",
    dot: true
  }, "Coming soon"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-secondary)'
    }
  }, "The ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Revenue Leak Calculator"), " will run these numbers on your actual figures."))));
}

/* ---- Section 5: what the research says ---- */
function Research() {
  const {
    Eyebrow
  } = CB_W;
  const themes = [{
    k: 'Trust',
    t: 'Trust drives advice adoption.',
    d: 'Clients act on guidance from sources they already trust — positioning precedes conversion.'
  }, {
    k: 'Attention',
    t: 'Digital attention keeps rising.',
    d: 'The first conversation increasingly happens before a human is ever involved.'
  }, {
    k: 'Guidance',
    t: 'Consumers still want human guidance.',
    d: 'Self-serve research has not replaced the advisor — it has raised the bar for them.'
  }, {
    k: 'AI',
    t: 'AI is changing research behavior.',
    d: 'How prospects find and vet information is shifting faster than most distributors have adapted.'
  }, {
    k: 'Efficiency',
    t: 'Distribution efficiency matters more than ever.',
    d: 'Margins now favor organizations that lose less, not the ones that simply spend more.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "cb-section",
    style: {
      background: 'var(--ink)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      marginBottom: 18,
      display: 'inline-flex'
    }
  }, "What the research says"), /*#__PURE__*/React.createElement("h2", {
    className: "cb-h2",
    style: {
      color: '#fff'
    }
  }, "The themes shaping distribution"), /*#__PURE__*/React.createElement("p", {
    className: "cb-lead-text",
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "We track the forces moving trust, attention, and advice across the industry. A few of the signals informing the diagnostic:")), /*#__PURE__*/React.createElement("div", null, themes.map((th, i) => /*#__PURE__*/React.createElement("div", {
    key: th.k,
    className: "cb-research-row",
    style: {
      borderTop: i === 0 ? '1px solid var(--border-on-dark)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--scan)',
      letterSpacing: '.1em'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "cb-research-key",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, th.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: '-.01em',
      color: '#fff',
      margin: 0
    }
  }, th.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, th.d))))));
}

/* ---- Section 6: the door — final CTA ---- */
function AssessmentCTA({
  onAssess
}) {
  const {
    Button
  } = CB_W;
  return /*#__PURE__*/React.createElement("section", {
    className: "cb-section",
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb-container",
    style: {
      textAlign: 'center',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    style: {
      width: 52,
      height: 52,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem, 4vw, 3.25rem)',
      lineHeight: 1.08,
      letterSpacing: '-.025em',
      color: 'var(--text-primary)',
      margin: '0 0 20px'
    }
  }, "See where your distribution system is leaking"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '0 auto 32px',
      maxWidth: 540
    }
  }, "The assessment takes about six minutes. You'll get your biggest leak, what it means, and what to fix first."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onAssess
  }, "Take the Distribution Leak Assessment")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 22,
      letterSpacing: '.04em'
    }
  }, "NO COST \xB7 NO OBLIGATION \xB7 FOR IMOs & AGENCIES")));
}
Object.assign(window, {
  WhyMatters,
  Research,
  AssessmentCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyResearch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.HealthBar = __ds_scope.HealthBar;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
