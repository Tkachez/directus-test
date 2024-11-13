/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        white: {
          100: '#F5F5F6',
          200: '#F0F1F1',
          300: '#ECECED'
        },
        violet: {
          100: '#D6BBFB',
          200: '#9E77ED',
          300: '#7F56D9',
          400: '#6941C6',
          500: '#53389E',
          600: '#2C1C5F',
          700: '#0C111D',
          800: '#161B26'
        },
        grey: {
          100: '#CECFD2',
          200: '#94969C',
          300: '#85888E',
          400: '#333741',
          500: '#1F242F'
        },
        green: {
          100: '#86FFCD',
          200: '#47CD89'
        }
      },
    }
  },
  plugins: []
}
