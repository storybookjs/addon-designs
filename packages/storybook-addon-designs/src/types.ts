import type { Config } from "./config";

export interface DesignParameters {
  /**
   * Design addon configuration for embedding design previews in the addon panel.
   *
   * Supports Figma, Sketch, images, iframes, and links.
   *
   * @see https://github.com/storybookjs/addon-designs
   */
  design?: Config | Config[];
}

export interface DesignTypes {
  parameters: DesignParameters;
}
