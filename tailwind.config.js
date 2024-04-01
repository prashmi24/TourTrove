/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#6347F9",
        light: "FFFFFF1A",
        grey: "90A1B4",
        lightGrey: "F4F6FA",
        orange: "FA9556",
      }
    },
  },
  plugins: [],
}

