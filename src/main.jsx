import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Prevent FOUC by showing content after React mounts
const rootElement = document.getElementById('root');
rootElement.classList.add('loaded');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
