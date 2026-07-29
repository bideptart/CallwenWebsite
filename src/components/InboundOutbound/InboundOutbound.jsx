import React from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { INBOUND_OUTBOUND_CARDS } from './InboundOutbound.data';
import './InboundOutbound.css';

const CardVisualWidget = ({ cardId }) => {
  if (cardId === 'inbound') {
    return (
      <div className="iboMiniVisual iboWaveformMini" aria-hidden="true">
        <span className="iboWaveBar" />
        <span className="iboWaveBar" />
        <span className="iboWaveBar" />
        <span className="iboWaveBar" />
        <span className="iboWaveBar" />
      </div>
    );
  }

  if (cardId === 'outbound') {
    return (
      <div className="iboMiniVisual iboChartMini" aria-hidden="true">
        <span className="iboChartBar" />
        <span className="iboChartBar" />
        <span className="iboChartBar" />
      </div>
    );
  }

  return null;
};

export const InboundOutbound = () => {
  return (
    <section className="iboSection" id="inbound-outbound">
      <div className="iboStrip" aria-hidden="true" />

      <div className="container">
        {/* Header Section */}
        <div className="iboHeader">
          <span className="iboPillTag">
            <Sparkles size={12} />
            INBOUND & OUTBOUND
          </span>
          <h2 className="iboTitle">
            Inbound, outbound, and multilingual —{' '}
            <em className="iboTitleEm">covered.</em>
          </h2>
          <p className="iboSubtitle">
            From the first hello to the follow-up that closes the deal, Callwen handles
            your entire voice workflow from one intelligent operating layer.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="iboGrid">
          {INBOUND_OUTBOUND_CARDS.map((card) => {
            const { Icon } = card;

            return (
              <div
                key={card.id}
                className={`iboCard iboCard--${card.theme}`}
              >
                {/* Hover Shine Sweep */}
                <span className="iboCardShine" aria-hidden="true" />

                {/* Top Visual Stage */}
                <div className="iboCardTop">
                  <div className="iboIconBox">
                    <Icon size={22} />
                  </div>

                  <span className="iboCategoryTag">{card.badgeText}</span>

                  {/* Scattered Floating Badges */}
                  {card.floatingBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="iboFloatBadge"
                      style={{
                        top: badge.top,
                        right: badge.right,
                        transform: `rotate(${badge.angle})`,
                        animationDelay: `${idx * 0.8}s`,
                      }}
                    >
                      {badge.text}
                    </span>
                  ))}

                  <CardVisualWidget cardId={card.id} />
                </div>

                {/* Card Main Body */}
                <div className="iboCardBody">
                  <span className="iboGhostNumber">{card.number}</span>
                  <h3 className="iboCardTitle">{card.title}</h3>
                  <p className="iboCardDesc">{card.description}</p>

                  <ul className="iboHighlightList">
                    {card.highlights.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="iboCardFooter">
                  <div className="iboMetricBox">
                    <span className="iboMetricVal">{card.metric.value}</span>
                    <span className="iboMetricLbl">{card.metric.label}</span>
                  </div>

                  <button type="button" className="iboActionBtn">
                    <span>Explore</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                {/* Giant Faint Background Watermark Icon */}
                <div className="iboWatermark" aria-hidden="true">
                  <Icon size={180} strokeWidth={1} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InboundOutbound;