/** @jsx jsx */
import { FC } from "react";
import { css, jsx } from "@storybook/theming";

import { Link } from "@storybook/components";

import { LinkConfig } from "../../config";

interface Props {
  config: LinkConfig;
}

export const LinkPanel: FC<Props> = ({ config }) => (
  <div css={$container}>
    <Link
      cancel={false}
      href={config.url}
      target={config.target ?? "_blank"}
      rel={config.rel ?? "noopener"}
      withArrow={config.showArrow ?? true}
    >
      {config.label || config.url}
    </Link>
  </div>
);

export default LinkPanel;

const $container = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
