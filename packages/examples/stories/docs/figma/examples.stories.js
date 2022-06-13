import React from 'react'

import { config } from 'storybook-addon-designs'

import { Button } from '../../Button'

import Docs from './examples.mdx'

export default {
  title: 'Docs/Figma/Examples',
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

export const embedFile = () => <Button>Button</Button>

embedFile.parameters = {
  design: config({
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  }),
}

export const embedFrame = () => <Button>Button</Button>

embedFrame.parameters = {
  design: config({
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5',
  }),
}

export const embedPrivateFile = () => <Button>Button</Button>

embedPrivateFile.parameters = {
  design: config({
    type: 'figma',
    url: 'https://www.figma.com/file/WOpzYgwlTe1UV6MpJP6SMv/private-test',
  }),
}

export const embedPrototype = () => <Button>Button</Button>

embedPrototype.parameters = {
  design: config({
    type: 'figma',
    url: 'https://www.figma.com/proto/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  }),
}

export const allowFullscreen = () => <Button>Button</Button>

allowFullscreen.parameters = {
  design: config({
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
    allowFullscreen: true,
  }),
}
