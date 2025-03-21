import { useState } from 'react'
import './App.css'
import Sidebar from './component/Sidebar'
import Chats from './component/Chats'


const contacts = [
  { id: 1, name: 'Suraj Tiwari', avatar: 'https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/cd2c4d203255ce1480df28509bd2850a?_a=AQAEuiZ', lastMessage: 'Hey, how are you?', time: '10:30 AM' },
  { id: 2, name: 'Satyam Tiwari', avatar: 'https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/cd2c4d203255ce1480df28509bd2850a?_a=AQAEuiZ', lastMessage: 'Meeting at 3 PM', time: '9:45 AM' },
  { id: 3, name: 'Aastha Tiwari', avatar: 'https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/cd2c4d203255ce1480df28509bd2850a?_a=AQAEuiZ', lastMessage: 'Thanks!', time: 'Yesterday' },
  { id: 4, name: 'Anshuman Shukla', avatar: 'https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/cd2c4d203255ce1480df28509bd2850a?_a=AQAEuiZ', lastMessage: 'See you tomorrow', time: 'Yesterday' },
  { id: 5, name: 'Wish', avatar: 'https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/cd2c4d203255ce1480df28509bd2850a?_a=AQAEuiZ', lastMessage: 'Great idea!', time: 'Tuesday' }
]

function App() {
  const [selectedContact, setSelectedContact] = useState(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState({})

 

  return (
    <div className="whatsapp-container">
     
     <Sidebar selectedContact={selectedContact} setSelectedContact={setSelectedContact} contacts ={contacts}/>
      <Chats selectedContact={selectedContact} setSelectedContact={setSelectedContact} message={message} setMessage={setMessage} messages={messages} setMessages={setMessages}/>
    </div>
  )
}

export default App