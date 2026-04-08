/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffcc00", // PMBet style yellow
        secondary: "#1a1a1a", // PMBet style dark
      },
    },
  },
  plugins: [],
}
