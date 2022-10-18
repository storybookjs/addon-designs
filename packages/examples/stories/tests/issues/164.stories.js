import React from "react";

import { Button } from "../../Button";

export default {
  title: "Tests/Issues/#164",
};

const Template = () => <Button>Button</Button>;

export const NoType = Template.bind({});
NoType.parameters = {
  design: {
    url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
  },
};
