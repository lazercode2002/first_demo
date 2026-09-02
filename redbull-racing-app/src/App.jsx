import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RedBullSpecs from './components/RedBullSpecs';
import MaxVerstappenSection from './components/MaxVerstappenSection';
import NextRaceSection from './components/NextRaceSection';
import EngineeringSection from './components/EngineeringSection';
import RainSection from './components/RainSection';
import PartnersSection from './components/PartnersSection';

const CARS = [
  { id: 1, filter: 'hue-rotate(0deg)' },
  { id: 2, filter: 'hue-rotate(90deg)' },
  { id: 3, filter: 'hue-rotate(180deg)' }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    const observeElements = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    };

    observeElements();

    // Watch for new elements added to the DOM (fixes HMR and dynamic loading)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === 0 ? CARS.length - 1 : prev - 1));
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev + 1) % CARS.length);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <div className="container" id="discover">
      {/* Background Text */}
      <h1 className="background-text">Red Bull</h1>

      {/* Main Car Image Carousel */}
      <div className={`carousel ${direction}`}>
        <button className="carousel-btn prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className="carousel-track">
          {CARS.map((car, index) => {
            let offset = index - currentIndex;
            if (offset > 1) offset -= CARS.length;
            if (offset < -1) offset += CARS.length;
            
            let isOutgoing = false;
            if (direction === 'right' && offset === 1) isOutgoing = true;
            if (direction === 'left' && offset === -1) isOutgoing = true;
            
            let className = 'car-image';
            if (offset === 0) className += ' active';
            else if (isOutgoing) className += ' outgoing';

            return (
              <img 
                key={car.id}
                src="/redbull_f1_car.png" 
                alt={`F1 Car ${index + 1}`} 
                className={className}
                style={{ 
                  filter: `${car.filter} drop-shadow(0 20px 30px rgba(0,0,0,0.3))`
                }}
              />
            );
          })}
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Tagline */}
      <div className="tagline">
        GIVES YOU WINGS
      </div>
      </div>
      <RedBullSpecs />
      <EngineeringSection />
      <RainSection />
      <MaxVerstappenSection />
      <NextRaceSection />
      <PartnersSection />
    </div>
  )
}

export default App;
