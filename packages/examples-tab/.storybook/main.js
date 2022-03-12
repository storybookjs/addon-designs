const main = require('../../examples/.storybook/main')

module.exports = {
  stories: [
    '../../examples/stories/**/*.stories.mdx',
    '../../examples/stories/**/*.stories.{js,jsx}',
    '../stories/**/*.stories.{js,jsx,mdx}',
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
  webpackFinal(_config) {
    const config = main.webpackFinal(_config)

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\/examples\/.*\.jsx?$/,
            use: [
              {
                loader: 'babel-loader',
                options: require('../../examples/package.json').babel,
              },
            ],
          },
          ...config.module.rules,
        ],
      },
    }
  },
}
