import React from 'react'
import './Color.css'

const Color = ({ rgb, correct }) => {
  
  return (
    <div 
      style={{backgroundColor: `rgb(${rgb.red},${rgb.green},${rgb.blue})`}}
      className="color-box"
    >
    </div>
  )
}

export default Color