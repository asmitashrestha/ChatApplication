import { Button } from "@chakra-ui/react"
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Chats from "./Pages/Chats"
import Signup from "./Pages/Signup"

function App() {
  return (
    <>
      <div>
       
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/chats/:id' element/>
       </Routes>
       </div>
    </>
  )
}

export default App
