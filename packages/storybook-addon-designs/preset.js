const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  managerEntries(entries = [], options = {}) {
    return [
      ...entries,
      options.renderTarget === 'tab'
        ? require.resolve('./register-tab')
        : require.resolve('./register')
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
