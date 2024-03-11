module.exports = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.{js,jsx,ts,tsx}"],
  staticDirs: ["../../assets"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-designs",
    "@storybook/addon-docs",
    "@storybook/addon-webpack5-compiler-swc",
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
