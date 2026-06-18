import React, { useState } from 'react';
import './Process.css';

interface StepData {
  number: number;
  title: string;
  desc: string;
}

export const Process: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const stepsData: StepData[] = [
    {
      number: 1,
      title: 'Scan',
      desc: 'We use an AI-powered scanner to take a detailed 3D image of your teeth.'
    },
    {
      number: 2,
      title: 'Plan',
      desc: 'Our Orthodontists design your customized smile enhancement plan using highly advanced software.'
    },
    {
      number: 3,
      title: 'Fabricate',
      desc: 'We manufacture your custom aligners leveraging 3D printing & laser technology.'
    },
    {
      number: 4,
      title: 'Wear',
      desc: 'Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey.'
    }
  ];

  return (
    <section className="whistle-process-section">
      <div className="whistle-process-container">
        <div className="whistle-process-inner">
          <h2 className="whistle-process-title">
            Get your perfect smile in<br />four simple steps
          </h2>

          {/* Left Column: Timeline Steps */}
          <div className="whistle-process-steps">
            {stepsData.map((step) => (
              <div className="whistle-step-item" key={step.number}>
                <div className="whistle-step-node">{step.number}</div>
                <div className="whistle-step-connector"></div>
                <div className="whistle-step-content">
                  <h4 className="whistle-step-title">{step.title}</h4>
                  <p className="whistle-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Custom Video Frame */}
          <div className="whistle-process-video">
            <div className="whistle-video-wrapper">
              {isPlaying ? (
                <iframe
                  className="whistle-video-iframe"
                  src="https://www.youtube.com/embed/awknSrCkfbo?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
                  title="Whistle Aligner 3D Scan Process Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div 
                  className="whistle-video-poster"
                  onClick={() => setIsPlaying(true)}
                  style={{
                    backgroundImage: `linear-gradient(rgba(30,27,41,0.3), rgba(30,27,41,0.3)), url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80')`
                  }}
                >
                  <button className="whistle-play-btn" aria-label="Play 3D Scan Workflow Video">
                    <svg className="play-triangle" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
