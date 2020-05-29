import React from 'react'

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Tests/Placeholder',
  decorators: [withDesign]
}

export const showPlaceholder = () => (
  <>
    <pre>{`
      Show placeholder when no 'design' parameter
    `}</pre>
  </>
);

export const showError = () => (
  <>
    <pre>{`
      Show error message when 'type' is not supported
    `}</pre>
  </>
);

showError.story = {
  parameters: {
    design: {
      type: 'foo'
    }
  }
}
