import React, { useState } from 'react';
import './ScanForm.css';

export const ScanForm: React.FC = () => {
  const [hasGaps, setHasGaps] = useState<string>('yes');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(true);
  
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrorMsg('');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 10) {
      setPhone(val);
      setErrorMsg('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (phone.length !== 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!consent) {
      setErrorMsg('Please accept the consent checkbox to continue.');
      return;
    }

    // Trigger loading state
    setFormStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setSuccessMsg(`Booking Successful! Thank you, ${name}. We will contact you at +91-${phone} shortly.`);
      // Reset form fields
      setName('');
      setPhone('');
    }, 1200);
  };

  return (
    <section id="booking-form" className="whistle-form-section">
      <div className="whistle-form-container">
        <h2 className="whistle-form-question">Do you have Teeth Gaps or Crooked Teeth?</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Custom radio buttons */}
          <div className="whistle-radio-group">
            <label className="whistle-radio-label">
              <input
                type="radio"
                name="hasGaps"
                value="yes"
                className="whistle-radio-input"
                checked={hasGaps === 'yes'}
                onChange={() => setHasGaps('yes')}
              />
              <span className="whistle-radio-custom"></span>
              Yes
            </label>
            <label className="whistle-radio-label">
              <input
                type="radio"
                name="hasGaps"
                value="no"
                className="whistle-radio-input"
                checked={hasGaps === 'no'}
                onChange={() => setHasGaps('no')}
              />
              <span className="whistle-radio-custom"></span>
              No
            </label>
          </div>

          {/* Feedback states */}
          {errorMsg && (
            <div className="whistle-alert-success" style={{ backgroundColor: '#fef2f2', borderColor: '#fca5a5', color: '#991b1b' }}>
              {errorMsg}
            </div>
          )}
          
          {successMsg && (
            <div className="whistle-alert-success">
              {successMsg}
            </div>
          )}

          {/* Outline responsive inputs row */}
          <div className="whistle-form-row">
            {/* Full Name input */}
            <div className="whistle-input-container">
              <div className="whistle-floating-label-group">
                <input
                  type="text"
                  id="fullName"
                  className="whistle-input-field"
                  placeholder=" "
                  value={name}
                  onChange={handleNameChange}
                  required
                  autoComplete="name"
                />
                <label htmlFor="fullName" className="whistle-floating-label">Full Name*</label>
              </div>
            </div>

            {/* Mobile number input */}
            <div className="whistle-phone-container">
              <div className="whistle-floating-label-group whistle-phone-input-wrapper">
                <span className="whistle-phone-prefix">+91</span>
                <input
                  type="tel"
                  id="mobileNumber"
                  className="whistle-input-field whistle-phone-field"
                  placeholder=" "
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  autoComplete="tel-national"
                />
                <label htmlFor="mobileNumber" className="whistle-floating-label" style={{ left: '44px' }}>
                  Mobile number*
                </label>
              </div>
            </div>

            {/* Consent checkbox for desktop (part of flow, in mobile ordered first) */}
            <div className="whistle-consent-wrapper">
              <label className="whistle-consent-label">
                <input
                  type="checkbox"
                  className="whistle-checkbox-input"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span className="whistle-checkbox-custom"></span>
                I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
              </label>
            </div>

            {/* Book Button */}
            <div className="whistle-button-container">
              <button
                type="submit"
                className="whistle-submit-btn"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? (
                  <>
                    <svg className="animate-spin" style={{ animation: 'spin 1s linear infinite', width: '20px', height: '20px', marginRight: '8px' }} fill="none" viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Booking...
                  </>
                ) : 'Book a Free Scan'}
              </button>
            </div>
          </div>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
};

export default ScanForm;
