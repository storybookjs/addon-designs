/** @jsx jsx */
import { addons, types, useParameter } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import { jsx } from "@storybook/theming";

import { AddonName, PanelName, ParameterName } from "../addon";
import { ErrorBoundary } from "./components/ErrorBoundary";
import type { Config } from "../config";

import { Wrapper } from "./containers/Wrapper";

const DEFAULT_TAB_NAME = "Design";

export default function register(renderTarget: "panel" | "tab") {
  addons.register(AddonName, (api) => {
    const title = function () {
      const param = useParameter<Config | Config[] | undefined>(ParameterName);

      if (!param) {
        return DEFAULT_TAB_NAME;
      }

      // As the addon shows an additional tab panel, it's better not to
      // use any of items' name.
      if (Array.isArray(param)) {
        return param.length > 0
          ? `${DEFAULT_TAB_NAME} (${param.length})`
          : DEFAULT_TAB_NAME;
      }

      return (param.name || DEFAULT_TAB_NAME) + " (1)";
    };

    if (renderTarget === "tab") {
      addons.add(PanelName, {
        title: DEFAULT_TAB_NAME,
        render({ active, key }) {
          if (!active) {
            // NOTE: Return type of render is `ReactElement`, hence returning `null` causes
            //       type error. I'm using `<noscript>` in place of `null`.
            return <noscript key={key} />;
          }

          return (
            <ErrorBoundary key={key}>
              <Wrapper active />
            </ErrorBoundary>
          );
        },
        type: types.TAB,
        paramKey: ParameterName,
        route: ({ storyId }) => `/design/${storyId}`,
        match: ({ viewMode }) => viewMode === "design",
      });
    } else {
      addons.addPanel(PanelName, {
        title,
        paramKey: ParameterName,
        render({ active, key }) {
          return (
            <AddonPanel key={key} active={!!active}>
              <ErrorBoundary>
                <Wrapper active={!!active} />
              </ErrorBoundary>
            </AddonPanel>
          );
        },
      });
    }
  });
}
