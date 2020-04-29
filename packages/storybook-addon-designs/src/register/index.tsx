/** @jsx jsx */
import addons, { types } from '@storybook/addons'
import { jsx } from '@storybook/theming'

import { AddonName, PanelName } from '../addon'

import { Wrapper } from './components/Wrapper'

export default function register(target: 'panel' | 'tab') {
  addons.register(AddonName, api => {
    const title = 'Design'
    const render = ({ active, key }: { active: boolean; key: string }) => (
      <Wrapper
        key={key}
        channel={addons.getChannel()}
        api={api}
        active={active}
      />
    )

    if (target === 'tab') {
      addons.add(PanelName, {
        title,
        render,
        type: types.TAB,
        route: ({ storyId }) => `/design/${storyId}`,
        match: ({ viewMode }) => viewMode === 'design'
      })
    } else {
      addons.addPanel(PanelName, { title, render })
    }
  })
}
