import React from 'react';
import { countries, continents } from '../data/countries';
import type { Continent, Country } from '../data/countries';
import './CountrySelector.css';

interface CountrySelectorProps {
  selectedCountry: Country | null;
  onCountryChange: (country: Country) => void;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  selectedCountry,
  onCountryChange,
}) => {
  const countriesByContinent = React.useMemo(() => {
    const grouped: Record<string, Country[]> = {};
    continents.forEach(continent => {
      grouped[continent] = countries.filter(c => c.continent === continent);
    });
    return grouped;
  }, []);

  const handleCountryChange = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    if (country) {
      onCountryChange(country);
    }
  };

  return (
    <div className="country-selector">
      <label htmlFor="country-select" className="selector-label">
        Foreign country
      </label>
      <select
        id="country-select"
        value={selectedCountry?.code || ''}
        onChange={(e) => handleCountryChange(e.target.value)}
        className="selector-select"
      >
        <option value="">Select a country</option>
        {continents.map(continent => (
          <optgroup key={continent} label={continent}>
            {countriesByContinent[continent].map(country => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.currency.code})
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

