/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fa',
          100: '#cce3f5',
          200: '#99c7eb',
          300: '#66abe0',
          400: '#338fd6',
          500: '#0A2463', // navy blue (primary)
          600: '#091d4f',
          700: '#07163a',
          800: '#050e26',
          900: '#020713',
        },
        secondary: {
          50: '#e8f7f1',
          100: '#d0efe3',
          200: '#a1dfc7',
          300: '#73cfab',
          400: '#44bf8f',
          500: '#36AE7C', // green (secondary)
          600: '#2b8b63',
          700: '#20684a',
          800: '#164532',
          900: '#0b2319',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
        accent: {
          500: '#8b5cf6',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}