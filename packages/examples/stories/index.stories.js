import React from 'react'

import { storiesOf } from '@storybook/react'
import { config, withDesign } from 'storybook-addon-designs'

import { Button } from './Button'

import sampleImage from '@storybook-addon-designs/assets/sample.png'
import samplePdf from '@storybook-addon-designs/assets/sample.pdf'

storiesOf('Examples|Figma', module)
  .addDecorator(withDesign)
  .add('Embed file', () => <Button>Button</Button>, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
    })
  })
  .add('Embed node', () => <Button>Button</Button>, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5'
    })
  })
  .add('Embed prototype', () => <Button>Button</Button>, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/proto/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
    })
  })
  .add('Allowing fullscreen', () => <Button disabled>Button</Button>, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
      allowFullscreen: true
    })
  })

storiesOf('Examples|iframe', module)
  .addDecorator(withDesign)
  .add('Embed site', () => <Button>Button</Button>, {
    design: config({
      type: 'iframe',
      url: 'https://www.wikipedia.org/'
    })
  })

storiesOf('Examples|PDF', module)
  .addDecorator(withDesign)
  .add('Embed PDF', () => <Button>Button</Button>, {
    design: config({
      type: 'pdf',
      url: samplePdf
    })
  })
  .add('Set scale', () => <Button>Button</Button>, {
    design: config({
      type: 'pdf',
      url: samplePdf,
      scale: 2
    })
  })
  .add('Set offset', () => <Button>Button</Button>, {
    design: config({
      type: 'pdf',
      url: samplePdf,
      offset: [-100, -100]
    })
  })
  .add('Set page', () => <Button>Button</Button>, {
    design: config({
      type: 'pdf',
      url: samplePdf,
      page: 2
    })
  })
  .add('Set both scale and offset', () => <Button disabled>Button</Button>, {
    design: config({
      type: 'pdf',
      url: samplePdf,
      offset: [-300, 140],
      scale: 2
    })
  })

storiesOf('Examples|Image', module)
  .addDecorator(withDesign)
  .add('Embed image', () => <Button>Button</Button>, {
    design: config({
      type: 'image',
      url: sampleImage
    })
  })
  .add('Set scale and offset', () => <Button disabled>Button</Button>, {
    design: config({
      type: 'image',
      url: sampleImage,
      offset: [-300, 140],
      scale: 2
    })
  })

storiesOf('Tests|Placeholder', module)
  .addDecorator(withDesign)
  .add('Show placeholder when no `design` parameter', () => (
    <Button>Button</Button>
  ))
  .add(
    'Show error message when `type` is not supported',
    () => <Button>Button</Button>,
    {
      design: {
        type: 'foo'
      }
    }
  )
