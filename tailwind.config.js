 export default {
  content: [
    "./index.html",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} 