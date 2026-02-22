# 🚀 Portfolio — React Setup Guide

A full walkthrough for getting your portfolio running locally and customising every section.

---

## 📁 Folder Structure

```
portfolio/
│
├── index.html                    ← Vite entry point (fonts loaded here)
├── vite.config.js                ← Vite + React plugin config
├── package.json                  ← Dependencies & scripts
│
└── src/
    ├── main.jsx                  ← Mounts <App /> into #root
    ├── App.jsx                   ← Root component; wires Loader → Navbar → Sections
    │
    ├── data/
    │   └── data.js               ← ⭐ ALL your personal info lives here
    │
    ├── hooks/
    │   ├── useTheme.js           ← Dark/light toggle + localStorage persistence
    │   └── useScrollReveal.js    ← IntersectionObserver for .reveal elements
    │
    ├── styles/
    │   └── globals.css           ← CSS variables, resets, shared utilities
    │
    ├── assets/
    │   └── icons/                ← Drop any SVG icons here if needed
    │
    └── components/
        │
        ├── ui/                   ← Reusable, non-section components
        │   ├── Loader.jsx        ← Full-screen loading animation
        │   ├── Loader.module.css
        │   ├── Navbar.jsx        ← Sticky nav with react-scroll links
        │   ├── Navbar.module.css
        │   ├── ThemeToggle.jsx   ← Pull-string bulb icon
        │   ├── ThemeToggle.module.css
        │   ├── SocialIcon.jsx    ← SVG icons per social network
        │   ├── Footer.jsx
        │   └── Footer.module.css
        │
        └── sections/             ← One file pair per portfolio section
            ├── Hero.jsx / .module.css
            ├── About.jsx / .module.css
            ├── Skills.jsx / .module.css
            ├── Education.jsx / .module.css
            ├── Projects.jsx / .module.css
            ├── Achievements.jsx / .module.css
            ├── Certifications.jsx / .module.css
            └── Contact.jsx / .module.css
```

---

## ⚙️ Installation

### Prerequisites

| Tool    | Minimum version | Check with        |
|---------|-----------------|-------------------|
| Node.js | v18+            | `node -v`         |
| npm     | v9+             | `npm -v`          |

### Steps

```bash
# 1. Create the project folder and navigate into it
mkdir portfolio && cd portfolio

# 2. Copy all the provided files into this folder
#    (maintaining the src/ subfolder structure shown above)

# 3. Install all dependencies
npm install

# 4. Start the dev server
npm run dev
```

Your site will be live at **http://localhost:5173** with hot-reload.

---

## 📦 Packages Explained

| Package | Why it's used |
|---|---|
| `react` & `react-dom` | Core React library |
| `vite` + `@vitejs/plugin-react` | Lightning-fast dev server & bundler |
| `framer-motion` | Smooth, physics-based animations (optional — hook it into any component) |
| `react-scroll` | Smooth scroll-to-section when nav links are clicked |
| `lucide-react` | Clean SVG icon set (optional — swap into SocialIcon.jsx if desired) |

### Installing a single new package later

```bash
npm install package-name
```

---

## ✏️ How to Customise

### 1. Edit your personal info

Open **`src/data/data.js`** — this is the only file you need to touch for content.

```js
export const personal = {
  name:    'Your Name',       // ← change this
  initials:'YN',              // ← shown in navbar
  email:   'you@email.com',
  location:'Your City',
  photo:   null,              // ← see "Adding your photo" below
}
```

### 2. Add your photo

```js
// In src/data/data.js, at the top:
import myPhoto from '../assets/photo.jpg'

// Then in personal:
export const personal = {
  ...
  photo: myPhoto,
}
```

Drop `photo.jpg` into `src/assets/`.

### 3. Add a real project thumbnail

```js
// In src/data/data.js:
import codellabImg from '../assets/projects/codecollab.png'

export const projects = [
  {
    title: 'CodeCollab',
    thumbnail: codellabImg,   // ← replaces the emoji
    emoji: '⌨️',             // ← used as fallback if thumbnail is null
    ...
  },
]
```

### 4. Add a certificate image

```js
import awsCert from '../assets/certs/aws.png'

export const certifications = [
  {
    issuer: 'AWS',
    name: 'AWS Certified Developer',
    image: awsCert,           // ← displayed in the card thumbnail area
    ...
  },
]
```

Then update `Certifications.jsx` to render `<img src={cert.image} />` inside `.thumb`.

### 5. Wire up the contact form

The form currently uses local state only. To send real emails, use **Formspree** (free):

```bash
# No install needed — just sign up at formspree.io
```

In `Contact.jsx`, replace the `handleSubmit` function:

```js
async function handleSubmit(e) {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```

### 6. Change the colour accent

All colours are CSS variables in `src/styles/globals.css`:

```css
:root {
  --accent:  #e8d5b0;   /* warm gold — change to any hex */
  --accent2: #c4a882;   /* slightly darker variant */
}
```

---

## 🌗 Theme Toggle (Pull-String)

- Default mode is **dark** (set in `useTheme.js`)
- The preference is saved to `localStorage` — persists across reloads
- The bulb + string lives in `ThemeToggle.jsx` and `ThemeToggle.module.css`
- To change the default to light: edit `useTheme.js` → change `true` to `false`

---

## 🎞️ Animations

### Scroll reveal
Any element with `className="reveal"` will fade up when scrolled into view.
Add stagger delays with `className="reveal delay-1"` (up to `delay-3`).

### Page entrance (Hero)
Handled with pure CSS `@keyframes fadeSlide` in `Hero.module.css`.

### Framer Motion (optional)
`framer-motion` is installed. To use it anywhere:

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

---

## 🚢 Deployment

### Vercel (recommended — free)

```bash
npm install -g vercel
vercel
# Follow the prompts — it auto-detects Vite
```

### Netlify

```bash
npm run build
# Drag the `dist/` folder into app.netlify.com/drop
```

### GitHub Pages

```bash
npm install -D gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# In vite.config.js add:  base: '/your-repo-name/'

npm run deploy
```

---

## 🧩 Adding a New Section

1. Create `src/components/sections/MySection.jsx`
2. Create `src/components/sections/MySection.module.css`
3. Import and render it in `App.jsx` between two `<div className="divider" />` lines
4. Add a nav entry to the `NAV_LINKS` array in `Navbar.jsx`
5. Give the `<section>` an `id` that matches the nav link's `to` value

---

## ❓ Common Issues

| Problem | Fix |
|---|---|
| Fonts not loading | Check your internet connection; Google Fonts is loaded in `index.html` |
| `npm install` errors | Make sure Node ≥ 18: `node -v` |
| Smooth scroll not working | Ensure `react-scroll` is installed and the section `id` matches the `to` prop |
| Photo not showing | Verify the import path in `data.js` and that the file is in `src/assets/` |
| Build errors on deploy | Run `npm run build` locally first and fix any errors |
