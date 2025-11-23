# Portfolio - Next.js with Spline 3D & Anime.js

Modern portfolio website built with Next.js, React, Spline 3D, Anime.js, and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🎬 Anime.js for advanced animations
- 🎭 Framer Motion for React animations
- 🌐 Spline 3D for 3D elements
- 📱 Fully responsive design
- 🎯 TypeScript support

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── HeroSection.tsx  # Hero with split portrait
│   ├── SplineScene.tsx  # 3D Spline scene
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/
│   └── images/          # Image assets
└── package.json
```

## Setup Spline 3D

1. Create a 3D scene in [Spline](https://spline.design)
2. Export and get the scene URL
3. Update the URL in `components/SplineScene.tsx`

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Anime.js** - Animation library
- **Framer Motion** - React animation library
- **Spline** - 3D design tool

## Build for Production

```bash
npm run build
npm start
```

