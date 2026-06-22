const CB_W = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Section 4: why this matters — simple questions, calculator teaser ---- */
function WhyMatters() {
  const { Eyebrow, Badge } = CB_W;
  const questions = [
    'If your activation rate improves by 10%…',
    'If persistency improves by 5%…',
    'If recruiting conversion improves by 15%…',
  ];
  return (
    <section id="why" className="cb-section" style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)', scrollMarginTop: 80 }}>
      <div className="cb-container" style={{ textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 18, display: 'inline-flex' }}>Why it matters</Eyebrow>
        <h2 className="cb-h2" style={{ maxWidth: 640, margin: '0 auto 40px' }}>Small fixes to a leaking system compound fast</h2>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 0, maxWidth: 560, width: '100%' }}>
          {questions.map((q, i) => (
            <div key={q} style={{
              width: '100%', padding: '22px 0', borderTop: i === 0 ? '1px solid var(--border-default)' : 'none',
              borderBottom: '1px solid var(--border-default)',
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)',
            }}>{q}</div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '32px 0 16px' }}>
          What happens?
        </p>
        <Badge tone="scan" dot>Revenue Leak Calculator — coming soon</Badge>
      </div>
    </section>
  );
}

/* ---- Section 5: what the research says — a few bullets, not a thesis ---- */
function Research() {
  const { Eyebrow } = CB_W;
  const themes = [
    'Trust drives advice adoption.',
    'Digital attention is increasing.',
    'Consumers still want human guidance.',
    'AI is changing research behavior.',
    'Distribution efficiency matters more than ever.',
  ];
  return (
    <section className="cb-section" style={{ background: 'var(--ink)', color: 'var(--text-on-dark)' }}>
      <div className="cb-container">
        <Eyebrow tone="accent" style={{ marginBottom: 18, display: 'inline-flex' }}>What the research says</Eyebrow>
        <h2 className="cb-h2" style={{ color: '#fff', maxWidth: 560 }}>The themes shaping distribution</h2>
        <ul style={{ listStyle: 'none', margin: '36px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 560 }}>
          {themes.map((t, i) => (
            <li key={t} style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0',
              borderTop: '1px solid var(--border-on-dark)',
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: 'var(--tracking-tight)', color: '#fff',
            }}>
              <Icon name="arrow-up-right" size={20} style={{ color: 'var(--text-on-dark-muted)', flexShrink: 0 }} />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---- Section 6: the door — big CTA, nothing else ---- */
function AssessmentCTA({ onAssess }) {
  const { Button } = CB_W;
  return (
    <section className="cb-section" style={{ background: 'var(--surface-card)' }}>
      <div className="cb-container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.06, letterSpacing: 'var(--tracking-tighter)', color: 'var(--text-primary)', margin: '0 0 16px' }}>
          See where your system is leaking.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto 36px' }}>
          Takes about 3 minutes for a prioritized diagnosis.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="primary" size="lg" onClick={onAssess}>Take the Assessment</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WhyMatters, Research, AssessmentCTA });
