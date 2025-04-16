/** @jsx jsx */
import { Fragment, FC } from "react";
import { jsx } from "storybook/theming";

import { IconButton } from "storybook/internal/components";
import { ZoomIcon, ZoomOutIcon, ZoomResetIcon } from "@storybook/icons";

interface Props {
  onZoomIn?(): any;
  onZoomOut?(): any;
  onReset?(): any;
}

export const ZoomButtons: FC<Props> = ({ onZoomIn, onZoomOut, onReset }) => (
  <Fragment>
    <IconButton onClick={onZoomIn}>
      <ZoomIcon />
    </IconButton>
    <IconButton onClick={onZoomOut}>
      <ZoomOutIcon />
    </IconButton>
    <IconButton onClick={onReset}>
      <ZoomResetIcon />
    </IconButton>
  </Fragment>
);

export default ZoomButtons;
