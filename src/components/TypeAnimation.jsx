import React from 'react'

function TypeAnimation({ words, time, after }) {
  const [ currWord, setCurrWord ] = React.useState(words[0])
  const toggleWord = () => setCurrWord()
  return (
    <span className='title' onClick={toggleWord}>{`${currWord} ${after}`}</span>
  )
}

export default TypeAnimation