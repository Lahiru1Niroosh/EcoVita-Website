/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins","sans-serif"],
        cursive: ["Arizonia","sans-serif"]

      },
      colors: {
        primary: "#db7093",
        secondary: "#ff00ff",
        brandDark: "#270c03",

      },
      container: {
        center : true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          
        }
      }
    },
  },
  plugins: [],
}

