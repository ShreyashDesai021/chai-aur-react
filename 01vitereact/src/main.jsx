import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // starts the rendering directly// what is rendering?  
  //<StrictMode> //optional
    <App />
  //</StrictMode>,
)
