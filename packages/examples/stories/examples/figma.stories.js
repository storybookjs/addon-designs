import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

export default {
  title: 'Examples/Figma',
  decorators: [withDesign]
}

export const embedFile = () => <Button>Button</Button>

embedFile.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
    })
  }
}

export const embedNode = () => <Button>Button</Button>

embedNode.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5'
    })
  }
}

export const embedPrototype = () => <Button>Button</Button>

embedPrototype.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/proto/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
    })
  }
}

export const allowingFullscreen = () => <Button>Button</Button>

allowingFullscreen.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
      allowFullscreen: true
    })
  }
}
