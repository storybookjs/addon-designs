import React from 'react'

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Tests/Disabled',
  decorators: [withDesign]
}

export const disabled = () => (
  <>
    <pre>{`
      Story without the Design panel, configured with

      parameters: {
        design: { disabled: true }
      }
    `}</pre>
  </>
);

disabled.story = {
  parameters: {
    design: { disabled: true }
  }
}
