const main = require('../../examples/.storybook/main')

module.exports = {
  stories: [
    '../../examples/stories/**/*.stories.mdx',
    '../../examples/stories/**/*.stories.{js,jsx,ts,tsx}',
    '../stories/**/*.stories.{js,jsx,ts,tsx,mdx}',
  ],
  addons: [
    '@storybook/addon-docs',
    {
      name: 'storybook-addon-designs',
      options: {
        renderTarget: 'tab',
      },
    },
  ],
  features: {
    babelModeV7: true,
  },
  core: {
    disableTelemetry: true,
  },
}
