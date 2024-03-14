import { PanelName, ParameterName } from "./constants";
import { Config } from "./config";

/**
 * Dumb function to ensure typings or enchance IDE auto completion.
 */
export const config = (c: Config | Config[]) => c;

if (typeof module !== "undefined" && module.hot && module.hot.decline) {
  module.hot.decline();
}

/**
 * Useful exports for third party developers and advanced usages
 */
export { Config, ParameterName as PARAM_KEY, PanelName };
