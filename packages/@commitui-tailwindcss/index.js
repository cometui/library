module.exports = function ({ theme, config, addComponents }) {
  console.log(config().cometui);
  addComponents(
    [
      (theme, e) => {
        console.log(theme);

        return {
          ".button": {
            "@apply text-white bg-blue-500 hover:bg-blue-700": {},
          },
        };
      },
    ],
    {
      theme: {
        colors: {
          "cometui-blue": "#0070f3",
        },
      },
    }
  );
};
