import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Deva from './Deva.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deva />
  </StrictMode>,
)
