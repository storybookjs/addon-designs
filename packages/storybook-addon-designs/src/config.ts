export type Config = IFrameConfig | FigmaConfig

/**
 * Options for rendering iframe.
 */
export interface IFrameConfigBase {
  url: string
  allowFullscreen?: boolean
}

export interface IFrameConfig extends IFrameConfigBase {
  type: 'iframe'
}

export interface FigmaConfig extends IFrameConfigBase {
  type: 'figma'

  embedHost?: string
}
