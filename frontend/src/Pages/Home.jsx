import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { useEffect } from "react";

const Home = () => {
  // const navigate = useNavigate()
  // useEffect(()=>{
  //   const user = JSON.parse(localStorage.getItem("userInfo"))
  //   if(user){
  //     navigate('/chats')
  //   }
  // },[navigate])
  
  return (
   <>
   <Login/>
   </>
  
      
  )
}

export default Home;



