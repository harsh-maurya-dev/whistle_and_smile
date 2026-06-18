import React from 'react';
import './ProductDetails.css';
import ProductCard from '../ProductCard/ProductCard';

export const ProductDetails: React.FC = () => {
  return (
    <section className="whistle-details-section">
      <div className="whistle-details-inner">
        <h2 className="whistle-details-title">
          Dream smiles<br />achieved secretly
        </h2>
        
        <p className="whistle-details-para1">
          Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material. With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove
        </p>

        <p className="whistle-details-para2">
          The pricing is different for every case. Cases with higher complexity requiring more aligners and additional time and effort from our dentists.
        </p>

        <div className="whistle-details-card-box">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
