import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Media from './Media.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Media />
  </StrictMode>,
)
