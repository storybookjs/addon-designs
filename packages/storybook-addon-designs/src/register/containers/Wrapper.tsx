/** @jsx jsx */
import { Fragment, SFC, useEffect, useState } from 'react'
import { jsx } from '@storybook/theming'
import addons from '@storybook/addons'
import { STORY_CHANGED } from '@storybook/core-events'

import { Link, Placeholder, TabsState } from '@storybook/components'

import { Config } from '../../config'
import { Events, ParameterName } from '../../addon'

import { Wrapper as Pure } from '../components/Wrapper'

interface Props {
  channel: ReturnType<typeof addons['getChannel']>

  api: any

  active: boolean
}

export const Wrapper: SFC<Props> = ({ active, api, channel }) => {
  const [config, setConfig] = useState<Config | Config[]>()
  const [storyId, changeStory] = useState<string>()

  useEffect(() => {
    const onStoryChanged = (id: string) => {
      changeStory(id)

      const cfg = api.getParameters(id, ParameterName)

      setConfig(prev => (cfg !== prev ? cfg : prev))
    }

    channel.on(Events.UpdateConfig, setConfig)
    channel.on(STORY_CHANGED, onStoryChanged)

    return () => {
      channel.removeListener(Events.UpdateConfig, setConfig)
      channel.removeListener(STORY_CHANGED, onStoryChanged)
    }
  }, [])

  if (!active) {
    return null
  }

  return <Pure key={storyId} config={config} />
}

export default Wrapper
