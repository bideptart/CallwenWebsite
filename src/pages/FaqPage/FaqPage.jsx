import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import '../FeaturesPage/FeaturesPage.css';

export const FaqPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        <section className="section">
          <div className="container">
            <SectionHeading
              label="Help Center"
              title="Frequently Asked"
              highlight="Questions."
              subtitle="Everything you need to know about Callwen AI setup, carrier porting, latency, compliance, and billing."
            />
            {/* Teammate D will build the detailed FAQ Page content here */}
            <div className="page-placeholder-card">
              <h3>❓ FAQ Page Workspace</h3>
              <p>Teammate developing FAQ page will place component code here.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
