module.exports = {
  stories: [
    "../../examples/stories/**/*.mdx",
    "../../examples/stories/**/*.stories.{js,jsx,ts,tsx}",
    "../stories/**/*.stories.{js,jsx,ts,tsx,mdx}",
    "../stories/**/*.mdx",
  ],
  staticDirs: ["../../assets"],
  addons: [
    "@storybook/addon-docs",
    {
      name: "@storybook/addon-designs",
      options: {
        renderTarget: "tab",
      },
    },
  ],
  features: {
    babelModeV7: true,
  },
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
