/** @jsx jsx */
import { Fragment, FC } from 'react'
import { jsx } from '@storybook/theming'
import { Placeholder } from '@storybook/components'

export const Loading: FC = () => {
  return (
    <Placeholder>
      <Fragment>Loading...</Fragment>
    </Placeholder>
  )
}
