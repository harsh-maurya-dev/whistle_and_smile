import React, { useState } from 'react';
import './Apart.css';
import whistleLogo from '../../assets/logo.svg';

interface ComparisonRowData {
  feature: string;
  whistle: React.ReactNode;
  otherBrands: React.ReactNode;
  detail: string;
}

const CheckIcon: React.FC = () => (
  <div className="whistle-apart-icon-wrapper">
    <div className="icon-circle-check">
      <svg className="icon-svg-path" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    </div>
  </div>
);

const CloseIcon: React.FC = () => (
  <div className="whistle-apart-icon-wrapper">
    <div className="icon-circle-close">
      <svg className="icon-svg-path" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </div>
  </div>
);

export const Apart: React.FC = () => {
  // Row 1 (Index 1: Clear-cut Pricing) is expanded by default to match the mockup
  const [expandedRow, setExpandedRow] = useState<number | null>(1);

  const toggleRow = (idx: number) => {
    if (expandedRow === idx) {
      setExpandedRow(null);
    } else {
      setExpandedRow(idx);
    }
  };

  const comparisonData: ComparisonRowData[] = [
    {
      feature: 'Easy to complex cases',
      whistle: 'Yes, mild to complex',
      otherBrands: <span className="other-col-text">No, only mild to moderate</span>,
      detail: 'Whistle supports a full range of orthodontic cases, from simple gaps to complex alignment corrections, under the direct supervision of highly qualified orthodontists.'
    },
    {
      feature: 'Clear-cut Pricing',
      whistle: <CheckIcon />,
      otherBrands: <CloseIcon />,
      detail: 'Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.'
    },
    {
      feature: 'Aligner Change',
      whistle: 'Every 10 days',
      otherBrands: <span className="other-col-text">Every 2 weeks</span>,
      detail: 'Whistle aligners are changed every 10 days to maintain constant gentle pressure, leading to faster, more comfortable, and highly precise teeth alignment.'
    },
    {
      feature: 'Clinical Partnership',
      whistle: <CheckIcon />,
      otherBrands: <CloseIcon />,
      detail: 'Whistle is directly partnered with Clove Dental, India\'s largest and most trusted dental clinic network, ensuring supreme clinical excellence and physical touchpoints.'
    },
    {
      feature: 'Movement Between Cities',
      whistle: <CheckIcon />,
      otherBrands: <CloseIcon />,
      detail: 'If you relocate to another city during your alignment treatment, you can walk into any of the partner Clove Dental clinics nationwide and resume care seamlessly.'
    },
    {
      feature: 'Complimentary Teeth Scaling',
      whistle: <CheckIcon />,
      otherBrands: <CloseIcon />,
      detail: 'Enjoy a free pre-treatment scaling session to clean your teeth thoroughly and prepare them for optimal aligner placement.'
    }
  ];

  return (
    <section className="whistle-apart-section">
      <div className="whistle-apart-container">
        <h2 className="whistle-apart-title">What sets Whistle apart?</h2>
        
        <div className="whistle-apart-table">
          {/* Header Row */}
          <div className="whistle-apart-row-grid whistle-apart-header-row">
            <div className="header-cell">Features</div>
            <div className="header-cell whistle-col-highlight">
              <img src={whistleLogo} className="whistle-table-brand-logo" alt="Whistle logo icon" />
            </div>
            <div className="header-cell">Other Brands</div>
          </div>

          {/* Body Rows */}
          {comparisonData.map((row, idx) => {
            const isExpanded = expandedRow === idx;
            return (
              <div 
                className={`whistle-apart-content-row-wrapper ${isExpanded ? 'active' : ''}`}
                key={idx}
              >
                {/* Standard grid row */}
                <div 
                  className="whistle-apart-row-grid whistle-apart-content-row"
                  onClick={() => toggleRow(idx)}
                >
                  <div className="cell">
                    <span>{row.feature}</span>
                    <svg className="whistle-apart-caret" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                  </div>
                  <div className="cell whistle-col-highlight">
                    {row.whistle}
                  </div>
                  <div className="cell">
                    {row.otherBrands}
                  </div>
                </div>

                {/* Expanded details row */}
                {/* {isExpanded && (
                  <div className="whistle-apart-details-panel">
                    {row.detail}
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Apart;
