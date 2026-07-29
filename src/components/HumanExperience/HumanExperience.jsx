import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mic, PhoneCall, Users, Zap, Volume2, Radio } from 'lucide-react';
import './HumanExperience.css';

/* ── Step data ─────────────────────────────────────────────── */
const STEPS = [
  {
    id: '01',
    total: '03',
    title: 'Sub-second responses',
    description:
      'Callwen processes voice end-to-end on a single neural engine — no speech-to-text relay, no dead air. Every reply streams back in under 300ms, so the rhythm of the call feels exactly like talking to a real person who is genuinely listening.',
    visual: 'response',
    accent: '#0684bc',
    accentLight: '#e6f4fa',
  },
  {
    id: '02',
    total: '03',
    title: 'Real interruptions, handled',
    description:
      'Customers can talk over the agent at any moment. Callwen stops, listens, and picks up naturally — the way a real human would. Barge-in detection is instant, so corrections and "wait, actually" moments never get ignored mid-sentence.',
    visual: 'interrupt',
    accent: '#fd7a03',
    accentLight: '#fff7ed',
  },
  {
    id: '03',
    total: '03',
    title: 'Unlimited simultaneous calls',
    description:
      'Scale from one call to thousands with zero queue time and no per-seat math. Every caller gets the same attentive agent — at 2am or during a product launch spike — without adding a single headcount.',
    visual: 'scale',
    accent: '#10b981',
    accentLight: '#ecfdf5',
  },
];

const WAVEFORM_HEIGHTS = [4, 12, 7, 18, 10, 22, 14, 26, 16, 20, 12, 24, 10, 18, 8];
const WAVEFORM_CALLER  = [6, 14, 9, 16, 11, 18, 9, 14, 7, 12, 16, 9, 14, 7, 11];

/* ── Visual: Sub-second response ──────────────────────────── */
const VisualResponse = () => (
  <div className="hev__scene hev__scene--response">

    {/* Glow backdrop */}
    <div className="hev__glow hev__glow--blue" />

    {/* Agent message card */}
    <div className="hev__card hev__card--agent">
      <div className="hev__card-header">
        <div className="hev__avatar hev__avatar--blue">
          <Volume2 size={16} />
        </div>
        <div className="hev__card-meta">
          <span className="hev__card-name">Aria · AI Agent</span>
          <span className="hev__card-status hev__card-status--live">● RESPONDING</span>
        </div>
      </div>
      <div className="hev__waveform">
        {WAVEFORM_HEIGHTS.map((h, i) => (
          <span key={i} className="hev__bar hev__bar--blue"
            style={{ '--bh': `${h}px`, '--bd': `${i * 0.065}s` }} />
        ))}
      </div>
    </div>

    {/* Latency chip */}
    <div className="hev__chip hev__chip--blue">
      <Zap size={12} />
      <strong>&lt;300ms</strong> latency
    </div>

    {/* Caller message card */}
    <div className="hev__card hev__card--caller">
      <div className="hev__avatar hev__avatar--warm">
        <Mic size={14} />
      </div>
      <div className="hev__waveform hev__waveform--caller">
        {WAVEFORM_CALLER.map((h, i) => (
          <span key={i} className="hev__bar hev__bar--orange"
            style={{ '--bh': `${h}px`, '--bd': `${i * 0.08}s` }} />
        ))}
      </div>
    </div>

    {/* Typing dots */}
    <div className="hev__typing-card">
      <div className="hev__typing-dots">
        <span /><span /><span />
      </div>
      <span className="hev__typing-label">Agent composing</span>
    </div>

  </div>
);

/* ── Visual: Interruptions ─────────────────────────────────── */
const VisualInterrupt = () => (
  <div className="hev__scene hev__scene--interrupt">

    <div className="hev__glow hev__glow--orange" />

    {/* Phone shell */}
    <div className="hev__phone">
      <div className="hev__phone__notch" />
      <div className="hev__phone__screen">
        <div className="hev__phone__call-row">
          <PhoneCall size={13} />
          <span>Incoming call</span>
        </div>
        <div className="hev__phone__name">Aria · AI Agent</div>
        <div className="hev__phone__waveform">
          {WAVEFORM_HEIGHTS.slice(0, 11).map((h, i) => (
            <span key={i} className="hev__bar hev__bar--orange"
              style={{ '--bh': `${h * 0.75}px`, '--bd': `${i * 0.07}s` }} />
          ))}
        </div>
        <div className="hev__phone__btns">
          <span className="hev__phone__btn hev__phone__btn--end" />
          <span className="hev__phone__btn hev__phone__btn--accept" />
        </div>
      </div>
    </div>

    {/* Interrupt badge */}
    <div className="hev__chip hev__chip--orange hev__chip--interrupt">
      <Radio size={12} />
      Barge-in detected
    </div>

    {/* Notification bubble */}
    <div className="hev__notif">
      <span className="hev__notif__dot" />
      Agent paused — listening
    </div>

  </div>
);

/* ── Visual: Scale ─────────────────────────────────────────── */
const VisualScale = () => (
  <div className="hev__scene hev__scene--scale">

    <div className="hev__glow hev__glow--green" />

    {/* Ripple rings */}
    <div className="hev__ring hev__ring--1" />
    <div className="hev__ring hev__ring--2" />
    <div className="hev__ring hev__ring--3" />

    {/* Hub center */}
    <div className="hev__hub">
      <Users size={22} />
    </div>

    {/* Spoke nodes */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <div key={i} className="hev__spoke" style={{ '--deg': `${deg}deg` }}>
        <div className="hev__spoke__line" />
        <div className="hev__spoke__node" style={{ '--nd': `${i * 0.18}s` }}>
          <PhoneCall size={11} />
        </div>
      </div>
    ))}

    {/* Scale chip */}
    <div className="hev__chip hev__chip--green hev__chip--scale">
      <span className="hev__chip__pulse" />
      ∞ concurrent calls
    </div>

  </div>
);

/* ── Component ─────────────────────────────────────────────── */
const VISUALS = {
  response: <VisualResponse />,
  interrupt: <VisualInterrupt />,
  scale: <VisualScale />,
};

const AUTO_INTERVAL = 4000;

export const HumanExperience = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState('next');
  const [tick, setTick]     = useState(0);
  const timerRef            = useRef(null);

  const goTo = (i, direction) => {
    const d = direction ?? (i > active ? 'next' : 'prev');
    setDir(d);
    setActive(i);
    setTick(t => t + 1); // restart the fill animation
  };

  const prev = () => goTo(active === 0 ? STEPS.length - 1 : active - 1, 'prev');
  const next = () => goTo((active + 1) % STEPS.length, 'next');

  /* Auto-advance — always runs, no pause on hover */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(a => {
        const next = (a + 1) % STEPS.length;
        setDir('next');
        setTick(t => t + 1);
        return next;
      });
    }, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const step = STEPS[active];

  return (
    <section
      className="he2"
      id="human-experience"
    >
      {/* Decorative strip — flush inside section, no gap */}
      <div className="he2__strip" aria-hidden="true" />

      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="he2__header">
          <span className="he2__label">
            <span className="he2__label-dot" />
            THE CALLWEN EXPERIENCE
          </span>
          <h2 className="he2__title">
            Conversations that feel{' '}
            <em className="he2__title-em">genuinely human.</em>
          </h2>
          <p className="he2__subtitle">
            Callwen runs voice end-to-end on a single neural engine — so your callers
            hear warmth, real timing, and actual presence. Not a script. Not a relay.
            A conversation.
          </p>
        </div>

        {/* ── Body ────────────────────────────────────────── */}
        <div className="he2__body">

          {/* Left visual */}
          <div className="he2__visual-wrap">
            <div className={`he2__visual he2__visual--${dir}`} key={step.visual}>
              {VISUALS[step.visual]}
            </div>
          </div>

          {/* Right content */}
          <div className="he2__content">

            {/* Progress bars — one per step, active one fills */}
            <div className="he2__progress" role="tablist">
              {STEPS.map((s, i) => (
                <button
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to step ${i + 1}`}
                  className={`he2__progress-bar ${
                    i === active  ? 'he2__progress-bar--active'  :
                    i <  active   ? 'he2__progress-bar--done'    : ''
                  }`}
                  style={i === active ? { '--bar-color': step.accent, '--duration': `${AUTO_INTERVAL}ms` } : {}}
                  /* key includes tick so animation restarts on every step change */
                  key={`${i}-${i === active ? tick : i}`}
                  onClick={() => { goTo(i); ; }}
                />
              ))}
            </div>

            {/* Step pill */}
            <div className="he2__step-pill" style={{ '--step-color': step.accent, '--step-bg': step.accentLight }}>
              <span className="he2__step-dot" />
              {step.id} / {step.total}
            </div>

            {/* Step text */}
            <div className="he2__step-body" key={active}>
              <h3 className="he2__step-title">{step.title}</h3>
              <p className="he2__step-desc">{step.description}</p>
            </div>

            {/* Nav */}
            <div className="he2__nav">
              <button
                className="he2__nav-btn"
                onClick={() => { prev(); ; }}
                aria-label="Previous step"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="he2__nav-btn he2__nav-btn--next"
                onClick={() => { next(); ; }}
                aria-label="Next step"
                style={{ '--btn-color': step.accent }}
              >
                <ChevronRight size={20} />
              </button>

              <div className="he2__dots">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    className={`he2__dot ${i === active ? 'he2__dot--active' : ''}`}
                    onClick={() => { goTo(i); ; }}
                    aria-label={`Step ${i + 1}`}
                    style={i === active ? { '--dot-color': step.accent } : {}}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanExperience;
