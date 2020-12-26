/** @jsx jsx */
import { CSSProperties, FC, useContext, useState } from 'react'
import { DocsContext } from '@storybook/addon-docs/blocks'
import { ActionBar, Placeholder } from '@storybook/components'
import * as Html from '@storybook/components/html'
import { jsx, styled } from '@storybook/theming'

import { Figma as FigmaInternal } from './register/components/Figma'
import { IFrame as IFrameInternal } from './register/components/IFrame'
import { ImagePreview } from './register/components/Image'
import { Wrapper as WrapperInternal } from './register/components/Wrapper'

import * as config from './config'
import { ParameterName } from './addon'

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
  /**
   * **Doc Block Props**
   *
   * A `class` prop passed down to embed wrapper.
   */
  className?: string
  /**
   * **Doc Block Props**
   *
   * A `style` passed down to embed wrapper.
   */
  style?: CSSProperties

  /**
   * **Doc Block Props**
   *
   * Height of the block. Numbers will be converted into pixels.
   * Relative value (%) is based on width of the block.
   */
  height?: string | number

  /**
   * **Doc Block Props**
   *
   * Whether to allow the block to toggle collapse/expand.
   * @default true
   */
  collapsable?: boolean

  /**
   * **Doc Block Props**
   *
   * Render the block with collapsed initially?
   * Available when `collapsable` is set to `true`.
   * @default false
   */
  defaultCollapsed?: boolean

  /**
   * **Doc Block Props**
   *
   * Placeholder text shown when the block is collapsed.
   * Default value differs by a type of the block (e.g. "Design (Figma)").
   */
  placeholder?: string

  /**
   * **Doc Block Props**
   *
   * Whether to show an "Open in new tab" button.
   * @default true
   */
  showLink?: boolean
}

export const DocBlockBase: FC<BlocksCommonProps> = ({
  children,
  collapsable = true,
  defaultCollapsed = false,
  placeholder,
  showLink = true,
  ...rest
}) => {
  const [collapsed, setCollapsed] = useState(!!defaultCollapsed)

  const showOpenInNewTab = showLink && 'url' in rest

  return (
    <Html.ResetWrapper>
      <Wrapper collapsed={collapsable && collapsed} {...rest}>
        {collapsable && collapsed ? (
          <CollapsedText>{placeholder}</CollapsedText>
        ) : (
          children
        )}
        <ActionBar
          actionItems={[
            collapsable && {
              title: collapsed ? 'Show' : 'Hide',
              onClick: () => setCollapsed((v) => !v),
            },
            showOpenInNewTab && {
              title: 'Open in new tab',
              onClick: () => window.open((rest as any).url, '_blank'),
            },
          ].filter(Boolean)}
        />
      </Wrapper>
    </Html.ResetWrapper>
  )
}

export const Figma: FC<
  Omit<config.FigmaConfig, 'type'> & BlocksCommonProps
> = ({ placeholder, ...props }) => (
  <DocBlockBase placeholder={placeholder ?? 'Design (Figma)'} {...props}>
    <FigmaInternal config={{ type: 'figma', ...props }} />
  </DocBlockBase>
)

export const IFrame: FC<
  Omit<config.IFrameConfig, 'type'> & BlocksCommonProps
> = ({ placeholder, ...props }) => (
  <DocBlockBase placeholder={placeholder ?? 'Design (iframe)'} {...props}>
    <IFrameInternal config={props} />
  </DocBlockBase>
)

// Image would do shadowing the native variable (Image constructor, which creates
// HTMLImageElement), but I think it doesn't matter since there is less chance to
// use Image constructor in MDX.
export const Image: FC<
  Omit<config.ImageConfig, 'type'> & BlocksCommonProps
> = ({ placeholder, ...props }) => (
  <DocBlockBase placeholder={placeholder ?? 'Design (Image)'} {...props}>
    <ImagePreview config={{ type: 'image', ...props }} />
  </DocBlockBase>
)

const AbsoluteLocater = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: auto;
`

export interface DesignProps {
  /**
   * An ID of the story that has `design` parameter to use for rendering.
   */
  storyId: string
}

export const Design: FC<DesignProps & Omit<BlocksCommonProps, 'showLink'>> = ({
  storyId,
  placeholder,
  ...rest
}) => {
  const { storyStore } = useContext(DocsContext)

  const story = storyStore?.fromId(storyId)

  return (
    <DocBlockBase placeholder={placeholder ?? 'Design'} {...rest}>
      <AbsoluteLocater>
        <WrapperInternal config={story?.parameters?.[ParameterName]} />
      </AbsoluteLocater>
    </DocBlockBase>
  )
}
