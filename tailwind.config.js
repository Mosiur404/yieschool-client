module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    container: { center: true },
    extend: {},
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
