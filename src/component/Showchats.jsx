import React from 'react'

const Showchats = ({messages,selectedContact}) => {
  return (
    <div className="chat-messages">
                  {messages[selectedContact.id]?.map(msg => (
                    <div key={msg.id} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                      <div className="message-content">
                        {msg.text}
                        <span className="message-time">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
  )
}

export default Showchats