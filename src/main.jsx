import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { defineConfig } from "vite";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/First-Project-React/"}>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
