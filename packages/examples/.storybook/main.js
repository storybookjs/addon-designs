module.exports = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.{js,jsx,ts,tsx}"],
  staticDirs: ["../../assets"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-designs",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
