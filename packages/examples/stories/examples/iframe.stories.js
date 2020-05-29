import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

export default {
  title: 'Examples/Iframe',
  decorators: [withDesign]
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
