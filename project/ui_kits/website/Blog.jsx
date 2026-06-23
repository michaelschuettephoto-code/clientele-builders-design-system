const CB_BL = window.ClienteleBuildersDesignSystem_6b1cb1;

/* ---- Helpers ---- */
function readTime(body) {
  const words = body.join(' ').split(/\s+/).length;
  return Math.max(2, Math.round(words / 200)) + ' min read';
}

/* ---- Stat callout block ---- */
function StatBlock({ stat, source, context }) {
  return (
    <div style={{
      borderLeft: '3px solid var(--ink)', paddingLeft: 20, margin: '24px 0',
      display: 'flex', flexDirection: 'column', gap: 4,
    }}>
      {context && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--leak)', marginBottom: 2 }}>{context}</span>
      )}
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)' }}>{stat}</span>
      {source && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{source}</span>}
    </div>
  );
}

/* ---- Table of contents ---- */
function TOC({ items }) {
  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-default)',
      borderRadius: 8, padding: '20px 24px', marginBottom: 32, maxWidth: 480,
    }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 12px' }}>In this guide</p>
      <ol style={{ margin: 0, padding: '0 0 0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', letterSpacing: 'var(--tracking-tight)' }}>
            <a href={'#' + item.anchor} style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--border-default)' }}>{item.label}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---- Pillar article data ---- */
const PILLARS = [
  {
    slug: 'guide-distribution-leaks',
    tag: 'Pillar Article',
    t: 'The Complete Guide to Insurance Distribution Revenue Leaks',
    date: 'Jun 2026',
    toc: [
      { anchor: 'dl-what-is-a-leak',   label: 'What is a distribution leak?' },
      { anchor: 'dl-seven-stages',      label: 'The 7-stage distribution chain' },
      { anchor: 'dl-cost',              label: 'What leaks actually cost' },
      { anchor: 'dl-how-to-diagnose',  label: 'How to diagnose your biggest leak' },
    ],
    body: [
      { type: 'h3', anchor: 'dl-what-is-a-leak', text: 'What is a distribution leak?' },
      { type: 'p', text: "Most life insurance agencies don't have a lead problem. They have a system problem — and the system has multiple places where momentum quietly stalls before it ever becomes revenue. We call these distribution leaks, and every agency has them." },
      { type: 'p', text: "A distribution leak happens when something that should convert doesn't: a candidate who never gets licensed, a new agent who never activates, a client whose policy lapses in year two. Each of those events represents real money that entered the top of the funnel and never made it out the other side." },
      { type: 'figure', figure: 'growth' },
      { type: 'p', text: "That number reframes the whole problem. In a market growing under 1% a year, you cannot grow by waiting for the market to lift you. Growth has to come from converting more of what you already have — closing the leaks — not from the tide coming in." },
      { type: 'h3', anchor: 'dl-seven-stages', text: 'The 7-stage distribution chain' },
      { type: 'p', text: "Distribution doesn't break all at once — it breaks in stages. The chain runs: Attention → Recruiting → Licensing → Activation → Production → Persistency → Revenue. Each stage is a gate. Anything that stalls at a gate is a leak." },
      { type: 'p', text: "Most agencies only measure production and revenue — the last two stages. By the time a problem shows up there, it's already months old. The leak started somewhere upstream and nobody noticed until it became a P&L problem." },
      { type: 'h3', anchor: 'dl-cost', text: 'What leaks actually cost' },
      { type: 'p', text: "Distribution is where the money actually moves: more than half of U.S. life insurance is still sold through independent agents and brokers. If your distribution leaks, the product never reaches the market — no matter how good the product is." },
      { type: 'figure', figure: 'distribution' },
      { type: 'p', text: "The market is also strikingly fragmented. Scale isn't the moat — distribution and trust are. That is the opening for a well-run agency or IMO." },
      { type: 'figure', figure: 'fragmentation' },
      { type: 'h3', anchor: 'dl-how-to-diagnose', text: 'How to diagnose your biggest leak' },
      { type: 'p', text: "Diagnosing the right leak starts with measuring conversion at every stage — not just production. Map your last 12 months: how many candidates entered, how many got licensed, how many activated, how many are still active today. The biggest drop-off is your primary leak." },
      { type: 'p', text: "The Distribution Leak Assessment scores all 8 systems simultaneously and identifies which one is costing you the most. It takes 12 minutes and produces a prioritized diagnosis — not a generic report." },
    ],
    children: [
      { slug: 'why-agents-arent-producing', t: "Why Your Agents Aren't Writing More Business" },
      { slug: 'revenue-leak-calculator',    t: 'The Revenue Leak Calculator: What a 5% Improvement Is Actually Worth' },
      { slug: 'distribution-chain',         t: 'The 7-Stage Distribution Chain (And Where Agencies Lose Money at Each One)' },
      { slug: 'imo-vs-agency-leaks',        t: 'IMO vs. Agency Distribution: Where the Leaks Are Different' },
    ],
  },
  {
    slug: 'guide-insurance-recruiting',
    tag: 'Pillar Article',
    t: 'The Complete Guide to Insurance Recruiting',
    date: 'Jun 2026',
    toc: [
      { anchor: 'rec-the-real-question', label: 'The question most agencies are asking wrong' },
      { anchor: 'rec-funnel',            label: 'Measuring the full recruiting funnel' },
      { anchor: 'rec-licensing-gap',     label: 'The licensing bottleneck nobody talks about' },
      { anchor: 'rec-fit',               label: 'Recruiting for fit, not volume' },
    ],
    body: [
      { type: 'h3', anchor: 'rec-the-real-question', text: 'The question most agencies are asking wrong' },
      { type: 'p', text: "Recruiting is the most visible part of a distribution system and, for most agencies, the most misunderstood. The question isn't how many people you can get in the door. The question is how many of those people will still be producing two years from now." },
      { type: 'figure', figure: 'distribution' },
      { type: 'p', text: "So who you recruit is who reaches the market. In a $1.1 trillion industry growing under 1% a year, recruiting isn't about flooding the pipeline — it's about building the channel that actually carries product to families. The agent is the distribution." },
      { type: 'h3', anchor: 'rec-funnel', text: 'Measuring the full recruiting funnel' },
      { type: 'p', text: "Most recruiting funnels are measured at the top — candidates, conversations, contracting — and not at the bottom, where it actually matters: licensed, activated, producing, retained. When you only measure volume, you optimize for volume. The agencies that grow sustainably measure conversion at every stage." },
      { type: 'p', text: "The metric that predicts long-term growth isn't candidates contracted. It's the percentage of contracted agents who are still actively writing business well into year two. Most agencies don't track this number — which is exactly why it leaks. (Industry-wide retention benchmarks are thin and inconsistent, so the only number that matters is the one measured inside your own organization.)" },
      { type: 'h3', anchor: 'rec-licensing-gap', text: 'The licensing bottleneck nobody talks about' },
      { type: 'p', text: "Between contracting and activation sits the licensing process — and it kills more recruiting momentum than almost any other single factor. A candidate who waits weeks to get licensed while managing another job is a candidate who is reconsidering whether this is worth it." },
      { type: 'p', text: "This is one of the clearest places to measure your own data: track time-from-contract-to-license and the percentage of contracted candidates who ever complete licensing. If that number is low, no amount of top-of-funnel recruiting fixes it." },
      { type: 'h3', anchor: 'rec-fit', text: 'Recruiting for fit, not volume' },
      { type: 'p', text: "The agencies that grow fastest aren't the ones with the biggest top-of-funnel, they're the ones with the tightest fit between who they attract and who they're built to develop. This requires being honest about what your organization is actually good at developing — not what you wish it was good at." },
      { type: 'p', text: "When recruiting and development aren't aligned, the funnel fills up with people the system was never going to retain. You spend the same recruiting dollars, but they produce a fraction of the long-term value." },
    ],
    children: [
      { slug: 'recruiting',          t: "More Candidates Isn't the Goal — More Right Candidates Is" },
      { slug: 'why-agents-quit',     t: 'Why Life Insurance Agents Leave Agencies (And How To Stop It)' },
      { slug: 'recruiting-metrics',  t: "Recruiting Metrics That Actually Matter (And the Ones That Don't)" },
      { slug: 'carrier-vs-imo',      t: 'Carrier vs. IMO Recruiting Models: Which Leaks More?' },
      { slug: 'funnel-mistakes',     t: 'The 5 Recruiting Funnel Mistakes Most Agencies Make' },
    ],
  },
  {
    slug: 'guide-agent-retention',
    tag: 'Pillar Article',
    t: 'The Complete Guide to Agent Retention',
    date: 'May 2026',
    toc: [
      { anchor: 'ret-real-cost',    label: 'The real cost of losing an agent' },
      { anchor: 'ret-why-leave',    label: 'Why agents actually leave' },
      { anchor: 'ret-first-90',     label: 'The first 90 days are the highest-risk period' },
      { anchor: 'ret-path',         label: 'Creating a visible development path' },
    ],
    body: [
      { type: 'h3', anchor: 'ret-real-cost', text: 'The real cost of losing an agent' },
      { type: 'p', text: "Agent retention is one of the highest-leverage and least-measured problems in distribution. Every agent who leaves takes with them the recruiting cost, the licensing time, the training investment, and — if they were producing — an active book of business that may follow them out." },
      { type: 'stat', context: 'Research gap, not an external stat', stat: "Retention is the gap the research itself can't fill. Clean, channel-level agent-retention benchmarks don't exist publicly — so the only number that matters is yours.", source: 'Clientele Builders, synthesis of 10 industry research databases, 2026' },
      { type: 'p', text: "That is not a limitation — it's the opportunity. When an entire industry guesses at its own retention, the organization that actually measures 30/60/90-day and year-one retention can see leaks everyone else is flying blind on." },
      { type: 'h3', anchor: 'ret-why-leave', text: 'Why agents actually leave' },
      { type: 'p', text: "The conventional explanation for why agents leave is compensation. In our experience it's rarely the full story. The causes that tend to surface underneath are: unclear expectations early on, a lack of visible development path, inconsistent management attention, and a comp structure that doesn't reward the behaviors the agency actually needs." },
      { type: 'p', text: "Often 'the pay wasn't enough' is the explanation an agent gives for a decision they'd already made for other reasons. That's a hypothesis worth testing against your own exit data — not an industry statistic to take on faith." },
      { type: 'h3', anchor: 'ret-first-90', text: 'The first 90 days are the highest-risk period' },
      { type: 'p', text: "The attrition curve in life insurance distribution is front-loaded. New agents form their expectations about the business in their first weeks, and if those expectations aren't matched by structured support, they disengage before they ever have a real chance to produce. The earliest weeks tend to carry the highest risk — which is why the 30/60/90-day window is the right thing to instrument." },
      { type: 'p', text: "The broader research is consistent on one point that applies here: this is still a people business, and trust and support — not just product — are what keep people engaged (Clientele Builders synthesis of industry research, 2026)." },
      { type: 'h3', anchor: 'ret-path', text: 'Creating a visible development path' },
      { type: 'p', text: "A pattern we see repeatedly is some version of 'I couldn't see where I was going.' Agents don't just want money — they want to know that if they put in the work, there's somewhere to go. Organizations that define that path explicitly — what milestones unlock what opportunities — tend to retain more of the agents who actually want to build something." },
    ],
    children: [
      { slug: 'persistency',       t: 'The Retention Math Nobody Runs' },
      { slug: 'onboarding',        t: 'The First 90 Days Decide Almost Everything' },
      { slug: 'why-agents-leave',  t: "The Real Reasons Agents Leave (It's Not Always Comp)" },
      { slug: 'retention-signals', t: 'How to Spot an At-Risk Agent Before They Quit' },
    ],
  },
  {
    slug: 'guide-agent-production',
    tag: 'Pillar Article',
    t: 'The Complete Guide to Increasing Agent Production',
    date: 'May 2026',
    toc: [
      { anchor: 'prod-gap',       label: 'The gap between your best and average producers' },
      { anchor: 'prod-process',   label: 'Why it\'s a process problem, not a talent problem' },
      { anchor: 'prod-training',  label: 'Training that changes field behavior' },
      { anchor: 'prod-manager',   label: 'The manager behaviors that move the number' },
    ],
    body: [
      { type: 'h3', anchor: 'prod-gap', text: 'The gap between your best and average producers' },
      { type: 'p', text: "The gap between your top producers and your average producers is rarely a talent gap. In most agencies, it's a process gap — a difference in what happens between 'I have a prospect' and 'I have a client.' Your best agents have figured it out. Everyone else is improvising." },
      { type: 'stat', context: 'Research gap, not an external stat', stat: "Production by agent and by IMO model is a flagged research gap — no public dataset tells you why your top agent outperforms. Your CRM does.", source: 'Clientele Builders, synthesis of 10 industry research databases, 2026' },
      { type: 'p', text: "So the work isn't to chase an industry close-rate benchmark — it's to instrument your own funnel: time-to-first-appointment, appointment-to-proposal, proposal-to-close, by agent and by segment. The variance between your best and average producers is the map." },
      { type: 'h3', anchor: 'prod-process', text: "Why it's a process problem, not a talent problem" },
      { type: 'p', text: "Agent production is a systems problem. If your training doesn't translate to field behavior, if your CRM isn't tracking the right activity, if your comp structure rewards the wrong things — all of that shapes what an average agent does on a Tuesday afternoon when nobody is watching." },
      { type: 'p', text: "When the sales process lives only in individual habits, results vary wildly by agent and the organization has no way to diagnose why. When it's documented and observable, leaks become visible — too few follow-ups, too long between contact and proposal, too little structure in the close." },
      { type: 'h3', anchor: 'prod-training', text: 'Training that changes field behavior' },
      { type: 'p', text: "Most training programs fail at the last step: transferring the learning into field behavior. An agent can pass a certification, answer every question correctly, and still revert to old habits on day one back in the field. The training formats that tend to move production are the ones that practice the real scenario — the objection, the close, the conversation — not the theory behind it." },
      { type: 'p', text: "Whether your training actually changes behavior is, again, a measurable question: compare production curves for agents before and after a program rather than assuming the certificate did its job." },
      { type: 'h3', anchor: 'prod-manager', text: 'The manager behaviors that move the number' },
      { type: 'p', text: "Production is heavily influenced by what managers pay attention to. Managers who track activity metrics (dials, appointments, proposals) alongside results metrics see higher production than those who only measure revenue. What gets measured gets managed — and agents know what their manager watches." },
    ],
    children: [
      { slug: 'sales-process',       t: 'Turning Attention Into Revenue, Reliably' },
      { slug: 'compensation',        t: 'Are Your Incentives Pointed at the Outcomes You Actually Want?' },
      { slug: 'leadership',          t: 'Who Runs This in Five Years?' },
      { slug: 'top-producer-habits', t: 'What Top Producers Do Differently (That Nobody Talks About)' },
    ],
  },
  {
    slug: 'guide-lead-generation',
    tag: 'Pillar Article',
    t: 'The Complete Guide to Insurance Lead Generation',
    date: 'Apr 2026',
    toc: [
      { anchor: 'lead-shift',       label: "Where consumer attention has shifted" },
      { anchor: 'lead-trust',       label: 'Trust signals that move people to conversations' },
      { anchor: 'lead-conversion',  label: 'Traffic vs. conversion: which problem do you have?' },
      { anchor: 'lead-system',      label: 'Building a lead system that doesn\'t depend on one channel' },
    ],
    body: [
      { type: 'h3', anchor: 'lead-shift', text: 'Where consumer attention has shifted' },
      { type: 'p', text: "Lead generation in life insurance has changed more in the last three years than in the decade before it. Consumers increasingly use technology and AI to research products — but the research is equally clear that they still want human help on big, emotional financial decisions. Digital starts the relationship; people close it." },
      { type: 'stat', context: 'Financial product research behavior', stat: "Consumers use digital tools and AI to research financial products — but still want a human advisor for high-stakes decisions.", source: 'Mintel & Business Source Ultimate, via Clientele Builders research synthesis, 2026' },
      { type: 'h3', anchor: 'lead-trust', text: 'Trust signals that move people to conversations' },
      { type: 'p', text: "The strongest finding across the research is that trust is a conversion mechanism, not a slogan. People trust skilled human advisors, friends, and referrals far more than strangers or robo-tools — and when they trust the advisor and understand the decision, they are more likely to listen, buy, and stay." },
      { type: 'stat', context: 'Financial advisor trust research', stat: "Trust increases advice-taking and follow-through. People act when they trust the advisor and understand the decision.", source: 'ProQuest & Business Source Ultimate, via Clientele Builders research synthesis, 2026' },
      { type: 'p', text: "This means marketing isn't a separate function from sales. It's the layer that determines whether the people entering your funnel already trust you a little before the first call. The signals that matter most aren't credentials and designations — they're relevance, clarity, and showing you understand the exact problem a prospect is facing." },
      { type: 'h3', anchor: 'lead-conversion', text: 'Traffic vs. conversion: which problem do you have?' },
      { type: 'p', text: "The first question most agencies ask is 'how do we get more leads?' The more important question is 'why aren't our current leads converting?' Volume masks conversion problems until the budget runs out. Before investing in lead generation, diagnose whether you have a traffic problem or a conversion problem — they require completely different solutions." },
      { type: 'stat', context: 'Financial advisor usage by generation', stat: "Advisor usage is low overall — a large awareness gap — and the audience splits by age: millennials lean digital, boomers lean human.", source: 'MRI Simmons, via Clientele Builders research synthesis, 2026' },
      { type: 'p', text: "That split is why one message, one channel, and one conversion path can't serve everyone. The conversion rate you should care about isn't an industry average — it's your own, measured by lead source and by segment." },
      { type: 'h3', anchor: 'lead-system', text: "Building a lead system that doesn't depend on one channel" },
      { type: 'p', text: "Single-channel dependency is its own distribution leak. Agencies that rely entirely on referrals, or entirely on digital ads, or entirely on carrier leads are one algorithm change or relationship shift away from a revenue crisis. A durable lead system has multiple sources, each with a clear conversion rate you can measure and improve." },
    ],
    children: [
      { slug: 'marketing',           t: 'Trust Is Built Before the First Conversation' },
      { slug: 'technology-data',     t: "You Can't Fix What You Can't See" },
      { slug: 'digital-attention',   t: 'Where Life Insurance Consumers Go Before They Call an Agent' },
      { slug: 'lead-conversion-gap', t: "Why Your Leads Aren't Converting (And It's Not the Leads)" },
    ],
  },
];

/* ---- Supporting articles ---- */
const CHILD_POSTS = [
  {
    slug: 'recruiting', tag: 'Recruiting', date: 'Jun 2026',
    t: "More Candidates Isn't the Goal — More Right Candidates Is",
    body: [
      "Most agencies measure recruiting by volume: how many candidates entered the funnel this month. But volume hides the leak. The number that actually predicts growth is conversion from candidate to licensed, producing agent — and for most organizations, that number is quietly small.",
      "Firms that grow fastest aren't the ones with the biggest top-of-funnel, they're the ones with the tightest fit between who they attract and who they're built to develop. When recruiting and development aren't aligned, the funnel fills up with people the system was never going to retain.",
      "The fix isn't 'recruit harder.' It's knowing exactly where your funnel narrows — attention, first conversation, licensing, first sale — and which of those gaps is actually costing you the most.",
    ],
  },
  {
    slug: 'onboarding', tag: 'Onboarding', date: 'Jun 2026',
    t: 'The First 90 Days Decide Almost Everything',
    body: [
      "New agents form their expectations about the business — and about whether they belong in it — in their first few months. If that period is unstructured, even a well-recruited agent can quietly disengage before they've had a real chance to produce.",
      "The organizations that retain new agents at the highest rates treat onboarding as a system, not an event: a clear sequence of what to do, who to call, and what 'early success' looks like, with a manager checking in on a defined cadence rather than waiting for problems to surface.",
      "When onboarding is informal, it usually isn't visible as a leak — it just looks like normal attrition. But it's often the single largest gap between recruiting effort and producing agents.",
    ],
  },
  {
    slug: 'marketing', tag: 'Marketing', date: 'Jun 2026',
    t: 'Trust Is Built Before the First Conversation',
    body: [
      "Financial advisors are the single most trusted source of financial advice in America — ahead of family, friends, and business news, in every age group except Gen Z. That's not an opinion; it's what a 2023 Harris Poll survey of 2,740 U.S. adults found for Northwestern Mutual's Planning & Progress Study. Only 3% of people said the same about social-media \"finfluencers.\"",
      "Here's the gap that should bother every agency owner: despite that trust, only 37% of Americans actually work with a financial advisor. Most people believe an advisor would help them, and most people don't have one. That's not a product problem. That's a marketing problem — the trust exists, but it isn't reaching the people who'd act on it.",
      "And trust gets decided earlier than most agencies think. A 2025 Mintel study of nearly 2,000 U.S. adults asked people why they trust their financial provider at all. The top reasons had nothing to do with a sales pitch: their money has stayed safe (51%), they've been with the provider a long time (49%), the provider has a reputation for being trustworthy (38%), past interactions were positive (36%), the business is well established (34%).",
      "Every one of those is something a prospect can sense — or fail to sense — before they ever pick up the phone. A reputation. A track record. Evidence that other people trusted this agency and it worked out. None of it depends on what's said in the first call.",
      "That's the actual job marketing does inside a distribution system. It isn't lead volume, and it isn't a clever ad. It's making sure the trust signals — reputation, tenure, proof, consistency — already exist by the time someone is ready to talk. An agency with a strong sales process and a thin reputation is fighting uphill before the conversation even starts.",
    ],
  },
  {
    slug: 'sales-process', tag: 'Sales Process', date: 'Jun 2026',
    t: 'Turning Attention Into Revenue, Reliably',
    body: [
      "A 2024 study in Investment Management and Financial Innovations measured what actually moves someone from interested to committed: 78% of investors reported increased confidence in their decisions after working with advisors who prioritized transparency and demonstrated real expertise. 85% said they specifically preferred advisors who showed reliability and ethical conduct — and that preference is what builds the relationship that gets the deal done.",
      "A separate 2024 study in the Journal of Management and Business Research found the same mechanism from a different angle: trust is a significant, direct predictor of whether someone actually follows the advice they're given. Not interest. Not how good the pitch sounded. Trust.",
      "That reframes what a sales process is actually for. The gap between your best producers and everyone else usually isn't a script gap — it's that your best agent builds trust at every step (clear answers, visible expertise, follow-through) and your average agent is running a generic pitch and hoping the close handles itself.",
      "When that process lives only in individual habits, results vary wildly by agent and the organization has no way to diagnose why. When it's documented and observable — what's said, what's shown, how follow-up happens — leaks become visible: too few follow-ups, too long between contact and proposal, too little transparency before the ask.",
      "The goal isn't to make every agent identical. It's to make sure every agent is actually doing the thing the research says converts — being transparent, demonstrating expertise, following through — instead of assuming charisma will cover for a missing process.",
    ],
  },
  {
    slug: 'persistency', tag: 'Persistency', date: 'Jun 2026',
    t: 'The Retention Math Nobody Runs',
    body: [
      "Persistency is one of the least-discussed and most consequential numbers in distribution. A policy that lapses early doesn't just remove future premium — it can claw back commission already paid and erode the trust that took real effort to build.",
      "A small swing in persistency — a few points either direction — compounds across a book of business in a way that's easy to underestimate when you're looking month to month instead of year over year.",
      "Most persistency problems trace back to earlier stages: a client who didn't fully understand what they bought, or an agent who moved on before the relationship was established. Persistency is often the symptom; the leak is upstream.",
    ],
  },
  {
    slug: 'compensation', tag: 'Compensation', date: 'Apr 2026',
    t: 'Are Your Incentives Pointed at the Outcomes You Actually Want?',
    body: [
      "Compensation structures send signals whether or not they're designed to. If a plan rewards first-year sales heavily and persistency lightly, that's what the system will optimize for — regardless of what the mission statement says.",
      "Many organizations built their comp structure years ago and haven't revisited it as the business changed. The result is a quiet mismatch: the behaviors leadership wants and the behaviors the plan actually pays for drift apart.",
      "Reviewing compensation isn't about paying people less. It's about making sure the incentives and the goals are pointed in the same direction — because when they're not, no amount of training fixes it.",
    ],
  },
  {
    slug: 'leadership', tag: 'Leadership', date: 'Apr 2026',
    t: 'Who Runs This in Five Years?',
    body: [
      "Most distribution organizations are built around the producers and leaders running them today. Far fewer have a deliberate answer to who develops into the next layer — it's assumed it will happen organically.",
      "Sometimes it does. More often, the agents with leadership potential either plateau as individual producers or leave for an organization that gave them a path. Either way, the leak doesn't show up on a P&L — it shows up five years later as a gap nobody planned for.",
      "Intentional development — identifying who has the capability and giving them a track — is one of the highest-leverage and most overlooked parts of a distribution system.",
    ],
  },
  {
    slug: 'technology-data', tag: 'Technology & Data', date: 'Apr 2026',
    t: "You Can't Fix What You Can't See",
    body: [
      "Every stage of a distribution system produces data. The question is whether anyone can see it in one place, or whether it's scattered across a CRM, a carrier portal, a spreadsheet, and someone's memory.",
      "Fragmented reporting doesn't just make analysis harder — it hides the leak entirely. An organization can be losing significant revenue at a specific stage and have no way to know, because no report spans that stage.",
      "This is why diagnosis has to come before technology investment. Buying a new tool doesn't fix a visibility problem if the underlying data still isn't connected. Seeing the whole system clearly is the prerequisite — not the byproduct — of fixing it.",
    ],
  },
];

/* ---- Blog header with category jump nav ---- */
function BlogHeader() {
  const { Eyebrow } = CB_BL;
  const categories = [
    { label: 'Revenue Leaks',  slug: 'guide-distribution-leaks' },
    { label: 'Recruiting',     slug: 'guide-insurance-recruiting' },
    { label: 'Retention',      slug: 'guide-agent-retention' },
    { label: 'Production',     slug: 'guide-agent-production' },
    { label: 'Lead Generation',slug: 'guide-lead-generation' },
  ];
  return (
    <section className="cb-section" style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-default)', paddingBottom: 56 }}>
      <div className="cb-container">
        <Eyebrow style={{ marginBottom: 24, display: 'inline-flex' }}>Research &amp; Notes</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--text-primary)',
          fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)', lineHeight: 1.06, letterSpacing: 'var(--tracking-tighter)', margin: '0 0 18px', maxWidth: 840,
        }}>
          The distribution intelligence library
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 0 40px' }}>
          Research-backed answers to the questions agencies, IMOs, and carriers actually ask. Start with a pillar guide — each one links to supporting articles on the same topic.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {categories.map((c) => (
            <a key={c.slug} href={c.slug + '.html'} style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
              color: 'var(--text-primary)', textDecoration: 'none',
              border: '1px solid var(--border-strong)', borderRadius: 4, padding: '7px 14px',
              background: 'var(--surface-page)',
            }}>{c.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Render article body (mixed paragraphs, h3s, stats) ---- */
function ArticleBody({ body }) {
  return (
    <div style={{ maxWidth: 680 }}>
      {body.map((block, i) => {
        if (block.type === 'h3') return (
          <h3 key={i} id={block.anchor} style={{
            fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20,
            letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)',
            margin: '32px 0 12px', scrollMarginTop: 96,
          }}>{block.text}</h3>
        );
        if (block.type === 'stat') return <StatBlock key={i} stat={block.stat} source={block.source} context={block.context} />;
        if (block.type === 'figure') {
          const F = { growth: window.IGGrowth, fragmentation: window.IGFragmentation, distribution: window.IGDistribution }[block.figure];
          return F ? <F key={i} /> : null;
        }
        return <p key={i} style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary)', margin: '0 0 14px' }}>{block.text}</p>;
      })}
    </div>
  );
}

/* ---- Pillar card (index teaser — links out to its own page) ---- */
function PillarCard({ p, index }) {
  const rt = readTime(p.body.filter(b => b.type === 'p').map(b => b.text));
  const excerpt = (p.body.find(b => b.type === 'p') || {}).text || '';
  return (
    <article style={{
      padding: '40px 0',
      borderTop: index === 0 ? '1px solid var(--border-default)' : 'none',
      borderBottom: '1px solid var(--border-default)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--leak)', fontWeight: 600 }}>{p.tag}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{p.date}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{rt}</span>
      </div>
      <a href={p.slug + '.html'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '0 0 12px', maxWidth: 720 }}>{p.t}</h2>
      </a>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 16px', maxWidth: 640 }}>{excerpt}</p>
      <a href={p.slug + '.html'} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-strong)', paddingBottom: 2 }}>Read the full guide →</a>
    </article>
  );
}

/* ---- Full blog index (teasers only — every article links to its own page) ---- */
function BlogList() {
  const { Eyebrow } = CB_BL;
  return (
    <React.Fragment>
      <section className="cb-section" style={{ background: 'var(--surface-page)', paddingBottom: 0 }}>
        <div className="cb-container">
          <Eyebrow style={{ marginBottom: 32, display: 'inline-flex' }}>Pillar guides</Eyebrow>
          {PILLARS.map((p, i) => <PillarCard key={p.slug} p={p} index={i} />)}
        </div>
      </section>

      <section className="cb-section" style={{ background: 'var(--surface-card)' }}>
        <div className="cb-container">
          <Eyebrow style={{ marginBottom: 32, display: 'inline-flex' }}>Supporting articles</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {CHILD_POSTS.map((p, i) => (
              <article key={p.slug} style={{
                padding: '32px 0',
                borderTop: i === 0 ? '1px solid var(--border-default)' : 'none',
                borderBottom: '1px solid var(--border-default)',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.tag}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{p.date}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{readTime(p.body)}</span>
                </div>
                <a href={p.slug + '.html'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '0 0 10px', maxWidth: 640 }}>{p.t}</h2>
                </a>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 14px', maxWidth: 640 }}>{p.body[0]}</p>
                <a href={p.slug + '.html'} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-strong)', paddingBottom: 2 }}>Read more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ---- Single article page — pillar guide or supporting post, looked up by slug ---- */
function ArticlePage({ slug }) {
  const pillar = PILLARS.find(p => p.slug === slug);
  if (pillar) {
    const rt = readTime(pillar.body.filter(b => b.type === 'p').map(b => b.text));
    return (
      <section className="cb-section" style={{ background: 'var(--surface-page)' }}>
        <div className="cb-container">
          <a href="blog.html" style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <Icon name="arrow-left" size={14} /> Research &amp; Notes
          </a>
          <article style={{ paddingBottom: 60, maxWidth: 760 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--leak)', fontWeight: 600 }}>{pillar.tag}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{pillar.date}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{rt}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '0 0 28px', maxWidth: 740 }}>{pillar.t}</h1>
            {pillar.toc && <TOC items={pillar.toc} />}
            <ArticleBody body={pillar.body} />
            <div style={{ marginTop: 36 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Supporting articles</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {pillar.children.map((c, ci) => (
                  <li key={c.slug}>
                    <a href={c.slug + '.html'} style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0',
                      borderTop: ci === 0 ? '1px solid var(--border-default)' : 'none',
                      borderBottom: '1px solid var(--border-default)', textDecoration: 'none',
                    }}>
                      <Icon name="arrow-right" size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', letterSpacing: 'var(--tracking-tight)' }}>{c.t}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
    );
  }
  const post = CHILD_POSTS.find(p => p.slug === slug);
  if (post) {
    return (
      <section className="cb-section" style={{ background: 'var(--surface-page)' }}>
        <div className="cb-container">
          <a href="blog.html" style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <Icon name="arrow-left" size={14} /> Research &amp; Notes
          </a>
          <article style={{ paddingBottom: 60, maxWidth: 680 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{post.tag}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{post.date}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{readTime(post.body)}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', margin: '0 0 24px', maxWidth: 660 }}>{post.t}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {post.body.map((para, j) => (
                <p key={j} style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary)', margin: 0 }}>{para}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    );
  }
  return (
    <section className="cb-section">
      <div className="cb-container">
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-secondary)' }}>Article not found: {slug}</p>
      </div>
    </section>
  );
}

Object.assign(window, { BlogHeader, BlogList, ArticlePage });
