interface ExchangeRateResponse {
  base: string;
  date: string;
  rates: Record<string, number>;
}

interface CacheEntry {
  data: ExchangeRateResponse;
  timestamp: number;
}

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const cache: Map<string, CacheEntry> = new Map();

export async function fetchExchangeRates(baseCurrency: string): Promise<ExchangeRateResponse> {
  // Always fetch USD rates and convert from there for consistency
  const cacheKey = 'USD';
  
  // Check cache first
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    // If base currency is USD, return as is
    if (baseCurrency === 'USD') {
      return cached.data;
    }
    // Otherwise, convert the response to use the requested base currency
    return convertToBaseCurrency(cached.data, baseCurrency);
  }

  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch exchange rates: ${response.statusText}`);
    }

    const usdData: ExchangeRateResponse = await response.json();
    
    // Cache the USD data
    cache.set(cacheKey, {
      data: usdData,
      timestamp: Date.now(),
    });

    // If base currency is USD, return as is
    if (baseCurrency === 'USD') {
      return usdData;
    }
    
    // Convert to requested base currency
    return convertToBaseCurrency(usdData, baseCurrency);
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    
    // Return cached data even if expired, as fallback
    if (cached) {
      if (baseCurrency === 'USD') {
        return cached.data;
      }
      return convertToBaseCurrency(cached.data, baseCurrency);
    }
    
    throw error;
  }
}

function convertToBaseCurrency(usdData: ExchangeRateResponse, baseCurrency: string): ExchangeRateResponse {
  // USD rates: 1 USD = X otherCurrency
  // We need: 1 baseCurrency = X otherCurrency
  const baseToUsd = usdData.rates[baseCurrency];
  if (!baseToUsd) {
    // If base currency not found, return USD data
    return usdData;
  }

  // Convert all rates: newRate = usdRate / baseToUsd
  const convertedRates: Record<string, number> = {};
  for (const [currency, usdRate] of Object.entries(usdData.rates)) {
    convertedRates[currency] = usdRate / baseToUsd;
  }
  // Add USD rate: 1 baseCurrency = 1/baseToUsd USD
  convertedRates['USD'] = 1 / baseToUsd;
  // Base currency rate is always 1
  convertedRates[baseCurrency] = 1;

  return {
    base: baseCurrency,
    date: usdData.date,
    rates: convertedRates,
  };
}

export function getExchangeRate(
  rates: Record<string, number>,
  fromCurrency: string,
  toCurrency: string
): number | null {
  if (fromCurrency === toCurrency) {
    return 1;
  }

  if (fromCurrency === 'USD') {
    return rates[toCurrency] || null;
  }

  // Convert via USD if needed
  const fromToUSD = rates[fromCurrency];
  const usdToTo = rates[toCurrency];

  if (!fromToUSD || !usdToTo) {
    return null;
  }

  return usdToTo / fromToUSD;
}

export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): number | null {
  const rate = getExchangeRate(rates, fromCurrency, toCurrency);
  if (rate === null) {
    return null;
  }
  return amount * rate;
}

