import { PanelName, ParameterName } from "./constants";
import { Config } from "./config";

/**
 * Dumb function to ensure typings or enchance IDE auto completion.
 */
export const config = (c: Config | Config[]) => c;

/**
 * Useful exports for third party developers and advanced usages
 */
export { Config, ParameterName as PARAM_KEY, PanelName };
