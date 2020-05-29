import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

export default {
  title: 'Examples/Link',
  decorators: [withDesign]
}

export const showALink = () => <Button>Button</Button>

showALink.story = {
  name: 'Show a Link',
  parameters: {
    design: config({
      type: 'link',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
    })
  }
}

export const setALabel = () => <Button>Button</Button>

setALabel.story = {
  name: 'Set a Label',
  parameters: {
    design: config({
      type: 'link',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
      label: 'Open design in new tab'
    })
  }
}

export const hideArrowIcon = () => <Button>Button</Button>

hideArrowIcon.story = {
  parameters: {
    design: config({
      type: 'link',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
      showArrow: false
    })
  }
}
