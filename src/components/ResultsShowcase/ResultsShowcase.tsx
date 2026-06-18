import React from 'react';
import './ResultsShowcase.css';
import f1Img from '../../assets/f1.svg';
import f2Img from '../../assets/f2.svg';
import f3Img from '../../assets/f3.svg';
import f4Img from '../../assets/f4.svg';

interface ResultItem {
  image: string;
  concern: string;
  duration: string;
}

export const ResultsShowcase: React.FC = () => {
  const resultsData: ResultItem[] = [
    {
      image: f1Img,
      concern: 'Gaps',
      duration: '8 months'
    },
    {
      image: f2Img,
      concern: 'Crooked Teeth',
      duration: '8 months'
    },
    {
      image: f3Img,
      concern: 'Open Bite',
      duration: '8 months'
    },
    {
      image: f4Img,
      concern: 'Protruding Teeth',
      duration: '8 months'
    }
  ];

  return (
    <section className="whistle-results-section">
      <div className="whistle-results-container">
        <h2 className="whistle-results-title">Results You'll Love</h2>
        
        <div className="whistle-results-grid">
          {resultsData.map((item, index) => (
            <div className="whistle-result-card" key={index}>
              <div className="whistle-result-img-wrapper">
                <img 
                  src={item.image} 
                  className="whistle-result-img" 
                  alt={`Before and After treatment for ${item.concern}`} 
                />
              </div>
              <div className="whistle-result-details">
                <div className="whistle-result-labels">
                  <span>Before</span>
                  <span>After</span>
                </div>
                <div className="whistle-result-row">
                  <span className="row-label">Concern</span>
                  <span className="row-value">{item.concern}</span>
                </div>
                <div className="whistle-result-row">
                  <span className="row-label">Treatment Duration</span>
                  <span className="row-value">{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
