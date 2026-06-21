const CB_IG = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ====================================================================
   Infographics — inline SVG data viz for CB articles.
   Every figure pulls a VERIFIED number from the Fact Ledger and links
   to it. Calm/editorial: neutrals + one leak-accent highlight.
   ==================================================================== */

function FigureFrame({ kicker, title, children, source, ledgerUrl }) {
  return (
    <figure style={{ margin: '36px 0', padding: '28px 28px 22px', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 12 }}>
      {kicker && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--leak)', fontWeight: 600, marginBottom: 6 }}>{kicker}</div>}
      {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', marginBottom: 20 }}>{title}</div>}
      <div>{children}</div>
      {source && (
        <figcaption style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border-default)' }}>
          {ledgerUrl
            ? <a href={ledgerUrl} target="_blank" rel="noopener" title="Open this figure's claim in the Fact Ledger" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--leak)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>{source}<span aria-hidden="true" style={{ fontWeight: 700 }}>↗ ledger</span></a>
            : <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{source}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/* ---- 1. Market growth: big but barely moving ---- */
function IGGrowth({ ledgerUrl }) {
  // Revenue ($tn) per year. Actuals 2021-26, forecast 26-31. Source: IBISWorld Feb 2026.
  const data = [
    { y: "'21", v: 1.05, f: false }, { y: "'22", v: 1.06, f: false }, { y: "'23", v: 1.04, f: false },
    { y: "'24", v: 1.08, f: false }, { y: "'25", v: 1.09, f: false }, { y: "'26", v: 1.10, f: false },
    { y: "'27", v: 1.12, f: true }, { y: "'28", v: 1.14, f: true }, { y: "'29", v: 1.16, f: true },
    { y: "'30", v: 1.18, f: true }, { y: "'31", v: 1.20, f: true },
  ];
  const W = 600, H = 230, padL = 40, padB = 30, padT = 14;
  const max = 1.5; // y-axis from 0 to 1.5T so the flatness reads honestly
  const bw = (W - padL - 14) / data.length;
  const yOf = v => padT + (H - padT - padB) * (1 - v / max);
  return (
    <FigureFrame kicker="The market" title="A huge industry that's barely growing" source="IBISWorld, Life Insurance & Annuities in the US, Feb 2026" ledgerUrl={ledgerUrl}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 28, flexWrap: 'wrap', padding: '4px 0 18px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56, color: 'var(--text-primary)', lineHeight: 1 }}>$1.1T</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 6 }}>Industry size, 2026</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56, color: 'var(--leak)', lineHeight: 1 }}>0.9%</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 700, marginTop: 6 }}>Growth per year</div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-primary)', textAlign: 'center', margin: '0 0 22px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
        That's an enormous market — growing so slowly you'd barely notice. Waiting for it to lift your business won't work.
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="US life insurance and annuities revenue 2021 to 2031, nearly flat near 1.1 trillion dollars">
        {[0, 0.5, 1.0, 1.5].map(g => (
          <g key={g}>
            <line x1={padL} y1={yOf(g)} x2={W - 8} y2={yOf(g)} stroke="var(--border-default)" strokeWidth="1" />
            <text x={padL - 8} y={yOf(g) + 4} textAnchor="end" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-muted)">${g.toFixed(1)}T</text>
          </g>
        ))}
        {data.map((d, i) => {
          const x = padL + i * bw + bw * 0.18;
          const w = bw * 0.64;
          const y = yOf(d.v);
          return (
            <g key={d.y}>
              <rect x={x} y={y} width={w} height={H - padB - y} rx="2"
                fill={d.f ? 'var(--neutral-300, #D6D9DD)' : 'var(--ink)'}
                opacity={d.f ? 0.55 : 1} />
              <text x={x + w / 2} y={H - padB + 14} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-muted)">{d.y}</text>
            </g>
          );
        })}
        {/* CAGR annotation */}
        <text x={padL + 6} y={yOf(1.10) - 12} fontFamily="var(--font-mono)" fontSize="11" fontWeight="700" fill="var(--leak)">0.9%/yr growth (2021–26)</text>
      </svg>
      <div style={{ display: 'flex', gap: 18, marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, background: 'var(--ink)', borderRadius: 2, display: 'inline-block' }}></span>Actual</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, background: '#D6D9DD', borderRadius: 2, display: 'inline-block' }}></span>Forecast (~2.0%/yr)</span>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', margin: '12px 0 0', fontStyle: 'italic' }}>Directional. Anchored to verified figures — $1.1T in 2026 and a 0.9% five-year growth rate; intermediate years shown to convey the trend, not as exact data.</p>
    </FigureFrame>
  );
}

/* ---- 2. Fragmentation donut: ~90% outside the top names ---- */
function IGFragmentation({ ledgerUrl }) {
  const r = 70, cx = 110, cy = 110, circ = 2 * Math.PI * r;
  const topShare = 0.095;             // top 3 carriers, low-single-digit each
  const topLen = topShare * circ;
  return (
    <FigureFrame kicker="Market structure" title="Even the biggest names own only a sliver" source="IBISWorld, Life Insurance & Annuities in the US, Feb 2026" ledgerUrl={ledgerUrl}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        <svg viewBox="0 0 220 220" width="180" height="180" role="img" aria-label="About 90 percent of industry revenue sits outside the top three carriers">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--border-strong)" strokeWidth="26" opacity="0.35" />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--leak)" strokeWidth="26"
            strokeDasharray={`${topLen} ${circ - topLen}`} transform={`rotate(-90 ${cx} ${cy})`} />
          <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--font-display)" fontSize="34" fontWeight="600" fill="var(--text-primary)">~90%</text>
          <text x={cx} y={cy + 18} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-muted)">OUTSIDE TOP 3</text>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 180, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ width: 12, height: 12, background: 'var(--leak)', borderRadius: 3, flexShrink: 0 }}></span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)' }}><strong style={{ color: 'var(--text-primary)' }}>~9.5%</strong> — top 3 carriers combined (low single digits each)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ width: 12, height: 12, background: 'var(--border-strong)', opacity: 0.5, borderRadius: 3, flexShrink: 0 }}></span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)' }}><strong style={{ color: 'var(--text-primary)' }}>~90%</strong> — everyone else. The market is wide open.</span>
          </div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-primary)', textAlign: 'center', margin: '20px 0 0', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
        No single company owns this market. Being the biggest name isn't what wins here — being the most trusted one is.
      </p>
    </FigureFrame>
  );
}

/* ---- 3. Distribution channels: independent agents lead ---- */
function IGDistribution({ ledgerUrl }) {
  const rows = [
    { label: 'Independent agents', v: 50, hi: true },
    { label: 'Captive / affiliated agents', v: 38, hi: false },
    { label: 'Other channels', v: 7, hi: false },
    { label: 'Direct response', v: 5, hi: false },
  ];
  return (
    <FigureFrame kicker="Where the money moves" title="One channel sells more than all the others combined" source="Statista; LIMRA; Insurance Information Institute, 2019–2023" ledgerUrl={ledgerUrl}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56, color: 'var(--leak)', lineHeight: 1 }}>1 in 2</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 6 }}>Life insurance policies sold by an independent agent</div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-primary)', margin: '14px 0 0', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
          Your distribution isn't a side function — for half the market, it's the entire sale.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {rows.map(r => (
          <div key={r.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-secondary)' }}>
              <span style={{ color: r.hi ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: r.hi ? 600 : 400 }}>{r.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: r.hi ? 'var(--leak)' : 'var(--text-muted)' }}>{r.v}%</span>
            </div>
            <div style={{ height: 14, background: 'var(--surface-page)', borderRadius: 3, overflow: 'hidden', border: '1px solid var(--border-default)' }}>
              <div style={{ width: r.v + '%', height: '100%', background: r.hi ? 'var(--leak)' : 'var(--ink)', opacity: r.hi ? 1 : 0.55, borderRadius: 3 }}></div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', margin: '14px 0 0' }}>Approximate share of U.S. life insurance distribution, 2023.</p>
    </FigureFrame>
  );
}

/* ---- 4. Attention: shopping moved online — big before/after, plain-English ---- */
function IGOnlineShift({ ledgerUrl }) {
  return (
    <FigureFrame kicker="Where buyers go first" title="More people are shopping for life insurance online than ever before" source="LIMRA" ledgerUrl={ledgerUrl}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(8px, 3vw, 18px)', flexWrap: 'nowrap', padding: '8px 0 4px' }}>
        {/* Before */}
        <div style={{ textAlign: 'center', minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(28px, 10vw, 48px)', color: 'var(--text-muted)', lineHeight: 1 }}>30%</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 2.4vw, 11px)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 6, whiteSpace: 'nowrap' }}>Back in 2017</div>
        </div>
        {/* Arrow */}
        <svg viewBox="0 0 56 24" style={{ flexShrink: 0, width: 'clamp(26px, 7vw, 56px)', height: 'auto' }} aria-hidden="true">
          <line x1="2" y1="12" x2="46" y2="12" stroke="var(--leak)" strokeWidth="3" strokeLinecap="round" />
          <path d="M38 4 L50 12 L38 20" fill="none" stroke="var(--leak)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* After */}
        <div style={{ textAlign: 'center', minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 11.5vw, 56px)', color: 'var(--leak)', lineHeight: 1 }}>44%</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 2.4vw, 11px)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 700, marginTop: 6, whiteSpace: 'nowrap' }}>Today</div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-primary)', textAlign: 'center', margin: '18px 0 4px', maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
        Among recent life insurance buyers, online shopping rose to <strong>44%</strong> in LIMRA's latest comparison with 2017 results.
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', margin: '4px 0 0' }}>And in 2023, buyers said for the first time that they'd rather purchase online than in person.</p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontStyle: 'italic', color: 'var(--text-muted)', borderTop: '1px solid var(--border-default)', margin: '16px 0 0', paddingTop: 12 }}>
        Direct quote (for verification): “Online shopping increased from 30 percent to 44 percent over 2017 survey results.”
      </p>
    </FigureFrame>
  );
}

/* ---- 5. Recruiting: every shop is tiny ---- */
function IGRecruitingShops({ ledgerUrl }) {
  return (
    <FigureFrame kicker="Who you're competing with" title="The average insurance agency has 3 employees" source="IBISWorld, Insurance Brokers & Agencies in the US, Oct 2025" ledgerUrl={ledgerUrl}>
      <div style={{ textAlign: 'center', padding: '4px 0 6px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 64, color: 'var(--leak)', lineHeight: 1 }}>3</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 6 }}>Employees per business, on average</div>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-primary)', textAlign: 'center', margin: '16px 0 20px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
        There's no giant competitor to recruit against. Almost everyone in this industry is running a small shop, out of 443,000 businesses and about 1 million people total.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 36, flexWrap: 'wrap', borderTop: '1px solid var(--border-default)', paddingTop: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--text-primary)' }}>443k</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Businesses</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--text-primary)' }}>~1M</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total employees</div>
        </div>
      </div>
    </FigureFrame>
  );
}

/* ---- 6. Recruiting: growth slowing, wage pressure rising ---- */
function IGRecruitingGrowth({ ledgerUrl }) {
  return (
    <FigureFrame kicker="The squeeze" title="Growth is slowing down — but the cost of people isn't" source="IBISWorld, Insurance Brokers & Agencies in the US, Oct 2025" ledgerUrl={ledgerUrl}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(8px, 3vw, 18px)', flexWrap: 'nowrap', padding: '8px 0 4px' }}>
        <div style={{ textAlign: 'center', minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(28px, 10vw, 48px)', color: 'var(--text-muted)', lineHeight: 1 }}>3.8%</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 2.4vw, 11px)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 6, whiteSpace: 'nowrap' }}>Past 5 years</div>
        </div>
        <svg viewBox="0 0 56 24" style={{ flexShrink: 0, width: 'clamp(26px, 7vw, 56px)', height: 'auto' }} aria-hidden="true">
          <line x1="2" y1="12" x2="46" y2="12" stroke="var(--leak)" strokeWidth="3" strokeLinecap="round" />
          <path d="M38 4 L50 12 L38 20" fill="none" stroke="var(--leak)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ textAlign: 'center', minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 11.5vw, 56px)', color: 'var(--leak)', lineHeight: 1 }}>0.9%</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 2.4vw, 11px)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 700, marginTop: 6, whiteSpace: 'nowrap' }}>Next 5 years (forecast)</div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-primary)', textAlign: 'center', margin: '18px 0 4px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
        Revenue growth is forecast to slow by more than half. Meanwhile, wages keep climbing as agencies compete for the same small pool of people.
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontStyle: 'italic', color: 'var(--text-muted)', borderTop: '1px solid var(--border-default)', margin: '16px 0 0', paddingTop: 12 }}>
        Direct quote (for verification, in the source PDF): “employment and wages have swelled substantially in the last five years, with compensation rising more as providers have sought to attract top talent.”
      </p>
    </FigureFrame>
  );
}

Object.assign(window, { IGGrowth, IGFragmentation, IGDistribution, IGOnlineShift, IGRecruitingShops, IGRecruitingGrowth });
