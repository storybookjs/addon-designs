/** @jsx jsx */
import { Fragment, useCallback, ComponentPropsWithoutRef, SFC } from 'react'
import { css, jsx, Theme } from '@storybook/theming'

import {
  FlexBar,
  IconButton,
  Icons,
  Placeholder,
  Separator
} from '@storybook/components'

import { Document, Page } from 'react-pdf/dist/entry.webpack'

import { Pan } from './Pan'

import { PdfConfig } from '../../config'

import { usePage } from './hooks/usePage'
import { useZoom } from './hooks/useZoom'

interface Props {
  config: PdfConfig
}

type OnLoadSuccess = NonNullable<
  ComponentPropsWithoutRef<typeof Document>['onLoadSuccess']
>

const loadingMessage = <Placeholder>Loading PDF...</Placeholder>

export const Pdf: SFC<Props> = ({ config }) => {
  const page = usePage(config.page)

  const onLoadPdf = useCallback<OnLoadSuccess>(
    doc => {
      page.init(doc.numPages)
    },
    [page.init]
  )

  const { scale, zoomIn, zoomOut, resetZoom } = useZoom(config.scale || 1, [
    config.scale
  ])

  return (
    <div css={$container}>
      <FlexBar border>
        <Fragment key="left">
          <p>
            <b>PDF</b>
          </p>
          <Separator />
          <IconButton onClick={zoomIn}>
            <Icons icon="zoom" />
          </IconButton>
          <IconButton onClick={zoomOut}>
            <Icons icon="zoomout" />
          </IconButton>
          <IconButton onClick={resetZoom}>
            <Icons icon="zoomreset" />
          </IconButton>
          <Separator />
          <IconButton
            css={$disabled}
            onClick={page.prev}
            disabled={page.isFirst}
          >
            <Icons icon="arrowleft" />
          </IconButton>
          <div css={$pageIndicator}>
            {page.current} / {page.total}
          </div>
          <IconButton
            css={$disabled}
            onClick={page.next}
            disabled={page.isLast}
          >
            <Icons icon="arrowright" />
          </IconButton>
        </Fragment>
      </FlexBar>
      <Pan css={$pdf} defaultValue={config.offset}>
        <Document
          file={config.url}
          loading={loadingMessage}
          onLoadSuccess={onLoadPdf}
        >
          <Page
            css={$page}
            loading={loadingMessage}
            pageNumber={page.current}
            scale={scale}
          />
        </Document>
      </Pan>
    </div>
  )
}

export default Pdf

const $container = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const $disabled = (theme: Theme) => css`
  &[disabled] {
    color: ${theme.color.medium};
    cursor: not-allowed;
  }
`

const $pdf = css`
  flex-grow: 1;
`

const $page = css`
  position: absolute !important;
  top: 50%;
  left: 50%;
  display: inline-block;

  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  transform: translate(-50%, -50%);
`

const $pageIndicator = css`
  display: flex;
  align-items: center;
`
