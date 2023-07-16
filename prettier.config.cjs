/** @type {import("prettier").Config} */
const config = {
  printWidth: 140,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
