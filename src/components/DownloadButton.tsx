import React from 'react';
import html2canvas from 'html2canvas';
import type { Gradient } from '../data/gradients';
import type { Phrase } from '../data/phrases';
import type { Country } from '../data/countries';
import type { PhoneSize } from '../data/phoneSizes';
import { formatCurrency, getCurrencySymbol } from '../utils/currency';
import { getTranslatedPhrase } from '../data/phrases';
import './DownloadButton.css';

interface DownloadButtonProps {
  country: Country;
  baseCurrency: string;
  homeLanguage: string;
  exchangeRates: Record<string, number> | null;
  gradient: Gradient;
  phoneSize: PhoneSize;
  textOpacity: number;
  phrases: Phrase[];
  countryName: string;
  showDomain: boolean;
  onShowSavePage: (imageUrl: string) => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  country,
  baseCurrency,
  homeLanguage,
  exchangeRates,
  gradient,
  phoneSize,
  textOpacity,
  phrases,
  countryName,
  showDomain,
  onShowSavePage,
}) => {
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const destinationCurrency = country.currency.code;
      const baseSymbol = getCurrencySymbol(baseCurrency);
      const destSymbol = country.currency.symbol;

      const getConversion = (amount: number): number | null => {
        if (!exchangeRates) return null;
        if (baseCurrency === destinationCurrency) return amount;
        const rate = exchangeRates[destinationCurrency];
        if (!rate || rate === 0) return null;
        return amount / rate;
      };

      const denominations = [20, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4600, 4800, 5000];
      
      const conversions = denominations.map(amount => ({
        original: amount,
        converted: getConversion(amount),
      }));

      // Format phrases
      const formattedPhrases: Array<{ type: 'translation' | 'transliteration' | 'spacer'; content?: string; sub?: string; hasSpacing?: boolean }> = [];
      phrases.forEach((phrase, phraseIdx) => {
        const transliterationMatch = phrase.transliteration.match(/^(.+?)\s*\((.+?)\)$/);
        const mainTransliteration = transliterationMatch ? transliterationMatch[1] : phrase.transliteration;
        const subText = transliterationMatch ? transliterationMatch[2] : undefined;
        const hasSpacing = phraseIdx > 0;
        const translatedPhrase = getTranslatedPhrase(phrase.english, homeLanguage);
        formattedPhrases.push({ type: 'translation', content: translatedPhrase, hasSpacing });
        formattedPhrases.push({ type: 'transliteration', content: mainTransliteration, sub: subText });
        formattedPhrases.push({ type: 'spacer' });
      });

      // Preview width is fixed at 320px for marketing purposes
      const previewWidth = 320;
      // Calculate scale factor based on selected phone size
      const scaleFactor = phoneSize.width / previewWidth;

      // Convert opacity percentage (0-100) to alpha (0-1)
      const alpha = textOpacity / 100;
      const textColor = `rgba(255, 255, 255, ${alpha})`;
      const subTextColor = `rgba(107, 124, 157, ${alpha})`;

      // Create export element with selected phone size dimensions
      const exportDiv = document.createElement('div');
      exportDiv.style.width = `${phoneSize.width}px`;
      exportDiv.style.height = `${phoneSize.height}px`;
      exportDiv.style.position = 'absolute';
      exportDiv.style.left = '-9999px';
      exportDiv.style.top = '0';
      exportDiv.style.background = `linear-gradient(180deg, ${gradient.startColor} 0%, ${gradient.endColor} 100%)`;
      exportDiv.style.fontFamily = 'Montserrat, sans-serif';
      exportDiv.style.color = textColor;
      exportDiv.style.overflow = 'hidden';
      exportDiv.style.boxSizing = 'border-box';

      const contentDiv = document.createElement('div');
      contentDiv.style.padding = `${40 * scaleFactor}px ${20 * scaleFactor}px`;
      contentDiv.style.height = '100%';
      contentDiv.style.width = '100%';
      contentDiv.style.display = 'flex';
      contentDiv.style.flexDirection = 'column';
      contentDiv.style.alignItems = 'center';
      contentDiv.style.boxSizing = 'border-box';
      contentDiv.style.position = 'relative';

      const columnsDiv = document.createElement('div');
      columnsDiv.style.display = 'flex';
      columnsDiv.style.gap = `${20 * scaleFactor}px`;
      columnsDiv.style.height = '100%';
      columnsDiv.style.width = 'fit-content';
      columnsDiv.style.marginTop = `${150 * scaleFactor}px`;
      columnsDiv.style.alignItems = 'stretch';
      columnsDiv.style.color = textColor;
      columnsDiv.style.position = 'relative';

      // Column 1: Currency
      const col1 = document.createElement('div');
      col1.style.flex = '0 0 auto';
      col1.style.lineHeight = '1.4';
      col1.style.fontSize = `${8 * scaleFactor}px`;
      col1.style.display = 'flex';
      col1.style.flexDirection = 'column';
      col1.style.width = `${48 * scaleFactor}px`;
      col1.style.height = '100%';
      conversions.forEach((conv) => {
        const item = document.createElement('div');
        item.style.marginBottom = '0';
        item.style.marginTop = '0';
        item.style.color = textColor;
        item.textContent = `${destSymbol} ${conv.original.toLocaleString()}`;
        col1.appendChild(item);
      });

      // Column 2: Converted
      const col2 = document.createElement('div');
      col2.style.flex = '0 0 auto';
      col2.style.lineHeight = '1.4';
      col2.style.fontSize = `${8 * scaleFactor}px`;
      col2.style.display = 'flex';
      col2.style.flexDirection = 'column';
      col2.style.width = `${48 * scaleFactor}px`;
      col2.style.height = '100%';
      conversions.forEach((conv) => {
        const item = document.createElement('div');
        item.style.marginBottom = '0';
        item.style.marginTop = '0';
        item.style.color = textColor;
        item.textContent = conv.converted !== null 
          ? formatCurrency(conv.converted, baseCurrency, baseSymbol)
          : '...';
        col2.appendChild(item);
      });

      // Column 3: Phrases
      const col3 = document.createElement('div');
      col3.style.flex = '1';
      col3.style.lineHeight = '1.4';
      col3.style.fontSize = `${8 * scaleFactor}px`;
      col3.style.display = 'flex';
      col3.style.flexDirection = 'column';
      col3.style.height = '100%';
      formattedPhrases.forEach((item) => {
        const div = document.createElement('div');
        div.style.marginBottom = '0';
        div.style.color = textColor;
        if (item.type === 'spacer') {
          div.innerHTML = '&nbsp;';
        } else if (item.type === 'translation') {
          div.style.marginTop = item.hasSpacing ? `${6 * scaleFactor}px` : '0';
          div.textContent = item.content || '';
        } else if (item.type === 'transliteration') {
          div.innerHTML = item.content || '';
          if (item.sub) {
            const sub = document.createElement('span');
            sub.style.color = subTextColor;
            sub.style.fontSize = `${7 * scaleFactor}px`;
            sub.textContent = ` (${item.sub})`;
            div.appendChild(sub);
          }
        }
        col3.appendChild(div);
      });

      columnsDiv.appendChild(col1);
      columnsDiv.appendChild(col2);
      columnsDiv.appendChild(col3);
      
      // Add domain watermark aligned to bottom left of wallpaper-columns (if enabled)
      if (showDomain) {
        const domainText = window.location.hostname || 'the-travelling-wallpaper.com';
        const domainDiv = document.createElement('div');
        domainDiv.style.position = 'absolute';
        domainDiv.style.bottom = `${147 * scaleFactor}px`;
        domainDiv.style.left = `${-15 * scaleFactor}px`;
        domainDiv.style.fontSize = `${5 * scaleFactor}px`;
        domainDiv.style.opacity = '0.6';
        domainDiv.style.letterSpacing = '0.5px';
        domainDiv.style.color = textColor;
        domainDiv.style.fontFamily = 'Montserrat, sans-serif';
        domainDiv.style.whiteSpace = 'nowrap';
        domainDiv.style.transform = 'rotate(90deg)';
        domainDiv.style.transformOrigin = 'bottom left';
        domainDiv.textContent = domainText;
        columnsDiv.appendChild(domainDiv);
      }
      
      contentDiv.appendChild(columnsDiv);
      exportDiv.appendChild(contentDiv);
      document.body.appendChild(exportDiv);

      // Wait a bit for rendering
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(exportDiv, {
        backgroundColor: null,
        scale: 1,
        useCORS: true,
        logging: false,
        width: phoneSize.width,
        height: phoneSize.height,
      });
      
      document.body.removeChild(exportDiv);
      
      const imageDataUrl = canvas.toDataURL('image/png');
      
      // Detect if user is on mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                       (window.innerWidth <= 768 && window.innerHeight <= 1024);
      
      if (isMobile) {
        // Show save page with instructions for mobile
        onShowSavePage(imageDataUrl);
      } else {
        // Direct download for desktop
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `wallpaper-${countryName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.png`;
        
        link.download = filename;
        link.href = imageDataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Error generating wallpaper:', error);
      alert('Failed to generate wallpaper. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      className="download-button"
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? 'Generating...' : 'Download Wallpaper'}
    </button>
  );
};
