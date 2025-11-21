export interface PhoneSize {
  name: string;
  width: number;
  height: number;
  aspectRatio: number;
}

export const phoneSizes: PhoneSize[] = [
  { name: 'iPhone 15 Pro Max', width: 1290, height: 2796, aspectRatio: 1290 / 2796 },
  { name: 'iPhone 15 Pro', width: 1179, height: 2556, aspectRatio: 1179 / 2556 },
  { name: 'iPhone 15', width: 1179, height: 2556, aspectRatio: 1179 / 2556 },
  { name: 'iPhone 14 Pro Max', width: 1290, height: 2796, aspectRatio: 1290 / 2796 },
  { name: 'iPhone 14 Pro', width: 1179, height: 2556, aspectRatio: 1179 / 2556 },
  { name: 'iPhone 13 Pro Max', width: 1284, height: 2778, aspectRatio: 1284 / 2778 },
  { name: 'iPhone 13 Pro', width: 1170, height: 2532, aspectRatio: 1170 / 2532 },
  { name: 'iPhone 12 Pro Max', width: 1284, height: 2778, aspectRatio: 1284 / 2778 },
  { name: 'iPhone 12 Pro', width: 1170, height: 2532, aspectRatio: 1170 / 2532 },
  { name: 'iPhone 11 Pro Max', width: 1242, height: 2688, aspectRatio: 1242 / 2688 },
  { name: 'iPhone 11 Pro', width: 1125, height: 2436, aspectRatio: 1125 / 2436 },
  { name: 'iPhone X/XS', width: 1125, height: 2436, aspectRatio: 1125 / 2436 },
  { name: 'iPhone 8 Plus', width: 1080, height: 1920, aspectRatio: 1080 / 1920 },
  { name: 'iPhone 8', width: 750, height: 1334, aspectRatio: 750 / 1334 },
  { name: 'Samsung Galaxy S24 Ultra', width: 1440, height: 3120, aspectRatio: 1440 / 3120 },
  { name: 'Samsung Galaxy S24+', width: 1440, height: 3120, aspectRatio: 1440 / 3120 },
  { name: 'Samsung Galaxy S24', width: 1080, height: 2340, aspectRatio: 1080 / 2340 },
  { name: 'Samsung Galaxy S23 Ultra', width: 1440, height: 3088, aspectRatio: 1440 / 3088 },
  { name: 'Samsung Galaxy S23+', width: 1080, height: 2340, aspectRatio: 1080 / 2340 },
  { name: 'Samsung Galaxy S23', width: 1080, height: 2340, aspectRatio: 1080 / 2340 },
  { name: 'Samsung Galaxy S22 Ultra', width: 1440, height: 3088, aspectRatio: 1440 / 3088 },
  { name: 'Samsung Galaxy S22+', width: 1080, height: 2340, aspectRatio: 1080 / 2340 },
  { name: 'Samsung Galaxy S22', width: 1080, height: 2340, aspectRatio: 1080 / 2340 },
  { name: 'Samsung Galaxy S21 Ultra', width: 1440, height: 3200, aspectRatio: 1440 / 3200 },
  { name: 'Samsung Galaxy S21+', width: 1080, height: 2400, aspectRatio: 1080 / 2400 },
  { name: 'Samsung Galaxy S21', width: 1080, height: 2400, aspectRatio: 1080 / 2400 },
  { name: 'Google Pixel 8 Pro', width: 1344, height: 2992, aspectRatio: 1344 / 2992 },
  { name: 'Google Pixel 8', width: 1080, height: 2400, aspectRatio: 1080 / 2400 },
  { name: 'Google Pixel 7 Pro', width: 1440, height: 3120, aspectRatio: 1440 / 3120 },
  { name: 'Google Pixel 7', width: 1080, height: 2400, aspectRatio: 1080 / 2400 },
  { name: 'OnePlus 12', width: 1440, height: 3168, aspectRatio: 1440 / 3168 },
  { name: 'OnePlus 11', width: 1440, height: 3216, aspectRatio: 1440 / 3216 },
  { name: 'Xiaomi 14 Pro', width: 1440, height: 3200, aspectRatio: 1440 / 3200 },
  { name: 'Xiaomi 13 Pro', width: 1440, height: 3200, aspectRatio: 1440 / 3200 },
];

// Default phone size (iPhone 8 Plus - most common)
export const defaultPhoneSize: PhoneSize = phoneSizes.find(s => s.name === 'iPhone 8 Plus') || phoneSizes[13];

