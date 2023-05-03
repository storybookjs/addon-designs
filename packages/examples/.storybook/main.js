module.exports = {
  stories: [
    "../stories/**/*.{stories.mdx,mdx}",
    "../stories/**/*.stories.{js,jsx,ts,tsx}",
  ],
  staticDirs: ["../../assets"],
  addons: [
    "storybook-addon-designs",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
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
