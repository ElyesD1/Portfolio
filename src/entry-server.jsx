import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import i18n from './i18n'
import App from './App.jsx'

// Build-time prerender entry: renders the full document (English) so the
// deployed index.html carries real content for ATS parsers, link previews,
// and AI crawlers. The browser bundle re-renders on top of it.
export async function render() {
  await i18n.changeLanguage('en')
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
