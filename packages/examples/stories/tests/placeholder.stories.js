import React from 'react'

import { withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

export default {
  title: 'Tests/Placeholder',
  decorators: [withDesign],
}

export const showPlaceholder = () => <Button>Button</Button>

showPlaceholder.storyName = 'Show placeholder when no `design` parameter'

export const showError = () => <Button>Button</Button>

showError.storyName = 'Show error message when `type` is not supported'
showError.parameters = {
  design: {
    type: 'foo',
  },
}
