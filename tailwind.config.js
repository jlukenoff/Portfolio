/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-main": "#173953",
        "secondary-main": "#f50057",
        "primary-contrastText": "#f0f0f0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
