import React from "react";

import { config } from "@storybook/addon-designs";

import { Button } from "../../Button";

import sampleImage from "../../../assets/sample.png";

export default {
  title: "Tests/Issues/#81",
};

export const hideLoadingPlaceholderWhenLoaded = () => <Button>Button</Button>;

hideLoadingPlaceholderWhenLoaded.parameters = {
  design: config({
    type: "iframe",
    url: sampleImage,
  }),
};
