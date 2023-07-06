import { PanelName, ParameterName } from "./addon";
import { Config } from "./config";

/**
 * Dumb function to ensure typings or enchance IDE auto completion.
 */
export const config = (c: Config | Config[]) => c;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

/**
 * Useful exports for third party developers and advanced usages
 */
export { Config, ParameterName as PARAM_KEY, PanelName };
