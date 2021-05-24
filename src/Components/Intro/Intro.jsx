import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'
function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 30,
      strings: ['React Developer', 'Automation Engineer', 'API Developer'],
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm </h2>
          <h1>Maha Raja</h1>
          <h3>
            Self-taught <span ref={textRef}> </span>
          </h3>
          
          
        </div>

        <a href='#about'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  )
}

export default Intro
