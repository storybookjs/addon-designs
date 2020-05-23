import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../../Button'

import Docs from './examples.mdx'

export default {
  title: 'Docs/iframe/Examples',
  decorators: [withDesign],
  parameters: {
    docs: {
      page: Docs
    }
  }
}

export const embedSite = () => <Button>Button</Button>

embedSite.story = {
  parameters: {
    design: config({
      type: 'iframe',
      url: 'https://www.wikipedia.org/'
    })
  }
}

export const allowFullscreen = () => <Button>😻</Button>

allowFullscreen.story = {
  parameters: {
    design: config({
      type: 'iframe',
      url: 'https://www.youtube.com/embed/JhpyGdvsApo',
      allowFullscreen: true
    })
  }
}
