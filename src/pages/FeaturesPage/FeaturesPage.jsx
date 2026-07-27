import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './FeaturesPage.css';

export const FeaturesPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        <section className="section">
          <div className="container">
            <SectionHeading
              label="Callwen Platform Features"
              title="Everything you need to ship"
              highlight="AI Voice Agents."
              subtitle="Carrier-grade telephony, sub-300ms latency, NLP routing, multilingual support, and 100+ native CRM integrations."
            />
            {/* Teammate A will build the detailed Features Page content here */}
            <div className="page-placeholder-card">
              <h3>⚡ Features Page Workspace</h3>
              <p>Teammate developing Features page will place component code here.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
