import React from 'react';
import {
  ArrowRight,
  Calendar,
  PhoneCall,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react';
import { CTA_VALUE_PROPS } from './PreFooterCta.data';
import './PreFooterCta.css';

export const PreFooterCta = () => {
  const [isCalling, setIsCalling] = React.useState(false);

  return (
    <section className="pfcSection" id="live-demo">
      <div className="container">
        <div className="pfcContainer">
          {/* Top Badge Tag */}
          <span className="pfcPillTag">
            <Sparkles size={11} />
            LIVE DEMO · NO SIGNUP REQUIRED
          </span>

          {/* Header Content */}
          <div className="pfcContent">
            <h2 className="pfcTitle">
              Hear it before <em className="pfcTitleEm">you build it.</em>
            </h2>
            <p className="pfcSubtitle">
              Talk to a live Callwen AI agent right now, explore our transparent
              pricing, or schedule a 15-minute walkthrough.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pfcActions">
            <button
              type="button"
              className="pfcPrimaryBtn"
              onClick={() => setIsCalling(true)}
            >
              <PhoneCall size={18} />
              <span>Talk to AI Agent</span>
            </button>

            <button
              type="button"
              className="pfcSecondaryBtn"
              onClick={() =>
                window.open('https://calendly.com', '_blank', 'noopener,noreferrer')
              }
            >
              <Calendar size={16} />
              <span>Schedule a meeting</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Value Props Row */}
          <div className="pfcPropsRow">
            {CTA_VALUE_PROPS.map((prop, idx) => (
              <div key={idx} className="pfcPropItem">
                <span className="pfcDot" />
                <span>{prop}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Audio Call Modal Simulator */}
      {isCalling && (
        <div className="pfcModalOverlay" onClick={() => setIsCalling(false)}>
          <div className="pfcModalCard" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="pfcModalClose"
              onClick={() => setIsCalling(false)}
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div className="pfcCallAura">
              <Volume2 size={32} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <strong style={{ fontSize: '18px', color: '#1e293b' }}>
                Connecting to Callwen AI Agent...
              </strong>
              <p style={{ margin: 0, fontSize: '13px', color: '#6c757d' }}>
                Sub-second audio stream initializing. Please ensure your microphone is enabled.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PreFooterCta;