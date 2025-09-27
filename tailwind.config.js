/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./Pages/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        // 'leftAnRightAnime': 'left-Right 2s 1 cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'mouseScrollBar': 'mouseScrollBar 3s infinite'
      },
      keyframes: {
        // 'leftAnRightAnime ': {
        //   '0%': { top: '1400px', left: '1300px' },
        //   '20%': { top: '1400px', left: '1300px' },
        //   '40%': { top: '1400px', left: '1300px' },
        //   '60%': { top: '1400px', left: '1300px' },
        // },
        'mouseScrollBar': {
          '0%': { transform: 'translateY(0px)' },
          '20%': { transform: 'translateY(-10px)' },
          '40%': { transform: 'translateY(0px)' },
          '60%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
}
