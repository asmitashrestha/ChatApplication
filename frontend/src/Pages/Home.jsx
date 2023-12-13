import { useNavigate } from "react-router-dom";
// import Login from "../components/chatbox/Login";
// import Navbar from '../components/user/Navbar'
import Homepage from '../components/tour/Homepage'
import Availablepackage from '../components/tour/Availablepackage'
import Aboutexperience from './Aboutexperience'
import Customergallery from './Customergallery'
import Footer from './Footer'
const Home = () => {
 
  
  return (
   <>
     <Homepage/>
      <Availablepackage/>
      <Aboutexperience/>
      <Customergallery/>
      <Footer/>
   {/* <Login/> */}
   </>
  
      
  )
}

export default Home;



