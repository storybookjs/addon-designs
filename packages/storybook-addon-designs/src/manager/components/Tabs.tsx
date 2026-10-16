/** @jsx jsx */
import { DependencyList, FC, ReactNode, useEffect, useState } from "react";
import { css, jsx } from "storybook/theming";

import { TabsView } from "storybook/internal/components";

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
    <TabsView
      selected={selected}
      onSelectionChange={setSelected}
      panelProps={{ renderAllChildren: true, hasScrollbar: false }}
      tabs={tabs.map((tab) => ({
        id: tab.id,
        title: tab.name,
        children: (
          <div css={$panel}>
            {tab.offscreen || selected === tab.id ? tab.content : null}
          </div>
        ),
      }))}
    />
  );
};

const $panel = css`
  position: relative;
  height: 100%;
`;
