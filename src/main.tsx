import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from 'styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
