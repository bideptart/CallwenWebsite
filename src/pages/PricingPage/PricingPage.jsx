import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import '../FeaturesPage/FeaturesPage.css';

export const PricingPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        <section className="section">
          <div className="container">
            <SectionHeading
              label="Transparent Pricing"
              title="Fair per-minute rates,"
              highlight="no contracts."
              subtitle="Pay only for active voice time. Scale from a single hotline to thousands of concurrent AI voice agents."
            />
            {/* Teammate C will build the detailed Pricing Page content here */}
            <div className="page-placeholder-card">
              <h3>💳 Pricing Page Workspace</h3>
              <p>Teammate developing Pricing page will place component code here.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
