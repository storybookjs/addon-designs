/** @jsx jsx */
import { SFC } from 'react'
import { css, jsx } from '@storybook/theming'

import { Document, Page } from 'react-pdf/dist/entry.webpack'

import { PdfConfig } from '../../config'

interface Props {
  config: PdfConfig
}

export const Pdf: SFC<Props> = ({ config }) => (
  <Document css={$iframe} file={config.url}>
    <Page pageNumber={1} />
  </Document>
)

export default Pdf

// NOTE: height:99% is to prevent panel scrolling
const $iframe = css`
  width: 100%;
  height: 99%;
  border: none;
`
