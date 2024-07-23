/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002e6d',
        accent: '#65b2e8',
        current: 'currentColor',
        transparent: 'transparent',
        blue: {
          50: '#e6eaf0',
          100: '#ccd5e2',
          200: '#99abc5',
          300: '#6682a7',
          400: '#33588a',
          500: '#002e6d',
          600: '#002557',
          700: '#00204c',
          800: '#001737',
          900: '#00122c',
        },
      },
    },
    fontFamily: {
      body: 'Manrope',
      display: 'Manrope',
      sans: 'Manrope',
    },
  },
  important: true,
};
