import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/screens'
import './index.css'
import Navigation from './assets/Components/navigation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
