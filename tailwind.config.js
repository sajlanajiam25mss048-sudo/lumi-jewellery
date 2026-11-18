/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFDF9',
        cream: {
          DEFAULT: '#FAF8F5',
          dark: '#F5F2EB',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#D4BA88',
          dark: '#B89758',
        },
        lumi: {
          dark: '#2D241E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
