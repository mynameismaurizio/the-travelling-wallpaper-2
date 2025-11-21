<div style="font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; background-color: #1a1a1a; color: #e5e5e5; padding: 40px 20px; max-width: 900px; margin: 0 auto; line-height: 1.6;">

# The Travelling Wallpaper

<div style="color: #b0b0b0; font-size: 0.95rem; margin-bottom: 40px;">
Generate beautiful, personalized phone wallpapers with currency conversions and essential travel phrases for your next adventure.
</div>

---

## Features

<div style="margin: 30px 0;">

**Beautiful Gradients**  
Choose from a variety of stunning gradient backgrounds

**Currency Conversion**  
Real-time exchange rates with your home currency

**Multi-language Support**  
Essential travel phrases in multiple languages

**Phone Size Selection**  
Generate wallpapers for any phone model (iPhone, Samsung, Google Pixel, and more)

**Text Visibility Control**  
Adjust text opacity to blend seamlessly with your wallpaper

**High-Quality Downloads**  
Export wallpapers in your phone's native resolution

**Auto-detection**  
Automatically detects your currency and language preferences

</div>

---

## Screenshots

<div style="margin: 30px 0;">

### Main Interface
<img src="./screenshots/main-interface.png" alt="Main Interface" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 20px 0; border: 1px solid #444;">
<div style="color: #b0b0b0; font-size: 0.9rem; margin-bottom: 30px;">The main interface with country selection and customization options</div>

### Wallpaper Preview
<img src="./screenshots/wallpaper-preview.png" alt="Wallpaper Preview" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 20px 0; border: 1px solid #444;">
<div style="color: #b0b0b0; font-size: 0.9rem; margin-bottom: 30px;">Preview your custom wallpaper before downloading</div>

### Customization Options
<img src="./screenshots/customization.png" alt="Customization" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 20px 0; border: 1px solid #444;">
<div style="color: #b0b0b0; font-size: 0.9rem; margin-bottom: 30px;">Customize gradient, text visibility, and phone size</div>

</div>

---

## Usage

<div style="margin: 30px 0; color: #e5e5e5;">

1. **Select a Country** - Choose your travel destination from the dropdown
2. **Set Your Currency** - Select your home currency (auto-detected based on location)
3. **Choose Your Language** - Select your preferred language for translations
4. **Pick a Gradient** - Select a beautiful gradient background
5. **Adjust Text Visibility** - Use the slider to control how much the text blends into the background
6. **Select Phone Size** - Choose your phone model for perfect sizing
7. **Download** - Click "Download Wallpaper" to save your custom wallpaper

</div>

---

## Tech Stack

<div style="margin: 30px 0;">

- **Frontend Framework:** React 19.2
- **Language:** TypeScript
- **Build Tool:** Vite 6.4
- **Styling:** CSS3
- **Image Generation:** html2canvas
- **API:** Exchange Rate API for real-time currency conversions

</div>

---

## Project Structure

<div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin: 30px 0; font-family: 'Monaco', 'Courier New', monospace; font-size: 0.9rem; overflow-x: auto;">

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

</div>

---

## Customization

<div style="margin: 30px 0;">

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

</div>

---

## License

<div style="margin: 30px 0; color: #b0b0b0;">

This project is open source and available under the MIT License.

</div>

---

<div style="text-align: center; margin-top: 60px; padding-top: 40px; border-top: 1px solid #444; color: #b0b0b0; font-size: 0.9rem;">

Made for travelers around the world

</div>

</div>
