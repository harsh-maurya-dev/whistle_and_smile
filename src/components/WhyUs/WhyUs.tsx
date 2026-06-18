import React from 'react';
import './WhyUs.css';
import WhyUsCard from '../WhyUsCard/WhyUsCard';
import f5Img from '../../assets/f5.svg';
import f6Img from '../../assets/f6.svg';
import f7Img from '../../assets/f7.svg';
import f8Img from '../../assets/f8.svg';

interface FeatureItem {
  image: string;
  title: string;
  description: string;
}

export const WhyUs: React.FC = () => {
  const features: FeatureItem[] = [
    {
      image: f5Img,
      title: 'Custom-made & invisible',
      description: 'Tailored for your teeth and smile with a clear, discreet appearance.'
    },
    {
      image: f6Img,
      title: 'Predictable results',
      description: 'Advanced 3D modeling and AI-technology for precise planning and predictable results.'
    },
    {
      image: f7Img,
      title: 'Partnership with Clove Dental',
      description: 'Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.'
    },
    {
      image: f8Img,
      title: 'Unlimited Aligners*',
      description: 'Unlimited aligners and doctor consults at no extra cost.'
    }
  ];

  return (
    <section className="whistle-why-section">
      <div className="whistle-why-container">
        <h2 className="whistle-why-title">Why Whistle?</h2>
        
        <div className="whistle-why-grid">
          {features.map((item, index) => (
            <WhyUsCard 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
