import React from 'react';
import { gradients } from '../data/gradients';
import type { Gradient } from '../data/gradients';
import './GradientPicker.css';

interface GradientPickerProps {
  selectedGradient: Gradient;
  onGradientChange: (gradient: Gradient) => void;
}

export const GradientPicker: React.FC<GradientPickerProps> = ({
  selectedGradient,
  onGradientChange,
}) => {
  return (
    <div className="gradient-picker">
      <label className="selector-label">Gradient</label>
      <div className="gradient-options">
        {gradients.map(gradient => (
          <button
            key={gradient.id}
            className={`gradient-option ${selectedGradient.id === gradient.id ? 'selected' : ''}`}
            onClick={() => onGradientChange(gradient)}
            title={gradient.name}
          >
            <div
              className="gradient-preview"
              style={{
                background: `linear-gradient(135deg, ${gradient.startColor} 0%, ${gradient.endColor} 100%)`,
              }}
            />
            <span className="gradient-name">{gradient.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

