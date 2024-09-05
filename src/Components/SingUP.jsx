import React ,{useState} from 'react'
import './Singup.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import{Route,Routes,useNavigate} from 'react-router-dom'


const SingUP = () => {
  let navigate=useNavigate()
  const [user, setUser]=useState({
    fullName:"",
    username:"",
    pasword:"",
    confirmPassword:"",
    gender:""
  })
  const handelCheckbox=(gender)=>{
    setUser({...user,gender})
  }
  const handlesChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const onsubmitHandler= async(e)=>{
    e.preventDefault();
    let res= await axios.post('http://localhost:8000/api/v1/user/register',user,{
      headers:{
        "Content-Type":'application/json'
      },
      withCredentials:true
    })
    console.log(res)
    if(res.data){
      navigate('/Login')
    }
    setUser({
      fullName:"",
      username:"",
      pasword:"",
      confirmPassword:"",
      gender:""
    })
  }
  return (
  <div className='C-body'>
 <div class="signup-container">
        <h2>Signup</h2>
        <form>
            <label for="fullname">Full Name</label>
            <input   type="text" name='fullName' placeholder="fullName"  value={user.fullName} onChange={handlesChange} />

            <label for="username">Username</label>
            <input   type="text" name='username'  placeholder="username"  value={user.username}  onChange={handlesChange} />

            <label for="password">Password</label>
            <input    type="password" name='pasword' placeholder="password" value={user.pasword}  onChange={handlesChange} />

            <label for="confirmPassword">Confirm Password</label>
            <input  type="password"  name='confirmPassword' placeholder="confirmPassword" value={user.confirmPassword}  onChange={handlesChange}  />

            <label for="gender">Gender</label>
            <div class="gender-options">
                <input   type="radio"  name="gender" value="male" checked={user.gender==="male"}  onChange={()=>handelCheckbox("male")} />
                <label for="male">Male</label>
                <input   type="radio" id="female" name="gender" value="female" checked={user.gender==="female"}  onChange={()=>handelCheckbox("female")} />
                <label for="female">Female</label>
            </div>
            <Link to='/Login' >If you have already account? Login</Link>
            <button onClick={onsubmitHandler}>Sign Up</button>
            </form>
            
    </div>


    </div>
  )
}

export default SingUP