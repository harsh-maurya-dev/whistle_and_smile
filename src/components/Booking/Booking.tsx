import React, { useState } from 'react';
import './Booking.css';

export const Booking: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bookingType, setBookingType] = useState<'home' | 'clinic'>('home');
  
  // Form input states
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [clinic, setClinic] = useState<string>('');
  const [date, setDate] = useState<string>('');
  
  // Form status states
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const openModal = (type: 'home' | 'clinic') => {
    setBookingType(type);
    setIsOpen(true);
    setFormStatus('idle');
    setErrorMsg('');
    // Clear inputs
    setName('');
    setPhone('');
    setCity('');
    setPincode('');
    setClinic('');
    setDate('');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 10) {
      setPhone(val);
      setErrorMsg('');
    }
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 6) {
      setPincode(val);
      setErrorMsg('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (phone.length !== 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!city.trim()) {
      setErrorMsg('Please enter your city.');
      return;
    }

    if (bookingType === 'home' && pincode.length !== 6) {
      setErrorMsg('Please enter a valid 6-digit pincode.');
      return;
    }

    if (bookingType === 'clinic' && !clinic) {
      setErrorMsg('Please select a Clove Dental clinic location.');
      return;
    }

    if (!date) {
      setErrorMsg('Please select your preferred booking date.');
      return;
    }

    setFormStatus('loading');

    // Simulate API request
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  return (
    <section className="whistle-booking-section">
      {/* Horizontal CTA Bar */}
      <div className="whistle-booking-cta-bar">
        <h3 className="whistle-booking-cta-text">Ready for your perfect smile?</h3>
        <div className="whistle-booking-cta-buttons">
          <button 
            onClick={() => openModal('home')} 
            className="whistle-booking-btn-home"
            aria-label="Book scan at home"
          >
            Book scan at Home
          </button>
          <button 
            onClick={() => openModal('clinic')} 
            className="whistle-booking-btn-clinic"
            aria-label="Book scan at clove clinic"
          >
            Book scan at Clinic
          </button>
        </div>
      </div>

      {/* Modal Popup Contact Form */}
      {isOpen && (
        <div className="whistle-modal-backdrop" onClick={closeModal}>
          <div className="whistle-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="whistle-modal-header">
              <h3 className="whistle-modal-title">
                {bookingType === 'home' ? 'Book Scan at Home' : 'Book Scan at Clinic'}
              </h3>
              <button onClick={closeModal} className="whistle-modal-close-btn" aria-label="Close modal dialog">
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="whistle-modal-content">
              {formStatus === 'success' ? (
                <div className="whistle-modal-success-screen">
                  <div className="success-icon-circle">
                    <svg className="success-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <h4 className="success-title">Booking Confirmed!</h4>
                  <p className="success-message">
                    Thank you, <strong>{name}</strong>. Your request for a {bookingType === 'home' ? 'Home Scan' : 'Clinic Scan'} on <strong>{date}</strong> has been received. Our team will contact you at <strong>+91-{phone}</strong> shortly to align details.
                  </p>
                  <button onClick={closeModal} className="success-close-btn">
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="whistle-modal-form">
                  <p className="whistle-modal-subtitle">
                    Please provide your contact details to schedule your 3D Scan.
                  </p>

                  {/* Error Notification */}
                  {errorMsg && (
                    <div className="whistle-modal-error-alert">
                      {errorMsg}
                    </div>
                  )}

                  {/* Field: Full Name */}
                  <div className="whistle-modal-floating-group">
                    <input 
                      type="text" 
                      id="modalName" 
                      className="whistle-modal-input" 
                      placeholder=" " 
                      value={name}
                      onChange={(e) => { setName(e.target.value); setErrorMsg(''); }}
                      required
                    />
                    <label htmlFor="modalName" className="whistle-modal-label">Full Name*</label>
                  </div>

                  {/* Field: Mobile Number */}
                  <div className="whistle-modal-floating-group whistle-modal-phone-group">
                    <span className="phone-prefix">+91</span>
                    <input 
                      type="tel" 
                      id="modalPhone" 
                      className="whistle-modal-input phone-field" 
                      placeholder=" " 
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                    />
                    <label htmlFor="modalPhone" className="whistle-modal-label phone-label">Mobile Number*</label>
                  </div>

                  {/* Row: City & Pincode/Clinic */}
                  <div className="whistle-modal-form-row">
                    {/* Field: City */}
                    <div className="whistle-modal-floating-group flex-1">
                      <input 
                        type="text" 
                        id="modalCity" 
                        className="whistle-modal-input" 
                        placeholder=" " 
                        value={city}
                        onChange={(e) => { setCity(e.target.value); setErrorMsg(''); }}
                        required
                      />
                      <label htmlFor="modalCity" className="whistle-modal-label">City*</label>
                    </div>

                    {/* Conditional Field: Pincode (Home) */}
                    {bookingType === 'home' && (
                      <div className="whistle-modal-floating-group flex-1">
                        <input 
                          type="text" 
                          id="modalPincode" 
                          className="whistle-modal-input" 
                          placeholder=" " 
                          value={pincode}
                          onChange={handlePincodeChange}
                          required
                        />
                        <label htmlFor="modalPincode" className="whistle-modal-label">Pincode*</label>
                      </div>
                    )}

                    {/* Conditional Field: Clinic List (Clinic) */}
                    {bookingType === 'clinic' && (
                      <div className="whistle-modal-select-group flex-1">
                        <select 
                          id="modalClinic" 
                          className="whistle-modal-select"
                          value={clinic}
                          onChange={(e) => { setClinic(e.target.value); setErrorMsg(''); }}
                          required
                        >
                          <option value="" disabled hidden>Select Clove Clinic*</option>
                          <option value="CP Delhi">Clove Dental, Connaught Place, Delhi</option>
                          <option value="Indiranagar Bengaluru">Clove Dental, Indiranagar, Bengaluru</option>
                          <option value="Andheri Mumbai">Clove Dental, Andheri West, Mumbai</option>
                          <option value="Gachibowli Hyderabad">Clove Dental, Gachibowli, Hyderabad</option>
                          <option value="Adyar Chennai">Clove Dental, Adyar, Chennai</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Field: Preferred Date */}
                  <div className="whistle-modal-floating-group">
                    <input 
                      type="date" 
                      id="modalDate" 
                      className="whistle-modal-input date-field" 
                      placeholder=" " 
                      value={date}
                      min={new Date().toISOString().split('T')[0]} // Block past dates
                      onChange={(e) => { setDate(e.target.value); setErrorMsg(''); }}
                      required
                    />
                    <label htmlFor="modalDate" className="whistle-modal-label date-label">Preferred Date*</label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="whistle-modal-submit-btn"
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <svg className="modal-spinner" fill="none" viewBox="0 0 24 24">
                          <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Scheduling...
                      </>
                    ) : 'Confirm Schedule'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;
