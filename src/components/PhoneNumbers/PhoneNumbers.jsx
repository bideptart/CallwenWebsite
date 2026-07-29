import React from 'react';
import { Phone, Repeat, Wifi, Check, Sparkles } from 'lucide-react';
import './PhoneNumbers.css';

const PHONE_NUMBERS_FEATURES = [
  {
    id: 'byon',
    number: '/ 01',
    iconType: 'phone',
    title: 'Bring your own number',
    description:
      'Already have a carrier account? Connect it and your existing numbers route through Callwen instantly — no porting, no downtime.',
    theme: 'orange',
    iconBg: 'linear-gradient(135deg, #fd7a03, #fc9507)',
    badge: 'Instant SIP Trunk Connection',
    metrics: [
      { label: 'Porting Time', value: '0 Seconds' },
      { label: 'Downtime', value: 'Zero Risk' },
    ],
  },
  {
    id: 'bidirectional',
    number: '/ 02',
    iconType: 'repeat',
    iconBg: 'linear-gradient(135deg, #0684bc, #0a9ed8)',
    theme: 'blue',
    title: 'Inbound and outbound',
    description:
      'One number, both directions. Trigger outbound campaigns or answer every incoming call automatically — same dashboard, same agent.',
    badge: 'Bidirectional Voice Engine',
    metrics: [
      { label: 'Active Direction', value: 'Inbound & Outbound' },
      { label: 'Agent Hub', value: 'Unified' },
    ],
  },
  {
    id: 'carrier-grade',
    number: '/ 03',
    iconType: 'wifi',
    iconBg: 'linear-gradient(135deg, #10b981, #34d399)',
    theme: 'green',
    title: 'Carrier-grade voice',
    description:
      "Your provider's global network carries the call. We handle the brain. You keep the relationship, the billing, and the porting rights.",
    badge: 'Direct Carrier Passthrough',
    metrics: [
      { label: 'Network Latency', value: '12ms Avg' },
      { label: 'Porting Rights', value: '100% Yours' },
    ],
  },
];

const CARRIER_PROVIDERS = ['Twilio', 'Bandwidth', 'Plivo', 'SIP Trunk'];

const RenderFeatureIcon = ({ type, size = 18 }) => {
  if (type === 'repeat') return <Repeat size={size} />;
  if (type === 'wifi') return <Wifi size={size} />;
  return <Phone size={size} />;
};

export const PhoneNumbers = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isManual, setIsManual] = React.useState(false);

  // Auto-cycle every 3.5s unless clicked manually
  React.useEffect(() => {
    if (isManual) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % PHONE_NUMBERS_FEATURES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isManual]);

  const activeFeature = PHONE_NUMBERS_FEATURES[activeIndex];

  const handleSelect = (index) => {
    setActiveIndex(index);
    setIsManual(true);
  };

  return (
    <section className="phn" id="phone-numbers">
      <div className="phn__strip" aria-hidden="true" />

      <div className="container">
        <div className="phn__grid">
          {/* Left Column — Content & Interactive Cards */}
          <div className="phn__content">
            <div className="phn__header">
              <span className="phn__label">
                <Sparkles size={11} />
                PHONE NUMBERS
              </span>
              <h2 className="phn__title">
                Your carrier account,{' '}
                <em className="phn__title-em">supercharged.</em>
              </h2>
              <p className="phn__subtitle">
                We don't sell phone numbers. We connect to the carrier you already
                use — so your numbers, billing, and porting stay exactly where they are.
              </p>
            </div>

            {/* Interactive Feature Cards */}
            <div className="phn__features">
              {PHONE_NUMBERS_FEATURES.map((feature, i) => {
                const isActive = i === activeIndex;

                return (
                  <button
                    type="button"
                    key={feature.id}
                    className={[
                      'phn__feature',
                      `phn__feature--${feature.theme}`,
                      isActive ? 'phn__feature--active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => handleSelect(i)}
                    aria-pressed={isActive}
                  >
                    <div
                      className="phn__feature-icon"
                      style={{ background: feature.iconBg }}
                    >
                      <RenderFeatureIcon type={feature.iconType} size={18} />
                    </div>

                    <div className="phn__feature-content">
                      <div className="phn__feature-header">
                        <h3 className="phn__feature-title">{feature.title}</h3>
                        <span className="phn__ghost-num">{feature.number}</span>
                      </div>
                      <p className="phn__feature-desc">{feature.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column — Live Interactive Routing Dashboard */}
          <div className="phn__visual">
            <div
              className={`phn__dashboard phn__dashboard--${activeFeature.theme}`}
            >
              {/* Header Badge */}
              <div
                className={`phn__dash-badge phn__dash-badge--${activeFeature.theme}`}
              >
                <span className="phn__dash-badge-dot" />
                {activeFeature.badge}
              </div>

              {/* Dynamic Interactive Flow Diagram */}
              <div className="phn__flow" key={activeFeature.id}>
                {/* Provider Badges Node */}
                <div className="phn__carrier-row">
                  {CARRIER_PROVIDERS.map((provider, idx) => (
                    <span
                      key={provider}
                      className={`phn__carrier-pill ${
                        idx === activeIndex ? 'phn__carrier-pill--active' : ''
                      }`}
                    >
                      {provider}
                    </span>
                  ))}
                </div>

                {/* Animated Signal Flow Beam */}
                <div className="phn__flow-beam" aria-hidden="true" />

                {/* Center Brain Hub Node */}
                <div className="phn__flow-center">
                  <div className="phn__flow-ring phn__flow-ring--1" />
                  <div className="phn__flow-ring phn__flow-ring--2" />
                  <div className="phn__flow-hub">
                    <RenderFeatureIcon type={activeFeature.iconType} size={22} />
                  </div>
                  <span className="phn__flow-label">Callwen Voice Brain</span>
                </div>

                {/* Animated Signal Flow Beam */}
                <div className="phn__flow-beam" aria-hidden="true" />

                {/* Phone Chip Node */}
                <div className="phn__phone-card">
                  <Phone size={14} />
                  <span>+1 (415) 555-0182</span>
                </div>
              </div>

              {/* Info Metrics Row */}
              <div className="phn__info-cards">
                {activeFeature.metrics.map((m) => (
                  <div key={m.label} className="phn__info-card">
                    <Check size={13} />
                    <span>
                      {m.label}: <strong>{m.value}</strong>
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer Banner */}
              <p className="phn__dash-footer">
                Carrier handles the call · AI handles the intelligence · You keep control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneNumbers;