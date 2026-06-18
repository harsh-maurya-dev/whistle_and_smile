import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="whistle-footer">
      <div className="whistle-footer-container">
        
        {/* Column 1: Quick Links */}
        <div className="whistle-footer-col whistle-footer-links">
          <h4 className="whistle-footer-heading">Quick Links</h4>
          <ul className="whistle-footer-list">
            <li><a href="#" className="whistle-footer-link">Home</a></li>
            <li>
              <a 
                href="#booking-form" 
                onClick={handleScrollToBooking} 
                className="whistle-footer-link highlight-scan"
              >
                Book a Free Scan
              </a>
            </li>
            <li><a href="#" className="whistle-footer-link">How it Works</a></li>
            <li><a href="#" className="whistle-footer-link">Range of Aligners</a></li>
            <li><a href="#" className="whistle-footer-link">Aligners vs Braces</a></li>
            <li><a href="#" className="whistle-footer-link">FAQs</a></li>
          </ul>
        </div>

        {/* Column 2: Get in Touch Now! */}
        <div className="whistle-footer-col whistle-footer-contact">
          <h4 className="whistle-footer-heading">Get in Touch Now!</h4>
          <ul className="whistle-footer-contact-list">
            <li>
              <a href="tel:01169328350" className="whistle-footer-contact-link">
                <svg className="whistle-footer-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                </svg>
                <span>011-6932-8350</span>
              </a>
            </li>
            <li>
              <a href="mailto:support@whistle.in" className="whistle-footer-contact-link">
                <svg className="whistle-footer-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>support@whistle.in</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow us on */}
        <div className="whistle-footer-col whistle-footer-social">
          <h4 className="whistle-footer-heading">Follow us on</h4>
          <div className="whistle-footer-social-icons">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram Handle">
              <svg className="whistle-footer-social-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook Handle">
              <svg className="whistle-footer-social-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X Brand Handle">
              <svg className="whistle-footer-social-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 4: Privacy & Terms */}
        <div className="whistle-footer-col whistle-footer-legal">
          <ul className="whistle-footer-legal-list">
            <li><a href="#" className="whistle-footer-legal-link">Privacy Policy</a></li>
            <li><a href="#" className="whistle-footer-legal-link">Terms of Service</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
