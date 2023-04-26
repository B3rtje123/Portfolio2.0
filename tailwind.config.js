/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        background:{
          '0%, 100%':{
            'background-position': '0% 0%'
          },
          '50%':{
            'background-position': '100% 100%'
          }
        }
      },
      animation: {
        background: 'background 10s ease-in-out infinite',
      },
      colors: {
        'bg-blue': '#26547C',
        'bg-pink': '#DD83B2',
        'red': '#EF476F',
        'yellow': '#FFD166',
        'CustomWhite': '#F1F1F1',
        'CustomBlack': '#1F1F1F',
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'cursive'],
      },
      height: {
        'fotoHeight': '480px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}