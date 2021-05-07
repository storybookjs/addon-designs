/** @jsx jsx */
import addons, { types, Addon } from '@storybook/addons'
import { jsx } from '@storybook/theming'

import { AddonName, PanelName, ParameterName } from '../addon'

import { Wrapper } from './containers/Wrapper'

export default function register(renderTarget: 'panel' | 'tab') {
  addons.register(AddonName, api => {
    const title = 'Design'
    const render: Addon['render'] = ({ active, key }) => (
      <Wrapper key={key} active={!!active} />
    )

    if (renderTarget === 'tab') {
      addons.add(PanelName, {
        title,
        render,
        type: types.TAB,
        paramKey: ParameterName,
        route: ({ storyId }) => `/design/${storyId}`,
        match: ({ viewMode }) => viewMode === 'design'
      })
    } else {
      addons.addPanel(PanelName, { title, paramKey: ParameterName, render })
    }
  })
}
