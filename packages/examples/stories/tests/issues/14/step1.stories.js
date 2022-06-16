import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../../../Button'

export default {
  title: 'Tests/Issues/#14/Step1',
  decorators: [withDesign],
}

export const step1 = () => <Button>Button</Button>

step1.storyName = 'Do not persist addon panel'
step1.parameters = {
  design: config({
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  }),
}
