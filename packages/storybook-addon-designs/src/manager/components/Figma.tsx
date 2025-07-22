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

  if (url.hostname.startsWith("www")) {
    url.hostname = "embed" + url.hostname.slice(3);
  }

  const params = new URLSearchParams(url.search);
  params.set("embed-host", embedHost);
  params.delete("embed_origin");

  const newParams = new URLSearchParams();
  for (const [key, value] of params) {
    // migrating keys from figma's embed kit v1 to v2
    newParams.append(key.replace(/_/g, "-"), value);
  }

  url.search = newParams.toString();
  return url.toString();
}
