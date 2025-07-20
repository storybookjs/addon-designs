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

    const embedHost = config.embedHost || location.hostname;
    const url = migrateEmbedURL(
      `https://www.figma.com/embed?embed_host=${embedHost}&url=${config.url}`,
    );

    return {
      url,
      allowFullscreen: config.allowFullscreen,
    };
  }, [config.url, config.allowFullscreen, config.embedHost]);

  return <IFrame defer config={iframeConfig} />;
};

function migrateEmbedURL(embedV1URL: string) {
  // Parse the input URL
  const oldURL = new URL(embedV1URL);
  const params = new URLSearchParams(oldURL.search);

  // Get the value of the 'url' parameter, decode it, and discard it
  let embedURL = decodeURIComponent(params.get("url")!);
  params.delete("url");

  // Convert the subdomain of embedURL from 'www' to 'embed'
  let embedURLObj = new URL(embedURL);
  if (embedURLObj.hostname.startsWith("www")) {
    embedURLObj.hostname = "embed" + embedURLObj.hostname.slice(3);
  }

  // Merge query parameters from embedURLObj into params
  const embedURLParams = new URLSearchParams(embedURLObj.search);
  for (const [key, value] of embedURLParams.entries()) {
    params.append(key, value);
  }

  // Check for the 'embed_origin' parameter, warn if present, and discard it
  if (params.has("embed_origin")) {
    console.warn(
      "embed_origin parameter is present:",
      params.get("embed_origin"),
    );
    params.delete("embed_origin");
  }

  // Construct the new URL using the value of embedURL and remaining query parameters
  const newParams = new URLSearchParams();
  for (const [key, value] of params.entries()) {
    const newKey = key.replace(/_/g, "-");
    newParams.append(newKey, value);
  }

  // Combine the new URL and the new parameters
  embedURLObj.search = newParams.toString();
  return embedURLObj.toString();
}
