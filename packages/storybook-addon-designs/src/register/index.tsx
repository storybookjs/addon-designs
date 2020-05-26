/** @jsx jsx */
import addons from '@storybook/addons'
import { jsx } from '@storybook/theming'

import { AddonName, PanelName, PARAM_KEY } from '../addon'

import { Wrapper } from './components/Wrapper'

addons.register(AddonName, api => {
  addons.addPanel(PanelName, {
    title: 'Design',
    paramKey: PARAM_KEY,
    render({ active, key }) {
      return (
        <Wrapper
          key={key}
          channel={addons.getChannel()}
          api={api}
          active={active}
        />
      )
    }
  })
})
