/** @jsx jsx */
import { FC, ReactNode, useEffect, useState } from "react";
import { css, jsx } from "@storybook/theming";

import { Placeholder } from "storybook/internal/components";

import { IFrameConfigBase } from "../../config";

interface Props {
  config: IFrameConfigBase;

  /**
   * Whether to defer loading iframe contents
   * @default false
   */
  defer?: boolean;
}

export const IFrame: FC<Props> = ({ config, defer = false }) => {
  const [url, setUrl] = useState(defer ? undefined : config.url);
  const [loaded, setLoaded] = useState(false);

  // Defer loading iframe URL.
  // Some sites (e.g. Figma) detects Fullscreen API capability on
  // initial load. This is quite common implementation. But in our usage,
  // it seems that React hold the created <iframe> element when update,
  // and it causes "outdated Fullscreen capability" problem.
  // This might be a browser bug that "`fullscreenEnabled` property does not
  // updated" but I'm not sure what the correct behavior (I couldn't see the
  // statement in the Fulscreen API spec).
  // This side-effect delays the loading of an iframe contents by one frame to
  // make sure the contents gets updated attributes.
  // https://github.com/storybookjs/addon-designs/issues/77
  useEffect(() => {
    if (!defer) {
      return;
    }

    const handle = requestAnimationFrame(() => {
      setUrl(config.url);
    });

    return () => cancelAnimationFrame(handle);
  }, [defer, config.url]);

  useEffect(() => {
    setLoaded(false);
  }, [url]);

  return (
    <div css={$container}>
      {!loaded && (
        // @ts-expect-error: @types resolution is completely broken probably due to migration to npm workspace
        <Placeholder css={$loading}>Loading...</Placeholder>
      )}
      <iframe
        css={$iframe}
        src={url}
        allowFullScreen={config.allowFullscreen}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default IFrame;

const $container = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`;

const $loading = css`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const $iframe = css`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`;
