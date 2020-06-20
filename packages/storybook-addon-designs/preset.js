module.exports = {
  managerEntries(entries = [], options = {}) {
    return [
      ...entries,
      options.renderTarget === 'tab'
        ? require.resolve('./register-tab')
        : require.resolve('./register')
    ]
  }
}
