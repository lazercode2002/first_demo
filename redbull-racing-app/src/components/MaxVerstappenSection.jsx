import React from 'react';
import './MaxVerstappenSection.css';

const MaxVerstappenSection = () => {
  return (
    <section className="mv-section" id="team">
      <div className="mv-top-logos">
        <div className="f1-logo-container">
          <span className="f1-icon">F1</span>
          <span className="tm">™</span>
        </div>
        <div className="rb-logo-container">
          <span className="rb-text-logo">Red Bull</span>
          <span className="rb-racing-text">R A C I N G</span>
        </div>
      </div>

      <div className="mv-content">
        {/* Three Red Pillars Background */}
        <div className="pillars-container reveal up">
          <div className="pillar">
            <div className="mv-details">
              <h2>MAX<br />VERSTAPPEN</h2>
              <div className="signature-mock">Max 33</div>
            </div>
          </div>
          <div className="pillar"></div>
          <div className="pillar"></div>
        </div>

        {/* Max Verstappen Image Layer */}
        <div className="driver-image-container reveal scale delay-200">
          <img 
            src="/driver_celebrating.png" 
            alt="Max Verstappen Celebrating" 
            className="driver-image" 
          />
        </div>

        {/* F1 Car Layer overlapping driver */}
        <div className="mv-car-container reveal right delay-400">
          <img 
            src="/redbull_f1_car.png" 
            alt="F1 Car Side View" 
            className="mv-side-car" 
          />
        </div>
      </div>

      <div className="mv-footer">
        <div className="championship-years">
          <span>2021</span>
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
        </div>
        <div className="world-champ-text">
          WORLD CHAMPION
        </div>
      </div>
    </section>
  );
};

export default MaxVerstappenSection;
