import React from 'react';
import { CountrySelector } from './CountrySelector';
import { GradientPicker } from './GradientPicker';
import { CurrencySelector } from './CurrencySelector';
import { LanguageSelector } from './LanguageSelector';
import { PhoneSizeSelector } from './PhoneSizeSelector';
import { TextOpacitySelector } from './TextOpacitySelector';
import { DownloadButton } from './DownloadButton';
import { WallpaperPreview } from './WallpaperPreview';
import type { Country } from '../data/countries';
import type { Gradient } from '../data/gradients';
import type { PhoneSize } from '../data/phoneSizes';
import { getPhrases } from '../data/phrases';
import './WallpaperGenerator.css';

interface WallpaperGeneratorProps {
  country: Country | null;
  baseCurrency: string;
  homeLanguage: string;
  exchangeRates: Record<string, number> | null;
  gradient: Gradient;
  phoneSize: PhoneSize;
  textOpacity: number;
  onCountryChange: (country: Country) => void;
  onCurrencyChange: (currency: string) => void;
  onLanguageChange: (language: string) => void;
  onGradientChange: (gradient: Gradient) => void;
  onPhoneSizeChange: (phoneSize: PhoneSize) => void;
  onTextOpacityChange: (opacity: number) => void;
  onShowSavePage: (imageUrl: string) => void;
  previewRef: React.RefObject<HTMLDivElement | null>;
}

export const WallpaperGenerator: React.FC<WallpaperGeneratorProps> = ({
  country,
  baseCurrency,
  homeLanguage,
  exchangeRates,
  gradient,
  phoneSize,
  textOpacity,
  onCountryChange,
  onCurrencyChange,
  onLanguageChange,
  onGradientChange,
  onPhoneSizeChange,
  onTextOpacityChange,
  onShowSavePage,
  previewRef,
}) => {
  const phrases = country ? getPhrases(country.code) : [];

  return (
    <div className="wallpaper-generator">
      <div className="generator-container">
        <div className="generator-controls">
          <CountrySelector
            selectedCountry={country}
            onCountryChange={onCountryChange}
          />
          
          <CurrencySelector
            selectedCurrency={baseCurrency}
            onCurrencyChange={onCurrencyChange}
          />
          
          <LanguageSelector
            selectedLanguage={homeLanguage}
            onLanguageChange={onLanguageChange}
          />
          
          <GradientPicker
            selectedGradient={gradient}
            onGradientChange={onGradientChange}
          />
          
          <TextOpacitySelector
            textOpacity={textOpacity}
            onTextOpacityChange={onTextOpacityChange}
          />
          
          {country && (
            <DownloadButton
              country={country}
              baseCurrency={baseCurrency}
              homeLanguage={homeLanguage}
              exchangeRates={exchangeRates}
              gradient={gradient}
              phoneSize={phoneSize}
              textOpacity={textOpacity}
              phrases={phrases}
              countryName={country.name}
              onShowSavePage={onShowSavePage}
            />
          )}
        </div>
        
        <div className="generator-preview">
          <div className="preview-wrapper">
            <div className="preview-controls">
              <PhoneSizeSelector
                selectedPhoneSize={phoneSize}
                onPhoneSizeChange={onPhoneSizeChange}
              />
            </div>
            {country ? (
              <WallpaperPreview
                country={country}
                baseCurrency={baseCurrency}
                homeLanguage={homeLanguage}
                exchangeRates={exchangeRates}
                gradient={gradient}
                textOpacity={textOpacity}
                phrases={phrases}
                previewRef={previewRef}
              />
            ) : (
              <div className="preview-placeholder">
                <p>Select a country to generate your wallpaper</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

