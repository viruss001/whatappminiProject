import React from 'react'
import { BsThreeDotsVertical} from 'react-icons/bs'
const ProfileHeader = () => {
  return (
    <div className="sidebar-header">
              <img src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/cd2c4d203255ce1480df28509bd2850a?_a=AQAEuiZ" alt="Profile" className="avatar" />
              <div className="header-icons">
                <BsThreeDotsVertical />
              </div>
            </div>
  )
}

export default ProfileHeader