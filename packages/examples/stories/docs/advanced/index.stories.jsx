import React from "react";
import { config, PanelName } from "@storybook/addon-designs";

import { Button } from "../../Button";

const meta = {
  title: "Docs/Advanced usage",
};

export default meta;

export const setTabName = {
  render: () => <Button>Button</Button>,
  parameters: {
    design: config({
      name: "Wireframe",
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    }),
  },
};

export const embedMultipleDesigns = {
  render: () => <Button>Button</Button>,
  parameters: {
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
  },
};

export const setTabNames = {
  render: () => <Button>Button</Button>,
  parameters: {
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
  },
};

export const hideTab = {
  render: () => <Button>Button</Button>,
  parameters: {
    previewTabs: { [PanelName]: { hidden: true } },
  },
};
