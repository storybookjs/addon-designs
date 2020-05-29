import React from 'react'

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Tests/Disabled',
  decorators: [withDesign]
}

export const withoutDesign = () => (
  <>
    <pre>{`
      Story without the Design panel
    `}</pre>
  </>
);

withoutDesign.story = {
  parameters: {
    design: { disabled: true }
  }
}
