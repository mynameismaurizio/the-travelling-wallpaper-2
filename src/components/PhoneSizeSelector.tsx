import React from 'react';
import { phoneSizes, type PhoneSize } from '../data/phoneSizes';
import './PhoneSizeSelector.css';

interface PhoneSizeSelectorProps {
  selectedPhoneSize: PhoneSize;
  onPhoneSizeChange: (phoneSize: PhoneSize) => void;
}

export const PhoneSizeSelector: React.FC<PhoneSizeSelectorProps> = ({
  selectedPhoneSize,
  onPhoneSizeChange,
}) => {
  return (
    <div className="phone-size-selector">
      <label htmlFor="phone-size-select" className="selector-label">
        Phone size
      </label>
      <select
        id="phone-size-select"
        value={phoneSizes.findIndex(s => s.name === selectedPhoneSize.name)}
        onChange={(e) => {
          const index = parseInt(e.target.value, 10);
          onPhoneSizeChange(phoneSizes[index]);
        }}
        className="selector-select"
      >
        {phoneSizes.map((phoneSize, index) => (
          <option key={phoneSize.name} value={index}>
            {phoneSize.name} ({phoneSize.width} × {phoneSize.height})
          </option>
        ))}
      </select>
    </div>
  );
};

