/** @jsx jsx */
import { Fragment, lazy, Suspense, FC } from "react";
import { jsx } from "@storybook/theming";

import { Link, Placeholder } from "@storybook/components";

import { Config } from "../../config";

import { Figma } from "./Figma";
import { IFrame } from "./IFrame";
import { ImagePreview } from "./Image";
import { LinkPanel } from "./LinkPanel";
import { Sketch } from "./Sketch";
import { Tab, Tabs } from "./Tabs";

const Figspec = lazy(() => import("./Figspec"));

interface Props {
  config?: Config | Config[];
}

export const Wrapper: FC<Props> = ({ config }) => {
  if (!config || ("length" in config && config.length === 0)) {
    return (
      <Placeholder>
        <Fragment>No designs found</Fragment>
        <Fragment>
          Learn how to{" "}
          <Link
            href="https://github.com/storybookjs/addon-designs#3-add-it-to-story"
            target="_blank"
            rel="noopener"
            withArrow
            cancel={false}
          >
            display design preview for the story
          </Link>
        </Fragment>
      </Placeholder>
    );
  }

  const tabs = [...(config instanceof Array ? config : [config])].map<Tab>(
    (cfg) => {
      const meta: Omit<Tab, "content"> = {
        id: JSON.stringify(cfg),
        name:
          cfg.name ||
          (cfg.type as Config["type"] | undefined)?.toUpperCase() ||
          "ERROR",
        offscreen: cfg.offscreen ?? true,
      };

      switch (cfg.type) {
        case "iframe":
          return {
            ...meta,
            content: <IFrame config={cfg} />,
          };
        case "figma":
          return {
            ...meta,
            content: <Figma config={cfg} />,
            offscreen: false,
          };
        case "sketch":
          return {
            ...meta,
            content: <Sketch config={cfg} />,
          };
        case "figspec":
        case "experimental-figspec":
          if (cfg.type === "experimental-figspec") {
            console.warn(
              "[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."
            );
          }

          return {
            ...meta,
            content: (
              <Suspense fallback="Preparing Figspec viewer...">
                <Figspec config={cfg} />
              </Suspense>
            ),
            offscreen: false,
          };
        case "image":
          return {
            ...meta,
            content: <ImagePreview config={cfg} />,
          };
        case "link":
          return {
            ...meta,
            content: <LinkPanel config={cfg} />,
          };
      }

      // FIXME: Link is temporarily set to source code due to "Available config types" section
      //        had been removed from README. We need to add a list to README or docs site.
      //        This is very much user-unfriendly, especially for whom not familier with TypeScript.
      return {
        ...meta,
        content: (
          <Placeholder>
            <Fragment>Invalid config type</Fragment>
            <Fragment>
              Config type you set is not supported. Please choose one from{" "}
              <Link
                href="https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts"
                target="_blank"
                rel="noopener"
                withArrow
                cancel={false}
              >
                available config types
              </Link>
            </Fragment>
          </Placeholder>
        ),
      };
    }
  );

  if (tabs.length === 1) {
    return <div>{tabs[0].content}</div>;
  }

  return <Tabs tabs={tabs} deps={[config]} />;
};

export default Wrapper;
