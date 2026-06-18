import React, { useState, useEffect } from 'react';
import styles from './ResultsSection.module.css';

export const ResultsSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=8')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((result) => {
        setData(result.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getFirstTwoWords = (text) => {
    if (!text) return '';
    const words = text.split(/\s+/);
    return words.slice(0, 2).join(' ');
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Results You'll Love</h2>

      {loading && (
        <div className={styles.cardRow}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="skeleton" style={{ flex: '0 0 260px', height: '356px' }}></div>
          ))}
        </div>
      )}

      {error && (
        <p className="error-msg">Unable to load results. Please try again.</p>
      )}

      {!loading && !error && (
        <div className={styles.cardRow}>
          {data.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className={styles.image} 
                />
              </div>
              <h4 className={styles.label}>{getFirstTwoWords(product.title)}</h4>
              <p className={styles.subLabel}>Treated with Whistle</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResultsSection;
