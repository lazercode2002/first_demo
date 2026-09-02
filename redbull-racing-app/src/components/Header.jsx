import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // The first section is 100vh. We'll show the header once the user scrolls down by 30% of the viewport height.
      if (window.scrollY > window.innerHeight * 0.3) {
        setIsVisible(true);
        
        // Hide header after 4 seconds of no scrolling (unless hovered)
        timeoutRef.current = setTimeout(() => {
          if (!isHoveredRef.current) {
            setIsVisible(false);
          }
        }, 4000);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initially in case the page is reloaded halfway down
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header 
      className={`premium-header ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        // Resume timeout on leave if we are scrolled down
        if (window.scrollY > window.innerHeight * 0.3) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setIsVisible(false), 4000);
        }
      }}
    >
      <div className="header-content">
        <div className="header-logo">
          <span>RED BULL</span> RACING
        </div>
        
        <nav className="header-nav">
          <a href="#discover" className="nav-link">Discover</a>
          <a href="#specs" className="nav-link">RB20 Specs</a>
          <a href="#team" className="nav-link">The Team</a>
          <a href="#partners" className="nav-link">Partners</a>
        </nav>
        
        <div className="header-actions">
          <button className="primary-btn">Official Store</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
