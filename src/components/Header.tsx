import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img 
          src="/img/Asset 1.svg" 
          alt="The Travelling Wallpaper Logo" 
          className="header-logo"
        />
        <p className="header-description">
          Generate beautiful phone wallpapers with currency conversions and essential phrases for your next trip.
        </p>
      </div>
    </header>
  );
};

