/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto Slab", "serif"],
      },
      screens: {
        'sm': '640px',
        backgroundSize:{
          'v1':'144%'
        },
        'desktop': '1024px',
        backgroundSize:{
          'v1':'37%'
        }


      },
      backgroundImage: {
        // space: "url('/static/background/black-white2.gif')",
      },
      backgroundSize:{
        'v1':'37%'
      }
    },
  },
  plugins: [],
};
