const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const config = require('./preset')

module.exports = {
  ...config,
  managerEntries(entries = []) {
    return [...entries, require.resolve('./register-tab')]
  }
}
