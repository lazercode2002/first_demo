import React from 'react';
import './EngineeringSection.css';

const EngineeringSection = () => {
  return (
    <section className="engineering-section" id="engineering">
      
      {/* Blueprint Section */}
      <div className="eng-container blueprint-container">
        <div className="eng-text-overlay reveal up delay-100">
          <div className="eng-label">DESIGN &amp; DEVELOPMENT</div>
          <h2 className="eng-title">THE BLUEPRINT</h2>
          <p className="eng-desc">Aerodynamic efficiency maximized. Ground effect floor redefined. Every millimeter optimized for peak performance.</p>
        </div>
        <div className="eng-image-wrapper reveal scale delay-200">
          <img src="/blueprint_f1.png" alt="RB19 Blueprint" className="eng-image" />
        </div>
      </div>

      {/* Exploded View Section */}
      <div className="eng-container exploded-container">
        <div className="eng-text-overlay dark reveal left delay-100">
          <div className="eng-label">MECHANICAL MASTERY</div>
          <h2 className="eng-title">THE ANATOMY</h2>
          <p className="eng-desc">Thousands of precision-engineered components, dismantled. A testament to relentless innovation and passion.</p>
        </div>
        <div className="eng-image-wrapper full-width reveal right delay-300">
          <img src="/exploded_f1.png" alt="F1 Car Exploded View" className="eng-image" />
        </div>
      </div>

    </section>
  );
};

export default EngineeringSection;
