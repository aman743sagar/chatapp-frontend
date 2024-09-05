import React from 'react'
import './Otherusers'

const Otheruser = (props) => {
  const user=props.user
  const selectedHandler = (_id) => {
    console.log(_id);
    localStorage.setItem('selectedUserId', _id);
  }
  return (
    <div className='MC-parents'>
        <div onClick={ ()=>selectedHandler(user)} className='avter'>
            <div id='C-mage'>
                <img id='C-image'  src={user.profilePhoto} alt="" />
            </div>
            <div id='C-user'>
                <p>{user.fullName}</p>
            </div>
        </div>
    </div>
  )
}

export default Otheruser