const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      transparent: 'transparent',
      gray: {
        50: 'var(--color-gray-050)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
      red: {
        50: 'var(--color-red-050)',
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        700: 'var(--color-red-700)',
        800: 'var(--color-red-800)',
        900: 'var(--color-red-900)',
      },
      orange: {
        50: 'var(--color-orange-050)',
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
        300: 'var(--color-orange-300)',
        400: 'var(--color-orange-400)',
        500: 'var(--color-orange-500)',
        600: 'var(--color-orange-600)',
        700: 'var(--color-orange-700)',
        800: 'var(--color-orange-800)',
        900: 'var(--color-orange-900)',
      },
      yellow: {
        50: 'var(--color-yellow-050)',
        100: 'var(--color-yellow-100)',
        200: 'var(--color-yellow-200)',
        300: 'var(--color-yellow-300)',
        400: 'var(--color-yellow-400)',
        500: 'var(--color-yellow-500)',
        600: 'var(--color-yellow-600)',
        700: 'var(--color-yellow-700)',
        800: 'var(--color-yellow-800)',
        900: 'var(--color-yellow-900)',
      },
      green: {
        50: 'var(--color-green-050)',
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)',
      },
      blue: {
        50: 'var(--color-blue-050)',
        100: 'var(--color-blue-100)',
        200: 'var(--color-blue-200)',
        300: 'var(--color-blue-300)',
        400: 'var(--color-blue-400)',
        500: 'var(--color-blue-500)',
        600: 'var(--color-blue-600)',
        700: 'var(--color-blue-700)',
        800: 'var(--color-blue-800)',
        900: 'var(--color-blue-900)',
      },
      purple: {
        50: 'var(--color-purple-050)',
        100: 'var(--color-purple-100)',
        200: 'var(--color-purple-200)',
        300: 'var(--color-purple-300)',
        400: 'var(--color-purple-400)',
        500: 'var(--color-purple-500)',
        600: 'var(--color-purple-600)',
        700: 'var(--color-purple-700)',
        800: 'var(--color-purple-800)',
        900: 'var(--color-purple-900)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        pixel: ['Pixel'],
      },
      fontSize: {
        '3xl': ['2rem', '2.25rem'],
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        'primary-inverse': 'var(--bg-primary-inverse)',
        secondary: 'var(--bg-secondary)',
        'secondary-inverse': 'var(--bg-secondary-inverse)',
        green: 'var(--bg-green)',
        'green-light': 'var(--bg-green-light)',
        'yellow-light': 'var(--bg-yellow-light)',
      },
      borderColor: {
        DEFAULT: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
        green: 'var(--border-green)',
        'green-light': 'var(--border-green-light)',
        'yellow-light': 'var(--border-yellow-light)',
      },
      divideColor: {
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
      },
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '10px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        'primary-inverse': 'var(--text-primary-inverse)',
        secondary: 'var(--text-secondary)',
        'secondary-inverse': 'var(--text-secondary-inverse)',
        blue: 'var(--text-blue)',
        'blue-dark': 'var(--text-blue-dark)',
        green: 'var(--text-green)',
        orange: 'var(--text-orange)',
        red: 'var(--text-red)',
        'red-disabled': 'var(--text-red-disabled)',
        'red-light': 'var(--color-red-500)',
        purple: 'var(--text-purple)',
        'purple-light': 'var(--color-purple-400)',
      },
      letterSpacing: {
        tight: '-.01em',
      },
      height: {
        button: '34px',
      },
      width: {
        'icon-button': '34px',
      },
      zIndex: {
        '-1': -1,
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--text-primary)',
            strong: {
              color: 'var(--text-primary)',
              fontWeight: '700',
            },
            a: {
              color: 'var(--text-blue)',
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--text-blue)',
                textDecoration: 'underline',
              },
            },
            h3: {
              color: 'var(--text-primary)',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
