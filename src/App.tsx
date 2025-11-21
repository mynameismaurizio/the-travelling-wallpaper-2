import React, { useState, useEffect, useRef, Component, ErrorInfo, ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WallpaperGenerator } from './components/WallpaperGenerator';
import { AnimatedBackground } from './components/AnimatedBackground';
import type { Country } from './data/countries';
import { gradients } from './data/gradients';
import type { Gradient } from './data/gradients';
import { defaultPhoneSize, type PhoneSize } from './data/phoneSizes';
import { fetchExchangeRates } from './services/exchangeRateAPI';
import { detectCurrency, detectUserLanguage } from './services/geolocation';
import './App.css';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('❌ Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: 'red' }}>
          <h1>Something went wrong</h1>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  console.log('✅ App component rendering...');
  
  const [country, setCountry] = useState<Country | null>(null);
  const [baseCurrency, setBaseCurrency] = useState<string>('EUR');
  const [homeLanguage, setHomeLanguage] = useState<string>('en');
  const [gradient, setGradient] = useState<Gradient>(() => {
    console.log('✅ Initializing gradient:', gradients[0]);
    return gradients[0];
  });
  const [phoneSize, setPhoneSize] = useState<PhoneSize>(defaultPhoneSize);
  const [textOpacity, setTextOpacity] = useState<number>(100);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number> | null>(null);
  const [loading, setLoading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Detect user's currency and language on mount
  useEffect(() => {
    console.log('✅ Setting up currency detection...');
    import('./services/geolocation').then(({ detectCurrency, detectUserLanguage }) => {
      detectCurrency().then(currency => {
        console.log('✅ Detected currency:', currency);
        setBaseCurrency(currency);
      }).catch(err => {
        console.error('❌ Currency detection error:', err);
      });
      
      const language = detectUserLanguage();
      console.log('✅ Detected language:', language);
      setHomeLanguage(language);
    });
  }, []);

  // Fetch exchange rates when base currency changes
  useEffect(() => {
    if (baseCurrency) {
      console.log('✅ Fetching exchange rates for:', baseCurrency);
      setLoading(true);
      import('./services/exchangeRateAPI').then(({ fetchExchangeRates }) => {
        fetchExchangeRates(baseCurrency)
          .then(data => {
            console.log('✅ Exchange rates fetched:', Object.keys(data.rates).length, 'currencies');
            setExchangeRates(data.rates);
            setLoading(false);
          })
          .catch(error => {
            console.error('❌ Failed to fetch exchange rates:', error);
            setLoading(false);
          });
      });
    }
  }, [baseCurrency]);

  const handleCountryChange = (newCountry: Country) => {
    console.log('✅ Country changed:', newCountry.name);
    setCountry(newCountry);
  };

  const handleCurrencyChange = (newCurrency: string) => {
    console.log('✅ Currency changed:', newCurrency);
    setBaseCurrency(newCurrency);
  };

  const handleLanguageChange = (newLanguage: string) => {
    console.log('✅ Language changed:', newLanguage);
    setHomeLanguage(newLanguage);
  };

  const handleGradientChange = (newGradient: Gradient) => {
    console.log('✅ Gradient changed:', newGradient.name);
    setGradient(newGradient);
  };

  const handlePhoneSizeChange = (newPhoneSize: PhoneSize) => {
    console.log('✅ Phone size changed:', newPhoneSize.name);
    setPhoneSize(newPhoneSize);
  };

  const handleTextOpacityChange = (newTextOpacity: number) => {
    console.log('✅ Text opacity changed:', newTextOpacity);
    setTextOpacity(newTextOpacity);
  };

  console.log('✅ Rendering App with:', { country: country?.name, baseCurrency, gradient: gradient.name });

  return (
    <ErrorBoundary>
      <AnimatedBackground gradient={gradient} />
      <div className="app">
        <Header />
        <WallpaperGenerator
          country={country}
          baseCurrency={baseCurrency}
          homeLanguage={homeLanguage}
          exchangeRates={exchangeRates}
          gradient={gradient}
          phoneSize={phoneSize}
          textOpacity={textOpacity}
          onCountryChange={handleCountryChange}
          onCurrencyChange={handleCurrencyChange}
          onLanguageChange={handleLanguageChange}
          onGradientChange={handleGradientChange}
          onPhoneSizeChange={handlePhoneSizeChange}
          onTextOpacityChange={handleTextOpacityChange}
          previewRef={previewRef}
        />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
