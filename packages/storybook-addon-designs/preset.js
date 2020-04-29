const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  managerEntries(entries = [], options = {}) {
    return [
      ...entries,
      options.target === 'tab'
        ? require.resolve('./register')
        : require.resolve('./register-tab')
    ]
  },
  async webpack(config) {
    return {
      ...config,
      plugins: [
        ...(config.plugins || []),
        new HtmlPlugin({
          inject: false,
          filename: 'addon-designs-oauth.html',
          template: path.resolve(__dirname, './oauth.html')
        })
      ]
    }
  }
}
