import React, { useState } from 'react';

const CARS = [
  { id: 1, filter: 'hue-rotate(0deg)' },
  { id: 2, filter: 'hue-rotate(90deg)' },
  { id: 3, filter: 'hue-rotate(180deg)' }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CARS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CARS.length - 1 : prev - 1));
  };

  return (
    <div className="container">
      {/* Background Text */}
      <h1 className="background-text">Red Bull</h1>

      {/* Main Car Image Carousel */}
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
        
        <div className="carousel-track">
          {CARS.map((car, index) => {
            let offset = index - currentIndex;
            
            return (
              <img 
                key={car.id}
                src="/redbull_f1_car.png" 
                alt={`F1 Car ${index + 1}`} 
                className={`car-image ${offset === 0 ? 'active' : ''}`}
                style={{ 
                  '--offset': `${offset * 100}vw`,
                  filter: `${car.filter} drop-shadow(0 20px 30px rgba(0,0,0,0.3))`
                }}
              />
            );
          })}
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Tagline */}
      <div className="tagline">
        GIVES YOU WINGS
      </div>
    </div>
  )
}

export default App;
