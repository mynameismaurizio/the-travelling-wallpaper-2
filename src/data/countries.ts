export interface Country {
  code: string;
  name: string;
  continent: string;
  currency: {
    code: string;
    symbol: string;
    name: string;
  };
}

export const countries: Country[] = [
  // Asia
  {
    code: 'TH',
    name: 'Thailand',
    continent: 'Asia',
    currency: { code: 'THB', symbol: '฿', name: 'Thai Baht' },
  },
  {
    code: 'JP',
    name: 'Japan',
    continent: 'Asia',
    currency: { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  },
  {
    code: 'CN',
    name: 'China',
    continent: 'Asia',
    currency: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  },
  {
    code: 'IN',
    name: 'India',
    continent: 'Asia',
    currency: { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  },
  {
    code: 'KR',
    name: 'South Korea',
    continent: 'Asia',
    currency: { code: 'KRW', symbol: '₩', name: 'South Korean Won' },
  },
  {
    code: 'SG',
    name: 'Singapore',
    continent: 'Asia',
    currency: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  },
  {
    code: 'MY',
    name: 'Malaysia',
    continent: 'Asia',
    currency: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
  },
  {
    code: 'ID',
    name: 'Indonesia',
    continent: 'Asia',
    currency: { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
  },
  {
    code: 'PH',
    name: 'Philippines',
    continent: 'Asia',
    currency: { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
  },
  {
    code: 'VN',
    name: 'Vietnam',
    continent: 'Asia',
    currency: { code: 'VND', symbol: '₫', name: 'Vietnamese Dong' },
  },
  {
    code: 'TW',
    name: 'Taiwan',
    continent: 'Asia',
    currency: { code: 'TWD', symbol: 'NT$', name: 'New Taiwan Dollar' },
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    continent: 'Asia',
    currency: { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar' },
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    continent: 'Asia',
    currency: { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    continent: 'Asia',
    currency: { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal' },
  },
  {
    code: 'IL',
    name: 'Israel',
    continent: 'Asia',
    currency: { code: 'ILS', symbol: '₪', name: 'Israeli Shekel' },
  },
  {
    code: 'TR',
    name: 'Turkey',
    continent: 'Asia',
    currency: { code: 'TRY', symbol: '₺', name: 'Turkish Lira' },
  },
  // Europe
  {
    code: 'GB',
    name: 'United Kingdom',
    continent: 'Europe',
    currency: { code: 'GBP', symbol: '£', name: 'British Pound' },
  },
  {
    code: 'FR',
    name: 'France',
    continent: 'Europe',
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
  },
  {
    code: 'DE',
    name: 'Germany',
    continent: 'Europe',
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
  },
  {
    code: 'IT',
    name: 'Italy',
    continent: 'Europe',
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
  },
  {
    code: 'ES',
    name: 'Spain',
    continent: 'Europe',
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
  },
  {
    code: 'PT',
    name: 'Portugal',
    continent: 'Europe',
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
  },
  {
    code: 'GR',
    name: 'Greece',
    continent: 'Europe',
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
  },
  {
    code: 'NL',
    name: 'Netherlands',
    continent: 'Europe',
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
  },
  {
    code: 'BE',
    name: 'Belgium',
    continent: 'Europe',
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
  },
  {
    code: 'CH',
    name: 'Switzerland',
    continent: 'Europe',
    currency: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
  },
  {
    code: 'NO',
    name: 'Norway',
    continent: 'Europe',
    currency: { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone' },
  },
  {
    code: 'SE',
    name: 'Sweden',
    continent: 'Europe',
    currency: { code: 'SEK', symbol: 'kr', name: 'Swedish Krona' },
  },
  {
    code: 'DK',
    name: 'Denmark',
    continent: 'Europe',
    currency: { code: 'DKK', symbol: 'kr', name: 'Danish Krone' },
  },
  {
    code: 'PL',
    name: 'Poland',
    continent: 'Europe',
    currency: { code: 'PLN', symbol: 'zł', name: 'Polish Zloty' },
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    continent: 'Europe',
    currency: { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna' },
  },
  {
    code: 'HU',
    name: 'Hungary',
    continent: 'Europe',
    currency: { code: 'HUF', symbol: 'Ft', name: 'Hungarian Forint' },
  },
  {
    code: 'RO',
    name: 'Romania',
    continent: 'Europe',
    currency: { code: 'RON', symbol: 'lei', name: 'Romanian Leu' },
  },
  {
    code: 'RU',
    name: 'Russia',
    continent: 'Europe',
    currency: { code: 'RUB', symbol: '₽', name: 'Russian Ruble' },
  },
  // Americas
  {
    code: 'US',
    name: 'United States',
    continent: 'Americas',
    currency: { code: 'USD', symbol: '$', name: 'US Dollar' },
  },
  {
    code: 'CA',
    name: 'Canada',
    continent: 'Americas',
    currency: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  },
  {
    code: 'MX',
    name: 'Mexico',
    continent: 'Americas',
    currency: { code: 'MXN', symbol: '$', name: 'Mexican Peso' },
  },
  {
    code: 'BR',
    name: 'Brazil',
    continent: 'Americas',
    currency: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  },
  {
    code: 'AR',
    name: 'Argentina',
    continent: 'Americas',
    currency: { code: 'ARS', symbol: '$', name: 'Argentine Peso' },
  },
  {
    code: 'CL',
    name: 'Chile',
    continent: 'Americas',
    currency: { code: 'CLP', symbol: '$', name: 'Chilean Peso' },
  },
  {
    code: 'CO',
    name: 'Colombia',
    continent: 'Americas',
    currency: { code: 'COP', symbol: '$', name: 'Colombian Peso' },
  },
  {
    code: 'PE',
    name: 'Peru',
    continent: 'Americas',
    currency: { code: 'PEN', symbol: 'S/', name: 'Peruvian Sol' },
  },
  // Africa
  {
    code: 'ZA',
    name: 'South Africa',
    continent: 'Africa',
    currency: { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
  },
  {
    code: 'EG',
    name: 'Egypt',
    continent: 'Africa',
    currency: { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound' },
  },
  {
    code: 'MA',
    name: 'Morocco',
    continent: 'Africa',
    currency: { code: 'MAD', symbol: 'د.م.', name: 'Moroccan Dirham' },
  },
  {
    code: 'KE',
    name: 'Kenya',
    continent: 'Africa',
    currency: { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
  },
  {
    code: 'NG',
    name: 'Nigeria',
    continent: 'Africa',
    currency: { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
  },
  // Oceania
  {
    code: 'AU',
    name: 'Australia',
    continent: 'Oceania',
    currency: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    continent: 'Oceania',
    currency: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
  },
  {
    code: 'FJ',
    name: 'Fiji',
    continent: 'Oceania',
    currency: { code: 'FJD', symbol: 'FJ$', name: 'Fijian Dollar' },
  },
];

export const continents = ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania'] as const;

export type Continent = typeof continents[number];

