import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { UserProvider } from './context/UserContext.tsx'
import { TooltipProvider } from './components/ui/tooltip.tsx'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <UserProvider>
    <TooltipProvider>
      <App />
      <Toaster />
    </TooltipProvider>
    </UserProvider>
    </ThemeProvider>
  </StrictMode>,
)
