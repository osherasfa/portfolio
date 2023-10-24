import React from 'react'

function TypeAnimation({ words, time, after }) {
  const [ word, setWord ] = React.useState(words[0])

  const toggleWords = async () => {
    for(const word of words){
      const res = await toggleWord(word)
      console.log(word)
      console.log(res)
    }
  }
  
  const toggleWord = word => {
    toggleAnimation(word, true, 1)
    setTimeout(() => {
      toggleAnimation(word, false, 1)
    }, time)
    return new Promise((resolve) => setTimeout(() => resolve('1'), 2000))
  }

  const toggleAnimation = (word, isRewind, counter) => {
    const action = isRewind ? word.length - counter : counter
    
    setWord(word.slice(0, action))
    if(counter === 0 || counter === word.length)
      return
    
    setTimeout(() => toggleAnimation(word, isRewind, counter + 1), 100)
  }

  return (
    <span className='title' onClick={toggleWords}>{`${word} ${after}`}</span>
  )
}

export default TypeAnimation