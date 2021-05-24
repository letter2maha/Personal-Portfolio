import Header from './Components/Header/Header'
import Intro from './Components/Intro/Intro'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Menu from './Components/Menu/Menu'
import Education from './Components/Education/Education'
import './app.scss'
import React, { useState } from 'react'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='app'>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <About/>
        <Skills/>
        <Education/>
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
