import React from 'react'

import { Button } from '../Button'

export default {
  title: 'Tests/Placeholder',
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
