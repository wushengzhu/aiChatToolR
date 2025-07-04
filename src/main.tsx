import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/globals.scss"
import { Home } from '@/pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
