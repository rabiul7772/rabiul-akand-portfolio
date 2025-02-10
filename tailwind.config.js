/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        script: ['Great Vibes', 'cursive'] // Changed to Great Vibes for closer match
      },
      dropShadow: {
        glow: '0 0 10px rgba(33, 150, 243, 0.5)'
      }
    }
  },
  plugins: []
};
