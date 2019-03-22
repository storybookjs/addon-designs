module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.pdf$/,
    loader: 'file-loader'
  })

  return config
}
