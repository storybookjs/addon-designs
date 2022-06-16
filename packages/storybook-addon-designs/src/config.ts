export type Config =
  | IFrameConfig
  | FigmaConfig
  | FigspecConfig
  | ImageConfig
  | LinkConfig;

export interface ConfigBase {
  /**
   * A name of the tab.
   */
  name?: string;

  /**
   * Whether to render a tab content when the tab is inactive.
   * This option is available only when there are more than 2 designs for a story.
   * @default true
   */
  offscreen?: boolean;
}

/**
 * Options for rendering iframe.
 */
export interface IFrameConfigBase extends ConfigBase {
  /**
   * An URL to show.
   */
  url: string;

  /**
   * Allow embeded site to go in fullscreen mode.
   */
  allowFullscreen?: boolean;
}

/**
 * Render iframe.
 */
export interface IFrameConfig extends IFrameConfigBase {
  type: "iframe";
}

/**
 * Render Figma Live Preview.
 */
export interface FigmaConfig extends IFrameConfigBase {
  type: "figma";

  /**
   * A string identifies your site.
   */
  embedHost?: string;
}

/**
 * Render Figma files or frames via [figspec](https://github.com/pocka/figspec).
 */
export interface FigspecConfig extends ConfigBase {
  type: "figspec" | "experimental-figspec";

  /**
   * An URL for the Figma file or frame.
   */
  url: string;

  /**
   * Personal Access Token for your Figma account.
   */
  accessToken: string;
}

/**
 * Common options for types user can move or scale the design preview.
 */
export interface TransformableConfigBase extends ConfigBase {
  /**
   * Default scale value.
   * Must be greater than 0.
   */
  scale?: number;

  /**
   * Default offset value.
   * Incresing X value moves document right.
   * Incresing Y value moves document down.
   */
  offset?: [number, number];
}

/**
 * Render image.
 */
export interface ImageConfig extends TransformableConfigBase {
  type: "image";

  /**
   * An URL(URI) for the image.
   */
  url: string;
}

/**
 * Display a link.
 */
export interface LinkConfig extends ConfigBase {
  type: "link";

  /**
   * An URL to open.
   */
  url: string;

  /**
   * Link text. Just shows an url if omitted.
   */
  label?: string;

  /**
   * Whether to show a right-arrow at the end of a label.
   * @default true
   */
  showArrow?: boolean;

  /**
   * "target" attribute for the link.
   * @default "_blank"
   */
  target?: string;

  /**
   * "rel" attribute for the link.
   * @default "noopener"
   */
  rel?: string;
}
