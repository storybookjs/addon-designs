import React from 'react'

import { withDesign } from 'storybook-addon-designs'

import { Button } from '../../Button'

export default {
  title: 'Tests/Figma',
  decorators: [withDesign]
}

export const showWarningForInvalidUrl = () => <Button>Button</Button>

showWarningForInvalidUrl.story = {
  name: 'Show warning for an invalid Figma url',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.wikipedia.org/'
    }
  }
}

export const showWarningForInvalidCredential = () => <Button>Button</Button>

showWarningForInvalidCredential.story = {
  name: 'Show warning for an invalid credential object',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
      credential: {}
    }
  }
}
