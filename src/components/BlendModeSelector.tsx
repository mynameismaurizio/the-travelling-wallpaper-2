import React from 'react';
import './BlendModeSelector.css';

export type BlendMode = 
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';

export const blendModes: Array<{ value: BlendMode; label: string; description: string }> = [
  { value: 'normal', label: 'Normal', description: 'No blending' },
  { value: 'multiply', label: 'Multiply', description: 'Darkens the background' },
  { value: 'screen', label: 'Screen', description: 'Lightens the background' },
  { value: 'overlay', label: 'Overlay', description: 'Combines multiply and screen' },
  { value: 'darken', label: 'Darken', description: 'Keeps darker colors' },
  { value: 'lighten', label: 'Lighten', description: 'Keeps lighter colors' },
  { value: 'color-dodge', label: 'Color Dodge', description: 'Brightens background' },
  { value: 'color-burn', label: 'Color Burn', description: 'Darkens background' },
  { value: 'hard-light', label: 'Hard Light', description: 'Strong contrast' },
  { value: 'soft-light', label: 'Soft Light', description: 'Softer contrast' },
  { value: 'difference', label: 'Difference', description: 'Inverts colors' },
  { value: 'exclusion', label: 'Exclusion', description: 'Softer difference' },
  { value: 'hue', label: 'Hue', description: 'Preserves hue' },
  { value: 'saturation', label: 'Saturation', description: 'Preserves saturation' },
  { value: 'color', label: 'Color', description: 'Preserves color' },
  { value: 'luminosity', label: 'Luminosity', description: 'Preserves brightness' },
];

interface BlendModeSelectorProps {
  selectedBlendMode: BlendMode;
  onBlendModeChange: (blendMode: BlendMode) => void;
}

export const BlendModeSelector: React.FC<BlendModeSelectorProps> = ({
  selectedBlendMode,
  onBlendModeChange,
}) => {
  return (
    <div className="blend-mode-selector">
      <label htmlFor="blend-mode-select" className="selector-label">
        Text blend mode
      </label>
      <select
        id="blend-mode-select"
        value={selectedBlendMode}
        onChange={(e) => onBlendModeChange(e.target.value as BlendMode)}
        className="selector-select"
      >
        {blendModes.map(mode => (
          <option key={mode.value} value={mode.value}>
            {mode.label} - {mode.description}
          </option>
        ))}
      </select>
    </div>
  );
};

