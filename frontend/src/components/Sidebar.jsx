import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from "@chakra-ui/tooltip";
import axios from "axios";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { IoMdNotifications } from "react-icons/io";
import { ChatState } from "../Context/ChatProvider";
import { useDisclosure } from "@chakra-ui/hooks";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Chatloading from './Chatloading';

const Sidebar = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingChat, setLoadingChat] = useState()
  const { user } = ChatState()
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate()

  const logoutHandler = ()=>{
    localStorage.removeItem("userInfo")
    navigate('/')
  }
  const showuserInfo =()=>{
    navigate('/profile')
  }

  const handleSearch = async () => {
    if (!search) {
      toast.warning("Please enter something!") 
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast.error("Failed to Load the Results") 
    }
  };

  return (
    <div className='boxcontainer '>
      {/* <div className="search-bar ml-11 mt-5">
      <button className='flex'>
        <input className='inp-des  outline-none ' type="text" placeholder="Search chats" />
        <div className="search-box">
          <FaSearch className='search'/>
        </div>
        
      </button>
    </div> */}

<Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>

    <div className="userdetail">
      <div className="title-chats justify-center text-center text-2xl ">
        <p >Chit-Chat</p>
      </div>

      <div className="tit-chat flex space-between">
        <div className="tit-left mr-8">
        <IoMdNotifications className='h-8 w-7' />
        </div>
        <div className="tit-right flex">
          <button onClick={showuserInfo}>
            <img src={user.img} name={user.name} alt="user profile" height='30px' width='41px' className='img-user mr-2' />
       
          </button>
        
        </div>
        <button className='logout ml-4' onClick={logoutHandler}>Logout
        </button>
      </div>
    </div>
    
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box d="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <Chatloading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    <hr className='line'/>
    </div>
  )
}

export default Sidebar
