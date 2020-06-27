const path = require('path')

const tsconfig = path.resolve(
  __dirname,
  '../../storybook-addon-designs/tsconfig.json'
)

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.{js,jsx}'],
  addons: [
    'storybook-addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-storysource'
  ],
  webpackFinal(config) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  configFile: tsconfig,
                  transpileOnly: true
                }
              },
              {
                loader: 'react-docgen-typescript-loader',
                options: {
                  tsconfigPath: tsconfig
                }
              }
            ]
          }
        ]
      },
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, '.ts', '.tsx']
      }
    }
  }
}
