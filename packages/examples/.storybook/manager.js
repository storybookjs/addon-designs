import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

import logo from '@storybook-addon-designs/assets/logo-with-text.svg'
import pkg from 'storybook-addon-designs/package.json'

addons.setConfig({
  showPanel: true,
  selectedPanel: 'STORYBOOK_ADDON_DESIGNS/panel',
  theme: create({
    brandTitle: 'storybook-addon-designs',
    brandImage: logo,
    brandUrl: pkg.homepage
  })
})
