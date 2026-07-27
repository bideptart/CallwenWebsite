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
        {/* Brand Logo - Teloz Inspired Dual Color (Blue #0684bc + Orange #fd7a03) */}
        <Link to="/" className="navbar__brand">
          <svg className="navbar__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 24.5C7.23858 24.5 5 22.2614 5 19.5C5 17.0645 6.74113 15.0381 9.07223 14.5959C9.02454 14.2343 9 13.8698 9 13.5C9 9.35786 12.3579 6 16.5 6C19.988 6 22.9159 8.38466 23.7533 11.6247C24.464 11.2227 25.285 11 26.1667 11C28.836 11 31 13.164 31 15.8333C31 16.4804 30.8727 17.0978 30.6416 17.6623C31.4643 18.5085 32 19.6644 32 20.9444C32 23.4604 29.9604 25.5 27.4444 25.5H10"
              stroke="#0684bc"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 24.5C14 20.9101 16.9101 18 20.5 18C23.0039 18 25.1633 19.4146 26.2307 21.4828M26.5 24.5C26.5 24.5 26.5 23.5 26.5 22"
              stroke="#fd7a03"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="26.5" cy="22" r="1.5" fill="#0684bc" />
          </svg>
          <span className="navbar__brand-text">
            <span className="navbar__brand-blue">Callwen</span>
            <span className="navbar__brand-orange">.ai</span>
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
