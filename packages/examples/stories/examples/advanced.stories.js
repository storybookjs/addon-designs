import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

import samplePdf from '@storybook-addon-designs/assets/sample.pdf'

export default {
  title: 'Examples/Advanced',
  decorators: [withDesign]
}

export const embedMultipleDesigns = () => <Button>Button</Button>

embedMultipleDesigns.story = {
  parameters: {
    design: config([
      {
        type: 'figma',
        url:
          'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
      },
      {
        type: 'pdf',
        url: samplePdf
      }
    ])
  }
}

export const setTabNames = () => <Button>Button</Button>

setTabNames.story = {
  parameters: {
    design: config([
      {
        name: 'Foo',
        type: 'figma',
        url:
          'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
      },
      {
        name: 'Bar',
        type: 'pdf',
        url: samplePdf
      }
    ])
  }
}
