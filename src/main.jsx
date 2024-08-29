import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App state={store.getState()} dispatch={store.dispatch}/>
  </StrictMode>,
)
