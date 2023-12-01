import React from "react";

import { config } from "@storybook/addon-designs";

import { Button } from "../../Button";

export default {
  title: "Docs/Advanced usage",
};

export const setTabName = () => <Button>Button</Button>;

setTabName.parameters = {
  design: config({
    name: "Wireframe",
    type: "figma",
    url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
  }),
};

export const embedMultipleDesigns = () => <Button>Button</Button>;

embedMultipleDesigns.parameters = {
  design: config([
    {
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    },
    {
      type: "link",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    },
  ]),
};

export const setTabNames = () => <Button>Button</Button>;

setTabNames.parameters = {
  design: config([
    {
      name: "Foo",
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    },
    {
      name: "Bar",
      type: "link",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    },
  ]),
};
