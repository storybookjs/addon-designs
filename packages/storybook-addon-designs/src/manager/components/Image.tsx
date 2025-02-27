/** @jsx jsx */
import { Fragment, useMemo, CSSProperties, FC } from "react";
import { css, jsx } from "storybook/internal/theming";

import { FlexBar, Separator } from "storybook/internal/components";

import { Pan } from "./Pan";
import { ZoomButtons } from "./ZoomButtons";

import { ImageConfig } from "../../config";

import { useZoom } from "./hooks/useZoom";

interface Props {
  config: ImageConfig;
}

export const ImagePreview: FC<Props> = ({ config }) => {
  const zoom = useZoom(config.scale || 1, [config.scale]);

  const imageStyles = useMemo<CSSProperties>(
    () => ({
      transform: `scale(${zoom.scale})`,
    }),
    [zoom.scale],
  );

  return (
    <div css={$container}>
      <FlexBar border>
        <Fragment key="left">
          <p>
            <b>Image</b>
          </p>
          <Separator />
          <ZoomButtons
            onReset={zoom.resetZoom}
            onZoomIn={zoom.zoomIn}
            onZoomOut={zoom.zoomOut}
          />
        </Fragment>
      </FlexBar>
      <Pan css={$preview} defaultValue={config.offset}>
        <img css={$image} src={config.url} style={imageStyles} />
      </Pan>
    </div>
  );
};

export default ImagePreview;

const $container = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const $preview = css`
  flex-grow: 1;
`;

const $image = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`;
