import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

import logo from "@storybook-addon-designs/assets/logo-with-text.svg";
import pkg from "storybook-addon-designs/package.json";

addons.setConfig({
  theme: create({
    brandTitle: "storybook-addon-designs",
    brandImage: logo,
    brandUrl: pkg.homepage,
  }),
  showRoots: true,
});
