import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();


  return (
    <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3'>
        <img className='logo-text' src= 'src/assets/Instagram_logo.svg (1).png' alt=''/>
        <div className='sidebar'><i className="bi bi-house-door"></i>Home</div>
        <div className='sidebar'><i className="bi bi-search"></i>Search</div>
        <div className='sidebar'><i className="bi bi-compass"></i>Explore</div>
        <div className='sidebar'><i className="bi bi-play-btn"></i>Reels</div>
        <div className='sidebar'><i className="bi bi-chat"></i>Messages</div>
        <div className='sidebar'><i className="bi bi-heart"></i>Notification</div>
        <div className='sidebar'><i className="bi bi-plus-square"></i>Create</div>
        <div className='sidebar' onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div className='sidebar'><i className="bi bi-threads"></i>Threads</div>
        <div className='sidebar'><i className="bi bi-list"></i>More</div>
    </div>
    </div>
    
  )
}

export default Sidebar