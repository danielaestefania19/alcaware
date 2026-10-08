// Entrada del pre-render: nunca pasa por fast refresh.
/* eslint-disable react-refresh/only-export-components */
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { StrictMode } from 'react'
import { PassThrough } from 'node:stream'
import i18n from './i18n'
import { langFromPath } from './i18n/routes'
import App from './App'

export { renderHeadTags, renderSitemap } from './seo'
export { ALL_PATHS } from './i18n/routes'

export function render(url: string): Promise<string> {
  i18n.changeLanguage(langFromPath(url))

  return new Promise((resolve, reject) => {
    let html = ''
    const stream = new PassThrough()
    stream.on('data', (chunk) => {
      html += chunk
    })
    stream.on('end', () => resolve(html))
    stream.on('error', reject)

    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>,
      {
        onAllReady() {
          pipe(stream)
        },
        onError(err) {
          reject(err)
        },
      }
    )
  })
}
