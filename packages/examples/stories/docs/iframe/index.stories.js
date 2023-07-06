import React from "react";

import { config } from "@storybook/addon-designs";

import { Button } from "../../Button";

export default {
  title: "Docs/iframe/Examples",
};

export const embedSite = () => <Button>Button</Button>;

embedSite.parameters = {
  design: config({
    type: "iframe",
    url: "https://www.wikipedia.org/",
  }),
};

export const allowFullscreen = () => <Button>😻</Button>;

allowFullscreen.parameters = {
  design: config({
    type: "iframe",
    url: "https://www.youtube.com/embed/JhpyGdvsApo",
    allowFullscreen: true,
  }),
};
