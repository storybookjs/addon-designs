import type { StorybookConfig } from "@storybook/types";

const isTabMode = process.env.STORYBOOK_ADDON_DESIGNS_MODE === 'tab';

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.{js,jsx,ts,tsx}"],
  staticDirs: ["../assets"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-designs",
    "@storybook/addon-docs",
    "@storybook/addon-webpack5-compiler-swc",
    {
      name: "@storybook/addon-designs",
      options: {
        ...(isTabMode && { renderTarget: "tab" }),
      },
    },
  ],
  core: {
    disableTelemetry: true,
  },
  framework: "@storybook/react-webpack5",
};

export default config;
