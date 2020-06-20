import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../../Button'

import Docs from './examples.mdx'

import samplePdf from '@storybook-addon-designs/assets/sample.pdf'

export default {
  title: 'Docs/PDF/Examples',
  decorators: [withDesign],
  parameters: {
    docs: { page: Docs }
  }
}

export const embedPDF = () => <Button>Button</Button>

embedPDF.story = {
  parameters: {
    design: config({
      type: 'pdf',
      url: samplePdf
    })
  }
}

export const setPage = () => <Button>Button</Button>

setPage.story = {
  parameters: {
    design: config({
      type: 'pdf',
      url: samplePdf,
      page: 2
    })
  }
}

export const setScaleAndOffset = () => <Button>Button</Button>

setScaleAndOffset.story = {
  parameters: {
    design: config({
      type: 'pdf',
      url: samplePdf,
      offset: [-300, 140],
      scale: 2
    })
  }
}
