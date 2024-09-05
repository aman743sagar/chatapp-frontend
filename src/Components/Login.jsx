import React ,{useState} from 'react'
import './Login.css'
import{Route,Routes,json,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {setAuthuser} from '../REDUX/UserSlice';
const Login = () => {
  let navigate=  useNavigate()
  const [user, setUser] = useState({
    username: '',
    pasword: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/login',user ,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      console.log(response.data,"rr");
             localStorage.setItem('UserData', response.data.token);
            // dispatch(setAuthuser(response.data))
            if(response.data){
              navigate('/')
            }
            setUser({
              username:"",
              pasword:"",
            })
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  return (
    <div>


<div class="login-container">
        <h2>Login</h2>
        <form action="#" method="post">
            <label for="username">Username</label>
            <input type="text" id="username" name="username"value={user.username} onChange={handleChange} required/>
            <label for="password">Password</label>
            <input type="password" id="password" name="pasword" value={user.pasword} onChange={handleChange} required/>
            <Link to='/SingUP' id='c-singup'>If don't have account?Singup</Link>
            <button onClick={handleSubmit}>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login
///login file