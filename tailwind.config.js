/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./Pages/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./scripts/**/*.js"
  ],
  safelist: [
    // Classes toggled from JS that might not appear in template files
    'backdrop-blur-xl',
    'border-b',
    'border-[#1fd1f94d]',
    'bg-[hsl(220,25%,6%/.8)]',
    'shadow-[0_20px_40px_-8px_rgba(0,191,255,0.2)]',
    'hidden'
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
