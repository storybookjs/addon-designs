import React from 'react'
import { Figma } from 'storybook-addon-designs/blocks'

export default {
  title: 'Tests/Issues/#156',
  parameters: {
    docs: {
      page: () => (
        <div>
          <a href="https://github.com/pocka/storybook-addon-designs/discussions/155">
            Original discussion
          </a>
          <Figma url="https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample" />
        </div>
      ),
    },
  },
}

const Template = () => <button>Button</button>

export const dummy = Template.bind({})
