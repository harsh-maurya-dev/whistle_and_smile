import React from 'react';
import './OurDoctor.css';
import doctorImg from '../../assets/doctor.svg';

export const OurDoctor: React.FC = () => {
  const handleGetCallback = () => {
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="whistle-doctor-section">
      <div className="whistle-doctor-container">
        {/* Doctor Image Block */}
        <div className="whistle-doctor-image-wrapper">
          <img 
            src={doctorImg} 
            alt="Professional orthodontist smiling in a modern dental clinic" 
            className="whistle-doctor-img"
          />
        </div>

        {/* Doctor Text Details Block */}
        <div className="whistle-doctor-details">
          <h2 className="whistle-doctor-title">
            We are Doctor-led, not direct-to-customers
          </h2>
          
          <p className="whistle-doctor-desc">
            We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+ clinics nationwide.
          </p>

          <button 
            onClick={handleGetCallback} 
            className="whistle-doctor-cta"
            aria-label="Scroll to booking form to get a callback"
          >
            Get a Callback
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurDoctor;
