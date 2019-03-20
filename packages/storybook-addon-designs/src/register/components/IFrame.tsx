/** @jsx jsx */
import { SFC } from 'react'
import { css, jsx } from '@storybook/theming'

import { IFrameConfigBase } from '../../config'

interface Props {
  config: IFrameConfigBase
}

export const IFrame: SFC<Props> = ({ config }) => (
  <iframe
    css={$iframe}
    src={config.url}
    allowFullScreen={config.allowFullscreen}
  />
)

export default IFrame

// NOTE: height:99% is to prevent panel scrolling
const $iframe = css`
  width: 100%;
  height: 99%;
  border: none;
`
