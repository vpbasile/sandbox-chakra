import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Fonts from './z-theming/fontConfig.tsx'
import App from "./App.tsx"
import sandboxTheme from './z-theming/themeSandbox.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      {/* https://reactrouter.com/en/main/start/tutorial */}
      <ChakraProvider theme={sandboxTheme}>
      <Fonts />
        <App />
      </ChakraProvider>
    </>
  </React.StrictMode>
)
