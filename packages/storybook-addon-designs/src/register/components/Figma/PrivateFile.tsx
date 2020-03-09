/** @jsx jsx */
import { FC, Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { jsx } from '@storybook/theming'
import { Button, Placeholder } from '@storybook/components'

import { Loading } from '../Loading'
import { ImagePreview } from '../Image'
import { Pdf } from '../Pdf'

import { getSavedToken, getToken, OAuthParams } from '../../utils/oauth'

import {
  FigmaConfig,
  FigmaOAuthCredential,
  FigmaPatCredential,
  FigmaApiRenderOptions,
  ImageConfig,
  PdfConfig
} from '../../../config'

interface Props {
  fileKey: string
  nodeId: string

  config: FigmaConfig
}

const defaultOptions: FigmaApiRenderOptions = {
  format: 'svg',
  scale: 1
}

export const PrivateFile: FC<Props> = ({ config, fileKey, nodeId }) => {
  const [imageUri, setImageUri] = useState<string>()

  const decodedNodeId = decodeURIComponent(nodeId)

  const renderOptions = useMemo(
    () => ({
      ...defaultOptions,
      ...config.renderOptions
    }),
    [config.renderOptions]
  )

  const [authHeaders, setAuthHeaders] = useState<
    Record<string, string> | undefined
  >(
    (config.credential as FigmaPatCredential)?.personalAccessToken
      ? {
          'x-figma-token': (config.credential as FigmaPatCredential)
            ?.personalAccessToken
        }
      : void 0
  )

  const oauthParams = useMemo<OAuthParams>(() => {
    const credential = config.credential as FigmaOAuthCredential

    return {
      authUrl: 'https://www.figma.com/oauth',
      tokenUrl: 'https://www.figma.com/api/oauth/token',
      scope: ['file_read'],
      clientId: credential.oauthClientId,
      clientSecret: credential.oauthClientSecret
    }
  }, [config.credential])

  // Restore saved token
  useEffect(() => {
    if (authHeaders) {
      return
    }

    const savedToken = getSavedToken(oauthParams)

    if (savedToken) {
      setAuthHeaders({
        authorization: `Bearer ${savedToken}`
      })
    }
  }, [authHeaders, oauthParams])

  const signIn = useCallback(async () => {
    const token = await getToken(oauthParams)

    setAuthHeaders({
      authorization: `Bearer ${token}`
    })
  }, [oauthParams])

  // Fetch rendered image
  useEffect(() => {
    if (!authHeaders) {
      return
    }

    const url = new URL(`https://api.figma.com/v1/images/${fileKey}`)

    url.searchParams.set('ids', decodedNodeId)
    url.searchParams.set('format', renderOptions.format)
    url.searchParams.set('scale', renderOptions.scale.toString())

    fetch(url.toString(), {
      headers: authHeaders
    })
      .then(resp => resp.json())
      .then(body => {
        setImageUri(body.images[decodedNodeId])
      })
  }, [authHeaders, fileKey, config.renderOptions])

  const innerConfig = useMemo(() => {
    return {
      type: renderOptions.format === 'pdf' ? 'pdf' : 'image',
      url: imageUri ?? ''
    } as ImageConfig & PdfConfig
  }, [imageUri, renderOptions.format])

  if (!authHeaders) {
    return (
      <Placeholder>
        <Fragment>
          <Button primary onClick={signIn}>
            Sign in to Figma
          </Button>
        </Fragment>
      </Placeholder>
    )
  }

  if (!imageUri) {
    return <Loading />
  }

  const Preview = renderOptions.format === 'pdf' ? Pdf : ImagePreview

  return <Preview config={innerConfig} />
}
