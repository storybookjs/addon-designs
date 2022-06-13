const path = require('path')

const tsconfig = path.resolve(
  __dirname,
  '../../storybook-addon-designs/tsconfig.json'
)

// Since webpack resolves symlink, the addon code will be imported as "<repo>/packages/storybook-addon-designs/...".
// This means our addon's esm/ and cjs/ directories will be transpiled via babel, which causes a lot of problems (such as JSX pragma).
const addonPath = path.resolve(__dirname, '../../storybook-addon-designs')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.{js,jsx,ts,tsx}',
  ],
  addons: [
    'storybook-addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
  ],
  webpackFinal(config) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.map((rule) => {
            if (typeof rule !== 'object') {
              return rule
            }

            if (Array.isArray(rule.exclude)) {
              return {
                ...rule,
                exclude: [...rule.exclude, addonPath],
              }
            }

            if (rule.exclude instanceof RegExp) {
              return {
                ...rule,
                exclude: [rule.exclude, addonPath],
              }
            }

            return {
              ...rule,
              exclude: [addonPath],
            }
          }),
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  configFile: tsconfig,
                  transpileOnly: true,
                },
              },
              {
                loader: 'react-docgen-typescript-loader',
                options: {
                  tsconfigPath: tsconfig,
                },
              },
            ],
          },
        ],
      },
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, '.ts', '.tsx'],
      },
    }
  },
}
