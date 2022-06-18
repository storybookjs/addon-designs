import React from "react";

import { Button } from "../Button";

export default {
  title: "Tests/Placeholder",
};

const Template = () => <Button>Button</Button>;

export const showPlaceholder = Template.bind({});

showPlaceholder.storyName = "Show placeholder when no `design` parameter";

export const showError = Template.bind({});

showError.storyName = "Show error message when `type` is not supported";
showError.parameters = {
  design: {
    type: "foo",
  },
};

export const showSketchError1 = Template.bind({});
showSketchError1.storyName =
  "Show error message when unsupported Sketch link is passed";
showSketchError1.parameters = {
  design: {
    type: "sketch",
    url: "https://www.sketch.com/s/foo",
  },
};

export const showSketchError2 = Template.bind({});
showSketchError2.storyName =
  "Show error message when the hostname of Sketch link is invalid";
showSketchError2.parameters = {
  design: {
    type: "sketch",
    url: "https://sketch.com/s/foo/a/bar",
  },
};

export const showSketchError3 = Template.bind({});
showSketchError3.storyName =
  "Show error message when the Sketch link is not HTTPS";
showSketchError3.parameters = {
  design: {
    type: "sketch",
    url: "http://www.sketch.com/s/foo/a/bar",
  },
};
