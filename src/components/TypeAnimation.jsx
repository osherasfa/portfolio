import React from "react"

function TypeAnimation({ words, time, after }) {
  const [ currWord, setCurrWord ] = React.useState('Frontend')

  React.useEffect(() => {
    const toggleAnimation = (word, isRewind, counter) => {
      return new Promise(resolve => {
        const action = isRewind ? word.length - counter : counter;
        setCurrWord(word.slice(0, action));
        if (counter === 0 || counter === word.length) {
          resolve("1");
        } else {
          setTimeout(() => toggleAnimation(word, isRewind, counter + 1).then(resolve), 100)
        }
      })
    }
    
    const toggleWords = async () => {
      while (true) {
        for(const word of words){
          await new Promise(resolve => setTimeout(() => toggleAnimation(word, false, 1).then(resolve), 100))
          await new Promise(resolve => setTimeout(() => toggleAnimation(word, true, 1).then(resolve), time))
        }
      }
    }
    toggleWords()
  }, [])

  return (
    <span className='title'>
      <div><span className='animation'>{currWord}</span></div> <span>{after}</span>
    </span>
  )
}

export default TypeAnimation