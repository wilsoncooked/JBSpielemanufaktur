module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  // or 'media' or 'class'
  theme: {
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
      },
      animation: {
        bouncing: 'bounce 1s infinite'
      },
      keyframes: {
        bouncing: {
          '0%, 100%': {
            transform: 'translateY(25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
