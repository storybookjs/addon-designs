declare module '!!file-loader!*' {
  const path: string
  export default path
}

// TODO: Remove these Storybook defs after SB@6 stable was released
declare module '@storybook/addon-docs/blocks' {
  import { Context } from 'react'
  import { StoryStore } from '@storybook/client-api'

  interface ContextValue {
    storyStore?: StoryStore
  }

  export const DocsContext: Context<ContextValue>
}

declare module '@storybook/components' {
  import { ComponentType } from 'react'

  type C = ComponentType<any>

  export const Badge: C
  export const Link: C
  export const DocumentFormatting: C
  export const SyntaxHighlighter: C
  export const ActionBar: C
  export const Spaced: C
  export const ScrollArea: C
  export const Placeholder: C
  export const Button: C
  export const Form: {
    Field: C
    Input: C
    Select: C
    Textarea: C
    Button: C
  }
  export const WithTooltip: C
  export const TooltipMessage: C
  export const TooltipNote: C
  export const TooltipLinkList: C
  export const Tabs: C
  export const TabsState: C
  export const TabBar: C
  export const TabWrapper: C
  export const IconButton: C
  export const TabButton: C
  export const Separator: C
  export const Bar: C
  export const FlexBar: C
  export const Icons: C
  export const StorybookLogo: C
  export const StorybookIcon: C
}
