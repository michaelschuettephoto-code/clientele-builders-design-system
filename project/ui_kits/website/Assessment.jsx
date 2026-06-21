const CB_A = window.ClienteleBuildersDesignSystem_6b1cb1;
const { useState: useStateA } = React;

/* ---- Assessment overlay: intake → sample diagnostic result ---- */
function Assessment({ onClose }) {
  const { Button, Eyebrow, Input, Select, HealthBar, Metric, Badge, Card } = CB_A;
  const [step, setStep] = useStateA(0); // 0 intake, 1 result

  const scores = [
    { label: 'Recruiting', value: 34 },
    { label: 'Onboarding', value: 41 },
    { label: 'Marketing', value: 58 },
    { label: 'Sales Process', value: 63 },
    { label: 'Persistency', value: 81 },
    { label: 'Compensation', value: 72 },
    { label: 'Leadership', value: 55 },
    { label: 'Technology & Data', value: 38 },
  ];

  return (
    <div role="dialog" aria-modal="true" style={{
      position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      background: 'rgba(11,26,46,0.55)', backdropFilter: 'blur(6px)', padding: '40px 20px', overflowY: 'auto',
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)',
        width: '100%', maxWidth: step === 0 ? 560 : 720, position: 'relative', overflow: 'hidden',
      }}>
        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: 18, right: 18, zIndex: 2, width: 36, height: 36, borderRadius: '999px',
          border: '1px solid var(--border-default)', background: 'var(--surface-card)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)',
        }}>
          <Icon name="x" size={18} />
        </button>

        {step === 0 ? (
          <div style={{ padding: 36 }}>
            <Eyebrow style={{ marginBottom: 16, display: 'inline-flex' }}>Step 1 of 2 · Intake</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, letterSpacing: '-.02em', margin: '0 0 8px', color: 'var(--text-primary)' }}>
              Let's locate your biggest leak
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-secondary)', margin: '0 0 26px' }}>
              A few quick questions. The full diagnostic runs inside the assessment — this is a preview of what it reveals.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
              <Select label="Organization type" placeholder="Choose one" options={['IMO', 'Agency', 'Distribution leader', 'Carrier']} />
              <Select label="Active producers" placeholder="Select range" options={['1–25', '26–100', '101–500', '500+']} />
            </div>
            <div style={{ marginBottom: 18 }}>
              <Select label="Where do you suspect the biggest leak is?" placeholder="Choose one" options={['Recruiting', 'Onboarding / activation', 'Sales process', 'Persistency', "I'm not sure — that's why I'm here"]} />
            </div>
            <div style={{ marginBottom: 28 }}>
              <Input label="Work email" type="email" placeholder="you@agency.com" hint="Your full report is sent here." />
            </div>
            <Button variant="primary" size="lg" fullWidth onClick={() => setStep(1)} iconRight={<Icon name="arrow-right" size={18} />}>
              Reveal my sample scorecard
            </Button>
          </div>
        ) : (
          <div>
            <div style={{ background: 'var(--ink)', color: 'var(--text-on-dark)', padding: '32px 36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <Eyebrow tone="accent" style={{ marginBottom: 14, display: 'inline-flex' }}>Sample diagnostic result</Eyebrow>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, letterSpacing: '-.02em', margin: 0, color: '#fff' }}>
                    Your biggest leak is <span style={{ color: 'var(--leak)' }}>Recruiting</span>
                  </h2>
                </div>
                <Metric value="$1.2M" label="Est. annual leak" tone="leak" align="right" />
              </div>
            </div>
            <div style={{ padding: 36 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 40px', marginBottom: 28 }}>
                {scores.map((s) => <HealthBar key={s.label} label={s.label} value={s.value} />)}
              </div>
              <Card variant="sunken" padding="md" style={{ marginBottom: 26 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--leak)', flexShrink: 0, marginTop: 2 }}><Icon name="arrow-down-circle" size={20} /></span>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>What this means:</strong> you're attracting attention but losing it before activation. The fix usually isn't more recruiting — it's the path between joining and first production.
                  </p>
                </div>
              </Card>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant="primary" size="lg">Book a strategy call</Button>
                <Button variant="ghost" size="lg" onClick={() => setStep(0)} iconLeft={<Icon name="arrow-left" size={17} />}>Start over</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

window.Assessment = Assessment;
