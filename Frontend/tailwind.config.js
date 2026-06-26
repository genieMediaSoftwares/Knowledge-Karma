/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1040",
        accent: "#1A1060",
        white: "#FFFFFF",
        black: "#000000",
        whatsapp: "#25D366",
      }
    },
  },
  plugins: [],
}