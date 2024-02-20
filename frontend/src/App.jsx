import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Chats from "./Pages/Chats"
import Signups from "../src/components/chatbox/Signup"
import ChatProvider from './Context/ChatProvider'
import Profile from './Pages/Profile'
import Login from './components/chatbox/Login'
import SignIn from "./components/auth/SignIn";
import Signup from "./components/auth/Signup";
import Navbar from "./components/user/Navbar";
import EmailVerification from "./components/auth/EmailVerification";
import ForgetPassword from "./components/auth/ForgetPassword";
import ConfirmPassword from "./components/auth/ConfirmPassword";
import NotFound from "./components/tour/NotFound";

function App() {
  return (
    <div className = "App">
            <Navbar />
            <ChatProvider>
                <Routes >
                    <Route path = '/' element = { <Home /> }/> 
                    <Route path = '/auth/signin' element = { < SignIn /> }/> 
                    <Route path = '/auth/signup' element = { < Signup /> }/> 
                    <Route path = '/auth/verification' element = { < EmailVerification /> }/> 
                    <Route path = '/auth/forget-password' element = { < ForgetPassword /> }/> 
                    <Route path = '/auth/reset-password' element = { < ConfirmPassword /> }/>
                    <Route path = '*' element = { <NotFound /> }/>
          <Route path='/loginchat' element={<Login/>}/>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/signupchat' element={<Signups/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/chats/:id' element/>
       </Routes>
       <Signups/>
       </ChatProvider>
       </div>

      
      
  )
}

export default App
