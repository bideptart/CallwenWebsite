import React from 'react';
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Globe2,
  Languages,
  MessageSquareText,
  PhoneCall,
  Sparkles,
  UserRound,
} from 'lucide-react';

const AnimatedMetric = ({ value, suffix = '', prefix = '', decimals = 0, playKey }) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    let frameId = 0;
    const duration = 800;
    const startedAt = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [playKey, value]);

  return (
    <span className="iboMetric__value">
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const DashboardMetrics = ({ featureId, metrics }) => (
  <div className="iboMetricGrid">
    {metrics.map((metric) => (
      <div key={`${featureId}-${metric.label}`} className="iboMetric">
        <span className="iboMetric__label">{metric.label}</span>
        <AnimatedMetric
          value={metric.value}
          suffix={metric.suffix}
          prefix={metric.prefix}
          decimals={metric.decimals}
          playKey={featureId}
        />
      </div>
    ))}
  </div>
);

const DashboardParticles = () => (
  <div className="iboScene__particles" aria-hidden="true">
    <span className="iboScene__particle iboScene__particle--1" />
    <span className="iboScene__particle iboScene__particle--2" />
    <span className="iboScene__particle iboScene__particle--3" />
    <span className="iboScene__particle iboScene__particle--4" />
  </div>
);

const ReceptionScene = () => (
  <div className="iboScene iboScene--reception">
    <DashboardParticles />

    <div className="iboScene__badgeRow">
      <div className="iboBadge iboBadge--orange">
        <span className="iboBadge__dot" />
        Incoming call
      </div>
      <div className="iboBadge iboBadge--soft">FAQ match found</div>
    </div>

    <div className="iboReception">
      <div className="iboCallerCard">
        <div className="iboCallerCard__header">
          <div className="iboCallerCard__avatar">
            <UserRound size={16} />
          </div>
          <div>
            <strong>Priya Shah</strong>
            <span>Billing question</span>
          </div>
        </div>

        <div className="iboWaveform">
          {Array.from({ length: 10 }, (_, index) => (
            <span
              key={`reception-${index}`}
              className={`iboWaveform__bar iboWaveform__bar--${index + 1}`}
            />
          ))}
        </div>

        <div className="iboCallerCard__meta">
          <span>Sentiment stable</span>
          <span>Queue skipped</span>
        </div>
      </div>

      <div className="iboReception__center">
        <div className="iboCore">
          <div className="iboCore__ring iboCore__ring--1" />
          <div className="iboCore__ring iboCore__ring--2" />
          <div className="iboCore__icon">
            <Bot size={22} />
          </div>
        </div>
        <div className="iboTyping">
          <span />
          <span />
          <span />
          <small>AI answering</small>
        </div>
      </div>

      <div className="iboRouteStack">
        <div className="iboRouteCard">
          <span className="iboRouteCard__label">Resolved</span>
          <strong>Payment dates explained</strong>
          <p>Knowledge base response delivered.</p>
        </div>
        <div className="iboRouteCard iboRouteCard--accent">
          <span className="iboRouteCard__label">Route ready</span>
          <strong>Escalate to finance</strong>
          <p>Transcript & context attached.</p>
        </div>
      </div>
    </div>

    <div className="iboTimeline">
      <div className="iboTimeline__item iboTimeline__item--active">
        <PhoneCall size={13} />
        <span>Picked up in 1.2s</span>
      </div>
      <div className="iboTimeline__item">
        <Sparkles size={13} />
        <span>Intent classified</span>
      </div>
      <div className="iboTimeline__item">
        <CheckCircle2 size={13} />
        <span>Escalation ready</span>
      </div>
    </div>
  </div>
);

const GrowthScene = () => (
  <div className="iboScene iboScene--growth">
    <DashboardParticles />

    <div className="iboScene__badgeRow">
      <div className="iboBadge iboBadge--blue">
        <span className="iboBadge__dot" />
        Campaign live
      </div>
      <div className="iboBadge iboBadge--soft">Lead wave B</div>
    </div>

    <div className="iboGrowth">
      <div className="iboPipeline">
        <div className="iboPipeline__card">
          <strong>Warm lead</strong>
          <span>Demo requested 6m ago</span>
        </div>
        <div className="iboPipeline__card iboPipeline__card--active">
          <strong>Callback triggered</strong>
          <span>Priority prospect in San Jose</span>
        </div>
        <div className="iboPipeline__card">
          <strong>Follow-up queued</strong>
          <span>Send recap if unanswered</span>
        </div>
      </div>

      <div className="iboGrowth__center">
        <div className="iboDialer">
          <div className="iboDialer__pulse iboDialer__pulse--1" />
          <div className="iboDialer__pulse iboDialer__pulse--2" />
          <div className="iboDialer__icon">
            <PhoneCall size={22} />
          </div>
        </div>
      </div>

      <div className="iboChartCard">
        <div className="iboChartCard__header">
          <strong>Live pipeline</strong>
          <small style={{ color: '#6c757d' }}>Today</small>
        </div>
        <div className="iboChart">
          <span className="iboChart__bar iboChart__bar--1" />
          <span className="iboChart__bar iboChart__bar--2" />
          <span className="iboChart__bar iboChart__bar--3" />
          <span className="iboChart__bar iboChart__bar--4" />
        </div>
        <div className="iboChartCard__footer">
          <div>
            <small>Reply rate</small>
            <strong>2.4x faster</strong>
          </div>
          <ArrowRight size={14} color="#0684bc" />
          <div>
            <small>Booked</small>
            <strong>8 demos</strong>
          </div>
        </div>
      </div>
    </div>

    <div className="iboStatusRail">
      <div className="iboStatusRail__item">
        <span className="iboStatusRail__dot" />
        Prospect connected
      </div>
      <div className="iboStatusRail__item">
        <span className="iboStatusRail__dot" />
        CRM updated
      </div>
      <div className="iboStatusRail__item">
        <span className="iboStatusRail__dot" />
        Next task queued
      </div>
    </div>
  </div>
);

const MultilingualScene = () => (
  <div className="iboScene iboScene--multilingual">
    <DashboardParticles />

    <div className="iboScene__badgeRow">
      <div className="iboBadge iboBadge--violet">
        <span className="iboBadge__dot" />
        Live language switch
      </div>
      <div className="iboBadge iboBadge--soft">Context retained</div>
    </div>

    <div className="iboGlobal">
      <div className="iboBubble iboBubble--left">
        <MessageSquareText size={14} />
        <div>
          <strong>Hola, necesito ayuda.</strong>
          <span>Detected: Spanish</span>
        </div>
      </div>

      <div className="iboGlobe">
        <div className="iboGlobe__ring iboGlobe__ring--1" />
        <div className="iboGlobe__ring iboGlobe__ring--2" />
        <div className="iboGlobe__core">
          <Globe2 size={22} />
        </div>
        <div className="iboGlobe__node iboGlobe__node--1">EN</div>
        <div className="iboGlobe__node iboGlobe__node--2">ES</div>
        <div className="iboGlobe__node iboGlobe__node--3">FR</div>
        <div className="iboGlobe__node iboGlobe__node--4">AR</div>
      </div>

      <div className="iboBubble iboBubble--right">
        <Languages size={14} />
        <div>
          <strong>Absolutely. I can help.</strong>
          <span>Localized in real time</span>
        </div>
      </div>
    </div>

    <div className="iboLocaleGrid">
      <div className="iboLocaleCard">
        <Globe2 size={15} />
        <div>
          <strong>North America</strong>
          <span>English, Spanish, French</span>
        </div>
      </div>
      <div className="iboLocaleCard">
        <Building2 size={15} />
        <div>
          <strong>Unified logic</strong>
          <span>One prompt across regions</span>
        </div>
      </div>
      <div className="iboLocaleCard">
        <Sparkles size={15} />
        <div>
          <strong>Brand-safe tone</strong>
          <span>Consistent brand voice</span>
        </div>
      </div>
    </div>
  </div>
);

const SCENES = {
  reception: <ReceptionScene />,
  growth: <GrowthScene />,
  multilingual: <MultilingualScene />,
};

export const InboundOutboundDashboard = ({ feature }) => (
  <>
    <div className="iboDashboard__top">
      <div className={`iboDashboard__status iboDashboard__status--${feature.theme}`}>
        <span className="iboDashboard__statusDot" />
        {feature.dashboardLabel}
      </div>
      <DashboardMetrics featureId={feature.id} metrics={feature.metrics} />
    </div>

    <div
      className={`iboDashboard__sceneWrap iboDashboard__sceneWrap--${feature.theme}`}
      key={feature.id}
    >
      {SCENES[feature.id]}
    </div>
  </>
);