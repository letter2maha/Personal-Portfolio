import React from 'react'
import './menu.scss'

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul
        onClick={() => {
          setMenuOpen(false)
        }}
      >
        <li>
          <a href='#intro'>Home</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#qualifications'>Qualifications</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
