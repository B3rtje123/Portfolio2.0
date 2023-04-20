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
          '0%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
          '100%': { backgroundPosition: '50% 0%' },
        }
      },
      animation: {
        background: 'background 5s ease-in-out infinite',
      },
      colors: {
        'bg-blue': '#26547C',
        'bg-pink': '#DD83B2',
        'red': '#EF476F',
        'yellow': '#FFD166',
        'CustomWhite': '#F1F1F1',
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
  ],
}