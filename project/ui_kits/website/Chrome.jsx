const { useState, useEffect, useRef } = React;
const CB = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Nav ------------------------------------------------------------ */
function Nav({ onAssess }) {
  const { Button } = CB;
  const links = ['How it works', 'The 8 categories', 'Why it matters', 'Research'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(246,248,251,0.82)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-default)',
    }}>
      <div className="cb-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="../../assets/logo.png" alt="Clientele Builders" style={{ height: 40, width: 40, borderRadius: 4, display: 'block' }} />
        </a>
        <nav className="cb-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map((l) => (
            <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
              color: 'var(--text-secondary)', textDecoration: 'none',
            }}>{l}</a>
          ))}
        </nav>
        <Button size="sm" onClick={onAssess}>Take the Assessment</Button>
      </div>
    </header>
  );
}

/* ---- Footer --------------------------------------------------------- */
function Footer() {
  const cols = [
    { h: 'Diagnostic', items: ['Take the Assessment', 'The 8 categories', 'Revenue Leak Calculator', 'Sample report'] },
    { h: 'Firm', items: ['What we believe', 'How we work', 'Who we serve', 'Contact'] },
    { h: 'Intelligence', items: ['Research notes', 'Distribution index', 'Benchmarks'] },
  ];
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--text-on-dark)' }}>
      <div className="cb-container" style={{ paddingTop: 72, paddingBottom: 40 }}>
        <div className="cb-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 56 }}>
          <div>
            <div style={{ marginBottom: 18 }}>
              <img src="../../assets/logo.png" alt="Clientele Builders" style={{ height: 44, width: 44, borderRadius: 4, display: 'block' }} />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 300 }}>
              The intelligence layer for life insurance distribution. We help you see where momentum is breaking — before you invest in the wrong solution.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--scan)', marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.items.map((i) => (
                  <li key={i}><a href="#" onClick={(e)=>e.preventDefault()} style={{ fontSize: 14, color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--border-on-dark)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-on-dark-muted)' }}>© 2026 Clientele Builders</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-on-dark-muted)' }}>Not a marketing agency. We start with diagnosis.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
