// import "../types.d.ts";
import { addons } from "storybook/internal/manager-api";
import { create } from "storybook/internal/theming";

import logo from "../assets/logo-with-text.svg";
import pkg from "@storybook/addon-designs/package.json";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "@storybook/addon-designs",
    brandImage: logo,
    brandUrl: pkg.homepage,
  }),
  showRoots: true,
});
