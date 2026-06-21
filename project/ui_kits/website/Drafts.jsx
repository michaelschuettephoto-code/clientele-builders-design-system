const CB_DR = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ====================================================================
   DRAFT WORKSPACE — unpublished articles in the fact-check pipeline.
   Not linked from any public page. Reachable only by URL: drafts.html
   To PUBLISH a draft: move its article object out of DRAFTS below and
   into PILLARS or CHILD_POSTS in Blog.jsx, then delete it from here.
   ==================================================================== */

/* ---- helpers (self-contained so drafts.html needs only this file) ---- */
function dReadTime(body) {
  const words = body.filter(b => b.type === 'p').map(b => b.text).join(' ').split(/\s+/).length;
  return Math.max(2, Math.round(words / 200)) + ' min read';
}
function dExcerpt(body, max) {
  const firstP = body.find(b => b.type === 'p');
  if (!firstP) return '';
  const text = firstP.text;
  return text.length > max ? text.slice(0, max).replace(/\s+\S*$/, '') + '…' : text;
}

/* TEMPORARY — claim-ID tags that match the Fact Ledger, for review only.
   Set REVIEW_MODE = false (or delete the ClaimTag usages) before publishing. */
const REVIEW_MODE = true;
function ClaimTag({ id }) {
  if (!REVIEW_MODE || !id) return null;
  return (
    <span title="Matches this claim ID in the Fact Ledger (review only — removed at publish)"
      style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.04em', color: '#B25E09', background: '#FEF3D9', border: '1px dashed #E0A23C', borderRadius: 4, padding: '1px 7px', marginLeft: 8, verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
      🔖 {id}
    </span>
  );
}

function DStatBlock({ stat, source, ledgerUrl, sourceUrl, published }) {
  const srcStyle = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' };
  return (
    <div style={{ borderLeft: '3px solid var(--ink)', paddingLeft: 20, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)' }}>{stat}</span>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {published
          ? (source && <span style={{ ...srcStyle, color: 'var(--text-muted)' }}>{source}</span>)
          : (sourceUrl
              ? <a href={sourceUrl} target="_blank" rel="noopener" title="Jump to the exact sentence on the source page"
                   style={{ ...srcStyle, color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {source}<span aria-hidden="true" style={{ fontWeight: 700, color: 'var(--leak)' }}>↗ source</span>
                </a>
              : source && <span style={{ ...srcStyle, color: 'var(--text-muted)' }}>{source}</span>)}
        {!published && ledgerUrl && (
          <a href={ledgerUrl} target="_blank" rel="noopener" title="Open this claim in the Fact Ledger (Zoho Sheet)"
             style={{ ...srcStyle, color: 'var(--leak)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span aria-hidden="true" style={{ fontWeight: 700 }}>↗ ledger</span>
          </a>
        )}
      </div>
    </div>
  );
}

function DArticleBody({ body, ledgerUrl, published }) {
  return (
    <div style={{ maxWidth: 680 }}>
      {body.map((block, i) => {
        if (block.type === 'h3') return (
          <h3 key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '32px 0 12px' }}>{block.text}</h3>
        );
        if (block.type === 'stat') return (
          <div key={i}>
            {!published && REVIEW_MODE && block.claim && <div style={{ marginBottom: 6 }}><ClaimTag id={block.claim} /></div>}
            <DStatBlock stat={block.stat} source={block.source} sourceUrl={block.sourceUrl} ledgerUrl={ledgerUrl} published={published} />
          </div>
        );
        if (block.type === 'figure') {
          const F = { growth: window.IGGrowth, fragmentation: window.IGFragmentation, distribution: window.IGDistribution, onlineShift: window.IGOnlineShift, recruitingShops: window.IGRecruitingShops, recruitingGrowth: window.IGRecruitingGrowth }[block.figure];
          if (!F) return null;
          return (
            <div key={i}>
              {!published && REVIEW_MODE && block.claim && <div style={{ marginBottom: 6 }}><ClaimTag id={block.claim} /></div>}
              <F ledgerUrl={published ? undefined : ledgerUrl} />
            </div>
          );
        }
        return <p key={i} style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary)', margin: '0 0 14px' }}>{block.text}{!published && <ClaimTag id={block.claim} />}</p>;
      })}
    </div>
  );
}

/* status pill — maps to the Fact Checker pipeline stages */
function StatusPill({ status }) {
  const map = {
    'Pending Audit': { bg: '#FDECEC', fg: '#B42318' },
    'In Review':     { bg: '#FEF3D9', fg: '#B25E09' },
    'Approved':      { bg: '#E7F5EC', fg: '#1A7F37' },
  };
  const c = map[status] || map['Pending Audit'];
  return (
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontWeight: 600, color: c.fg, background: c.bg, borderRadius: 999, padding: '4px 10px' }}>{status}</span>
  );
}

/* ---- DRAFTS: in-progress articles (newest first) ---- */
const DRAFTS = [
  {
    slug: 'draft-recruiting',
    tag: 'Distribution chain · Recruiting',
    date: 'Jun 2026',
    status: 'Pending Audit',
    ledger: 'CB_Fact_Ledger — Recruiting (Practice) tab — 4 of 5 claims verified verbatim against the source PDF; 1 awaiting NotebookLM audit',
    ledgerUrl: 'https://sheet.zoho.com/sheet/open/ls61553cf30c093844d3bad67d6409b3f19bf',
    t: "The Second Leak Is Recruiting — The Talent Pool Is Smaller Than Everyone Assumes",
    body: [
      { type: 'p', text: "Attention fills the top of the bucket. Recruiting is the next stop down — and it's where a lot of owners assume the market is bigger than it actually is." },
      { type: 'p', text: "Here's the thing nobody tells you when you start building a distribution team: you're not recruiting into a giant industry full of large competitors. You're recruiting into an industry made almost entirely of small shops, fishing in the same small pond as everyone else." },
      { type: 'h3', text: "Almost every shop in this industry is tiny" },
      { type: 'p', text: "Start with the size of the thing you're actually competing against." },
      { type: 'figure', figure: 'recruitingShops', claim: 'R4' },
      { type: 'p', claim: 'R4', text: "When the average insurance agency runs three people deep, the idea that you're at a disadvantage against some recruiting juggernaut doesn't hold up. There isn't one. The fight for talent in this industry is fragmented, local, and winnable — if you treat recruiting like a system instead of an occasional scramble." },
      { type: 'h3', text: "Growth is slowing down, but the price of people isn't" },
      { type: 'p', text: "Now follow the money, because this is where the leak actually shows up." },
      { type: 'stat', claim: 'R1', stat: "“Revenue for insurance brokers and agencies has surged at a CAGR of 3.8% over the past five years, reaching $261.7 billion in 2025.”", source: 'IBISWorld — Insurance Brokers & Agencies in the US, Oct 2025 (licensed report — verify via local PDF, p.8)' },
      { type: 'stat', claim: 'R2', stat: "“Revenue... is forecast to inch upward at a CAGR of 0.9% in the next five years, reaching $274.0 billion in 2030.”", source: 'IBISWorld — Insurance Brokers & Agencies in the US, Oct 2025 (licensed report — verify via local PDF, p.8)' },
      { type: 'figure', figure: 'recruitingGrowth', claim: 'R1 · R2' },
      { type: 'p', text: "Growth is forecast to slow to less than a third of its prior pace. And that means the comfortable years — when a rising tide covered for a weak recruiting bench — are ending. What's left is competition for the same finite group of people, and that competition is already showing up in the numbers." },
      { type: 'h3', text: "Compensation is becoming the real battleground" },
      { type: 'p', text: "Here's where it gets interesting." },
      { type: 'stat', claim: 'R3', stat: "“Employment and wages have swelled substantially in the last five years, with compensation rising more as providers have sought to attract top talent.”", source: 'IBISWorld — Insurance Brokers & Agencies in the US, Oct 2025 (licensed report — verify via local PDF, p.12)' },
      { type: 'p', claim: 'R3', text: "Wages aren't climbing because the work changed overnight. They're climbing because agencies are bidding against each other for the same small pool of people, in a market where the average shop has three employees and nowhere to hide a bad hire. If you're not actively recruiting, you're not standing still — you're losing ground to whoever is." },
      { type: 'h3', text: "How to stop the recruiting leak" },
      { type: 'p', text: "You can't out-budget your way through a market this fragmented. There's no scale advantage to buy. What there is, is a smaller pool than people assume, and most agencies treating recruiting as an event instead of a pipeline." },
      { type: 'p', claim: 'R5', text: "Recruiting is the second leak in the bucket: even when attention brings people to your door, a system that can't consistently find, vet, and onboard them drains right back out. The agencies that win this leak aren't the biggest. They're the ones who treat recruiting like infrastructure — always running, not occasionally switched on." },
    ],
  },
  {
    slug: 'draft-attention',
    tag: 'Distribution chain · Attention',
    date: 'Jun 2026',
    status: 'In Review',
    ledger: 'CB_Fact_Ledger — Attention (Practice) tab — 2 of 5 claims VERIFIED via live fact-check; 2 awaiting NotebookLM audit',
    ledgerUrl: 'https://sheet.zoho.com/sheet/open/ls61553cf30c093844d3bad67d6409b3f19bf',
    t: 'The First Leak Is Attention — You Lose People Before You Ever Talk to Them',
    body: [
      { type: 'p', text: "Every distribution chain starts the same way: with attention. Before anyone gets recruited, licensed, or sold, they have to notice you first. It's the top of the bucket — and it's the leak almost nobody measures." },
      { type: 'p', text: "Most owners start counting at recruiting, or production, or revenue. But if you can't earn attention, the rest of the funnel never gets the chance to work. An empty top means an empty everything." },
      { type: 'h3', text: "The fight for attention moved online — and it isn't cheap" },
      { type: 'p', text: "Attention used to be local. Now it's a national auction, and the bidding is fierce." },
      { type: 'stat', claim: 'A1', stat: "“The industry drove record revenue, reaching $294.6 billion in 2025, reflecting a 13.9% year-over-year increase.”", source: 'IAB Internet Advertising Revenue Report', sourceUrl: 'https://www.iab.com/news/digital-ad-revenue-climbs-to-nearly-300b-as-iab-celebrates-30-year-anniversary/#:~:text=reaching%20%24294.6%20billion%20in%202025%2C%20reflecting%20a%2013.9%25%20year-over-year%20increase' },
      { type: 'p', text: "That's the room you're walking into. Digital ad revenue grew nearly 14% in a single year. The point isn't to outspend it — you can't. The point is that attention is now earned online, and if you're not there with something worth noticing, you're invisible before the funnel even begins." },
      { type: 'h3', text: 'Your buyers are already online before they ever talk to you' },
      { type: 'p', text: "Here's what changed underneath all that spend: the buyer moved first." },
      { type: 'figure', figure: 'onlineShift', claim: 'A2' },
      { type: 'p', claim: 'A2', text: "Online research is now a central part of the life insurance shopping process, and younger consumers in particular show strong digital preferences. By the time a prospect reaches a human, they've already started forming an opinion. The first impression happened without you in the room." },
      { type: 'h3', text: 'But attention without trust leaks instantly' },
      { type: 'p', text: "Getting noticed isn't the finish line. Attention is cheap. Trust is the thing that holds." },
      { type: 'p', claim: 'A3 · A4', text: "Attention alone doesn't close the gap. Buyers still need trust and relevance before they engage — and advisor usage is still low across the board, which means most of the market hasn't engaged anyone yet. The awareness gap is enormous, and it sits right at the top of the funnel." },
      { type: 'h3', text: 'How to stop the attention leak' },
      { type: 'p', text: "The attention leak isn't fixed by shouting louder. It's fixed by being findable, relevant, and trustworthy at the exact moment your buyer is already looking." },
      { type: 'p', text: "Show up where they research. Answer the question they're actually typing. Show you understand their specific problem before you ask for the appointment. That's what turns a scroll into a conversation — and a conversation is the first thing the rest of your distribution system can actually work with." },
      { type: 'p', claim: 'A5', text: "Attention is the top of the bucket. Pour all the water you want into recruiting and sales, but if you can't fill from the top, the whole system runs dry. The first leak is the one nobody's watching — and it decides whether anyone ever enters your funnel at all." },
    ],
  },
];

/* ---- Header with the unmissable DRAFT banner ---- */
function DraftsHeader() {
  const { Eyebrow } = CB_DR;
  return (
    <section className="cb-section" style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)', paddingBottom: 40 }}>
      <div className="cb-container">
        <div style={{ background: '#FDECEC', border: '1px solid #F3B4B0', borderRadius: 8, padding: '14px 18px', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: '#B42318' }}>● Draft workspace — not published</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#7A1B12' }}>Internal only. Nothing here is linked from the public site. Articles publish after NotebookLM audit + editor approval.</span>
        </div>
        <Eyebrow style={{ marginBottom: 20, display: 'inline-flex' }}>Pipeline · In progress</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--text-primary)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.06, letterSpacing: 'var(--tracking-tighter)', margin: '0 0 14px', maxWidth: 820 }}>
          Draft articles awaiting review
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: 560, margin: 0 }}>
          Each draft shows its pipeline status and its Fact Ledger. When a draft is Approved, it moves into the live library.
        </p>
      </div>
    </section>
  );
}

/* ---- Index page: teaser cards linking to each draft's own page ---- */
function DraftsList() {
  return (
    <section className="cb-section" style={{ background: 'var(--surface-page)' }}>
      <div className="cb-container">
        {DRAFTS.map((p, i) => (
          <article key={p.slug} id={p.slug} style={{ padding: '36px 0', borderTop: i === 0 ? '1px solid var(--border-default)' : 'none', borderBottom: '1px solid var(--border-default)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
              <StatusPill status={p.status} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.tag}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{p.date}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{dReadTime(p.body)}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '0 0 14px', maxWidth: 720 }}>
              <a href={p.slug + '.html'} style={{ color: 'inherit', textDecoration: 'none' }}>{p.t}</a>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: 680, margin: '0 0 18px' }}>{dExcerpt(p.body, 220)}</p>
            {p.ledger && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', margin: '0 0 18px' }}>
                Fact Ledger: {p.ledgerUrl ? <a href={p.ledgerUrl} target="_blank" rel="noopener" style={{ color: 'var(--leak)', textDecoration: 'underline' }}>{p.ledger}</a> : p.ledger}
              </p>
            )}
            <a href={p.slug + '.html'} style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 700, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--leak)', textDecoration: 'none' }}>
              Read full draft ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---- Single-article page: renders just one draft, with a banner + back link ----
   Add ?view=published to the URL to preview it with all internal draft chrome
   (banner, status pill, ledger line, claim tags, source/ledger links) hidden —
   this is a PREVIEW of how it will look once actually published, not a real
   publish. Real publish still means moving it into Blog.jsx per the note above. */
function DraftArticleHeader({ published }) {
  return (
    <section className="cb-section" style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)', paddingBottom: 24 }}>
      <div className="cb-container">
        {published ? (
          <div style={{ background: '#FEF3D9', border: '1px solid #E0A23C', borderRadius: 8, padding: '14px 18px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: '#B25E09' }}>◐ Published preview</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#7A4B12' }}>This shows how the article will look once live. It has not actually been published — editor approval is still pending.</span>
          </div>
        ) : (
          <div style={{ background: '#FDECEC', border: '1px solid #F3B4B0', borderRadius: 8, padding: '14px 18px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: '#B42318' }}>● Draft workspace — not published</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#7A1B12' }}>Internal only. Publishes after NotebookLM audit + editor approval.</span>
          </div>
        )}
        <a href="drafts.html" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>← All drafts</a>
      </div>
    </section>
  );
}

function DraftArticlePage({ slug, published }) {
  const p = DRAFTS.find(d => d.slug === slug);
  if (!p) {
    return (
      <section className="cb-section">
        <div className="cb-container">
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-secondary)' }}>Draft not found: {slug}</p>
        </div>
      </section>
    );
  }
  return (
    <section className="cb-section" style={{ background: 'var(--surface-page)' }}>
      <div className="cb-container">
        <article id={p.slug} style={{ padding: '12px 0 44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
            {!published && <StatusPill status={p.status} />}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.tag}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{p.date}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{dReadTime(p.body)}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '0 0 16px', maxWidth: 760 }}>{p.t}</h1>
          {!published && p.ledger && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', margin: '0 0 28px' }}>
              Fact Ledger: {p.ledgerUrl ? <a href={p.ledgerUrl} target="_blank" rel="noopener" style={{ color: 'var(--leak)', textDecoration: 'underline' }}>{p.ledger}</a> : p.ledger}
            </p>
          )}
          <DArticleBody body={p.body} ledgerUrl={p.ledgerUrl} published={published} />
        </article>
      </div>
    </section>
  );
}

Object.assign(window, { DraftsHeader, DraftsList, DraftArticleHeader, DraftArticlePage });
