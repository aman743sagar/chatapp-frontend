import React from 'react'
import './Home.css'
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
import Chat from '../IMAGE/—Pngtree—3d like heart blue chat_6215890.png'
import { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import Messagecontainer from '../Components/Messagecontainer';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
      let data=localStorage.getItem('UserData')
      console.log(data,"dataaaaaaaa");
      // let newData=  JSON.parse(data)
      // console.log(newData,"newData");
      setData(data)

  }, []);

     let remove=()=>{
      localStorage.clear('UserData')
      setData(null)


     }
  return (
    <div className='C-pare'>
    {
      data?(<>
     <div className='message-slide'>
         <div className='serach-c-box'>
             <div><Sidebar/></div>
             <div><Messagecontainer/></div>
         </div>
         <button onClick={remove}>Logout</button>
     </div>
      </>
      ):
      (<>
      <div className='C-parents'>
        <div className='C-Logo'>
          <div className='C-heading'><h1>Let start chat with your friend</h1></div>
          <div className='C-image'><img src={Chat} id='C-image' /></div>
        </div>
             <div className='C-boutton'>
             <Link to='/Login' id='c-singup'><div className='C-singup'>Login</div> </Link>
              <div id='C-or'>------------------OR------------------</div>
              <Link to='/SingUP' id='c-singup'> <div className='C-singup'>Singup</div></Link>
             </div>
       </div>
      </>)
    }
    </div>
  )
}

export default Home


