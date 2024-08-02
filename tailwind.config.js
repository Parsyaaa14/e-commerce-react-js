/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        secondary: "#65a30d",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          padding: {
            default: "1rem",
            sm: "3rem",
          },
        },
      },
    },
  },
  plugins: [],
};
