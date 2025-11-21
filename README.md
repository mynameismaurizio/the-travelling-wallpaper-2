# The Travelling Wallpaper

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white&style=flat-square)

Generate beautiful, personalized phone wallpapers with currency conversions and essential travel phrases for your next adventure.

---

## Features

| | |
|---|---|
| **Beautiful Gradients** | **Currency Conversion** |
| Choose from a variety of stunning gradient backgrounds | Real-time exchange rates with your home currency |
| **Multi-language Support** | **Phone Size Selection** |
| Essential travel phrases in multiple languages | Generate wallpapers for any phone model (iPhone, Samsung, Google Pixel, and more) |
| **Text Visibility Control** | **High-Quality Downloads** |
| Adjust text opacity to blend seamlessly with your wallpaper | Export wallpapers in your phone's native resolution |
| **Auto-detection** | |
| Automatically detects your currency and language preferences | |

---

## Screenshots

### Main Interface

![Main Interface](./screenshots/main-interface.png)

*The main interface with country selection and customization options*

### Wallpaper Preview

![Wallpaper Preview](./screenshots/wallpaper-preview.png)

*Preview your custom wallpaper before downloading*

### Customization Options

![Customization](./screenshots/customization.png)

*Customize gradient, text visibility, and phone size*

---

## Usage

1. **Select a Country** - Choose your travel destination from the dropdown
2. **Set Your Currency** - Select your home currency (auto-detected based on location)
3. **Choose Your Language** - Select your preferred language for translations
4. **Pick a Gradient** - Select a beautiful gradient background
5. **Adjust Text Visibility** - Use the slider to control how much the text blends into the background
6. **Select Phone Size** - Choose your phone model for perfect sizing
7. **Download** - Click "Download Wallpaper" to save your custom wallpaper

---

## Tech Stack

- **Frontend Framework:** React 19.2
- **Language:** TypeScript
- **Build Tool:** Vite 6.4
- **Styling:** CSS3
- **Image Generation:** html2canvas
- **API:** Exchange Rate API for real-time currency conversions

---

## Project Structure

```
the-travelling-wallpaper/
├── src/
│   ├── components/          # React components
│   │   ├── WallpaperGenerator.tsx
│   │   ├── WallpaperPreview.tsx
│   │   ├── CountrySelector.tsx
│   │   ├── CurrencySelector.tsx
│   │   ├── LanguageSelector.tsx
│   │   ├── GradientPicker.tsx
│   │   ├── PhoneSizeSelector.tsx
│   │   ├── TextOpacitySelector.tsx
│   │   └── DownloadButton.tsx
│   ├── data/                # Data files
│   │   ├── countries.ts
│   │   ├── currencies.ts
│   │   ├── phrases.ts
│   │   ├── gradients.ts
│   │   └── phoneSizes.ts
│   ├── services/            # API services
│   │   ├── exchangeRateAPI.ts
│   │   └── geolocation.ts
│   └── utils/               # Utility functions
│       └── currency.ts
├── public/                  # Static assets
└── screenshots/             # Screenshots for README
```

---

## Customization

### Adding New Gradients

Edit `src/data/gradients.ts` to add your own gradient combinations:

```typescript
export const gradients: Gradient[] = [
  {
    id: 'custom-gradient',
    name: 'Custom Gradient',
    startColor: '#FF6B6B',
    endColor: '#4ECDC4',
  },
  // ... more gradients
];
```

### Adding New Countries

Edit `src/data/countries.ts` to add more destinations with their currencies and phrases.

---

## License

This project is open source and available under the MIT License.

---

<p align="center">Made for travelers around the world</p>
