import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, MessageSquare, PhoneCall, Share2 } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand-col">
            {/* Same Logo as Top Navbar */}
            <Link to="/" className="footer__brand">
              <div className="footer__logo-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                    stroke="#0684bc"
                  />
                  <path d="M12 13v6" stroke="#fd7a03" />
                  <path d="m9 16 3-3 3 3" stroke="#fd7a03" />
                </svg>
              </div>
              <div className="footer__logo-text">
                <span className="footer__logo-title">
                  <span className="footer__logo-blue">Callwen</span>
                  <span className="footer__logo-orange">.ai</span>
                </span>
                <span className="footer__logo-sub">BY TELOZ</span>
              </div>
            </Link>

            <p className="footer__tagline">
              Enterprise-grade AI voice agents that actually sound human. Connects to
              your existing carrier — sub-second latency, zero porting hassle.
            </p>

            {/* Customer Dashboard CTA Button */}
            <a
              href="https://dashboard.callwen.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__dash-btn"
            >
              <span>Customer dashboard</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Live Operational Status */}
            <div className="footer__status-pill">
              <span className="footer__status-dot" />
              <span>All systems operational</span>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="footer__col-title">Platform</h4>
            <div className="footer__links">
              <Link to="/features" className="footer__link">
                AI Receptionist
              </Link>
              <Link to="/features" className="footer__link">
                Outbound Engine
              </Link>
              <Link to="/features" className="footer__link">
                Multilingual AI
              </Link>
              <Link to="/pricing" className="footer__link">
                Pricing Matrix
              </Link>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="footer__col-title">Industries</h4>
            <div className="footer__links">
              <Link to="/industries" className="footer__link">
                Real Estate
              </Link>
              <Link to="/industries" className="footer__link">
                Legal & Clinics
              </Link>
              <Link to="/industries" className="footer__link">
                E-Commerce
              </Link>
              <Link to="/industries" className="footer__link">
                Logistics & Ops
              </Link>
            </div>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="footer__col-title">Company</h4>
            <div className="footer__links">
              <Link to="/" className="footer__link">
                About Callwen
              </Link>
              <a
                href="https://www.teloz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Teloz Platform
              </a>
              <Link to="/faq" className="footer__link">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="footer__col-title">Legal</h4>
            <div className="footer__links">
              <Link to="/faq" className="footer__link">
                Privacy Policy
              </Link>
              <Link to="/faq" className="footer__link">
                Terms of Service
              </Link>
              <Link to="/faq" className="footer__link">
                Acceptable Use
              </Link>
              <Link to="/faq" className="footer__link">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>© 2026 Callwen Inc. (A TELOZ Parent Company). All rights reserved.</p>

          <div className="footer__human-tag">
            <span className="footer__human-dot" />
            <span>Made for human conversations.</span>
          </div>

          <div className="footer__socials">
            <a
              href="https://www.teloz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Website"
            >
              <Globe size={16} />
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="Support"
            >
              <PhoneCall size={16} />
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="Community"
            >
              <MessageSquare size={16} />
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="Share"
            >
              <Share2 size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;