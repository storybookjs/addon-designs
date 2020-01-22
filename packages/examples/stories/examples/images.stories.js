import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

import sampleImage from '@storybook-addon-designs/assets/sample.png'

export default {
  title: 'Examples/Images',
  decorators: [withDesign]
}

export const embedImage = () => <Button>Button</Button>

embedImage.story = {
  parameters: {
    design: config({
      type: 'image',
      url: sampleImage
    })
  }
}

export const setScaleAndOffset = () => <Button>Button</Button>

setScaleAndOffset.story = {
  parameters: {
    design: config({
      type: 'image',
      url: sampleImage,
      offset: [-300, 140],
      scale: 2
    })
  }
}
