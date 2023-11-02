import  { useEffect, useState } from 'react'
import axios from 'axios'

const Chats = () => {
  const[chat,setChat] = useState([])
  
   

const fetchData = async () => {
  try {
    const response = await fetch('/chats', {
      method: 'GET', // This is the default, so you can omit it
    });

    console.log('Response Status:', response.status);
    console.log('Response Text:', await response.text());

    if (!response.ok) {
      throw new Error('API not found');
    }

    const data = await response.json();
    setChat(data)
  } catch (error) {
    console.log(error.message);
  }
}

useEffect(() => {
  fetchData();
}, []);


  return (
    <div>
      
      {chat.map((chts)=>(
        <div> {chts.chatName}</div>
      ))}
    </div>
  )
}

export default Chats
