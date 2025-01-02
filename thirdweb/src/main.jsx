import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Hen from './Hen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hen name="water" />
  </StrictMode>,
)
