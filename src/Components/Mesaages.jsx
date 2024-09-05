import React, { useEffect, useState } from 'react'
import './Messages.css'
import Message from './Message'
import axios from 'axios'
import{useParams} from 'react-router-dom'



const Mesaages = () => {
  const { selectedId } = useParams();
  const [messages,setMessages]=useState([])
  useEffect(()=>{
    const fetchMessages = async () => {
      try {
        const userId = localStorage.getItem('selectedUserId');
        if (userId) {
          axios.defaults.withCredentials = true;
          const res = await axios.get(`http://localhost:8000/api/v1/message/${userId}`);
          console.log(res.data, "Fetched messages");
          setMessages(res.data);
        } else {
          console.error("No user ID available to fetch messages.");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  },[])
  return (
    <div className='C-messagesd'>
       <Message/>
       <Message/>
       <Message/>
       <Message/>
       <Message/>
       <Message/>
       <Message/>
       <Message/>
      
    </div>
  )
}

export default Mesaages