/** @jsx jsx */
import { DependencyList, FC, ReactNode, useEffect, useState } from "react";
import { jsx } from "storybook/internal/theming";

import { Tabs as SbTabs } from "storybook/internal/components";

export interface Tab {
  id: string;
  name: string;
  content: ReactNode;
  offscreen: boolean;
}

export interface TabsProps {
  tabs: readonly Tab[];

  /**
   * Effect trigger for tab initialization. Everytime this dependency list is
   * updated, the selection goes to the first tab.
   */
  deps?: DependencyList;
}

export const Tabs: FC<TabsProps> = ({ tabs, deps = [] }) => {
  const [selected, setSelected] = useState(tabs[0].id);

  useEffect(() => {
    setSelected(tabs[0].id);
  }, deps);

  return (
    <SbTabs absolute selected={selected} actions={{ onSelect: setSelected }}>
      {tabs.map((tab) => (
        <div key={tab.id} id={tab.id} title={tab.name}>
          {tab.offscreen || selected === tab.id ? tab.content : null}
        </div>
      ))}
    </SbTabs>
  );
};
