import React, { useEffect, useState } from 'react'
import './Otherusers.css'
import Otheruser from './Otheruser'
import axios from 'axios';
// import Usegetotheruser from '../Hooks/Usegetotheruser'

const Otherusers = () => {
  const [otherussers,setothersusers]=useState([])
  useEffect(()=>{
    const fetchusers=async()=>{
       try {
           axios.defaults.withCredentials =true;
           const res=await axios.get('http://localhost:8000/api/v1/user/')
           console.log(res.data)
           setothersusers(res.data)
       } catch (error) {
           console.log(error)
       }
    }
    fetchusers();
 },[])

  return (
    <div className=''>
      {
        otherussers.map((user)=>{
          return(
            <Otheruser  key={user._id} user={user} />
          )
        })
      }
    </div>
  )
}

export default Otherusers