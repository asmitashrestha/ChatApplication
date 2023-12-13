import React from 'react';
import {BsFillSunFill} from 'react-icons/bs'
import Container from '../tour/Container';
import { Link } from 'react-router-dom';
import { useAuth,useTheme } from '../../hooks/index';
import { FaFacebookMessenger } from "react-icons/fa";

export default function Navbar() {
    const {toggleTheme}=useTheme()
    const {authInfo,handleLogout}=useAuth()
    const {isLoggedIn}=authInfo

  return <div className="bg-secondary shadow-sm shadow-gray-500 ">
    <Container className=" p-2">
        <div className="flex justify-between items-center ">
             <Link to='/' className='relative left-1 text-3xl  text-white  font-bold
              no-underline justify-items-center hover:text-white hover:bg-blue-700 hover:rounded hover:p-1 h-10'>
                TravelHarbor
            </Link>
            <div className="msg-login">
                <Link to="/loginchat" className='messenger-btn text-white text-3xl rounded  hover:text-blue-700 '><FaFacebookMessenger /></Link>
            </div>

            <ul className='flex items-center space-x-4'>
                <li>
                    <button onClick={toggleTheme} className='dark:bg-white bg-dark-subtle p-1 rounded'>
                        <BsFillSunFill className='text-secondary' size={24} />
                    </button>
                </li>
                
                <li>
                { isLoggedIn?(<button onClick={handleLogout} className='text-white font-semibold text-xl hover:bg-blue-700 ml-4 rounded p-3'>
                         Log Out
                    </button> ) 
                  : <Link className='text-white font-semibold text-xl
                   hover:bg-blue-700 m-2  rounded p-3' to='/auth/signin '>
                        Login
                    </Link>}
                </li>
                <Link className='text-white font-semibold text-xl relative right-4 rounded p-3 hover:bg-blue-700 ' to='/postjob'>
                        Post a trip
                </Link>
                
            </ul>

        </div>
    </Container>
  </div>
}