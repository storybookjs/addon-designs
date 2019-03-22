export type Config = IFrameConfig | FigmaConfig | PdfConfig

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

export interface PdfConfig extends IFrameConfigBase {
  type: 'pdf'
}