import React from 'react';
import './RedBullSpecs.css';

const RedBullSpecs = () => {
  return (
    <section className="specs-section" id="specs">
      <div className="specs-header">
        <div className="logo-small">Red Bull Racing</div>
        <div className="team-name">RED BULL RACING FORMULA ONE TEAM</div>
        <div className="car-model">RB20</div>
      </div>

      <div className="unleash-container reveal up">
        <h1 className="unleash-text">UNLEASH</h1>
      </div>

      <div className="specs-content">
        <div className="specs-left reveal left delay-200">
          <div className="crosshair">+</div>
          <ul className="spec-list">
            <li>RB20</li>
            <li>POWER UNIT: HONDA RBPT</li>
            <li>1.6L V6 TURBO HYBRID</li>
            <li>1000+ HP</li>
            <li>350 KM/H+</li>
            <li>&lt; 798 KG</li>
            <li>ZERO COMPROMISE</li>
          </ul>
        </div>

        <div className="center-car-container reveal scale">
          <img src="/redbull_f1_car.png" alt="RB20 Top View" className="car-top-view" />
        </div>

        <div className="specs-right reveal right delay-200">
          <div className="crosshair">+</div>
          <div className="motto">
            <p>BUILT ON RELENTLESS</p>
            <p>DRIVEN BY PASSION</p>
            <p>RACING WITHOUT LIMITS</p>
          </div>
          
          <div className="season-info">
            <p>2024</p>
            <p>RB20</p>
          </div>
          
          <ul className="team-info">
            <li>CHASSIS: RB20</li>
            <li>TEAM: RED BULL RACING</li>
            <li>DRIVERS: VERSTAPPEN / PEREZ</li>
          </ul>
        </div>
      </div>

      <div className="specs-footer reveal up delay-300">
        <div className="location">
          <p>MILTON KEYNES</p>
          <p>UNITED KINGDOM</p>
        </div>
        <div className="built-to-win">
          <p className="footer-logo">Red Bull</p>
          <p>BUILT TO WIN.</p>
        </div>
        <div className="champions">
          <p>FORMULA ONE™</p>
          <p>WORLD CHAMPIONS</p>
        </div>
      </div>
    </section>
  );
};

export default RedBullSpecs;
