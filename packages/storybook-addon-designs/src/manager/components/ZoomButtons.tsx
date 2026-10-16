/** @jsx jsx */
import { Fragment, FC } from "react";
import { jsx } from "storybook/theming";

import { Button } from "storybook/internal/components";
import { ZoomIcon, ZoomOutIcon, ZoomResetIcon } from "@storybook/icons";

interface Props {
  onZoomIn?(): any;
  onZoomOut?(): any;
  onReset?(): any;
}

export const ZoomButtons: FC<Props> = ({ onZoomIn, onZoomOut, onReset }) => (
  <Fragment>
    <Button
      variant="ghost"
      padding="small"
      ariaLabel="Zoom in"
      onClick={onZoomIn}
    >
      <ZoomIcon />
    </Button>
    <Button
      variant="ghost"
      padding="small"
      ariaLabel="Zoom out"
      onClick={onZoomOut}
    >
      <ZoomOutIcon />
    </Button>
    <Button
      variant="ghost"
      padding="small"
      ariaLabel="Reset zoom"
      onClick={onReset}
    >
      <ZoomResetIcon />
    </Button>
  </Fragment>
);

export default ZoomButtons;
