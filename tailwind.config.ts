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
        secondary: '#E9E8FF',
        white_primary: '#F7FDFE',
        black_primary: '#353535',
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'sans-serif'],
      },
      boxShadow: {
        'std': '0 4px 30px 5px rgba(0, 0, 0, 0.25)',
      },
      fontSize: { 
        'body': ['1.20rem'],
        'h2': ['1.95rem'],
        'huge': ['3rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
};