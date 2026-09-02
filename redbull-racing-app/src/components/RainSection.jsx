import React from 'react';
import './RainSection.css';

const RainSection = () => {
  return (
    <section className="rain-section" id="gallery">
      {/* Background Image Container */}
      <div className="rain-bg-container">
        <img 
          src="/racing_rain.png" 
          alt="Red Bull Racing in the Rain" 
          className="rain-bg-image" 
        />
        <div className="rain-overlay"></div>
      </div>

      {/* Rain animation layers */}
      <div className="rain front-row"></div>
      <div className="rain back-row"></div>

      {/* Content overlay */}
      <div className="rain-content">
        <div className="rain-text-box reveal up delay-300">
          <h2 className="rain-title">UNYIELDING</h2>
          <p className="rain-subtitle">MASTERING THE ELEMENTS</p>
        </div>
      </div>
    </section>
  );
};

export default RainSection;
