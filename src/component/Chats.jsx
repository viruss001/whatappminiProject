import React from 'react'
import Chatwith from './Chatwith'
import Home from './Home'


const Chats = ({ selectedContact, setSelectedContact, message, setMessage, messages, setMessages }) => {

  return (
    <div className="chat">
      {selectedContact ? (
        <Chatwith selectedContact={selectedContact} setSelectedContact={setSelectedContact} message={message} setMessage={setMessage} messages={messages} setMessages={setMessages} />
      ) : (
        <Home />
      )}
    </div>
  )
}

export default Chats