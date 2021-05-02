/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@storybook/theming'
import { useParameter, useStorybookState } from '@storybook/api'

import { Config } from '../../config'
import { ParameterName } from '../../addon'

import { Wrapper as Pure } from '../components/Wrapper'

interface Props {
  active: boolean
}

export const Wrapper: FC<Props> = ({ active }) => {
  if (!active) {
    return null
  }

  const state = useStorybookState()
  const config = useParameter(ParameterName) as Config
  return <Pure key={state.storyId} config={config} />
}

export default Wrapper
