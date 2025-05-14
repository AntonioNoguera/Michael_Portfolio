/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#33595E',
        primary85: '#73979c',
        secondary: '#E9E8FF',
        white_primary: '#F7FDFE',
        black_primary: '#353535',
      },
      animation: {
        'spin-slow': 'spin 1.3s linear infinite',
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'sans-serif'],
      },
      boxShadow: {
        'std': '0 4px 30px 5px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'lg': '1300px',
      },
      fontSize: {
        'body': ['1.20rem'],
        'body2': ['1.340rem'],
        'body1': ['1.70rem'],
        'h3': ['1.80rem'],
        'h2': ['1.95rem'],
        'huge': ['10rem', { lineHeight: '9rem' }],
        'page_title': ['20vh', { lineHeight: '18vh' }]
      },
    },
  },
  plugins: [],
};