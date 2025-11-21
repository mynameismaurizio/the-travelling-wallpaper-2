export function formatCurrency(amount: number, currencyCode: string, symbol?: string): string {
  // Round to 1 decimal place for small amounts, 0 for larger amounts
  const rounded = amount < 10 
    ? Math.round(amount * 10) / 10 
    : Math.round(amount);
  
  // Format with appropriate decimal places
  const formatted = rounded < 10 
    ? rounded.toFixed(1) 
    : rounded.toString();
  
  // Add currency symbol with space
  if (symbol) {
    return `${symbol} ${formatted}`;
  }
  
  // Fallback to currency code
  return `${currencyCode} ${formatted}`;
}

export function getCurrencySymbol(currencyCode: string): string {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CNY: '¥',
    INR: '₹',
    KRW: '₩',
    THB: '฿',
    SGD: 'S$',
    MYR: 'RM',
    IDR: 'Rp',
    PHP: '₱',
    VND: '₫',
    TWD: 'NT$',
    HKD: 'HK$',
    AED: 'د.إ',
    SAR: '﷼',
    ILS: '₪',
    TRY: '₺',
    CHF: 'CHF',
    NOK: 'kr',
    SEK: 'kr',
    DKK: 'kr',
    PLN: 'zł',
    CZK: 'Kč',
    HUF: 'Ft',
    RON: 'lei',
    RUB: '₽',
    CAD: 'C$',
    AUD: 'A$',
    NZD: 'NZ$',
    MXN: '$',
    BRL: 'R$',
    ARS: '$',
    CLP: '$',
    COP: '$',
    PEN: 'S/',
    ZAR: 'R',
    EGP: 'E£',
    MAD: 'د.م.',
    KES: 'KSh',
    NGN: '₦',
    FJD: 'FJ$',
  };
  
  return symbols[currencyCode] || currencyCode;
}

