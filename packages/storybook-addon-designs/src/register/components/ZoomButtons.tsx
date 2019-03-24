/** @jsx jsx */
import { Fragment, SFC } from 'react'
import { jsx } from '@storybook/theming'

import { IconButton, Icons } from '@storybook/components'

interface Props {
  onZoomIn?(): any
  onZoomOut?(): any
  onReset?(): any
}

export const ZoomButtons: SFC<Props> = ({ onZoomIn, onZoomOut, onReset }) => (
  <Fragment>
    <IconButton onClick={onZoomIn}>
      <Icons icon="zoom" />
    </IconButton>
    <IconButton onClick={onZoomOut}>
      <Icons icon="zoomout" />
    </IconButton>
    <IconButton onClick={onReset}>
      <Icons icon="zoomreset" />
    </IconButton>
  </Fragment>
)

export default ZoomButtons
