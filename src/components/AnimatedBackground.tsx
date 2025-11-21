import React from 'react';
import type { Gradient } from '../data/gradients';
import './AnimatedBackground.css';

interface AnimatedBackgroundProps {
  gradient: Gradient;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ gradient }) => {
  return (
    <div 
      className="animated-background"
      style={{
        '--start-color': gradient.startColor,
        '--end-color': gradient.endColor,
      } as React.CSSProperties}
    />
  );
};

