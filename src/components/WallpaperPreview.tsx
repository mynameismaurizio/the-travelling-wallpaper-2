import React from 'react';
import type { Gradient } from '../data/gradients';
import type { Phrase } from '../data/phrases';
import type { Country } from '../data/countries';
import type { PhoneSize } from '../data/phoneSizes';
import { formatCurrency, getCurrencySymbol } from '../utils/currency';
import { getTranslatedPhrase } from '../data/phrases';
import './WallpaperPreview.css';

interface WallpaperPreviewProps {
  country: Country;
  baseCurrency: string;
  homeLanguage: string;
  exchangeRates: Record<string, number> | null;
  gradient: Gradient;
  textOpacity: number;
  phrases: Phrase[];
  showDomain: boolean;
  phoneSize: PhoneSize;
  previewRef?: React.RefObject<HTMLDivElement | null>;
}

// Common denominations to display
const denominations = [20, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4600, 4800, 5000];

// iPhone 15 Pro Max dimensions (reference base)
const REFERENCE_WIDTH = 1290;
const REFERENCE_HEIGHT = 2796;
const REFERENCE_PREVIEW_WIDTH = 320;
const REFERENCE_PREVIEW_HEIGHT = 693;

export const WallpaperPreview: React.FC<WallpaperPreviewProps> = ({
  country,
  baseCurrency,
  homeLanguage,
  exchangeRates,
  gradient,
  textOpacity,
  phrases,
  showDomain,
  phoneSize,
  previewRef,
}) => {
  // Calculate scale factor based on height ratio (maintaining aspect ratio)
  const scaleFactor = phoneSize.height / REFERENCE_HEIGHT;
  
  // Calculate preview dimensions
  const previewWidth = REFERENCE_PREVIEW_WIDTH; // Fixed for marketing
  const previewHeight = REFERENCE_PREVIEW_HEIGHT * scaleFactor;

  const destinationCurrency = country.currency.code;
  const baseSymbol = getCurrencySymbol(baseCurrency);
  const destSymbol = country.currency.symbol;

  const getConversion = (amount: number): number | null => {
    if (!exchangeRates) return null;
    
    if (baseCurrency === destinationCurrency) {
      return amount;
    }

    // Exchange rates are now in format: 1 baseCurrency = X destinationCurrency
    // So to convert: destinationAmount / rate = baseAmount
    const rate = exchangeRates[destinationCurrency];
    if (!rate || rate === 0) return null;
    
    // Convert: destinationAmount / rate = baseAmount
    return amount / rate;
  };

  const conversions = denominations.map(amount => {
    const converted = getConversion(amount);
    return {
      original: amount,
      converted: converted,
    };
  });

  // Base values for iPhone 15 Pro Max
  const baseValues = {
    contentPaddingTop: 40,
    contentPaddingSides: 20,
    columnsMarginTop: 150,
    columnsGap: 20,
    columnWidth: 48,
    fontSizeBase: 8,
    fontSizeSub: 7,
    fontSizeDomain: 5,
    domainLeft: -15,
    spacingSmall: 6,
  };

  const style: React.CSSProperties = {
    background: `linear-gradient(180deg, ${gradient.startColor} 0%, ${gradient.endColor} 100%)`,
    // CSS custom properties for proportional scaling
    '--scale-factor': scaleFactor.toString(),
    '--preview-width': `${previewWidth}px`,
    '--preview-height': `${previewHeight}px`,
    '--content-padding-top': `${baseValues.contentPaddingTop * scaleFactor}px`,
    '--content-padding-sides': `${baseValues.contentPaddingSides * scaleFactor}px`,
    '--columns-margin-top': `${baseValues.columnsMarginTop * scaleFactor}px`,
    '--columns-gap': `${baseValues.columnsGap * scaleFactor}px`,
    '--column-width': `${baseValues.columnWidth * scaleFactor}px`,
    '--font-size-base': `${baseValues.fontSizeBase * scaleFactor}px`,
    '--font-size-sub': `${baseValues.fontSizeSub * scaleFactor}px`,
    '--font-size-domain': `${baseValues.fontSizeDomain * scaleFactor}px`,
    '--domain-left': `${baseValues.domainLeft * scaleFactor}px`,
    '--spacing-small': `${baseValues.spacingSmall * scaleFactor}px`,
  } as React.CSSProperties;

  // Convert opacity percentage (0-100) to alpha (0-1)
  const alpha = textOpacity / 100;
  const textColor = `rgba(255, 255, 255, ${alpha})`;
  const subTextColor = `rgba(107, 124, 157, ${alpha})`;

  // Format phrases with proper structure: translation, transliteration, empty space
  const formattedPhrases: Array<{ type: 'translation' | 'transliteration' | 'spacer'; content?: string; sub?: string; hasSpacing?: boolean }> = [];
  phrases.forEach((phrase, phraseIdx) => {
    // Extract (krap) or similar from transliteration if present
    const transliterationMatch = phrase.transliteration.match(/^(.+?)\s*\((.+?)\)$/);
    const mainTransliteration = transliterationMatch ? transliterationMatch[1] : phrase.transliteration;
    const subText = transliterationMatch ? transliterationMatch[2] : undefined;

    // Add spacing-small to every phrase group after the first one
    const hasSpacing = phraseIdx > 0;
    const translatedPhrase = getTranslatedPhrase(phrase.english, homeLanguage);
    formattedPhrases.push({ type: 'translation', content: translatedPhrase, hasSpacing });
    formattedPhrases.push({ type: 'transliteration', content: mainTransliteration, sub: subText });
    formattedPhrases.push({ type: 'spacer' });
  });

  return (
    <div 
      ref={previewRef}
      className="wallpaper-preview" 
      style={style}
      id="wallpaper-preview"
    >
      <div className="wallpaper-content">
        <div className="wallpaper-columns" style={{ color: textColor }}>
          {/* First column: Local currency amounts only */}
          <div className="column column-currency">
            {conversions.map((conv, idx) => (
              <div key={idx} className="item" style={{ color: textColor }}>
                {destSymbol} {conv.original.toLocaleString()}
              </div>
            ))}
            {showDomain && (
              <div className="wallpaper-domain" style={{ color: textColor }}>
                {typeof window !== 'undefined' ? window.location.hostname : 'the-travelling-wallpaper.com'}
              </div>
            )}
          </div>
          {/* Second column: Converted amounts only */}
          <div className="column column-converted">
            {conversions.map((conv, idx) => (
              <div key={idx} className="item" style={{ color: textColor }}>
                {conv.converted !== null 
                  ? formatCurrency(conv.converted, baseCurrency, baseSymbol)
                  : '...'
                }
              </div>
            ))}
          </div>
          {/* Third column: Phrases */}
          <div className="column column-phrase">
            {formattedPhrases.map((item, idx) => {
              if (item.type === 'spacer') {
                return <div key={idx} className="item">&nbsp;</div>;
              }
              if (item.type === 'translation') {
                return (
                  <div key={idx} className={`item ${item.hasSpacing ? 'spacing-small' : ''}`} style={{ color: textColor }}>
                    {item.content}
                  </div>
                );
              }
              if (item.type === 'transliteration') {
                return (
                  <div key={idx} className="item" style={{ color: textColor }}>
                    {item.content}
                    {item.sub && <span className="sub" style={{ color: subTextColor }}> ({item.sub})</span>}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

