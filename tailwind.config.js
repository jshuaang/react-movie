const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        gray: colors.coolGray,
        white: colors.white,
        yellow: colors.yellow
      },
      spacing: {
         '96': '34rem',
       }
    },
  },

  variants: {
    extend: {
      textColor: ['active'],
      scale: ['group-hover'],
      transitionProperty: ['group-hover'],
      fontWeight: ['hover', 'group-hover'],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
