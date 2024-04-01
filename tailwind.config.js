/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#006BFE",
        secondary:"#0F3454",
        gray:"#667C92"
      },
      fontFamily:{
        mulish: ["Mulish", "sans-serif"]
      }
    },
  },
  plugins: [],
}

