import React, { useState } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar'
import Color from '../Color/Color'
import Answers from '../Answers/Answers'
import Notification from '../Notification/Notification'

const App = () => {

  const [colors, setColors] = useState(null)
  const [renderColor, setRenderColor] = useState(null)
  const [showGame, setShowGame] = useState(false)
  const [showNotification, setShowNotification] = useState(true)
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)

  const generateColors = () => {
    
    const initialColors = [{}, {}, {}]

    const generatedColors = initialColors.map(i => {
      i.red = Math.floor(Math.random() * 256)
      i.green = Math.floor(Math.random() * 256)
      i.blue = Math.floor(Math.random() * 256)
      i.correct = false
      return i
    })

    const randomIndex = Math.floor(Math.random() * 3)
    generatedColors[randomIndex].correct = true

    setColors(generatedColors)
    setRenderColor(generatedColors[randomIndex])
    setShowGame(true)
    setShowNotification(false)
  }

  const handleButtonClick = ( color ) => {
    
    if (color.correct) {      
      
      setScore(score+1)
      generateColors()

    } else {

      if (score > topScore) {
        setTopScore(score)
      }
      
      setScore(0)
      generateColors()

    }
  }

  return (
    <div className="App">
      <Navbar 
        score={score} 
        topScore={topScore} 
        showScores={showGame}
      />
      {showNotification 
        ? <Notification play={generateColors}/> 
        : ''
      }      
      {
        showGame 
          ? <div>
              <Color 
                rgb={{ red: renderColor.red,
                       green: renderColor.green,
                       blue: renderColor.blue }}
              />
              <Answers 
                colors={colors}
                handleClick={handleButtonClick}
              />
            </div>
          : ''
      }

    </div>
  )
}

export default App;