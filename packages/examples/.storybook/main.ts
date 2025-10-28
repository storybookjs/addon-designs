import remarkGfm from "remark-gfm";
import type { StorybookConfig } from "@storybook/react-vite";

const isTabMode = process.env.STORYBOOK_ADDON_DESIGNS_MODE === "tab";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.{js,jsx,ts,tsx}"],
  staticDirs: ["../assets"],
  addons: [
    "@storybook/addon-designs",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
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
  framework: "@storybook/react-vite",
};

export default config;
