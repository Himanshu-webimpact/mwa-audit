/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}", "node_modules/flowbite/**/*.js","./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
