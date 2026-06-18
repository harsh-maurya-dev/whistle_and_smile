import React, { useState, useEffect } from 'react';
import styles from './HappySmilers.module.css';

export const HappySmilers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=5')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((result) => {
        setData(result.users || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Happy Smilers!</h2>

      {loading && (
        <div className={styles.cardRow}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="skeleton" style={{ flex: '0 0 210px', height: '295px' }}></div>
          ))}
        </div>
      )}

      {error && (
        <p className="error-msg">Could not load smilers. Please try again.</p>
      )}

      {!loading && !error && (
        <div className={styles.cardRow}>
          {data.map((user) => (
            <div key={user.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src={user.image} 
                  alt={`${user.firstName} ${user.lastName}`} 
                  className={styles.image} 
                />
                <div className={styles.overlayBanner}>
                  <p className={styles.overlayText}>HAPPY SMILER</p>
                </div>
              </div>
              <h4 className={styles.name}>{`${user.firstName} ${user.lastName}`}</h4>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HappySmilers;
