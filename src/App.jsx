import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import IndustriesPage from './pages/IndustriesPage/IndustriesPage';
import PricingPage from './pages/PricingPage/PricingPage';
import FaqPage from './pages/FaqPage/FaqPage';

import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🏠 Homepage — Developed by Internship Lead */}
        <Route path="/" element={<HomePage />} />

        {/* ⚡ Separate Page Routes — Assigned to Team Members */}
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FaqPage />} />

        {/* Fallback route back to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
