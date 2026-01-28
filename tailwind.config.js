/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A961',     // Main champagne gold
          light: '#E8D4A0',        // Highlights/sparkles
          dark: '#A08748',         // Deep accents
          rose: '#B8956A',         // Rose gold undertone
        },
        black: {
          DEFAULT: '#000000',
          soft: '#0A0A0A',         // Slightly softer black for variety
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A961 0%, #E8D4A0 50%, #A08748 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #A08748 0%, #C9A961 25%, #E8D4A0 50%, #C9A961 75%, #A08748 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      dropShadow: {
        'gold': '0 0 10px rgba(201, 169, 97, 0.5)',
        'gold-lg': '0 0 20px rgba(201, 169, 97, 0.6)',
        'gold-xl': '0 0 30px rgba(232, 212, 160, 0.4)',
      },
    },
  },
  plugins: [],
}
