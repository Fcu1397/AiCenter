/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a3a5c',
        accent: '#2ecc71',
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
      },
    },
  },
  corePlugins: {
    preflight: false, // 關閉此選項以避免與 Ant Design Vue 衝突
  },
  plugins: [],
}