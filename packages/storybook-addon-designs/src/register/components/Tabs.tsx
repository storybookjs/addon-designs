/** @jsx jsx */
import { FC, ReactNode, useState } from 'react'
import { jsx } from '@storybook/theming'

import { Tabs as SbTabs } from '@storybook/components'

export interface Tab {
  id: string
  name: string
  content: ReactNode
  offscreen: boolean
}

export interface TabsProps {
  tabs: readonly Tab[]
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0].id)

  return (
    <SbTabs absolute selected={selected} actions={{ onSelect: setSelected }}>
      {tabs.map(tab => (
        <div key={tab.id} id={tab.id} title={tab.name}>
          {tab.offscreen || selected === tab.id ? tab.content : null}
        </div>
      ))}
    </SbTabs>
  )
}
