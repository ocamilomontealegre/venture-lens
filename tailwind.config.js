/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "fuchsia-fever": "#FF5198",
        "fusion-red": "#FF6162",
      },
    },
  },
  plugins: [],
};
