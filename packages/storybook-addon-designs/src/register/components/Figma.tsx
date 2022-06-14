/** @jsx jsx */
import { FC, useMemo } from 'react'
import { jsx } from '@storybook/theming'

import { IFrame } from './IFrame'

import { FigmaConfig, IFrameConfigBase } from '../../config'

export const figmaURLPattern =
  /https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/

export const isFigmaURL = (url: string) => figmaURLPattern.test(url)

interface Props {
  config: FigmaConfig
}

export const Figma: FC<Props> = ({ config }) => {
  const iframeConfig = useMemo<IFrameConfigBase>(() => {
    const isValid = isFigmaURL(config.url)

    if (!isValid) {
      console.warn(
        '[storybook-addon-designs] ' +
          'The URL you specified is not valid Figma URL.\n' +
          'The addon fallbacks to normal iframe mode.' +
          'For more detail, please check <https://www.figma.com/developers/embed>.'
      )
      return config
    }

    const embedHost = config.embedHost || location.hostname
    const url = `https://www.figma.com/embed?embed_host=${embedHost}&url=${config.url}`

    return {
      url,
      allowFullscreen: config.allowFullscreen,
    }
  }, [config.url, config.allowFullscreen, config.embedHost])

  return <IFrame defer config={iframeConfig} />
}
