export const managerEntries = (entries = [], options: { renderTarget?: 'tab' | 'panel'} = {}) => {
  return [
    ...entries,
    options.renderTarget === "tab"
    ? require.resolve("./register-tab.mjs")
    : require.resolve("./register-panel.mjs"),
  ];
};
