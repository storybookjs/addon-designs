/** @jsx jsx */
import { SFC, useEffect, useState } from 'react'
import { jsx } from '@storybook/theming'
import addons from '@storybook/addons'

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

  useEffect(() => {
    channel.on(Events.UpdateConfig, setConfig)

    const clearOnStoryCb = api.onStory(() => {
      // Clear panel on story changes
      setConfig(undefined)
    })

    return () => {
      channel.removeListener(Events.UpdateConfig, setConfig)
      clearOnStoryCb()
    }
  }, [])

  if (!active || !config) {
    return null
  }

  switch (config.type) {
    case 'iframe':
      return <IFrame config={config} />
    case 'figma':
      return <Figma config={config} />
    case 'pdf':
      return <Pdf config={config} />
  }

  return null
}

export default Wrapper
