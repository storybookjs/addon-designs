import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../../../Button'

export default {
  title: 'Tests/Issues/#39',
  decorators: [withDesign],
}

export const doNotRenderInactiveTab = () => <Button>Button</Button>

doNotRenderInactiveTab.parameters = {
  design: config([
    {
      type: 'figma',
      name: 'Tab1',
      url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
    },
    {
      type: 'figma',
      name: 'Tab2',
      url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5',
    },
  ]),
}
