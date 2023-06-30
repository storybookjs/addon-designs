import React from "react";

import { config, withDesign } from "@storybook/addon-designs";

import { Button } from "../../Button";

export default {
  title: "Tests/Issues/#83",
  decorators: [withDesign],
};

const Template = () => <Button>Button</Button>;

export const story1 = Template.bind({});
story1.parameters = {
  design: config([
    {
      name: "English",
      type: "iframe",
      url: "https://en.wikipedia.org/wiki/Main_Page",
    },
    {
      name: "Japanese",
      type: "iframe",
      url: "https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8",
    },
  ]),
};

export const story2 = Template.bind({});
story2.parameters = {
  design: config([
    {
      name: "Deutsch",
      type: "iframe",
      url: "https://de.wikipedia.org/wiki/Wikipedia:Hauptseite",
    },
    {
      name: "Español",
      type: "iframe",
      url: "https://es.wikipedia.org/wiki/Wikipedia:Portada",
    },
  ]),
};
