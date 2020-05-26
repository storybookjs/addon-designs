/** @jsx jsx */
import addons from '@storybook/addons'
import { jsx } from '@storybook/theming'

import { AddonName, PanelName, ParameterName } from '../addon'

import { Wrapper } from './components/Wrapper'

addons.register(AddonName, api => {
  addons.addPanel(PanelName, {
    title: 'Design',
    paramKey: ParameterName,
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
