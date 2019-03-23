declare module '!!file-loader!*' {
  const path: string
  export default path
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

declare module 'react-pdf/dist/entry.webpack' {
  import { ComponentType, ReactNode, Ref } from 'react'
  import {
    PDFAnnotationData,
    PDFDocumentProxy,
    PDFPageProxy,
    PDFRenderTextLayer,
    PDFTreeNode
  } from 'pdfjs-dist'

  export const pdfjs: any

  export const Document: ComponentType<{
    className?: string | string[]
    error?: ReactNode
    externalLinkTarget?: string
    file:
      | string
      | File
      | {
          url?: string
          data?: Uint8Array
          httpHeaders?: {
            [key: string]: string
          }
          withCredentials?: boolean
        }
    inputRef?: Ref<HTMLDivElement>
    loading?: ReactNode
    noData?: ReactNode
    onItemClick?(ev: { pageNumber: number }): any
    onLoadError?(err: Error): any
    onLoadSuccess?(pdf: PDFDocumentProxy): any
    onPassword?(cb: (pw: string) => any): any
    onSourceError?(err: Error): any
    onSourceSuccess?(): any
    options?: any
    rotate?: number
  }>

  export const Page: ComponentType<{
    className?: string | string[]
    customTextRenderer?: ComponentType<any>
    error?: ReactNode
    height?: number
    inputRef?: Ref<HTMLDivElement>
    loading?: ReactNode
    noData?: ReactNode
    onLoadError?(err: Error): any
    onLoadProgress?(p: { loaded: number; total: number }): any
    onLoadSuccess?(page: PDFPageProxy): any
    onRenderError?(err: Error): any
    onRenderSuccess?(): any
    onGetAnnotationsSuccess?(annotations: ReadonlyArray<PDFAnnotationData>): any
    onGetAnnotationsError?(err: Error): any
    onGetTextSuccess?(items: ReadonlyArray<PDFRenderTextLayer>): any
    onGetTextError?(err: Error): any
    pageIndex?: number
    pageNumber?: number
    renderAnnotationLayer?: boolean
    renderInteractiveForms?: boolean
    renderMode?: 'canvas' | 'svg' | 'none'
    renderTextLayer?: boolean
    rotate?: number
    scale?: number
    width?: number
  }>

  export const Outline: ComponentType<{
    className?: string | string[]
    onItemClick?(page: PDFPageProxy): any
    onLoadError?(err: Error): any
    onLoadSuccess?(): any
    onParseError?(err: Error): any
    onParseSuccess?(ev: { outline: ReadonlyArray<PDFTreeNode> }): any
  }>
}
