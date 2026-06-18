import React from 'react';
import './WhyUsCard.css';

export interface WhyUsCardProps {
  image: string;
  title: string;
  description: string;
}

export const WhyUsCard: React.FC<WhyUsCardProps> = ({ image, title, description }) => {
  return (
    <div className="whistle-why-card">
      <div className="whistle-why-card-img-wrapper">
        <img 
          src={image} 
          className="whistle-why-card-img" 
          alt={`Illustration of Whistle feature: ${title}`} 
        />
      </div>
      <div className="whistle-why-card-details">
        <h4 className="why-card-title">{title}</h4>
        <p className="why-card-description">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
