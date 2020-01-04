import React from 'react'
import './Answers.css'

const Answers = ({ colors, handleClick }) => {
  
  const renderAnswers = () => {
    const answers = colors.map(color =>  <div 
                                            key={Math.random()}
                                            onClick={() => handleClick(color)}
                                            className="answer"
                                         >
                                          rgb: ({color.red}, {color.green}, {color.blue})
                                        </div>)
    return answers
  }
  
  return (
    <div className="answers">
      {renderAnswers()}
    </div>
  )
}

export default Answers