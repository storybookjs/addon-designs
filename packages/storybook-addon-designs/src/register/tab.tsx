/** @jsx jsx */
import addons, { types } from '@storybook/addons'
import { jsx } from '@storybook/theming'

import { AddonName, PanelName } from '../addon'

import { Wrapper } from './components/Wrapper'

addons.register(AddonName, api => {
  addons.add(PanelName, {
    title: 'Design',
    type: types.TAB,
    route: ({ storyId }) => `/design/${storyId}`,
    match: ({ viewMode }) => viewMode === 'design',
    render: ({ key, active }) => (
      <Wrapper
        key={key}
        channel={addons.getChannel()}
        api={api}
        active={active}
      />
    )
  })
})
