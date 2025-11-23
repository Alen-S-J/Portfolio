/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'text-dark': '#1A1A1A',
        'text-gray': '#666666',
        'chrome': '#E8E8E8',
        'metallic': '#C0C0C0',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Monaco', 'Menlo', 'Consolas', 'monospace'],
      },
      animation: {
        'slide-in-left': 'slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-right': 'slideInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'pulse-subtle': 'subtlePulse 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'hologram': 'hologram 2s ease-in-out infinite',
        'particle-float': 'particleFloat 4s ease-in-out infinite',
        'neural-pulse': 'neuralPulse 2s ease-in-out infinite',
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)', opacity: '0' },
          '50%': { transform: 'translateX(150%) skewX(-20deg)', opacity: '0.4' },
          '100%': { transform: 'translateX(350%) skewX(-20deg)', opacity: '0' },
        },
        subtlePulse: {
          '0%, 100%': { filter: 'grayscale(100%) contrast(1.1) brightness(1)' },
          '50%': { filter: 'grayscale(100%) contrast(1.15) brightness(1.02)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        hologram: {
          '0%, 100%': { opacity: '0.1', transform: 'translateY(0)' },
          '50%': { opacity: '0.3', transform: 'translateY(-5px)' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '1' },
        },
        neuralPulse: {
          '0%, 100%': { opacity: '0.3', r: '4' },
          '50%': { opacity: '1', r: '6' },
        },
      },
      backgroundImage: {
        'chrome-gradient': 'linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #E8E8E8 100%)',
        'metallic-sheen': 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%)',
      },
    },
  },
  plugins: [],
}

