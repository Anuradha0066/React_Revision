import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Context from './Context.jsx'
let Hello=["xyz ","abc ","lmn"]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Context.Provider value={Hello }>
    <App />
    </Context.Provider>
    </BrowserRouter>
  </StrictMode>
)
