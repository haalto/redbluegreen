import React from 'react'
import './Navbar.css'

const Navbar = ({ score, topScore, showScores }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-red">
          red
        </span>
        <span className="logo-green">
          green
        </span>
        <span className="logo-blue">
          blue
        </span>
      </div>
      { 
        showScores 
        ?
        <div className="scores">
          <div className="top-score">
            top score: {topScore}
          </div>
          <div className="score">
            score: {score}
          </div>
        </div>
        :''
      } 
    </nav>
  )
}

export default Navbar