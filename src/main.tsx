import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.tsx"
import { ChakraProvider } from '@chakra-ui/react'
import sandboxTheme from './theming/themeSandbox.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      {/* https://reactrouter.com/en/main/start/tutorial */}
      <ChakraProvider theme={sandboxTheme}>
        <App />
      </ChakraProvider>
    </>
  </React.StrictMode>
)
