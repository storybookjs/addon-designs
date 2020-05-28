import addons, { makeDecorator, StoryWrapper } from '@storybook/addons'

import { Events, PARAM_KEY } from './addon'
import { Config } from './config'

const wrapper: StoryWrapper = (getStory, context, { parameters }) => {
  const channel = addons.getChannel()

  channel.emit(Events.UpdateConfig, parameters)

  return getStory(context)
}

export const withDesign = makeDecorator({
  name: 'withDesign',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper
})

/**
 * Dumb function to ensure typings or enchance IDE auto completion.
 */
export const config = (c: Config | Config[]) => c

export { PARAM_KEY, Config };

if (module && module.hot && module.hot.decline) {
  module.hot.decline()
}
