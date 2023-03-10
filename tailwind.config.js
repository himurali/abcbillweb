module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ['class', '[data-theme="light"]'], // hooks into docusaurus' dark mode settigns
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
