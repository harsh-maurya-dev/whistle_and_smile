import React from 'react';
import './ProductCard.css';
import productImg from '../../assets/product.svg';

export interface ProductCardProps {
  title?: string;
  originalPrice?: string;
  startingPrice?: string;
  features?: string[];
  onLearnMore?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title = 'Whistle Aligners',
  originalPrice = '₹84,000',
  startingPrice = '₹47,999',
  features = [
    'Offer valid for a limited time',
    'Easy financing options'
  ],
  onLearnMore
}) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLearnMore) {
      onLearnMore();
    } else {
      alert('Redirecting to product detail page...');
    }
  };

  return (
    <div className="whistle-product-card">
      <h4 className="whistle-card-title">{title}</h4>
      
      <div className="whistle-card-pricing-block">
        <span className="whistle-price-original">{originalPrice}</span>
        <div className="whistle-price-starting">
          <span>starting at</span>
          <span className="highlight-purple">{startingPrice}</span>
        </div>
        <span className="whistle-price-taxes">inc. of all taxes</span>
      </div>

      <div className="whistle-card-checklist">
        {features.map((feature, idx) => (
          <div className="whistle-checklist-item" key={idx}>
            <div className="whistle-check-icon-wrapper">
              <svg className="whistle-check-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="whistle-card-link-wrapper">
        <a href="#" className="whistle-card-link" onClick={handleLinkClick}>
          Learn more
          <svg className="whistle-clove-caret" style={{ transform: 'rotate(-90deg)', width: '14px', height: '14px' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </a>
      </div>

      <div className="whistle-card-image-wrapper">
        <img 
          src={productImg} 
          className="whistle-card-img" 
          alt="Whistle Aligners box case with aligners" 
        />
      </div>
    </div>
  );
};

export default ProductCard;
