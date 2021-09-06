const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: colors.cyan,
      gray: colors.coolGray,
      white: colors.white,
      yellow: colors.yellow
    },
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['active']
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
