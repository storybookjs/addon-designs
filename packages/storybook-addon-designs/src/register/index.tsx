/** @jsx jsx */
import addons, { types, Addon } from '@storybook/addons'
import { useParameter } from '@storybook/api'
import { jsx } from '@storybook/theming'

import { AddonName, PanelName, ParameterName } from '../addon'
import type { Config } from '../config'

import { Wrapper } from './containers/Wrapper'

const DEFAULT_TAB_NAME = 'Design'

export default function register(renderTarget: 'panel' | 'tab') {
  addons.register(AddonName, (api) => {
    const title = function () {
      const param = useParameter<Config | Config[] | undefined>(ParameterName)

      if (!param) {
        return DEFAULT_TAB_NAME
      }

      // As the addon shows an additional tab panel, it's better not to
      // use any of items' name.
      if (Array.isArray(param)) {
        return param.length > 0
          ? `${DEFAULT_TAB_NAME} (${param.length})`
          : DEFAULT_TAB_NAME
      }

      return (param.name || DEFAULT_TAB_NAME) + ' (1)'
    }

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
        match: ({ viewMode }) => viewMode === 'design',
      })
    } else {
      addons.addPanel(PanelName, { title, paramKey: ParameterName, render })
    }
  })
}
