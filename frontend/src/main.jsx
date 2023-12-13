import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import ContextProviders from './Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
       <BrowserRouter>
     <ChakraProvider>
   <ContextProviders>
    <App />
   </ContextProviders>
      
      
     </ChakraProvider>
    </BrowserRouter>
    
   
  </React.StrictMode>,
)
