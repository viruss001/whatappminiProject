import React from 'react'
import { BsThreeDotsVertical, BsEmojiSmile, BsPaperclip, BsMic } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import { format } from 'date-fns'
import Showchats from './Showchats'
import { useEffect } from 'react'
const Chatwith = ({ selectedContact, setSelectedContact, message, setMessage, messages, setMessages }) => {



  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {       
        setSelectedContact(null)
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!message.trim() || !selectedContact) return

    const newMessage = {
      id: Date.now(),
      text: message,
      time: format(new Date(), 'HH:mm'),
      sender: 'me'
    }


    setMessages(prev => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), newMessage]
    }))
    setMessage('')
  }
  return (
    <>
    {/* chat header */}
      <div className="chat-header">
        <img src={selectedContact.avatar} alt={selectedContact.name} className="avatar" />
        <div className="chat-header-info">
          <div className="chat-contact-name">{selectedContact.name}</div>
          <div className="chat-status">online</div>
        </div>
        <div className="chat-header-icons">
          <BsThreeDotsVertical />
        </div>
      </div>
      {/* Showing All chats */}
      <Showchats messages={messages} selectedContact={selectedContact} />
      {/* send message */}
      <form className="chat-input" onSubmit={handleSendMessage}>
        <BsEmojiSmile className="chat-icon" />
        <BsPaperclip className="chat-icon" />
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value) }
        />
        {message.trim() ? (
          <button type="submit" className="send-button">
            <IoSend />
          </button>
        ) : (
          <BsMic className="chat-icon" />
        )}
      </form>
    </>
  )
}

export default Chatwith