/** @jsx jsx */
import { Link, Placeholder } from "storybook/internal/components";
import { jsx } from "storybook/internal/theming";
import { FC, Fragment, ReactNode, useMemo } from "react";

import { SketchConfig, IFrameConfigBase } from "../../config";

import { IFrame } from "./IFrame";

interface ParseSucceeded<T> {
  valid: true;

  data: T;
}

interface ParseFailed {
  valid: false;

  error: ReactNode;
}

type Parser<T> = (url: URL) => ParseSucceeded<T> | ParseFailed;

export const v1UrlParser: Parser<IFrameConfigBase> = (url) => {
  if (url.protocol !== "https:") {
    return {
      valid: false,
      error: (
        <Fragment>
          Expected HTTPS link, received <code>{url.protocol}</code>.
        </Fragment>
      ),
    };
  }

  if (url.hostname !== "www.sketch.com") {
    return {
      valid: false,
      error: (
        <Fragment>
          Expected a hostname <code>www.sketch.com</code>, received{" "}
          <code>{url.hostname}</code>
        </Fragment>
      ),
    };
  }

  const malformedUrlErrorMessage = (
    <Fragment>
      Expected pathname <code>{"/s/<string>/a/<string>"}</code>, received{" "}
      <code>{url.pathname}</code>.
    </Fragment>
  );

  const pathSegments = url.pathname.split("/").slice(1);
  if (pathSegments.length < 4) {
    return {
      valid: false,
      error: malformedUrlErrorMessage,
    };
  }

  if (pathSegments[0] === "embed") {
    return {
      valid: true,
      data: {
        url: url.href,
        offscreen: false,
      },
    };
  }

  const [s, sid, a, aid] = pathSegments;
  if (s !== "s" || !sid || a !== "a" || !aid) {
    return {
      valid: false,
      error: malformedUrlErrorMessage,
    };
  }

  return {
    valid: true,
    data: {
      url: `https://www.sketch.com/embed/s/${sid}/a/${aid}`,
      offscreen: false,
    },
  };
};

interface Props {
  config: SketchConfig;
}

export const Sketch: FC<Props> = ({ config }) => {
  const result = useMemo(() => {
    const parsed = v1UrlParser(new URL(config.url));
    if (!parsed.valid) {
      return parsed;
    }

    return {
      ...parsed,
      data: {
        ...config,
        ...parsed.data,
      },
    };
  }, [config]);

  if (!result.valid) {
    return (
      <Placeholder>
        <Fragment>Invalid Sketch URL</Fragment>
        <Fragment>{result.error}</Fragment>
      </Placeholder>
    );
  }

  return <IFrame defer config={result.data} />;
};
