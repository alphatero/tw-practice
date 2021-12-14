// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html,pug}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans TC', 'sans-serif']
      },
      letterSpacing: {
        widest: '.25rem'
      },
      colors: {
        grayer: {
          200: '#d3dce0',
          400: '#6c757d'
        }
      },
      boxShadow: {
        blur: '0 0 4px 2px #d3dce0',
        header: '0 6px 12px 0 rgb(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'work-1': "url('/images/Portfolio/workplace/workplace-3.png')",
      }
    },
    keyframes: {
      bar: {
        '0%': {
          transform: 'translateX(0%)',
        },
        '100%': {
          transform: 'translateX(100%)'
        },
      }
    },
    animation: {
      bar: 'bar 0.4s ease-out',
    }
  },
  plugins: [],
}
