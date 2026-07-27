import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section Skeleton */}
      <section className="section hero-skeleton" id="hero">
        <div className="container">
          <SectionHeading
            label="AI Voice Technology"
            title="AI voice agents that"
            highlight="actually sound human."
            subtitle="Build, launch, and scale voice agents on an enterprise control panel. Sub-second latency, carrier-grade quality, production-ready in an afternoon."
          />
          <div className="hero-skeleton__actions">
            <Button href="#get-started" variant="primary" size="lg">Build your first agent</Button>
            <Button href="#features" variant="secondary" size="lg">Explore features</Button>
          </div>
        </div>
      </section>

      {/* Section Placeholders */}
      <section id="features" className="section section--alt">
        <div className="container">
          <SectionHeading title="Features" subtitle="Coming in Step 4" />
        </div>
      </section>

      <section id="industries" className="section">
        <div className="container">
          <SectionHeading title="Industries" subtitle="Coming in Step 5" />
        </div>
      </section>

      <section id="pricing" className="section section--alt">
        <div className="container">
          <SectionHeading title="Pricing" subtitle="Coming in Step 8" />
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <SectionHeading title="FAQ" subtitle="Coming in Step 10" />
        </div>
      </section>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
