# 🌟 Solar System Explorer

An interactive, educational website that allows users to explore our solar system through beautiful animations and detailed information about each celestial body.

![Project Type](https://img.shields.io/badge/Type-Educational-blue)
![Technologies](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## 🌍 Overview

Solar System Explorer is a single-page web application that provides an engaging way to learn about our solar system. With stunning visual effects and detailed scientific data, users can click on any planet to discover fascinating facts about the Sun and all eight planets.

## ✨ Features

- **Interactive Planet Cards**: Click on any celestial body to view detailed information
- **Animated Starfield**: Dynamic twinkling stars create an immersive space atmosphere
- **Modal Information Panels**: Detailed pop-ups with comprehensive data about each planet
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Animations**: 
  - Floating planet icons
  - Glowing title effects
  - Twinkling stars
  - Smooth modal transitions
- **Scientific Data**: Includes diameter, mass, orbital periods, and interesting facts
- **Modern UI**: Glassmorphism effects and gradient backgrounds
- **No Dependencies**: Pure vanilla JavaScript - no frameworks required

## 🛠 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox and Grid layouts
  - CSS animations and transitions
  - Glassmorphism effects
  - Responsive design with media queries
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Dynamic content generation

## 📦 Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/SKsiddhant/solar-system-explorer.git
   ```
   Or simply download the HTML file.

2. **No Build Process Required**
   - This is a static HTML file with embedded CSS and JavaScript
   - No npm packages or build tools needed

3. **Open in Browser**
   ```bash
   # Simply open the HTML file in your browser
   # Or use a local server for development
   ```

## 🚀 Usage

### Basic Usage
1. Open `index.html` in any modern web browser
2. Click on any planet card to view detailed information
3. Click the × button or outside the modal to close it
4. Enjoy exploring the solar system!

### Running with a Local Server (Optional)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Then open http://localhost:8000 in your browser
```

## 📁 Project Structure

```
solar-system-explorer/
│
├── index.html          # Main HTML file (contains all code)
│   ├── HTML Structure
│   ├── CSS Styles (embedded in <style> tag)
│   └── JavaScript (embedded in <script> tag)
│
└── README.md          # This file
```

### Code Organization Within index.html

```
<!DOCTYPE html>
├── <head>
│   └── <style>        # All CSS styling
├── <body>
│   ├── Stars container
│   ├── Header section
│   ├── Planets grid
│   ├── Modal overlay
│   └── <script>       # All JavaScript
```

## 🎨 Customization

### Adding a New Planet/Celestial Body

Add a new object to the `planets` array in the JavaScript section:

```javascript
{
    name: "Pluto",
    icon: "🪐",
    type: "Dwarf Planet",
    color: "#D4A373",
    shortFact: "A distant dwarf planet",
    description: "Your description here...",
    diameter: "2,376 km",
    mass: "1.309 × 10²² kg",
    dayLength: "6.4 Earth days",
    yearLength: "248 Earth years"
}
```

### Changing Colors

Modify the CSS variables or inline styles:

```css
/* Background gradient */
background: linear-gradient(135deg, #0a0e27 0%, #1a1a3e 50%, #0f0c29 100%);

/* Planet card colors */
background: rgba(255, 255, 255, 0.05);
```

### Adjusting Animations

Modify the animation keyframes:

```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

**Minimum Requirements:**
- CSS Grid support
- ES6 JavaScript support
- CSS animations support

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- Add more celestial bodies (moons, asteroids, comets)
- Include images or better icons
- Add sound effects
- Create comparison tools
- Add a search/filter feature
- Include orbital visualization
- Add quiz or educational games

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Planet data sourced from NASA and scientific databases
- Inspired by the beauty and wonder of our solar system
- Built with passion for education and web development

## 📧 Contact

For questions, suggestions, or feedback:
- Open an issue on GitHub
- Email: skvasukothiya@gmail.com

---

**Made with ❤️ and ☕ for space enthusiasts everywhere**

*Explore. Learn. Wonder.* 🚀🌌
