import React from "react";

import { config } from "@storybook/addon-designs";

import { Button } from "../../Button";

export default {
  title: "Docs/Link/Examples",
};

export const embedLink = () => <Button>Button</Button>;

embedLink.parameters = {
  design: config({
    type: "link",
    url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
  }),
};

export const setLabel = () => <Button>Button</Button>;

setLabel.parameters = {
  design: config({
    type: "link",
    url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    label: "Open design in new tab",
  }),
};

export const hideArrowIcon = () => <Button>Button</Button>;

hideArrowIcon.parameters = {
  design: config({
    type: "link",
    url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    showArrow: false,
  }),
};
