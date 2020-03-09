/** @jsx jsx */
import { SFC, useEffect, useMemo } from 'react'
import { jsx } from '@storybook/theming'

import { IFrame } from '../IFrame'
import { LinkPanel } from '../LinkPanel'

import { FigmaConfig } from '../../../config'

import { PublicFile } from './PublicFile'
import { PrivateFile } from './PrivateFile'

const figmaUrlPattern = /https:\/\/(?:[w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*?)?(?:\?node-id=(.+))?$/

const validateCredential = (credential?: FigmaConfig['credential']) => {
  if (!credential) {
    return true
  }

  if ('personalAccessToken' in credential && credential.personalAccessToken) {
    return true
  }

  if (
    'oauthClientId' in credential &&
    credential.oauthClientId &&
    credential.oauthClientSecret
  ) {
    return true
  }

  return false
}

interface Props {
  config: FigmaConfig
}

export const Figma: SFC<Props> = ({ config }) => {
  const isValidUrl = useMemo(() => config.url.match(figmaUrlPattern), [
    config.url
  ])
  const isValidCredential = validateCredential(config.credential)

  // Show a warning message if the given config was invalid.
  useEffect(() => {
    if (!isValidUrl) {
      console.warn(
        '[storybook-addon-designs] ' +
          'The URL you specified is not valid Figma URL.\n' +
          'The addon fallbacks to normal iframe mode.' +
          'For more detail, please check <https://www.figma.com/developers/embed>.'
      )
    }

    if (!isValidCredential) {
      console.warn(
        '[storybook-addon-designs] ' +
          'Given credential object is invalid.' +
          'The addon fallbacks to link mode.\n' +
          'Please specify `personalAccessToken` or `oauthClientId` AND `oauthClientSecret`.'
      )
    }
  }, [isValidUrl, isValidCredential])

  if (!isValidUrl) {
    return <IFrame config={config} />
  }

  if (!isValidCredential) {
    return (
      <LinkPanel
        config={{
          type: 'link',
          url: config.url
        }}
      />
    )
  }

  const [, linkType, fileKey, nodeId] = isValidUrl

  if (linkType === 'file' && nodeId && config.credential) {
    return <PrivateFile config={config} fileKey={fileKey} nodeId={nodeId} />
  }

  return <PublicFile config={config} />
}
