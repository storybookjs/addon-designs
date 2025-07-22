/** @jsx jsx */
import { FC, useMemo } from "react";
import { jsx } from "storybook/theming";

import { IFrame } from "./IFrame";

import { FigmaConfig, IFrameConfigBase } from "../../config";

export const figmaURLPattern =
  /https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

export const isFigmaURL = (url: string) => figmaURLPattern.test(url);

interface Props {
  config: FigmaConfig;
}

export const Figma: FC<Props> = ({ config }) => {
  const iframeConfig = useMemo<IFrameConfigBase>(() => {
    const isValid = isFigmaURL(config.url);

    if (!isValid) {
      console.warn(
        "[storybook-addon-designs] " +
          "The URL you specified is not valid Figma URL.\n" +
          "The addon fallbacks to normal iframe mode." +
          "For more detail, please check <https://www.figma.com/developers/embed>.",
      );
      return config;
    }

    const url = createEmbedURL(
      config.url,
      config.embedHost || location.hostname,
    );

    return {
      url,
      allowFullscreen: config.allowFullscreen,
    };
  }, [config.url, config.allowFullscreen, config.embedHost]);

  return <IFrame defer config={iframeConfig} />;
};

function createEmbedURL(encodedURL: string, embedHost: string) {
  const url = new URL(encodedURL);
  url.hostname = url.hostname.replace(/^www\./, "embed.");
  url.searchParams.delete("embed_origin");
  url.searchParams.set("embed-host", embedHost);
  for (const [key, value] of url.searchParams) {
    url.searchParams.delete(key);
    url.searchParams.set(key.replace(/_/g, "-"), value);
  }
  return url.href;
}
