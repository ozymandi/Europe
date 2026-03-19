/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#2e2e2e',
        darkgray: '#6e6e6e',
        purple: '#8b5cf6',
        limon: '#fff352',
        'border-gray': '#f2f2f2',
        'blue-1': '#b8e1f7',
      },
      fontFamily: {
        display: ['"ivyora-display"', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
