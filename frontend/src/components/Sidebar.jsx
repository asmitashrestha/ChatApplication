import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { ChatState } from "../Context/ChatProvider";

const Sidebar = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingChat, setLoadingChat] = useState()
  const { user } = ChatState()
  return (
    <div className='boxcontainer '>
      <div className="search-bar ml-11 mt-5">
      <button className='flex'>
        <input className='inp-des  outline-none ' type="text" placeholder="Search chats" />
        <div className="search-box">
          <FaSearch className='search'/>
        </div>
        
      </button>
    </div>
    <div className="userdetail">
      <div className="title-chats justify-center text-center text-2xl ">
        <p >Chit-Chat</p>
      </div>

      <div className="tit-chat flex space-between">
        <div className="tit-left mr-8">
        <IoMdNotifications className='h-8 w-7' />
        </div>
        <div className="tit-left">
        <img src={user.img} name={user.name} alt="user profile" height='30px' width='35px' className='img-user' />
        </div>
      </div>
    </div>
    <hr className='line'/>
    </div>
  )
}

export default Sidebar
