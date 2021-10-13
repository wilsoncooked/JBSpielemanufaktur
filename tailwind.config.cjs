const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  // or 'media' or 'class'
  theme: {
    screens: {
      xs: '525px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'light-greyish-green': '#DFE5E1',
        'dark-greyish-cyan': '#A3B2A7',
        'dark-desaturated-blue': '#2F455B'
      },
      fontFamily: {
        mono: ['Inconsolata', 'Courier New', 'monospace']
      },
      height: {
        0.25: '0.075rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
