import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Usegetotheruser = () => {
  const [otherussers,setothersusers]=useState([])
  useEffect(()=>{
     const fetchusers=async()=>{
        try {
            axios.defaults.withCredentials =true;
            const res=await axios.get('http://localhost:8000/api/v1/user/')
            console.log(res)
            setothersusers(res.data)
        } catch (error) {
            console.log(error)
        }
     }
     fetchusers();
  },[])
}

export default Usegetotheruser