import React from "react";

import { config } from "@storybook/addon-designs";

import { Button } from "../../Button";

const meta = {
  title: "Docs/Figma/Examples",
  component: Button,
  render: () => <Button>Button</Button>,
};

export default meta;

export const embedFile = {
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    }),
  },
};

export const embedFrame = {
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5",
    }),
  },
};

export const embedPrivateFile = {
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/WOpzYgwlTe1UV6MpJP6SMv/private-test",
    }),
  },
};

export const embedPrototype = {
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/proto/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    }),
  },
};

export const allowFullscreen = {
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
      allowFullscreen: true,
    }),
  },
};
