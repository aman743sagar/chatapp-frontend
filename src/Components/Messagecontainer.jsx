import React from 'react'
import './Messagecontainer.css'
import Sendinput from './Sendinput'
import Mesaages from './Mesaages'

const Messagecontainer = () => {
  return (
    <div className='M-message'>
      <div className='M-avter'>
            <div id='M-mage'>
                <img id='C-image'  src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
            </div>
            <div id='M-user'>
                <p>Aman</p>
            </div>
        </div>
        
        <Mesaages/>
        <Sendinput/>
        
    </div>
  )
}

export default Messagecontainer