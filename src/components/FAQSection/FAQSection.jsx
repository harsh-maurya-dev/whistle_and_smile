import React, { useState, useEffect } from 'react';
import styles from './FAQSection.module.css';

export const FAQSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((result) => {
        setData(result || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if clicked again
    } else {
      setActiveIndex(index); // Open clicked index
    }
  };

  const capitalizeFirstLetter = (text) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.titleDark}>Got Questions?</span>{' '}
        <span className={styles.titlePurple}>We've got answers</span>
      </h2>

      {loading && (
        <div className={styles.skeletonContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="skeleton" style={{ height: '60px', borderRadius: '8px' }}></div>
          ))}
        </div>
      )}

      {error && (
        <p className="error-msg">Failed to load FAQs. Please try again.</p>
      )}

      {!loading && !error && (
        <div className={styles.accordion}>
          {data.map((post, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={post.id} 
                className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={styles.headerBtn}
                  aria-expanded={isOpen}
                  aria-label={`Toggle answer for: ${post.title}`}
                >
                  <h3 className={styles.question}>
                    {capitalizeFirstLetter(post.title)}
                  </h3>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div 
                  className={styles.answerWrapper}
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    opacity: isOpen ? '1' : '0',
                  }}
                >
                  <div className={styles.answer}>
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default FAQSection;
