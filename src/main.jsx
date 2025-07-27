import {BrowserRouter} from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppThemeContextProvider } from './Contexto/AppThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppThemeContextProvider>

  
      <App />
   

  </AppThemeContextProvider>
  
  </BrowserRouter>
)
