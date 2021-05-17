/** @jsx jsx */
import type {
  FileResponse,
  FileNodesResponse,
  FileImageResponse,
  Node,
} from 'figma-js'
import { FC, Fragment, useEffect, useMemo, useState } from 'react'
import {
  FigspecFileViewer,
  FigspecFileViewerProps,
  FigspecFrameViewer,
  FigspecFrameViewerProps,
} from '@figspec/react'
import { Placeholder } from '@storybook/components'
import { css, jsx } from '@storybook/theming'

import { FigspecConfig } from '../../config'

import { figmaURLPattern } from './Figma'

const fullscreen = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

type RenderItem =
  | {
      type: 'file'
      props: Pick<FigspecFileViewerProps, 'documentNode' | 'renderedImages' | 'link'>
    }
  | {
      type: 'frame'
      props: Pick<FigspecFrameViewerProps, 'nodes' | 'renderedImage' | 'link'>
    }

type Remote<T, E = Error> =
  | {
      state: 'fetched'
      value: T
    }
  | {
      state: 'failed'
      error: E
    }
  | {
      state: 'loading'
    }

function unwrapJson(res: Response) {
  return res.status !== 200 ? Promise.reject(res.statusText) : res.json()
}

/**
 * Safely get Figma API access token.
 */
function getAccessToken(cfg: FigspecConfig): string | null {
  if (cfg.accessToken) {
    return cfg.accessToken
  }

  try {
    return process.env.STORYBOOK_FIGMA_ACCESS_TOKEN ?? null
  } catch (err) {
    // The only case here is no DefinePlugin entry for `process.env` nor
    // `process.env.STORYBOOK_FIGMA_ACCESS_TOKEN`. We can safely ignore this.
    return null
  }
}

interface Props {
  config: FigspecConfig
}

export const Figspec: FC<Props> = ({ config }) => {
  const [state, setState] = useState<Remote<RenderItem, string>>({
    state: 'loading',
  })

  const fetchDetails = async (signal: AbortSignal) => {
    setState({ state: 'loading' })

    try {
      const match = config.url.match(figmaURLPattern)

      if (!match) {
        throw new Error(config.url + ' is not a valid Figma URL.')
      }

      const [, , , fileKey] = match

      const url = new URL(config.url)

      const nodeId = url.searchParams.get('node-id')

      const accessToken = getAccessToken(config)

      if (!accessToken) {
        throw new Error('Personal Access Token is required.')
      }

      const headers = {
        'X-FIGMA-TOKEN': accessToken,
      }

      const nodeUrl = new URL(`https://api.figma.com/v1/files/${fileKey}`)
      const imageUrl = new URL(`https://api.figma.com/v1/images/${fileKey}`)

      imageUrl.searchParams.set('format', 'svg')

      if (!nodeId) {
        const documentNode: FileResponse = await fetch(nodeUrl.href, {
          headers,
          signal,
        }).then(unwrapJson)

        const frames = listAllFrames(documentNode.document)

        imageUrl.searchParams.set(
          'ids',
          frames.map((frame) => frame.id).join(',')
        )

        const images: FileImageResponse = await fetch(imageUrl.href, {
          headers,
          signal,
        }).then(unwrapJson)

        setState({
          state: 'fetched',
          value: {
            type: 'file',
            props: {
              documentNode,
              renderedImages: images.images,
              link: config.url
            },
          },
        })
        return
      }

      nodeUrl.pathname += '/nodes'

      nodeUrl.searchParams.set('ids', nodeId)
      imageUrl.searchParams.set('ids', nodeId)

      const [nodes, images] = await Promise.all<
        FileNodesResponse,
        FileImageResponse
      >([
        fetch(nodeUrl.href, {
          headers,
          signal,
        }).then(unwrapJson),
        fetch(imageUrl.href, { headers, signal }).then(unwrapJson),
      ])

      setState({
        state: 'fetched',
        value: {
          type: 'frame',
          props: {
            nodes,
            renderedImage: Object.values(images.images)[0],
            link: config.url
          },
        },
      })
    } catch (err) {
      if (err instanceof DOMException && err.code === DOMException.ABORT_ERR) {
        return
      }

      console.error(err)

      setState({
        state: 'failed',
        error: err instanceof Error ? err.message : String(err),
      })
    }
  }

  useEffect(() => {
    let fulfilled = false
    const fulfil = () => {
      fulfilled = true
    }

    const ac = new AbortController()

    fetchDetails(ac.signal).then(fulfil, fulfil)

    return () => {
      if (!fulfilled) {
        ac.abort()
      }
    }
  }, [config.url])

  switch (state.state) {
    case 'loading':
      return (
        <Placeholder>
          <Fragment>Loading Figma file...</Fragment>
        </Placeholder>
      )
    case 'failed':
      return (
        <Placeholder>
          <Fragment>Failed to load Figma file</Fragment>
          <Fragment>{state.error}</Fragment>
        </Placeholder>
      )
    case 'fetched':
      return state.value.type === 'file' ? (
        <FigspecFileViewer css={fullscreen} {...state.value.props} />
      ) : (
        <FigspecFrameViewer css={fullscreen} {...state.value.props} />
      )
  }
}

export default Figspec

function listAllFrames(node: Node): Node[] {
  if ('absoluteBoundingBox' in node) {
    return [node]
  }

  if (!node.children || node.children.length === 0) {
    return []
  }

  return node.children.map(listAllFrames).flat()
}
