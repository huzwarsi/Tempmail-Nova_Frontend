/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        cyber: {
          green: '#00FF66',
          neon: '#00E676',
          dark: '#06090E',
          card: '#090F17',
          border: 'rgba(16, 185, 129, 0.3)',
        },
        dark: {
          bg: '#06090E',
          card: '#090F17',
          border: '#131F2E',
          hover: '#0E1726',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        mono: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
