# 🌍 The Travelling Wallpaper

> Generate beautiful, personalized phone wallpapers with currency conversions and essential travel phrases for your next adventure.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite)](https://vitejs.dev/)

---

## ✨ Features

- 🎨 **Beautiful Gradients** - Choose from a variety of stunning gradient backgrounds
- 💱 **Currency Conversion** - Real-time exchange rates with your home currency
- 🌐 **Multi-language Support** - Essential travel phrases in multiple languages
- 📱 **Phone Size Selection** - Generate wallpapers for any phone model (iPhone, Samsung, Google Pixel, and more)
- 🎭 **Text Visibility Control** - Adjust text opacity to blend seamlessly with your wallpaper
- 📥 **High-Quality Downloads** - Export wallpapers in your phone's native resolution
- 🎯 **Auto-detection** - Automatically detects your currency and language preferences

---

## 📸 Screenshots

### Main Interface
![Main Interface](./screenshots/main-interface.png)
*The main interface with country selection and customization options*

### Wallpaper Preview
![Wallpaper Preview](./screenshots/wallpaper-preview.png)
*Preview your custom wallpaper before downloading*

### Customization Options
![Customization](./screenshots/customization.png)
*Customize gradient, text visibility, and phone size*

> 💡 **Note:** Add your screenshots to the `screenshots/` folder and they will appear here automatically.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/the-travelling-wallpaper.git
   cd the-travelling-wallpaper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

---

## 📖 Usage

1. **Select a Country** - Choose your travel destination from the dropdown
2. **Set Your Currency** - Select your home currency (auto-detected based on location)
3. **Choose Your Language** - Select your preferred language for translations
4. **Pick a Gradient** - Select a beautiful gradient background
5. **Adjust Text Visibility** - Use the slider to control how much the text blends into the background
6. **Select Phone Size** - Choose your phone model for perfect sizing
7. **Download** - Click "Download Wallpaper" to save your custom wallpaper

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2
- **Language:** TypeScript
- **Build Tool:** Vite 6.4
- **Styling:** CSS3
- **Image Generation:** html2canvas
- **API:** Exchange Rate API for real-time currency conversions

---

## 📁 Project Structure

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

## 🎨 Customization

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

## 🚢 Building for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

Preview the production build:

```bash
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Exchange Rate API for providing real-time currency data
- All the travelers who inspired this project

---

## 📧 Contact

If you have any questions or suggestions, feel free to open an issue or reach out!

---

<div align="center">

**Made with ❤️ for travelers around the world**

⭐ Star this repo if you find it useful!

</div>
