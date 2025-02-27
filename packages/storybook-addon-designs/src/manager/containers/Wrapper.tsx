/** @jsx jsx */
import { FC, useEffect, useState } from "react";
import { jsx } from "storybook/internal/theming";
import { useParameter, useStorybookState } from "storybook/internal/manager-api";

import { Config } from "../../config";
import { ParameterName } from "../../constants";

import { Wrapper as Pure } from "../components/Wrapper";

interface Props {
  active: boolean;
}

export const Wrapper: FC<Props> = ({ active }) => {
  const state = useStorybookState();
  const config = useParameter(ParameterName) as Config;

  // Whether the addon panel has been visible to a user with the config.
  const [onceRevealed, setOnceRevealed] = useState(active);

  // When a user navigates to another story or updates a story parameter,
  // sync `onceRevealed` to `active`.
  useEffect(() => {
    setOnceRevealed(active);
  }, [config]);

  // When a user enters the "Design" tab, mark the addon panel "once revealed".
  useEffect(() => {
    if (active) {
      setOnceRevealed(true);
    }
  }, [active]);

  // If a user has not entered the "Design" tab for the current story yet,
  // do not render panel contents. This makes loading embeds explicit and
  // prevents embedded sites from obtaining viewport (iframe) size behind,
  // which often leads to incorrect measurements.
  if (!onceRevealed) {
    return null;
  }

  return <Pure key={state.storyId} config={config} />;
};

export default Wrapper;
