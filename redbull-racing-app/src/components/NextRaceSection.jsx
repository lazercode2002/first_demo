import React, { useState, useEffect } from 'react';
import './NextRaceSection.css';

const NextRaceSection = () => {
  // Setup a dummy target date for the countdown (e.g., 5 days from now)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Fixed target date for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(14, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <section className="next-race-section">
      <div className="race-bg-container">
        <img src="/starting_lights.png" alt="Starting Lights" className="race-bg" />
        <div className="race-overlay"></div>
      </div>

      <div className="race-content reveal up">
        <div className="race-header">
          <span className="race-badge">ROUND 16</span>
          <h2 className="race-title">ITALIAN GRAND PRIX</h2>
          <p className="race-location">AUTODROMO NAZIONALE MONZA</p>
        </div>

        <div className="countdown-container reveal scale delay-200">
          <div className="time-block">
            <span className="time-number">{formatNumber(timeLeft.days)}</span>
            <span className="time-label">DAYS</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-block">
            <span className="time-number">{formatNumber(timeLeft.hours)}</span>
            <span className="time-label">HRS</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-block">
            <span className="time-number">{formatNumber(timeLeft.minutes)}</span>
            <span className="time-label">MIN</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-block">
            <span className="time-number">{formatNumber(timeLeft.seconds)}</span>
            <span className="time-label">SEC</span>
          </div>
        </div>

        <div className="race-actions reveal up delay-300">
          <button className="primary-btn pulse-btn">TICKETS &amp; HOSPITALITY</button>
          <button className="secondary-btn">RACE PREVIEW</button>
        </div>
      </div>
    </section>
  );
};

export default NextRaceSection;
