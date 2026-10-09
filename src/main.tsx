import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import i18n from './i18n'
import { langFromPath } from './i18n/routes'
import App from './App.tsx'
import { trackContactClicks } from './analytics'

// El idioma lo decide la URL (/en/... es inglés), igual que en el pre-render.
i18n.changeLanguage(langFromPath(window.location.pathname))

trackContactClicks()

const rootElement = document.getElementById('root')!

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (rootElement.innerHTML.trim()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
