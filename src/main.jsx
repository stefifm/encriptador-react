import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CifradoProvider } from './Context/Cifrado.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CifradoProvider>
      <App />
    </CifradoProvider>
  </React.StrictMode>
)
