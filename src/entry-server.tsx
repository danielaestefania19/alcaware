import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { StrictMode } from 'react'
import { PassThrough } from 'node:stream'
import './i18n'
import App from './App'

export { renderHeadTags } from './seo'

export function render(url: string): Promise<string> {
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
