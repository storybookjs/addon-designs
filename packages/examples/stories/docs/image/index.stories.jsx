import React from "react";

import { config } from "@storybook/addon-designs";

import { Button } from "../../Button";

import sampleImage from "../../../assets/sample.png";

export default {
  title: "Docs/Image/Examples",
};

export const embedImage = () => <Button>Button</Button>;

embedImage.parameters = {
  design: config({
    type: "image",
    url: "https://raw.githubusercontent.com/storybookjs/brand/master/logo/logo-storybook-default.svg",
  }),
};

export const embedImageWithImport = () => <Button>Button</Button>;

embedImageWithImport.parameters = {
  design: config({
    type: "image",
    url: sampleImage,
  }),
};

export const setScaleAndOffset = () => <Button>Button</Button>;

setScaleAndOffset.parameters = {
  design: config({
    type: "image",
    url: sampleImage,
    offset: [-300, 140],
    scale: 2,
  }),
};
