import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare, PhoneCall, Share2 } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Col */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__brand">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="16" fill="#fd7a03" />
                <path d="M22 19.5V22.5C22 23.0523 21.5523 23.5 21 23.5C12.9919 23.5 6.5 17.0081 6.5 9C6.5 8.44772 6.94772 8 7.5 8H10.5C11.0523 8 11.5 8.44772 11.5 9C11.5 10.38 11.72 11.72 12.13 12.97C12.26 13.36 12.16 13.79 11.87 14.08L10.3 15.65C12.07 19.1 14.9 21.93 18.35 23.7L19.92 22.13C20.21 21.84 20.64 21.74 21.03 21.87C22.28 22.28 23.62 22.5 25 22.5C25.5523 22.5 26 22.9477 26 23.5Z" fill="#FFFFFF" />
              </svg>
              <span>
                <span className="footer__brand-blue">Callwen</span>
                <span className="footer__brand-orange">.ai</span>
              </span>
            </Link>
            <p className="footer__tagline">
              Enterprise-grade AI voice agents that actually sound human. Built for modern customer experience.
            </p>
            <div className="footer__teloz-badge">
              <Globe size={14} />
              <span>A TELOZ Parent Product</span>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="footer__col-title">Product</h4>
            <div className="footer__links">
              <Link to="/features" className="footer__link">AI Receptionist</Link>
              <Link to="/features" className="footer__link">Voice Agents</Link>
              <Link to="/features" className="footer__link">Call Analytics</Link>
              <Link to="/features" className="footer__link">Integrations</Link>
              <Link to="/pricing" className="footer__link">Pricing</Link>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="footer__col-title">Solutions & Industries</h4>
            <div className="footer__links">
              <Link to="/industries" className="footer__link">Customer Support</Link>
              <Link to="/industries" className="footer__link">Sales & Outbound</Link>
              <Link to="/industries" className="footer__link">Healthcare & Clinics</Link>
              <Link to="/industries" className="footer__link">Real Estate</Link>
              <Link to="/industries" className="footer__link">E-Commerce</Link>
            </div>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="footer__col-title">Resources</h4>
            <div className="footer__links">
              <Link to="/features" className="footer__link">Documentation</Link>
              <Link to="/features" className="footer__link">API Reference</Link>
              <Link to="/industries" className="footer__link">Case Studies</Link>
              <Link to="/faq" className="footer__link">FAQ</Link>
            </div>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="footer__col-title">Company</h4>
            <div className="footer__links">
              <Link to="/" className="footer__link">About Callwen</Link>
              <a href="https://www.teloz.com/" target="_blank" rel="noopener noreferrer" className="footer__link">Teloz Platform</a>
              <Link to="/faq" className="footer__link">Privacy Policy</Link>
              <Link to="/faq" className="footer__link">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>© 2026 Callwen Inc. (TELOZ Parent Company). All rights reserved.</p>
          <div className="footer__socials">
            <a href="https://www.teloz.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Website"><Globe size={18} /></a>
            <a href="#" className="footer__social-link" aria-label="Support"><PhoneCall size={18} /></a>
            <a href="#" className="footer__social-link" aria-label="Community"><MessageSquare size={18} /></a>
            <a href="#" className="footer__social-link" aria-label="Share"><Share2 size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
