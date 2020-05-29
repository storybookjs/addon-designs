import React from 'react'

import { config, withDesign } from 'storybook-addon-designs'

import { Button } from '../Button'

import samplePdf from '@storybook-addon-designs/assets/sample.pdf'

export default {
  title: 'Examples/PDF',
  decorators: [withDesign]
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

export const setScale = () => <Button>Button</Button>

setScale.story = {
  parameters: {
    design: config({
      type: 'pdf',
      url: samplePdf,
      scale: 2
    })
  }
}

export const setOffset = () => <Button>Button</Button>

setOffset.story = {
  parameters: {
    design: config({
      type: 'pdf',
      url: samplePdf,
      offset: [-100, -100]
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
