/** @jsx jsx */
import {
  useEffect,
  useMemo,
  useState,
  CSSProperties,
  FC,
  ReactNode,
} from "react";
import { css, jsx } from "storybook/internal/theming";

import { usePan, Point2D } from "./hooks/usePan";

interface Props {
  children: ReactNode;

  className?: string;
  style?: CSSProperties;

  defaultValue?: Point2D;

  value?: Point2D;

  onChange?(delta: Point2D): any;
}

export const Pan: FC<Props> = ({
  children,
  className,
  style,
  defaultValue,
  value,
  onChange,
}) => {
  const [offset, move] = useState<Point2D>([0, 0]);

  useEffect(() => {
    if (defaultValue) {
      move(defaultValue);
    } else {
      move(value || [0, 0]);
    }
  }, [defaultValue]);

  const panHandlers = usePan(
    (delta) => {
      if (onChange) {
        onChange(delta);
      }

      move((prev) => [prev[0] + delta[0], prev[1] + delta[1]]);
    },
    [move, onChange],
  );

  const transform = useMemo<CSSProperties>(() => {
    const vec = value || offset;

    return {
      transform: `translate(${vec[0]}px, ${vec[1]}px)`,
    };
  }, [value, offset]);

  return (
    <div css={$container} className={className} style={style} {...panHandlers}>
      <div css={$transformLayer} style={transform}>
        {children}
      </div>
    </div>
  );
};

export default Pan;

const $container = css`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`;

const $transformLayer = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
