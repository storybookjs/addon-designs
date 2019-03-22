import { addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'

import logo from '@storybook-addon-designs/assets/logo.png'

import pkg from 'storybook-addon-designs/package.json'

addParameters({
  options: {
    theme: create({
      brandTitle: 'storybook-addon-designs',
      brandImage: logo,
      brandUrl: pkg.homepage
    })
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
