import React from 'react'
import ProfileHeader from './ProfileHeader'
const Sidebar = ({ selectedContact, setSelectedContact, contacts }) => {
    return (
        <div className="sidebar">
            <ProfileHeader />
            <div className="contacts-list">
                {contacts.map(contact => (
                    <div
                        key={contact.id}
                        className={`contact-item ${selectedContact?.id === contact.id ? 'selected' : ''}`}
                        onClick={() => setSelectedContact(contact)}
                    >
                        <img src={contact.avatar} alt={contact.name} className="avatar" />
                        <div className="contact-info">
                            <div className="contact-name">{contact.name}</div>
                            <div className="last-message">{contact.lastMessage}</div>
                        </div>
                        <div className="contact-time">{contact.time}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar