module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        gray: {
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
};
