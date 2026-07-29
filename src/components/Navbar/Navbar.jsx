import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../Button/Button';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', path: '/features' },
    { label: 'Industries', path: '/industries' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'FAQ', path: '/faq' }
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-wrapper--scrolled' : ''}`}>
      <div className="container navbar">
        {/* Brand Logo — Cloud icon + Callwen.ai + BY TELOZ */}
        <Link to="/" className="navbar__brand">
          {/* Cloud with upward arrow — Callwen icon */}
          <svg className="navbar__logo-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Cloud body */}
            <path
              d="M12 30C8.13 30 5 26.87 5 23C5 19.48 7.55 16.56 10.93 16.07C10.98 15.72 11 15.36 11 15C11 10.03 15.03 6 20 6C24.21 6 27.77 8.82 28.74 12.7C29.46 12.25 30.31 12 31.22 12C34.42 12 37 14.58 37 17.78C37 18.49 36.87 19.17 36.62 19.8C37.99 20.91 38.89 22.58 38.89 24.44C38.89 27.76 36.2 30.44 32.89 30.44"
              stroke="#0684bc"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Upload/call arrow */}
            <path
              d="M22 38V24M22 24L17 29M22 24L27 29"
              stroke="#fd7a03"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Text block: "Callwen.ai" on top, "BY TELOZ" below */}
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">
              <span className="navbar__brand-blue">Callwen</span>
              <span className="navbar__brand-orange">.ai</span>
            </span>
            <span className="navbar__brand-sub">BY TELOZ</span>
          </span>
        </Link>

        {/* Center Nav Pill (Router Links) */}
        <nav className="navbar__center">
          <div className="navbar__nav-pill">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Action Buttons */}
        <div className="navbar__actions">
          <Link to="/signin" className="navbar__sign-in">
            Sign in
          </Link>
          <Button href="/#get-started" variant="primary" size="md" icon={<ArrowRight size={16} />}>
            Get started
          </Button>
        </div>

        {/* Mobile Toggle Hamburger */}
        <button
          className={`navbar__toggle ${isMobileOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        {/* Mobile Backdrop */}
        <div
          className={`navbar__mobile-backdrop ${isMobileOpen ? 'navbar__mobile-backdrop--open' : ''}`}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Mobile Menu Drawer */}
        <div className={`navbar__mobile-drawer ${isMobileOpen ? 'navbar__mobile-drawer--open' : ''}`}>
          <nav className="navbar__mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="navbar__mobile-link"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="navbar__mobile-actions">
            <Link to="/signin" className="navbar__sign-in" style={{ textAlign: 'center' }}>
              Sign in
            </Link>
            <Button href="/#get-started" variant="primary" size="md" icon={<ArrowRight size={16} />}>
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
