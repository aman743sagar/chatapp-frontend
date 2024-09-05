import React from 'react'
import './Message.css'

const Message = () => {
  return (
    <div className='C-messages'>
       <div class="chat-container">
        <div class="chat-message user-message">
            <p>Hello! How can I help you today?</p>
            <p>Hello! How can I help you today?</p>
            <p>Hello! How can I help you today?</p>
        </div>
        <div class="chat-message bot-message">
            <p>Hi! I have a question about your product.</p>
            <p>Hi! I have a question about your product.</p>
            <p>Hi! I have a question about your product.</p>
        </div>
    </div>

    </div>
  )
}

export default Message