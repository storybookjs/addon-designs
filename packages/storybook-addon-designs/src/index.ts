import { addons, makeDecorator } from "@storybook/preview-api";

import { Events, PanelName, ParameterName } from "./addon";
import { Config } from "./config";

export const withDesign = makeDecorator({
  name: "withDesign",
  parameterName: ParameterName,
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();

    channel.emit(Events.UpdateConfig, parameters);

    return getStory(context);
  },
});

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
