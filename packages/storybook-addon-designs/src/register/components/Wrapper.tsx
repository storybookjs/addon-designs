/** @jsx jsx */
import { Fragment, SFC, useEffect, useState } from 'react'
import { jsx } from '@storybook/theming'
import addons from '@storybook/addons'
import { STORY_CHANGED } from '@storybook/core-events'

import { Link, Placeholder, TabsState } from '@storybook/components'

import { Config } from '../../config'
import { Events, ParameterName } from '../../addon'

import { Figma } from './Figma'
import { IFrame } from './IFrame'
import { ImagePreview } from './Image'
import { LinkPanel } from './LinkPanel'
import { Pdf } from './Pdf'
import { Tab, Tabs } from './Tabs'

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

  if (!config || ('length' in config && config.length === 0)) {
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

  const tabs = [...(config instanceof Array ? config : [config])].map<Tab>(
    (cfg, i) => {
      const meta: Omit<Tab, 'content'> = {
        id: `addon-designs-tab--${i}`,
        name: cfg.name || cfg.type.toUpperCase(),
        offscreen: cfg.offscreen ?? true
      }

      switch (cfg.type) {
        case 'iframe':
          return {
            ...meta,
            content: <IFrame config={cfg} />
          }
        case 'figma':
          return {
            ...meta,
            content: <Figma config={cfg} />,
            offscreen: false
          }
        case 'pdf':
          return {
            ...meta,
            content: <Pdf config={cfg} />
          }
        case 'image':
          return {
            ...meta,
            content: <ImagePreview key={storyId} config={cfg} />
          }
        case 'link':
          return {
            ...meta,
            content: <LinkPanel config={cfg} />
          }
      }

      return {
        ...meta,
        content: (
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
    }
  )

  if (tabs.length === 1) {
    return <div key={storyId}>{tabs[0].content}</div>
  }

  return <Tabs key={storyId} tabs={tabs} />
}

export default Wrapper
