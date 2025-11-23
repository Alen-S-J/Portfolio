# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Move Images**
   Copy your images from the `images/` folder to `public/images/`:
   - `11a20c00-440d-476d-b708-44beb4afc75f.png` → `public/images/`
   - `WhatsApp Image 2025-11-23 at 13.56.42_001ddc60.jpg` → `public/images/`

3. **Setup Spline 3D** (Optional)
   - Go to [spline.design](https://spline.design)
   - Create a 3D scene
   - Export and get the scene URL
   - Update the URL in `components/SplineScene.tsx`

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Features Implemented

✅ Next.js 14 with App Router  
✅ React with TypeScript  
✅ Tailwind CSS for styling  
✅ Anime.js for advanced animations  
✅ Framer Motion for React animations  
✅ Spline 3D integration  
✅ Split-face portrait animation  
✅ Watercolor brushstroke effects  
✅ Monochrome shimmer effects  
✅ Responsive design  
✅ Smooth scroll animations  
✅ Interactive hover effects  

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Tailwind CSS imports
├── components/
│   ├── Navigation.tsx      # Animated navigation bar
│   ├── HeroSection.tsx      # Split portrait hero section
│   ├── SplineScene.tsx      # 3D Spline background
│   ├── AboutSection.tsx     # About section with animated stats
│   ├── SkillsSection.tsx    # Skills with progress bars
│   ├── ProjectsSection.tsx # Project cards
│   ├── ExperienceSection.tsx # Timeline experience
│   ├── ContactSection.tsx   # Contact form
│   └── Footer.tsx          # Footer component
├── public/
│   └── images/             # Image assets
└── package.json           # Dependencies

```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Anime.js** - Lightweight animation library
- **Framer Motion** - Production-ready motion library
- **Spline** - 3D design tool integration

## Animation Features

1. **Slide Animations** - Both portrait sides slide in from opposite directions
2. **Watercolor Flow** - Continuous morphing brushstroke animations
3. **Shimmer Effect** - Sweeping light effect on monochrome side
4. **Progress Bars** - Animated skill progress bars
5. **Counter Animations** - Number counting animations
6. **Scroll Animations** - Elements animate on scroll into view
7. **Hover Effects** - Interactive hover animations throughout

## Customization

- Update colors in `tailwind.config.js`
- Modify animations in component files
- Add more sections as needed
- Customize Spline 3D scene

