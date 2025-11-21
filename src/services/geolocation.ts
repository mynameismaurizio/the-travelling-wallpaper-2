// Map of country codes to currency codes
const countryToCurrency: Record<string, string> = {
  US: 'USD',
  GB: 'GBP',
  CA: 'CAD',
  AU: 'AUD',
  NZ: 'NZD',
  JP: 'JPY',
  CN: 'CNY',
  IN: 'INR',
  KR: 'KRW',
  SG: 'SGD',
  MY: 'MYR',
  TH: 'THB',
  ID: 'IDR',
  PH: 'PHP',
  VN: 'VND',
  TW: 'TWD',
  HK: 'HKD',
  AE: 'AED',
  SA: 'SAR',
  IL: 'ILS',
  TR: 'TRY',
  FR: 'EUR',
  DE: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  PT: 'EUR',
  GR: 'EUR',
  NL: 'EUR',
  BE: 'EUR',
  AT: 'EUR',
  IE: 'EUR',
  FI: 'EUR',
  CH: 'CHF',
  NO: 'NOK',
  SE: 'SEK',
  DK: 'DKK',
  PL: 'PLN',
  CZ: 'CZK',
  HU: 'HUF',
  RO: 'RON',
  RU: 'RUB',
  MX: 'MXN',
  BR: 'BRL',
  AR: 'ARS',
  CL: 'CLP',
  CO: 'COP',
  PE: 'PEN',
  ZA: 'ZAR',
  EG: 'EGP',
  MA: 'MAD',
  KE: 'KES',
  NG: 'NGN',
  FJ: 'FJD',
};

export async function detectCurrency(): Promise<string> {
  try {
    // Try to get currency from browser locale
    const locale = navigator.language || (navigator as any).userLanguage;
    const region = locale.split('-')[1]?.toUpperCase();
    
    if (region && countryToCurrency[region]) {
      return countryToCurrency[region];
    }

    // Try using Intl API
    // Fallback: try IP-based geolocation via a free API
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (response.ok) {
        const data = await response.json();
        const countryCode = data.country_code;
        if (countryCode && countryToCurrency[countryCode]) {
          return countryToCurrency[countryCode];
        }
      }
    } catch (error) {
      console.warn('IP geolocation failed:', error);
    }

    // Default fallback
    return 'EUR';
  } catch (error) {
    console.warn('Currency detection failed:', error);
    return 'EUR';
  }
}

export function detectUserLanguage(): string {
  try {
    const locale = navigator.language || (navigator as any).userLanguage;
    const language = locale.split('-')[0].toLowerCase();
    return language;
  } catch (error) {
    return 'en';
  }
}

