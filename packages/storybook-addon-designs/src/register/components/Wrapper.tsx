/** @jsx jsx */
import { SFC, useEffect, useState } from 'react'
import { jsx } from '@storybook/theming'
import addons from '@storybook/addons'
import { STORY_CHANGED } from '@storybook/core-events'

import { Config } from '../../config'
import { Events } from '../../addon'

import { Figma } from './Figma'
import { IFrame } from './IFrame'
import { Pdf } from './Pdf'

interface Props {
  channel: ReturnType<typeof addons['getChannel']>

  api: any

  active: boolean
}

export const Wrapper: SFC<Props> = ({ active, api, channel }) => {
  const [config, setConfig] = useState<Config>()
  const [storyId, changeStory] = useState<string>()

  useEffect(() => {
    const onStoryChanged = (id: string) => {
      changeStory(id)

      const cfg = api.getParameters(id, 'design')

      if (cfg !== config) {
        setConfig(cfg)
      }
    }

    channel.on(Events.UpdateConfig, setConfig)
    channel.on(STORY_CHANGED, onStoryChanged)

    return () => {
      channel.removeListener(Events.UpdateConfig, setConfig)
      channel.removeListener(STORY_CHANGED, onStoryChanged)
    }
  }, [])

  if (!active || !config) {
    return null
  }

  switch (config.type) {
    case 'iframe':
      return <IFrame key={storyId} config={config} />
    case 'figma':
      return <Figma key={storyId} config={config} />
    case 'pdf':
      return <Pdf key={storyId} config={config} />
  }

  return null
}

export default Wrapper
