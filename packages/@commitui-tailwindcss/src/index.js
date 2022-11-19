const plugin = require("tailwindcss/plugin");
const styled = require("../dist/styled");

module.exports = plugin.withOptions(() => {
  return function ({ addComponents }) {
    addComponents(styled);
  };
});
