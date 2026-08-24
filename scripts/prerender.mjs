// Injects the server-rendered document into dist/index.html after both
// builds finish (see the "build" script). Runs in plain Node — no headless
// browser — so it works identically on Vercel.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const indexPath = path.join(root, 'dist', 'index.html')

const { render } = await import(path.join(root, 'dist-ssr', 'entry-server.js'))
const appHtml = await render()

const template = await readFile(indexPath, 'utf8')
const marker = '<div id="root">'
if (!template.includes(marker)) {
  throw new Error('prerender: <div id="root"> not found in dist/index.html')
}

// __PRERENDERED__ tells the client bundle to skip the loading screen —
// real content is already on screen when React mounts.
const html = template.replace(
  marker,
  `<script>window.__PRERENDERED__=true</script>${marker}${appHtml}`,
)

await writeFile(indexPath, html)
await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true })

const kb = (Buffer.byteLength(appHtml, 'utf8') / 1024).toFixed(1)
console.log(`prerender: injected ${kb} KB of static HTML into dist/index.html`)
