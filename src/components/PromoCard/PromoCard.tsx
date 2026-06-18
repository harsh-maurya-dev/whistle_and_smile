import React from 'react';
import './PromoCard.css';
import cloveLogo from '../../assets/clove.svg';

export const PromoCard: React.FC = () => {
  const benefits = [
    { text: 'Our inaugural launch benefit', bold: '' },
    { text: 'Free teeth scan', bold: 'worth ₹500' },
    { text: 'Free orthodontic consultation', bold: 'worth ₹1500' }
  ];

  // We duplicate the array to ensure a seamless looping marquee track
  const duplicatedBenefits = [...benefits, ...benefits, ...benefits, ...benefits];

  return (
    <>
      <section className="whistle-promo-section">
        <div className="whistle-clove-card-wrapper">
          <div className="whistle-clove-card">
            <h3 className="whistle-clove-text">
              Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.
            </h3>
            <div className="whistle-clove-aside">
              <img src={cloveLogo} className="whistle-clove-logo" alt="Clove Dental Partner Logo" />
              <a 
                href="#" 
                className="whistle-clove-link" 
                onClick={(e) => {
                  e.preventDefault();
                  alert("Redirecting to Clove Clinic Locator...");
                }}
              >
                Find Clinic
                <svg className="whistle-clove-caret" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Marquee Bar */}
      <div className="whistle-marquee-bar">
        <div className="whistle-marquee-track">
          {duplicatedBenefits.map((benefit, idx) => (
            <React.Fragment key={idx}>
              <div className="whistle-marquee-item">
                <span>{benefit.text}</span>
                {benefit.bold && <span className="highlight-bold">{benefit.bold}</span>}
              </div>
              {idx !== duplicatedBenefits.length - 1 && <span className="whistle-marquee-divider"></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default PromoCard;
