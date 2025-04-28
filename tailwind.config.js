/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",    
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Familjen Grotesk"', 'sans-serif'],
      },
      fontSize: {
        'custom-96': '96px',
      },
      lineHeight: {
        'custom-100': '100%',
      },
      letterSpacing: {
        'custom-0': '0%',
      },
      colors: {
        // Add your custom colors here
        'brand-blue': '#1947E5', // Example blue color
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
          // Add different shades if needed
        },
        // You can reference specific hex codes
        'custom-red': '#FF5A5F',
      },

      fontWeight: {
        'custom-bold': '700',
      },
    },
  },
  plugins: [],
}
