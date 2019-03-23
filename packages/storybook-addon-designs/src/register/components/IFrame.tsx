/** @jsx jsx */
import { SFC } from 'react'
import { css, jsx } from '@storybook/theming'

import { Placeholder } from '@storybook/components'

import { IFrameConfigBase } from '../../config'

interface Props {
  config: IFrameConfigBase
}

export const IFrame: SFC<Props> = ({ config }) => (
  <div css={$container}>
    <Placeholder css={$loading}>Loading...</Placeholder>
    <iframe
      css={$iframe}
      src={config.url}
      allowFullScreen={config.allowFullscreen}
    />
  </div>
)

export default IFrame

const $container = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`

const $loading = css`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`

const $iframe = css`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`
