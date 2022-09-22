/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'md': ".9rem"
      },
      height: {
        '85': "21rem",
        '90': "22rem"
      },
      screens: {
        'lg': '1280px',
        'xl': '1920px',
        '2xl': '2520px'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
