import React from 'react';
import './DomainToggle.css';

interface DomainToggleProps {
  showDomain: boolean;
  onToggle: (show: boolean) => void;
}

export const DomainToggle: React.FC<DomainToggleProps> = ({
  showDomain,
  onToggle,
}) => {
  return (
    <div className="domain-toggle">
      <label className="toggle-label">
        <input
          type="checkbox"
          checked={showDomain}
          onChange={(e) => onToggle(e.target.checked)}
          className="toggle-checkbox"
        />
        <span className="toggle-text">Show website link</span>
      </label>
    </div>
  );
};


