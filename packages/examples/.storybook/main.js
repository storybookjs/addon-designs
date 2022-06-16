module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.{js,jsx,ts,tsx}",
  ],
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
};
