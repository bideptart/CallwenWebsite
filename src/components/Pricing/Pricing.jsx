import React from 'react';
import { ArrowRight, Check, Clock, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from './Pricing.data';
import './Pricing.css';

export const Pricing = () => {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <section className="prcSection" id="pricing">
      <div className="prcStrip" aria-hidden="true" />

      <div className="container">
        {/* Header Section */}
        <div className="prcHeader">
          <span className="prcPillTag">
            <Sparkles size={11} />
            PRICING
          </span>
          <h2 className="prcTitle">
            Fair pricing.{' '}
            <em className="prcTitleEm">Pay only for what you talk.</em>
          </h2>
          <p className="prcSubtitle">
            Voice from $0.10 per minute. Top up credit, unlock concurrent AI agents, and
            scale from a single line to a full call center — no contracts, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="prcToggleWrap">
            <div className="prcTogglePill">
              <button
                type="button"
                className={`prcToggleBtn ${!isYearly ? 'prcToggleBtn--active' : ''}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`prcToggleBtn ${isYearly ? 'prcToggleBtn--active' : ''}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
            <span className="prcSaveTag">Save 20%</span>
          </div>

          {/* Per Second Billing Sub-Pill */}
          <div className="prcGuaranteePill">
            <Clock size={14} />
            <span>Per-second billing — pay only for the exact seconds you use.</span>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="prcGrid">
          {PRICING_PLANS.map((plan) => {
            const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`prcCard ${plan.isPopular ? 'prcCard--popular' : ''}`}
              >
                {/* Popular Tag */}
                {plan.badge && (
                  <span className="prcPopularBadge">{plan.badge}</span>
                )}

                {/* Card Top & Price */}
                <div className="prcCardHeader">
                  <h3 className="prcPlanName">{plan.name}</h3>
                  <p className="prcPlanDesc">{plan.subtitle}</p>

                  <div className="prcPriceBox">
                    <span className="prcPrice">${displayPrice}</span>
                    <span className="prcPeriod">/mo</span>
                  </div>

                  <span className="prcSubRate">
                    {plan.includedMins} · {plan.effectiveRate} · {plan.agentsCount}
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="prcFeatureList">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="prcFeatureItem">
                      <Check size={15} className="prcCheckIcon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  type="button"
                  className={`prcCtaBtn prcCtaBtn--${plan.ctaTheme}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="prcFooterNote">
          All plans include real-time transcripts, call recording, analytics, and
          unlimited test calls in the playground.
        </p>
      </div>
    </section>
  );
};

export default Pricing;