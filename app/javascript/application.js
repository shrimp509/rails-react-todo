import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'

var app = document.getElementById('app')
createRoot(app).render(<App/>)