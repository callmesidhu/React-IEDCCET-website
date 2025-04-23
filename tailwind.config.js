/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
     // Include the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS/JSX/TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};