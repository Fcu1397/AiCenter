/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 淺綠 (主色)
        primary: {
          DEFAULT: '#10b981',
          hover: '#0f9d71',
        },
        // 淺藍 (輔色)
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        // 質感灰 (基底)
        background: {
          page: '#f4f7f6', // 頁面背景
          card: '#ffffff', // 卡片背景
        },
        text: {
          primary: '#374151',   // 主要文字
          secondary: '#6b7280', // 次要文字
        },
        line: '#d1d5db', // 分隔線
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
    preflight: false,
  },
  plugins: [],
}