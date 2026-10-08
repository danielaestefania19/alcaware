import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function prerender() {
  const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
  const { render, renderHeadTags, renderSitemap, ALL_PATHS: routes } = await import('./dist/server/entry-server.js')
  const seoHead = /<!--seo-head-start-->[\s\S]*<!--seo-head-end-->/
  const withHead = (route, appHtml) =>
    template
      .replace('<html lang="es">', `<html lang="${route === '/en' || route.startsWith('/en/') ? 'en' : 'es'}">`)
      .replace(seoHead, () => renderHeadTags(route))
      .replace('<!--app-html-->', () => appHtml)

  for (const route of routes) {
    const appHtml = await render(route)
    const html = withHead(route, appHtml)

    const filePath =
      route === '/'
        ? path.join(__dirname, 'dist/index.html')
        : path.join(__dirname, 'dist', route, 'index.html')

    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(filePath, html)
    console.log(`✓ Pre-rendered: ${route}`)
  }

  fs.writeFileSync(path.join(__dirname, 'dist/sitemap.xml'), renderSitemap())
  console.log('✓ sitemap.xml')

  const notFoundHtml = await render('/ruta-inexistente')
  const notFoundPage = withHead('/ruta-inexistente', notFoundHtml)
  fs.writeFileSync(path.join(__dirname, 'dist/404.html'), notFoundPage)
  console.log('✓ Pre-rendered: /404.html')

  console.log('\nPre-rendering completado.')
}

prerender().catch((err) => {
  console.error('Error en pre-rendering:', err)
  process.exit(1)
})
