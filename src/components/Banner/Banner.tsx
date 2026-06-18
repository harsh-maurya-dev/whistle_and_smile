import React from 'react';
import './Banner.css';
import ladyImg from '../../assets/lady.svg';

export const Banner: React.FC = () => {
  return (
    <>
      {/* Navbar / Header */}
      <header className="whistle-header">
        <div className="whistle-header-inner">
          <div className="whistle-logo-group">
            <span className="whistle-logo-text">whistle</span>
            <span className="whistle-logo-subtext">and smile</span>
          </div>
          <button 
            className="whistle-call-btn" 
            aria-label="Call Customer Support"
            onClick={() => window.open('tel:+919999999999')}
          >
            <svg className="whistle-call-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM20 9h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Offer Promo Bar */}
      <div className="whistle-offer-bar">
        Starting at <span className="old-price">Rs 69,999</span> <span className="new-price">Rs 47,999</span>. Hurry! Offer ends soon.
      </div>

      {/* Hero Banner Section */}
      <section className="whistle-hero">
        <div className="whistle-hero-inner">
          <div className="whistle-hero-content">
            <h1 className="whistle-hero-title">
              Invisible Aligners for a dream smile
            </h1>
            <p className="whistle-hero-subtitle">
              Book a Scan and avail a free <br />
              Orthodontist Consult <span className="highlight-purple">worth ₹1500</span>
            </p>
          </div>
          <div className="whistle-hero-image-container">
            <img 
              src={ladyImg} 
              className="whistle-hero-img" 
              alt="Smiling woman showcasing invisible aligners" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
