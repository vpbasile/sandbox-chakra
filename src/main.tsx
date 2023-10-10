import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import sandboxTheme from './zconfig/theme.ts'
import Fonts from './zconfig/fontConfig.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* https://reactrouter.com/en/main/start/tutorial */}
      <ChakraProvider theme={sandboxTheme}>
        <Fonts />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
