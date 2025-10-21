/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f3f6ff",
          100: "#e5eeff",
          200: "#c8dcff",
          300: "#9fc1ff",
          400: "#709eff",
          500: "#4c7fff",
          600: "#3b67e0",
          700: "#2f52b6",
          800: "#2a4693",
          900: "#243d7d"
        }
      },
      boxShadow: {
        soft: "0 6px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
}