import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  const primaryPartners = [
    { name: 'ORACLE', type: 'Title Partner' },
    { name: 'HONDA', type: 'Power Unit Partner' },
    { name: 'BYBIT', type: 'Principal Team Partner' }
  ];

  const secondaryPartners = [
    'TAG HEUER', 'MOBIL 1', 'ESSO', 'CASTROL', 'PIRELLI', 'ROKT', 'HARD ROCK', 'AT&T'
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-header reveal up">
        <h2 className="partners-title">OFFICIAL PARTNERS</h2>
        <div className="partners-divider"></div>
      </div>

      <div className="partners-content">
        <div className="primary-partners">
          {primaryPartners.map((partner, index) => (
            <div key={index} className={`partner-card primary reveal up delay-${(index + 1) * 100}`}>
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-type">{partner.type}</p>
            </div>
          ))}
        </div>

        <div className="secondary-partners">
          {secondaryPartners.map((partner, index) => (
            <div key={index} className="partner-card secondary reveal scale">
              <span className="partner-name">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
