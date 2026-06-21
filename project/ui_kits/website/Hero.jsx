const CB_H = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Hero: library lobby — clear positioning, research-first ---- */
function Hero({ onAssess }) {
  const { Button, Eyebrow } = CB_H;
  return (
    <section id="top" style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)' }}>
      <div className="cb-container" style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        paddingTop: 112, paddingBottom: 112,
      }}>
        <Eyebrow style={{ marginBottom: 24, display: 'inline-flex' }}>Distribution Intelligence</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--text-primary)',
          fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)', lineHeight: 1.06, letterSpacing: 'var(--tracking-tighter)', margin: '0 0 24px', maxWidth: 880,
        }}>
          We identify and fix revenue leaks inside life insurance distribution
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 0 36px' }}>
          Research, diagnostics, and growth systems for agencies, IMOs, and carriers. We start with the question nobody is asking — then find the answer in the data.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="primary" size="lg" onClick={onAssess}>Take the Leak Assessment</Button>
          <a href="blog.html" style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-strong)', paddingBottom: 2 }}>Read the research →</a>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
