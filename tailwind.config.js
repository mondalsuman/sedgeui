const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        teal: colors.teal,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        orange: colors.orange
      },
      fontFamily: {
        'roboto-300': ['Roboto', 'Helvatica', 'Arial']
      },
      boxShadow: {
        'el-0': '0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important',
        'el-1': '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important',
        'el-2': '0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)',
        'el-3': '0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important',
        'el-4': '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important',
        'el-24': '0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "focus", "hover"],
      borderColor: ["active", "focus", "hover"],
      textColor: ["active", "focus", "hover"],
      fontFamily: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
