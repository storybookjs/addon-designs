/** @jsx jsx */
import { FC, useMemo } from 'react'
import { jsx } from '@storybook/theming'

import { IFrame } from '../IFrame'

import { FigmaConfig, IFrameConfigBase } from '../../../config'

interface Props {
  config: FigmaConfig
}

export const PublicFile: FC<Props> = ({ config }) => {
  const iframeConfig = useMemo<IFrameConfigBase>(() => {
    const embedHost = config.embedHost || location.hostname
    const url = `https://www.figma.com/embed?embed_host=${embedHost}&url=${config.url}`

    return {
      url,
      allowFullscreen: config.allowFullscreen
    }
  }, [config.url, config.allowFullscreen, config.embedHost])

  return <IFrame config={iframeConfig} />
}
