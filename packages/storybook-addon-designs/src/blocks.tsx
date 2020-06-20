/** @jsx jsx */
import { CSSProperties, FC, useState } from 'react'
import { ActionBar, Placeholder } from '@storybook/components'
import * as Html from '@storybook/components/html'
import { jsx, styled } from '@storybook/theming'

import { Figma as FigmaInternal } from './register/components/Figma'
import { IFrame as IFrameInternal } from './register/components/IFrame'

import * as config from './config'

const Wrapper = styled.div<BlocksCommonProps & { collapsed: boolean }>(
  ({ theme, height = '60%', collapsed }) => `
  position: relative;
  width: 100%;
  height: 0;
  padding: 0;
  padding-top: ${
    collapsed ? '3em' : typeof height == 'string' ? height : height + 'px'
  };
  margin: 25px 0 40px;
  border: 1px solid ${theme.appBorderColor};

  border-radius: ${theme.appBorderRadius}px;
  box-shadow:
    ${
      theme.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0'
    };
`
)

const CollapsedText = styled(Placeholder)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`

export interface BlocksCommonProps {
  className?: string
  style?: CSSProperties

  height?: string | number

  collapsable?: boolean
  defaultCollapsed?: boolean
  placeholder?: string
}

const DocBlockBase: FC<BlocksCommonProps> = ({
  children,
  collapsable,
  defaultCollapsed,
  placeholder = 'Design spec (collapsed)',
  ...rest
}) => {
  const [collapsed, setCollapsed] = useState(!!defaultCollapsed)

  return (
    <Html.ResetWrapper>
      <Wrapper collapsed={collapsed} {...rest}>
        {collapsed ? <CollapsedText>{placeholder}</CollapsedText> : children}
        {collapsable && (
          <ActionBar
            actionItems={[
              {
                title: collapsed ? 'Show' : 'Hide',
                onClick: () => setCollapsed((v) => !v),
              },
              'url' in rest && {
                title: 'Open in new tab',
                onClick: () => window.open((rest as any).url, '_blank'),
              },
            ]}
          />
        )}
      </Wrapper>
    </Html.ResetWrapper>
  )
}

export const Figma: FC<Omit<config.FigmaConfig, 'type'> & BlocksCommonProps> = (
  props
) => (
  <DocBlockBase {...props}>
    <FigmaInternal config={{ type: 'figma', ...props }} />
  </DocBlockBase>
)

export const IFrame: FC<
  Omit<config.IFrameConfig, 'type'> & BlocksCommonProps
> = (props) => (
  <DocBlockBase {...props}>
    <IFrameInternal config={props} />
  </DocBlockBase>
)
