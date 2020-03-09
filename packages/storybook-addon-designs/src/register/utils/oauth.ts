import * as Cookie from 'js-cookie'
import * as hash from 'object-hash'

export interface OAuthParams {
  authUrl: string
  tokenUrl: string
  scope: string[]

  clientId: string
  clientSecret: string
}

const generateCookieName = (params: OAuthParams) =>
  'storybook-addon-designs.' + hash(params)

/**
 * Get a OAuth2 Access Token saved in a browser.
 */
export function getSavedToken(params: OAuthParams): string | null {
  const key = generateCookieName(params)

  const inCookie = Cookie.get(key)

  return inCookie || null
}

/**
 * Obtain a OAuth2 Access Token from Authorization Server.
 */
export async function getToken(params: OAuthParams): Promise<string> {
  const key = generateCookieName(params)

  const {
    authUrl,
    tokenUrl: tokenUrlBase,
    scope,
    clientSecret,
    clientId
  } = params

  const callbackUri =
    (location.origin + location.pathname)
      .split('/')
      .slice(0, -1)
      .join('/') + '/addon-designs-oauth.html'

  const state = hash(new Date().valueOf())

  // An URL for the authhorization server
  const modalUrl = new URL(authUrl)

  modalUrl.searchParams.set('client_id', clientId)
  modalUrl.searchParams.set('redirect_uri', callbackUri)
  modalUrl.searchParams.set('scope', scope.join(','))
  modalUrl.searchParams.set('state', state)
  modalUrl.searchParams.set('response_type', 'code')

  // Open a modal window pointing authorization URL.
  // We can't use <iframe> because Figma does not allow us to embed their
  // sign-in page.
  const modal = window.open(modalUrl.href, 'Designs addon OAuth modal', 'modal')

  return new Promise((resolve, reject) => {
    const recieveMessage = (ev: MessageEvent) => {
      if (ev.origin !== location.origin) {
        return
      }

      try {
        const data = JSON.parse(ev.data)

        if (data.type !== 'OAUTH_COMPLETE') {
          return
        }

        const { code, state: recievedState } = data.payload

        if (recievedState !== state) {
          console.error(
            '[storybook-addon-designs] ' + 'State does not match. Aborted.'
          )
          return
        }

        const tokenUrl = new URL(tokenUrlBase)

        tokenUrl.searchParams.set('client_id', clientId)
        tokenUrl.searchParams.set('client_secret', clientSecret)
        tokenUrl.searchParams.set('redirect_uri', callbackUri)
        tokenUrl.searchParams.set('code', code)
        tokenUrl.searchParams.set('grant_type', 'authorization_code')

        fetch(tokenUrl.toString(), {
          method: 'POST'
        })
          .then(resp => resp.json())
          .then(resp => {
            // Bake a token cookie that have same lifetime to the token
            Cookie.set(key, resp.access_token, {
              expires: new Date(new Date().getTime() + resp.expires_in * 1000)
            })

            return resp.access_token
          })
          .then(resolve)
      } catch (e) {
        reject(e)
      } finally {
        modal?.close()
        window.removeEventListener('message', recieveMessage)
      }
    }

    window.addEventListener('message', recieveMessage)
  })
}
