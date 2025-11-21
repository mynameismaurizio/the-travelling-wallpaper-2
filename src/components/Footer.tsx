import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Made with ❤️ for travelers
        </p>
        <div className="footer-links">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="footer-separator">•</span>
          <a 
            href="#" 
            className="footer-link"
          >
            About
          </a>
          <span className="footer-separator">•</span>
          <a 
            href="#" 
            className="footer-link"
          >
            Contact
          </a>
        </div>
        <p className="footer-disclaimer">
          Exchange rates provided by{' '}
          <a 
            href="https://www.exchangerate-api.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            ExchangeRate-API
          </a>
        </p>
      </div>
    </footer>
  );
};

