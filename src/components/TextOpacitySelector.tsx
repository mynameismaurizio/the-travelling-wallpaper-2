import React from 'react';
import './TextOpacitySelector.css';

interface TextOpacitySelectorProps {
  textOpacity: number; // 0 to 100
  onTextOpacityChange: (opacity: number) => void;
}

export const TextOpacitySelector: React.FC<TextOpacitySelectorProps> = ({
  textOpacity,
  onTextOpacityChange,
}) => {
  return (
    <div className="text-opacity-selector">
      <label htmlFor="text-opacity-slider" className="selector-label">
        Text visibility: {textOpacity}%
      </label>
      <input
        id="text-opacity-slider"
        type="range"
        min="0"
        max="100"
        value={textOpacity}
        onChange={(e) => onTextOpacityChange(parseInt(e.target.value, 10))}
        className="opacity-slider"
      />
      <div className="opacity-labels">
        <span>Faded</span>
        <span>Visible</span>
      </div>
    </div>
  );
};

