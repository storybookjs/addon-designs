import { Design } from "@storybook/addon-designs/blocks";

export default {
  title: "Internal/Blocks/Design",
};

export const Foo = {
  render: () => <button>Button</button>,
  name: "foo",

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    },
  },
};
