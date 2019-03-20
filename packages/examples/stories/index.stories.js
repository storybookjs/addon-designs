import React from 'react'

import { storiesOf } from '@storybook/react'
import { config, withDesigns } from 'storybook-addon-designs'

import { Button } from '@storybook/react/demo'

// TODO: Replace urls with sample ones
storiesOf('Figma', module)
  .addDecorator(withDesigns)
  .add('Embed file', () => <Button>Hello Button</Button>, {
    design: config({
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
    })
  })
  .add('Embed node', () => <Button>Hello Button</Button>, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/QBZlTbC1ale5fEavWqkzLSAR/storybook-addon-vue-info?node-id=3%3A24'
    })
  })
  .add('Embed prototype', () => <Button>Hello Button</Button>, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/proto/QBZlTbC1ale5fEavWqkzLSAR/storybook-addon-vue-info'
    })
  })
  .add('Allowing fullscreen', () => <Button>Hello Button</Button>, {
    design: config({
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
      allowFullscreen: true
    })
  })

storiesOf('iframe', module)
  .addDecorator(withDesigns)
  .add('Embed site', () => <Button>Hello Button</Button>, {
    design: config({
      type: 'iframe',
      url: 'https://www.wikipedia.org/'
    })
  })
