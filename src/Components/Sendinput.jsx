import React from 'react'
import './Sendinput.css'
import SendIcon from '@mui/icons-material/Send';
const Sendinput = () => {
  return (
    <div className='C-sendmessage'> 
        <div className='S-inputfiled'>
            <input  type="text" placeholder='Write a mesaage'/>
            <button><SendIcon/></button>
        </div>
    </div>
  )
}

export default Sendinput