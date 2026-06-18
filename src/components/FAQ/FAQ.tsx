import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  // Set the first and last questions as expanded by default to exactly match the mockup screenshot
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({
    0: true,
    4: true,
  });

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData: FAQItem[] = [
    {
      question: 'What are Aligners?',
      answer: 'Aligners are Orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth to make your smile more beautiful!',
    },
    {
      question: 'How do Aligners work?',
      answer: 'Aligners work by applying gentle, continuous pressure to your teeth, gradually moving them into the desired position. You receive a series of custom-made aligners, each worn for about 10 days, to slowly shift your teeth step-by-step.',
    },
    {
      question: 'Can any dentist do irregular teeth treatment?',
      answer: "While general dentists can offer basic treatments, orthodontic alignment is best managed by specialized Orthodontists. Whistle partners with Clove Dental's network of expert, certified Orthodontists to design and monitor your treatment.",
    },
    {
      question: 'Are there any restriction on eating or drinking?',
      answer: 'There are no major food restrictions because you must remove your aligners before eating or drinking anything other than water. Just make sure to brush and floss your teeth before putting the aligners back on.',
    },
    {
      question: 'How long does the treatment take?',
      answer: "Typically, it may take 6-12 months for correcting the 'social six' (front teeth). For more complex cases such as crowded teeth, the treatment time could be 12-24 months or slightly longer. The best person to give advice on this is your Orthodontist.",
    },
  ];

  return (
    <section className="whistle-faq-section">
      <div className="whistle-faq-container">
        {/* Responsive Header */}
        <h2 className="whistle-faq-title">
          <span className="whistle-faq-title-purple">Got Questions?</span>{' '}
          <span className="whistle-faq-title-dark">We’ve got answers</span>
        </h2>

        {/* Accordion Wrapper */}
        <div className="whistle-faq-accordion">
          {faqData.map((item, index) => {
            const isExpanded = !!expandedItems[index];
            return (
              <div 
                key={index} 
                className={`whistle-faq-item ${isExpanded ? 'active' : ''}`}
              >
                {/* Header row click area */}
                <button
                  onClick={() => toggleItem(index)}
                  className="whistle-faq-header"
                  aria-expanded={isExpanded}
                  aria-label={`Toggle answer for: ${item.question}`}
                >
                  <span className="whistle-faq-question">{item.question}</span>
                  <span className="whistle-faq-icon" aria-hidden="true">
                    {isExpanded ? '—' : '+'}
                  </span>
                </button>

                {/* Animated Answer Box */}
                <div 
                  className="whistle-faq-answer-wrapper"
                  style={{
                    maxHeight: isExpanded ? '500px' : '0',
                    opacity: isExpanded ? '1' : '0',
                  }}
                >
                  <div className="whistle-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
