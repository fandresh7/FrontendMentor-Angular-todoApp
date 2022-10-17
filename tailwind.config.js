/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-light': 'url(/assets/bg-mobile-light.jpg)',
        'mobile-dark': 'url(/assets/bg-mobile-dark.jpg)',
        'desktop-light': 'url(/assets/bg-desktop-light.jpg)',
        'desktop-dark': 'url(/assets/bg-desktop-dark.jpg)',
        'check': "url('/assets/icon-check.svg'), linear-gradient(135deg, rgba(71,218,255,1) 0%, rgba(192,88,243,1) 100%)'"
      },
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',

        'theme-light-very-large-gray': 'hsl(0, 0% 98%)',
        'theme-light-very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'theme-light-light-grayish-blue': 'hsl(233, 11%, 84%)',
        'theme-light-dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'theme-light-very-dark-grayish-blue': 'hsl(235, 19%, 35%)',

        'theme-dark-very-dark-blue': 'hsl(235, 21%, 11%)',
        'theme-dark-very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'theme-dark-light-grayish-blue': 'hsl(234, 39%, 85%)',
        'theme-dark-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'theme-dark-dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'theme-dark-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
        'theme-dark-very-dark-grayish-blue': 'hsl(237, 14%, 26%)'
      }
    },
    fontFamily: {
      'sans': ['Josefin Sans', 'sans-serif', 'system-ui']
    }
  },
  plugins: [],
}
