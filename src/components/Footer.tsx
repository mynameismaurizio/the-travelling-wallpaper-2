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
            href="https://github.com/mynameismaurizio/the-travelling-wallpaper-2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="footer-separator">•</span>
          <a 
            href="https://www.reddit.com/r/ThailandTourism/comments/1p0k74j/as_a_first_time_visitor_found_this_wallpaper/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Inspired by
          </a>
          <span className="footer-separator">•</span>
          <a 
            href="https://rocco.gimondi.com/Information" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Contact
          </a>
        </div>
        <p className="footer-disclaimer">
          Developed by <a 
            href="https://rocco.gimondi.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Rocco Gimondi
          </a>
        </p>
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

