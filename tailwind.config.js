/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // You can define custom colors here if needed
      },
      animation: {
        'gradient': 'gradient 20s linear infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '100% 100%' }
        }
      }
    },
  },
  plugins: [],
}
