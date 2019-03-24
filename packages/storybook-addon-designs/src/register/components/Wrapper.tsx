/** @jsx jsx */
import { Fragment, SFC, useEffect, useState } from 'react'
import { jsx } from '@storybook/theming'
import addons from '@storybook/addons'
import { STORY_CHANGED } from '@storybook/core-events'

import { Link, Placeholder } from '@storybook/components'

import { Config } from '../../config'
import { Events, ParameterName } from '../../addon'

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

      const cfg = api.getParameters(id, ParameterName)

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

  if (!active) {
    return null
  }

  if (!config) {
    return (
      <Placeholder>
        <Fragment>No designs found</Fragment>
        <Fragment>
          Learn how to{' '}
          <Link
            href="https://github.com/pocka/storybook-addon-designs#usage"
            target="_blank"
            rel="noopener"
            withArrow
            cancel={false}
          >
            display design preview for the story
          </Link>
        </Fragment>
      </Placeholder>
    )
  }

  switch (config.type) {
    case 'iframe':
      return <IFrame key={storyId} config={config} />
    case 'figma':
      return <Figma key={storyId} config={config} />
    case 'pdf':
      return <Pdf key={storyId} config={config} />
  }

  return (
    <Placeholder>
      <Fragment>Invalid config type</Fragment>
      <Fragment>
        Config type you set is not supported. Please choose one from{' '}
        <Link
          href="https://github.com/pocka/storybook-addon-designs#available-types"
          target="_blank"
          rel="noopener"
          withArrow
          cancel={false}
        >
          available config types
        </Link>
      </Fragment>
    </Placeholder>
  )
}

export default Wrapper
