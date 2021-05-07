import React from 'react'

import { withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

export default {
  title: 'Tests/Disabled',
  decorators: [withDesign],
}

export const withoutDesign = () => <Button>Button</Button>

withoutDesign.parameters = {
  design: { disabled: true },
}
