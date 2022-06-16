import React from "react";

import { Button } from "../Button";

export default {
  title: "Tests/Disabled",
};

export const withoutDesign = () => <Button>Button</Button>;

withoutDesign.parameters = {
  design: { disabled: true },
};
