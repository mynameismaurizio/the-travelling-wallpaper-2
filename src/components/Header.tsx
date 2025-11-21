import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header-title">The Travelling Wallpaper</h1>
      <p className="header-description">
        Generate beautiful phone wallpapers with currency conversions and essential phrases for your next trip.
      </p>
    </header>
  );
};

