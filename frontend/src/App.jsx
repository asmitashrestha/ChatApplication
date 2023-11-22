import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Chats from "./Pages/Chats"
import Signup from "../src/components/Signup"
import ChatProvider from './Context/ChatProvider'
import Profile from './Pages/Profile'


function App() {
  return (
  
       <ChatProvider>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/chats/:id' element/>
       </Routes>
       </ChatProvider>
      
      
  )
}

export default App
