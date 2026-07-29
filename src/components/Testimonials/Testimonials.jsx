import React from 'react';
import { Quote, Sparkles, Star } from 'lucide-react';
import {
  TESTIMONIAL_METRICS,
  TESTIMONIAL_REVIEWS,
} from './Testimonials.data';
import './Testimonials.css';

export const Testimonials = () => {
  // Duplicate reviews array for seamless 360-degree infinite loop
  const marqueeReviews = [...TESTIMONIAL_REVIEWS, ...TESTIMONIAL_REVIEWS];

  return (
    <section className="tstSection" id="testimonials">
      <div className="tstStrip" aria-hidden="true" />

      <div className="container">
        {/* Header Section */}
        <div className="tstHeader">
          <span className="tstPillTag">
            <Sparkles size={11} />
            CUSTOMER STORIES
          </span>
          <h2 className="tstTitle">
            Teams shipping AI voice agents{' '}
            <em className="tstTitleEm">that actually convert.</em>
          </h2>
          <p className="tstSubtitle">
            From dental clinics to logistics operations, Callwen is answering, qualifying,
            and closing — 24/7, on the carrier you already use.
          </p>
        </div>

        {/* Key Metrics Trust Row */}
        <div className="tstMetricsRow">
          {TESTIMONIAL_METRICS.map((metric) => {
            const MetricIcon = metric.icon;

            return (
              <div key={metric.id} className="tstMetricChip">
                <MetricIcon size={16} color={metric.color} />
                <strong className="tstMetricVal" style={{ color: metric.color }}>
                  {metric.value}
                </strong>
                <span className="tstMetricLbl">{metric.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Infinite Auto-Marquee Track (Full Width) */}
      <div className="tstMarqueeWrap">
        <div className="tstMarqueeTrack">
          {marqueeReviews.map((review, index) => (
            <div key={`${review.id}-${index}`} className="tstCard">
              <div className="tstCardTop">
                <span className={`tstBadge tstBadge--${review.badgeTheme}`}>
                  {review.badge}
                </span>
                <Quote size={20} className="tstQuoteIcon" />
              </div>

              <p className="tstQuote">"{review.quote}"</p>

              <div className="tstCardFooter">
                <div className="tstStars" aria-label="5 out of 5 stars">
                  {Array.from({ length: review.rating }, (_, idx) => (
                    <Star key={idx} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <div className="tstAuthorRow">
                  <div
                    className="tstAvatar"
                    style={{ background: review.avatarBg }}
                  >
                    {review.initials}
                  </div>

                  <div className="tstAuthorMeta">
                    <strong className="tstAuthorName">{review.author}</strong>
                    <span className="tstAuthorRole">
                      {review.role} · {review.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;