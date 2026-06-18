import React from 'react';
import './HappyCustomers.css';
import happyCustomersImg from '../../assets/happy_customers.svg';

export const HappyCustomers: React.FC = () => {
  return (
    <section className="whistle-happy-section">
      <div className="whistle-happy-container">
        {/* Title */}
        <h2 className="whistle-happy-title">Happy Smilers!</h2>

        {/* Responsive Image Wrapper with overflow scrolling */}
        <div className="whistle-happy-image-container">
          <img 
            src={happyCustomersImg} 
            alt="Customer success stories showcasing happy whistles and smiles" 
            className="whistle-happy-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
