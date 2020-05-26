/** @jsx jsx */
import { Fragment, SFC, useEffect, useState } from 'react'
import { jsx } from '@storybook/theming'
import addons from '@storybook/addons'
import { STORY_CHANGED } from '@storybook/core-events'

import { Link, Placeholder, TabsState } from '@storybook/components'

import { Config } from '../../config'
import { Events, PARAM_KEY } from '../../addon'

import { Figma } from './Figma'
import { IFrame } from './IFrame'
import { ImagePreview } from './Image'
import { LinkPanel } from './LinkPanel'
import { Pdf } from './Pdf'

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

      const cfg = api.getParameters(id, PARAM_KEY)

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

  const panels = [...(config instanceof Array ? config : [config])].map<
    [JSX.Element, { id: string; title: string }]
  >((cfg, i) => {
    const meta = {
      id: `addon-designs-tab--${i}`,
      title: cfg.name || cfg.type.toUpperCase()
    }

    switch (cfg.type) {
      case 'iframe':
        return [<IFrame config={cfg} />, meta]
      case 'figma':
        return [<Figma config={cfg} />, meta]
      case 'pdf':
        return [<Pdf config={cfg} />, meta]
      case 'image':
        return [<ImagePreview key={storyId} config={cfg} />, meta]
      case 'link':
        return [<LinkPanel config={cfg} />, meta]
    }

    return [
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
      </Placeholder>,
      meta
    ]
  })

  if (panels.length === 1) {
    return <div key={storyId}>{panels[0][0]}</div>
  }

  return (
    <TabsState key={storyId} absolute={true} initial={panels[0][1].id}>
      {panels.map(([el, meta]) => (
        <div key={meta.id} id={meta.id} title={meta.title}>
          {el}
        </div>
      ))}
    </TabsState>
  )
}

export default Wrapper
