import React from 'react';
import './SkipToPortfolio.css';

const SkipToPortfolio = () => {
  const handleSkipToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      className="skip-to-portfolio"
      onClick={handleSkipToPortfolio}
      aria-label="Skip to portfolio section"
    >
      Skip to Portfolio
    </button>
  );
};

export default SkipToPortfolio; 