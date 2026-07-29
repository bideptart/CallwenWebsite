import React from 'react';
import { ArrowRight, Sparkles, Phone, TrendingUp, Clock } from 'lucide-react';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';
import './HeroSection.css';

/* ─── Static data — easy to update without touching JSX ─── */
const STATS = [
  { icon: <Phone size={14} />, value: '<300ms', label: 'Response latency' },
  { icon: <TrendingUp size={14} />, value: '99.9%', label: 'Uptime SLA' },
  { icon: <Clock size={14} />, value: '24 / 7', label: 'Always on' },
];

const WAVEFORM_BARS = [3, 8, 14, 10, 18, 12, 20, 15, 9, 22, 16, 11, 19, 13, 7];

export const HeroSection = () => {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="container hero__container">

        {/* ── Left Column ─────────────────────────────────── */}
        <div className="hero__content">
          {/* Top badge */}
          <div className="hero__badge-row">
            <Badge variant="accent" icon={<Sparkles size={12} />}>
              Powered by TELOZ
            </Badge>
            <span className="hero__badge-live">
              <span className="hero__live-dot" aria-hidden="true" />
              Live calls active
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero__headline">
            AI voice agents that{' '}
            <span className="hero__headline-highlight">
              close deals while you sleep.
            </span>
          </h1>

          {/* Description */}
          <p className="hero__description">
            Callwen deploys enterprise-grade AI voice agents that handle inbound
            and outbound calls — with natural conversation, real interruptions,
            and sub-second response times. Production-ready in an afternoon.
          </p>

          {/* CTA row */}
          <div className="hero__actions">
            <Button
              href="#get-started"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Start for free
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>

          {/* Stats row */}
          <div className="hero__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-icon" aria-hidden="true">
                  {stat.icon}
                </span>
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column — AI Dashboard Mockup ──────────── */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__mockup">

            {/* Mockup header bar */}
            <div className="mockup__header">
              <div className="mockup__header-dots">
                <span className="mockup__dot mockup__dot--red" />
                <span className="mockup__dot mockup__dot--yellow" />
                <span className="mockup__dot mockup__dot--green" />
              </div>
              <span className="mockup__header-label">AGENT_SESSION · LIVE</span>
              <span className="mockup__header-version">v1</span>
            </div>

            {/* Agent identity row */}
            <div className="mockup__agent-row">
              <div className="mockup__agent-avatar">
                <Phone size={16} />
              </div>
              <div className="mockup__agent-info">
                <span className="mockup__agent-name">Aria · Sales Agent</span>
                <span className="mockup__agent-meta">EN-US · NEURAL-VOICE</span>
              </div>
              <span className="mockup__on-call-badge">● ON CALL</span>
            </div>

            {/* Status strip */}
            <div className="mockup__status-strip">
              <span className="mockup__status-dot" />
              CRM updated
            </div>

            {/* Waveform visualizer */}
            <div className="mockup__waveform" role="presentation">
              {WAVEFORM_BARS.map((height, i) => (
                <span
                  key={i}
                  className="mockup__waveform-bar"
                  style={{
                    '--bar-height': `${height}px`,
                    '--bar-delay': `${i * 0.07}s`,
                  }}
                />
              ))}
            </div>

            {/* Caller bubble */}
            <div className="mockup__bubble mockup__bubble--caller">
              <span className="mockup__bubble-meta">CALLER · 00:14</span>
              <p className="mockup__bubble-text">
                "Hi, I saw your listing on Maple Street — is it still available?"
              </p>
            </div>

            {/* Agent bubble — with typing animation */}
            <div className="mockup__bubble mockup__bubble--agent">
              <span className="mockup__bubble-meta">ARIA · 00:15 · RESPONDING</span>
              <p className="mockup__bubble-text">
                "Of course — it's a 4-bed colonial. Would you like to schedule a
                viewing this week?"
                <span className="mockup__typing-dots" aria-label="agent typing">
                  <span />
                  <span />
                  <span />
                </span>
              </p>
            </div>

            {/* Bottom stats row */}
            <div className="mockup__stats-row">
              <div className="mockup__stat-cell">
                <span className="mockup__stat-label">TICKET</span>
                <span className="mockup__stat-value mockup__stat-value--blue">
                  #CW-4821
                </span>
              </div>
              <div className="mockup__stat-cell">
                <span className="mockup__stat-label">SENTIMENT</span>
                <span className="mockup__stat-value mockup__stat-value--green">
                  Positive
                </span>
              </div>
              <div className="mockup__stat-cell">
                <span className="mockup__stat-label">INTENT</span>
                <span className="mockup__stat-value">Book showing</span>
              </div>
            </div>

          </div>

          {/* Floating accent cards */}
          <div className="hero__float-card hero__float-card--tl">
            <TrendingUp size={14} />
            <span>+38% conversion</span>
          </div>
          <div className="hero__float-card hero__float-card--br">
            <span className="hero__float-card-dot" />
            <span>Calendar booked</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
