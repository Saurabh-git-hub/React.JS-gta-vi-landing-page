# <div align="center">GTA VI Landing Page 🎮

<div align="center">

A landing page for Grand Theft Auto VI featuring smooth animations, responsive design, and interactive character showcases. Built with React and optimized for a seamless user experience.

---

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=flat-square&logo=javascript&logoColor=white)](https://gsap.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth%20Scroll-000000?style=flat-square&logo=javascript&logoColor=white)](https://lenis.darkroom.engineering/)

</div>

---
## <div align="center"> [🎬 Demo Video](https://drive.google.com/file/d/1K2GRxaupOSGR5mB2jScX5wRMkp1EbnNg/view?usp=sharing)  / [ 🌐 Live Demo](https://react-js-gta-vi-landing-page.vercel.app/)

## ✨ Features

- **🎬 Smooth Animations** - GSAP-powered animations with professional transitions
- **📱 Fully Responsive** - Perfect display on desktop, tablet, and mobile devices  
- **⚡ High Performance** - Optimized with Vite for lightning-fast load times
- **🎨 Modern Design** - Clean, professional UI with GTA VI theme aesthetics
- **🔤 Custom Typography** - Pricedown headings with Poppins body text
- **✨ Smooth Scrolling** - Lenis smooth scroll for enhanced UX
- **🎯 Interactive Elements** - Hover effects and smooth transitions
- **🎬 Video Integration** - Embedded video player in footer
- **📊 Social Integration** - Links to Twitter, Instagram, Discord, YouTube

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI Library |
| **Vite 6** | Build tool & dev server |
| **Tailwind CSS 4** | Styling |
| **GSAP 3** | Advanced animations |
| **Lenis** | Smooth scrolling |
| **Remix Icon** | Icon library |

---
## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Landing Page App                        │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
            ┌───────▼────────┐   ┌──────▼───────┐
            │  Hero Section  │   │    Lenis     │
            │  (SVG Mask)    │   │ Smooth Scroll│
            └────────────────┘   └──────────────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
   ┌────▼────┐ ┌────▼────┐ ┌───▼────┐
   │Character│ │Character│ │Character│
   │ Sections│ │ Sections│ │ Sections│
   └────┬────┘ └────┬────┘ └───┬────┘
        │           │           │
        └───────────┼───────────┘
                    │
        ┌───────────▼───────────┐
        │   GSAP Animations     │
        │ - Parallax scroll     │
        │ - Hover effects       │
        │ - Text reveals        │
        └───────────┬───────────┘
                    │
        ┌───────────▼───────────┐
        │   Interactive UI      │
        │ - Buttons/Links       │
        │ - Video Player        │
        │ - Social Cards        │
        └───────────────────────┘
```
## 📁 Project Structure

```
src/
├── components/
│   └── (no additional components yet)
│
├── App.jsx                 # Main app component with all sections
├── index.css              # Global styles & animations
├── main.jsx               # Entry point with Lenis initialization
│
public/
├── bg.png                 # Background image
├── sky.png                # Sky parallax layer
├── girlbg.png             # Character 1 image
├── imag.png               # Character overlay
├── second.png             # Character 2 image
├── third.png              # Character 3 image
├── fourth.png             # Character 4 image
├── ps5.png                # PS5 controller image
├── video.mp4              # Footer video
└── pricedown.otf          # Custom font

package.json
vite.config.js
tailwind.config.js
```

---


## 📦 Installation

### Prerequisites
- Node.js v18 or higher
- npm or yarn package manager

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Saurabh-git-hub/React.JS-gta-vi-landing-page.git
   cd React.JS-gta-vi-landing-page
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

---


## 🎯 Sections

### 1. Hero Section
- Animated "VI" mask reveal
- Parallax background effect
- Character showcase
- Call-to-action "Scroll Down"

### 2. Character Showcase
- 4 unique character profiles
- Responsive image-text layout
- Action buttons linking to portfolio:
  - Download Now
  - Subscribe
  - Follow
  - Like & Share

### 3. Footer
- Embedded video player
- Social media cards (Twitter, Instagram, Discord, YouTube)
- Newsletter subscription
- Links section
- Copyright information

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

---


## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

3. **Automatic Deployment**
   - Vercel will automatically deploy on every push to main

---


---

## 🔧 Performance Optimizations

- **Vite** - Fast HMR and efficient bundling
- **Lazy Loading** - Images loaded on demand
- **Tailwind CSS** - Utility-first CSS with minimal bundle size
- **GSAP** - Optimized animations with GPU acceleration
- **Code Splitting** - Automatic by Vite

---

## 📄 License

This project is open source and available under the **MIT License**.

---

<div align="center">

## 👨‍💻 Author

**Saurabh Chauhan**

### Connect With Me

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=flat-square&logo=vercel&logoColor=white)](https://saurabh-s-w-e.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=flat-square&logo=github&logoColor=white)](https://github.com/Saurabh-git-hub)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saurabhchauhan2000/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat-square&logo=twitter&logoColor=white)](https://x.com/saurabh_10_12)

---

**Made with ❤️ by Saurabh Chauhan**

</div>
