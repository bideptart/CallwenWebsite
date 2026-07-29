import React from 'react';
import { Wand2, Link2, Rocket, Check } from 'lucide-react';
import './HowItWorks.css';

const STEPS = [
  {
    number: '01',
    title: 'Design your agent',
    description:
      'Pick a voice, write the prompt, set guardrails. Describe the agent in plain English and ship it — no model training, no code.',
    icon: <Wand2 size={28} />,
    features: [
      'System prompt + personas',
      'Guardrails and conversation flow',
      'Plain-English agent definition',
    ],
    gradient: 'linear-gradient(135deg, #fd7a03 0%, #fc9507 100%)',
    glowColor: 'rgba(253,122,3,0.25)',
  },
  {
    number: '02',
    title: 'Connect your knowledge',
    description:
      'Point the agent at your knowledge base, FAQs, or product docs. It answers from your source of truth, not a generic model.',
    icon: <Link2 size={28} />,
    features: [
      'RAG over your knowledge base',
      'Live document sync',
      'Real-time data access',
    ],
    gradient: 'linear-gradient(135deg, #0684bc 0%, #0a9ed8 100%)',
    glowColor: 'rgba(6,132,188,0.25)',
  },
  {
    number: '03',
    title: 'Launch & scale',
    description:
      'Plug in your phone number, route inbound or outbound, and go live. Scale from one call to thousands without a queue.',
    icon: <Rocket size={28} />,
    features: [
      'Phone number routing (inbound + outbound)',
      'Real-time latency tracking',
      'Zero-downtime scaling',
    ],
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    glowColor: 'rgba(16,185,129,0.25)',
  },
];

export const HowItWorks = () => {
  return (
    <section className="hiw" id="how-it-works">
      {/* Top gradient strip */}
      <div className="hiw__strip" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className="hiw__header">
          <span className="hiw__label">
            <span className="hiw__label-dot" />
            HOW IT WORKS
          </span>
          <h2 className="hiw__title">
            From idea to live agent in{' '}
            <em className="hiw__title-em">three steps.</em>
          </h2>
          <p className="hiw__subtitle">
            No infra to spin up, no models to host. Design, connect, and launch —
            your first agent is taking calls before lunch.
          </p>
        </div>

        {/* Steps grid */}
        <div className="hiw__grid">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="hiw__card"
              style={{
                '--card-gradient': step.gradient,
                '--card-glow': step.glowColor,
                '--card-delay': `${index * 0.15}s`,
              }}
            >
              {/* Floating number badge */}
              <div className="hiw__card-number">{step.number}</div>

              {/* Icon with glow */}
              <div className="hiw__card-icon">
                <div className="hiw__card-icon-glow" />
                {step.icon}
              </div>

              {/* Content */}
              <div className="hiw__card-content">
                <h3 className="hiw__card-title">{step.title}</h3>
                <p className="hiw__card-desc">{step.description}</p>

                {/* Features list */}
                <ul className="hiw__features">
                  {step.features.map((feature, i) => (
                    <li key={i} className="hiw__feature">
                      <span className="hiw__feature-check">
                        <Check size={14} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative accent line */}
              <div className="hiw__card-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
