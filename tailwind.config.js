const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        mainRed: '#F05454',
        mainBlack: '#222831',
        mainBlue: '#1F5063',
        mainWhite: '#DDDDDD'
      }
    },
  },
  plugins: [],
}
