# MangroveTanam

A Unity WebGL game focused on mangrove planting and environmental conservation.

## Description

MangroveTanam is an interactive web-based game built with Unity and deployed as a WebGL application. The game aims to educate players about mangrove ecosystems and the importance of mangrove planting for environmental conservation.

## Features

- **WebGL Deployment**: Playable directly in modern web browsers
- **Mobile-Optimized**: Responsive design with mobile device support
- **Progressive Web App**: Installable as a PWA with offline capabilities
- **Auto Fullscreen**: Immersive gameplay experience with automatic fullscreen mode
- **Landscape Orientation**: Optimized for landscape gameplay
- **Service Worker**: Enhanced performance with caching capabilities

## Technical Details

- **Engine**: Unity
- **Platform**: WebGL
- **Version**: 1.0
- **Theme Color**: Forest Green (#228B22)
- **Orientation**: Landscape (forced)

## Installation & Setup

### Local Development

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd MangroveWeb
   ```

2. Serve the files using a local web server (required for WebGL to work properly):

   **Using Python:**
   ```bash
   python -m http.server 8000
   ```

   **Using Node.js:**
   ```bash
   npx http-server -p 8000
   ```

   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. Open your browser and navigate to `http://localhost:8000`

### Production Deployment

Deploy the entire project folder to any web server that supports static file hosting. The game will work out-of-the-box on most hosting platforms.

## File Structure

```
MangroveWeb/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── Build/             # Unity WebGL build files
│   ├── MangroveWeb.data
│   ├── MangroveWeb.framework.js
│   ├── MangroveWeb.loader.js
│   └── MangroveWeb.wasm
├── TemplateData/      # Unity template assets
│   ├── style.css
│   └── (other template files)
└── README.md          # This file
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Mobile Support

The game is optimized for mobile devices with:
- Touch controls
- Responsive design
- Auto-orientation lock to landscape
- PWA installation support

## Performance Notes

- Initial load time may vary depending on network speed due to WebGL assets
- The game requires approximately 150MB of memory for optimal performance
- For best performance, use a modern browser with WebGL support enabled

## License

This project is the property of DefaultCompany.

## Support

For technical support or inquiries about the game, please contact the development team.
