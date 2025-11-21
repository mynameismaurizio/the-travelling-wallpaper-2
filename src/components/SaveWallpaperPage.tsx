import React from 'react';
import './SaveWallpaperPage.css';

interface SaveWallpaperPageProps {
  imageUrl: string;
  onBack: () => void;
}

export const SaveWallpaperPage: React.FC<SaveWallpaperPageProps> = ({ imageUrl, onBack }) => {
  return (
    <div className="save-wallpaper-page">
      <div className="save-wallpaper-content">
        <h1 className="save-wallpaper-title">Save Your Wallpaper</h1>
        
        <div className="save-wallpaper-instructions">
          <h2>How to save on mobile:</h2>
          <ol>
            <li><strong>Long press</strong> on the image below</li>
            <li>Select <strong>"Save Image"</strong> or <strong>"Download Image"</strong></li>
            <li>The image will be saved to your Photos/Gallery</li>
            <li>Set it as your wallpaper from your phone settings</li>
          </ol>
        </div>
        
        <div className="save-wallpaper-image-container">
          <img src={imageUrl} alt="Your wallpaper" className="save-wallpaper-image" />
        </div>
        
        <button className="save-wallpaper-back-button" onClick={onBack}>
          ← Back to Generator
        </button>
      </div>
    </div>
  );
};

