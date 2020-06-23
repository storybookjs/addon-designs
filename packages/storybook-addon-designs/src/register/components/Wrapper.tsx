/** @jsx jsx */
import { Fragment, SFC } from 'react'
import { jsx } from '@storybook/theming'

import { Link, Placeholder } from '@storybook/components'

import { Config } from '../../config'

import { Figma } from './Figma'
import { IFrame } from './IFrame'
import { ImagePreview } from './Image'
import { LinkPanel } from './LinkPanel'
import { Pdf } from './Pdf'
import { Tab, Tabs } from './Tabs'

interface Props {
  config?: Config | Config[]
}

export const Wrapper: SFC<Props> = ({ config }) => {
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
            content: <ImagePreview config={cfg} />
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
    return <div>{tabs[0].content}</div>
  }

  return <Tabs tabs={tabs} />
}

export default Wrapper
