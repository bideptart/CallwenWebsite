import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import '../FeaturesPage/FeaturesPage.css';

export const IndustriesPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        <section className="section">
          <div className="container">
            <SectionHeading
              label="Industry Playbooks"
              title="Built for every enterprise"
              highlight="use case."
              subtitle="Real Estate, Customer Support, Healthcare & Clinics, E-Commerce, Legal, and Automotive playbooks."
            />
            {/* Teammate B will build the detailed Industries Page content here */}
            <div className="page-placeholder-card">
              <h3>🏢 Industries Page Workspace</h3>
              <p>Teammate developing Industries page will place component code here.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
