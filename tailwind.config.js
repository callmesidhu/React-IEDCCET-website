/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'grotesk':['"Familjen Grotesk"','sans-serif'],
      },
      fontSize:{
        'custom-96':'96px',
      },
      lineHeight:{
        'custom-100':'100%',
      },
      letterSpacing:{
        'custom-0':'0%',
      },
      colors:{
        'custom-blue':'#0732EF'
      },
      fontWeight:{
        'custom-bold':'700',
      },
    },
  },
  plugins: [],
}

=======
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
>>>>>>> main
