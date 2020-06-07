import React from 'react'

import { withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

export default {
  title: 'Tests/Placeholder',
  decorators: [withDesign]
}

export const showPlaceholder = () => <Button>Button</Button>

showPlaceholder.story = {
  name: 'Show placeholder when no `design` parameter'
}

export const showError = () => <Button>Button</Button>

showError.story = {
  name: 'Show error message when `type` is not supported',
  parameters: {
    design: {
      type: 'foo'
    }
  }
}
