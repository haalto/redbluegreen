import React from 'react'
import './Notification.css'

const Notification = ({ play } ) => {
  return (
    <div className="notification">
      <header className="message-box">
        In this game you need to guess the color in rgb value from three options.  
      </header>
      <button 
        className="play-button"
        onClick={()=>play()}>
          Play
      </button>
    </div>
  )
}

export default Notification