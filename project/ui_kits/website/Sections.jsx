const CB_P = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Section 2: the distribution chain & where it leaks ---- */
function LeakPipeline() {
  const { Eyebrow } = CB_P;
  const stages = [
    { label: 'Attention',   href: 'blog.html#guide-lead-generation' },
    { label: 'Recruiting',  href: 'blog.html#guide-insurance-recruiting' },
    { label: 'Licensing',   href: 'blog.html#rec-licensing-gap' },
    { label: 'Activation',  href: 'blog.html#onboarding' },
    { label: 'Production',  href: 'blog.html#guide-agent-production' },
    { label: 'Persistency', href: 'blog.html#persistency' },
    { label: 'Revenue',     href: 'blog.html#guide-distribution-leaks' },
  ];
  return (
    <section id="how" className="cb-section" style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)', scrollMarginTop: 80 }}>
      <div className="cb-container" style={{ textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 18, display: 'inline-flex' }}>Where the money leaks</Eyebrow>
        <h2 className="cb-h2" style={{ maxWidth: 640, margin: '0 auto 12px' }}>The hidden cost of distribution leaks</h2>
        <p className="cb-lead-text" style={{ maxWidth: 480, margin: '0 auto 48px' }}>
          Money can leak out of any step in this chain. Most owners only check one step: production.
        </p>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          {stages.map((s, i) => (
            <React.Fragment key={s.label}>
              <a href={s.href} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid transparent' }}
                 onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--text-primary)'}
                 onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>{s.label}</a>
              {i < stages.length - 1 && <Icon name="arrow-down" size={18} style={{ color: 'var(--neutral-400)', margin: '6px 0' }} />}
            </React.Fragment>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.4, color: 'var(--text-primary)', maxWidth: 520, margin: '48px auto 0', letterSpacing: 'var(--tracking-tight)' }}>
          "Damn... that's exactly what's happening."
        </p>
      </div>
    </section>
  );
}

/* ---- Section 3: revenue leak categories — the bookshelves ---- */
function LeakCategories() {
  const { Eyebrow, Card } = CB_P;
  const cats = [
    { icon: 'user-plus',       label: 'Recruiting',       slug: 'guide-insurance-recruiting',   q: "Why isn't my recruiting working?" },
    { icon: 'shield-check',    label: 'Retention',        slug: 'guide-agent-retention',        q: "Why are my agents leaving?" },
    { icon: 'trending-up',     label: 'Production',       slug: 'guide-agent-production',       q: "Why aren't my agents writing more?" },
    { icon: 'megaphone',       label: 'Lead Generation',  slug: 'guide-lead-generation',        q: "Why aren't my leads converting?" },
    { icon: 'settings',        label: 'Operations',       slug: 'guide-distribution-leaks',     q: "Where is revenue quietly leaving?" },
    { icon: 'graduation-cap',  label: 'Training',         slug: 'guide-agent-production',       q: "Why isn't my training producing results?" },
  ];
  return (
    <section id="categories" className="cb-section" style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-default)', scrollMarginTop: 80 }}>
      <div className="cb-container">
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <Eyebrow style={{ marginBottom: 18, display: 'inline-flex' }}>Revenue leak categories</Eyebrow>
          <h2 className="cb-h2">Six places where agencies quietly lose revenue every month</h2>
          <p className="cb-lead-text">Click any category to read the research.</p>
        </div>
        <div className="cb-diag-grid">
          {cats.map((c) => (
            <a key={c.label} href={`blog.html#${c.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <Card variant="surface" padding="lg" style={{ height: '100%' }}>
                <span style={{ marginBottom: 14, display: 'block' }}><Icon name={c.icon} size={22} /></span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '0 0 8px' }}>{c.label}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text-muted)', margin: 0, fontStyle: 'italic' }}>"{c.q}"</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Section 4: what we diagnose — 8-system grid ---- */
function Diagnostics() {
  const { Eyebrow, Card } = CB_P;
  const items = [
    { icon: 'user-plus',       t: 'Recruiting',        d: 'Attracting and moving the right people forward.',          slug: 'recruiting' },
    { icon: 'clipboard-check', t: 'Onboarding',        d: 'New agents know exactly what to do after joining.',        slug: 'onboarding' },
    { icon: 'megaphone',       t: 'Marketing',         d: 'Building trust before the conversation begins.',           slug: 'marketing' },
    { icon: 'handshake',       t: 'Sales Process',     d: 'Turning attention into revenue, reliably.',                slug: 'sales-process' },
    { icon: 'shield-check',    t: 'Persistency',       d: 'Protecting long-term profit.',                             slug: 'persistency' },
    { icon: 'scale',           t: 'Compensation',      d: 'Incentives aligned with the outcomes you want.',           slug: 'compensation' },
    { icon: 'graduation-cap',  t: 'Leadership',        d: 'Intentionally developing the next generation.',            slug: 'leadership' },
    { icon: 'activity',        t: 'Technology & Data', d: 'Seeing what is working and what is not.',                  slug: 'technology-data' },
  ];
  return (
    <section className="cb-section" style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)' }}>
      <div className="cb-container">
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <Eyebrow style={{ marginBottom: 18, display: 'inline-flex' }}>What we diagnose</Eyebrow>
          <h2 className="cb-h2">Eight systems. One distribution engine.</h2>
          <p className="cb-lead-text">The assessment scores each one, then shows you where the biggest leak is.</p>
        </div>
        <div className="cb-diag-grid">
          {items.map((it) => (
            <a key={it.t} href={`blog.html#${it.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <Card variant="surface" padding="lg" style={{ height: '100%' }}>
                <span className="cb-diag-ico" style={{ marginBottom: 16 }}><Icon name={it.icon} size={22} /></span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '0 0 6px' }}>{it.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>{it.d}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Latest Insights: 3 pillar articles linking to blog ---- */
function LatestInsights() {
  const { Eyebrow } = CB_P;
  const featured = [
    { slug: 'guide-distribution-leaks',    tag: 'Pillar Article', t: 'The Complete Guide to Insurance Distribution Revenue Leaks',  date: 'Jun 2026' },
    { slug: 'guide-insurance-recruiting',  tag: 'Pillar Article', t: 'The Complete Guide to Insurance Recruiting',                  date: 'Jun 2026' },
    { slug: 'guide-agent-retention',       tag: 'Pillar Article', t: 'The Complete Guide to Agent Retention',                       date: 'May 2026' },
  ];
  return (
    <section id="insights" className="cb-section" style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)' }}>
      <div className="cb-container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow style={{ marginBottom: 14, display: 'inline-flex' }}>Latest insights</Eyebrow>
            <h2 className="cb-h2" style={{ margin: 0 }}>From the research library</h2>
          </div>
          <a href="blog.html" style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-strong)', paddingBottom: 2 }}>
            Explore the free library →
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {featured.map((p, i) => (
            <a key={p.slug} href={`blog.html#${p.slug}`} style={{
              display: 'grid', gridTemplateColumns: '140px 1fr auto', gap: 28, alignItems: 'baseline',
              padding: '24px 0', borderTop: i === 0 ? '1px solid var(--border-default)' : 'none',
              borderBottom: '1px solid var(--border-default)', textDecoration: 'none', color: 'inherit',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.tag}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)' }}>{p.t}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{p.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { LeakPipeline, LeakCategories, Diagnostics, LatestInsights });
