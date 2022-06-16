import React from 'react'

// Storybook adds "/?path=" prefix to href anyway and there is no workaround...
const toAbs = (href) => location.origin + href

export const TabLink = ({ tabItem, panelItem }) => {
  if (/^\/tab\//.test(location.pathname)) {
    return React.cloneElement(tabItem, {
      href: toAbs(tabItem.props.href),
    })
  }

  return React.cloneElement(panelItem, {
    href: toAbs(panelItem.props.href),
  })
}
