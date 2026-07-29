import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import HumanExperience from '../../components/HumanExperience/HumanExperience';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import PhoneNumbers from '../../components/PhoneNumbers/PhoneNumbers';
import InboundOutbound from '../../components/InboundOutbound/InboundOutbound';
import Testimonials from '../../components/Testimonials/Testimonials';
import Pricing from '../../components/Pricing/Pricing';
import Comparison from '../../components/Comparison/Comparison';
import PreFooterCta from '../../components/PreFooterCta/PreFooterCta';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Human Experience */}
      <HumanExperience />

      {/* 4. How It Works */}
      <HowItWorks />

      {/* 5. Phone Numbers */}
      <PhoneNumbers />

      {/* 6. Inbound & Outbound */}
      <InboundOutbound />

      {/* 7. Customer Stories & Testimonials */}
      <Testimonials />

      {/* 8. Pricing */}
      <Pricing />

      {/* 9. Comparison Matrix & 3D Flip Cards */}
      <Comparison />

      {/* 10. Pre-Footer CTA / Live Demo */}
      <PreFooterCta />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;